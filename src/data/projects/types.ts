export type ProjectCategory =
  | "FinTech"
  | "E-commerce"
  | "Logistics"
  | "Hospitality"
  | "ERP / POS"
  | "Healthcare"
  | "Other";

export interface EngineeringDecision {
  title: string;
  context: string;
  decision: string;
  tradeOff: string;
  result: string;
}

export interface ArchitectureLayer {
  name: string;
  responsibility: string;
  components: string[];
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  category: ProjectCategory;
  featured: boolean;
  order: number;

  shortDescription: string;
  overview: string;

  role: string;
  company?: string;
  period?: string;

  technologies: string[];
  architecture?: string[];
  architectureLayers?: ArchitectureLayer[];

  problem?: string;
  responsibilities?: string[];
  challenges?: string[];
  solutions?: string[];
  engineeringDecisions?: EngineeringDecision[];

  features?: string[];
  outcomes?: string[];

  screenshots?: ProjectScreenshot[];

  appStoreUrl?: string;
  googlePlayUrl?: string;
  githubUrl?: string;
  liveUrl?: string;

  tags: string[];
  relatedProjectSlugs?: string[];
  relatedArticleSlugs?: string[];
}
