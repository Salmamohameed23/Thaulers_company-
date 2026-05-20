import axios from "axios";
import ClimateCache from "../models/ClimateCache.js";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const buildLocationKey = (latitude, longitude) => {
  return `${Number(latitude).toFixed(3)}_${Number(longitude).toFixed(3)}`;
};

export const searchLocations = async (req, res) => {
  try {
const { q, lang = "en" } = req.query;
const languageMap = {
  en: "en",
  ar: "ar",
  zh: "zh",
  de: "de",
  ru: "ru",
};
const apiLanguage = languageMap[lang] || "en";

    if (!q || q.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: "Search query must be at least 2 characters.",
      });
    }

    const response = await axios.get(
      "https://geocoding-api.open-meteo.com/v1/search",
      {
        params: {
          name: q,
          count: 10,
          language: apiLanguage,
          format: "json",
        },
      },
    );

    const results = (response.data.results || []).map((item) => ({
      id: item.id,
      name: item.name,
      country: item.country,
      countryCode: item.country_code,
      admin1: item.admin1,
      latitude: item.latitude,
      longitude: item.longitude,
      timezone: item.timezone,
      displayName: [item.name, item.admin1, item.country]
        .filter(Boolean)
        .join(", "),
    }));

    res.json({
      success: true,
      data: results,
    });
  } catch (error) {
    console.error("Location search error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to search locations.",
    });
  }
};

export const getMonthlyClimate = async (req, res) => {
  try {
    const { latitude, longitude, name, country, countryCode, timezone } =
      req.query;

    if (!latitude || !longitude) {
      return res.status(400).json({
        success: false,
        message: "Latitude and longitude are required.",
      });
    }

    const locationKey = buildLocationKey(latitude, longitude);

    const cached = await ClimateCache.findOne({ locationKey });

    if (cached) {
      return res.json({
        success: true,
        cached: true,
        data: cached,
      });
    }

    const currentYear = new Date().getFullYear();
    const startDate = `${currentYear - 1}-01-01`;
    const endDate = `${currentYear - 1}-12-31`;

    const response = await axios.get(
      "https://archive-api.open-meteo.com/v1/archive",
      {
        params: {
          latitude,
          longitude,
          start_date: startDate,
          end_date: endDate,
          daily: "temperature_2m_mean",
          timezone: timezone || "auto",
        },
      },
    );

    const dates = response.data.daily?.time || [];
    const temps = response.data.daily?.temperature_2m_mean || [];

    const monthly = months.map((month, index) => {
      const monthNumber = String(index + 1).padStart(2, "0");

      const monthTemps = dates
        .map((date, i) => ({
          date,
          temp: temps[i],
        }))
        .filter(
          (item) =>
            item.date.includes(`-${monthNumber}-`) && item.temp !== null,
        )
        .map((item) => item.temp);

      const average =
        monthTemps.length > 0
          ? Number(
              (
                monthTemps.reduce((sum, value) => sum + value, 0) /
                monthTemps.length
              ).toFixed(1),
            )
          : null;

      return {
        month,
        temp: average,
      };
    });

    const saved = await ClimateCache.create({
      locationKey,
      name: name || "",
      country: country || "",
      countryCode: countryCode || "",
      latitude: Number(latitude),
      longitude: Number(longitude),
      timezone: timezone || "auto",
      monthlyTemperatures: monthly,
      lastFetchedAt: new Date(),
    });

    res.json({
      success: true,
      cached: false,
      data: saved,
    });
  } catch (error) {
    console.error("Monthly climate error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch monthly climate data.",
    });
  }
};