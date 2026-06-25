import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-bg-ivory)] dark:bg-[var(--color-bg-dark)] py-12 border-t border-[var(--color-border-default)] dark:border-[var(--color-border-dark)] mt-auto">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="#home" className="text-2xl font-bold tracking-tighter">
            <span className="text-gradient-gold">AV</span>
          </Link>
          <p className="text-sm text-[var(--color-text-muted)] text-center md:text-left">
            &copy; {currentYear} Aleena Varghese. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-xs text-[var(--color-text-muted)] italic">
            &quot;Every setback became a lesson. Every lesson became progress.&quot;
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/aleenavarghese29"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[var(--color-bg-linen)] dark:hover:bg-[var(--color-border-dark)] text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/aleena-varghese2904"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[var(--color-bg-linen)] dark:hover:bg-[var(--color-border-dark)] text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aleenaannvarghese29@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[var(--color-bg-linen)] dark:hover:bg-[var(--color-border-dark)] text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
