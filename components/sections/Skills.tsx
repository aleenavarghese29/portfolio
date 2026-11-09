"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code2, BrainCircuit, Layers, Wrench, BarChart3 } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 className="w-6 h-6" />,
    description: "Core scripting, automation, and relational database queries",
    skills: ["Python", "SQL"],
  },
  {
    title: "Generative AI",
    icon: <BrainCircuit className="w-6 h-6" />,
    description: "LLM orchestration, RAG pipelines, and intelligent assistant design",
    skills: ["LLMs", "RAG", "Prompt Engineering", "Embeddings", "Vector Databases", "AI Chatbots"],
  },
  {
    title: "Data Science & Machine Learning",
    icon: <Layers className="w-6 h-6" />,
    description: "Predictive modeling, deep learning architectures, and data engineering",
    skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "Machine Learning", "Data Analysis", "Data Visualization"],
  },
  {
    title: "Frameworks & Tools",
    icon: <Wrench className="w-6 h-6" />,
    description: "Development environments, workflow automation, and containerization",
    skills: ["Streamlit", "n8n", "Qdrant", "Ollama", "Docker", "Git", "GitHub", "VS Code"],
  },
  {
    title: "Data Visualization",
    icon: <BarChart3 className="w-6 h-6" />,
    description: "Statistical data plotting and exploratory visual storytelling",
    skills: ["Matplotlib", "Seaborn"],
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
          <p className="text-[var(--color-text-muted)] text-base md:text-lg">
            Structured into specialized competencies supported by hands-on development and industry experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--color-card-light)] dark:bg-[var(--color-card-dark)] rounded-3xl p-8 border border-[var(--color-border-default)] dark:border-[var(--color-border-dark)] shadow-soft hover:shadow-hover hover:border-[var(--color-accent-primary)]/50 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-[var(--color-bg-ivory)] dark:bg-[var(--color-bg-dark)] text-[var(--color-accent-primary)] border border-[var(--color-border-default)] dark:border-[var(--color-border-dark)] shadow-sm">
                  {category.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[var(--color-text-heading)] dark:text-white">
                    {category.title}
                  </h4>
                  <span className="text-xs text-[var(--color-accent-primary)] font-medium">
                    {category.skills.length} competencies
                  </span>
                </div>
              </div>

              <p className="text-sm text-[var(--color-text-muted)] mb-6">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2.5 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl text-xs md:text-sm font-medium bg-[var(--color-bg-ivory)] dark:bg-[var(--color-bg-dark)] text-[var(--color-text-body)] dark:text-[var(--color-text-light)] border border-[var(--color-border-default)] dark:border-[var(--color-border-dark)] hover:border-[var(--color-accent-primary)] hover:text-[var(--color-accent-primary)] dark:hover:border-[var(--color-accent-primary)] transition-all duration-200 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
