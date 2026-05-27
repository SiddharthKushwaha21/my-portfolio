"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Send,
  Download,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  X,
  Copy,
  ExternalLink,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactInfo = [
  {
    icon: Mail,
    label: "Gmail",
    value: "sid.kushwaha04@gmail.com",
    href:
      "https://mail.google.com/mail/?view=cm&fs=1&to=sid.kushwaha04@gmail.com",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8318075481",
    href: "tel:+918318075481",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kanpur Nagar, Uttar Pradesh, India",
    href:
      "https://maps.google.com/?q=Kanpur+Nagar,+Uttar+Pradesh,+India",
    gradient: "from-violet-500 via-fuchsia-500 to-purple-500",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/SiddharthKushwaha21",
    href: "https://github.com/SiddharthKushwaha21",
    gradient: "from-slate-600 via-slate-700 to-slate-900",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/siddharth311",
    href: "https://www.linkedin.com/in/siddharth311",
    gradient: "from-blue-600 via-sky-500 to-cyan-400",
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const [popup, setPopup] = useState<{
    show: boolean;
    success: boolean;
    message: string;
  }>({
    show: false,
    success: false,
    message: "",
  });

  useEffect(() => {
    if (!popup.show) return;

    const timer = setTimeout(() => {
      setPopup((prev) => ({
        ...prev,
        show: false,
      }));
    }, 5000);

    return () => clearTimeout(timer);
  }, [popup.show]);

  const showPopup = (
    success: boolean,
    message: string
  ) => {
    setPopup({
      show: true,
      success,
      message,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "8255c0f6-6dea-47aa-8b00-0c9e4ad19161"
    );
    formData.append(
      "from_name",
      "Siddharth Portfolio Contact Form"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.success) {
        showPopup(
          true,
          "Message sent successfully! I will get back to you soon."
        );
        form.reset();
      } else {
        showPopup(
          false,
          "Message could not be sent. Please try again."
        );
      }
    } catch {
      showPopup(
        false,
        "Something went wrong. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(
        "sid.kushwaha04@gmail.com"
      );
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      showPopup(
        false,
        "Unable to copy email address."
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-16 sm:py-24 lg:py-32"
    >
      {/* Popup Notification */}
      <AnimatePresence>
        {popup.show && (
          <motion.div
            initial={{
              opacity: 0,
              y: -30,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -30,
              scale: 0.95,
            }}
            transition={{ duration: 0.3 }}
            className="fixed left-4 right-4 top-4 z-[100] sm:left-auto sm:right-6 sm:top-6 sm:max-w-md"
          >
            <div
              className={`rounded-3xl border p-4 sm:p-5 shadow-2xl backdrop-blur-2xl ${
                popup.success
                  ? "border-emerald-400/30 bg-emerald-500/10"
                  : "border-red-400/30 bg-red-500/10"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${
                    popup.success
                      ? "bg-emerald-500/20"
                      : "bg-red-500/20"
                  }`}
                >
                  {popup.success ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-400" />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-white">
                    {popup.success
                      ? "Success"
                      : "Error"}
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    {popup.message}
                  </p>
                </div>

                <button
                  onClick={() =>
                    setPopup((prev) => ({
                      ...prev,
                      show: false,
                    }))
                  }
                  className="text-slate-400 transition hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl sm:left-20 sm:top-20 sm:h-96 sm:w-96" />
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl sm:right-20 sm:top-20 sm:h-96 sm:w-96" />
        <div className="absolute bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl sm:bottom-20 sm:h-96 sm:w-96" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs sm:px-5 sm:text-sm font-medium text-cyan-300 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Get In Touch
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s Build
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Something Amazing
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Have a project idea, internship opportunity, or
            collaboration in mind? I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-2xl">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5" />

              <div className="relative">
                <h3 className="text-2xl font-bold text-white">
                  Contact Information
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                  Feel free to connect with me through any of
                  the following channels.
                </p>

                {/* Contact Items */}
                <div className="mt-8 space-y-4">
                  {contactInfo.map(
                    (item, index) => {
                      const Icon = item.icon;

                      return (
                        <motion.div
                          key={item.label}
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            delay:
                              index * 0.08,
                          }}
                        >
                          <Link
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10"
                          >
                            <div
                              className={`flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg`}
                            >
                              <Icon className="h-5 w-5 text-white" />
                            </div>

                            <div className="min-w-0 flex-1">
                              <p className="text-xs sm:text-sm text-slate-400">
                                {item.label}
                              </p>
                              <p className="truncate text-sm sm:text-base font-medium text-white">
                                {item.value}
                              </p>
                            </div>

                            <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-500 transition group-hover:text-cyan-400" />
                          </Link>
                        </motion.div>
                      );
                    }
                  )}
                </div>

                {/* Quick Actions */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-medium text-white transition-all duration-300 hover:bg-white/10"
                  >
                    <Copy className="h-4 w-4" />
                    {copied
                      ? "Copied!"
                      : "Copy Gmail"}
                  </button>

                  <Link
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sid.kushwaha04@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-3 font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-500/20"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Open Gmail
                  </Link>
                </div>

                {/* Resume Button */}
                <Link
                  href="/Sid-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02]"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-2xl">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/5 via-transparent to-violet-500/5" />

              <div className="relative">
                <h3 className="text-2xl font-bold text-white">
                  Send Message
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                  Fill out the form and your message will be
                  delivered directly to my inbox.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400/40 focus:bg-white/10"
                  />

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Gmail"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400/40 focus:bg-white/10"
                  />

                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Subject"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400/40 focus:bg-white/10"
                  />

                  <textarea
                    name="message"
                    rows={6}
                    required
                    placeholder="Your Message"
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400/40 focus:bg-white/10"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <Send className="h-4 w-4" />
                    {isSubmitting
                      ? "Sending..."
                      : "Send Message"}
                  </button>

                  <div className="flex items-start gap-2 text-sm leading-6 text-slate-400">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    Your message is securely delivered to my
                    Gmail.
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
