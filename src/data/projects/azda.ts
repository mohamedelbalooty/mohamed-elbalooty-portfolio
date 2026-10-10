import { Project } from "./types";

export const azdaProject: Project = {
  slug: "azda",
  title: "Azda — أزدة",
  subtitle: "Mobility & Hajj Transit Logistics Platform · Saudi Arabia",
  category: "Logistics",
  featured: true,
  order: 11,
  shortDescription:
    "Mission-critical mobility application managing worker transportation during the high-density Hajj season in Saudi Arabia, coordinating transit between hotels and pilgrimage centers.",
  overview:
    "Azda (أزدة) is a mobility and logistics platform engineered to coordinate worker transit operations during the intense, high-density Hajj season across Makkah and Madinah in Saudi Arabia. The application orchestrates real-time transit requests between hotels and central pilgrimage hubs, empowering operators and passengers with live GPS tracking, route coordination, and bilingual Arabic/English UX with zero tolerance for downtime under extreme network strain.",
  role: "Senior Flutter Developer",
  company: "Tasawk",
  period: "2024 – 2025",
  technologies: [
    "Flutter",
    "Dart",
    "Clean Architecture",
    "BLoC",
    "Google Maps SDK",
    "Geolocation & Tracking",
    "WebSockets",
    "RESTful APIs",
    "Localization (Arabic / English)",
    "App Store & Google Play Releases",
  ],
  architecture: [
    "BLoC-driven reactive location tracking with smooth vehicle marker interpolation",
    "Clean Architecture with pure Dart use cases for transit booking and trip state machines",
    "Resilient network layer with WebSocket streams, HTTP fallbacks, and offline dispatch queuing",
  ],
  architectureLayers: [
    {
      name: "Presentation (Transit Maps & Dispatch)",
      responsibility:
        "Interactive Google Maps driver telemetry, pickup pin dropping, multilingual RTL/LTR layouts, and trip progress state sheets.",
      components: ["TripTrackerBloc", "TransitMapView", "DriverPinOverlay", "MultilingualHeader"],
    },
    {
      name: "Domain (Transit Business Logic)",
      responsibility:
        "Deterministic trip state machine (Requested → Assigned → Arrived → In-Transit → Completed) and ETA calculation.",
      components: ["BookTransitUseCase", "TrackDriverEtaUseCase", "TripRepositoryInterface"],
    },
    {
      name: "Data & Telemetry",
      responsibility:
        "Sub-second driver GPS telemetry streaming, offline event queuing, and secure token lifecycle.",
      components: ["DriverSocketClient", "LocationTelemetryService", "OfflineTripQueueDao"],
    },
  ],
  problem:
    "During the Hajj pilgrimage, hundreds of thousands of transit movements occur simultaneously within restricted zones. Unstable cell networks and severe congestion require seamless offline fallback, sub-second GPS vehicle tracking, and rapid bilingual Arabic/English coordination.",
  responsibilities: [
    "Architected and engineered the cross-platform mobile application for Android and iOS using Flutter and Clean Architecture.",
    "Integrated real-time Google Maps dispatch tracking, route rendering, and live ETA updates.",
    "Engineered smooth bilingual Arabic and English localization with native RTL layout optimization.",
    "Managed full lifecycle releases on both the Apple App Store and Google Play Store.",
  ],
  challenges: [
    "High-frequency GPS coordinate broadcasts caused jittery bus marker animations under fluctuating bandwidth.",
    "Intermittent cellular connection drops near dense gathering points in Makkah and Madinah.",
  ],
  solutions: [
    "Implemented spherical linear interpolation (lerp) on bus map markers with bearing rotation calculations for buttery-smooth movement.",
    "Engineered an offline-first event synchronization queue that buffers dispatch actions locally and synchronizes atomically upon reconnection.",
  ],
  engineeringDecisions: [
    {
      title: "Marker Interpolation & Bearing Smoothing over Raw Coordinate Rendering",
      context:
        "Raw GPS pings from transit buses arrived at erratic intervals, leading to jumpy vehicle markers on the map.",
      decision:
        "Built a custom tween-based coordinate interpolation algorithm calculating heading angles dynamically.",
      tradeOff: "Requires slightly more computation per frame during active navigation.",
      result:
        "Silky 60fps vehicle transit tracking with realistic driver heading rotation and zero visual teleportation.",
    },
  ],
  features: [
    "Real-time worker transportation request dispatching and live route monitoring",
    "Transit coordination between hotels and pilgrimage centers across Saudi Arabia",
    "Live Google Maps tracking with animated driver markers and dynamic ETA",
    "Full bilingual Arabic and English experience with RTL precision",
    "Secure phone-based OTP verification and token management",
    "Automated offline event synchronization for intermittent network zones",
  ],
  outcomes: [
    "Successfully powered mission-critical transit operations during the Hajj season in Saudi Arabia.",
    "Maintains verified production presence on both Google Play and Apple App Store.",
    "Eliminated transit bottlenecks through automated driver-passenger route synchronization.",
  ],
  googlePlayUrl: "https://play.google.com/store/apps/details?id=sa.azda_v2.app",
  appStoreUrl: "https://apps.apple.com/eg/app/azda/id6499463779",
  tags: [
    "Logistics",
    "Mobility",
    "Hajj Season",
    "Saudi Arabia",
    "Google Maps",
    "Real-Time Tracking",
    "Clean Architecture",
  ],
  relatedProjectSlugs: ["iqamti", "lia-delivery"],
};
