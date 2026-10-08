import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { allProjects, getProjectBySlug, getRelatedProjects } from "@/data/projects";
import { Container } from "@/components/layout/container";
import { ArchitectureDiagram } from "@/components/case-study/architecture-diagram";
import { DecisionCard } from "@/components/case-study/decision-card";
import { generateProjectJsonLd } from "@/lib/seo";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
  Sparkles,
  Layers,
  ArrowUpRight,
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const title = `${project.title} — ${project.category} Project | Mohamed Elbalooty`;
  const description = project.shortDescription;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const related = getRelatedProjects(project.slug, 3);
  const jsonLd = generateProjectJsonLd(project);

  return (
    <article className="py-12 md:py-20 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container className="space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="space-y-6 max-w-4xl border-b border-white/10 pb-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              {project.category}
            </span>
            {project.company && (
              <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <Building2 className="w-3.5 h-3.5 text-slate-500" />
                <span>{project.company}</span>
              </span>
            )}
            {project.period && (
              <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>{project.period}</span>
              </span>
            )}
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="text-lg sm:text-xl text-slate-300 font-medium">
                {project.subtitle}
              </p>
            )}
          </div>

          <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
            {project.overview}
          </p>

          {/* Quick Meta Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 border-t border-white/5">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                My Role
              </span>
              <p className="text-sm font-semibold text-white">{project.role}</p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                Domain
              </span>
              <p className="text-sm font-semibold text-white">{project.category}</p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                Technologies
              </span>
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-indigo-300 bg-indigo-950/40 px-2 py-0.5 rounded border border-indigo-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Storytelling Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main narrative */}
          <div className="lg:col-span-8 space-y-12">
            {/* The Problem */}
            {project.problem && (
              <section className="space-y-4">
                <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4" />
                  <span>The Engineering Problem</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  Context & Core Challenge
                </h2>
                <div className="rounded-xl border border-white/10 bg-slate-900/40 p-6 text-sm text-slate-300 leading-relaxed">
                  {project.problem}
                </div>
              </section>
            )}

            {/* Engineering Responsibilities */}
            {project.responsibilities && project.responsibilities.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  Technical Responsibilities & Ownership
                </h2>
                <div className="rounded-xl border border-white/10 bg-slate-900/40 p-6 space-y-3">
                  {project.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Architecture Visual Diagram */}
            {project.architectureLayers && (
              <section className="space-y-4">
                <ArchitectureDiagram layers={project.architectureLayers} />
              </section>
            )}

            {/* Architecture Principles list */}
            {project.architecture && project.architecture.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  <span>Architectural Patterns</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  Architecture & Design Decisions
                </h2>
                <div className="rounded-xl border border-white/10 bg-slate-900/40 p-6 space-y-3">
                  {project.architecture.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0 mt-2" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Engineering Decision Cards */}
            {project.engineeringDecisions && project.engineeringDecisions.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  Key Technical Decisions & Trade-Offs
                </h2>
                <div className="space-y-4">
                  {project.engineeringDecisions.map((decision) => (
                    <DecisionCard key={decision.title} decision={decision} />
                  ))}
                </div>
              </section>
            )}

            {/* Challenges & Solutions */}
            {project.challenges && project.challenges.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  Challenges Overcome
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.challenges.map((challenge, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-white/10 bg-slate-900/40 p-5 space-y-2 text-xs"
                    >
                      <span className="font-mono text-indigo-400 font-semibold uppercase tracking-wider">
                        Challenge #{i + 1}
                      </span>
                      <p className="text-slate-300 leading-relaxed">{challenge}</p>
                      {project.solutions && project.solutions[i] && (
                        <div className="pt-2 border-t border-white/5 space-y-1">
                          <span className="font-mono text-emerald-400 font-semibold uppercase tracking-wider text-[11px]">
                            Engineered Solution:
                          </span>
                          <p className="text-slate-400">{project.solutions[i]}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Product Capabilities</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  Delivered Features
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2.5 p-3 rounded-lg border border-white/5 bg-slate-900/30 text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Verified Outcomes */}
            {project.outcomes && project.outcomes.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  Production Impact & Outcomes
                </h2>
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-6 space-y-3">
                  {project.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Tech Stack Box */}
            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-6 space-y-4 sticky top-24">
              <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">
                Full Technical Stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-slate-200 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Verified Links or Structured Placeholders */}
              <div className="pt-4 border-t border-white/5 space-y-3 text-xs">
                <h4 className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Store & Repository Links
                </h4>

                {project.appStoreUrl ? (
                  project.appStoreUrl.startsWith("http") ? (
                    <a
                      href={project.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded bg-white/5 text-slate-200 hover:text-white border border-white/5"
                    >
                      <span>Apple App Store</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="p-2.5 rounded bg-white/5 text-slate-400 font-mono text-[11px] border border-white/5 flex items-center justify-between">
                      <span>Apple App Store</span>
                      <span className="text-[10px] text-indigo-400">Available on Store</span>
                    </div>
                  )
                ) : null}

                {project.googlePlayUrl ? (
                  project.googlePlayUrl.startsWith("http") ? (
                    <a
                      href={project.googlePlayUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded bg-white/5 text-slate-200 hover:text-white border border-white/5"
                    >
                      <span>Google Play Store</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="p-2.5 rounded bg-white/5 text-slate-400 font-mono text-[11px] border border-white/5 flex items-center justify-between">
                      <span>Google Play Store</span>
                      <span className="text-[10px] text-indigo-400">Available on Store</span>
                    </div>
                  )
                ) : null}

                {project.company && (
                  <p className="text-[11px] text-slate-500 font-mono">
                    Developed under proprietary NDA at {project.company}. Code architecture demonstrated through design patterns.
                  </p>
                )}
              </div>

              {/* Internal link to Experience */}
              <div className="pt-4 border-t border-white/5">
                <Link
                  href="/experience"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300"
                >
                  <span>View role in career timeline</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Projects */}
        {related.length > 0 && (
          <section className="pt-12 border-t border-white/10 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white tracking-tight">
                Related Engineering Work
              </h2>
              <Link
                href="/projects"
                className="text-xs font-mono text-indigo-400 hover:underline"
              >
                All Projects →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/projects/${rel.slug}`}
                  className="group rounded-xl border border-white/10 bg-slate-900/30 p-5 space-y-3 hover:border-indigo-500/40 transition-colors"
                >
                  <span className="text-[10px] font-mono font-medium text-indigo-400 uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center justify-between">
                    <span>{rel.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400" />
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {rel.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </Container>
    </article>
  );
}
