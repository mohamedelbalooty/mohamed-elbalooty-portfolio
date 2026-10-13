import React from "react";
import { Container } from "../layout/container";
import { Wrench, Users, Rocket, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export function WhatIBring() {
  const pillars = [
    {
      id: "engineering",
      icon: Wrench,
      badge: "🛠️ Pillar 1",
      title: "Engineering Rigor",
      tagline: "Scalable Foundations & Defensive Code",
      accentColor: "indigo",
      items: [
        "Clean Architecture, SOLID, and proven design patterns across enterprise codebases",
        "SaaS flavor-based, multi-client app environments from a single codebase",
        "Modular, reusable, and testable codebases with decoupled business rules",
        "Performance tuning, sub-second rendering, offline caching, and secure token auth",
        "Spec-Driven Development (SDD) & AI-agent workflows (Spec-Kit, Superpowers, MCPs) to accelerate velocity and quality",
        "Complex integrations: Payment Gateways, In-App Purchases, Google Maps, WebSockets, and Kotlin/native Android bridges",
      ],
    },
    {
      id: "leadership",
      icon: Users,
      badge: "👥 Pillar 2",
      title: "Engineering Leadership",
      tagline: "Squad Enablement & Architectural Standards",
      accentColor: "emerald",
      items: [
        "Leading Flutter development squads and cross-functional mobile engineering units",
        "Agile sprint planning, backlog grooming, and precision task breakdown",
        "Constructive code reviews, architectural RFCs, and engineering quality standards",
        "Mentoring junior developers and accelerating team capability growth",
        "Driving high-stakes technical and architectural decisions under tight roadmaps",
      ],
    },
    {
      id: "delivery",
      icon: Rocket,
      badge: "🚀 Pillar 3",
      title: "Production Delivery",
      tagline: "Zero-Downtime Store Releases & Lifecycle Ownership",
      accentColor: "amber",
      items: [
        "End-to-end lifecycle ownership: Planning → Architecture → Development → Testing → Release → Maintenance",
        "Apple App Store & Google Play releases, policy compliance, and continuous updates",
        "Automated CI/CD pipelines configured with GitHub Actions and Fastlane",
        "Close daily collaboration with Product Managers, Backend Engineers, and UI/UX Designers",
        "Reliable, on-time delivery of scalable business solutions that drive measurable revenue",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 border-b border-white/5 relative bg-slate-950/60" id="what-i-bring">
      <Container className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Value Proposition</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              What I Bring to Your Engineering Organization
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Leading mobile products requires more than just writing Flutter widgets. I combine architectural excellence with team enablement and disciplined store delivery to ensure software ships predictably and scales effortlessly.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>5+ Years Verified Delivery Track Record</span>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isIndigo = pillar.accentColor === "indigo";
            const isEmerald = pillar.accentColor === "emerald";

            return (
              <div
                key={pillar.id}
                className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-200 relative group overflow-hidden"
              >
                {/* Subtle top glow */}
                <div
                  className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${
                    isIndigo
                      ? "from-indigo-500 to-cyan-400"
                      : isEmerald
                      ? "from-emerald-500 to-teal-400"
                      : "from-amber-500 to-orange-400"
                  } opacity-80`}
                />

                <div className="space-y-6">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                        isIndigo
                          ? "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
                          : isEmerald
                          ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
                          : "bg-amber-500/10 text-amber-300 border-amber-500/20"
                      }`}
                    >
                      {pillar.badge}
                    </span>
                    <div
                      className={`p-2 rounded-xl border ${
                        isIndigo
                          ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                          : isEmerald
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {pillar.tagline}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-3.5 pt-2">
                    {pillar.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isIndigo
                              ? "text-indigo-400"
                              : isEmerald
                              ? "text-emerald-400"
                              : "text-amber-400"
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer badge */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Pillar {pillar.id === "engineering" ? "01" : pillar.id === "leadership" ? "02" : "03"}</span>
                  <span className="text-white font-medium">Production Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
