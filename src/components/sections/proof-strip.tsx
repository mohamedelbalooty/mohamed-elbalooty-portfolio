import React from "react";
import { siteConfig } from "@/data/site-config";
import { Container } from "../layout/container";

export function ProofStrip() {
  return (
    <section className="border-b border-white/5 bg-slate-950/60 py-10" aria-label="Verified Signals">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {siteConfig.stats.map((stat) => (
            <div
              key={stat.label}
              className="space-y-1.5 p-4 rounded-xl border border-white/5 bg-slate-900/30 hover:border-white/10 transition-colors"
            >
              <span className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                {stat.value}
              </span>
              <h3 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider font-mono">
                {stat.label}
              </h3>
              <p className="text-xs text-slate-400 leading-normal">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
