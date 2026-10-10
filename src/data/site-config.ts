export interface SiteConfig {
  name: string;
  role: string;
  subRole: string;
  tagline: string;
  shortBio: string;
  fullBio: string[];
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  siteUrl: string;
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  navLinks: {
    title: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Mohamed Elbalooty",
  role: "Flutter Team Lead",
  subRole: "Senior Flutter Engineer",
  tagline:
    "Building, leading, and delivering production mobile applications — from architecture and development to App Store and Google Play release.",
  shortBio:
    "Flutter Team Lead with 5+ years of experience working across the full mobile software lifecycle — architecture, development, testing, release, and ongoing delivery — while leading mobile teams and adapting solutions across FinTech, E-commerce, Logistics, Hospitality, and POS/ERP for clients across Egypt, Saudi Arabia, the UAE, and Kuwait.",
  fullBio: [
    "I am a Flutter Team Lead and Senior Mobile Engineer based in Cairo, Egypt, with 5+ years of experience working across the full mobile software lifecycle — architecture, development, testing, release, and ongoing delivery — while leading mobile teams and adapting solutions to diverse business requirements.",
    "Currently leading Flutter development at Tasawk, I design scalable, SaaS flavor-based architectures for multi-client deployments and own App Store and Google Play releases across multiple applications. Previously, I led a 5-member mobile team at Geexar, architecting fintech platforms including digital wallets (Lirat), P2P payments, and virtual card products (Card App).",
    "I have delivered applications across a wide range of business models — fintech, e-commerce, healthcare, POS/ERP, logistics (including Hajj season mobility in Saudi Arabia), hospitality (IQAMTI hotel booking), and on-demand delivery — working with clients across Egypt, Saudi Arabia, the UAE, and Kuwait.",
  ],
  location: "Cairo, Egypt",
  email: "mohamedelbalooty123@gmail.com",
  phone: "+20 1096204712",
  linkedin: "https://linkedin.com/in/mohamed-elbalooty",
  github: "https://github.com/mohamedelbalooty",
  resumeUrl: "/resume/Mohamed-Elbalooty-CV.pdf",
  siteUrl: "https://mohamed-elbalooty.web.app",
  stats: [
    {
      value: "5+ Years",
      label: "Full Lifecycle Ownership",
      description: "Architecture, development, testing, release, and ongoing delivery across App Store & Google Play.",
    },
    {
      value: "4 Regions",
      label: "Regional Market Delivery",
      description: "Production client deployments across Egypt, Saudi Arabia, the UAE, and Kuwait.",
    },
    {
      value: "5 Engineers",
      label: "Squad Leadership",
      description: "Led mobile engineering teams with Agile sprint cycles, code reviews, and developer mentoring.",
    },
    {
      value: "50K+ Scale",
      label: "Khurdah Ecosystem",
      description: "50K+ downloads in 1 year across Saudi Arabia; architected 3-tier mobile platform and led engineering team.",
    },
  ],
  navLinks: [
    { title: "Selected Work", href: "/projects" },
    { title: "Experience", href: "/experience" },
    { title: "Engineering Profile", href: "/about" },
    { title: "Technical Notes", href: "/articles" },
    { title: "Contact", href: "/contact" },
  ],
};
