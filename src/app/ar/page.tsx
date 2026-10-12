import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { getAllServices } from "@/data/services";
import { Container } from "@/components/layout/container";
import {
  generateBreadcrumbJsonLd,
  generatePersonJsonLd,
  generateWebSiteJsonLd,
} from "@/lib/seo";
import {
  FileDown,
  Mail,
  ArrowLeft,
  Briefcase,
  Layers,
  ShieldCheck,
  Languages,
} from "lucide-react";

export const metadata: Metadata = {
  title: "محمد البلعوطي — مهندس وقائد فريق فلاتر وموبايل",
  description:
    "الملف المهني والخدمات الاستشارية للمهندس محمد البلعوطي — Senior Flutter Developer & Team Lead. متخصص في هندسة تطبيقات التكنولوجيا المالية والتجارة الإلكترونية في مصر والسعودية والخليج.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/ar`,
    languages: {
      en: siteConfig.siteUrl,
      ar: `${siteConfig.siteUrl}/ar`,
      "x-default": siteConfig.siteUrl,
    },
  },
  openGraph: {
    title: "محمد البلعوطي — Senior Flutter Developer & Team Lead",
    description:
      "الملف المهني والخدمات الاستشارية للمهندس محمد البلعوطي. أكثر من 5 سنوات من الخبرة في قيادة وتطوير تطبيقات الموبايل والتكنولوجيا المالية.",
    url: `${siteConfig.siteUrl}/ar`,
    locale: "ar_EG",
    type: "profile",
    images: [
      {
        url: `${siteConfig.siteUrl}/images/mohamed.jpg`,
        width: 800,
        height: 800,
        alt: "محمد البلعوطي — مهندس وقائد فريق فلاتر",
      },
    ],
  },
};

