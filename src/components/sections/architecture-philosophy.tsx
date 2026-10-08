import React from "react";
import { Container } from "../layout/container";
import { Cpu, ShieldAlert, GitFork, Users, Zap, Terminal } from "lucide-react";

export function ArchitecturePhilosophy() {
  const pillars = [
    {
      icon: Cpu,
      title: "Clean Architecture & SOLID",
      description:
        "Strict separation of concerns. UI widgets stay lean, while pure Dart business use cases remain completely decoupled from Flutter frameworks, third-party libraries, and remote endpoints.",
    },
    {
      icon: ShieldAlert,
      title: "Zero-Tolerance Production Reliability",
      description:
        "FinTech products demand deterministic state transitions. Defensive network clients, token refresh interceptors, idempotency keys, and offline resilience prevent corrupted financial state.",
    },
    {
      icon: GitFork,
      title: "Multi-Tenant Flavor Scalability",
      description:
        "Engineering single-codebase architectures capable of deploying multi-client branded flavors (as proven across 6+ white-labeled e-commerce applications) with zero cross-tenant leakage.",
    },
    {
      icon: Users,
      title: "Team Leadership & Mentorship",
      description:
        "Leading 5-member engineering squads through disciplined sprint planning, architectural RFCs, systematic code reviews, and structured junior developer mentorship.",
    },
    {
      icon: Zap,
      title: "Release Ownership & Store Compliance",
      description:
        "Managing the complete mobile lifecycle from initial planning to automated Fastlane/CI/CD pipelines, Google Play policies, Apple App Store reviews, and post-launch telemetry.",
    },
    {
      icon: Terminal,
      title: "AI as an Engineering Multiplier",
      description:
        "Leveraging modern AI tooling (Cursor, Claude, GitHub Copilot) to accelerate schema modeling, test suite generation, and boilerplate synthesis without sacrificing architectural rigor.",
    },
  ];

  return (
    <section className="py-16 md:py-24 border-b border-white/5 bg-slate-950/40">
      <Container className="space-y-12">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Engineering Principles</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            How I Approach Production Software
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Senior mobile engineering is about owning outcomes, not just implementing UI mocks. Every technical decision balances velocity, maintainability, and end-user reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-xl border border-white/10 bg-slate-900/30 p-6 space-y-3 hover:border-white/20 transition-colors"
              >
                <div className="p-2.5 w-fit rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
