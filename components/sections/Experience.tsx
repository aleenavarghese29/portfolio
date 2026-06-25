"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Briefcase, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experienceData = [
  {
    role: "AI Engineer Intern",
    company: "Lightrains Technolabs",
    location: "Thiruvananthapuram, Kerala (Remote)",
    period: "March 2026 – May 2026",
    technologies: ["FastAPI", "Next.js", "LightRAG", "MinerU", "PydanticAI", "RAGAnything", "VLM", "OpenAI"],
    achievements: [
      "Engineered a production-grade Multimodal Diagnostic Assistant orchestrating an 8-stage AI diagnostic pipeline.",
      "Built an advanced RAG pipeline integrating knowledge graph retrieval, vector search, and MinerU document parsing.",
      "Implemented Vision-Language Model (VLM)-based visual grounding and semantic image indexing to deliver context-aware diagrams.",
      "Designed robust AI safety guardrails, contextual memory, and confidence validation to ensure reliable diagnostic recommendations.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-[var(--color-bg-linen)] dark:bg-[#1A1917] relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent-primary)] mb-2">Experience</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-[var(--color-text-heading)] dark:text-white mb-6">
            Professional Journey
          </h3>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative pl-12 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 gap-8 items-start">
                
                {/* Timeline Line & Dot (Desktop) */}
                <div className="hidden md:flex flex-col items-center justify-center col-span-1 absolute left-[19.5%] top-0 bottom-0">
                  <div className="w-px h-full bg-gradient-to-b from-[var(--color-accent-primary)]/50 via-[var(--color-border-default)] to-transparent dark:from-[var(--color-accent-primary)]/30 dark:via-[var(--color-border-dark)] absolute top-8" />
                  <div className="w-8 h-8 rounded-full bg-[var(--color-bg-ivory)] dark:bg-[var(--color-bg-dark)] border-2 border-[var(--color-accent-primary)] flex items-center justify-center z-10 mt-1.5 shadow-soft">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent-primary)]" />
                  </div>
                </div>

                {/* Mobile Timeline Line */}
                <div className="md:hidden absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent-primary)]/50 via-[var(--color-border-default)] to-transparent dark:from-[var(--color-accent-primary)]/30 dark:via-[var(--color-border-dark)]" />
                <div className="md:hidden absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[var(--color-accent-primary)] ring-4 ring-[var(--color-bg-linen)] dark:ring-[#1A1917]" />

                {/* Left Side: Date & Company (Desktop) */}
                <div className="md:col-span-1 md:text-right pt-2 mb-4 md:mb-0">
                  <div className="flex items-center md:justify-end gap-2 text-sm font-medium text-[var(--color-text-muted)] mb-1">
                    <Calendar className="w-4 h-4 md:hidden text-[var(--color-accent-primary)]" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center md:justify-end gap-2 text-lg font-semibold text-[var(--color-primary-charcoal)] dark:text-white">
                    <Briefcase className="w-4 h-4 md:hidden text-[var(--color-accent-primary)]" />
                    <span>{exp.company}</span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center md:justify-end gap-2 text-sm font-medium text-[var(--color-text-muted)] mt-1">
                      <MapPin className="w-4 h-4 md:hidden text-[var(--color-accent-primary)]" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>

                {/* Right Side: Content */}
                <div className="md:col-span-4 bg-[var(--color-card-light)] dark:bg-[var(--color-card-dark)] border border-[var(--color-border-default)] dark:border-[var(--color-border-dark)] rounded-3xl p-8 shadow-soft hover:shadow-medium transition-shadow duration-300 ml-0 md:ml-8">
                  <h4 className="text-2xl font-bold text-[var(--color-text-heading)] dark:text-white mb-4">
                    {exp.role}
                  </h4>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.technologies.map(tech => (
                      <Badge key={tech} variant="secondary" className="bg-[var(--color-bg-ivory)] dark:bg-[var(--color-bg-dark)] border border-[var(--color-border-default)] dark:border-[var(--color-border-dark)]">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <ul className="space-y-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--color-text-body)] dark:text-[var(--color-text-muted)]">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-[var(--color-accent-primary)] shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
