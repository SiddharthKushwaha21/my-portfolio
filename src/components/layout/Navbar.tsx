"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  Download,
  Code2,
  Sparkles,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  {
    name: "Certificates",
    href: "#certifications",
  },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] =
    useState(0);
  const [activeSection, setActiveSection] =
    useState("Home");

  useEffect(() => {
    const updateScrollData = () => {
      const scrollTop = window.scrollY;

      // Scroll Progress
      const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      setScrollProgress(
        docHeight > 0
          ? (scrollTop / docHeight) * 100
          : 0
      );

      // Navbar Background
      setIsScrolled(scrollTop > 20);

      // Active Section Detection
      const currentPosition = scrollTop + 150;

      let currentSection = "Home";

      for (const link of navLinks) {
        const section = document.querySelector(
          link.href
        ) as HTMLElement | null;

        if (
          section &&
          currentPosition >= section.offsetTop
        ) {
          currentSection = link.name;
        }
      }

      setActiveSection(currentSection);
    };

    const handleScroll = () => {
      requestAnimationFrame(updateScrollData);
    };

    updateScrollData();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    sectionName: string
  ) => {
    e.preventDefault();

    const target = document.querySelector(
      href
    ) as HTMLElement | null;

    if (!target) return;

    setActiveSection(sectionName);
    setIsOpen(false);

    const navbarHeight = 100;

    const offsetTop =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed left-0 top-0 z-[60] h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
        animate={{ width: `${scrollProgress}%` }}
        transition={{
          duration: 0.15,
          ease: "linear",
        }}
      />

      {/* Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "border-b border-white/10 bg-slate-950/80 backdrop-blur-2xl shadow-2xl shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) =>
              handleLinkClick(
                e,
                "#home",
                "Home"
              )
            }
            className="group flex flex-shrink-0 items-center gap-4"
          >
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 3,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 shadow-[0_0_40px_rgba(6,182,212,0.35)]"
            >
              <Code2 className="h-6 w-6 text-white" />

              <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>

            <div className="leading-tight">
              <h1 className="text-2xl font-bold tracking-tight text-white">
                Siddharth Kushwaha
              </h1>

              <p className="mt-0.5 text-sm font-medium text-slate-400">
                Full Stack Developer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-0.5 rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-xl lg:flex">
            {navLinks.map((link) => {
              const isActive =
                activeSection === link.name;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) =>
                    handleLinkClick(
                      e,
                      link.href,
                      link.name
                    )
                  }
                  className="relative rounded-full px-5 py-3 text-sm font-medium"
                >
                  {/* Smooth Sliding Active Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 rounded-full border border-cyan-400/30 bg-cyan-500/10 shadow-[0_0_30px_rgba(6,182,212,0.25)]"
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 28,
                        mass: 1,
                      }}
                    />
                  )}

                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      isActive
                        ? "text-cyan-300"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Resume Button */}
          <div className="hidden lg:flex">
            <a
              href="/Sid Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
            >
              <Sparkles className="h-4 w-4" />

              Resume

              <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-xl lg:hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() =>
                setIsOpen(false)
              }
            />

            {/* Sidebar */}
            <motion.div
              className="fixed right-0 top-0 z-50 h-screen w-[85%] max-w-sm border-l border-white/10 bg-slate-950/95 p-6 backdrop-blur-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-lg font-bold text-white">
                  Navigation
                </h2>

                <button
                  onClick={() =>
                    setIsOpen(false)
                  }
                  className="rounded-lg p-2 text-white hover:bg-white/10"
                  aria-label="Close Menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-2">
                {navLinks.map((link) => {
                  const isActive =
                    activeSection === link.name;

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={(e) =>
                        handleLinkClick(
                          e,
                          link.href,
                          link.name
                        )
                      }
                      className={`block rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-cyan-500/10 text-cyan-300"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Resume Button */}
              <a
                href="/Sid Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
