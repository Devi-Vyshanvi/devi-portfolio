
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section id="about" className="flex flex-col items-start py-20 md:py-32 text-left">
    <div className="max-w-3xl">
      <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tighter mb-4 leading-tight bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient-x">
        Ankana Devi Vyshnavy.
        <br />
        A Designer & Developer.
      </h1>
      <p className="animate-fade-in text-lg text-muted-foreground mb-12 max-w-2xl" style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}>
        I'm a designer and developer specializing in UI/UX and creating high-quality websites and applications.
      </p>
      <div className="animate-fade-in flex" style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}>
        <Button asChild size="lg" className="w-full sm:w-auto font-bold transition-all border-2 border-border shadow-[4px_4px_0px_hsl(var(--border))] hover:shadow-[2px_2px_0px_hsl(var(--border))] hover:-translate-y-0.5">
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
