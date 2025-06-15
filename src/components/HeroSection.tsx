
import React from "react";

const HeroSection = () => (
  <header className="youth-section flex flex-col items-center justify-center gap-6 mt-4 bg-gradient-to-br from-sky via-mint to-blush">
    <img
      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=256&q=80"
      alt="Student"
      className="w-28 h-28 rounded-full border-4 border-white/80 shadow-lg -mt-12 object-cover"
      draggable="false"
    />
    <h1 className="youth-section-header text-4xl md:text-5xl text-center">
      Hi, I’m a <span className="text-[#4981e3]">BTech CSE</span> student at <span className="text-[#fd8247]">NIAT</span>
    </h1>
    <p className="text-xl text-foreground/80 max-w-2xl text-center">
      Passionate about tech, code, and all things creative.<br />
      Actively learning — looking for my first internship!
    </p>
    <a
      href="#contact"
      className="px-6 py-2 rounded-full font-semibold text-white bg-primary hover:bg-blue-700 shadow youth-badge transition-all text-lg"
    >
      Let’s Connect
    </a>
  </header>
);

export default HeroSection;
