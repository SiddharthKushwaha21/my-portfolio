"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Home Helper Hub",
    category: "Python Desktop App",
    description:
      "A desktop-based home service booking application to book electricians, plumbers, and cleaners with MySQL database integration.",
    technologies: ["Python", "Tkinter", "MySQL"],
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    github: "https://github.com/yourusername/home-helper-hub",
    demo: "",
  },
  {
    title: "ShopNest",
    category: "Full Stack E-Commerce",
    description:
      "An online shopping website with product browsing, cart management, and order placement features built using Django and MySQL.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Django",
      "MySQL",
    ],
    gradient: "from-emerald-500 via-green-500 to-teal-600",
    github: "https://github.com/yourusername/shopnest",
    demo: "",
  },
  {
    title: "The Royal Pixel",
    category: "Photography Studio Portfolio",
    description:
      "A modern and fully responsive photography studio portfolio website showcasing wedding, pre-wedding, and event photography projects with elegant gallery sections, smooth animations, and user-friendly design.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "Git",
      "GitHub",
      "Vercel",
    ],
    gradient: "from-violet-500 via-purple-500 to-pink-600",
    github:
      "https://github.com/SiddharthKushwaha21/wedding-studio.git",
    demo: "https://wedding-studio-six.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-20 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-20 top-20 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Featured Projects
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            A collection of projects that showcase my skills in full-stack
            development, desktop applications, and responsive web design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.015,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            >
              {/* Glow */}
              <div
                className={`absolute -inset-px rounded-3xl bg-gradient-to-r ${project.gradient} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`}
              />

              {/* Shine */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <div className="relative z-10 flex h-full flex-col">
                {/* Category Badge */}
                <div className="inline-flex w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                  {project.category}
                </div>

                {/* Title */}
                <div className="mt-4 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-slate-500 transition-colors duration-300 group-hover:text-cyan-400" />
                </div>

                {/* Description */}
                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="cursor-default rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition-all duration-300 hover:scale-105 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                    >
                      <FaGithub className="h-4 w-4" />
                      View Code
                    </Link>
                  )}

                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </Link>
                  )}
                </div>

                {/* Bottom Line */}
                <div
                  className={`mt-8 h-1 w-20 rounded-full bg-gradient-to-r ${project.gradient} transition-all duration-300 group-hover:w-40`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}