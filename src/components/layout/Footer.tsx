"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Mail,
  ExternalLink,
  Heart,
  Sparkles,
  ArrowUpRight,
  Briefcase,
  ShieldCheck,
  Rocket,
  Code2,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/SiddharthKushwaha21",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/siddharth311",
    icon: FaLinkedin,
  },
  {
    name: "Gmail",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sid.kushwaha04@gmail.com",
    icon: Mail,
  },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-transparent bg-[#020617]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[160px]" />

        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-300 backdrop-blur-xl sm:px-5 sm:text-sm">
            <Sparkles className="h-4 w-4 animate-pulse" />
            Modern Full Stack Developer
          </div>

          <h2 className="mt-8 text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Let&apos;s Build Something
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              {" "}
              Amazing
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base md:text-lg">
            Passionate about building modern, high-performance, and visually
            stunning web applications with cutting-edge technologies.
          </p>
        </motion.div>

        {/* Main Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 lg:grid-cols-12 lg:gap-10"
        >
          {/* Left Card */}
          <motion.div
            variants={item}
            className="lg:col-span-5"
          >
            <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-500 shadow-[0_0_40px_rgba(6,182,212,0.4)] sm:h-16 sm:w-16">
                    <Code2 className="h-7 w-7 text-white sm:h-8 sm:w-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                      Siddharth Kushwaha
                    </h3>

                    <p className="mt-1 text-sm text-cyan-300">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-7 text-slate-400 sm:text-base">
                  Specialized in building futuristic, responsive, and
                  performance-driven web applications using Next.js, React,
                  Node.js, Express.js, MongoDB, and modern frontend
                  technologies.
                </p>

                {/* Social */}
                <div className="mt-8 flex flex-wrap gap-4 sm:mt-10">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;

                    return (
                      <motion.div
                        key={social.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Link
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-slate-300 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:text-cyan-300 hover:shadow-[0_0_35px_rgba(6,182,212,0.35)] sm:h-14 sm:w-14"
                        >
                          <Icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            variants={item}
            className="lg:col-span-3"
          >
            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl sm:p-8">
              <div className="flex items-center gap-3">
                <Rocket className="h-5 w-5 text-cyan-400" />

                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-white sm:text-sm">
                  Quick Links
                </h3>
              </div>

              <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-5">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-sm text-slate-400 transition-all duration-300 hover:border-cyan-500/20 hover:bg-cyan-500/5 hover:text-cyan-300 sm:text-base"
                    >
                      <span>{link.name}</span>

                      <ArrowUpRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            variants={item}
            className="lg:col-span-4"
          >
            <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/[0.04] to-violet-500/10 p-5 backdrop-blur-2xl sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-[0_0_45px_rgba(6,182,212,0.45)] sm:h-16 sm:w-16">
                  <Briefcase className="h-6 w-6 text-white sm:h-7 sm:w-7" />
                </div>

                <div className="mt-6 flex items-center gap-3 sm:mt-8">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-green-400" />

                  <span className="text-xs font-semibold tracking-wider text-green-300 sm:text-sm">
                    AVAILABLE FOR WORK
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-bold leading-tight text-white sm:mt-5 sm:text-3xl">
                  Open for Opportunities
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base">
                  Looking for internships, freelance projects, and full-time
                  opportunities in Full Stack Web Development.
                </p>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-cyan-400" />

                      <span className="text-sm text-slate-400">
                        Expertise
                      </span>
                    </div>

                    <p className="mt-2 text-base font-bold leading-7 text-white sm:text-lg">
                      Modern Web Development
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-violet-400" />

                      <span className="text-sm text-slate-400">
                        UI Design
                      </span>
                    </div>

                    <p className="mt-2 text-base font-bold leading-7 text-white sm:text-lg">
                      Responsive UI Design
                    </p>
                  </div>
                </div>

                <Link
                  href="#contact"
                  className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-4 text-sm font-semibold text-white shadow-[0_0_35px_rgba(6,182,212,0.35)] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(6,182,212,0.55)] sm:mt-10 sm:w-auto sm:text-base"
                >
                  Let&apos;s Connect

                  <ExternalLink className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent sm:mt-20" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left"
        >
          <p className="text-sm text-slate-500">
            © {year} Siddharth Kushwaha. All rights reserved.
          </p>

          <div className="flex flex-col items-center gap-4 text-center text-sm text-slate-400 sm:flex-row sm:flex-wrap">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-300"
            >
              Available for Hire

              <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <span>Made with</span>

              <Heart className="h-4 w-4 animate-pulse fill-red-500 text-red-500" />

              <span>using</span>

              <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text font-semibold text-transparent">
                Next.js & Tailwind CSS
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
