import { Project } from "./types";

export const anaqeedAlFakhaProject: Project = {
  slug: "anaqeed-al-fakha",
  title: "Anaqeed Al-Fakha",
  subtitle: "Online Fresh Produce & Grocery Commerce",
  category: "E-commerce",
  featured: false,
  order: 8,
  shortDescription:
    "Online grocery platform for fresh fruits and vegetables featuring weight-based pricing, freshness guarantees, and flexible doorstep delivery windows.",
  overview:
    "Anaqeed Al-Fakha (عناقيد الفاكه) is a specialized mobile e-commerce platform dedicated to fresh fruits and vegetables. Built to provide an effortless ordering experience, the application supports variable weight increments, seasonal promotions, neighborhood delivery scheduling, and multi-currency payment.",
  role: "Flutter Developer",
  technologies: [
    "Flutter",
    "Dart",
    "BLoC",
    "RESTful APIs",
    "Payment Gateway",
    "Localization (Arabic/English)",
  ],
  problem:
    "Fresh produce purchasing requires dynamic fractional quantity inputs (e.g. 1.5 kg vs per-box pricing) and instant basket total calculations alongside regional Arabic typography and RTL layout perfection.",
  responsibilities: [
    "Developed consumer mobile application with full bilingual RTL/LTR support.",
    "Engineered dynamic weight/quantity cart calculations.",
    "Integrated localized payment gateways and address management.",
  ],
  features: [
    "Fresh produce catalog organized by harvest category and seasonal arrivals",
    "Fractional weight selector and dynamic pricing updates",
    "Scheduled delivery windows with address geolocation",
    "Order status notifications and order repeat functionality",
  ],
  outcomes: [
    "Published on Google Play and Apple App Store, offering convenient fresh food delivery.",
  ],
  appStoreUrl: "[ADD APP STORE URL]",
  googlePlayUrl: "[ADD GOOGLE PLAY URL]",
  tags: ["E-commerce", "Grocery", "RTL", "Localization", "Fresh Produce"],
  relatedProjectSlugs: ["white-labeled-ecommerce"],
};
