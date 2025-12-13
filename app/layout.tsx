import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.title}`,
  description: `Portfolio of ${siteConfig.name}, an ${siteConfig.title} specializing in GenAI, Full-stack development, and Machine Learning.`,
  keywords: ["AI/ML Engineer", "GenAI", "Full Stack Developer", "Portfolio", "Machine Learning", "Django", "FastAPI"],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: `Portfolio of ${siteConfig.name}, an ${siteConfig.title}`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
