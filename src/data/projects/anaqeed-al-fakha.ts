import { Project } from "./types";

export const anaqeedAlFakhaProject: Project = {
  slug: "anaqeed-al-fakha",
  title: "Anakeed Alfakeha — عناقيد الفاكهة",
  subtitle: "Online Fresh Produce & Quick Commerce Platform · Saudi Arabia",
  category: "E-commerce",
  featured: true,
  order: 8,
  shortDescription:
    "On-demand grocery and fresh produce delivery platform connecting consumers with trusted farms across Saudi Arabia with weight-based pricing and scheduled doorstep fulfillment.",
  overview:
    "Anakeed Alfakeha (عناقيد الفاكهة) is a fresh produce and quick-commerce mobile platform serving consumers across Saudi Arabia. Developed at Tasawk, the application connects shoppers directly with farms for fresh fruits, vegetables, prepped cuts, and fresh juices with categorized filtering, fractional weight increments, dynamic delivery windows, and multi-payment checkout.",
  role: "Senior Flutter Developer",
  company: "Tasawk",
  technologies: [
    "Flutter",
    "Dart",
    "Clean Architecture",
    "BLoC",
    "RESTful APIs",
    "Payment Gateway",
    "Localization (Arabic/English)",
    "Google Maps SDK",
    "App Store & Google Play Releases",
  ],
  problem:
    "Fresh produce purchasing requires dynamic fractional quantity inputs (e.g. 1.5 kg vs per-box pricing) and instant basket total calculations alongside regional Arabic typography and RTL layout perfection.",
  responsibilities: [
    "Developed consumer mobile application with full bilingual RTL/LTR support.",
    "Engineered dynamic weight/quantity cart calculations and categorized seasonal collections.",
    "Integrated localized electronic payment gateways (Mada, Apple Pay, Cards) and Cash on Delivery.",
    "Implemented real-time order lifecycle tracking from farm packaging to courier dispatch.",
    "Managed production releases on Google Play and Apple App Store.",
  ],
  features: [
    "Categorized fresh produce catalog with dynamic filtering and seasonal collections",
    "Fractional weight selector with real-time price calculations",
    "Real-time order lifecycle tracking from packaging to courier dispatch",
    "Scheduled delivery windows with interactive geolocation address management",
    "Secure phone/OTP authentication and electronic payment options",
  ],
  outcomes: [
    "Published and actively fulfilling orders on Google Play and Apple App Store across Saudi Arabia.",
    "Delivered high-converting quick commerce purchasing flows for fresh farm goods.",
  ],
  googlePlayUrl: "https://play.google.com/store/apps/details?id=com.tasawk.anaqeedalfakhaT",
  appStoreUrl:
    "https://apps.apple.com/sa/app/%D8%B9%D9%86%D8%A7%D9%82%D9%8A%D8%AF-%D8%A7%D9%84%D9%81%D8%A7%D9%83%D9%88%D8%A9/id6755475924",
  tags: ["E-commerce", "Grocery", "Quick Commerce", "Saudi Arabia", "RTL", "Clean Architecture"],
  relatedProjectSlugs: ["lia", "white-labeled-ecommerce"],
};
