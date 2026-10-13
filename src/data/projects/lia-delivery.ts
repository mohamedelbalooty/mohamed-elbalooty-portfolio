import { Project } from "./types";

export const liaDeliveryProject: Project = {
  slug: "lia-delivery",
  title: "Lia Delivery",
  subtitle: "Courier Logistics, Real-Time Navigation & Performance Statistics",
  category: "Logistics",
  featured: true,
  order: 7,
  shortDescription:
    "Courier companion application designed for dispatch logistics, real-time routing, active order status management, and driver performance and earnings statistics.",
  overview:
    "Lia Delivery is the logistics and courier fulfillment mobile platform for the Lia gifting ecosystem. Developed at Tasawk, the application equips drivers with real-time dispatch alerts, turn-by-turn navigation to vendor pickup and recipient drop-off points, customer contact masking, in-app proof-of-delivery capture, and comprehensive daily logistics and earnings statistics.",
  role: "Senior Flutter Developer",
  company: "Tasawk",
  period: "2025",
  technologies: [
    "Flutter",
    "Dart",
    "Clean Architecture",
    "BLoC",
    "Google Maps SDK",
    "Geolocation & Tracking",
    "RESTful APIs",
    "Background Location Service",
    "Analytics & Statistics",
  ],
  architecture: [
    "Presentation Layer: BLoC-driven active order tracker, live map overlay, and interactive statistics dashboards",
    "Domain Layer: Pure Dart use cases for dispatch state transitions, delivery verification, and earnings calculations",
    "Data Layer: Resilient REST client with background location streaming, offline cache, and secure token lifecycle",
  ],
  architectureLayers: [
    {
      name: "Presentation (Dispatch & Metrics)",
      responsibility:
        "Real-time order feed, live map route guidance, driver earnings dashboard, and delivery proof modals.",
      components: ["DeliveryDispatchBloc", "CourierStatsBloc", "RouteNavigationView", "ProofOfDeliverySheet"],
    },
    {
      name: "Domain (Fulfillment Logic)",
      responsibility:
        "Order lifecycle state machine (Assigned → Picked Up → In Transit → Delivered) and daily statistics aggregation.",
      components: ["AcceptOrderUseCase", "CompleteDeliveryUseCase", "CourierStatsRepositoryInterface"],
    },
    {
      name: "Data & Location Telemetry",
      responsibility:
        "Battery-efficient background GPS tracking, photo upload pipeline, and remote API synchronization.",
      components: ["BackgroundLocationClient", "DeliveryRemoteDataSource", "OfflineOrderJournalDao"],
    },
  ],
  problem:
    "Couriers need reliable background location tracking, battery-conscious route calculation, instant state synchronization, and clear transparent delivery metrics and daily earnings tracking under demanding on-the-road conditions.",
  responsibilities: [
    "Architected the courier mobile application across Android and iOS using Flutter and Clean Architecture.",
    "Engineered real-time order dispatch management, route navigation, and delivery lifecycle tracking.",
    "Built courier logistics dashboard with performance statistics, delivery completion metrics, and earnings summaries.",
    "Integrated native turn-by-turn navigation launch intents (Google Maps, Apple Maps, Waze).",
    "Implemented recipient contact masking and in-app camera proof-of-delivery verification.",
    "Published and maintained production releases on Google Play and the Apple App Store.",
  ],
  challenges: [
    "Managing continuous background location telemetry without draining device battery during long driver shifts.",
    "Ensuring instant order status updates and photo uploads even in areas with intermittent cellular coverage.",
  ],
  solutions: [
    "Implemented adaptive GPS sampling rates based on courier motion state (stationary vs in-transit).",
    "Designed an offline queue for proof-of-delivery photos with automated background retry upon reconnection.",
  ],
  engineeringDecisions: [
    {
      title: "Adaptive Geolocation Sampling for Battery Conservation",
      context:
        "Continuous high-accuracy GPS tracking drains mobile device battery rapidly during 8+ hour courier shifts.",
      decision:
        "Engineered an adaptive geofencing and motion-detection listener that lowers ping frequency when stationary at pickup hubs and throttles up during active transit.",
      tradeOff: "Requires balancing location update frequency against battery life.",
      result:
        "Reduced courier device battery consumption by over 35% while maintaining accurate customer ETA tracking.",
    },
  ],
  features: [
    "Real-time dispatch order feed with instant accept/decline workflows",
    "Interactive turn-by-turn route navigation to florist vendor pickup and customer drop-off",
    "Comprehensive delivery logistics dashboard and active order status management",
    "Real-time courier performance metrics, daily earnings statistics, and delivery history logs",
    "Customer contact proxy masking to protect recipient privacy",
    "In-app camera capture for delivery proof and photo upload verification",
  ],
  outcomes: [
    "Published and actively fulfilling deliveries on Google Play and Apple App Store.",
    "Completed the end-to-end fulfillment loop for the Lia multi-vendor gifting marketplace.",
    "Streamlined courier operations and gave drivers transparent visibility into logistics metrics and earnings.",
  ],
  googlePlayUrl: "https://play.google.com/store/apps/details?id=com.tasawk.liaDelivery&hl=ar",
  appStoreUrl: "https://apps.apple.com/pk/app/lia-delivery/id6756253953",
  tags: ["Logistics", "Delivery", "Google Maps", "Geolocation", "Statistics", "Clean Architecture"],
  relatedProjectSlugs: ["lia", "azda"],
};
