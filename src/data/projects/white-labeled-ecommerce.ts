import { Project } from "./types";

export const whiteLabeledEcommerceProject: Project = {
  slug: "white-labeled-ecommerce",
  title: "White-Labeled Multi-Tenant E-Commerce Platform",
  subtitle: "Enterprise Multi-Client Flutter Engine for Bagisto, OpenCart, Zid & Salla",
  category: "E-commerce",
  featured: true,
  order: 6,
  shortDescription:
    "Engineered a scalable multi-tenant architecture delivering 6+ white-labeled Flutter mobile stores integrating Bagisto, OpenCart web services, and regional theme engines (zid.sa & salla.sa).",
  overview:
    "At NEOXERO, Mohamed architected a multi-tenant, white-labeled mobile commerce framework. Rather than building and maintaining independent codebases for each merchant, Mohamed built a unified, flavor-driven Flutter engine capable of dynamically configuring themes, branding, payment gateways, and backend endpoints (connecting interchangeably to Bagisto, OpenCart, and Saudi commerce platforms like Zid and Salla).",
  role: "Senior Flutter Developer",
  company: "NEOXERO",
  period: "Jan. 2023 – Feb. 2024",
  technologies: [
    "Flutter",
    "Dart",
    "Multi-Flavor Architecture",
    "Bagisto REST APIs",
    "OpenCart APIs",
    "Zid & Salla Themes",
    "Clean Architecture",
    "Fastlane",
    "CI/CD",
  ],
  architecture: [
    "Flavor-based configuration matrix separating tenant brand assets, bundle identifiers, and API base URLs",
    "Adapter-based Data Layer normalizing disparate REST responses from Bagisto and OpenCart into unified Dart domain models",
    "Dynamic theme token system supporting real-time brand switching without recompilation",
  ],
  architectureLayers: [
    {
      name: "Presentation (Themable Widgets)",
      responsibility: "Component library utilizing design tokens for typography, palettes, and layouts according to tenant configuration.",
      components: ["TenantThemeEngine", "ProductCardWidget", "MultiStepCheckout", "CategoryBrowser"],
    },
    {
      name: "Domain (Unified Commerce Logic)",
      responsibility: "Single set of business rules governing cart calculations, coupon validations, and checkout state.",
      components: ["AddToCartUseCase", "ApplyDiscountUseCase", "CheckoutSessionUseCase"],
    },
    {
      name: "Data (Protocol Adapters)",
      responsibility: "Data source adapters translating vendor-specific API structures into standardized domain entities.",
      components: ["BagistoApiAdapter", "OpenCartApiAdapter", "ZidSallaThemeConnector"],
    },
  ],
  problem:
    "Building standalone mobile apps for every merchant creates severe maintenance bottlenecks, code drift, and exponential QA burdens with every upstream platform update.",
  responsibilities: [
    "Designed and developed 6+ white-labeled Flutter e-commerce applications from a single unified codebase.",
    "Engineered API adapter layers translating divergent Bagisto and OpenCart JSON payloads into consistent domain models.",
    "Integrated web service bridges to support regional merchants operating on zid.sa and salla.sa web ecosystems.",
    "Automated multi-tenant compilation pipelines to streamline multi-client App Store and Google Play releases.",
  ],
  challenges: [
    "Disparate product variation schemas between OpenCart (attribute groups) and Bagisto (configurable products).",
    "Ensuring zero cross-tenant asset or configuration leakage across 6+ branded client builds.",
  ],
  solutions: [
    "Built an intermediate domain data abstraction that unified variant resolution across all backend flavors.",
    "Structured build configurations using Flutter flavors and CI matrix jobs in Fastlane/GitHub Actions.",
  ],
  engineeringDecisions: [
    {
      title: "Adapter Pattern for Heterogeneous Backends",
      context: "Merchants utilized differing commerce engines (Bagisto, OpenCart, custom web services).",
      decision: "Implemented repository adapters adhering to a strict commerce interface, isolating the UI from backend schema quirks.",
      tradeOff: "Required writing and maintaining schema transformation mappers for each backend.",
      result: "The same Flutter UI and business logic powered 6+ stores regardless of their underlying commerce platform.",
    },
    {
      title: "Single Codebase Multi-Tenant Flavoring",
      context: "Managing 6+ separate Git repositories was untenable for bug fixes and feature rollouts.",
      decision: "Unified the apps into a single repository powered by Flutter compile-time flavors and asset injection.",
      tradeOff: "Build configuration files became more intricate.",
      result: "A single bug fix or performance optimization instantly deployed across all 6+ merchant apps.",
    },
  ],
  features: [
    "Full catalog navigation with search, filters, and dynamic attribute selection",
    "Unified cart and multi-gateway checkout (Mada, Credit Cards, Cash on Delivery)",
    "White-label theming system supporting custom colorways, logos, and icon packs",
    "Order tracking, push notifications, and customer profile management",
  ],
  outcomes: [
    "Successfully launched 6+ white-labeled e-commerce applications across iOS and Android.",
    "Radically reduced release times for client updates by sharing 90%+ core code.",
    "Established a reusable enterprise foundation for rapid onboarding of future retail clients.",
  ],
  tags: ["E-commerce", "White-Label", "Multi-Tenant", "Bagisto", "OpenCart", "Zid", "Salla"],
  relatedProjectSlugs: ["lia", "anaqeed-al-fakha"],
};
