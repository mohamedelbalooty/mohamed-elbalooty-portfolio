import React from "react";
import { Container } from "../layout/container";
import { Sparkles, Terminal, Cpu, FileCheck } from "lucide-react";

export function AiEngineering() {
  const tools = [
    {
      name: "Cursor",
      role: "Context-Aware Agentic Refactoring",
      usage:
        "Leveraging codebase-wide indexing for rapid repository restructuring, repetitive boilerplate reduction, and cross-file pattern verification.",
    },
    {
      name: "Claude",
      role: "Architecture RFCs & Deep Logic Modeling",
      usage:
        "Drafting architectural trade-off memos, validating state machine edge cases, and analyzing complex third-party API contracts prior to implementation.",
    },
    {
      name: "GitHub Copilot",
      role: "In-Editor Typing & Syntax Accelerator",
      usage:
        "Inline completion for repetitive Dart serializers, widget structure setup, and routine unit test fixtures.",
    },
    {
      name: "ChatGPT",
      role: "Technical Research & Exploratory Validation",
      usage:
        "Evaluating edge cases in cross-platform plugin APIs, generating regex patterns, and reviewing platform-specific SDK breaking changes.",
    },
  ];

  return (
    <section className="py-16 md:py-24 border-b border-white/5">
      <Container className="space-y-12">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Modern Engineering Workflow</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            AI as an Engineering Multiplier
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            AI does not replace architectural discernment, performance profiling, or defensive mobile security. Instead, I leverage state-of-the-art AI tooling as a force multiplier to eliminate boilerplate, expand automated test coverage, and accelerate delivery velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="rounded-xl border border-white/10 bg-slate-900/30 p-6 space-y-3 hover:border-indigo-500/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-white font-mono">
                  {tool.name}
                </span>
                <span className="p-1 rounded bg-indigo-500/10 text-indigo-400 text-xs">
                  <Terminal className="w-3.5 h-3.5" />
                </span>
              </div>
              <p className="text-xs font-semibold text-indigo-300 font-mono">
                {tool.role}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                {tool.usage}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-indigo-500/20 bg-indigo-950/20 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-300">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-white font-mono">
                The Senior Engineering Difference
              </p>
              <p className="text-slate-400">
                AI writes code fast; senior engineers ensure that code is secure, unit-tested, maintainable, and aligned with business goals.
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 font-mono text-indigo-300 shrink-0">
            <FileCheck className="w-4 h-4 text-emerald-400" />
            <span>Strict Architectural Guardrails</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
