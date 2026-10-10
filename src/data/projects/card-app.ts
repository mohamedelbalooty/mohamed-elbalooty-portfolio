import { Project } from "./types";

export const cardAppProject: Project = {
  slug: "card-app",
  title: "Card App",
  subtitle: "FinTech Card Management & Subscription Hub",
  category: "FinTech",
  featured: true,
  order: 9,
  shortDescription:
    "Engineered a comprehensive card management application providing digital card issuance, transaction limits, security controls, and recurring subscription tracking.",
  overview:
    "Card App is a FinTech mobile product developed at Geexar to empower users with self-service management of physical and virtual payment cards. Mohamed led the Flutter architecture, crafting secure flows for sensitive card data masking, dynamic spending limits, PIN updates, and subscription controls.",
  role: "Senior Flutter Developer",
  company: "Geexar",
  period: "Mar. 2024 – Jun. 2025",
  technologies: [
    "Flutter",
    "Dart",
    "Clean Architecture",
    "Provider / BLoC",
    "In-App Purchases",
    "Secure Storage",
    "RESTful APIs",
  ],
  architecture: [
    "PCI-compliant presentation shielding sensitive PAN numbers using native secure text rendering",
    "Hardware-backed token storage via Android Keystore & iOS Keychain bridges",
    "Decoupled card lifecycle domain services",
  ],
  problem:
    "Managing financial payment cards on mobile requires balancing rapid self-service controls with strict security standards, preventing memory leakage of card numbers, CVVs, and authorization tokens.",
  responsibilities: [
    "Architected client-side card security abstractions preventing plain-text storage of PANs.",
    "Integrated recurring subscription management APIs and in-app purchase modules.",
    "Enforced unit test coverage across card validation rules and cryptographic signature helpers.",
  ],
  challenges: [
    "Rendering animated card previews while ensuring sensitive credentials remain shielded from screen capture and OS memory dumps.",
    "Synchronizing card freeze/unfreeze status instantaneously across multiple active sessions.",
  ],
  solutions: [
    "Utilized native platform channels to enable secure display flags (FLAG_SECURE on Android and screen shielding on iOS).",
    "Employed atomic optimistic state updates with real-time push synchronization.",
  ],
  engineeringDecisions: [
    {
      title: "Native Platform Flags for Screenshot Prevention",
      context: "FinTech applications must protect sensitive card data from OS-level screenshotting and task-switcher previews.",
      decision: "Built custom Flutter-to-native method channels toggling Android FLAG_SECURE and iOS privacy blur views when backgrounded.",
      tradeOff: "Requires platform-specific code maintenance across iOS and Android.",
      result: "Achieved full compliance with banking security standards and prevented accidental data exposure.",
    },
  ],
  features: [
    "Virtual card instant issuance and dynamic card details revealing",
    "One-tap card freeze, spending limit adjustment, and PIN change",
    "Categorized subscription discovery and recurring charge monitoring",
    "Biometric verification for high-risk actions",
  ],
  outcomes: [
    "Delivered bank-grade card management capabilities supporting Geexar's fintech ecosystem.",
    "Reduced customer support tickets for simple card control actions through intuitive self-service UX.",
  ],
  googlePlayUrl: "https://play.google.com/store/apps/details?id=app.carda.app",
  tags: ["FinTech", "Card Management", "Security", "Clean Architecture", "Payments"],
  relatedProjectSlugs: ["lirat", "p2p-syria"],
};
