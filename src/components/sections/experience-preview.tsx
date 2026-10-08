import React from "react";
import Link from "next/link";
import { experiences } from "@/data/experience";
import { Container } from "../layout/container";
import { Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";

export function ExperiencePreview() {
  const previewList = experiences.slice(0, 3);

  return (
    <section className="py-16 md:py-24 border-b border-white/5">
      <Container className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Trajectory</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Professional Experience
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              From hands-on mobile development to senior architecture and team leadership across FinTech platforms, SaaS environments, and multi-tenant applications.
            </p>
          </div>

          <Link
            href="/experience"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 font-mono group"
          >
            <span>View Full Career Timeline</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="space-y-6">
          {previewList.map((exp) => (
            <div
              key={exp.company}
              className="rounded-xl border border-white/10 bg-slate-900/40 p-6 md:p-8 space-y-4 hover:border-white/20 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    {exp.isCurrent && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Current Role
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-semibold text-indigo-400 font-mono">
                    {exp.company}
                  </span>
                </div>

                <div className="text-xs text-slate-400 font-mono">
                  {exp.period}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
                {exp.summary}
              </p>

              <div className="space-y-2 pt-2">
                {exp.responsibilities.slice(0, 2).map((resp, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-slate-300 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
