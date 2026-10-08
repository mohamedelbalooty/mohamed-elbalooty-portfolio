import { siteConfig } from "@/data/site-config";
import { Project } from "@/data/projects/types";
import { Article } from "@/data/articles";

export interface PageMetadataProps {
  title?: string;
  description?: string;
  path?: string;
  ogType?: "website" | "article";
}

export function constructMetadata({
  title,
  description = siteConfig.shortBio,
  path = "",
  ogType = "website",
}: PageMetadataProps = {}) {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — Senior Flutter Developer & Team Lead`;
  const url = `${siteConfig.siteUrl}${path}`;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: `${siteConfig.name} Portfolio`,
      type: ogType,
      locale: "en_US",
      images: [
        {
          url: `${siteConfig.siteUrl}/images/mohamed.jpg`,
          width: 800,
          height: 800,
          alt: `${siteConfig.name} — Senior Flutter Developer`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [`${siteConfig.siteUrl}/images/mohamed.jpg`],
    },
    metadataBase: new URL(siteConfig.siteUrl),
  };
}

export function generatePersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    description: siteConfig.shortBio,
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}/images/mohamed.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "Egypt",
    },
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: [siteConfig.linkedin, siteConfig.github],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Mansoura University",
    },
    knowsAbout: [
      "Flutter",
      "Dart",
      "Clean Architecture",
      "FinTech Mobile Development",
      "Software Architecture",
      "Mobile Team Leadership",
    ],
  };
}

export function generateProjectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    applicationCategory: "MobileApplication",
    operatingSystem: "Android, iOS",
    description: project.shortDescription,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
    keywords: project.tags.join(", "),
  };
}

export function generateArticleJsonLd(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    author: {
      "@type": "Person",
      name: article.author,
      url: siteConfig.siteUrl,
    },
    datePublished: article.publishedAt,
    keywords: article.tags.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.siteUrl}/articles/${article.slug}`,
    },
  };
}

export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.url}`,
    })),
  };
}
