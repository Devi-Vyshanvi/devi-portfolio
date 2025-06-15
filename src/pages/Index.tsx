
// Main portfolio page

import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="w-full min-h-screen flex flex-col items-center bg-raisin-black font-sans relative">
      <div className="fixed inset-0 bg-gradient-to-tr from-space-cadet via-raisin-black to-gunmetal -z-10" />
      <div className="w-full max-w-5xl px-4">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <footer className="py-8 text-center w-full text-muted-foreground text-sm">
          © {new Date().getFullYear()} Your Name. All Rights Reserved.
        </footer>
      </div>
    </main>
  );
};

export default Index;
