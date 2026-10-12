import { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { generateBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact & Hiring Inquiry",
  description:
    "Connect directly with Mohamed Elbalooty for Senior Flutter Developer, Flutter Team Lead, and Mobile Architecture consulting engagements in Egypt, Saudi Arabia, and the GCC.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/contact`,
    languages: {
      "en": `${siteConfig.siteUrl}/contact`,
      "x-default": `${siteConfig.siteUrl}/contact`,
    },
  },
  openGraph: {
    title: "Contact & Hiring Inquiry | Mohamed Elbalooty",
    description:
      "Connect directly with Mohamed Elbalooty for Senior Flutter Developer, Flutter Team Lead, and Mobile Architecture consulting engagements in Egypt, Saudi Arabia, and the GCC.",
    url: `${siteConfig.siteUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", item: siteConfig.siteUrl },
    { name: "Contact", item: `${siteConfig.siteUrl}/contact` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
