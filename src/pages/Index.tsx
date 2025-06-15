
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="bg-background min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-card max-w-6xl mx-auto my-8 md:my-12 p-4 sm:p-6 md:p-8 rounded-3xl border-2 border-border shadow-[12px_12px_0px_#334155]">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
      <footer className="py-6 text-center w-full text-muted-foreground text-xs">
        © {new Date().getFullYear()} Ankana Devi Vyshnavy. All Rights Reserved.
      </footer>
    </div>
  </div>
);

export default Index;
