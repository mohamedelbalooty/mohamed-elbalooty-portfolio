import { Project, ProjectCategory } from "./types";
import { liratProject } from "./lirat";
import { p2pSyriaProject } from "./p2p-syria";
import { cardAppProject } from "./card-app";
import { whiteLabeledEcommerceProject } from "./white-labeled-ecommerce";
import { posEcrSystemsProject } from "./pos-ecr-systems";
import { liaProject } from "./lia";
import { liaDeliveryProject } from "./lia-delivery";
import { anaqeedAlFakhaProject } from "./anaqeed-al-fakha";
import { kharadaProject } from "./kharada";
import { ezhalMowitakProject } from "./ezhal-mowitak";

export * from "./types";

export const allProjects: Project[] = [
  liratProject,
  p2pSyriaProject,
  cardAppProject,
  whiteLabeledEcommerceProject,
  posEcrSystemsProject,
  liaProject,
  liaDeliveryProject,
  anaqeedAlFakhaProject,
  kharadaProject,
  ezhalMowitakProject,
].sort((a, b) => a.order - b.order);

export function getAllProjects(): Project[] {
  return allProjects;
}

export function getFeaturedProjects(): Project[] {
  return allProjects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory | "All"): Project[] {
  if (category === "All") return allProjects;
  return allProjects.filter((p) => p.category === category);
}

export function getAllCategories(): ("All" | ProjectCategory)[] {
  return ["All", "FinTech", "E-commerce", "ERP / POS"];
}

export function getRelatedProjects(currentSlug: string, count: number = 3): Project[] {
  const current = getProjectBySlug(currentSlug);
  if (!current) return allProjects.slice(0, count);

  if (current.relatedProjectSlugs && current.relatedProjectSlugs.length > 0) {
    const specified = current.relatedProjectSlugs
      .map((s) => getProjectBySlug(s))
      .filter((p): p is Project => p !== undefined);
    if (specified.length >= count) return specified.slice(0, count);
  }

  return allProjects
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      // Prioritize same category
      if (a.category === current.category && b.category !== current.category) return -1;
      if (b.category === current.category && a.category !== current.category) return 1;
      return a.order - b.order;
    })
    .slice(0, count);
}
