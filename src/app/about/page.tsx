import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { education, languages } from "@/data/experience";
import { Container } from "@/components/layout/container";
import {
  User,
  GraduationCap,
  Languages as LangIcon,
  FileDown,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Profile & Leadership Philosophy",
  description:
    "Professional background, architectural principles, and engineering journey of Mohamed Elbalooty — Senior Flutter Developer & Team Lead.",
};

export default function AboutPage() {
  const principles = [
    {
      title: "Architecture as a Business Enabler",
      description:
        "Code architecture is not an academic exercise. Clean Architecture and modular boundaries exist so businesses can launch features quickly without breaking existing customer flows or introducing regressions in payment checkouts.",
    },
    {
      title: "Production Discipline over Prototype Shortcuts",
      description:
        "Anyone can build a mobile screen that looks good in an emulator with mock data. Senior engineering begins when that screen must handle offline retries, biometrics, race conditions, expired auth tokens, and app store compliance.",
    },
    {
      title: "Team Enablement & Mentorship",
      description:
        "True engineering leverage comes from making the entire squad better. Through architectural RFCs, code review checklists, and mentoring junior developers, team velocity accelerates sustainably.",
    },
    {
      title: "Cross-Functional Collaboration",
      description:
        "Mobile engineers must partner closely with product managers, UI/UX designers, and backend teams. Clear API contract definitions and proactive requirement refinement prevent last-minute release scrambles.",
    },
  ];

  return (
    <div className="py-12 md:py-20 space-y-16">
      <Container className="space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Engineering Profile</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            About Mohamed Elbalooty
          </h1>
          <p className="text-base text-slate-400 leading-relaxed">
            Flutter Team Lead & Senior Flutter Engineer with 5+ years of software engineering experience working across the full mobile lifecycle — architecture, development, testing, release, and ongoing delivery.
          </p>
        </div>

        {/* Narrative & Media */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story */}
          <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              My engineering journey began with a degree in Computer Science & Information Technology from Mansoura University (2017–2021). From my earliest work building customer-facing features at WaitBuzz_Co and developing hardware-connected POS/ECR systems at Crystal Mind, my focus has been on building software that solves concrete operational and financial problems.
            </p>

            <p>
              Over the last 5+ years, I evolved from implementing client interfaces into designing core mobile architectures and leading engineering teams. At NEOXERO, I architected a unified, white-labeled commerce platform serving 6+ branded stores across Saudi Arabia (integrating Bagisto, OpenCart, and regional platforms like Zid and Salla).
            </p>

            <p>
              At Geexar, I served as Senior Flutter Developer and led a 5-member mobile team delivering mission-critical FinTech platforms—including the digital wallet <strong className="text-white">Lirat</strong>, <strong className="text-white">P2P Syria</strong>, and <strong className="text-white">Card App</strong>. In these roles, transaction idempotency, security, and defensive error handling were foundational requirements.
            </p>

            <p>
              Currently, as <strong className="text-white">Flutter Team Leader at Tasawk</strong>, I oversee mobile engineering across SaaS flavor-based environments, manage full release lifecycles on the Apple App Store and Google Play, and coordinate cross-functional teams to deliver scalable business solutions.
            </p>

            <p>
              Throughout my career, I have delivered applications across a wide range of business models — <strong className="text-white">fintech, e-commerce, healthcare, POS/ERP, logistics (such as Hajj worker transit with Azda), hospitality (hotel reservations with IQAMTI), and on-demand delivery</strong> — working with clients and platforms across <strong className="text-white">Egypt, Saudi Arabia, the UAE, and Kuwait</strong>.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Mohamed-Elbalooty-CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md transition-colors"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Full CV (PDF)</span>
              </a>

              <Link
                href="/experience"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <span>View Career Timeline</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Profile Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 space-y-6">
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-slate-950">
                <Image
                  src="/images/mohamed.jpg"
                  alt="Mohamed Elbalooty"
                  width={350}
                  height={350}
                  className="w-full h-auto aspect-square object-cover object-top"
                />
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400 font-mono">Location</span>
                  <span className="text-white font-semibold">{siteConfig.location}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400 font-mono">Current Title</span>
                  <span className="text-indigo-400 font-semibold">{siteConfig.role}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400 font-mono">Experience</span>
                  <span className="text-white font-semibold">5+ Years Verified</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400 font-mono">Primary Stack</span>
                  <span className="text-white font-semibold">Flutter · Dart · Kotlin</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Philosophy Cards */}
        <section className="space-y-6 pt-8 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Core Values</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Engineering Mindset & Leadership Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-white/10 bg-slate-900/40 p-6 space-y-2.5"
              >
                <h3 className="text-base font-bold text-white tracking-tight">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Credentials */}
        <section className="space-y-6 pt-8 border-t border-white/10">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Education & Background
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 bg-slate-900/40 p-6 space-y-2">
              <div className="flex items-center gap-2 text-indigo-400">
                <GraduationCap className="w-5 h-5" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Formal Education
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">
                {education.degree} — {education.field}
              </h3>
              <p className="text-sm text-indigo-400 font-mono">
                {education.institution}
              </p>
              <p className="text-xs text-slate-400 font-mono">
                {education.period}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900/40 p-6 space-y-3">
              <div className="flex items-center gap-2 text-indigo-400">
                <LangIcon className="w-5 h-5" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Languages
                </span>
              </div>
              <div className="space-y-2">
                {languages.map((l) => (
                  <div
                    key={l.language}
                    className="flex items-center justify-between text-xs p-2.5 rounded bg-white/5 border border-white/5"
                  >
                    <span className="font-semibold text-white">{l.language}</span>
                    <span className="font-mono text-slate-400">
                      {l.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
