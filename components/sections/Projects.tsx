"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "HR Assistant System",
    description: "An AI-powered HR assistant using Django, React, TypeScript, and Llama 3.3 to automate payroll, leave, policy, and document queries. Features a secure 9-stage AI orchestration pipeline with intent classification.",
    image: "/projects/hr_assistant.png",
    technologies: ["React", "TypeScript", "Django", "Python", "Llama 3.3"],
    github: "https://github.com/aleenavarghese29/hr-assistant-system",
    demo: "#",
  },
  {
    title: "Multimodal Diagnostic Assistant",
    description: "A production-grade diagnostic assistant orchestrating an 8-stage AI diagnostic pipeline. Integrates knowledge graph retrieval, vector search, and VLM-based visual grounding to deliver context-aware technical diagrams.",
    image: "/projects/diagnostic_assistant.jpg",
    technologies: ["FastAPI", "Next.js", "LightRAG", "MinerU", "PydanticAI"],
    github: "#",
    demo: "#",
  },
  {
    title: "SignBot – Sign Language Recognition",
    description: "A real-time Sign Language Recognition system using OpenAI CLIP and an SVM classifier to convert hand gestures into text. Integrates Google Gemini AI and Text-to-Speech (TTS) for context-aware voice responses.",
    image: "/projects/signbot.png",
    technologies: ["Python", "OpenCV", "SVM", "CLIP", "Gemini AI"],
    github: "https://github.com/aleenavarghese29/signbot",
    demo: "#",
  },
  {
    title: "Age, Gender, and Emotion Prediction",
    description: "CNN-based deep learning models to predict age, gender, and facial emotions from images. Features end-to-end training, evaluation, and inference pipelines achieving robust facial attribute recognition.",
    image: "/projects/emotion_prediction.png",
    technologies: ["Python", "CNN", "TensorFlow/Keras", "OpenCV"],
    github: "https://github.com/aleenavarghese29/Age-Gender-Emotion-Prediction",
    demo: "#",
  },
  {
    title: "AI Gmail Chatbot (RAG Based)",
    description: "Cleaned and prepared Gmail data for retrieval using embedding-based indexing. Built a Retrieval-Augmented Generation (RAG) pipeline using LangChain and ChromaDB. Implemented basic rule-based email categorization and generated responses using LLM APIs.",
    image: "/projects/chatbot.png",
    technologies: ["Python", "LangChain", "ChromaDB", "Gmail API", "Gemini API", "Streamlit"],
    github: "https://github.com/aleenavarghese29/AIGmailChatbot",
    demo: "#",
  },
  {
    title: "Time Series Forecasting",
    description: "Prepared and normalized time series data using windowing techniques. Trained a basic LSTM model and compared results with a baseline forecasting method. Evaluated performance using RMSE and MAE metrics.",
    image: "/projects/forecasting.png",
    technologies: ["TensorFlow/Keras", "Python", "LSTM", "Jupyter Notebook"],
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
              <div className="relative w-full h-64 md:h-72 overflow-hidden bg-[var(--color-bg-linen)] dark:bg-[#1A1917]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-all duration-700 group-hover:scale-105 blur-[2px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-card-light)] via-transparent to-transparent dark:from-[var(--color-card-dark)] opacity-90" />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-md">
                  <a href={project.github} className="p-3 rounded-full bg-white text-black hover:bg-[var(--color-accent-primary)] hover:text-white transition-colors translate-y-4 group-hover:translate-y-0 duration-300">
                    <FaGithub className="w-5 h-5" />
                  </a>
                  {project.demo !== "#" && (
                    <a href={project.demo} className="p-3 rounded-full bg-white text-black hover:bg-[var(--color-accent-primary)] hover:text-white transition-colors translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 flex-1 flex flex-col relative">
                {/* Gradient Border Overlay Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--color-accent-primary)]/20 rounded-b-3xl transition-colors duration-500 pointer-events-none" />
                
                <h4 className="text-2xl font-bold text-[var(--color-text-heading)] dark:text-white mb-3 group-hover:text-[var(--color-accent-primary)] transition-colors">
                  {project.title}
                </h4>
                <p className="text-[var(--color-text-body)] dark:text-[var(--color-text-muted)] mb-6 flex-1 line-clamp-4">
                  {project.description}
                </p>
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
