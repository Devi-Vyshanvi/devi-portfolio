
import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";

const Index = () => (
  <main className="w-full min-h-screen flex flex-col items-center bg-white font-sans">
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <footer className="py-6 text-center w-full text-gray-400 text-xs mt-10">
        © {new Date().getFullYear()} Your Name. All Rights Reserved.
      </footer>
    </div>
  </main>
);

export default Index;

