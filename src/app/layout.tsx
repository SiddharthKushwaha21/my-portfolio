import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siddharth Kushwaha | Full Stack Web Developer",
  description:
    "Professional portfolio of Siddharth Kushwaha, Full Stack Web Developer specializing in Next.js, React, Node.js, Express.js, MongoDB, and modern web technologies.",

  keywords: [
    "Siddharth Kushwaha",
    "Full Stack Web Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Portfolio",
  ],

  authors: [
    {
      name: "Siddharth Kushwaha",
    },
  ],

  creator: "Siddharth Kushwaha",
  publisher: "Siddharth Kushwaha",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "Siddharth Kushwaha | Full Stack Web Developer",
    description:
      "Professional portfolio of Siddharth Kushwaha, Full Stack Web Developer.",
    url: "https://your-portfolio.vercel.app",
    siteName: "Siddharth Kushwaha Portfolio",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Siddharth Kushwaha Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Siddharth Kushwaha | Full Stack Web Developer",
    description:
      "Professional portfolio of Siddharth Kushwaha, Full Stack Web Developer.",
    images: ["/icon.png"],
  },

  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-white">
        {children}
      </body>
    </html>
  );
}