"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase, Send, Loader2, AlertCircle, Globe } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const FloatingLabelInput = ({ id, label, type = "text", value, onChange, error }: { id: string, label: string, type?: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, error?: string }) => (
  <div className="relative mb-6">
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className={`peer w-full h-14 bg-transparent border-b-2 ${error ? "border-[var(--color-error)]" : "border-[var(--color-border-default)] dark:border-[var(--color-border-dark)] focus:border-[var(--color-accent-primary)] dark:focus:border-[var(--color-accent-primary)]"} text-[var(--color-text-heading)] dark:text-white placeholder-transparent focus:outline-none transition-colors duration-300`}
      placeholder={label}
      suppressHydrationWarning
    />
    <label
      htmlFor={id}
      className={`absolute left-0 -top-3.5 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm font-medium ${error ? "text-[var(--color-error)]" : "text-[var(--color-text-muted)] peer-focus:text-[var(--color-accent-primary)]"}`}
    >
      {label}
    </label>
    {error && (
      <span className="absolute -bottom-5 left-0 text-xs text-[var(--color-error)] flex items-center gap-1">
        <AlertCircle className="w-3 h-3" /> {error}
      </span>
    )}
  </div>
);

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          ...formData,
          // Web3Forms specific
          subject: `Portfolio Contact: ${formData.subject}`,
          from_name: formData.name,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error(error);
      setSubmitError("Failed to send message. Please try again later.");
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[var(--color-bg-linen)] dark:bg-[#1A1917] relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent-primary)] mb-2">Get In Touch</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-[var(--color-text-heading)] dark:text-white mb-6">
            Let&apos;s Build Something Together
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 bg-[var(--color-card-light)] dark:bg-[var(--color-card-dark)] rounded-3xl p-8 md:p-10 border border-[var(--color-border-default)] dark:border-[var(--color-border-dark)] shadow-soft h-full flex flex-col justify-between"
          >
            <div>
              <h4 className="text-2xl font-bold text-[var(--color-text-heading)] dark:text-white mb-8">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[var(--color-bg-linen)] dark:bg-[var(--color-bg-dark)] text-[var(--color-accent-primary)]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-text-muted)] mb-1">Email</p>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aleenaannvarghese29@gmail.com" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[var(--color-primary-charcoal)] dark:text-white hover:text-[var(--color-accent-primary)] transition-colors">
                      aleenaannvarghese29@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[var(--color-bg-linen)] dark:bg-[var(--color-bg-dark)] text-[var(--color-accent-primary)]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-text-muted)] mb-1">Location</p>
                    <p className="text-lg font-semibold text-[var(--color-primary-charcoal)] dark:text-white">
                      Kerala, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[var(--color-bg-linen)] dark:bg-[var(--color-bg-dark)] text-[var(--color-accent-primary)]">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-text-muted)] mb-1">Open To</p>
                    <div className="space-y-1">
                      <p className="text-md font-semibold text-[var(--color-primary-charcoal)] dark:text-white">AI Engineer</p>
                      <p className="text-md font-semibold text-[var(--color-primary-charcoal)] dark:text-white">Machine Learning Engineer</p>
                      <p className="text-md font-semibold text-[var(--color-primary-charcoal)] dark:text-white">Data Scientist</p>
                      <p className="text-md font-semibold text-[var(--color-primary-charcoal)] dark:text-white">Full-Stack Developer</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[var(--color-bg-linen)] dark:bg-[var(--color-bg-dark)] text-[var(--color-accent-primary)]">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-text-muted)] mb-1">Preferred Locations</p>
                    <p className="text-md font-semibold text-[var(--color-primary-charcoal)] dark:text-white leading-relaxed">
                      Kochi, Thiruvananthapuram, Bangalore, Chennai, Hyderabad, Remote
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-[var(--color-border-default)] dark:border-[var(--color-border-dark)] flex items-center gap-4">
              <a href="https://github.com/aleenavarghese29" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[var(--color-bg-linen)] dark:bg-[#1A1917] hover:bg-[var(--color-accent-primary)] text-[var(--color-text-heading)] dark:text-white hover:text-white transition-colors shadow-sm">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/aleena-varghese2904" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[var(--color-bg-linen)] dark:bg-[#1A1917] hover:bg-[var(--color-accent-primary)] text-[var(--color-text-heading)] dark:text-white hover:text-white transition-colors shadow-sm">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aleenaannvarghese29@gmail.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[var(--color-bg-linen)] dark:bg-[#1A1917] hover:bg-[var(--color-accent-primary)] text-[var(--color-text-heading)] dark:text-white hover:text-white transition-colors shadow-sm">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 bg-[var(--color-bg-ivory)] dark:bg-[var(--color-bg-dark)] rounded-3xl p-8 md:p-10 shadow-medium border border-[var(--color-border-default)] dark:border-[var(--color-border-dark)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent-primary)]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
              {/* Web3Forms Honeypot */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                <FloatingLabelInput id="name" label="Full Name" value={formData.name} onChange={handleChange} error={errors.name} />
                <FloatingLabelInput id="email" label="Email Address" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
              </div>
              
              <div className="pt-2">
                <FloatingLabelInput id="subject" label="Subject" value={formData.subject} onChange={handleChange} error={errors.subject} />
              </div>
              
              <div className="relative mb-8 pt-2">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`peer w-full min-h-[150px] bg-transparent border-b-2 ${errors.message ? "border-[var(--color-error)]" : "border-[var(--color-border-default)] dark:border-[var(--color-border-dark)] focus:border-[var(--color-accent-primary)] dark:focus:border-[var(--color-accent-primary)]"} text-[var(--color-text-heading)] dark:text-white placeholder-transparent focus:outline-none transition-colors duration-300 resize-y pt-4`}
                  placeholder="Message"
                  suppressHydrationWarning
                />
                <label
                  htmlFor="message"
                  className={`absolute left-0 -top-2 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-sm font-medium ${errors.message ? "text-[var(--color-error)]" : "text-[var(--color-text-muted)] peer-focus:text-[var(--color-accent-primary)]"}`}
                >
                  Message
                </label>
                {errors.message && (
                  <span className="absolute -bottom-5 left-0 text-xs text-[var(--color-error)] flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </span>
                )}
              </div>

              {submitError && (
                <div className="p-4 bg-[var(--color-error)]/10 border border-[var(--color-error)] rounded-xl text-[var(--color-error)] text-sm flex items-start gap-3 mb-6">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Submission Failed</p>
                    <p>{submitError}</p>
                  </div>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto mt-4 px-8 py-6 text-lg rounded-xl flex items-center justify-center gap-2 disabled:opacity-70 group"
                suppressHydrationWarning
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
