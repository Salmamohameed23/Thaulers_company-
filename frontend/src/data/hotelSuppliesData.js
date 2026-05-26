import {
  Sparkles,
  ClipboardList,
  PackageCheck,
  ShieldCheck,
  Settings,
  Globe2,
  Box,
  Headphones,
} from "lucide-react";

export const hotelCategories = [
  {
    slug: "amenities-guest-room-items",
    title: "Amenities & Guest Room Items",
    desc: "High-quality toiletries, personal care items, and in-room accessories for a luxurious guest experience.",
    image: "/images/hotel-supplies/categories/amenities-guest-room-items.jpg",
    icon: Sparkles,
  },
  {
    slug: "front-office-stationery",
    title: "Front Office & Stationery",
    desc: "Professional front desk supplies, stationery, and paper products to support daily operations.",
    image: "/images/hotel-supplies/categories/front-office-stationery.jpg",
    icon: ClipboardList,
  },
  {
    slug: "packaging-branding",
    title: "Packaging & Branding",
    desc: "Custom packaging and branding solutions that reflect your hotel’s identity.",
    image: "/images/hotel-supplies/categories/packaging-branding.jpg",
    icon: PackageCheck,
  },
];

export const hotelProducts = [
  {
    slug: "premium-toiletries",
    categorySlug: "amenities-guest-room-items",
    title: "Premium Toiletries",
    type: "Featured Collection",
    desc: "Shampoos, conditioners, body wash, lotions and more.",
    image: "/images/hotel-supplies/collections/premium-toiletries.jpg",
    material: "Cosmetic-grade formula with bottle, tube or sachet options",
    finish: "Amber, white, black, transparent or custom bottle style",
    packaging: "Individual bottle packing / amenity set box / bulk carton",
    logo: "Private label, bottle label, silk print or sticker branding",
    application: "Hotels, resorts, serviced apartments and VIP guest rooms",
    setIncludes: "Shampoo, conditioner, shower gel, body lotion and soap",
  },
  {
    slug: "guest-room-essentials",
    categorySlug: "amenities-guest-room-items",
    title: "Guest Room Essentials",
    type: "Featured Collection",
    desc: "Slippers, combs, shower caps, vanity kits and other essentials.",
    image: "/images/hotel-supplies/collections/guest-room-essentials.jpg",
    material: "Textile, non-woven fabric, cotton, plastic and paper options",
    finish: "White, beige, black or customized hotel brand finish",
    packaging: "OPP bag, paper sleeve, kraft box or amenity kit packing",
    logo: "Printed logo, woven label, sticker label or box logo",
    application:
      "Guest rooms, bathrooms, suites and housekeeping replacement kits",
    setIncludes:
      "Slippers, comb, shower cap, dental kit, shaving kit and vanity kit",
  },
  {
    slug: "stationery-office-supplies",
    categorySlug: "front-office-stationery",
    title: "Stationery & Office Supplies",
    type: "Featured Collection",
    desc: "Notepads, pens, folders and paper products for front office.",
    image: "/images/hotel-supplies/collections/stationery-office-supplies.jpg",
    material:
      "Premium paper, card stock, PU leather, metal and plastic options",
    finish: "Matte paper, linen paper, leather texture or custom brand finish",
    packaging: "Bulk carton, paper band, sleeve or custom branded set",
    logo: "Full-color print, foil stamping, embossing or engraving",
    application:
      "Front office, meeting rooms, guest rooms and corporate hospitality",
    setIncludes:
      "Notepad, pen, folder, envelope, letterhead, key card and message slip",
  },
  {
    slug: "custom-packaging",
    categorySlug: "packaging-branding",
    title: "Custom Packaging",
    type: "Featured Collection",
    desc: "Branded boxes, bags and packaging that tell your brand story.",
    image: "/images/hotel-supplies/collections/custom-packaging.jpg",
    material:
      "Rigid paperboard, kraft paper, coated paper, fabric and eco-material options",
    finish: "Luxury black, white, gold, matte, kraft or custom PMS finish",
    packaging:
      "Retail box, shopping bag, amenity box, gift box and export carton",
    logo: "Hot stamping, UV, embossing, silk print or full-color print",
    application:
      "Hotel amenities, guest gifts, VIP kits, retail collections and brand presentation",
    setIncludes:
      "Boxes, bags, sleeves, labels, stickers and complete packaging sets",
  },
];

export const hotelPartnerItems = [
  {
    title: "Premium Quality",
    desc: "International standards and rigorous quality control.",
    icon: ShieldCheck,
  },
  {
    title: "Custom Solutions",
    desc: "Tailored amenities and packaging to match your brand.",
    icon: Settings,
  },
  {
    title: "Global Sourcing",
    desc: "Strong supply chain and trusted manufacturers.",
    icon: Globe2,
  },
  {
    title: "Project Expertise",
    desc: "Experienced in hotel projects of all sizes.",
    icon: Box,
  },
  {
    title: "Dedicated Support",
    desc: "Responsive support from inquiry to after-sales.",
    icon: Headphones,
  },
];
