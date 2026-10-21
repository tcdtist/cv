import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import React from "react";
import "./globals.css";

import { API_ROOT } from "@/constants";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  try {
    const response = await fetch(`${API_ROOT}me/cv/resume.json`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data: Profile = await response.json();

    return {
      title: `${data.name} | ${data.about}`,
      description: data.summary,
      keywords: ["cv", "resume", "tcdtist", "fullstack", "ai-engineer"],
      openGraph: {
        images: data.avatarUrl,
        description: data.summary,
      },
    };
  } catch (error) {
    return {
      title: "Chi Thanh Dang | Lead Software Engineer & AI Engineer",
      description: "Full Stack & AI Engineer with 5+ years of experience.",
      keywords: ["cv", "resume", "tcdtist", "fullstack", "ai-engineer"],
    };
  }
}

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
