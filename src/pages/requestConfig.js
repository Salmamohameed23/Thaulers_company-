export const requestCategories = {
  scooters: {
    slug: "electric-scooters",
    name: "Electric Scooters",
    image: "/images/bikes/scooter-hero.webp",
    description:
      "Tell us the scooter specifications, quantity and customization you need.",
    steps: [
      {
        title: "Product Requirements",
        fields: [
          {
            key: "scooterType",
            label: "Scooter Type",
            type: "select",
            options: [
              "City",
              "Delivery",
              "Utility",
              "High Performance",
              "Classic",
              "Adventure",
            ],
          },
          {
            key: "quantity",
            label: "Quantity",
            type: "text",
            placeholder: "Example: 100 units",
          },
          {
            key: "motorPower",
            label: "Motor Power",
            type: "text",
            placeholder: "Example: 2000W",
          },
          {
            key: "batteryType",
            label: "Battery Type",
            type: "select",
            options: ["Lithium-ion", "Lead-acid", "No preference"],
          },
          {
            key: "batterySpec",
            label: "Battery Voltage / Capacity",
            type: "text",
            placeholder: "Example: 72V 35Ah",
          },
          {
            key: "speed",
            label: "Required Speed",
            type: "text",
            placeholder: "Example: 60 km/h",
          },
          {
            key: "range",
            label: "Required Range",
            type: "text",
            placeholder: "Example: 80 km",
          },
        ],
      },
      {
        title: "Customization",
        fields: [
          {
            key: "branding",
            label: "Branding / OEM",
            type: "select",
            options: ["Own Brand / OEM", "Factory Brand", "No preference"],
          },
          {
            key: "color",
            label: "Preferred Color",
            type: "text",
            placeholder: "Example: Black / Red",
          },
          {
            key: "packaging",
            label: "Packaging Type",
            type: "select",
            options: [
              "Standard Export Carton",
              "Custom Printed Carton",
              "CKD / SKD",
            ],
          },
          {
            key: "accessories",
            label: "Accessories Needed",
            type: "text",
            placeholder: "Rear box, windshield, rack...",
          },
        ],
      },
      {
        title: "Shipping & Commercial",
        fields: [
          {
            key: "destinationCountry",
            label: "Destination Country",
            type: "text",
            placeholder: "Country",
          },
          {
            key: "destinationCity",
            label: "Destination City / Port",
            type: "text",
            placeholder: "City or port",
          },
          {
            key: "incoterm",
            label: "Preferred Incoterm",
            type: "select",
            options: ["EXW", "FOB", "CIF", "DDP", "Not sure"],
          },
          {
            key: "targetDate",
            label: "Target Order Date",
            type: "text",
            placeholder: "Month / Year",
          },
          {
            key: "budget",
            label: "Target Budget",
            type: "text",
            placeholder: "Optional",
          },
        ],
      },
      {
        title: "Detailed Request & References",
        description:
          "Write exactly what you need and attach reference images so our team can understand the request clearly.",
        fields: [
          {
            key: "detailedNotes",
            label: "Detailed Request Notes",
            type: "textarea",
            placeholder:
              "Describe exactly what you need: preferred model, specifications, special functions, colors, accessories, quality level, packaging, target price, or any other important details...",
            rows: 9,
          },
          {
            key: "referenceImages",
            label: "Upload Reference Images",
            type: "file",
            accept: "image/*",
            multiple: true,
            help: "Upload product photos, screenshots, drawings, or other visual references.",
          },
        ],
      },
      {
        title: "Contact Details",
        fields: [
          {
            key: "fullName",
            label: "Full Name",
            type: "text",
            placeholder: "Your name",
          },
          {
            key: "companyName",
            label: "Company Name",
            type: "text",
            placeholder: "Your company",
          },
          {
            key: "phone",
            label: "Phone / WhatsApp",
            type: "text",
            placeholder: "+00 000 000 000",
          },
          {
            key: "email",
            label: "Email Address",
            type: "email",
            placeholder: "name@example.com",
          },
        ],
      },
    ],
  },

  kitchen: {
    slug: "kitchenware",
    name: "Kitchenware",
    image: "/images/kitchenware/categories/hero.webp",
    description:
      "Share the product, material, packaging and private-label requirements you need.",
    steps: [
      {
        title: "Product Requirements",
        fields: [
          {
            key: "productCategory",
            label: "Product Category",
            type: "select",
            options: [
              "Cookware",
              "Kitchen Tools",
              "Food Storage",
              "Bakeware",
              "Tableware",
              "Small Appliances",
              "Other",
            ],
          },
          {
            key: "productName",
            label: "Product Name / Model",
            type: "text",
            placeholder: "Example: 24 cm frying pan",
          },
          {
            key: "material",
            label: "Material",
            type: "text",
            placeholder: "Stainless steel / aluminum / silicone...",
          },
          {
            key: "quantity",
            label: "Quantity",
            type: "text",
            placeholder: "Example: 5,000 pcs",
          },
          {
            key: "size",
            label: "Dimensions / Capacity",
            type: "text",
            placeholder: "Size, volume or specification",
          },
        ],
      },
      {
        title: "Branding & Packaging",
        fields: [
          {
            key: "privateLabel",
            label: "Private Label",
            type: "select",
            options: ["Yes", "No", "Not sure"],
          },
          {
            key: "logoMethod",
            label: "Logo Method",
            type: "text",
            placeholder: "Laser / print / embossing...",
          },
          {
            key: "packaging",
            label: "Packaging",
            type: "select",
            options: [
              "Color Box",
              "Brown Box",
              "Display Box",
              "Bulk",
              "Custom",
            ],
          },
          {
            key: "targetMarket",
            label: "Target Market",
            type: "text",
            placeholder: "Country / retailer",
          },
        ],
      },
      {
        title: "Commercial & Shipping",
        fields: [
          {
            key: "targetPrice",
            label: "Target Price",
            type: "text",
            placeholder: "Optional target FOB price",
          },
          {
            key: "destinationCountry",
            label: "Destination Country",
            type: "text",
            placeholder: "Country",
          },
          {
            key: "destinationCity",
            label: "Destination City / Port",
            type: "text",
            placeholder: "City or port",
          },
          {
            key: "incoterm",
            label: "Preferred Incoterm",
            type: "select",
            options: ["EXW", "FOB", "CIF", "DDP", "Not sure"],
          },
          {
            key: "deliveryDate",
            label: "Required Delivery Date",
            type: "text",
            placeholder: "Month / Year",
          },
        ],
      },
      {
        title: "Detailed Request & References",
        description:
          "Write exactly what you need and attach reference images so our team can understand the request clearly.",
        fields: [
          {
            key: "detailedNotes",
            label: "Detailed Request Notes",
            type: "textarea",
            placeholder:
              "Describe exactly what you need: product shape, material, size, thickness, colors, packaging, logo position, quality, target price, or any other special requirement...",
            rows: 9,
          },
          {
            key: "referenceImages",
            label: "Upload Reference Images",
            type: "file",
            accept: "image/*",
            multiple: true,
            help: "Upload product photos, screenshots, drawings, or other visual references.",
          },
        ],
      },
      {
        title: "Contact Details",
        fields: [
          {
            key: "fullName",
            label: "Full Name",
            type: "text",
            placeholder: "Your name",
          },
          {
            key: "companyName",
            label: "Company Name",
            type: "text",
            placeholder: "Your company",
          },
          {
            key: "phone",
            label: "Phone / WhatsApp",
            type: "text",
            placeholder: "+00 000 000 000",
          },
          {
            key: "email",
            label: "Email Address",
            type: "email",
            placeholder: "name@example.com",
          },
        ],
      },
    ],
  },

  hotel: {
    slug: "hotel-supplies",
    name: "Hotel Supplies",
    image: "/images/Hotelsupply/hero-hotel-supplies.webp",
    description:
      "Build a complete hotel-supplies request based on project size, rooms and required categories.",
    steps: [
      {
        title: "Project Information",
        fields: [
          {
            key: "projectType",
            label: "Project Type",
            type: "select",
            options: [
              "Hotel",
              "Resort",
              "Serviced Apartment",
              "Hospitality Villa",
              "Other",
            ],
          },
          {
            key: "projectName",
            label: "Project Name",
            type: "text",
            placeholder: "Optional",
          },
          {
            key: "rooms",
            label: "Number of Rooms",
            type: "text",
            placeholder: "Example: 180 rooms",
          },
          {
            key: "projectLocation",
            label: "Project Location",
            type: "text",
            placeholder: "Country / City",
          },
          {
            key: "openingDate",
            label: "Opening / Renovation Date",
            type: "text",
            placeholder: "Month / Year",
          },
        ],
      },
      {
        title: "Required Supplies",
        fields: [
          {
            key: "categories",
            label: "Product Categories",
            type: "textarea",
            placeholder:
              "Bedroom linen, towels, amenities, bathroom items, restaurant supplies...",
            rows: 5,
          },
          {
            key: "quantity",
            label: "Estimated Quantity",
            type: "text",
            placeholder: "Rooms / sets / pcs",
          },
          {
            key: "quality",
            label: "Quality Level",
            type: "select",
            options: ["Economy", "Mid-range", "Premium", "Luxury"],
          },
          {
            key: "branding",
            label: "Branding Required",
            type: "select",
            options: ["Yes", "No", "Some items"],
          },
        ],
      },
      {
        title: "Commercial & Logistics",
        fields: [
          {
            key: "budget",
            label: "Budget Range",
            type: "text",
            placeholder: "Optional",
          },
          {
            key: "destinationCountry",
            label: "Destination Country",
            type: "text",
            placeholder: "Country",
          },
          {
            key: "destinationCity",
            label: "Destination City / Port",
            type: "text",
            placeholder: "City or port",
          },
          {
            key: "incoterm",
            label: "Preferred Incoterm",
            type: "select",
            options: ["EXW", "FOB", "CIF", "DDP", "Not sure"],
          },
          {
            key: "deliveryDate",
            label: "Required Delivery Date",
            type: "text",
            placeholder: "Month / Year",
          },
        ],
      },
      {
        title: "Detailed Request & References",
        description:
          "Write exactly what you need and attach reference images so our team can understand the request clearly.",
        fields: [
          {
            key: "detailedNotes",
            label: "Detailed Request Notes",
            type: "textarea",
            placeholder:
              "Describe the hotel project in detail: exact items, room standards, fabrics, colors, dimensions, brand style, packaging, required certificates, BOQ notes, or any other important requirement...",
            rows: 9,
          },
          {
            key: "referenceImages",
            label: "Upload Reference Images",
            type: "file",
            accept: "image/*",
            multiple: true,
            help: "Upload room references, product photos, BOQ screenshots, drawings, or other visual references.",
          },
        ],
      },
      {
        title: "Contact Details",
        fields: [
          {
            key: "fullName",
            label: "Full Name",
            type: "text",
            placeholder: "Your name",
          },
          {
            key: "companyName",
            label: "Company Name",
            type: "text",
            placeholder: "Your company",
          },
          {
            key: "phone",
            label: "Phone / WhatsApp",
            type: "text",
            placeholder: "+00 000 000 000",
          },
          {
            key: "email",
            label: "Email Address",
            type: "email",
            placeholder: "name@example.com",
          },
        ],
      },
    ],
  },

  tools: {
    slug: "tools-hardware",
    name: "Tools & Hardware",
    image: "/images/Toolsandhardware/hero.webp",
    description:
      "Send the technical specification, quantity, packaging and market requirements for the tools you need.",
    steps: [
      {
        title: "Tool Requirements",
        fields: [
          {
            key: "toolCategory",
            label: "Tool Category",
            type: "select",
            options: [
              "Hand Tools",
              "Power Tools",
              "Accessories",
              "Hardware",
              "Workshop Equipment",
              "Other",
            ],
          },
          {
            key: "productModel",
            label: "Product / Model",
            type: "text",
            placeholder: "Example: Cordless drill",
          },
          {
            key: "powerType",
            label: "Manual / Electric",
            type: "select",
            options: [
              "Manual",
              "Electric",
              "Battery Powered",
              "Pneumatic",
              "Other",
            ],
          },
          {
            key: "power",
            label: "Voltage / Power",
            type: "text",
            placeholder: "Example: 20V / 800W",
          },
          {
            key: "quantity",
            label: "Quantity",
            type: "text",
            placeholder: "Example: 1,000 pcs",
          },
        ],
      },
      {
        title: "Specification & Packaging",
        fields: [
          {
            key: "technical",
            label: "Technical Requirements",
            type: "textarea",
            placeholder: "Torque, size, materials, accessories, standards...",
            rows: 5,
          },
          {
            key: "packaging",
            label: "Packaging",
            type: "select",
            options: [
              "Color Box",
              "Blow Mold Case",
              "Carton",
              "Bulk",
              "Custom",
            ],
          },
          {
            key: "branding",
            label: "Branding / OEM",
            type: "select",
            options: ["Own Brand / OEM", "Factory Brand", "No preference"],
          },
          {
            key: "targetMarket",
            label: "Target Market",
            type: "text",
            placeholder: "Country / retailer",
          },
        ],
      },
      {
        title: "Commercial & Shipping",
        fields: [
          {
            key: "targetPrice",
            label: "Target Price",
            type: "text",
            placeholder: "Optional",
          },
          {
            key: "destinationCountry",
            label: "Destination Country",
            type: "text",
            placeholder: "Country",
          },
          {
            key: "destinationCity",
            label: "Destination City / Port",
            type: "text",
            placeholder: "City or port",
          },
          {
            key: "incoterm",
            label: "Preferred Incoterm",
            type: "select",
            options: ["EXW", "FOB", "CIF", "DDP", "Not sure"],
          },
          {
            key: "targetDate",
            label: "Target Order Date",
            type: "text",
            placeholder: "Month / Year",
          },
        ],
      },
      {
        title: "Detailed Request & References",
        description:
          "Write exactly what you need and attach reference images so our team can understand the request clearly.",
        fields: [
          {
            key: "detailedNotes",
            label: "Detailed Request Notes",
            type: "textarea",
            placeholder:
              "Describe exactly what you need: model, size, material, voltage, power, torque, accessories, packaging, branding, quality, target price, or any other technical requirement...",
            rows: 9,
          },
          {
            key: "referenceImages",
            label: "Upload Reference Images",
            type: "file",
            accept: "image/*",
            multiple: true,
            help: "Upload product photos, screenshots, drawings, or other visual references.",
          },
        ],
      },
      {
        title: "Contact Details",
        fields: [
          {
            key: "fullName",
            label: "Full Name",
            type: "text",
            placeholder: "Your name",
          },
          {
            key: "companyName",
            label: "Company Name",
            type: "text",
            placeholder: "Your company",
          },
          {
            key: "phone",
            label: "Phone / WhatsApp",
            type: "text",
            placeholder: "+00 000 000 000",
          },
          {
            key: "email",
            label: "Email Address",
            type: "email",
            placeholder: "name@example.com",
          },
        ],
      },
    ],
  },
};
