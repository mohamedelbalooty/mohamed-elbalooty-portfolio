import { Project } from "./types";

export const ezhalMowitakProject: Project = {
  slug: "ezhal-mowitak",
  title: "Ezhal Mowitak",
  subtitle: "Smart Bottled Water Distribution & Delivery Platform",
  category: "E-commerce",
  featured: false,
  order: 10,
  shortDescription:
    "On-demand bottled water delivery platform offering recurring subscription deliveries, carton size selection, and rapid residential and commercial fulfillment.",
  overview:
    "Ezhal Mowitak (أزهل) simplifies bulk bottled water procurement for residences, offices, and mosques. The platform features recurring weekly delivery plans, automated reordering, GPS delivery location saving, and integrated digital payment methods.",
  role: "Flutter Developer",
  technologies: [
    "Flutter",
    "Dart",
    "BLoC",
    "RESTful APIs",
    "Payment Gateway",
    "Google Maps SDK",
  ],
  problem:
    "Water delivery requires recurrent weekly schedules, bulk weight logistics coordination, and recurring payment authorizations without recurring customer friction.",
  responsibilities: [
    "Developed mobile app screens for recurring delivery plans and one-off bulk orders.",
    "Integrated localized checkout and payment gateways.",
    "Implemented location management supporting multiple saved delivery addresses.",
  ],
  features: [
    "Comprehensive water brand and bottle volume selector (gallons, cartons, personal bottles)",
    "Recurring automated delivery schedule (weekly/monthly intervals)",
    "Multi-address notebook with specialized delivery instructions (floor, apartment, gate code)",
    "Live driver dispatch tracking and SMS/Push arrival notifications",
  ],
  outcomes: [
    "Deployed to Google Play and Apple App Store, streamlining everyday utility delivery.",
  ],
  tags: ["E-commerce", "Delivery", "Subscriptions", "Logistics", "Utilities"],
  relatedProjectSlugs: ["kharada"],
};
