import React from "react";
import { skillCategories } from "@/data/skills";
import { Container } from "../layout/container";
import { Code2 } from "lucide-react";

export function SkillsMatrix() {
  return (
    <section className="py-16 md:py-24 border-b border-white/5 bg-slate-950/40">
      <Container className="space-y-12">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Engineering Competencies
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Strictly grounded in 5+ years of verified production mobile engineering. Organized by architectural discipline rather than cosmetic skill bars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-white/10 bg-slate-900/40 p-5 space-y-4 hover:border-white/20 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-white tracking-tight font-mono">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-xs font-mono rounded bg-white/5 text-slate-200 border border-white/5 hover:border-indigo-500/40 transition-colors"
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
