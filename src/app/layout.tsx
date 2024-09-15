import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import React from "react";
import "./globals.css";

import { API_ROOT } from "@/constants";

export async function generateMetadata() {
  const response = await fetch(`${API_ROOT}me/cv/resume.json`);
  const data: Profile = await response.json();

  return {
    title: `${data.name} | ${data.about}`,
    description: data.summary,
    keywords: ["cv", "resume", "tcdtist", "fullstack"],
    openGraph: {
      images: data.avatarUrl,
      description: data.summary,
    },
  };
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
