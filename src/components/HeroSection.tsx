
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section id="about" className="flex flex-col items-center py-20 md:py-32">
    <div className="text-center">
      <h1 className="animate-fade-in bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent bg-300% animate-gradient-pan text-4xl lg:text-6xl font-extrabold tracking-tighter mb-4 leading-tight">
        Hola my self Ankana Devi Vyshnavy
      </h1>
      <p className="animate-fade-in text-lg text-muted-foreground mb-12 max-w-2xl mx-auto" style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}>
        I'm a designer and developer specializing in UI/UX and creating high-quality websites and applications.
      </p>
      <div className="animate-fade-in flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}>
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
