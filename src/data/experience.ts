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
      "Leading mobile engineering across Flutter applications, architecting multi-client SaaS flavor architectures, and managing the end-to-end mobile release lifecycle.",
    responsibilities: [
      "Led Flutter mobile development, delivering high-performance applications and resolving complex technical challenges.",
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
      "Team Leadership",
      "App Store & Google Play Releases",
      "Cross-functional Collaboration",
    ],
    projectSlugs: ["azda"],
  },
  {
    company: "Geexar",
    role: "Senior Flutter Developer",
    period: "Mar. 2024 – Jun. 2025",
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
