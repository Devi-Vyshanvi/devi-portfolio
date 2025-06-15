
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section id="about" className="flex flex-col items-center py-20 md:py-32">
    <div className="text-center">
      <h1 className="animate-fade-in animate-gradient-pan bg-gradient-to-r from-primary to-celestial-blue bg-[200%_auto] bg-clip-text text-transparent text-4xl lg:text-6xl font-extrabold tracking-tighter mb-4 leading-tight">
        Hola my self Ankana Devi Vyshnavy
      </h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        I'm a designer and developer specializing in UI/UX and creating high-quality websites and applications.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button asChild size="lg" className="w-full sm:w-auto font-bold shadow-lg hover:scale-105 transition-transform">
          <a href="#projects">
            View My Work
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto font-bold hover:scale-105 transition-transform border-2">
          <a href="#contact" className="flex items-center">
            Contact Me
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
