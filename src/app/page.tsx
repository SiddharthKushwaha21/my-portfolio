import dynamic from "next/dynamic";

import Navbar from "@/components/layout/Navbar";

const Hero = dynamic(
  () => import("@/components/sections/Hero")
);

const About = dynamic(
  () => import("@/components/sections/About")
);

const Education = dynamic(
  () => import("@/components/sections/Education")
);

const Skills = dynamic(
  () => import("@/components/sections/Skills")
);

const Projects = dynamic(
  () => import("@/components/sections/Projects")
);

const Experience = dynamic(
  () => import("@/components/sections/Experience")
);

const Certifications = dynamic(
  () =>
    import(
      "@/components/sections/Certifications"
    )
);

const Contact = dynamic(
  () => import("@/components/sections/Contact")
);

const Footer = dynamic(
  () => import("@/components/layout/Footer")
);

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Education />

      <Skills />

      <Projects />

      <Experience />

      <Certifications />

      <Contact />

      <Footer />
    </>
  );
}
