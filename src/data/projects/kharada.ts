import { Project } from "./types";

export const kharadaProject: Project = {
  slug: "kharada",
  title: "Kharada",
  subtitle: "Circular Economy Scrap Recycling & Pickup Platform",
  category: "E-commerce",
  featured: false,
  order: 9,
  shortDescription:
    "Scrap recycling application enabling households and businesses to sell recyclable materials with transparent market pricing, photo estimation, and scheduled doorstep collection.",
  overview:
    "Kharada is a sustainability-focused reverse-commerce application facilitating scrap recycling. Users can categorize recyclable materials (metals, paper, plastics, appliances), attach photos for preliminary valuation, pinpoint their collection location, and book a verified recycling vehicle for pickup.",
  role: "Flutter Developer",
  technologies: [
    "Flutter",
    "Dart",
    "Google Maps",
    "Camera / Image Picker",
    "RESTful APIs",
    "Push Notifications",
  ],
  problem:
    "Traditional scrap recycling lacks price transparency and logistics reliability. Users need a simple way to photograph scrap items and coordinate collection trucks efficiently.",
  responsibilities: [
    "Implemented the customer request flow including camera capture and weight estimations.",
    "Integrated Google Maps for location address pinning and pickup radius verification.",
    "Engineered request state lifecycle tracking from proposal to weighed pickup completion.",
  ],
  features: [
    "Item classification tree across scrap metal, paper, e-waste, and plastics",
    "Multi-photo capture with local image compression prior to upload",
    "Interactive location picker and preferred pickup scheduling",
    "Transparent pricing rate card and estimated earnings summary",
  ],
  outcomes: [
    "Released to Google Play and Apple App Store, modernizing localized recycling logistics.",
  ],
  appStoreUrl: "[ADD APP STORE URL]",
  googlePlayUrl: "[ADD GOOGLE PLAY URL]",
  tags: ["E-commerce", "Recycling", "Sustainability", "Logistics", "Google Maps"],
  relatedProjectSlugs: ["ezhal-mowitak"],
};
