"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { label: "AI Projects Built", value: 12, suffix: "+" },
  { label: "Months Internship Experience", value: 3, suffix: "" },
  { label: "CGPA (M.Sc.)", value: 9.12, suffix: "" },
  { label: "AI Certifications", value: 7, suffix: "+" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-[var(--color-primary-charcoal)] dark:text-white">
      {Number.isInteger(value) ? Math.floor(count) : count.toFixed(2)}
      <span className="text-[var(--color-accent-primary)]">{suffix}</span>
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 bg-[var(--color-bg-ivory)] dark:bg-[var(--color-bg-dark)] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent-primary)] mb-2">About Me</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-[var(--color-text-heading)] dark:text-white mb-6">
            Engineering Intelligent Systems
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-lg text-[var(--color-text-body)] dark:text-[var(--color-text-muted)] leading-relaxed"
          >
            <p>
              My journey into artificial intelligence began with a deep fascination for how machines can learn from data to solve complex, real-world problems. As an <strong>M.Sc. in Computer Science (Data Analytics)</strong>  graduate from Digital University Kerala, I am dedicated to pushing the boundaries of what&apos;s possible with modern AI architectures.
            </p>
            <p>
              I specialize in <strong>Generative AI, Large Language Models (LLMs), and Computer Vision</strong>. My recent work focuses heavily on building robust <strong>Retrieval-Augmented Generation (RAG)</strong> pipelines, deploying Vision-Language Models, and orchestrating multi-agent systems to create highly capable AI assistants.
            </p>
            <p>
              I am driven by a singular career goal: to engineer intelligent, scalable, and responsible AI applications that deliver tangible value. Whether it&apos;s crafting an automated HR orchestration system or a diagnostic medical assistant, I approach every problem with a blend of analytical rigor and creative problem-solving.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-[var(--color-card-light)] dark:bg-[var(--color-card-dark)] border border-[var(--color-border-default)] dark:border-[var(--color-border-dark)] shadow-soft text-center group hover:shadow-hover hover:border-[var(--color-accent-primary)] transition-all duration-300"
              >
                <div className="mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-medium text-[var(--color-text-muted)] group-hover:text-[var(--color-text-body)] dark:group-hover:text-[var(--color-text-light)] transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
