import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aleena Varghese | AI Engineer & Developer",
  description: "Portfolio of Aleena Varghese, AI Engineer specializing in Generative AI, RAG, LLMs, Computer Vision, and Full-Stack Development.",
  keywords: ["AI Engineer", "Machine Learning", "Generative AI", "RAG", "LLMs", "FastAPI", "Next.js", "Python", "Data Scientist", "Aleena Varghese", "Portfolio"],
  authors: [{ name: "Aleena Varghese" }],
  creator: "Aleena Varghese",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aleenavarghese.vercel.app", // Placeholder, will update on deployment
    title: "Aleena Varghese | AI Engineer & Developer",
    description: "Portfolio of Aleena Varghese, AI Engineer specializing in Generative AI, RAG, LLMs, and Full-Stack Development.",
    siteName: "Aleena Varghese Portfolio",
    images: [
      {
        url: "/projects/diagnostic_assistant.jpg", // Using one of the beautiful project images as OG image
        width: 1200,
        height: 630,
        alt: "Aleena Varghese Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aleena Varghese | AI Engineer & Developer",
    description: "Portfolio of Aleena Varghese, AI Engineer specializing in Generative AI, RAG, LLMs, and Full-Stack Development.",
    images: ["/projects/diagnostic_assistant.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakartaSans.variable} scroll-smooth antialiased h-full`}
    >
      <body className="min-h-full flex flex-col transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 flex flex-col pt-24">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
