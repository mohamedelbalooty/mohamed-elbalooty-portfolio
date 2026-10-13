import { Project } from "./types";

export const kufaProject: Project = {
  slug: "kufa",
  title: "Kufa — كوفه",
  subtitle: "Food & Beverage (QSR) On-Demand Ordering & Delivery · Saudi Arabia",
  category: "Food & Delivery",
  featured: true,
  order: 4,
  shortDescription:
    "Official mobile ordering platform for Al-Kufa Food Company—one of Saudi Arabia’s leading broasted chicken chains across 19 kingdom-wide branches—achieving 10K+ downloads in its first year with home delivery and takeaway pickup.",
  overview:
    "Al-Kufa Food Company is considered one of the premier providers of fried and broasted chicken in the Kingdom of Saudi Arabia, operating 19 branches covering the entire kingdom. Mohamed served as Lead Mobile Architect and Team Lead, owning the complete product engineering lifecycle—from initial UX wireframes, system architecture, and Flutter development through to App Store and Google Play releases, while hiring and leading the technical mobile engineering team. The customer application provides a seamless, high-performance ordering experience allowing customers to customize meals, choose between branch pickup (takeaway) and doorstep delivery, track live kitchen preparation statuses, and complete transactions without waiting.",
  role: "Lead Mobile Architect & Team Lead",
  company: "Tasawk / Al-Kufa Food Company",
  period: "2024 – 2025",
  technologies: [
    "Flutter",
    "Dart",
    "Clean Architecture",
    "BLoC",
    "Google Maps SDK",
    "Branch Geofencing",
    "Apple Pay & Payment Gateways",
    "Push Notifications (FCM)",
    "RTL Localization (Arabic / English)",
    "RESTful APIs",
    "Fastlane & CI/CD",
  ],
  architecture: [
    "Feature-first Clean Architecture separating Presentation, Domain, and Data layers with robust BLoC state management",
    "Branch-aware geofencing and delivery matrix engine routing orders to the optimal branch among 19 kingdom-wide locations",
    "Reactive order progression state machine synchronized directly with kitchen operations and the Kufa Manager POS ecosystem",
  ],
  architectureLayers: [
    {
      name: "Presentation (Menu Discovery & Ordering)",
      responsibility:
        "Interactive meal customizer, combo builders, branch selector, Google Maps delivery location picker, RTL bilingual UI, and live order progression sheets.",
      components: [
        "MenuCatalogBloc",
        "MealCustomizerBloc",
        "BranchSelectorSheet",
        "OrderTimelineView",
      ],
    },
    {
      name: "Domain (Business Rules & Cart Logic)",
      responsibility:
        "Enforces meal combo rules, addon and spice-level validations, branch delivery radius geofencing, discount vouchers, and checkout integrity.",
      components: [
        "ValidateMealCustomizationUseCase",
        "CalculateBranchDeliveryRadiusUseCase",
        "ApplyPromoCodeUseCase",
        "OrderRepositoryInterface",
      ],
    },
    {
      name: "Data & Infrastructure",
      responsibility:
        "HTTP client with automatic token refresh, local cart persistence, Firebase Cloud Messaging for order milestone events, and Google Maps geolocation service.",
      components: [
        "MenuApiClient",
        "LocalCartDao",
        "FcmNotificationService",
        "GeocodingLocationService",
      ],
    },
  ],
  problem:
    "High in-branch foot traffic and phone-based takeaway orders caused long wait times, manual order transcription errors, and kitchen bottlenecks during peak lunch and dinner rushes across 19 branches. Al-Kufa needed an automated digital platform to unify takeaway pickup, doorstep delivery, and branch kitchen dispatch.",
  responsibilities: [
    "Owned the complete design, architecture, engineering, and delivery phases of the client mobile platform on iOS and Android.",
    "Hired, onboarded, and led the technical mobile engineering team, establishing architecture standards, code review workflows, and sprint execution.",
    "Architected the meal customization and combo builder engine, handling dynamic additions, sauces, sizes, and pricing variations without cart state glitches.",
    "Engineered branch-based geofencing and smart routing, ensuring customer delivery requests are dispatched to the closest operational branch.",
    "Integrated secure payment processing including Apple Pay, mada, credit cards, and cash on delivery.",
    "Managed Google Play Store and Apple App Store compliance, store presence, and automated CI/CD release pipelines.",
  ],
  challenges: [
    "Managing complex combo item configurations (spicy/regular, piece count, sides, beverage variations) without cart calculation inconsistencies or UI frame drops.",
    "Handling branch-level inventory and operating hours dynamically across 19 separate locations throughout Saudi Arabia.",
  ],
  solutions: [
    "Designed a declarative composite state machine for meal customization that recalculates totals and validates required choices client-side before checkout dispatch.",
    "Implemented reactive branch metadata caching with periodic invalidation, verifying branch availability and delivery polygon coverage prior to cart checkout.",
  ],
  engineeringDecisions: [
    {
      title: "Declarative Combo Builder & Option Tree State Engine",
      context:
        "QSR meal combos require nested option selections (portion size, heat level, dipping sauces, beverage size) where choices directly affect pricing and availability.",
      decision:
        "Built an immutable composite pattern in the Domain layer where meal items compose customizable option sets validated against business rules before cart insertion.",
      tradeOff:
        "Greater initial domain abstraction complexity in exchange for 100% bug-free cart pricing and zero server-side option mismatch errors.",
      result:
        "Eliminated checkout validation failures and enabled dynamic menu configuration directly from the backend without mobile app updates.",
    },
    {
      title: "Branch-Aware Geofencing & Smart Dispatch Routing",
      context:
        "With 19 branches covering different municipalities across the Kingdom, orders had to be precisely routed based on branch delivery zones and live kitchen capacity.",
      decision:
        "Implemented client-side polygon containment checks using Google Maps geometry utils alongside server-verified delivery zone validation.",
      tradeOff:
        "Required downloading lightweight GeoJSON zone bounds for active branches during address selection.",
      result:
        "Reduced delivery dispatch confusion by 100% and ensured users never ordered from a branch outside their delivery zone.",
    },
  ],
  features: [
    "Categorized digital menu with high-resolution food photography, combos, and side items",
    "Rich meal customizer supporting portion sizes, spice levels, sides, and sauce selections",
    "Dual ordering mode: Doorstep delivery with map pinning or quick branch takeaway pickup without waiting",
    "19 branch selector with live open/closed statuses, distance calculation, and directions",
    "Real-time order lifecycle tracking synchronized directly with kitchen operations and branch staff",
    "Promotional coupon engine with instant cart discount validation",
    "Multiple payment options: Apple Pay, mada, credit cards, and cash on delivery",
    "Full bilingual Arabic and English interface with pixel-perfect RTL typography",
  ],
  outcomes: [
    "Achieved over 10,000+ app downloads in its first operational year across Saudi Arabia.",
    "Successfully launched across all 19 Al-Kufa branches Kingdom-wide, drastically reducing in-branch customer queues.",
    "Built, mentored, and delivered the mobile engineering team that owns feature delivery and platform maintenance.",
    "Published and maintained active production apps on both Google Play Store and Apple App Store.",
  ],
  liveUrl: "https://kufa.sa/en",
  googlePlayUrl: "https://play.google.com/store/apps/details?id=com.tasawk.kufa&hl=ar",
  appStoreUrl: "https://apps.apple.com/sa/app/kufa-%D9%83%D9%88%D9%81%D9%87/id1598117189",
  tags: [
    "Food & Beverage",
    "QSR",
    "Food & Delivery",
    "Saudi Arabia",
    "10K+ Downloads",
    "Clean Architecture",
    "Google Maps",
    "Apple Pay",
    "BLoC",
  ],
  relatedProjectSlugs: ["kufa-manager", "khurdah-client", "anaqeed-al-fakha"],
};
