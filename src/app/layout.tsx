import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "LegalOS — The Floating Hero Section for Law Firms",
  description: "Replicating the Legal Work Platform hero section. A modern workspace for legal practice management including matters, documents, billing, and tasks.",
  keywords: ["legal technology", "practice management", "law firm software", "next.js landing page", "floating hero section"],
  openGraph: {
    title: "LegalOS — The Floating Hero Section",
    description: "Manage matters, documents, billing, and tasks in a modern, unified, and highly interactive floating interface.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} h-full antialiased`} style={{ colorScheme: "light dark" }}>
      <body className="min-h-full flex flex-col transition-colors duration-300">
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

