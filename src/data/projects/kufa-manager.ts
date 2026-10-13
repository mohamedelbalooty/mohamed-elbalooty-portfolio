import { Project } from "./types";

export const kufaManagerProject: Project = {
  slug: "kufa-manager",
  title: "Kufa Manager — مدير كوفة",
  subtitle: "Branch Order Operations & Sunmi POS Smart Terminal Integration · Saudi Arabia",
  category: "ERP / POS",
  featured: true,
  order: 5,
  shortDescription:
    "Dedicated branch operations and POS fulfillment application for Al-Kufa restaurant managers across 19 Saudi branches, integrated directly with Sunmi POS terminals for automated kitchen ticketing, receipt printing, and order lifecycle dispatch.",
  overview:
    "Kufa Manager (مدير كوفة) is the mission-critical branch operations and order fulfillment application engineered for Al-Kufa store managers across all 19 branches in Saudi Arabia. Mohamed designed and architected the application to streamline the end-to-end branch fulfillment pipeline—from instant order ingestion to kitchen ticketing, status transitions, and courier handover. A central technical milestone was the hardware integration with Sunmi POS smart terminals, enabling automated kitchen ticket printing, cashier receipt generation, and barcode-verified order dispatch directly from Android-based commercial POS devices.",
  role: "Lead Mobile Architect & Team Lead",
  company: "Tasawk / Al-Kufa Food Company",
  period: "2024 – 2025",
  technologies: [
    "Flutter",
    "Dart",
    "Sunmi POS SDK",
    "Thermal ESC/POS Printing",
    "Platform Channels (Kotlin/Android)",
    "Clean Architecture",
    "BLoC",
    "WebSockets & Real-time Events",
    "Offline Order Queue",
    "RTL Localization",
    "Fastlane & CI/CD",
  ],
  architecture: [
    "Hardware Abstraction Layer (HAL) interfacing Flutter BLoC state management with native Sunmi thermal printer drivers",
    "Real-time bi-directional order stream with automatic WebSocket reconnection and push notification fallback",
    "Resilient state machine managing strict restaurant order milestones (Received → Accepted → Kitchen Prep → Ready → Dispatched → Completed)",
  ],
  architectureLayers: [
    {
      name: "Presentation (Branch Dashboard & Order Kanban)",
      responsibility:
        "Touch-optimized order queue with visual urgency indicators, auditory alert chimes, one-tap status updates, item availability switches, and Sunmi print preview.",
      components: [
        "OrderQueueBloc",
        "OrderKanbanView",
        "BranchItemToggleSheet",
        "PrintReceiptDialog",
      ],
    },
    {
      name: "Domain (Fulfillment Rules & State Progression)",
      responsibility:
        "Enforces irreversible order transition states, cancellation policies, branch cutoff hours, and kitchen prep SLA timers.",
      components: [
        "AdvanceOrderStatusUseCase",
        "PrintKitchenTicketUseCase",
        "ToggleItemAvailabilityUseCase",
        "BranchOrderRepositoryInterface",
      ],
    },
    {
      name: "Data & Hardware Services",
      responsibility:
        "Android platform channel bridges to Sunmi printer service, thermal ESC/POS template generator, and real-time socket connections.",
      components: [
        "SunmiPrinterBridge",
        "ThermalTemplateBuilder",
        "BranchOrderSocketService",
        "OfflineOrderCacheDao",
      ],
    },
  ],
  problem:
    "Kitchen and cashier staff in fast-paced QSR branches cannot navigate complex desktop ERPs while managing high-volume order flows. Manual kitchen ticket transcription led to preparation delays, missed customizations, and lost delivery courier handovers during peak hours.",
  responsibilities: [
    "Architected and developed the dedicated branch manager application tailored for heavy daily restaurant operations across 19 branches.",
    "Engineered native Android platform channels bridging Flutter with Sunmi POS hardware SDKs for automated thermal printing.",
    "Implemented acoustic and visual alert systems ensuring kitchen and cashier staff immediately register incoming orders.",
    "Built branch-level catalog controls allowing managers to mark specific ingredients or menu items out of stock in real-time.",
    "Structured reliable courier handover protocols verifying order completeness before driver departure.",
    "Led the technical engineering squad through deployment, branch testing on Sunmi terminals, and Google Play Store release.",
  ],
  challenges: [
    "Ensuring 100% reliable automated receipt and kitchen ticket printing on Sunmi POS hardware under high-temperature kitchen environments and intermittent Wi-Fi.",
    "Preventing duplicate status transitions when multiple branch tablets or cashiers view the same incoming order queue simultaneously.",
  ],
  solutions: [
    "Developed an asynchronous printer spooler with hardware status checks (paper-out, head overheating, cutter lock) and automatic retry queuing.",
    "Applied optimistic UI updates backed by idempotent server-side state transitions with version locks, preventing concurrent cashier collisions.",
  ],
  engineeringDecisions: [
    {
      title: "Native Sunmi Hardware Bridge & ESC/POS Spooler",
      context:
        "Sunmi POS terminals run custom Android ROMs with proprietary printer services (Sunmi Printer SDK) requiring low-level AIDL/IPC bindings.",
      decision:
        "Built a dedicated Kotlin platform channel wrapper with a robust ESC/POS receipt layout generator in Dart, abstracting Sunmi hardware calls behind clean Flutter domain interfaces.",
      tradeOff: "Added native Kotlin bridge maintenance alongside Flutter codebase.",
      result:
        "Instant, zero-latency ticket printing the exact second an order arrives, completely eliminating manual kitchen ticket writing across all 19 branches.",
    },
    {
      title: "Idempotent Real-Time Order Stream with Offline Recovery",
      context:
        "Restaurant kitchens often experience Wi-Fi drops due to stainless steel equipment and high interference. Missed orders directly cause customer churn.",
      decision:
        "Implemented WebSocket event streaming paired with FCM high-priority data messages and a local SQLite sync journal that reconciles upon reconnect.",
      tradeOff: "Required complex dual-channel message deduplication logic on the device.",
      result:
        "Zero lost orders across peak operational shifts and seamless recovery after network blips.",
    },
  ],
  features: [
    "Real-time incoming order dashboard with audio chime alerts and color-coded urgency indicators",
    "Deep hardware integration with Sunmi POS terminals for automated thermal receipt and kitchen ticket printing",
    "One-tap order lifecycle progression: Accepted, Kitchen Prep, Ready for Pickup, and Dispatched",
    "Live menu item & ingredient availability toggle to instantly reflect out-of-stock items in the customer app",
    "Takeaway vs Home Delivery queue separation for optimized kitchen counter staging",
    "Courier handover confirmation with order summary and receipt verification",
    "Daily branch fulfillment metrics and completed order history log",
  ],
  outcomes: [
    "Successfully deployed across all 19 Al-Kufa restaurant branches covering the Kingdom of Saudi Arabia.",
    "Cut branch order-to-kitchen processing latency down to seconds with automated Sunmi POS ticket printing.",
    "Formed the operational backbone of Al-Kufa's digital transformation, operating reliably during peak meal rushes.",
    "Published on Google Play Store for enterprise branch terminal management.",
  ],
  liveUrl: "https://kufa.sa/en",
  googlePlayUrl: "https://play.google.com/store/apps/details?id=com.tasawk.kufa.manager&hl=ar",
  tags: [
    "POS / ERP",
    "Hardware Integration",
    "Sunmi POS",
    "Thermal Printing",
    "Branch Management",
    "QSR",
    "Saudi Arabia",
    "Clean Architecture",
    "Real-Time",
  ],
  relatedProjectSlugs: ["kufa", "pos-ecr-systems", "khurdah-erp-logistics"],
};
