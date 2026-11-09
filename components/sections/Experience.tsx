"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Briefcase, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experienceData = [
  {
    role: "Associate AI Developer",
    company: "LamaxAI Technologies Pvt. Ltd.",
    location: "Remote, Kerala",
    period: "August 2026 – Present",
    current: true,
    technologies: ["Python", "RAG", "Qdrant", "n8n", "LLMs", "Ollama", "Docker", "Markdown", "Vector Search"],
    handsOn: ["Python", "RAG Architectures", "Qdrant Vector DB", "n8n Automation", "Markdown Knowledge Bases", "Embeddings & Chunking"],
    exploring: ["Ollama (Local LLMs)", "Docker Deployment", "Agentic Workflows"],
    achievements: [
      "Contribute to AI application and workflow development, designing and deploying AI-powered chatbots with Retrieval-Augmented Generation (RAG) architectures.",
      "Prepare, curate, and review Markdown knowledge-base content, implementing chunking strategies, embeddings, and vector database integration with Qdrant for semantic storage and high-precision retrieval.",
      "Build and automate end-to-end AI workflows in n8n, integrating webhook-triggered automation, cloud LLM APIs, and local LLMs via Ollama.",
      "Perform continuous quality review, response validation, and hallucination testing on chatbot behaviors to improve retrieval accuracy and user experience.",
      "Support comprehensive technical documentation, structured knowledge management, and research on production AI deployment patterns.",
    ],
  },
  {
    role: "AI Engineer Intern",
    company: "Lightrains Technolabs",
    location: "Thiruvananthapuram, Kerala (Remote)",
    period: "March 2026 – June 2026",
    current: false,
    technologies: ["FastAPI", "Next.js", "LightRAG", "MinerU", "PydanticAI", "RAGAnything", "VLM", "OpenAI"],
    handsOn: ["Python", "FastAPI", "LightRAG", "MinerU Parsing", "Vector Search", "REST APIs"],
    exploring: ["Vision-Language Models (VLMs)", "Knowledge Graph Reasoning"],
    achievements: [
      "Contributed to an internal multimodal RAG assistant for technical equipment manuals, combining advanced document parsing, vector/graph retrieval, and LLM-based question answering.",
      "Implemented LightRAG and knowledge-graph retrieval concepts to map and connect technical entities, procedural steps, and relational context across complex documentation.",
      "Utilized MinerU document extraction pipelines to parse dense technical PDFs, extract complex table layouts, and prepare structured chunks for downstream retrieval.",
      "Explored multimodal retrieval utilizing Vision-Language Models (VLMs) for visual grounding and semantic retrieval of technical diagrams and figures alongside text.",
      "Supported retrieval pipeline design, FastAPI backend integration, AI safety guardrails, and technical documentation.",
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
              className="relative pl-16 md:pl-0 mb-12 last:mb-0"
            >
              <div className="md:grid md:grid-cols-5 gap-8 items-start">
                
                {/* Timeline Line & Dot (Desktop) */}
                <div className="hidden md:flex flex-col items-center justify-center col-span-1 absolute left-[19.5%] top-0 bottom-[-3rem] last:bottom-0">
                  <div className={`w-px h-full bg-gradient-to-b from-[var(--color-accent-primary)]/50 via-[var(--color-border-default)] to-transparent dark:from-[var(--color-accent-primary)]/30 dark:via-[var(--color-border-dark)] absolute top-8 ${index === experienceData.length - 1 ? 'hidden' : ''}`} />
                  <div className="w-8 h-8 rounded-full bg-[var(--color-bg-ivory)] dark:bg-[var(--color-bg-dark)] border-2 border-[var(--color-accent-primary)] flex items-center justify-center z-10 mt-1.5 shadow-soft">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent-primary)]" />
                  </div>
                </div>

                {/* Mobile Timeline Line */}
                <div className={`md:hidden absolute left-4 top-2 bottom-[-3rem] last:bottom-0 w-px bg-gradient-to-b from-[var(--color-accent-primary)]/50 via-[var(--color-border-default)] to-transparent dark:from-[var(--color-accent-primary)]/30 dark:via-[var(--color-border-dark)] ${index === experienceData.length - 1 ? 'hidden' : ''}`} />
                <div className="md:hidden absolute left-3 top-2 w-2 h-2 rounded-full bg-[var(--color-accent-primary)] ring-4 ring-[var(--color-bg-linen)] dark:ring-[#1A1917] z-10" />

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
                  {exp.current && (
                    <div className="mt-2 flex md:justify-end">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Current
                      </span>
                    </div>
                  )}
                </div>

                {/* Right Side: Content */}
                <div className="md:col-span-4 bg-[var(--color-card-light)] dark:bg-[var(--color-card-dark)] border border-[var(--color-border-default)] dark:border-[var(--color-border-dark)] rounded-3xl p-8 shadow-soft hover:shadow-medium transition-shadow duration-300 ml-0 md:ml-8">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <h4 className="text-2xl font-bold text-[var(--color-text-heading)] dark:text-white">
                      {exp.role}
                    </h4>
                  </div>
                  
                  {/* Technologies Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.technologies.map(tech => (
                      <Badge key={tech} variant="secondary" className="bg-[var(--color-bg-ivory)] dark:bg-[var(--color-bg-dark)] border border-[var(--color-border-default)] dark:border-[var(--color-border-dark)] text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <ul className="space-y-4 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--color-text-body)] dark:text-[var(--color-text-muted)]">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-[var(--color-accent-primary)] shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hands-on vs Exploring Distinction */}
                  <div className="pt-4 border-t border-[var(--color-border-default)] dark:border-[var(--color-border-dark)] grid sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="font-semibold text-[var(--color-text-heading)] dark:text-white block mb-1.5">
                        Hands-on Experience:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.handsOn.map(item => (
                          <span key={item} className="px-2 py-0.5 rounded-md bg-[var(--color-bg-linen)] dark:bg-[#1A1917] text-[var(--color-text-body)] dark:text-[var(--color-text-muted)] border border-[var(--color-border-default)] dark:border-[var(--color-border-dark)]">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--color-text-heading)] dark:text-white block mb-1.5">
                        Currently Learning / Exploring:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.exploring.map(item => (
                          <span key={item} className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
