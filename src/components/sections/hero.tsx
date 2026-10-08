import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Container } from "../layout/container";
import { FileDown, ArrowRight, Mail, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-white/5">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-950/40 text-xs font-mono text-indigo-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Senior Flutter Developer & Team Lead · Cairo, Egypt</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                {siteConfig.name}
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-300 tracking-tight">
                Architecting resilient mobile products with Clean Architecture, production ownership, and engineering leadership.
              </p>
            </div>

            {/* Factual Narrative Bio */}
            <p className="text-base text-slate-400 max-w-2xl leading-relaxed">
              5+ years of software engineering experience delivering high-performance cross-platform applications across{" "}
              <span className="text-slate-200 font-medium">FinTech</span> (digital wallets, P2P payments, card systems),{" "}
              <span className="text-slate-200 font-medium">multi-tenant E-commerce</span>, and{" "}
              <span className="text-slate-200 font-medium">ERP/POS hardware integrations</span>. Experienced in leading 5-member engineering squads, SaaS flavor releases, and automated CI/CD.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 transition-all duration-150"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Mohamed-Elbalooty-CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-150"
              >
                <FileDown className="w-4 h-4 text-indigo-400" />
                <span>Download CV</span>
              </a>

              <div className="flex items-center gap-1.5 pl-2">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-white/10 transition-colors"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-white/10 transition-colors"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  aria-label="Send Email"
                  className="p-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-white/10 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick trust callout */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Clean Architecture & SOLID
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                FinTech & Payment Gateway Integrations
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                App Store & Google Play Release Ownership
              </span>
            </div>
          </div>

          {/* Profile Media Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group w-64 sm:w-72">
              {/* Subtle ambient border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-indigo-500/20 to-purple-500/10 blur-md group-hover:blur-lg transition-all opacity-70" />

              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-900 shadow-2xl">
                <Image
                  src="/images/mohamed.jpg"
                  alt="Mohamed Elbalooty — Senior Flutter Developer"
                  width={400}
                  height={400}
                  priority
                  className="w-full h-auto aspect-square object-cover object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-300"
                />

                <div className="p-4 bg-slate-950/90 border-t border-white/10 space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white font-semibold">{siteConfig.name}</span>
                    <span className="text-indigo-400">Team Leader</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Tasawk · Cairo, Egypt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
