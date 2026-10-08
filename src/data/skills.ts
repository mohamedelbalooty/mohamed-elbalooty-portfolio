export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Core Technologies",
    description: "Primary languages and cross-platform framework engines.",
    skills: ["Flutter", "Dart", "Kotlin"],
  },
  {
    title: "Architecture & Design Patterns",
    description: "Enterprise architectural principles ensuring decoupling and maintainability.",
    skills: [
      "Clean Architecture",
      "MVVM",
      "MVC",
      "SOLID Principles",
      "OOP",
      "Design Patterns",
    ],
  },
  {
    title: "State Management",
    description: "Predictable, unidirectional data flow and reactive state isolation.",
    skills: ["BLoC", "Provider", "GetX"],
  },
  {
    title: "APIs & Real-Time Data",
    description: "Network protocols, persistent sockets, and local database storage.",
    skills: [
      "RESTful APIs",
      "GraphQL",
      "Firebase",
      "Socket.io",
      "Pusher",
      "SQLite",
    ],
  },
  {
    title: "DevOps, CI/CD & Delivery",
    description: "Automated pipelines, store compliance, and multi-flavor compilation.",
    skills: [
      "CI/CD Pipelines",
      "GitHub Actions",
      "Fastlane",
      "App Store Deployment",
      "Google Play Deployment",
      "Git",
    ],
  },
  {
    title: "Testing & Quality Assurance",
    description: "Automated test suites guarding business rules and UI flows against regressions.",
    skills: [
      "Unit Testing",
      "Widget Testing",
      "Integration Testing",
      "Defensive Error Handling",
    ],
  },
  {
    title: "Mobile Platform Engineering & Features",
    description: "Production mobile capabilities spanning security, commerce, and hardware.",
    skills: [
      "Secure Auth & Token Management",
      "Payment Gateway Integration",
      "In-App Purchases & Subscriptions",
      "Offline Caching & Sync",
      "Performance Tuning & Optimization",
      "Google Maps SDK & Geolocation",
      "WebRTC",
      "Android SDK & iOS SDK Bridges",
    ],
  },
  {
    title: "AI-Assisted Engineering",
    description: "Leveraging state-of-the-art AI tooling as an engineering multiplier.",
    skills: ["ChatGPT", "GitHub Copilot", "Cursor", "Claude"],
  },
];
