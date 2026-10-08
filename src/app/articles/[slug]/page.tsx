import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { articles, getArticleBySlug } from "@/data/articles";
import { getProjectBySlug } from "@/data/projects";
import { Container } from "@/components/layout/container";
import { formatDate } from "@/lib/utils";
import { generateArticleJsonLd } from "@/lib/seo";
import { ArrowLeft, Clock, Calendar, ArrowRight, User } from "lucide-react";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  const title = `${article.title} | Mohamed Elbalooty`;
  return {
    title,
    description: article.summary,
    openGraph: {
      title,
      description: article.summary,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: article.summary,
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const jsonLd = generateArticleJsonLd(article);

  return (
    <article className="py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container className="space-y-12 max-w-4xl">
        {/* Back link */}
        <div>
          <Link
            href="/articles"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-4 border-b border-white/10 pb-8">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              {formatDate(article.publishedAt)}
            </span>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              {article.readingTime}
            </span>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-1.5 text-indigo-400">
              <User className="w-3.5 h-3.5" />
              {article.author}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {article.summary}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-xs font-mono rounded bg-white/5 text-slate-300 border border-white/5"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Body Sections */}
        <div className="space-y-10 text-slate-300 leading-relaxed text-sm sm:text-base">
          {article.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {section.heading}
              </h2>
              {section.body.map((para, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {para}
                </p>
              ))}

              {section.codeBlock && (
                <div className="rounded-xl border border-white/10 bg-slate-900/80 p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm font-mono my-4 shadow-xl">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-white/10 pb-2 mb-3">
                    <span className="text-indigo-400 uppercase tracking-wider font-semibold">
                      {section.codeBlock.language} snippet
                    </span>
                  </div>
                  <pre className="text-slate-200">
                    <code>{section.codeBlock.code}</code>
                  </pre>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Connected Case Studies */}
        {article.relatedProjectSlugs && article.relatedProjectSlugs.length > 0 && (
          <div className="pt-10 border-t border-white/10 space-y-4">
            <h3 className="text-base font-bold text-white tracking-tight">
              Related Case Studies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {article.relatedProjectSlugs.map((slug) => {
                const proj = getProjectBySlug(slug);
                if (!proj) return null;
                return (
                  <Link
                    key={slug}
                    href={`/projects/${slug}`}
                    className="p-4 rounded-xl border border-white/10 bg-slate-900/40 hover:border-indigo-500/40 transition-colors space-y-1 block"
                  >
                    <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider">
                      {proj.category}
                    </span>
                    <h4 className="text-sm font-semibold text-white flex items-center justify-between">
                      <span>{proj.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-1">
                      {proj.shortDescription}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </Container>
    </article>
  );
}
