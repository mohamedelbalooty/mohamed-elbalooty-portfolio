import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Container } from "./container";
import { Mail, FileDown, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-400 py-12 lg:py-16">
      <Container className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Identity & Positioning */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <span className="text-lg font-semibold text-white tracking-tight">
                {siteConfig.name}
              </span>
              <p className="text-sm text-indigo-400 font-mono mt-0.5">
                {siteConfig.role} · {siteConfig.subRole}
              </p>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <MapPin className="w-3.5 h-3.5 text-indigo-400" />
              <span>{siteConfig.location}</span>
              <span className="text-slate-600">|</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Senior & Lead Roles
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span>Email Me</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-slate-500" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-slate-500" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Mohamed-Elbalooty-CV.pdf"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <FileDown className="w-4 h-4 text-indigo-400" />
                  <span>Download CV (PDF)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {siteConfig.name}. Grounded in verified engineering experience.
          </p>
          <p className="font-mono text-[11px] text-slate-600">
            Clean Architecture · Flutter · Next.js · TypeScript
          </p>
        </div>
      </Container>
    </footer>
  );
}
