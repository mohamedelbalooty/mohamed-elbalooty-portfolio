import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { experiences, education, languages } from "@/data/experience";
import { getProjectBySlug } from "@/data/projects";
import { Container } from "@/components/layout/container";
import {
  Briefcase,
  GraduationCap,
  Languages,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Experience & Engineering Leadership",
  description:
    "Comprehensive career history of Mohamed Elbalooty as Senior Flutter Developer and Flutter Team Leader across FinTech, SaaS, E-commerce, and ERP/POS platforms.",
};

export default function ExperiencePage() {
  return (
    <div className="py-12 md:py-20 space-y-16">
      <Container className="space-y-12">
        {/* Page Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Engineering Experience & Leadership
          </h1>
          <p className="text-base text-slate-400 leading-relaxed">
            5+ years of verified software engineering experience taking complex mobile systems from inception and Clean Architecture design to App Store and Google Play releases.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.company} className="relative group">
              {/* Timeline marker */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                  exp.isCurrent
                    ? "border-emerald-400 bg-emerald-950"
                    : "border-indigo-400 bg-slate-950"
                }`}
              >
                {exp.isCurrent && (
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </div>

              {/* Experience Card */}
              <div className="rounded-xl border border-white/10 bg-slate-900/40 p-6 sm:p-8 space-y-6 hover:border-white/20 transition-all duration-200">
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h2 className="text-xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h2>
                      {exp.isCurrent && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-indigo-400 font-mono mt-0.5">
                      <span>{exp.company}</span>
                      {exp.location && (
                        <>
                          <span className="text-slate-600">·</span>
                          <span className="text-xs text-slate-400 font-sans flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-500" />
                            {exp.location}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono bg-white/5 px-2.5 py-1 rounded-md border border-white/5 shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Core Responsibilities */}
                <div className="space-y-2.5 pt-2">
                  <h3 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                    Source-Verified Responsibilities & Achievements:
                  </h3>
                  <div className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connected Projects */}
                {exp.projectSlugs && exp.projectSlugs.length > 0 && (
                  <div className="pt-4 border-t border-white/5 space-y-2">
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Relevant Case Studies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.projectSlugs.map((slug) => {
                        const proj = getProjectBySlug(slug);
                        if (!proj) return null;
                        return (
                          <Link
                            key={slug}
                            href={`/projects/${slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded bg-indigo-950/40 text-indigo-300 border border-indigo-500/20 hover:border-indigo-500/40 hover:bg-indigo-900/40 transition-colors"
                          >
                            <span>{proj.title}</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-xs font-mono rounded bg-white/5 text-slate-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 border-t border-white/10">
          {/* Education Card */}
          <div className="rounded-xl border border-white/10 bg-slate-900/40 p-6 space-y-3">
            <div className="flex items-center gap-2 text-indigo-400">
              <GraduationCap className="w-5 h-5" />
              <h2 className="text-base font-semibold text-white tracking-tight">
                Education
              </h2>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                {education.degree} — {education.field}
              </h3>
              <p className="text-xs text-indigo-400 font-mono">
                {education.institution}
              </p>
              <p className="text-xs text-slate-400 font-mono mt-1">
                {education.period}
              </p>
            </div>
          </div>

          {/* Languages Card */}
          <div className="rounded-xl border border-white/10 bg-slate-900/40 p-6 space-y-3">
            <div className="flex items-center gap-2 text-indigo-400">
              <Languages className="w-5 h-5" />
              <h2 className="text-base font-semibold text-white tracking-tight">
                Languages
              </h2>
            </div>
            <div className="space-y-2">
              {languages.map((lang) => (
                <div
                  key={lang.language}
                  className="flex items-center justify-between text-xs p-2 rounded bg-white/5 border border-white/5"
                >
                  <span className="font-semibold text-white">{lang.language}</span>
                  <span className="font-mono text-slate-400">
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