export default function ArabicProfilePage() {
  const services = getAllServices();

  const breadcrumbs = [
    { name: "الرئيسية", url: "/" },
    { name: "الملف المهني بالعربية", url: "/ar" },
  ];
  const breadcrumbJsonLd = generateBreadcrumbJsonLd(breadcrumbs);
  const personJsonLd = generatePersonJsonLd();
  const webSiteJsonLd = generateWebSiteJsonLd();

  const nameVariations = [
    { label: "الاسم المهني المعتمد (English)", value: "Mohamed Elbalooty" },
    { label: "الاسم الرسمي بالشهادة الأكاديمية وجواز السفر", value: "Mohamed Gamal Elbalooty" },
    { label: "تهجئة لاتينية بديلة شائعة", value: "Mohamed Elbalaoty / Mohamed Gamal Elbalaoty" },
    { label: "الاسم العربي الكامل", value: "محمد جمال البلعوطي (محمد البلعوطي)" },
  ];

  const featuredArabicProjects = [
    {
      title: "محفظة ليرات (Lirat Wallet)",
      category: "التكنولوجيا المالية (FinTech)",
      summary:
        "بناء وتطوير محفظة رقمية قائمة على نموذج SaaS مع معالجة الدفع والاشتراكات وضمان أمان المعاملات المالية.",
      slug: "lirat",
    },
    {
      title: "منظومة خردة في السعودية (Khurdah Ecosystem)",
      category: "التجارة الدائرية واللوجستيات",
      summary:
        "منظومة من 3 تطبيقات (العميل، السائق، ونظام ERP اللوجستي) حققت أكثر من 50 ألف تنزيل خلال عام في المملكة العربية السعودية.",
      slug: "khurdah-client",
    },
    {
      title: "منظومة كوفا للمطاعم ونقاط البيع (Kufa QSR)",
      category: "الأغذية وأجهزة Sunmi POS",
      summary:
        "تطبيق طلبات الطعام عبر 19 فرعاً في المملكة وتطبيق المدير مع دمج أجهزة نقاط البيع الذكية (Sunmi POS).",
      slug: "kufa",
    },
    {
      title: "تطبيقات المتاجر الإلكترونية البيضاء (White-Labeled Commerce)",
      category: "التجارة الإلكترونية (E-Commerce)",
      summary:
        "تطوير 6+ تطبيقات فلاتر متوافقة مع منصات سلة وزد وBagisto وOpenCart بتصميم معماري موحد متعدد المتاجر.",
      slug: "white-labeled-ecommerce",
    },
  ];

  return (
    <div className="py-12 md:py-20 space-y-16" dir="rtl" lang="ar">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />

      <Container className="space-y-16">
        {/* Language Switch Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 text-xs font-mono">
          <div className="flex items-center gap-2 text-indigo-400">
            <Languages className="w-4 h-4" />
            <span>الصفحة الرسمية باللغة العربية (Arabic Profile)</span>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <span>English Version</span>
            <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
          </Link>
        </div>

        {/* Hero Section (Arabic) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-950/40 text-xs font-mono text-indigo-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>قائد فريق فلاتر ومطور تطبيقات موبايل أول · القاهرة، مصر</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                محمد البلعوطي
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-300">
                هندسة، قيادة، وإطلاق تطبيقات الموبايل الإنتاجية — من التصميم المعماري إلى متجري App Store وGoogle Play.
              </p>
            </div>

            <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
              أكثر من 5 سنوات من الخبرة البرمجية الموثقة في دورة حياة تطبيقات الموبايل بالكامل —{" "}
              <strong className="text-white">التصميم المعماري، التطوير، الاختبار الآلي، والإطلاق والصيانة المستمرة</strong>. تولى قيادة تطوير فلاتر لدى تسوق (Tasawk) في بيئات الـ SaaS Flavors متعددة العملاء، وقاد سابقاً فريقاً مكوناً من 5 مهندسي موبايل لدى Geexar لبناء منصات تكنولوجيا مالية تشمل المحافظ الرقمية وبطاقات الدفع الإلكتروني، مع خبرة تنفيذ واسعة في أسواق <strong className="text-white">مصر، المملكة العربية السعودية، الإمارات، والكويت</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Mohamed-Elbalooty-CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md transition-colors"
              >
                <FileDown className="w-4 h-4" />
                <span>تحميل السيرة الذاتية (CV PDF)</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>تواصل للتوظيف أو الاستشارات</span>
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <span>استعراض المشاريع</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Profile Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative group w-64 sm:w-72">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-900 shadow-2xl">
                <Image
                  src="/images/mohamed.jpg"
                  alt="محمد البلعوطي — مهندس وقائد فريق فلاتر"
                  width={400}
                  height={400}
                  priority
                  className="w-full h-auto aspect-square object-cover object-top"
                />
                <div className="p-4 bg-slate-950/90 border-t border-white/10 space-y-1 text-right">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white font-semibold">محمد البلعوطي</span>
                    <span className="text-indigo-400">قائد فريق فلاتر</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    القاهرة، مصر · متاح للتعاقد الإقليمي والعمل عن بُعد
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Identity & Name Variations Section */}
        <section className="space-y-6 pt-10 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>الهوية المهنية وتنوع الأسماء المعتمدة</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              توثيق الاسم والتنوعات اللغوية في محركات البحث
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
              لتسهيل التعرف المهني على محمد البلعوطي من قِبل مسؤولي التوظيف والشركاء في العالم العربي والشركات الدولية، يتم توثيق هذه التهجئات والأسماء المترادفة لنفس الهوية المهنية الموحدة:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nameVariations.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-slate-900/40 p-5 space-y-1.5 text-right"
              >
                <span className="text-[11px] font-mono text-indigo-400 font-semibold">
                  {item.label}
                </span>
                <p className="text-base font-bold text-white tracking-wide font-mono">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Consulting Offerings (Arabic) */}
        <section className="space-y-8 pt-10 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5" />
              <span>الخدمات الاستشارية وهندسة التطبيقات</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              مجالات التعاقد والاستشارات الفنية للشركات والمؤسسات
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.id}
                className="rounded-xl border border-white/10 bg-slate-900/50 p-6 space-y-4 flex flex-col justify-between text-right"
              >
                <div className="space-y-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {svc.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {svc.arabicTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {svc.arabicDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <Link
                    href={`/services#${svc.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300"
                  >
                    <span>تفاصيل الخدمة والنماذج التعاقدية</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects (Arabic) */}
        <section className="space-y-8 pt-10 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>أبرز الأعمال الموثقة</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              مشاريع تم إطلاقها وقيادتها بنجاح
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredArabicProjects.map((p) => (
              <div
                key={p.slug}
                className="rounded-xl border border-white/10 bg-slate-900/40 p-6 space-y-3 text-right"
              >
                <span className="text-xs font-mono text-indigo-400 font-semibold">
                  {p.category}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {p.summary}
                </p>
                <div className="pt-2">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                  >
                    <span>دراسة الحالة الهندسية كاملة (English)</span>
                    <ArrowLeft className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact and Direct Channels (Arabic) */}
        <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 space-y-6 text-right">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              جاهز لمناقشة فرص القيادة التقنية أو الاستشارات البرمجية؟
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              متاح لمناقشة أدوار قيادة فرق الموبايل (Flutter Team Lead / Senior Mobile Engineer) والاستشارات الهندسية للمشاريع في مصر، السعودية، ودول الخليج العربي.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-4 rounded-xl border border-white/5 bg-slate-950/60 space-y-1 block hover:border-indigo-500/30 transition-colors"
            >
              <span className="text-xs font-mono text-indigo-400">البريد الإلكتروني المباشر</span>
              <p className="text-sm font-bold text-white font-mono break-all">{siteConfig.email}</p>
            </a>

            <a
              href={`tel:${siteConfig.phone}`}
              className="p-4 rounded-xl border border-white/5 bg-slate-950/60 space-y-1 block hover:border-indigo-500/30 transition-colors"
            >
              <span className="text-xs font-mono text-indigo-400">الهاتف / واتساب</span>
              <p className="text-sm font-bold text-white font-mono" dir="ltr">{siteConfig.phone}</p>
            </a>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-white/5 bg-slate-950/60 space-y-1 block hover:border-indigo-500/30 transition-colors"
            >
              <span className="text-xs font-mono text-indigo-400">الملف المهني لينكد إن</span>
              <p className="text-sm font-bold text-white font-mono">in/mohamed-elbalooty</p>
            </a>
          </div>
        </section>
      </Container>
    </div>
  );
}
