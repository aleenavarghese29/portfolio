"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const techChips = [
  "Python", "JavaScript", "FastAPI", "Next.js", "React", "OpenAI", "Gemini AI", 
  "LangChain", "RAG", "RAGAnything", "LightRAG", "MinerU", "TensorFlow", "PyTorch",
  "Scikit-learn", "Pandas", "NumPy", "Deep Learning", "Machine Learning", "CNN", "RNN", 
  "Computer Vision", "NLP", "Generative AI", "Docker", "SQL"
];

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <span>{displayText}</span>;
};

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 bg-gradient-hero">
      {/* AI Network Background */}
      <div className="absolute inset-0 z-0 bg-hero-ai bg-cover bg-center opacity-15 dark:opacity-20 mix-blend-overlay pointer-events-none"></div>

      {/* Animated Blobs Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent-primary)]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:bg-[var(--color-accent-primary)]/10 dark:mix-blend-normal"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#F8F6F2]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 dark:bg-[#1D1C1A]/50 dark:mix-blend-normal"></div>
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-[var(--color-accent-secondary)]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 dark:bg-[var(--color-accent-secondary)]/10 dark:mix-blend-normal"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-medium text-[var(--color-accent-primary)] tracking-wide">
                Hi, I&apos;m
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[var(--color-text-heading)] dark:text-white">
                Aleena Varghese
              </h1>
              <div className="min-h-[80px] md:min-h-[40px] text-2xl md:text-3xl font-semibold text-[var(--color-text-body)] dark:text-[var(--color-text-muted)] leading-tight">
                <span className="text-gradient-gold">
                  <TypewriterText text="AI Engineer • Data Scientist • Full-Stack Developer" />
                </span>
                <motion.span 
                  animate={{ opacity: [1, 0] }} 
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-[3px] h-[1.1em] ml-2 align-text-bottom bg-[#8F6B46] dark:bg-[#C4A37A]"
                />
              </div>
            </div>

            <p className="text-lg md:text-xl text-[var(--color-text-body)] dark:text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
              Building intelligent AI systems using LLMs, Retrieval-Augmented Generation, Computer Vision, and scalable backend engineering.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button asChild size="lg" className="gap-2 group">
                <a href="#projects">
                  View Projects
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="gap-2">
                <a href="/resume/Aleena_Varghese_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 border-[var(--color-border-default)] dark:border-[var(--color-border-dark)]">
                <a href="#contact">
                  <Mail className="h-4 w-4 text-[var(--color-accent-primary)]" />
                  Contact Me
                </a>
              </Button>
            </div>

            <div className="pt-10">
              <p className="text-sm font-medium text-[var(--color-text-muted)] mb-4 tracking-wider uppercase">Technologies</p>
              <div className="flex flex-wrap gap-2 max-w-xl">
                {techChips.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-[var(--color-bg-linen)] dark:bg-[var(--color-card-dark)] text-[var(--color-text-body)] dark:text-[var(--color-text-light)] border border-[var(--color-border-default)] dark:border-[var(--color-border-dark)] hover:border-[var(--color-accent-primary)] dark:hover:border-[var(--color-accent-primary)] transition-colors cursor-default shadow-sm hover:shadow-md"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end relative"
          >
            <motion.div 
              initial={{ borderRadius: "50%" }}
              animate={{ borderRadius: "2.5rem" }}
              transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
              className="relative w-72 h-80 md:w-[400px] md:h-[460px] p-2 bg-gradient-to-br from-[var(--color-accent-primary)] to-transparent shadow-soft"
            >
              <motion.div 
                initial={{ borderRadius: "50%" }}
                animate={{ borderRadius: "2.3rem" }}
                transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                className="absolute inset-0 bg-[var(--color-bg-ivory)] dark:bg-[var(--color-bg-dark)] m-[2px] overflow-hidden shadow-medium glass-panel flex items-center justify-center group"
              >
                <Image
                  src="/professional photo.png"
                  alt="Aleena Varghese"
                  fill
                  className="object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
