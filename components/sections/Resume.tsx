"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Resume() {
  return (
    <section id="resume" className="py-24 bg-[var(--color-bg-ivory)] dark:bg-[var(--color-bg-dark)] relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent-primary)] mb-2">Curriculum Vitae</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-[var(--color-text-heading)] dark:text-white mb-6">
            Resume
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto bg-[var(--color-card-light)] dark:bg-[var(--color-card-dark)] rounded-3xl p-6 md:p-10 border border-[var(--color-border-default)] dark:border-[var(--color-border-dark)] shadow-medium"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 pb-8 border-b border-[var(--color-border-default)] dark:border-[var(--color-border-dark)]">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <div className="p-4 rounded-2xl bg-[var(--color-bg-linen)] dark:bg-[#1A1917] text-[var(--color-accent-primary)]">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-[var(--color-text-heading)] dark:text-white break-all md:break-normal">Aleena_Varghese_CV.pdf</h4>
                <p className="text-[var(--color-text-muted)]">AI Engineer & Data Scientist</p>
              </div>
            </div>
            <Button asChild size="lg" className="gap-2 w-full md:w-auto">
              <a href="/resume/Aleena_Varghese_Resume.pdf" target="_blank" rel="noopener noreferrer" download="Aleena_Varghese_Resume.pdf">
                <Download className="w-5 h-5" />
                Download PDF
              </a>
            </Button>
          </div>

          {/* PDF Preview Container */}
          <div className="w-full aspect-[1/1.4] md:aspect-[1/1.2] lg:aspect-[1/1] bg-[var(--color-bg-linen)] dark:bg-[#1A1917] rounded-2xl overflow-hidden border border-[var(--color-border-default)] dark:border-[var(--color-border-dark)] shadow-inner relative">
            <iframe 
              src="/resume/Aleena_Varghese_Resume.pdf#toolbar=0" 
              className="w-full h-full absolute inset-0"
              title="Resume Preview"
            />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
