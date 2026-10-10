export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  location?: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
  projectSlugs?: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  field: string;
}

export const experiences: ExperienceItem[] = [
  {
    company: "Tasawk",
    role: "Flutter Team Leader",
    period: "Jul. 2025 – Present",
    isCurrent: true,
    location: "Cairo, Egypt",
    summary:
      "Leading mobile engineering across Flutter applications, architecting multi-client SaaS flavor architectures, driving Spec-Driven Development (SDD) & AI-agent workflows (Spec-Kit, Superpowers, MCPs), and managing the end-to-end mobile release lifecycle.",
    responsibilities: [
      "Architected and delivered the 3-application Khurdah circular economy ecosystem (Customer, Driver, and ERP Logistics apps), surpassing 50K+ downloads in 1 year across Saudi Arabia while hiring and leading the engineering team.",
      "Architected and launched the Al-Kufa Food Company QSR mobile ecosystem (Customer ordering app achieving 10K+ downloads in 1 year and Kufa Manager with Sunmi POS terminal integration) across 19 branches Kingdom-wide, while hiring and mentoring the technical engineering team.",
      "Championed Spec-Driven Development (SDD) & modern AI-agent workflows across the team using Spec-Kit, Superpowers, and Model Context Protocol (MCP) servers to accelerate architecture scaffolding, test-driven iterations, and automated code audits.",
      "Designed scalable architectures using Flutter, Clean Architecture, and SaaS flavor-based environments for multi-client deployments.",
      "Managed the full mobile application lifecycle (planning, development, testing, release, maintenance) ensuring reliable and on-time delivery.",
      "Oversaw App Store and Google Play releases, maintaining compliance and managing continuous updates across multiple apps.",
      "Collaborated with product, backend, and stakeholders to enhance product quality, optimize UX, and deliver scalable business solutions.",
    ],
    skills: [
      "Flutter",
      "Dart",
      "Clean Architecture",
      "Multi-Flavor SaaS",
      "Spec-Driven Development (SDD)",
      "AI-Agent Workflows (Cursor, Claude)",
      "MCP (Model Context Protocol)",
      "Spec-Kit & Superpowers",
      "Team Leadership",
      "App Store & Google Play Releases",
      "Cross-functional Collaboration",
    ],
    projectSlugs: [
      "khurdah-client",
      "khurdah-driver",
      "khurdah-erp-logistics",
      "kufa",
      "kufa-manager",
      "azda",
      "lia",
      "lia-delivery",
      "anaqeed-al-fakha",
    ],
  },
  {
    company: "Geexar",
    role: "Senior Flutter Developer",
    period: "Mar. 2024 – Jul. 2025",
    location: "Cairo, Egypt",
    summary:
      "Architected SaaS-based FinTech platforms, led a 5-member mobile engineering squad, and delivered mission-critical payment and subscription integrations.",
    responsibilities: [
      "Architected and developed SaaS-based fintech platforms, including the digital wallet Lirat, P2P Syria, and Card App, using Flutter and Dart.",
      "Delivered secure payment integrations and subscription features that supported business growth by enabling scalable revenue streams and expanding user adoption.",
      "Led a 5-member mobile team, applying Agile methodologies, sprint planning, and code reviews.",
      "Mentored junior developers, providing technical guidance and enhancing overall team capabilities.",
    ],
    skills: [
      "FinTech Architecture",
      "Clean Architecture",
      "BLoC",
      "Payment Integrations",
      "Subscription Systems",
      "Team Leadership (5 Engineers)",
      "Agile & Sprint Planning",
      "Code Reviews & Mentoring",
    ],
    projectSlugs: ["lirat", "p2p-syria", "card-app"],
  },
  {
    company: "NEOXERO",
    role: "Senior Flutter Developer",
    period: "Jan. 2023 – Feb. 2024",
    location: "Cairo, Egypt",
    summary:
      "Delivered 6+ white-labeled e-commerce applications integrating Bagisto, OpenCart web services, and regional theme engines (zid.sa, salla.sa).",
    responsibilities: [
      "Developed 6+ white-labeled Flutter e-commerce applications by integrating Bagisto and OpenCart web services to support zid.sa and salla.sa web themes.",
      "Developed and maintained Flutter apps, ensuring performance and best practices through collaboration and leadership.",
    ],
    skills: [
      "White-labeled Architecture",
      "Bagisto REST APIs",
      "OpenCart APIs",
      "Zid & Salla Themes",
      "Multi-Tenant Mobile Design",
      "Performance Tuning",
    ],
    projectSlugs: ["white-labeled-ecommerce", "iqamti"],
  },
  {
    company: "Crystal Mind",
    role: "Flutter Developer",
    period: "Apr. 2022 – Dec. 2022",
    location: "Cairo, Egypt",
    summary:
      "Created POS and ECR systems serving enterprise ERP platforms, engineering modular hardware SDK wrappers for physical receipt printers and payment terminals.",
    responsibilities: [
      "Created and tested POS and ECR apps to serve on ERP systems for company products.",
      "Built self-contained, reusable, and testable modules and components for handling POS machine SDKs.",
    ],
    skills: [
      "Flutter",
      "Kotlin",
      "POS Machine SDKs",
      "ECR Integration",
      "ERP Systems",
      "Modular Code Design",
      "Unit & Integration Testing",
    ],
    projectSlugs: ["pos-ecr-systems"],
  },
  {
    company: "WaitBuzz_Co",
    role: "Flutter Developer",
    period: "Mar. 2021 – Apr. 2022",
    location: "Cairo, Egypt",
    summary:
      "Designed and implemented intuitive user experience features to improve customer satisfaction and aligned product capabilities with business objectives.",
    responsibilities: [
      "Designed and implemented intuitive user experience features to improve customer satisfaction.",
      "Collaborated with managers and other developers to align app features with business objectives.",
    ],
    skills: [
      "Flutter",
      "Dart",
      "UI/UX Engineering",
      "State Management",
      "Cross-Functional Alignment",
    ],
  },
];

