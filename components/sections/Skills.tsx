"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code2, BrainCircuit, Layers, Wrench, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 85 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: <BrainCircuit className="w-6 h-6" />,
    skills: [
      { name: "Generative AI & LLMs", level: 90 },
      { name: "RAG", level: 95 },
      { name: "Computer Vision (CNN, SVM)", level: 85 },
      { name: "Deep Learning", level: 85 },
      { name: "NLP", level: 80 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layers className="w-6 h-6" />,
    skills: [
      { name: "FastAPI", level: 90 },
      { name: "Django", level: 85 },
      { name: "Next.js & React", level: 85 },
      { name: "TensorFlow & Keras", level: 85 },
      { name: "OpenCV", level: 80 },
      { name: "Scikit-learn, NumPy, Pandas", level: 90 },
    ],
  },
  {
    title: "GenAI & Tools",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      { name: "OpenAI API", level: 95 },
      { name: "Google Gemini AI", level: 90 },
      { name: "Groq Llama 3.3", level: 90 },
      { name: "LightRAG", level: 85 },
      { name: "RagAnything", level: 85 },
      { name: "MinerU", level: 85 },
      { name: "PydanticAI", level: 80 },
    ],
  },
  {
    title: "Databases & Storage",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "Vector Databases", level: 90 },
      { name: "Knowledge Graphs", level: 85 },
      { name: "SQLite", level: 80 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-[var(--color-bg-linen)] dark:bg-[#1A1917] relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent-primary)] mb-2">Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-[var(--color-text-heading)] dark:text-white mb-6">
            Technical Skills
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--color-card-light)] dark:bg-[var(--color-card-dark)] rounded-3xl p-8 border border-[var(--color-border-default)] dark:border-[var(--color-border-dark)] shadow-soft hover:shadow-hover hover:border-[var(--color-accent-primary)]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-[var(--color-bg-ivory)] dark:bg-[var(--color-bg-dark)] text-[var(--color-accent-primary)] border border-[var(--color-border-default)] dark:border-[var(--color-border-dark)]">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-[var(--color-text-heading)] dark:text-white">
                  {category.title}
                </h4>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-[var(--color-text-body)] dark:text-[var(--color-text-light)]">
                        {skill.name}
                      </span>
                      <span className="text-xs text-[var(--color-text-muted)]">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-[var(--color-bg-linen)] dark:bg-[#1A1917] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
