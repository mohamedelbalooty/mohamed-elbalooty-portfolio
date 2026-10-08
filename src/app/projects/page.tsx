"use client";

import React, { useState } from "react";
import Link from "next/link";
import { allProjects, getAllCategories } from "@/data/projects";
import { Container } from "@/components/layout/container";
import { ArrowUpRight, Search, Building2, Layers } from "lucide-react";

const categories = getAllCategories();

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 md:py-20">
      <Container className="space-y-10">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Project Archive</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Engineering Projects & Case Studies
          </h1>
          <p className="text-base text-slate-400 leading-relaxed">
            A comprehensive catalog of production mobile applications, multi-tenant frameworks, and hardware SDK integrations developed across 5+ years of engineering experience.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Filter projects by category">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                    isSelected
                      ? "bg-indigo-600 text-white"
                      : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5"
                  }`}
                  role="tab"
                  aria-selected={isSelected}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by tech or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Projects List */}
        {filteredProjects.length === 0 ? (
          <div className="rounded-xl border border-white/10 bg-slate-900/30 p-12 text-center space-y-3">
            <p className="text-slate-400 text-sm">
              No projects found matching your search criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-xs font-mono text-indigo-400 hover:underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group rounded-xl border border-white/10 bg-slate-900/40 p-6 flex flex-col justify-between hover:border-indigo-500/50 hover:bg-slate-900/80 transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded-full font-mono font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {project.category}
                    </span>
                    {project.company && (
                      <span className="flex items-center gap-1 text-slate-400 font-mono text-[11px]">
                        <Building2 className="w-3 h-3 text-slate-500" />
                        {project.company}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs font-mono text-slate-400 mt-1 line-clamp-1">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {project.problem && (
                    <div className="pt-2 text-[11px] text-slate-400 border-t border-white/5 space-y-1">
                      <span className="font-mono text-slate-500 uppercase tracking-wider text-[10px]">
                        Problem Focus:
                      </span>
                      <p className="line-clamp-2 italic text-slate-400">
                        &quot;{project.problem}&quot;
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
