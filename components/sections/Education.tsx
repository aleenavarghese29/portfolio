"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const educationData = [
  {
    institution: "Digital University Kerala",
    degree: "M.Sc. Computer Science",
    specialization: "Data Analytics",
    period: "2024 – 2026",
    location: "Thiruvananthapuram, Kerala",
    cgpa: "9.12",
  },
  {
    institution: "Mar Ivanios College (Autonomous)",
    degree: "B.Sc. Mathematics",
    period: "2021 – 2024",
    location: "Thiruvananthapuram, Kerala",
    cgpa: "7.71",
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 bg-[var(--color-bg-ivory)] dark:bg-[var(--color-bg-dark)] relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent-primary)] mb-2">Academic Background</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-[var(--color-text-heading)] dark:text-white mb-6">
            Education
          </h3>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0 mb-12 last:mb-0"
            >
              <div className="md:grid md:grid-cols-5 gap-8 items-center relative">
                
                {/* Timeline Line & Dot (Desktop) */}
                <div className="hidden md:flex flex-col items-center justify-center col-span-1 absolute left-[19.5%] top-0 bottom-[-3rem] last:bottom-0">
                  <div className="w-px h-full bg-gradient-to-b from-[var(--color-accent-primary)]/50 via-[var(--color-border-default)] to-transparent dark:from-[var(--color-accent-primary)]/30 dark:via-[var(--color-border-dark)] absolute top-8" />
                  <div className="w-10 h-10 rounded-full bg-[var(--color-bg-linen)] dark:bg-[#1A1917] border-2 border-[var(--color-accent-primary)] flex items-center justify-center z-10 mt-1 shadow-soft text-[var(--color-accent-primary)]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </div>

                {/* Mobile Timeline Line */}
                <div className="md:hidden absolute left-0 top-2 bottom-[-3rem] last:bottom-0 w-px bg-gradient-to-b from-[var(--color-accent-primary)]/50 via-[var(--color-border-default)] to-transparent dark:from-[var(--color-accent-primary)]/30 dark:via-[var(--color-border-dark)]" />
                <div className="md:hidden absolute left-[-16px] top-0 w-8 h-8 rounded-full bg-[var(--color-bg-linen)] dark:bg-[#1A1917] border-2 border-[var(--color-accent-primary)] flex items-center justify-center text-[var(--color-accent-primary)]">
                  <GraduationCap className="w-4 h-4" />
                </div>

                {/* Left Side: Date (Desktop) */}
                <div className="md:col-span-1 md:text-right pt-2 mb-4 md:mb-0">
                  <div className="text-xl font-bold text-[var(--color-accent-primary)]">
                    {edu.period}
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="md:col-span-4 bg-[var(--color-card-light)] dark:bg-[var(--color-card-dark)] border border-[var(--color-border-default)] dark:border-[var(--color-border-dark)] rounded-3xl p-8 shadow-soft hover:shadow-medium transition-shadow duration-300 ml-0 md:ml-8 group relative overflow-hidden">
                  
                  {/* Subtle Gradient Glow */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-[var(--color-text-heading)] dark:text-white mb-1">
                        {edu.degree}
                      </h4>
                      {edu.specialization && (
                        <p className="text-lg text-[var(--color-accent-primary)] mb-2 font-medium">
                          {edu.specialization}
                        </p>
                      )}
                      <p className="text-[var(--color-primary-charcoal)] dark:text-[var(--color-text-light)] font-semibold text-lg flex items-center gap-2">
                        {edu.institution}
                      </p>
                    </div>
                    <Badge variant="luxury" className="text-sm px-3 py-1 self-start">
                      CGPA: {edu.cgpa}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 text-[var(--color-text-muted)] text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
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
