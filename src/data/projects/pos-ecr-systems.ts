import { Project } from "./types";

export const posEcrSystemsProject: Project = {
  slug: "pos-ecr-systems",
  title: "POS & ECR Hardware Systems",
  subtitle: "Point of Sale & Electronic Cash Register ERP Integration",
  category: "ERP / POS",
  featured: true,
  order: 5,
  shortDescription:
    "Created and tested POS and ECR mobile applications serving enterprise ERP systems, architecting modular hardware SDK wrappers for physical receipt printers and card terminals.",
  overview:
    "At Crystal Mind, Mohamed developed and thoroughly tested Point of Sale (POS) and Electronic Cash Register (ECR) applications designed to interface seamlessly with enterprise ERP systems. The project demanded high reliability, low-latency transaction processing, and deep integration with physical hardware devices (thermal printers, barcode scanners, and payment card terminals) via native POS machine SDKs.",
  role: "Flutter Developer",
  company: "Crystal Mind",
  period: "Apr. 2022 – Dec. 2022",
  technologies: [
    "Flutter",
    "Dart",
    "Kotlin",
    "POS Machine SDKs",
    "Platform Channels",
    "SQLite",
    "RESTful APIs",
    "Clean Architecture",
  ],
  architecture: [
    "Hardware Abstraction Layer (HAL) decoupling Flutter business logic from physical POS device drivers",
    "Offline-first transactional database powered by SQLite with sync queues",
    "Platform channel bridges translating high-level Dart commands into vendor-specific Android Kotlin SDK calls",
  ],
  architectureLayers: [
    {
      name: "Cashier Interface",
      responsibility: "Touch-optimized POS screen, rapid item lookup, split-bill workflows, and shift totals.",
      components: ["CheckoutTerminalBloc", "QuickMenuGrid", "ReceiptPreviewDialog"],
    },
    {
      name: "POS Hardware Abstraction",
      responsibility: "Unified API for thermal receipt printing, cash drawer kickout, and magnetic/NFC card read events.",
      components: ["PrinterBridgeService", "PaymentTerminalChannel", "BarcodeScannerListener"],
    },
    {
      name: "ERP Synchronization",
      responsibility: "Local SQLite sales ledger with background batch sync to central company ERP endpoints.",
      components: ["LocalLedgerDao", "ErpSyncService", "OfflineReconciliationEngine"],
    },
  ],
  problem:
    "Retail cashiers cannot tolerate software stalls, failed hardware handshakes, or lost sales data when retail store internet connectivity fluctuates.",
  responsibilities: [
    "Built self-contained, reusable, and testable modules and components for handling POS machine SDKs.",
    "Created and executed comprehensive integration test suites across POS and ECR operations.",
    "Architected offline resilience mechanisms ensuring continuous sales processing during network outages.",
    "Integrated mobile checkout data flows directly into company ERP backend systems.",
  ],
  challenges: [
    "Fragile, poorly documented proprietary Android SDKs from different POS machine manufacturers.",
    "Preventing memory leaks and thread locks during continuous hardware polling via native bridges.",
  ],
  solutions: [
    "Engineered a resilient Hardware Abstraction Layer with defensive error boundaries and watchdog timeouts.",
    "Used isolated background Dart isolates and Kotlin Coroutines for asynchronous hardware I/O operations.",
  ],
  engineeringDecisions: [
    {
      title: "Hardware Abstraction Layer (HAL) via Method Channels",
      context: "Different retail stores utilized POS terminals from distinct hardware vendors with proprietary SDKs.",
      decision: "Created a unified Dart hardware interface implemented by interchangeable native Kotlin wrapper modules.",
      tradeOff: "Required deep native Android development and vendor-specific protocol reverse engineering.",
      result: "Enabled the same POS application to operate seamlessly across diverse POS machine brands without touching Flutter business logic.",
    },
  ],
  features: [
    "Fast product barcode scanning, catalog indexing, and cart management",
    "Physical thermal receipt printing with ESC/POS formatting and custom logo rendering",
    "Direct electronic cash register (ECR) drawer triggering and card terminal handshakes",
    "Full offline checkout mode with automated ERP reconciliation upon network recovery",
  ],
  outcomes: [
    "Shipped high-stability POS/ECR software utilized across active retail and ERP environments.",
    "Engineered reusable hardware integration modules that became standardized assets for future company products.",
  ],
  tags: ["ERP / POS", "Hardware SDKs", "Platform Channels", "Clean Architecture", "Kotlin"],
  relatedProjectSlugs: ["white-labeled-ecommerce"],
};
