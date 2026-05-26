"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Layers3,
  ArrowUpRight,
} from "lucide-react";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiPython,
  SiOpenjdk,
  SiC,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiFirebase,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Frontend Development",
    filter: "Frontend",
    color: "from-cyan-500 via-blue-500 to-indigo-600",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend Development",
    filter: "Backend",
    color: "from-emerald-500 via-green-500 to-teal-600",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: Layers3 },
      { name: "Django", icon: SiDjango },
    ],
  },
  {
    title: "Database",
    filter: "Database",
    color: "from-violet-500 via-purple-500 to-fuchsia-600",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB Compass", icon: SiMongodb },
    ],
  },
  {
    title: "Programming Languages",
    filter: "Languages",
    color: "from-orange-500 via-red-500 to-pink-600",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "Java", icon: SiOpenjdk },
      { name: "C", icon: SiC },
    ],
  },
  {
    title: "Tools & Platforms",
    filter: "Tools",
    color: "from-pink-500 via-rose-500 to-red-600",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: VscVscode },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
];

const filters = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Languages",
  "Tools",
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCategories = useMemo(() => {
    if (activeFilter === "All") {
      return skillCategories;
    }

    return skillCategories.filter(
      (category) => category.filter === activeFilter
    );
  }, [activeFilter]);

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32"
    >
      {/* Background */}
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
            Skills & Technologies
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Technologies and tools I use to build modern, scalable, and
            high-performance web applications.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  transition: { duration: 0.2 },
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
              >
                {/* Glow Effect */}
                <div
                  className={`absolute -inset-px rounded-3xl bg-gradient-to-r ${category.color} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`}
                />

                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <div className="relative z-10">
                  {/* Category Title */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">
                      {category.title}
                    </h3>

                    <ArrowUpRight className="h-5 w-5 text-slate-500 transition-colors duration-300 group-hover:text-cyan-400" />
                  </div>

                  {/* Skills List */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon;

                      return (
                        <span
                          key={skill.name}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                        >
                          <SkillIcon className="h-4 w-4" />
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>

                  {/* Bottom Gradient Line */}
                  <div
                    className={`mt-8 h-1 w-20 rounded-full bg-gradient-to-r ${category.color} transition-all duration-300 group-hover:w-40`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}