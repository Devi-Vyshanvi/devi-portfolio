
// Main portfolio page

import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="w-full min-h-screen flex flex-col items-center bg-white font-sans relative">
      <div className="w-full max-w-6xl mx-auto px-2">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <footer className="py-8 text-center w-full text-gray-500 text-sm border-t border-gray-200 mt-10">
          © {new Date().getFullYear()} Your Name. All Rights Reserved.
        </footer>
      </div>
    </main>
  );
};

export default Index;
