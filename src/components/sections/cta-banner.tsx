import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Container } from "../layout/container";
import { ArrowUpRight, FileDown, Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export function CtaBanner() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-slate-950">
      <div
        className="absolute inset-0 bg-radial-gradient from-indigo-500/10 via-transparent to-transparent opacity-50 pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-950/40 text-xs font-mono text-indigo-300 mx-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for Senior Flutter & Engineering Leadership Roles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl mx-auto">
            Have a mobile product that needs senior engineering ownership?
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Whether you are building a greenfield FinTech application, transitioning to Clean Architecture, or looking for an experienced Flutter Team Lead to scale your mobile product—let&apos;s talk.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/20 transition-all duration-150"
            >
              <Mail className="w-4 h-4" />
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-150"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View GitHub</span>
            </a>

            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Mohamed-Elbalooty-CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-150"
            >
              <FileDown className="w-4 h-4 text-indigo-400" />
              <span>Download CV</span>
            </a>
          </div>

          <div className="pt-6 border-t border-white/5 text-xs text-slate-500 font-mono flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span>Direct Email: {siteConfig.email}</span>
            <span>·</span>
            <span>Cairo, Egypt</span>
            <span>·</span>
            <span>Direct Phone: {siteConfig.phone}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
