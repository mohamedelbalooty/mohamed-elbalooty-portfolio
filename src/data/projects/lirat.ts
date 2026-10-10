import { Project } from "./types";

export const liratProject: Project = {
  slug: "lirat",
  title: "Lirat Wallet — محفظة ليرات",
  subtitle: "SaaS Digital Wallet & Financial Services Platform",
  category: "FinTech",
  featured: true,
  order: 10,
  shortDescription:
    "Architected and developed a SaaS-based digital wallet platform featuring secure payment integrations and subscription management under strict security requirements.",
  overview:
    "Lirat is a core SaaS-based FinTech digital wallet platform developed at Geexar. Mohamed served as Senior Flutter Developer, leading mobile architecture and development. The platform required resilient payment integrations, subscription management, and bank-grade data security while ensuring an effortless consumer onboarding experience.",
  role: "Senior Flutter Developer & Mobile Squad Lead",
  company: "Geexar",
  period: "Mar. 2024 – Jun. 2025",
  technologies: [
    "Flutter",
    "Dart",
    "Clean Architecture",
    "BLoC",
    "RESTful APIs",
    "Secure Auth",
    "Payment Gateway",
    "Token Management",
    "Fastlane",
  ],
  architecture: [
    "Presentation Layer: Feature-driven BLoC state management with strict event-state isolation",
    "Domain Layer: Pure Dart entities, use cases, and repository interfaces without framework dependencies",
    "Data Layer: API models, encryption interceptors, biometric auth token storage, and offline caching",
  ],
  architectureLayers: [
    {
      name: "Presentation (UI & State)",
      responsibility: "Declarative Flutter widgets, reactive BLoC state consumption, and biometric-gated view routing.",
      components: ["WalletBloc", "TransactionHistoryBloc", "PaymentSheetWidget", "BiometricGate"],
    },
    {
      name: "Domain (Business Logic)",
      responsibility: "Pure business rules and use cases independent of Flutter, UI, or external databases.",
      components: ["TransferFundsUseCase", "VerifyPaymentSessionUseCase", "WalletRepositoryInterface"],
    },
    {
      name: "Data & Infrastructure",
      responsibility: "Secure network clients, token refresh interceptors, encrypted storage, and telemetry.",
      components: ["EncryptedDioClient", "SecureTokenStorage", "WalletRemoteDataSource"],
    },
  ],
  problem:
    "FinTech digital wallets demand zero-tolerance for transaction failure, uncompromised token security, and deterministic state transitions even under unstable mobile networks.",
  responsibilities: [
    "Architected scalable mobile architecture using Flutter and Clean Architecture principles.",
    "Integrated secure payment gateways and recurring subscription billing features.",
    "Led a 5-member mobile team applying Agile methodologies, sprint planning, and systematic code reviews.",
    "Mentored junior engineers on defensive programming, error modeling, and state predictability.",
  ],
  challenges: [
    "Preventing double-submission of financial transactions during network dropouts.",
    "Safeguarding authorization tokens with automatic background refresh without user disruption.",
    "Enforcing strict code review standards across a 5-engineer team with differing experience levels.",
  ],
  solutions: [
    "Implemented idempotency keys in request headers and atomic BLoC state locks during payment transit.",
    "Designed an OAuth2 token refresh interceptor with queued retries to keep user sessions continuous and safe.",
    "Established architectural guidelines and pull request checklists focused on Clean Architecture boundaries.",
  ],
  engineeringDecisions: [
    {
      title: "Clean Architecture over Feature-Folder Monolith",
      context: "Financial regulations require strict separation of business rules from UI and external APIs.",
      decision: "Adopted Uncle Bob's Clean Architecture with decoupled Presentation, Domain, and Data packages.",
      tradeOff: "Increases initial boilerplate and entity-to-model mapping overhead.",
      result: "Enabled 100% unit-testable business use cases and insulated business rules from third-party API changes.",
    },
    {
      title: "BLoC for Financial State Determinism",
      context: "Wallet balance and payment states require traceable, event-driven state transitions.",
      decision: "Standardized on flutter_bloc with immutable state definitions.",
      tradeOff: "More verbosity compared to lighter state libraries like GetX.",
      result: "Eliminated race conditions during multi-step verification and gave full auditability to UI events.",
    },
  ],
  features: [
    "Digital wallet balance overview and real-time transaction history",
    "Multi-step secure payment gateway checkout",
    "Subscription and recurring billing lifecycle management",
    "Biometric authentication and encrypted local key storage",
    "Offline caching with automated reconciliation upon reconnection",
  ],
  outcomes: [
    "Delivered scalable SaaS fintech platform supporting continuous user adoption.",
    "Enabled business growth through predictable revenue streams via integrated payment and subscription flows.",
    "Elevated team velocity and code quality across the 5-member mobile engineering unit.",
  ],
  googlePlayUrl: "https://play.google.com/store/apps/details?id=store.lirat.paymoney",
  tags: ["FinTech", "Digital Wallet", "SaaS", "Clean Architecture", "Team Leadership"],
  relatedProjectSlugs: ["p2p-syria", "card-app"],
};
