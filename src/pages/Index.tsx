
// Main portfolio page

import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="w-full min-h-screen flex flex-col items-center bg-gradient-to-tr from-blush via-sky to-mint font-sans">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="py-6 text-center w-full text-muted-foreground text-sm">
        © {new Date().getFullYear()} Your Name. Proudly built with <span className="font-bold text-primary">React & Tailwind CSS</span>.
      </footer>
    </main>
  );
};

export default Index;
