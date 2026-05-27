"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Award,
  ExternalLink,
  Calendar,
  Building2,
  FileText,
  BadgeCheck,
  Stars,
  Fingerprint,
} from "lucide-react";

const certifications = [
  {
    title: "Data Science Training",
    organization: "Internshala",
    duration: "8 Weeks",
    completionDate: "February 2026",
    certificateId: "1q8y9cioqeq",
    type: "Online Training",
    description:
      "Completed hands-on Data Science training covering Python, data analysis, data visualization, and real-world problem-solving techniques using industry-standard tools.",

    skills: ["Python", "Pandas", "NumPy", "Data Analysis"],

    certificateFile:
      "/certificates/internshala-certificate.pdf",

    buttonText: "View Certificate",

    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
  },

  {
    title: "Advanced Python Programming Training",
    organization: "Ritusha Consultants Pvt. Ltd.",
    duration: "1 Month",
    completionDate: "January 2026",
    certificateId: "RCPL-2024/7124",
    type: "Advanced Training",

    description:
      "Learned advanced Python programming concepts including object-oriented programming, modules, file handling, and application development with practical implementation.",

    skills: [
      "Advanced Python",
      "Modules",
      "OOP",
      "Application Development",
    ],

    certificateFile:
      "/certificates/advanced-python-certificate.pdf",

    buttonText: "View Certificate",

    gradient: "from-violet-500 via-purple-500 to-fuchsia-600",
  },

  {
    title: "Python Programming Training",
    organization: "Ritusha Consultants Pvt. Ltd.",
    duration: "1 Month",
    completionDate: "December 2025",
    certificateId: "RCPL-2023/5761",
    type: "Professional Training",

    description:
      "Completed practical Python training focused on programming fundamentals, functions, object-oriented concepts, and logical problem-solving skills.",

    skills: [
      "Python",
      "Functions",
      "OOP",
      "Problem Solving",
    ],

    certificateFile:
      "/certificates/python-training-certificate.pdf",

    buttonText: "View Certificate",

    gradient: "from-emerald-500 via-green-500 to-teal-600",
  },
];

export default function Certifications() {
  const isMobile =
    typeof window !== "undefined" &&
    window.innerWidth < 768;

  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-xl md:h-96 md:w-96 md:blur-3xl" />

        <div className="absolute right-20 top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-xl md:h-96 md:w-96 md:blur-3xl" />

        <div className="absolute bottom-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-xl md:h-96 md:w-96 md:blur-3xl" />

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
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-0 md:backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            Certifications & Training
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Professional{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Certifications that validate my{" "}
            <span className="font-semibold text-cyan-300">
              technical expertise
            </span>{" "}
            and strengthen my practical development,
            programming, and problem-solving skills.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              whileHover={
                !isMobile
                  ? {
                      y: -6,
                      scale: 1.01,
                    }
                  : {}
              }
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-lg shadow-black/20 backdrop-blur-0 md:shadow-[0_20px_80px_rgba(0,0,0,0.45)] md:backdrop-blur-xl"
            >
              {/* Gradient Glow */}
              <div
                className={`absolute -inset-px rounded-3xl bg-gradient-to-r ${item.gradient} opacity-0 blur-lg transition duration-500 md:blur-xl md:group-hover:opacity-20`}
              />

              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 md:group-hover:translate-x-full" />

              {/* Decorative Icon */}
              <Stars className="absolute right-6 top-6 h-5 w-5 text-cyan-400/20 transition duration-300 md:group-hover:rotate-180 md:group-hover:text-cyan-300/50" />

              <div className="relative z-10">
                {/* Top Section */}
                <div className="flex items-start justify-between gap-4">
                  {/* Main Icon */}
                  <motion.div
                    whileHover={
                      !isMobile
                        ? {
                            scale: 1.05,
                            rotate: 3,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.3,
                    }}
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.gradient} shadow-lg md:shadow-2xl`}
                  >
                    <Award className="h-8 w-8 text-white" />
                  </motion.div>
                </div>

                {/* Badge */}
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-300">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  {item.type}
                </div>

                {/* Title */}
                <h3 className="mt-5 text-2xl font-bold leading-tight text-white">
                  {item.title}
                </h3>

                {/* Organization */}
                <div className="mt-4 flex items-center gap-2 text-cyan-300">
                  <Building2 className="h-4 w-4" />

                  <span className="font-medium">
                    {item.organization}
                  </span>
                </div>

                {/* Completion Date */}
                <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                  <Calendar className="h-4 w-4" />

                  <span>
                    {item.completionDate} • {item.duration}
                  </span>
                </div>

                {/* Certificate ID */}
                <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                  <Fingerprint className="h-4 w-4" />

                  <span>{item.certificateId}</span>
                </div>

                {/* Description */}
                <p className="mt-5 leading-7 text-slate-400">
                  {item.description}
                </p>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="cursor-default rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition-all duration-300 md:hover:scale-105 md:hover:border-cyan-400/40 md:hover:bg-cyan-400/10 md:hover:text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <motion.a
                  href={item.certificateFile}
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
                        x: ["-120%", "220%"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                    />
                  )}

                  {/* Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 blur-xl transition duration-300 md:blur-2xl md:group-hover/button:opacity-100" />

                  {/* Icon */}
                  <motion.div
                    whileHover={
                      !isMobile
                        ? {
                            rotate: 8,
                            scale: 1.05,
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

                  {/* Arrow */}
                  {!isMobile ? (
                    <motion.div
                      animate={{
                        x: [0, 3, 0],
                      }}
                      transition={{
                        duration: 1.8,
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
          ))}
        </div>
      </div>
    </section>
  );
}
