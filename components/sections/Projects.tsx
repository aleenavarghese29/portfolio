"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "HR Assistant System",
    description: "An AI-powered enterprise HR assistant built with Django, React, and Llama 3.3 to automate employee inquiries with role-aware privacy and comprehensive audit logging.",
    problem: "Employees face delays searching siloed HR policies (leaves, payroll, benefits), while HR teams need strict role-based access control to preserve confidentiality.",
    contribution: "Architected the contextual conversational backend with role-aware query handling, designed secure REST APIs in Django, and implemented RBAC authentication and audit logs.",
    image: "/projects/hr_assistant.png",
    technologies: ["Django", "React", "TypeScript", "Llama 3.3", "SQLite", "REST APIs"],
    github: "https://github.com/aleenavarghese29/hr-assistant-system",
    demo: "#",
  },
  {
    title: "LLM-Powered AI Gmail Assistant",
    description: "A production RAG assistant built with LangChain, Gemini 2.5 Flash, and ChromaDB to perform semantic search, categorization, and conversational Q&A over Gmail correspondence.",
    problem: "Searching across high-volume, unstructured email inboxes for key decisions, attachments, or action items is inefficient and lacks contextual synthesis.",
    contribution: "Implemented an end-to-end RAG pipeline using LangChain, vector embedding indexing in ChromaDB, automated email summarization, and an interactive Streamlit UI.",
    image: "/projects/chatbot.png",
    technologies: ["Python", "LangChain", "Google Gemini", "ChromaDB", "Streamlit", "Embeddings"],
    github: "https://github.com/aleenavarghese29/AIGmailChatbot",
    demo: "#",
  },
  {
    title: "Multimodal Diagnostic Assistant",
    description: "An advanced multimodal RAG assistant enabling contextual natural language Q&A and visual grounding across complex technical equipment documentation.",
    problem: "Technical manuals contain intricate schematics and multi-page procedural diagrams that traditional text-only search systems fail to accurately comprehend.",
    contribution: "Engineered an 8-stage diagnostic pipeline integrating LightRAG knowledge graph retrieval, MinerU layout parsing, and Vision-Language Models (VLMs) for diagram indexing.",
    image: "/projects/diagnostic_assistant.jpg",
    technologies: ["FastAPI", "Next.js", "LightRAG", "MinerU", "PydanticAI", "VLM"],
    github: "#",
    demo: "#",
  },
  {
    title: "SignBot – Sign Language Recognition",
    description: "A real-time sign language recognition system utilizing OpenAI CLIP and SVM classification, integrated with Google Gemini AI and TTS for accessible voice responses.",
    problem: "Non-verbal and hearing-impaired individuals encounter communication barriers in everyday environments due to the lack of low-latency visual-to-speech tools.",
    contribution: "Designed feature extraction pipelines using CLIP visual embeddings paired with an SVM classifier, and linked Gemini AI with text-to-speech for interactive audio translation.",
    image: "/projects/signbot.png",
    technologies: ["Python", "OpenAI CLIP", "SVM", "Google Gemini AI", "Streamlit", "OpenCV"],
    github: "https://github.com/aleenavarghese29/signbot",
    demo: "#",
  },
  {
    title: "Age, Gender, and Emotion Prediction",
    description: "Multi-task convolutional neural network (CNN) architectures trained on UTKFace and FER2013 datasets to simultaneously predict facial attributes in real time.",
    problem: "Real-time facial analytics models often suffer from poor generalization across diverse demographic attributes, requiring separate, computationally heavy models.",
    contribution: "Trained and evaluated multi-output CNN models using TensorFlow and OpenCV, implementing robust image preprocessing, data augmentation, and real-time inference.",
    image: "/projects/emotion_prediction.png",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
    github: "https://github.com/aleenavarghese29/Age-Gender-Emotion-Prediction",
    demo: "#",
  },
  {
    title: "Time Series Forecasting with LSTM",
    description: "Sequential numerical trend forecasting comparing deep recurrent Long Short-Term Memory (LSTM) neural networks against statistical forecasting baselines.",
    problem: "Dynamic sequential datasets exhibit non-linear fluctuations and long-term temporal dependencies that basic linear models cannot capture accurately.",
    contribution: "Built sliding-window temporal preprocessing and normalization routines, trained LSTM models in TensorFlow/Keras, and benchmarked predictive error using RMSE and MAE.",
    image: "/projects/forecasting.png",
    technologies: ["TensorFlow/Keras", "Python", "LSTM", "Pandas", "NumPy"],
    github: "https://github.com/aleenavarghese29/LSTM-Time-Series",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-[var(--color-bg-ivory)] dark:bg-[var(--color-bg-dark)] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent-primary)] mb-2">Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-[var(--color-text-heading)] dark:text-white mb-6">
            Featured Projects
          </h3>
          <p className="text-[var(--color-text-muted)] text-base md:text-lg">
            Practical AI applications, RAG pipelines, and machine learning models engineered for real-world impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden border border-[var(--color-border-default)] dark:border-[var(--color-border-dark)] bg-[var(--color-card-light)] dark:bg-[var(--color-card-dark)] shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative w-full h-60 md:h-64 overflow-hidden bg-[var(--color-bg-linen)] dark:bg-[#1A1917]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-all duration-700 group-hover:scale-105 blur-[2px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-card-light)] via-transparent to-transparent dark:from-[var(--color-card-dark)] opacity-90" />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-md">
                  {project.github !== "#" && (
                    <a 
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white text-black hover:bg-[var(--color-accent-primary)] hover:text-white transition-colors translate-y-4 group-hover:translate-y-0 duration-300"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo !== "#" && (
                    <a 
                      href={project.demo} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white text-black hover:bg-[var(--color-accent-primary)] hover:text-white transition-colors translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-7 md:p-8 flex-1 flex flex-col relative">
                {/* Gradient Border Overlay Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--color-accent-primary)]/20 rounded-b-3xl transition-colors duration-500 pointer-events-none" />
                
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h4 className="text-xl md:text-2xl font-bold text-[var(--color-text-heading)] dark:text-white group-hover:text-[var(--color-accent-primary)] transition-colors">
                    {project.title}
                  </h4>
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] transition-colors p-1"
                      aria-label="View Source Code"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <p className="text-sm md:text-base text-[var(--color-text-body)] dark:text-[var(--color-text-muted)] mb-5">
                  {project.description}
                </p>

                {/* Structured Recruiter Details: Problem & Contribution */}
                <div className="space-y-2 mb-6 text-xs text-[var(--color-text-muted)] bg-[var(--color-bg-linen)]/60 dark:bg-[#1A1917]/60 p-4 rounded-2xl border border-[var(--color-border-default)] dark:border-[var(--color-border-dark)] leading-relaxed">
                  <div>
                    <span className="font-semibold text-[var(--color-text-heading)] dark:text-white">Problem: </span>
                    <span>{project.problem}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--color-text-heading)] dark:text-white">Contribution: </span>
                    <span>{project.contribution}</span>
                  </div>
                </div>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="luxury" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
