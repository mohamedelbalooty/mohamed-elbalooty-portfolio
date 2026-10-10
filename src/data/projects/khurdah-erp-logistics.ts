import { Project } from "./types";

export const khurdahErpLogisticsProject: Project = {
  slug: "khurdah-erp-logistics",
  title: "Khurdah ERP & Logistics — مندوب خردة",
  subtitle: "On-Site Scrap Valuation, Field Auditing & Enterprise ERP Synchronization",
  category: "ERP / POS",
  featured: true,
  order: 3,
  shortDescription:
    "Enterprise field representative and ERP operations application enabling specialized scrap appraisers to inspect materials on-site, compute dynamic commodity quotes, manage charity covenants, and synchronize directly with the central ERP.",
  overview:
    "Khurdah ERP & Logistics (Asas Mineral REP / مندوب خردة) is the operational nerve center connecting field inspection delegates directly with central enterprise resource planning (ERP) systems. Mohamed architected and developed the application to solve the most technically intricate phase of the circular economy workflow: real-time, on-site appraisal. When customer scrap requests are logged, delegates travel to the location, test material grades, calculate binding quotes using live commodity market indices, annotate inspection photos, formalize charity donation options, and synchronize inventory records with central ERP databases in real time.",
  role: "Lead Mobile Architect & Team Lead",
  company: "Tasawk / Khurdah",
  period: "2024 – 2025",
  technologies: [
    "Flutter",
    "Dart",
    "Clean Architecture",
    "BLoC",
    "ERP Integration & RESTful APIs",
    "Commodity Pricing Valuation Engine",
    "Offline Cache & Synchronization",
    "Inspection Media Annotation",
    "Google Maps Geofencing",
    "Role-Based Access Control (RBAC)",
  ],
  architecture: [
    "Rule-driven dynamic valuation engine computing price matrices based on metal grade, weight estimates, purity factors, and market fluctuations",
    "Idempotent, transactional ERP synchronization bridge with robust conflict resolution algorithms",
    "Clean Architecture domain layer isolating appraisal formulas from backend ERP schemas",
  ],
  architectureLayers: [
    {
      name: "Presentation (Field Appraisal & Quotation)",
      responsibility:
        "Appraisal rate card calculators, inspection item checklist, dynamic quote generation views, and delegate assignment dashboards.",
      components: [
        "AppraisalBloc",
        "CommodityRateSheet",
        "InspectionCameraWidget",
        "QuoteConfirmationDialog",
      ],
    },
    {
      name: "Domain (Commodity Valuation & ERP Rules)",
      responsibility:
        "Calculates valuation quotes based on weight, scrap category, grade multipliers, and charity deduction covenants.",
      components: [
        "CalculateQuoteUseCase",
        "SubmitInspectionUseCase",
        "SynchronizeErpOrderUseCase",
        "ErpRepositoryInterface",
      ],
    },
    {
      name: "Data & Enterprise ERP Bridge",
      responsibility:
        "Connects to enterprise ERP endpoints, manages tokenized authorization for field staff, and executes atomic two-way data sync.",
      components: [
        "ErpApiClient",
        "OfflineInspectionDao",
        "CommodityPriceCache",
        "AuditLogService",
      ],
    },
  ],
  problem:
    "Evaluating scrap metal accurately on-site requires deep domain knowledge of fluctuating commodity prices (copper, brass, aluminum, steel). Field representatives previously relied on informal estimations or phone calls back to headquarters, causing inconsistent valuations, margin erosion, delay in quote issuance, and inventory desynchronization with central ERP ledgers.",
  responsibilities: [
    "Designed, architected, and developed the enterprise representative mobile application from scratch to App Store and Google Play delivery.",
    "Built the dynamic appraisal formula engine supporting variable metal purity percentages and automated deduction fees.",
    "Engineered bidirectional ERP synchronization allowing delegates to generate binding quotes accepted instantly by the client app.",
    "Hired and led the mobile engineering team, establishing rigorous software design patterns and unit tests for valuation calculations.",
  ],
  challenges: [
    "Commodity metal spot prices change rapidly and require dynamic caching to ensure delegates quote valid prices during field visits.",
    "Preventing duplicate quote generation or ERP ledger discrepancies when delegates operate in intermittent signal conditions.",
  ],
  solutions: [
    "Built a TTL-governed local pricing cache that automatically updates upon connection and marks rates with verified validity timestamps.",
    "Implemented transactional idempotent request keys for all quote submissions, guaranteeing atomic execution against the ERP database.",
  ],
  engineeringDecisions: [
    {
      title: "Isolated Dynamic Commodity Valuation Domain Service",
      context:
        "Valuation formulas differ by scrap material (e.g. wire copper purity vs cast aluminum vs shredded steel) and change based on daily market indices.",
      decision:
        "Created a standalone pure-Dart pricing calculation domain service independent of UI and network layers, fully verified with exhaustive unit tests.",
      tradeOff: "Required maintaining client-side formula parity with server-side pricing rules.",
      result:
        "Instantaneous client-side valuation feedback on-site with zero calculation discrepancies against backend accounting.",
    },
    {
      title: "Idempotent ERP State Synchronization Bridge",
      context:
        "Network drops during quote submission frequently triggered delegate re-taps, risking duplicate order lines in the central ERP.",
      decision:
        "Implemented client-generated UUID idempotency keys on every appraisal transaction with transactional replay guards.",
      tradeOff: "Slight overhead for transaction ledger tracking.",
      result:
        "100% data integrity with zero duplicate quote records across the entire ERP deployment.",
    },
  ],
  features: [
    "Comprehensive field appraisal tool with automated commodity metal price calculators",
    "Inspection photo capture with mark-up annotation for item defect or purity classification",
    "Instant binding quote generation delivered directly to the customer's Khurdah app",
    "Charity donation covenant configuration for customers choosing philanthropic disposal",
    "Direct synchronization with central ERP inventory, financial ledgers, and driver dispatch",
    "Delegate daily inspection itinerary and Google Maps route optimization",
    "Full offline evaluation capability with automated sync upon re-establishing connection",
    "Audit trail tracking delegate appraisals, quote changes, and customer approvals",
  ],
  outcomes: [
    "Transformed field scrap appraisal from a multi-hour manual process to under 5 minutes on-site.",
    "Seamlessly bridged field operations with the 50K+ customer app ecosystem and driver fleet.",
    "Eliminated pricing errors and streamlined enterprise ERP accounting and warehouse intake.",
    "Published and maintained active production releases on Google Play and Apple App Store.",
  ],
  liveUrl: "https://khurdah.com",
  googlePlayUrl: "https://play.google.com/store/apps/details?id=com.tasawk.khurdah.rep&hl=en",
  appStoreUrl: "https://apps.apple.com/ca/app/asas-mineral-rep/id6698865452",
  tags: [
    "ERP / POS",
    "Enterprise Architecture",
    "Clean Architecture",
    "Commodity Pricing",
    "Logistics",
    "Saudi Arabia",
  ],
  relatedProjectSlugs: ["khurdah-client", "khurdah-driver", "pos-ecr-systems"],
};
