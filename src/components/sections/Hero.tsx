"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
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
    name: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sid.kushwaha04@gmail.com",
    icon: Mail,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function Hero() {
  const isMobile =
    typeof window !== "undefined" &&
    window.innerWidth < 768;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 pt-24 sm:pt-28"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Glow 1 */}
        <motion.div
          animate={
            !isMobile
              ? { x: [0, 40, 0], y: [0, -30, 0] }
              : {}
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/4 top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-xl md:h-96 md:w-96 md:blur-3xl"
        />

        {/* Glow 2 */}
        <motion.div
          animate={
            !isMobile
              ? { x: [0, -40, 0], y: [0, 30, 0] }
              : {}
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 right-1/4 h-64 w-64 rounded-full bg-violet-500/10 blur-xl md:h-96 md:w-96 md:blur-3xl"
        />

        {/* Radial Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_80%)]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-20">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-xs font-medium text-cyan-300 backdrop-blur-0 md:backdrop-blur-md sm:text-sm"
          >
            <Sparkles className="h-4 w-4 shrink-0" />

            <span className="truncate">
              Available for Internship & Full-Time Opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Siddharth Kushwaha
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="mt-4 text-xl font-semibold text-slate-200 sm:mt-6 sm:text-2xl lg:text-3xl"
          >
            Full Stack Web Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-xl text-base leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8"
          >
            Passionate Full Stack Web Developer with hands-on
            experience in building responsive, scalable, and
            modern web applications using React.js, Next.js,
            Django, MongoDB, MySQL, and Tailwind CSS.
            Focused on creating clean user interfaces,
            optimized performance, and user-friendly digital
            experiences through modern web technologies and
            efficient development practices.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row"
          >
            <Link
              href="#projects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 font-semibold text-white shadow-md transition-all duration-300 md:hover:scale-[1.02] md:hover:shadow-lg sm:w-auto"
            >
              View Projects

              <ArrowRight className="h-5 w-5 transition-transform duration-300 md:group-hover:translate-x-1" />
            </Link>

            <a
              href="/Sid-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-0 transition-all duration-300 md:backdrop-blur-md md:hover:border-cyan-400/30 md:hover:bg-white/10 sm:w-auto"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center gap-4 sm:mt-10"
          >
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  title={item.name}
                  className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 backdrop-blur-0 transition-all duration-300 md:backdrop-blur-md md:hover:-translate-y-1 md:hover:border-cyan-400/30 md:hover:text-cyan-400 md:hover:shadow-md"
                >
                  <Icon className="h-5 w-5" size={20} />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="order-1 mx-auto lg:order-2"
        >
          <div className="relative h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] lg:h-[500px] lg:w-[500px]">
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 opacity-20 blur-xl md:blur-3xl" />

            {/* Rotating Border */}
            <motion.div
              animate={!isMobile ? { rotate: 360 } : {}}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 p-[2px]"
            >
              <div className="h-full w-full rounded-full bg-slate-950" />
            </motion.div>

            {/* Glass Container */}
            <div className="absolute inset-3 rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur-0 md:inset-4 md:p-4 md:backdrop-blur-lg">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/images/profile.png"
                  alt="Siddharth Kushwaha"
                  fill
                  priority
                  quality={75}
                  sizes="(max-width: 768px) 280px, 500px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={!isMobile ? { y: [0, -10, 0] } : {}}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-2xl border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-0 md:px-6 md:py-3 md:backdrop-blur-md"
            >
              <p className="whitespace-nowrap text-xs font-medium text-white sm:text-sm">
                Web Developer
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
