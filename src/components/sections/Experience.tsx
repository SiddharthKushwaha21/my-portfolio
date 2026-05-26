"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Calendar,
  Briefcase,
  GraduationCap,
  ArrowUpRight,
  Building2,
  ExternalLink,
  FileText,
} from "lucide-react";

const experiences = [
  {
    title: "Web Development Intern",
    organization: "SkillCraft Technology",
    duration: "Feb 2026 – Mar 2026",
    type: "Virtual Internship",
    description:
      "Worked on website development and frontend design while learning real industry workflow and project development.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Frontend Development",
    ],
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    icon: Briefcase,
    certificateFile: "/certificates/skillcraft-certificate.pdf",
    buttonText: "View Internship Certificate",
  },
  {
    title: "Python Programming Intern",
    organization: "CodSoft",
    duration: "Oct 2023",
    type: "Virtual Internship",
    description:
      "Learned Python basics, logic building, and developed small Python programs and problem-solving tasks.",
    skills: ["Python", "OOP", "Logic Building", "File Handling"],
    gradient: "from-emerald-500 via-green-500 to-teal-600",
    icon: Briefcase,
    certificateFile: "/certificates/codsoft-certificate.pdf",
    buttonText: "View Internship Certificate",
  },
  // {
  //   title: "Data Science Training",
  //   organization: "Internshala",
  //   duration: "8 Weeks",
  //   type: "Online Training",
  //   description:
  //     "Learned data handling, analysis, and fundamental concepts of Data Science.",
  //   skills: ["Python", "Pandas", "NumPy", "Data Analysis"],
  //   gradient: "from-violet-500 via-purple-500 to-pink-600",
  //   icon: GraduationCap,
  //   certificateFile: "/certificates/internshala-certificate.pdf",
  //   buttonText: "View Training Certificate",
  // },
  // {
  //   title: "Advanced Python Programming Training",
  //   organization: "Ritusha Consultants Pvt. Ltd.",
  //   duration: "1 Month",
  //   type: "Advanced Training",
  //   description:
  //     "Learned advanced Python concepts and application development techniques.",
  //   skills: [
  //     "Advanced Python",
  //     "Modules",
  //     "OOP",
  //     "Application Development",
  //   ],
  //   gradient: "from-pink-500 via-rose-500 to-red-600",
  //   icon: GraduationCap,
  //   certificateFile: "/certificates/advanced-python-certificate.pdf",
  //   buttonText: "View Training Certificate",
  // },
  // {
  //   title: "Python Programming Training",
  //   organization: "Ritusha Consultants Pvt. Ltd.",
  //   duration: "1 Month",
  //   type: "College Training",
  //   description:
  //     "Completed training focused on Python fundamentals and practical programming concepts.",
  //   skills: ["Python", "Functions", "OOP", "Problem Solving"],
  //   gradient: "from-orange-500 via-red-500 to-pink-600",
  //   icon: GraduationCap,
  //   certificateFile: "/certificates/python-training-certificate.pdf",
  //   buttonText: "View Training Certificate",
  // },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-20 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-20 top-20 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Internships
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Internships and training programs that helped me build strong
            technical knowledge and practical development skills.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-start sm:items-center ${
                    isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Icon */}
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-6 z-20 -translate-x-1/2 sm:left-1/2"
                  >
                    <div className="relative">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 rounded-3xl bg-cyan-400/30 blur-2xl" />

                      {/* Main Gradient Box */}
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500 shadow-[0_0_35px_rgba(59,130,246,0.45)] ring-1 ring-white/10">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -8, scale: 1.015 }}
                    className="ml-16 w-full sm:ml-0 sm:w-[calc(50%-3.5rem)]"
                  >
                    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
                      {/* Glow */}
                      <div
                        className={`absolute -inset-px rounded-3xl bg-gradient-to-r ${item.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20`}
                      />

                      {/* Shine */}
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                      <div className="relative z-10">
                        {/* Type Badge */}
                        <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                          {item.type}
                        </div>

                        {/* Title */}
                        <div className="mt-4 flex items-start justify-between gap-4">
                          <h3 className="text-2xl font-bold text-white">
                            {item.title}
                          </h3>

                          <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-slate-500 transition-colors duration-300 group-hover:text-cyan-400" />
                        </div>

                        {/* Organization */}
                        <div className="mt-3 flex items-center gap-2 text-cyan-300">
                          <Building2 className="h-4 w-4" />
                          <span className="font-medium">
                            {item.organization}
                          </span>
                        </div>

                        {/* Duration */}
                        <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                          <Calendar className="h-4 w-4" />
                          {item.duration}
                        </div>

                        {/* Description */}
                        <p className="mt-4 leading-7 text-slate-400">
                          {item.description}
                        </p>

                        {/* Skills */}
                        <div className="mt-6 flex flex-wrap gap-2">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="cursor-default rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition-all duration-300 hover:scale-105 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Certificate Button */}
                        <motion.a
                          href={item.certificateFile}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{
                            scale: 1.04,
                            y: -4,
                            boxShadow:
                              "0px 15px 35px rgba(255,255,255,0.15)",
                          }}
                          whileTap={{
                            scale: 0.96,
                          }}
                          className={`group/button relative mt-8 inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r ${item.gradient} px-7 py-4 font-semibold text-white shadow-2xl`}
                        >
                          {/* Animated Shine */}
                          <motion.div
                            animate={{
                              x: ["-120%", "220%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          />

                          {/* Glow */}
                          <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 blur-2xl transition duration-500 group-hover/button:opacity-100" />

                          {/* Floating Particle */}
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

                          {/* Icon */}
                          <motion.div
                            whileHover={{
                              rotate: 15,
                              scale: 1.2,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
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
                          <motion.div
                            animate={{
                              x: [0, 5, 0],
                            }}
                            transition={{
                              duration: 1.2,
                              repeat: Infinity,
                            }}
                            className="relative z-10"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </motion.div>
                        </motion.a>

                        {/* Bottom Gradient Line */}
                        <div
                          className={`mt-8 h-1 w-20 rounded-full bg-gradient-to-r ${item.gradient} transition-all duration-500 group-hover:w-40`}
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}