import {
  Drill,
  Hammer,
  Wrench,
  ShieldCheck,
  Factory,
  PackageCheck,
  Truck,
  Settings,
} from "lucide-react";

export const toolsHardwareCategories = [
  {
    slug: "power-tools",
    title: "Power Tools",
    desc: "Electric drills, grinders, saws, polishers, and professional-grade power tools.",
    image: "/images/tools-hardware/categories/power-tools.png",
    icon: Drill,
  },
  {
    slug: "hand-tools",
    title: "Hand Tools",
    desc: "Reliable hand tools for construction, maintenance, and industrial use.",
    image: "/images/tools-hardware/categories/hand-tools.png",
    icon: Hammer,
  },
  {
    slug: "hardware-fasteners",
    title: "Hardware & Fasteners",
    desc: "Screws, bolts, hinges, brackets, locks, fittings, and general hardware items.",
    image: "/images/tools-hardware/categories/hardware-fasteners.png",
    icon: Wrench,
  },
];

export const toolsHardwareProducts = [
  {
    slug: "industrial-electric-drill",
    categorySlug: "power-tools",
    title: "Industrial Electric Drill",
    type: "Power Tool",
    desc: "Heavy-duty electric drill for construction, workshop, and industrial applications.",
    image: "/images/tools-hardware/products/industrial-electric-drill.png",
    material: "Copper motor, steel chuck, reinforced plastic housing",
    finish: "Industrial black / custom brand color",
    packaging: "Color box / carrying case / export carton",
    logo: "Private label, sticker, laser marking, or color box branding",
    application:
      "Construction, workshops, maintenance, and industrial projects",
    setIncludes:
      "Electric drill, drill bits option, handle, manual, packing box",
  },
  {
    slug: "angle-grinder",
    categorySlug: "power-tools",
    title: "Angle Grinder",
    type: "Power Tool",
    desc: "Compact grinding and cutting tool suitable for metal, stone, and workshop use.",
    image: "/images/tools-hardware/products/angle-grinder.png",
    material: "Copper motor, aluminum gear box, reinforced housing",
    finish: "Custom brand color available",
    packaging: "Color box / export carton",
    logo: "Private label and color box branding available",
    application: "Metal cutting, grinding, polishing, construction, and repair",
    setIncludes: "Angle grinder, guard, handle, wrench, manual",
  },
  {
    slug: "professional-hand-tool-set",
    categorySlug: "hand-tools",
    title: "Professional Hand Tool Set",
    type: "Hand Tool Set",
    desc: "Complete tool kit for household, maintenance, workshop, and industrial use.",
    image: "/images/tools-hardware/products/professional-hand-tool-set.png",
    material: "Carbon steel / chrome vanadium steel",
    finish: "Chrome plated / matte finish / custom color handle",
    packaging: "Blow case / tool box / export carton",
    logo: "Logo printing, sticker label, or molded brand mark",
    application: "Home repair, maintenance, construction, and hardware retail",
    setIncludes:
      "Screwdrivers, pliers, wrench, sockets, measuring tape, cutter",
  },
  {
    slug: "stainless-steel-fastener-set",
    categorySlug: "hardware-fasteners",
    title: "Stainless Steel Fastener Set",
    type: "Hardware & Fasteners",
    desc: "Assorted screws, bolts, nuts, washers, and fasteners for industrial supply.",
    image: "/images/tools-hardware/products/stainless-steel-fastener-set.png",
    material: "Stainless steel / carbon steel / galvanized steel",
    finish: "Polished, zinc plated, black oxide, or custom finish",
    packaging: "Plastic box / blister pack / bulk carton",
    logo: "Custom label and retail packing available",
    application:
      "Construction, furniture, machinery, metalwork, and hardware distribution",
    setIncludes: "Screws, bolts, nuts, washers, anchors, assorted fasteners",
  },
];

export const toolsHardwarePartnerItems = [
  {
    icon: ShieldCheck,
    title: "Quality-Checked Supply",
    desc: "Selected factories with stable quality and export experience.",
  },
  {
    icon: Factory,
    title: "Factory Matching",
    desc: "We match each item with suitable manufacturers based on target specs.",
  },
  {
    icon: PackageCheck,
    title: "Private Label Ready",
    desc: "Branding, packaging, logo, and retail-ready supply options.",
  },
  {
    icon: Settings,
    title: "Custom Specifications",
    desc: "Voltage, plug, material, finish, packing and accessories can be customized.",
  },
  {
    icon: Truck,
    title: "Shipment Support",
    desc: "Export carton, mixed container, inspection and shipment coordination.",
  },
];
