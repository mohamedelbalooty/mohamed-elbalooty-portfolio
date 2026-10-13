import React from "react";
import Link from "next/link";
import { Container } from "../layout/container";
import {
  Globe,
  Wallet,
  ShoppingBag,
  Activity,
  HardDrive,
  Truck,
  Hotel,
  Package,
  Gift,
  Recycle,
  Droplets,
  UtensilsCrossed,
  MapPin,
  Check,
  ArrowRight,
} from "lucide-react";

export function IndustriesDomains() {
  const domains = [
    {
      name: "FinTech",
      icon: Wallet,
      description: "Digital wallets, P2P payments, virtual card issuance, and subscription billing.",
      badge: "Lirat · P2P Syria · Card App",
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      name: "E-Commerce",
      icon: ShoppingBag,
      description: "White-labeled multi-tenant stores, Bagisto & OpenCart APIs, Zid & Salla themes.",
      badge: "6+ Branded Stores",
      accent: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
    {
      name: "Logistics & Mobility",
      icon: Truck,
      description: "Real-time fleet tracking, courier navigation, and Hajj worker transit in Saudi Arabia.",
      badge: "Azda · Lia Delivery",
      accent: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      name: "Hospitality & Travel",
      icon: Hotel,
      description: "Hotel discovery, direct reservation calendars, and multi-currency seasonal bookings.",
      badge: "IQAMTI Saudi Arabia",
      accent: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      name: "POS & ERP Systems",
      icon: HardDrive,
      description: "Physical POS machine SDKs, thermal receipt printing, ECR drawers, and offline sales sync.",
      badge: "Crystal Mind ERP",
      accent: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      name: "Healthcare",
      icon: Activity,
      description: "Patient workflows, secure clinical data handling, and appointment coordination.",
      badge: "Mobile Healthcare",
      accent: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    },
    {
      name: "On-Demand Delivery",
      icon: Package,
      description: "Real-time courier dispatch, turn-by-turn navigation, and proof-of-delivery capture.",
      badge: "Last-Mile Delivery",
      accent: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      name: "Gifting Marketplaces",
      icon: Gift,
      description: "Multi-vendor flower marketplace, personalized greeting card preview, and scheduled drops.",
      badge: "Lia Multi-Vendor",
      accent: "text-pink-400 bg-pink-500/10 border-pink-500/20",
    },
    {
      name: "Circular Economy",
      icon: Recycle,
      description: "Circular scrap recycling marketplace with 50K+ downloads in KSA, heavy driver fleet dispatch, and ERP valuation.",
      badge: "Khurdah (50K+ Downloads)",
      accent: "text-teal-400 bg-teal-500/10 border-teal-500/20",
    },
    {
      name: "Food & Beverage (QSR)",
      icon: UtensilsCrossed,
      description: "On-demand food ordering with meal customizers, takeaway pickup, and Sunmi POS hardware integration across 19 branches in KSA.",
      badge: "Kufa (10K+ Downloads, 19 Branches)",
      accent: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    },
    {
      name: "Utility Subscriptions",
      icon: Droplets,
      description: "Recurring bottled water delivery plans, address books, and automated reorder schedules.",
      badge: "Ezhal Mowitak",
      accent: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    },
  ];

  const regions = [
    { country: "Egypt", role: "Primary Engineering Hub & FinTech Releases" },
    { country: "Saudi Arabia", role: "Khurdah Recycling (50K+ Downloads), Al-Kufa QSR (10K+ Downloads, 19 Branches), Hajj Transit (Azda), Hotel Booking (IQAMTI), Zid/Salla Commerce" },
    { country: "United Arab Emirates", role: "Cross-Border FinTech & Multi-Client SaaS" },
    { country: "Kuwait", role: "Regional Commerce & Direct Payment Integrations" },
  ];

  return (
    <section className="py-16 md:py-24 border-b border-white/5 bg-slate-950" id="industries">
      <Container className="space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" />
              <span>Multi-Domain & Regional Footprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Industries & Business Domains
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Proven versatility across diverse business models and regional markets. From high-stakes FinTech and seasonal logistics during the Hajj in Saudi Arabia to multi-tenant e-commerce ecosystems.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 font-mono group"
          >
            <span>Explore All Domain Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* 10 Domains Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {domains.map((domain) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.name}
                className="rounded-xl border border-white/10 bg-slate-900/40 p-4 space-y-3 hover:border-white/20 hover:bg-slate-900/70 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg border ${domain.accent}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      Domain
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white tracking-tight">
                      {domain.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-3 leading-relaxed">
                      {domain.description}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5">
                  <span className="text-[10px] font-mono font-medium text-slate-300">
                    {domain.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regional Footprint & Notable Integrations Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
          {/* Regional Footprint */}
          <div className="lg:col-span-6 rounded-2xl border border-white/10 bg-slate-900/30 p-6 space-y-4">
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Regional Client Coverage</span>
            </div>
            <h3 className="text-lg font-bold text-white">
              Delivered Across 4 Middle East & Gulf Markets
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {regions.map((reg) => (
                <div
                  key={reg.country}
                  className="p-3 rounded-xl border border-white/5 bg-slate-950/60 space-y-1"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{reg.country}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    {reg.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Notable Integrations */}
          <div className="lg:col-span-6 rounded-2xl border border-indigo-500/20 bg-indigo-950/20 p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-indigo-300 font-mono text-xs uppercase tracking-wider">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Verified System Integrations</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                Notable Enterprise & Hardware Integrations
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct production experience connecting mobile applications into deep enterprise ecosystems and physical devices:
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 font-mono font-bold">•</span>
                  <span>
                    <strong className="text-white">Zid & Salla E-Commerce Themes</strong> — White-labeled Flutter engines integrating Bagisto and OpenCart web services for Saudi merchants.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 font-mono font-bold">•</span>
                  <span>
                    <strong className="text-white">POS Machine SDKs & ECR Hardware</strong> — Native Kotlin wrappers and thermal receipt printing connected directly into enterprise ERP backends.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 font-mono font-bold">•</span>
                  <span>
                    <strong className="text-white">Hajj Season Operations (Saudi Arabia)</strong> — High-volume real-time worker transit dispatching and Google Maps tracking during peak pilgrimage demand.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-indigo-500/20 flex items-center justify-between text-xs font-mono text-indigo-300">
              <span>Clean Architecture Compliance</span>
              <span className="text-emerald-400">100% Production Ready</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
