
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section id="about" className="flex flex-col items-center py-12 md:py-20">
    <div className="text-center">
      <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tighter mb-4 leading-tight">
        Hola my self Ankana Devi Vyshnavy
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
        I'm a designer and developer specializing in UI/UX and creating high-quality websites and applications.
      </p>
      <Button asChild size="lg" className="bg-primary text-primary-foreground font-bold rounded-lg shadow-lg hover:bg-primary/90 transition-all transform hover:scale-105">
        <a href="#projects">Learn From Me</a>
      </Button>
    </div>
  </section>
);

export default HeroSection;
