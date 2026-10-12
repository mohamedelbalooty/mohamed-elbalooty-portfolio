import { siteConfig } from "@/data/site-config";
import { Project } from "@/data/projects/types";
import { Article } from "@/data/articles";
import { ServiceItem } from "@/data/services";

export interface PageMetadataProps {
  title?: string;
  description?: string;
  path?: string;
  ogType?: "website" | "article";
  locale?: string;
  isArabic?: boolean;
}

export function constructMetadata({
  title,
  description = siteConfig.shortBio,
  path = "",
  ogType = "website",
  locale = "en_US",
  isArabic = false,
}: PageMetadataProps = {}) {
  // If title is passed, do not append "| Mohamed Elbalooty" here
  // because root layout.tsx template handles "%s | Mohamed Elbalooty".
  const pageTitle = title
    ? title
    : `${siteConfig.name} — Senior Flutter Developer & Team Lead`;

  const url = `${siteConfig.siteUrl}${path}`;
  const enUrl = isArabic
    ? `${siteConfig.siteUrl}${path.replace(/^\/ar/, "") || "/"}`
    : url;
  const arUrl = isArabic
    ? url
    : `${siteConfig.siteUrl}/ar${path === "/" ? "" : path}`;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: enUrl,
        ar: arUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      title: `${pageTitle} | ${siteConfig.name}`,
      description,
      url,
      siteName: `${siteConfig.name} Portfolio`,
      type: ogType,
      locale,
      images: [
        {
          url: `${siteConfig.siteUrl}/images/mohamed.jpg`,
          width: 800,
          height: 800,
          alt: `${siteConfig.name} — Senior Flutter Developer & Team Lead`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageTitle} | ${siteConfig.name}`,
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
    "@id": `${siteConfig.siteUrl}/#person`,
    name: siteConfig.name,
    alternateName: siteConfig.alternateNames,
    jobTitle: "Senior Flutter Developer & Flutter Team Lead",
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
    sameAs: [
      siteConfig.linkedin,
      siteConfig.github,
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Mansoura University",
      sameAs: "https://en.wikipedia.org/wiki/Mansoura_University",
    },
    knowsAbout: [
      "Flutter",
      "Dart",
      "Kotlin",
      "Clean Architecture",
      "Mobile Architecture Consulting",
      "Mobile Team Leadership",
      "FinTech Mobile Engineering",
      "BLoC State Management",
      "Payment Gateway Integration",
      "In-App Purchases & Subscriptions",
      "Offline Caching & Data Synchronization",
      "App Store & Google Play Release Lifecycle",
      "CI/CD Pipelines (GitHub Actions & Fastlane)",
      "Multi-Flavor SaaS Mobile Architecture",
      "POS & Hardware SDK Integration",
      "Spec-Driven Development (SDD)",
      "AI-Assisted Code Modernization",
    ],
  };
}

export function generateWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}/#website`,
    url: siteConfig.siteUrl,
    name: "Mohamed Elbalooty — Senior Flutter Developer & Team Lead",
    alternateName: [
      "Mohamed Elbalooty Portfolio",
      "محمد البلعوطي - مهندس وقائد فريق فلاتر",
    ],
    description: siteConfig.shortBio,
    publisher: {
      "@id": `${siteConfig.siteUrl}/#person`,
    },
    inLanguage: ["en", "ar"],
  };
}

export function generateServiceJsonLd(service: ServiceItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.siteUrl}/services/#${service.id}`,
    name: service.title,
    serviceType: service.shortTitle,
    description: service.problem,
    provider: {
      "@id": `${siteConfig.siteUrl}/#person`,
    },
    areaServed: [
      { "@type": "Country", name: "Egypt" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Kuwait" },
      { "@type": "Country", name: "Qatar" },
      { "@type": "Country", name: "Bahrain" },
      { "@type": "Country", name: "Oman" },
    ],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.siteUrl}/contact`,
    },
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
      url: siteConfig.siteUrl,
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

export function generateBreadcrumbJsonLd(
  items: { name: string; url?: string; item?: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => {
      const rawUrl = crumb.url || crumb.item || "/";
      const fullUrl = rawUrl.startsWith("http")
        ? rawUrl
        : `${siteConfig.siteUrl}${rawUrl.startsWith("/") ? rawUrl : `/${rawUrl}`}`;

      return {
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: fullUrl,
      };
    }),
  };
}
