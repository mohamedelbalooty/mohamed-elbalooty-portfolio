import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { getAllServices } from "@/data/services";
import { getProjectBySlug } from "@/data/projects";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/layout/container";
import {
  generateBreadcrumbJsonLd,
  generateServiceJsonLd,
} from "@/lib/seo";
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Mail,
  Home,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile Engineering & Architecture Consulting Services",
  description:
    "Specialized mobile development, architecture consulting, and engineering leadership for FinTech and E-commerce products across Egypt, Saudi Arabia, and the GCC.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/services`,
    languages: {
      en: `${siteConfig.siteUrl}/services`,
      ar: `${siteConfig.siteUrl}/ar`,
      "x-default": `${siteConfig.siteUrl}/services`,
    },
  },
  openGraph: {
    title: `Mobile Engineering & Architecture Consulting | ${siteConfig.name}`,
    description:
      "Specialized mobile development, architecture consulting, and engineering leadership for FinTech and E-commerce products across Egypt, Saudi Arabia, and the GCC.",
    url: `${siteConfig.siteUrl}/services`,
    type: "website",
  },
};

export default function ServicesPage() {
  const allServices = getAllServices();

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ];
  const breadcrumbJsonLd = generateBreadcrumbJsonLd(breadcrumbs);
  const serviceJsonLds = allServices.map((s) => generateServiceJsonLd(s));

  return (
    <div className="py-12 md:py-20 space-y-16">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {serviceJsonLds.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Container className="space-y-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
            <Home className="w-3 h-3 text-slate-500" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-indigo-400 font-semibold">Services</span>
        </nav>

        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Engineering & Consulting Offerings</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Mobile Engineering & Architecture Consulting
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Delivering senior-level technical ownership, architecture advisory, and team leadership for high-stakes mobile products. Grounded in 5+ years of verified production delivery across Egypt, Saudi Arabia, and the GCC.
          </p>
          <div className="p-4 rounded-xl border border-indigo-500/20 bg-indigo-950/20 text-xs sm:text-sm text-slate-300 leading-relaxed border-l-4 border-l-indigo-400">
            <strong className="text-white">Professional Scope Note:</strong> These offerings reflect Mohamed&apos;s verified technical capabilities available for consulting engagements, advisory contracts, team leadership roles, and full-time senior engineering leadership. Past employment experience is strictly separated from consulting services.
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-16 pt-4 border-t border-white/10">
          {allServices.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 sm:p-10 space-y-8 hover:border-white/20 transition-all duration-200"
            >
              {/* Header Info */}
              <div className="space-y-3 border-b border-white/10 pb-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {service.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Service 0{index + 1}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {service.title}
                </h2>
                <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
                  {service.tagline}
                </p>
              </div>

              {/* Problem & What to Expect Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* The Business Challenge */}
                <div className="rounded-xl border border-white/10 bg-slate-950/60 p-6 space-y-3">
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                    The Business Problem Addressed
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.problem}
                  </p>
                </div>

                {/* What to Expect */}
                <div className="rounded-xl border border-white/10 bg-slate-950/60 p-6 space-y-3">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                    What You Can Expect
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.whatToExpect}
                  </p>
                </div>
              </div>

              {/* Technical Activities */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold font-mono text-slate-300 uppercase tracking-wider">
                  Technical Activities & Scope:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                  {service.activities.map((act, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 rounded-lg border border-white/5 bg-slate-950/40 text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables & Engagement Models Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5 text-xs sm:text-sm">
                {/* Tangible Deliverables */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    Tangible Deliverables:
                  </h4>
                  <ul className="space-y-2 text-slate-300">
                    {service.deliverables.map((del, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                        <span className="leading-relaxed">{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Engagement Models */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    Engagement Options:
                  </h4>
                  <ul className="space-y-2 text-slate-300">
                    {service.engagementModels.map((model, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                        <span className="leading-relaxed">{model}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Verified Portfolio Evidence & CTA Footer */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    Verified Portfolio Evidence:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.evidenceSlugs.map((slug) => {
                      const proj = getProjectBySlug(slug);
                      if (!proj) return null;
                      return (
                        <Link
                          key={slug}
                          href={`/projects/${slug}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 hover:text-white border border-white/5 transition-colors"
                        >
                          <span>{proj.title}</span>
                          <ArrowRight className="w-3 h-3 text-indigo-400" />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="shrink-0 pt-2 sm:pt-0">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md transition-colors"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Regional Consulting Note */}
        <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 space-y-4">
          <div className="flex items-center gap-2.5 text-indigo-400">
            <Briefcase className="w-5 h-5" />
            <h2 className="text-xl font-bold text-white tracking-tight">
              Target Markets & Remote Collaboration
            </h2>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
            Based in Cairo, Egypt (UTC+2) with proven remote delivery track record serving companies and high-growth startups across <strong className="text-white">Egypt, Saudi Arabia, the United Arab Emirates, Kuwait, and the wider GCC</strong>. Flexible across synchronous sprint ceremonies, asynchronous architectural reviews, and milestone-based project deliveries.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Discuss a Mobile Consulting Project</span>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <span>Explore Selected Work</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
}
