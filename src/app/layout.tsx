import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TaskFlow | AI Task Manager",
    template: "%s | TaskFlow", 
  },
  description: "AI-powered task management solution for modern teams. Boost productivity with intelligent task organization.",
  keywords: ["task management", "AI", "productivity", "team collaboration"],
  authors: [{ name: "Pratham Gambhir" }],
  creator: "Pratham Gambhir",
  publisher: "Pratham Gambhir",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://taskflowwai.vercel.app",
    siteName: "TaskFlow",
    title: "TaskFlow | AI Task Manager",
    description: "AI-powered task management solution for modern teams",
    images: [
      {
        url: "/logosaas.png",
        width: 1200,
        height: 630,
        alt: "TaskFlow Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TaskFlow | AI Task Manager",
    description: "AI-powered task management solution for modern teams",
    images: ["/logosaas.png"],
    creator: "Pratham Gambhir",
  },
  icons: {
    icon: "/logosaas.png",
    shortcut: "/logosaas.png",
    apple: "/logosaas.png",
  },
  manifest: "/site.webmanifest",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
