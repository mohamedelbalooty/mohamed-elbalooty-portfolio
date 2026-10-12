import { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Engineering Projects & Production Case Studies",
  description:
    "Explore production Flutter applications, FinTech architectures, multi-tenant POS systems, and Clean Architecture mobile codebases by Mohamed Elbalooty.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/projects`,
    languages: {
      "en": `${siteConfig.siteUrl}/projects`,
      "x-default": `${siteConfig.siteUrl}/projects`,
    },
  },
  openGraph: {
    title: "Engineering Projects & Production Case Studies | Mohamed Elbalooty",
    description:
      "Explore production Flutter applications, FinTech architectures, multi-tenant POS systems, and Clean Architecture mobile codebases by Mohamed Elbalooty.",
    url: `${siteConfig.siteUrl}/projects`,
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
