import { Project } from "./types";

export const khurdahClientProject: Project = {
  slug: "khurdah-client",
  title: "Khurdah — خردة",
  subtitle: "Circular Economy Scrap Recycling & Payout Marketplace · Saudi Arabia",
  category: "E-commerce",
  featured: true,
  order: 1,
  shortDescription:
    "Flagship circular economy mobile platform in Saudi Arabia with 50K+ downloads in one year, enabling households and enterprises to sell scrap metals, receive on-site valuations, or donate proceeds to charity with verified bank payouts.",
  overview:
    "Khurdah (خردة) is the leading circular economy scrap recycling marketplace operating across major cities in Saudi Arabia. Mohamed served as Lead Mobile Architect and Team Lead, owning the project from initial UX wireframes, system architecture, and Flutter development to App Store and Google Play releases. The platform achieved over 50,000 downloads within its first year. The customer application allows users to catalog scrap materials (iron, copper, aluminum, electronics), upload photos, book on-site inspection visits, review binding valuation offers, donate proceeds to partner charities, and receive verified bank payouts within 24 hours.",
  role: "Lead Mobile Architect & Team Lead",
  company: "Tasawk / Khurdah",
  period: "2024 – 2025",
  technologies: [
    "Flutter",
    "Dart",
    "Clean Architecture",
    "BLoC",
    "Google Maps SDK",
    "Image Compression & Media Isolate",
    "Bank Transfer Payout Gateway",
    "Charity Donation API",
    "Push Notifications (FCM)",
    "RTL Localization (Arabic / English)",
    "Fastlane & CI/CD",
  ],
  architecture: [
    "Feature-first Clean Architecture with strict separation of Presentation, Domain, and Data layers",
    "Asynchronous media compression engine using background Dart isolates to process high-resolution scrap photos before network dispatch",
    "Deterministic scrap valuation and settlement state machine handling dual resolution paths (Direct Bank Transfer vs Charity Endowment)",
  ],
  architectureLayers: [
    {
      name: "Presentation (Catalog & Pickup Scheduling)",
      responsibility:
        "Material classification grids, interactive camera capture with thumbnail preview, Google Maps location pinning, bilingual RTL/LTR interface, and real-time order progression sheets.",
      components: [
        "ScrapCatalogBloc",
        "PhotoUploadPipeline",
        "AddressLocationPicker",
        "OrderTimelineView",
      ],
    },
    {
      name: "Domain (Lifecycle & Settlement Rules)",
      responsibility:
        "Enforces lifecycle transitions from scrap request submission to valuation approval, charity covenant selection, and bank IBAN validation.",
      components: [
        "CreateScrapRequestUseCase",
        "ValidateIbanUseCase",
        "SubmitCharityDonationUseCase",
        "ScrapOrderRepositoryInterface",
      ],
    },
    {
      name: "Data & Infrastructure",
      responsibility:
        "Manages multipart HTTP uploads with automatic backoff retry policies, cached request drafts, and push notification stream listeners.",
      components: [
        "ScrapApiClient",
        "OfflineDraftDao",
        "FcmNotificationService",
        "MediaCompressionManager",
      ],
    },
  ],
  problem:
    "Traditional scrap trading in Saudi Arabia was an opaque, unorganized market characterized by volatile unverified prices, logistical pickup friction, and lack of trusted payment channels. Households and businesses had no accessible, transparent mechanism to responsibly recycle metal waste or verify fair market rates.",
  responsibilities: [
    "Owned the complete design, architecture, engineering, and delivery phases of the client mobile platform across Android and iOS.",
    "Hired, onboarded, and led the technical engineering team, establishing code review protocols, architecture RFCs, and sprint planning.",
    "Built the client-side multi-image compression pipeline, drastically minimizing cellular data usage during heavy media uploads.",
    "Integrated Google Maps geolocation for precise doorstep address pinning and municipal service radius verification.",
    "Engineered dual payout settlement workflows supporting direct bank IBAN transfers within 24 hours and direct donation allocations to verified Saudi charities.",
    "Managed Google Play Store and Apple App Store submission compliance, production releases, and post-launch updates.",
  ],
  challenges: [
    "Handling multiple high-resolution photos of heavy scrap items over fluctuating 4G/5G mobile connections without UI stutter or upload failures.",
    "Ensuring immediate user trust with transparent pricing rate cards and real-time representative inspection status updates.",
  ],
  solutions: [
    "Offloaded image resizing and JPEG compression to background Dart isolates, reducing payload sizes by over 70% while keeping the main UI thread at a silky 60fps.",
    "Designed a reactive order status tracker driven by Firebase Cloud Messaging and WebSocket fallbacks, delivering instant notifications at each operational step.",
  ],
  engineeringDecisions: [
    {
      title: "Isolate-Based Background Image Compression Pipeline",
      context:
        "Scrap orders require multiple detailed photographs of industrial metals and appliances for preliminary assessment, frequently leading to memory pressure and upload timeouts on mid-range devices.",
      decision:
        "Implemented Dart compute isolates to perform image resizing, rotation correction, and adaptive JPEG quantization concurrently without blocking the main event loop.",
      tradeOff: "Marginal CPU burst during image capture in exchange for instantaneous UI responsiveness and minimal upload payload.",
      result:
        "Reduced photo upload payload by 75% and achieved a 99.4% first-attempt upload success rate across all mobile network conditions.",
    },
    {
      title: "Dual-Path Settlement Architecture (IBAN vs Charity Donation)",
      context:
        "Users needed the flexibility to either receive scrap sale proceeds via bank transfer or donate the full amount directly to recognized Saudi philanthropic organizations.",
      decision:
        "Engineered an abstract settlement domain contract with distinct strategy handlers for IBAN payout verification and charity covenant allocation.",
      tradeOff: "Required additional regulatory compliance verification and dual ledger accounting webhooks.",
      result:
        "Facilitated thousands of successful charity donation pledges and rapid 24-hour bank transfer payouts.",
    },
  ],
  features: [
    "Scrap material catalog supporting iron, copper, aluminum, electronics, and commercial scrap",
    "Multi-photo capture with in-app camera, automated orientation, and thumbnail previews",
    "Interactive Google Maps address pinpointing with geofenced service coverage checks",
    "Delegate inspection scheduling with flexible morning and evening time slots",
    "Live valuation review with accept, reject, or re-negotiate capabilities",
    "Option to donate scrap proceeds directly to licensed charity organizations",
    "Secure bank transfer payouts deposited within 24 hours of collection",
    "Detailed order status timeline from request creation to final payout settlement",
  ],
  outcomes: [
    "Surpassed 50,000+ app downloads in its first operational year across Riyadh and expanding Saudi markets.",
    "Established a benchmark circular economy mobile platform in Saudi Arabia with stellar customer satisfaction.",
    "Built, trained, and successfully delivered the engineering team, enabling sustained feature velocity.",
    "Published and maintained active production apps on both Google Play and Apple App Store.",
  ],
  liveUrl: "https://khurdah.com",
  googlePlayUrl: "https://play.google.com/store/apps/details?id=com.tasawk.khurdah.client&hl=en",
  appStoreUrl: "https://apps.apple.com/ca/app/khurdah-%D8%AE%D8%B1%D8%AF%D8%A9/id6504227486",
  tags: [
    "Circular Economy",
    "Recycling",
    "E-commerce",
    "Saudi Arabia",
    "Clean Architecture",
    "Google Maps",
    "FinTech / Payouts",
    "50K+ Downloads",
  ],
  relatedProjectSlugs: ["khurdah-driver", "khurdah-erp-logistics", "azda"],
};
