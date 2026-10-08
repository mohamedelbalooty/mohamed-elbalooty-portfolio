import React from "react";
import Link from "next/link";
import { getFeaturedProjects, allProjects } from "@/data/projects";
import { Container } from "../layout/container";
import { ArrowUpRight, ArrowRight, Layers, Building2 } from "lucide-react";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-16 md:py-24 border-b border-white/5" id="work">
      <Container className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Selected Engineering Case Studies</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Production Work & Architecture
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Real-world systems engineered across FinTech SaaS, logistics, hospitality, multi-tenant mobile platforms, and hardware POS integrations. Built with Clean Architecture and zero tolerance for failure.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 font-mono group"
          >
            <span>View All {allProjects.length} Projects</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative rounded-xl border border-white/10 bg-slate-900/40 p-6 flex flex-col justify-between hover:border-indigo-500/50 hover:bg-slate-900/80 transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full font-mono font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {project.category}
                  </span>
                  {project.company && (
                    <span className="flex items-center gap-1 text-slate-400 font-mono text-[11px]">
                      <Building2 className="w-3 h-3 text-slate-500" />
                      {project.company}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                  {project.subtitle && (
                    <p className="text-xs font-mono text-slate-400 mt-1 line-clamp-1">
                      {project.subtitle}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Problem Highlight */}
                {project.problem && (
                  <div className="pt-2 text-[11px] text-slate-400 border-t border-white/5 space-y-1">
                    <span className="font-mono text-slate-500 uppercase tracking-wider text-[10px]">
                      The Problem:
                    </span>
                    <p className="line-clamp-2 italic text-slate-400">
                      &quot;{project.problem}&quot;
                    </p>
                  </div>
                )}
              </div>

              {/* Technologies & Store Status footer */}
              <div className="pt-4 mt-6 border-t border-white/5 space-y-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {(project.googlePlayUrl || project.appStoreUrl) && (
                  <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 font-medium">
                    {project.googlePlayUrl && <span>✓ Google Play</span>}
                    {project.appStoreUrl && <span>✓ App Store</span>}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
