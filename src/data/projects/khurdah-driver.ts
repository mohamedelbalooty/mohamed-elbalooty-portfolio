import { Project } from "./types";

export const khurdahDriverProject: Project = {
  slug: "khurdah-driver",
  title: "Khurdah Driver — سائق خردة",
  subtitle: "Heavy Fleet Logistics & Scrap Collection Dispatch · Saudi Arabia",
  category: "Logistics",
  featured: true,
  order: 2,
  shortDescription:
    "Specialized driver logistics application managing heavy vehicle dispatch, turn-by-turn doorstep pickup navigation, physical scrap weighing verification, and digital receipt handoffs across Saudi Arabian collection zones.",
  overview:
    "Khurdah Driver (Asas Mineral Driver / سائق خردة) is the fleet logistics and physical fulfillment engine of the Khurdah ecosystem. Mohamed architected and developed the dedicated driver application to coordinate pickup routes for heavy transport vehicles across municipal collection zones in Saudi Arabia. After a customer accepts the valuation offer, the driver app receives the dispatch mission, guides the driver via Google Maps turn-by-turn navigation, verifies scrap weight upon arrival, generates digital collection manifests, and synchronizes real-time status back to the central operations control.",
  role: "Lead Mobile Architect & Team Lead",
  company: "Tasawk / Khurdah",
  period: "2024 – 2025",
  technologies: [
    "Flutter",
    "Dart",
    "Clean Architecture",
    "BLoC",
    "Google Maps SDK & Polylines",
    "Background Geolocation & Telemetry",
    "Digital Signature Canvas",
    "Offline-First SQLite Cache",
    "Push Notifications (FCM)",
    "Localization (Arabic / English / Urdu)",
  ],
  architecture: [
    "Real-time driver location streaming with adaptive sampling rates to balance GPS accuracy against battery endurance",
    "Decoupled offline-first collection manifest queue ensuring signed handoffs are stored securely and synced once connectivity is restored",
    "Dynamic route polyline calculation with traffic-aware rerouting via Google Directions API",
  ],
  architectureLayers: [
    {
      name: "Presentation (Dispatch & Navigation)",
      responsibility:
        "Driver route navigation map, assigned collection task queue, on-site weighing verification sheets, and digital customer signature pad.",
      components: [
        "DriverNavigationBloc",
        "ActivePickupSheet",
        "SignaturePadWidget",
        "WeightVerificationModal",
      ],
    },
    {
      name: "Domain (Collection State Machine)",
      responsibility:
        "Enforces strict pickup state transitions (Dispatched → In Transit → Arrived → Weighed → Handed Over) and validates vehicle payload limits.",
      components: [
        "AcceptPickupUseCase",
        "CompleteHandoverUseCase",
        "UpdateDriverLocationUseCase",
        "DriverRepositoryInterface",
      ],
    },
    {
      name: "Data & Telemetry",
      responsibility:
        "Broadcasts low-latency GPS coordinates, manages background location services, and securely caches offline pickup vouchers.",
      components: [
        "DriverLocationManager",
        "OfflineManifestDao",
        "DispatchSocketClient",
        "RouteNavigationService",
      ],
    },
  ],
  problem:
    "Coordinating heavy transport trucks across sprawling residential and industrial zones in Saudi Arabia presents severe logistical challenges: navigating tight residential streets, verifying varying scrap weights on-site, and capturing legally binding proof of collection without physical paper waste.",
  responsibilities: [
    "Architected and engineered the driver mobile application from architectural blueprint to Google Play & Apple App Store deployment.",
    "Designed and implemented battery-efficient background geolocation tracking streaming live driver coordinates to dispatch operators.",
    "Engineered on-site weight reconciliation and digital customer signature capture on mobile.",
    "Built offline-resilient local storage caching collection receipts during trips through low-connectivity industrial scrapyards.",
    "Mentored the mobile engineering squad on location services, foreground services, and battery optimization.",
  ],
  challenges: [
    "Background GPS tracking draining driver device batteries during 8 to 10 hour shifts.",
    "Drivers collecting scrap in underground basements or edge-of-city industrial yards with zero cell coverage.",
  ],
  solutions: [
    "Implemented speed-adaptive GPS sampling intervals that reduce broadcast frequency when stationary and increase resolution while en route.",
    "Constructed an encrypted offline manifest vault with automatic background retry synchronization upon network reconnection.",
  ],
  engineeringDecisions: [
    {
      title: "Speed-Adaptive Geolocation Sampling Engine",
      context:
        "Continuous high-precision GPS polling exhausted driver batteries within 4 hours, risking dropped dispatches.",
      decision:
        "Engineered an adaptive telemetry algorithm that throttles polling when vehicle speed drops below 5 km/h and increases frequency during active highway transit.",
      tradeOff: "Minor delay in detecting immediate stationary stops.",
      result:
        "Extended device battery life to over 10 hours of continuous operation while preserving smooth vehicle tracking.",
    },
    {
      title: "Zero-Data-Loss Offline Pickup Manifests",
      context:
        "Pickups in scrap processing yards frequently lost internet connectivity exactly when customers signed proof-of-handoff.",
      decision:
        "Stored digital signatures and weight receipts in encrypted SQLite storage with SHA-256 verification hashes before triggering an asynchronous sync queue.",
      tradeOff: "Required local encryption and storage management.",
      result:
        "Zero lost pickup receipts or weight discrepancies across tens of thousands of completed collections.",
    },
  ],
  features: [
    "Real-time pickup assignment dispatch with audio-visual alerts",
    "Turn-by-turn navigation with live Google Maps route polylines",
    "Customer contact and address navigation shortcuts",
    "On-site weight audit and itemized scrap breakdown confirmation",
    "Digital customer signature capture directly on the device screen",
    "Photo capture proof-of-pickup attached to collection vouchers",
    "Offline-capable manifest generation and automated cloud synchronization",
    "Multilingual driver interface supporting Arabic, English, and Urdu",
  ],
  outcomes: [
    "Successfully executed daily heavy-vehicle scrap pickups supporting Khurdah's 50K+ user base.",
    "Reduced driver turnaround time by 30% through direct Google Maps coordinate dispatch.",
    "Eliminated paper manifest loss and achieved 100% digital end-to-end collection auditing.",
    "Live and verified on Google Play Store and Apple App Store.",
  ],
  liveUrl: "https://khurdah.com",
  googlePlayUrl: "https://play.google.com/store/apps/details?id=com.tasawk.khurdah.driver&hl=en",
  appStoreUrl: "https://apps.apple.com/ca/app/asas-mineral-driver/id6695752692",
  tags: [
    "Logistics",
    "Fleet Management",
    "Google Maps",
    "Real-Time Tracking",
    "Clean Architecture",
    "Saudi Arabia",
  ],
  relatedProjectSlugs: ["khurdah-client", "khurdah-erp-logistics", "azda"],
};
