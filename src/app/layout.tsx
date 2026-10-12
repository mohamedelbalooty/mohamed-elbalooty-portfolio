import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/data/site-config";
import { generatePersonJsonLd, generateWebSiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} — Senior Flutter Developer & Team Lead`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.shortBio,
  alternates: {
    canonical: siteConfig.siteUrl,
    languages: {
      en: siteConfig.siteUrl,
      ar: `${siteConfig.siteUrl}/ar`,
      "x-default": siteConfig.siteUrl,
    },
  },
  keywords: [
    "Mohamed Elbalooty",
    "Mohamed Gamal Elbalooty",
    "Mohamed Elbalaoty",
    "Mohamed Gamal Elbalaoty",
    "محمد البلعوطي",
    "البلعوطي",
    "Senior Flutter Developer",
    "Flutter Team Lead",
    "Flutter Developer Egypt",
    "Flutter Developer Saudi Arabia",
    "Senior Mobile Engineer",
    "FinTech Flutter Developer",
    "Clean Architecture Flutter",
    "Mobile Architecture Consulting",
    "Mobile Engineering Lead GCC",
    "Flutter Code Review",
    "Mobile App Modernization",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    title: `${siteConfig.name} — Senior Flutter Developer & Team Lead`,
    description: siteConfig.shortBio,
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: "/images/mohamed.jpg",
        width: 800,
        height: 800,
        alt: `${siteConfig.name} — Senior Flutter Developer & Team Lead`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Senior Flutter Developer & Team Lead`,
    description: siteConfig.shortBio,
    images: ["/images/mohamed.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = generatePersonJsonLd();
  const webSiteJsonLd = generateWebSiteJsonLd();

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col font-sans antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
