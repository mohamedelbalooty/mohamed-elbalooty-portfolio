import React from "react";
import { siteConfig } from "@/data/site-config";
import { Container } from "../layout/container";
import { GithubIcon } from "@/components/icons";
import { ArrowUpRight } from "lucide-react";

export function GithubActivity() {
  return (
    <section className="py-16 md:py-24 border-b border-white/5 bg-slate-950/70" id="github-activity">
      <Container className="space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Open Source & Code Telemetry</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              GitHub Activity & Repository Signals
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Transparent engineering cadence. Continuous experimentation, modular Dart libraries, and active repository contributions reflecting real-world code velocity.
            </p>
          </div>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-white/20 font-mono transition-colors group shrink-0"
          >
            <GithubIcon className="w-4 h-4" />
            <span>@mohamedelbalooty on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
          </a>
        </div>

        {/* GitHub Stats Badges Card */}
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 sm:p-8 space-y-8">
          {/* Visual Embeds matching README */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-items-center">
            {/* Main Stats Card */}
            <div className="w-full flex justify-center p-4 rounded-xl border border-white/5 bg-slate-950/60 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github-readme-stats.vercel.app/api?username=mohamedelbalooty&show_icons=true&hide_border=true&locale=en&theme=tokyonight&bg_color=020617&title_color=818cf8&icon_color=38bdf8&text_color=94a3b8"
                alt="Mohamed Elbalooty GitHub Stats"
                className="max-w-full h-auto"
                loading="lazy"
              />
            </div>

            {/* Top Languages Card */}
            <div className="w-full flex justify-center p-4 rounded-xl border border-white/5 bg-slate-950/60 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs?username=mohamedelbalooty&layout=compact&hide_border=true&locale=en&theme=tokyonight&bg_color=020617&title_color=818cf8&text_color=94a3b8"
                alt="Mohamed Elbalooty Top Languages"
                className="max-w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/5 text-xs font-mono">
            <div className="space-y-1">
              <span className="text-slate-500 uppercase tracking-wider text-[10px]">Primary Ecosystem</span>
              <p className="text-white font-semibold">Flutter & Dart</p>
            </div>
            <div className="space-y-1">
              <span className="text-slate-500 uppercase tracking-wider text-[10px]">Mobile Platform Bridges</span>
              <p className="text-white font-semibold">Android SDK (Kotlin) & iOS</p>
            </div>
            <div className="space-y-1">
              <span className="text-slate-500 uppercase tracking-wider text-[10px]">Automation</span>
              <p className="text-white font-semibold">GitHub Actions & Fastlane</p>
            </div>
            <div className="space-y-1">
              <span className="text-slate-500 uppercase tracking-wider text-[10px]">Code Discipline</span>
              <p className="text-white font-semibold">Strict Linters & Clean Arch</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
