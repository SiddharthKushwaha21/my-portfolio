"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Code2,
  Rocket,
  Lightbulb,
  Target,
  ArrowUpRight,
  Star,
  Zap,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable, and efficient code with modern development best practices.",
    color: "from-cyan-400 to-blue-500",
    glow: "md:group-hover:shadow-cyan-500/20",
  },
  {
    icon: Rocket,
    title: "Performance Focused",
    description:
      "Building lightning-fast, optimized, and responsive web applications.",
    color: "from-blue-400 to-indigo-500",
    glow: "md:group-hover:shadow-blue-500/20",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Always exploring new technologies, frameworks, and development tools.",
    color: "from-violet-400 to-purple-500",
    glow: "md:group-hover:shadow-violet-500/20",
  },
  {
    icon: Target,
    title: "Career Driven",
    description:
      "Focused on growth and contributing to impactful software projects.",
    color: "from-pink-400 to-rose-500",
    glow: "md:group-hover:shadow-pink-500/20",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function About() {
  const isMobile =
    typeof window !== "undefined" &&
    window.innerWidth < 768;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-xl md:h-96 md:w-96 md:blur-3xl" />

        <div className="absolute right-20 top-40 h-72 w-72 rounded-full bg-blue-500/10 blur-xl md:h-96 md:w-96 md:blur-3xl" />

        <div className="absolute bottom-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-xl md:h-96 md:w-96 md:blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-0 md:backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            About Me
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Crafting Modern and Scalable
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Web Experiences
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            A passionate Full Stack Developer focused on
            creating beautiful, high-performance, and
            user-friendly web applications.
          </p>
        </motion.div>

        {/* Main Glass Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-lg shadow-black/20 backdrop-blur-0 md:shadow-2xl md:shadow-black/30 md:backdrop-blur-xl sm:p-12"
        >
          {/* Decorative Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-cyan-500/[0.02]" />

          <div className="relative z-10 grid gap-16 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="text-2xl font-bold leading-tight text-white sm:text-3xl"
              >
                Building Digital Solutions with Purpose
              </motion.h3>

              <div className="mt-6 space-y-6 text-base leading-9 text-slate-400">
                <p>
                  I am Siddharth Kushwaha, an MCA student and
                  passionate Full Stack Web Developer with a
                  strong interest in designing and developing
                  modern, responsive, and user-friendly web
                  applications.
                </p>

                <p>
                  I enjoy transforming ideas into real-world
                  digital solutions that are clean, efficient,
                  scalable, and visually engaging. My focus is
                  on creating applications that not only look
                  attractive but also provide excellent
                  performance and a seamless user experience.
                </p>

                <p>
                  I am currently seeking internship and
                  full-time opportunities where I can apply my
                  skills, contribute to meaningful projects,
                  and grow as a software developer.
                </p>
              </div>
            </div>

            {/* Right Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2"
            >
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={cardVariants}
                    whileHover={
                      !isMobile
                        ? {
                            y: -8,
                            scale: 1.02,
                          }
                        : {}
                    }
                    transition={{ duration: 0.3 }}
                    className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-6 shadow-lg shadow-black/10 backdrop-blur-0 md:shadow-2xl md:shadow-black/20 md:backdrop-blur-lg ${item.glow}`}
                  >
                    {/* Hover Glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 blur-xl transition-opacity duration-500 md:blur-2xl md:group-hover:opacity-10`}
                    />

                    {/* Top Highlight */}
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />

                    {/* Floating Background Icon */}
                    <div className="absolute right-4 top-4 opacity-5">
                      <Star className="h-16 w-16 text-white md:h-20 md:w-20" />
                    </div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <div
                        className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} p-[1px]`}
                      >
                        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-950/90">
                          <Icon className="h-6 w-6 text-cyan-300 transition-transform duration-300 md:group-hover:scale-110 md:group-hover:rotate-6" />
                        </div>
                      </div>

                      {/* Title */}
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-xl font-bold text-white transition-colors duration-300 md:group-hover:text-cyan-300">
                          {item.title}
                        </h4>

                        <ArrowUpRight className="h-5 w-5 text-slate-500 opacity-0 transition-all duration-300 md:group-hover:translate-x-1 md:group-hover:-translate-y-1 md:group-hover:opacity-100 md:group-hover:text-cyan-400" />
                      </div>

                      {/* Description */}
                      <p className="mt-3 text-sm leading-7 text-slate-400 transition-colors duration-300 md:group-hover:text-slate-300">
                        {item.description}
                      </p>

                      {/* Bottom Accent */}
                      <div className="mt-6 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-cyan-400 opacity-0 transition-opacity duration-300 md:group-hover:opacity-100" />

                        <div
                          className={`h-[2px] w-0 bg-gradient-to-r ${item.color} transition-all duration-500 md:group-hover:w-full`}
                        />
                      </div>
                    </div>

                    {/* Animated Border */}
                    <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-transparent bg-gradient-to-r from-cyan-500/0 via-cyan-400/20 to-violet-500/0 opacity-0 transition-opacity duration-500 md:group-hover:opacity-100" />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
