import React from "react";
import { EngineeringDecision } from "@/data/projects/types";
import { Scale, CheckCircle2, AlertCircle } from "lucide-react";

interface DecisionCardProps {
  decision: EngineeringDecision;
}

export function DecisionCard({ decision }: DecisionCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/60 p-6 space-y-4 hover:border-white/20 transition-all">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 mt-0.5 shrink-0">
          <Scale className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-base font-semibold text-white tracking-tight">
            {decision.title}
          </h4>
          <p className="text-xs text-slate-400 font-mono mt-0.5">
            Context: {decision.context}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-white/5 text-xs">
        {/* Decision */}
        <div className="space-y-1 rounded-lg bg-slate-950/60 p-3.5 border border-white/5">
          <div className="font-semibold text-indigo-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
            <span>Decision</span>
          </div>
          <p className="text-slate-300 leading-relaxed">{decision.decision}</p>
        </div>

        {/* Trade-off */}
        <div className="space-y-1 rounded-lg bg-slate-950/60 p-3.5 border border-white/5">
          <div className="font-semibold text-amber-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Trade-Off</span>
          </div>
          <p className="text-slate-300 leading-relaxed">{decision.tradeOff}</p>
        </div>

        {/* Result */}
        <div className="space-y-1 rounded-lg bg-slate-950/60 p-3.5 border border-white/5">
          <div className="font-semibold text-emerald-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Result</span>
          </div>
          <p className="text-slate-300 leading-relaxed">{decision.result}</p>
        </div>
      </div>
    </div>
  );
}
