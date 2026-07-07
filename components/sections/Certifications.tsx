"use client";

import { motion } from "framer-motion";
import { Award, Cloud, BarChart, Code, Building2, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Data Analytics Track",
    issuer: "Google Cloud Career Launchpad",
    icon: <Cloud className="w-6 h-6" />,
    link: "https://www.credly.com/badges/d701ed94-742b-4c99-be62-0a5937f981db/public_url",
  },
  {
    title: "Computing Foundations Track",
    issuer: "Google Cloud Career Launchpad",
    icon: <Cloud className="w-6 h-6" />,
    link: "https://www.credly.com/badges/e102830e-96a7-4415-af11-3523583b1f81",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    icon: <Building2 className="w-6 h-6" />,
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_TXGsbeNgLBWvcaXPT_1739725141667_completion_certificate.pdf",
  },
  {
    title: "Data Visualization",
    issuer: "Tata Group",
    icon: <BarChart className="w-6 h-6" />,
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_TXGsbeNgLBWvcaXPT_1739630769972_completion_certificate.pdf",
  },
  {
    title: "Python Data Structures",
    issuer: "University of Michigan",
    icon: <Code className="w-6 h-6" />,
    link: "https://www.coursera.org/account/accomplishments/verify/LF8SGJ24U7HY",
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud",
    icon: <Cloud className="w-6 h-6" />,
    link: "https://www.cloudskillsboost.google/public_profiles/f70197f3-b664-4fdf-a00e-d877ddf46be9/badges/13617566",
  },
  {
    title: "Introduction to Git and GitHub",
    issuer: "Google (Coursera)",
    icon: <Code className="w-6 h-6" />,
    link: "#",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-[var(--color-bg-linen)] dark:bg-[#1A1917] relative border-t border-[var(--color-border-default)] dark:border-[var(--color-border-dark)]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent-primary)] mb-2">Continuous Learning</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-[var(--color-text-heading)] dark:text-white mb-6">
            Certifications
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--color-card-light)] dark:bg-[var(--color-card-dark)] rounded-2xl p-6 border border-[var(--color-border-default)] dark:border-[var(--color-border-dark)] shadow-soft hover:shadow-hover hover:border-[var(--color-accent-primary)]/50 transition-all duration-300 flex items-center gap-5 group cursor-pointer"
            >
              <div className="p-4 rounded-xl bg-gradient-to-br from-[var(--color-bg-ivory)] to-[var(--color-bg-linen)] dark:from-[#2A2825] dark:to-[#1D1C1A] text-[var(--color-accent-primary)] border border-[var(--color-border-default)] dark:border-[#3A3530] group-hover:scale-110 transition-transform duration-300 shadow-sm shrink-0">
                {cert.icon}
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-[var(--color-text-heading)] dark:text-white mb-1 group-hover:text-[var(--color-accent-primary)] transition-colors leading-tight">
                  {cert.title}
                </h4>
                <p className="text-sm text-[var(--color-text-muted)] font-medium">
                  {cert.issuer}
                </p>
              </div>
              <div className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-primary)] opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0">
                <ExternalLink className="w-5 h-5" />
              </div>
            </motion.a>
          ))}
        </div>
        
      </div>
    </section>
  );
}
