"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/layout/container";
import {
  Mail,
  Phone,
  MapPin,
  FileDown,
  Check,
  Copy,
  ArrowUpRight,
  Clock,
  Briefcase,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="py-12 md:py-20 space-y-16">
      <Container className="space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Channels</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Let&apos;s Build Together
          </h1>
          <p className="text-base text-slate-400 leading-relaxed">
            I am currently open to senior engineering opportunities, Flutter Team Lead roles, and architectural consultations for ambitious mobile and FinTech products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-7 space-y-6">
            {/* Primary Email Card */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                  Primary Contact
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Fast Response Time
                </span>
              </div>

              <div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-xl sm:text-2xl font-bold text-white hover:text-indigo-300 transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Direct Email</span>
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Other Channels Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div className="rounded-xl border border-white/10 bg-slate-900/40 p-5 space-y-2">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono">
                  <Phone className="w-4 h-4" />
                  <span>Direct Phone</span>
                </div>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-base font-semibold text-white hover:text-indigo-300 transition-colors font-mono"
                >
                  {siteConfig.phone}
                </a>
                <p className="text-[11px] text-slate-400">Available on WhatsApp & Mobile</p>
              </div>

              {/* Location & Timezone */}
              <div className="rounded-xl border border-white/10 bg-slate-900/40 p-5 space-y-2">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono">
                  <MapPin className="w-4 h-4" />
                  <span>Location</span>
                </div>
                <p className="text-base font-semibold text-white">
                  {siteConfig.location}
                </p>
                <p className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span>Cairo Time (UTC+2) · Remote Friendly</span>
                </p>
              </div>

              {/* LinkedIn */}
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-white/10 bg-slate-900/40 p-5 space-y-2 hover:border-indigo-500/40 transition-colors"
              >
                <div className="flex items-center justify-between text-indigo-400 text-xs font-mono">
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                </div>
                <p className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                  in/mohamed-elbalooty
                </p>
                <p className="text-[11px] text-slate-400">Professional network & recommendations</p>
              </a>

              {/* GitHub */}
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-white/10 bg-slate-900/40 p-5 space-y-2 hover:border-indigo-500/40 transition-colors"
              >
                <div className="flex items-center justify-between text-indigo-400 text-xs font-mono">
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                </div>
                <p className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                  github.com/mohamedelbalooty
                </p>
                <p className="text-[11px] text-slate-400">Open source & engineering repositories</p>
              </a>
            </div>
          </div>

          {/* Hiring / Recruiter Quick Brief */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2.5 text-indigo-400">
                <Briefcase className="w-5 h-5" />
                <h2 className="text-base font-bold text-white tracking-tight">
                  Recruiter & Engineering Manager Note
                </h2>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  I am evaluating roles that require true mobile product ownership:
                </p>
                <ul className="space-y-2 text-xs text-slate-300 pt-1">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                    <span><strong className="text-white">Senior Flutter Developer</strong> architecting scalable, secure mobile systems.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                    <span><strong className="text-white">Flutter Team Lead</strong> leading mobile squads, code reviews, and sprint planning.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                    <span><strong className="text-white">FinTech Mobile Specialist</strong> delivering zero-tolerance transaction workflows.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-3">
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Mohamed-Elbalooty-CV.pdf"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md transition-colors"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download CV (Mohamed-Elbalooty-CV.pdf)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
