import React from "react";
import { Hero } from "@/components/sections/hero";
import { ProofStrip } from "@/components/sections/proof-strip";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ArchitecturePhilosophy } from "@/components/sections/architecture-philosophy";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { SkillsMatrix } from "@/components/sections/skills-matrix";
import { AiEngineering } from "@/components/sections/ai-engineering";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProofStrip />
      <FeaturedProjects />
      <ArchitecturePhilosophy />
      <ExperiencePreview />
      <SkillsMatrix />
      <AiEngineering />
      <CtaBanner />
    </div>
  );
}
