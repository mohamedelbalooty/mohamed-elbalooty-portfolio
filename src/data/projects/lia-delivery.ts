import { Project } from "./types";

export const liaDeliveryProject: Project = {
  slug: "lia-delivery",
  title: "Lia Delivery",
  subtitle: "Courier Logistics & Real-Time Navigation Platform",
  category: "Logistics",
  featured: false,
  order: 7,
  shortDescription:
    "Courier delivery application designed for dispatch logistics, real-time routing, active order status management, and turn-by-turn navigation to customer drop-off points.",
  overview:
    "Lia Delivery is the companion logistics mobile application for the Lia gifting ecosystem. It equips couriers with real-time dispatch alerts, turn-by-turn navigation integrations via Google Maps, customer contact masking, and proof-of-delivery photo verification.",
  role: "Senior Flutter Developer",
  technologies: [
    "Flutter",
    "Dart",
    "Google Maps SDK",
    "Geolocation & Tracking",
    "RESTful APIs",
    "Background Location Service",
  ],
  problem:
    "Couriers need reliable background location tracking, battery-conscious route calculation, and instant state synchronization under demanding on-the-road conditions.",
  responsibilities: [
    "Engineered the courier mobile app with live GPS tracking and route drawing.",
    "Integrated native turn-by-turn navigation launch intents (Google Maps, Apple Maps, Waze).",
    "Implemented proof-of-delivery capture and digital recipient confirmation.",
  ],
  features: [
    "Real-time dispatch order feed with accept/decline workflows",
    "Interactive route navigation to flower vendor pickup and customer drop-off",
    "Customer contact proxy masking to protect user privacy",
    "Camera capture for delivery proof and photo upload",
  ],
  outcomes: [
    "Released to Google Play and the Apple App Store, completing the end-to-end Lia fulfillment cycle.",
  ],
  tags: ["Logistics", "Delivery", "Google Maps", "Geolocation", "Clean Architecture"],
  relatedProjectSlugs: ["lia", "azda"],
};