export const education: EducationItem = {
  institution: "Mansoura University",
  degree: "Bachelor of Computer Science",
  field: "Information Technology",
  period: "Aug. 2017 – May 2021",
};

export const languages = [
  { language: "Arabic", proficiency: "Native / Bilingual" },
  { language: "English", proficiency: "Professional Working" },
];

export interface AiWorkflowItem {
  title: string;
  description: string;
  tools: string[];
}

export interface AiEngineeringSection {
  title: string;
  badge: string;
  summary: string;
  workflows: AiWorkflowItem[];
}

export const aiEngineering: AiEngineeringSection = {
  title: "AI-Agent Engineering & Spec-Driven Development (SDD)",
  badge: "Agentic Engineering",
  summary:
    "Championing modern agentic engineering workflows and Spec-Driven Development (SDD) to maximize development velocity, maintain high architectural standards, and streamline cross-functional delivery:",
  workflows: [
    {
      title: "Spec-Driven Development (SDD) & Spec-Kit",
      description:
        "Applying a spec-first methodology using Spec-Kit to formalize feature requirements, domain models, and API/state contracts into deterministic specifications and phased execution tasks before writing code.",
      tools: ["Spec-Kit", "SDD", "RFCs", "State Contracts"],
    },
    {
      title: "AI-Agent Tools & Superpowers",
      description:
        "Leveraging agentic tooling in Cursor and Claude with Superpowers to accelerate complex architecture scaffolding, test-driven iterations, and systematic refactoring.",
      tools: ["Cursor", "Claude", "Superpowers", "GitHub Copilot", "ChatGPT"],
    },
    {
      title: "Skills & MCPs (Model Context Protocol)",
      description:
        "Developing custom agent Skills and integrating MCP servers to connect AI agents with codebase context, runtime tools, local debugging environments, and third-party APIs.",
      tools: ["MCP Servers", "Custom Agent Skills", "CLI Tooling"],
    },
    {
      title: "Streamlined AI Workflows",
      description:
        "Orchestrating human-in-the-loop agent workflows for automated code audits, regression testing, edge-case discovery, and rapid PR turnaround.",
      tools: ["Automated Code Audits", "Regression Testing", "Human-in-the-Loop"],
    },
  ],
};
