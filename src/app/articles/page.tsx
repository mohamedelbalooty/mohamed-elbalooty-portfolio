import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { getAllArticles } from "@/data/articles";
import { Container } from "@/components/layout/container";
import { formatDate } from "@/lib/utils";
import { BookOpen, ArrowUpRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Notes & Architecture Articles",
  description:
    "Engineering articles and technical write-ups on Flutter Clean Architecture, FinTech mobile reliability, and AI-assisted workflows by Mohamed Elbalooty.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="py-12 md:py-20">
      <Container className="space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Engineering Notes</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Technical Articles & Architecture Notes
          </h1>
          <p className="text-base text-slate-400 leading-relaxed">
            In-depth engineering write-ups covering Clean Architecture in Flutter, financial transaction idempotency, and scaling mobile development teams.
          </p>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group rounded-xl border border-white/10 bg-slate-900/40 p-6 flex flex-col justify-between hover:border-indigo-500/50 hover:bg-slate-900/80 transition-all duration-200"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>{formatDate(article.publishedAt)}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    {article.readingTime}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors flex items-start justify-between gap-2">
                  <span>{article.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 shrink-0 mt-1" />
                </h2>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex flex-wrap gap-1.5">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-slate-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
