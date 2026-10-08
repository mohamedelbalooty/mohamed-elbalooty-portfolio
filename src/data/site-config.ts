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
  role: "Senior Flutter Developer",
  subRole: "Flutter Team Lead",
  tagline: "Architecting high-scale FinTech and mobile platforms with Clean Architecture, production reliability, and engineering leadership.",
  shortBio:
    "Senior Flutter Developer and Team Leader with 5+ years of engineering experience across FinTech, E-commerce, ERP/POS, and healthcare. Specializing in Clean Architecture, SaaS flavor-based multi-client deployments, payment integrations, and developer enablement.",
  fullBio: [
    "I am a Senior Flutter Developer and Mobile Team Leader based in Cairo, Egypt, with over 5 years of professional experience taking mobile products from architectural design to high-volume production releases on the Apple App Store and Google Play.",
    "Throughout my career across FinTech platforms (including Lirat digital wallet, P2P Syria, and Card App), 6+ white-labeled e-commerce systems, and mission-critical POS/ECR hardware integrations, my focus has remained on maintainable architecture, robust state management, and strict separation of concerns.",
    "As an engineering leader, I have led a 5-member mobile team through Agile sprint cycles, structured code reviews, architectural RFCs, and junior developer mentorship. Today, I leverage modern AI tooling as an engineering multiplier to accelerate delivery and elevate engineering standards.",
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
      label: "Production Engineering",
      description: "Proven delivery across FinTech, E-commerce, ERP/POS, and Healthcare.",
    },
    {
      value: "FinTech SaaS",
      label: "Architecture & Security",
      description: "Digital wallet, P2P payments, card management, and subscription systems.",
    },
    {
      value: "5 Engineers",
      label: "Team Leadership",
      description: "Led mobile engineering squad with Agile sprints, code reviews, and mentoring.",
    },
    {
      value: "6+ Multi-Tenant",
      label: "White-Labeled Apps",
      description: "SaaS flavor-based environments for enterprise web service integrations.",
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
