import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section id="about" className="flex flex-col md:flex-row items-center gap-12 py-12 md:py-20">
    <div className="md:w-1/2 text-center md:text-left">
      <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tighter mb-4 leading-tight">
        Hola my self Ankana Devi Vyshnavy
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
        I'm a designer and developer specializing in UI/UX and creating high-quality websites and applications.
      </p>
      <Button asChild size="lg" className="bg-primary text-primary-foreground font-bold rounded-lg shadow-lg hover:bg-primary/90 transition-all transform hover:scale-105">
        <a href="#projects">Learn From Me</a>
      </Button>
    </div>
    <div className="md:w-1/2 w-full mt-8 md:mt-0 relative">
      <div className="absolute inset-0 bg-primary rounded-full transform -rotate-12 blur-3xl opacity-20 z-0"></div>
      <img 
        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop" 
        alt="Person working on a laptop" 
        className="relative rounded-2xl shadow-2xl w-full h-auto z-10"
      />
    </div>
  </section>
);

export default HeroSection;
