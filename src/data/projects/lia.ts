import { Project } from "./types";

export const liaProject: Project = {
  slug: "lia",
  title: "Lia",
  subtitle: "Multi-Vendor Flower & Gifting Marketplace",
  category: "E-commerce",
  featured: true,
  order: 6,
  shortDescription:
    "Multi-vendor gifting application enabling users to browse, customize, and send flowers and gifts quickly for any occasion with scheduled delivery and secure payments.",
  overview:
    "Lia is a premier multi-vendor gifting mobile platform allowing customers to discover artisanal florists and confectioneries, schedule deliveries with personalized greeting cards, and track orders in real time. Mohamed engineered the mobile application with an emphasis on delightful micro-interactions, responsive vendor catalog browsing, and multi-gateway checkout.",
  role: "Senior Flutter Developer",
  technologies: [
    "Flutter",
    "Dart",
    "Clean Architecture",
    "BLoC",
    "RESTful APIs",
    "Payment Gateway",
    "Google Maps",
    "Push Notifications",
  ],
  problem:
    "Gifting requires precision timing (specific delivery slots), custom gift cards, and smooth multi-vendor order routing without confusing the consumer during checkout.",
  responsibilities: [
    "Architected the customer-facing Flutter mobile application across Android and iOS.",
    "Integrated Google Maps location picker for precise recipient delivery coordinates.",
    "Delivered multi-vendor cart handling, greeting card personalization, and payment gateways.",
  ],
  challenges: [
    "Handling multiple vendors in a single order with divergent delivery schedules and dispatch locations.",
    "Providing high-resolution visual previews for bouquets and custom gift wrapping without degrading scroll performance.",
  ],
  solutions: [
    "Built an optimized image cache pipeline with shimmer placeholders and memory-bounded decoders.",
    "Designed an intuitive multi-step checkout separating recipient scheduling from billing details.",
  ],
  engineeringDecisions: [
    {
      title: "Decoupled Delivery Scheduling Subsystem",
      context: "Flower arrangements require specific date and time slot validation against real-time vendor capacity.",
      decision: "Built a dedicated delivery time slot validation use case querying dynamic store operating hours.",
      tradeOff: "Added pre-checkout validation roundtrip.",
      result: "Zero delivery slot booking conflicts reported in production.",
    },
  ],
  features: [
    "Multi-vendor catalog browsing with category filters and occasion curation",
    "Personalized greeting card composer with live visual preview",
    "Interactive Google Maps location pinpointing for accurate courier dispatch",
    "Real-time order state updates from preparation to courier delivery",
    "Apple Pay, Mada, and Credit Card payment integrations",
  ],
  outcomes: [
    "Successfully launched on both Google Play and the Apple App Store.",
    "Delivered a smooth, user-centric mobile purchasing flow.",
  ],
  appStoreUrl: "[ADD APP STORE URL]",
  googlePlayUrl: "[ADD GOOGLE PLAY URL]",
  tags: ["E-commerce", "Gifting", "Multi-Vendor", "Google Maps", "Payments"],
  relatedProjectSlugs: ["lia-delivery", "white-labeled-ecommerce"],
};
