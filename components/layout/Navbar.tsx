"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--background)]/80 backdrop-blur-md shadow-soft border-b border-[var(--color-border-default)] dark:border-[var(--color-border-dark)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" onClick={(e) => handleScrollTo(e, "#home")} className="text-2xl font-bold tracking-tighter">
          <span className="text-gradient-gold">AV</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-[var(--color-text-body)] hover:text-[var(--color-accent-primary)] dark:text-[var(--color-text-muted)] dark:hover:text-[var(--color-accent-primary)] transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 border-l border-[var(--color-border-default)] dark:border-[var(--color-border-dark)] pl-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-[var(--color-bg-linen)] dark:hover:bg-[var(--color-border-dark)] transition-colors"
              aria-label="Toggle Theme"
            >
              <Sun className="h-5 w-5 hidden dark:block text-[var(--color-text-light)]" />
              <Moon className="h-5 w-5 block dark:hidden text-[var(--color-primary-charcoal)]" />
            </button>
            <Button asChild variant="default" size="sm" className="gap-2">
              <a href="/resume/Aleena_Varghese_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-[var(--color-bg-linen)] dark:hover:bg-[var(--color-border-dark)] transition-colors"
            aria-label="Toggle Theme"
          >
            <Sun className="h-5 w-5 hidden dark:block text-[var(--color-text-light)]" />
            <Moon className="h-5 w-5 block dark:hidden text-[var(--color-primary-charcoal)]" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[var(--color-text-heading)] dark:text-[var(--color-text-light)]"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[var(--background)] border-b border-[var(--color-border-default)] dark:border-[var(--color-border-dark)] shadow-soft md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-lg font-medium text-[var(--color-text-body)] hover:text-[var(--color-accent-primary)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-[var(--color-border-default)] dark:border-[var(--color-border-dark)]">
                <Button asChild variant="default" className="w-full justify-center gap-2">
                  <a href="/resume/Aleena_Varghese_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
