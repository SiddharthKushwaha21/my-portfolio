"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Sparkles,
  Trophy,
  BookOpen,
  Stars,
  BadgeCheck,
  ExternalLink,
  FileText,
} from "lucide-react";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution:
      "Chhatrapati Shahu Ji Maharaj University (CSJMU)",
    duration: "2024 - 2026",
    location:
      "Kanpur Nagar, Uttar Pradesh, India",
    description:
      "Currently pursuing MCA with a strong focus on Full Stack Web Development, Software Engineering, Database Management, and Modern Web Technologies.",
    status: "Pursuing",
    icon: Trophy,
    gradient:
      "from-cyan-500 via-blue-500 to-indigo-600",
    badgeColor:
      "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
    buttonText:
      "Final Semester Exams Completed • Result Awaited",
  },

  {
    degree:
      "Bachelor of Computer Applications (BCA)",
    institution:
      "Jagran College Of Arts, Science And Commerce",
    duration: "2021 - 2024",
    location:
      "Kanpur Nagar, Uttar Pradesh, India",
    description:
      "Built a strong foundation in Programming, Data Structures, Databases, Mathematics, and Core Computer Science fundamentals.",
    status: "Completed",
    icon: BookOpen,
    gradient:
      "from-violet-500 via-purple-500 to-fuchsia-600",
    badgeColor:
      "border-violet-400/20 bg-violet-400/10 text-violet-300",
    degreeFile: "/degrees/bca-degree.pdf",
    buttonText: "View BCA Degree",
  },

  {
    degree: "Senior Secondary (12th)",
    institution:
      "Ch. Vishambhar Singh Bhartiya Vidyalaya Inter College",
    duration: "2019 - 2020",
    location:
      "Auraiya, Uttar Pradesh, India",
    description:
      "Completed Senior Secondary Education (PCM) with 72%, building strong analytical and problem-solving skills.",
    status: "Completed",
    icon: Stars,
    gradient:
      "from-emerald-500 via-teal-500 to-cyan-600",
    badgeColor:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
    degreeFile:
      "/degrees/12th-marksheet.pdf",
    buttonText: "View 12th Marksheet",
  },

  {
    degree: "High School (10th)",
    institution:
      "Ch. Vishambhar Singh Bhartiya Balika Inter College",
    duration: "2017 - 2018",
    location:
      "Auraiya, Uttar Pradesh, India",
    description:
      "Completed High School Education with 69%, developing a strong academic foundation and learning mindset.",
    status: "Completed",
    icon: BadgeCheck,
    gradient:
      "from-orange-500 via-amber-500 to-yellow-500",
    badgeColor:
      "border-orange-400/20 bg-orange-400/10 text-orange-300",
    degreeFile:
      "/degrees/10th-marksheet.pdf",
    buttonText: "View 10th Marksheet",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Education() {
  const isMobile =
    typeof window !== "undefined" &&
    window.innerWidth < 768;

  return (
    <section
      id="education"
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-0 md:backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            Education
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Academic{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            My educational path has built a strong
            foundation in programming, computer science,
            and modern web development technologies.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative mt-24"
        >
          {/* Center Timeline Line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-violet-500 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16">
            {educationData.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.degree}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0
                      ? "md:flex-row-reverse"
                      : ""
                  }`}
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-6 top-10 z-20 flex h-16 w-16 -translate-x-1/2 items-center justify-center md:left-1/2">
                    <motion.div
                      animate={
                        !isMobile
                          ? {
                              boxShadow: [
                                "0 0 0px rgba(6,182,212,0.4)",
                                "0 0 25px rgba(6,182,212,0.5)",
                                "0 0 0px rgba(6,182,212,0.4)",
                              ],
                            }
                          : {}
                      }
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                      whileHover={
                        !isMobile
                          ? {
                              scale: 1.08,
                              rotate: 5,
                            }
                          : {}
                      }
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.gradient} shadow-lg md:shadow-2xl`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className="ml-16 md:ml-0 md:w-1/2 md:px-10">
                    <motion.div
                      whileHover={
                        !isMobile
                          ? {
                              y: -8,
                              scale: 1.01,
                            }
                          : {}
                      }
                      transition={{
                        duration: 0.3,
                      }}
                      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-lg shadow-black/20 backdrop-blur-0 md:shadow-[0_20px_80px_rgba(0,0,0,0.45)] md:backdrop-blur-xl"
                    >
                      {/* Gradient Glow */}
                      <div
                        className={`absolute -inset-px rounded-3xl bg-gradient-to-r ${item.gradient} opacity-0 blur-lg transition duration-500 md:blur-xl md:group-hover:opacity-30`}
                      />

                      {/* Shine Effect */}
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 md:group-hover:translate-x-full" />

                      {/* Decorative Icon */}
                      <Stars className="absolute right-6 top-6 h-5 w-5 text-cyan-400/20 transition duration-300 md:group-hover:rotate-180 md:group-hover:text-cyan-300/50" />

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Status Badge */}
                        <span
                          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${item.badgeColor}`}
                        >
                          <BadgeCheck className="h-3.5 w-3.5" />
                          {item.status}
                        </span>

                        {/* Degree */}
                        <h3 className="mt-5 text-2xl font-bold leading-tight text-white sm:text-3xl">
                          {item.degree}
                        </h3>

                        {/* Institution */}
                        <p className="mt-2 text-lg font-semibold text-cyan-400">
                          {item.institution}
                        </p>

                        {/* Meta Information */}
                        <div className="mt-5 space-y-3 text-sm text-slate-400">
                          <div className="flex items-center gap-3">
                            <Calendar className="h-4 w-4 text-cyan-400" />
                            {item.duration}
                          </div>

                          <div className="flex items-center gap-3">
                            <MapPin className="h-4 w-4 text-violet-400" />
                            {item.location}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="mt-6 leading-8 text-slate-400">
                          {item.description}
                        </p>

                        {/* Degree Button */}
                        <motion.a
                          href={item.degreeFile}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={
                            !isMobile
                              ? {
                                  scale: 1.02,
                                  y: -2,
                                }
                              : {}
                          }
                          whileTap={{
                            scale: 0.98,
                          }}
                          className={`group/button relative mt-8 inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r ${item.gradient} px-7 py-4 font-semibold text-white shadow-lg md:shadow-2xl`}
                        >
                          {/* Animated Shine */}
                          {!isMobile && (
                            <motion.div
                              animate={{
                                x: [
                                  "-120%",
                                  "220%",
                                ],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            />
                          )}

                          {/* Pulse Glow */}
                          <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 blur-xl transition duration-300 md:blur-2xl md:group-hover/button:opacity-100" />

                          {/* Floating Particle */}
                          {!isMobile && (
                            <motion.div
                              animate={{
                                y: [0, -5, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                              className="absolute right-4 top-2 h-2 w-2 rounded-full bg-white/60"
                            />
                          )}

                          {/* Icon */}
                          <motion.div
                            whileHover={
                              !isMobile
                                ? {
                                    rotate: 10,
                                    scale: 1.08,
                                  }
                                : {}
                            }
                            transition={{
                              duration: 0.3,
                            }}
                            className="relative z-10"
                          >
                            <FileText className="h-5 w-5" />
                          </motion.div>

                          {/* Text */}
                          <span className="relative z-10">
                            {item.buttonText}
                          </span>

                          {/* Arrow Animation */}
                          {!isMobile ? (
                            <motion.div
                              animate={{
                                x: [0, 4, 0],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                              }}
                              className="relative z-10"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </motion.div>
                          ) : (
                            <div className="relative z-10">
                              <ExternalLink className="h-5 w-5" />
                            </div>
                          )}
                        </motion.a>

                        {/* Bottom Gradient Line */}
                        <div
                          className={`mt-8 h-1 w-20 rounded-full bg-gradient-to-r ${item.gradient} transition-all duration-500 md:group-hover:w-40`}
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
