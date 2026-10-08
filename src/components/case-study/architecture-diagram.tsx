import React from "react";
import { ArchitectureLayer } from "@/data/projects/types";
import { Layers, ArrowDown } from "lucide-react";

interface ArchitectureDiagramProps {
  layers?: ArchitectureLayer[];
}

export function ArchitectureDiagram({ layers }: ArchitectureDiagramProps) {
  if (!layers || layers.length === 0) return null;

  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/60 p-6 md:p-8 space-y-6">
      <div className="flex items-center gap-2.5 text-indigo-400">
        <Layers className="w-5 h-5" />
        <h3 className="text-base font-semibold text-white tracking-tight">
          System Architecture & Dependency Flow
        </h3>
      </div>

      <p className="text-sm text-slate-400">
        Strict unidirectional dependency inversion isolating core business rules from external frameworks and APIs.
      </p>

      <div className="space-y-4">
        {layers.map((layer, index) => (
          <React.Fragment key={layer.name}>
            <div className="rounded-lg border border-white/10 bg-slate-950/80 p-5 hover:border-indigo-500/40 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <span className="text-sm font-semibold text-white font-mono flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-indigo-500/20 text-indigo-400 text-xs font-bold">
                    {index + 1}
                  </span>
                  {layer.name}
                </span>
                <span className="text-xs text-slate-400">
                  {layer.responsibility}
                </span>
              </div>

              {layer.components && layer.components.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
                  {layer.components.map((comp) => (
                    <span
                      key={comp}
                      className="px-2 py-0.5 text-xs font-mono rounded bg-white/5 text-slate-300 border border-white/5"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {index < layers.length - 1 && (
              <div className="flex justify-center text-slate-600">
                <ArrowDown className="w-4 h-4" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
