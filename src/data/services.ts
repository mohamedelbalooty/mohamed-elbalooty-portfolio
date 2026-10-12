export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  tagline: string;
  problem: string;
  whatToExpect: string;
  activities: string[];
  deliverables: string[];
  engagementModels: string[];
  evidenceSlugs: string[];
  arabicTitle: string;
  arabicDescription: string;
}

export const services: ServiceItem[] = [
  {
    id: "fintech-ecommerce",
    slug: "fintech-ecommerce-mobile-engineering",
    title: "FinTech & E-Commerce Mobile Engineering",
    shortTitle: "FinTech & E-Commerce",
    badge: "Production Engineering",
    tagline:
      "Architecting zero-tolerance payment workflows, digital wallets, and high-conversion commerce applications across Android and iOS.",
    problem:
      "Financial transactions, digital wallets, and multi-vendor checkout funnels leave zero room for error. Network dropouts, race conditions, or unhandled token expirations result in double debits, broken orders, and lost customer trust.",
    whatToExpect:
      "Direct senior engineering ownership from architecture design to store deployment. Resilient client-side idempotency, secure biometric authorization, token refresh interceptors, and high-performance checkout experiences built with Clean Architecture.",
    activities: [
      "Designing decoupled Clean Architecture (Presentation, Domain, Data) ensuring 100% testable financial use cases",
      "Implementing deterministic idempotency keys and state locking to prevent double submissions during dropouts",
      "Integrating regional payment gateways (Mada, Apple Pay, STC Pay, credit cards) and recurring subscription billing",
      "Engineering offline-first caching and automatic reconciliation upon network reconnection",
      "Building multi-tenant e-commerce catalog frontends with Bagisto, OpenCart, and regional Saudi theme engines (Zid, Salla)",
    ],
    deliverables: [
      "Production-grade, fully typed Flutter codebase (Android & iOS)",
      "Strict Clean Architecture domain layer with unit-tested use cases",
      "Store-compliant release builds with biometric gating and encrypted token storage",
      "Technical architecture documentation and payment integration flowcharts",
    ],
    engagementModels: [
      "End-to-End Product Engineering Contract",
      "Milestone-based Feature Delivery (Wallets, Payments, Checkouts)",
      "Senior Flutter Technical Contractor for FinTech & Commerce Platforms",
    ],
    evidenceSlugs: [
      "lirat",
      "card-app",
      "p2p-syria",
      "white-labeled-ecommerce",
      "khurdah-client",
    ],
    arabicTitle: "هندسة وتطوير تطبيقات التكنولوجيا المالية والتجارة الإلكترونية",
    arabicDescription:
      "بناء وتطوير المحافظ الرقمية وبوابات الدفع الإلكتروني وتطبيقات المتاجر الإلكترونية مع ضمان أمان المعاملات وتفادي تكرار العمليات عبر Clean Architecture.",
  },
  {
    id: "mobile-architecture-leadership",
    slug: "mobile-architecture-team-leadership",
    title: "Mobile Architecture, Technical Leadership & Team Building",
    shortTitle: "Architecture & Leadership",
    badge: "Engineering Leadership",
    tagline:
      "Transforming fragmented mobile codebases into scalable, multi-tenant architectures while mentoring engineering squads and standardizing release pipelines.",
    problem:
      "Rapidly scaling startups often face velocity plateaus: codebase coupling slows down feature delivery, PR reviews lack standards, regressions spike in production, and mobile engineers work without a unified architectural blueprint.",
    whatToExpect:
      "Hands-on architectural governance and squad mentorship. Implementation of predictable state management (BLoC), multi-client SaaS flavors, automated CI/CD release pipelines (Fastlane, GitHub Actions), and pragmatic code review checklists.",
    activities: [
      "Conducting comprehensive mobile codebase architecture and health audits",
      "Standardizing Clean Architecture, SOLID principles, and unidirectional BLoC state management across squads",
      "Architecting multi-client SaaS flavor environments for rapid white-labeled app distribution",
      "Setting up automated CI/CD pipelines for automated testing, signing, and App Store / Google Play deployments",
      "Mentoring engineers, establishing PR review standards, and facilitating Agile sprint planning",
    ],
    deliverables: [
      "Architecture Blueprint & System RFC document",
      "Standardized Flutter project starter template with modular flavor configuration",
      "Automated CI/CD pipelines (GitHub Actions / Fastlane) for store submission",
      "Code review checklist and engineering onboarding guide",
    ],
    engagementModels: [
      "Fractional Mobile Team Lead / Engineering Advisory",
      "Architecture Audit & Refactoring Roadmap Retainer",
      "Interim Squad Leadership for Mobile Delivery Accelerations",
    ],
    evidenceSlugs: [
      "khurdah-erp-logistics",
      "kufa-manager",
      "pos-ecr-systems",
      "white-labeled-ecommerce",
    ],
    arabicTitle: "استشارات البنية المعمارية وقيادة فرق هندسة الموبايل",
    arabicDescription:
      "تصميم الهياكل البرمجية القابلة للتوسع (Clean Architecture)، إدارة بيئات الـ SaaS Flavors، أتمتة خطوط الإطلاق والتوزيع، وتوجيه وقيادة فرق المطورين.",
  },
  {
    id: "ai-modernization",
    slug: "ai-assisted-mobile-modernization",
    title: "AI-Assisted Modernization & Refactoring of Mobile Codebases",
    shortTitle: "Codebase Modernization",
    badge: "Modernization & Refactoring",
    tagline:
      "Leveraging Spec-Driven Development (SDD) and agentic engineering workflows to safely refactor legacy Flutter codebases and expand test coverage.",
    problem:
      "Legacy mobile applications accumulate tech debt, obsolete state patterns, and zero test coverage. Manual refactoring is slow and carries high risk of unintended regressions in production.",
    whatToExpect:
      "Systematic, spec-guided modernization. Utilizing Spec-Driven Development (SDD) and agentic workflows (Cursor, Claude, Spec-Kit, custom MCP tools) to formalize requirements, decouple spaghetti UI code, and synthesize robust unit/widget test suites.",
    activities: [
      "Auditing legacy Flutter applications for tight coupling, memory leaks, and obsolete packages",
      "Formulating deterministic specifications (SDD) for existing business features prior to refactoring",
      "Decoupling legacy UI widgets into pure Domain use cases and reactive state containers",
      "Synthesizing comprehensive unit test matrices and edge-case test suites using agentic tooling",
      "Upgrading legacy dependencies, Dart SDKs, and platform bridges without downtime",
    ],
    deliverables: [
      "Refactored, cleanly decoupled modules adhering to Clean Architecture",
      "Extensive unit and widget test suite guarding critical business logic against regressions",
      "Codebase modernization audit report with phased migration milestones",
      "Documentation on maintaining SDD and agent-accelerated development practices",
    ],
    engagementModels: [
      "Targeted Modernization Sprint (1-3 critical feature modules)",
      "Legacy Codebase Health Audit & Refactoring Blueprint",
      "Modernization Advisory for Engineering Teams",
    ],
    evidenceSlugs: [
      "lirat",
      "white-labeled-ecommerce",
      "khurdah-client",
      "kufa",
    ],
    arabicTitle: "تحديث وإعادة هيكلة كود التطبيقات بالذكاء الاصطناعي",
    arabicDescription:
      "إعادة هيكلة التطبيقات القديمة وتحويلها إلى Clean Architecture مع توليد اختبارات آلية شاملة باستخدام منهجية التطوير الموجه بالمواصفات (SDD).",
  },
];

export function getAllServices(): ServiceItem[] {
  return services;
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}
