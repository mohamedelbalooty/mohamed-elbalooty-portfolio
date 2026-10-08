"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site-config";
import { Container } from "./container";
import { Menu, X, FileDown, ArrowUpRight } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md transition-colors">
      <Container className="flex h-16 items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm"
        >
          <span className="font-semibold text-white tracking-tight group-hover:text-indigo-400 transition-colors">
            {siteConfig.name}
          </span>
          <span className="text-xs text-slate-400 font-mono tracking-normal">
            {siteConfig.role}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center space-x-1 lg:space-x-2"
          aria-label="Main Navigation"
        >
          {siteConfig.navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? "text-white bg-white/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.title}
              </Link>
            );
          })}
        </nav>

        {/* CTA Actions */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Mohamed-Elbalooty-CV.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-md transition-all duration-150"
            title="Download Mohamed Elbalooty's CV"
          >
            <FileDown className="w-3.5 h-3.5 text-indigo-400" />
            <span>CV</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-md shadow-sm transition-all duration-150"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center space-x-2">
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Mohamed-Elbalooty-CV.pdf"
            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-200 bg-white/5 border border-white/10 rounded-md"
            aria-label="Download CV"
          >
            <FileDown className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-[11px]">CV</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1">
            {siteConfig.navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-white bg-indigo-600/20 text-indigo-300"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-white/10 flex flex-col space-y-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-md transition-colors"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
