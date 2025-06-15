
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/yourusername/",
    Icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    Icon: Github,
  },
  {
    name: "Email",
    href: "mailto:your.email@example.com",
    Icon: Mail,
  },
];

const HeroSection = () => (
  <section id="home" className="flex flex-col items-center justify-center text-center min-h-screen py-20 bg-transparent">
    <h1 className="text-5xl md:text-7xl font-bold text-light-gray tracking-tighter mb-4 animate-fade-in">
      Hi, I’m <span className="text-celestial-blue">Your Name</span>
    </h1>
    <p className="text-xl md:text-2xl text-powder-blue max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
      A BTech CSE student passionate about tech, code, and building cool things for the web.
    </p>
    <div className="flex gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-powder-blue hover:text-light-gray transition-colors"
          aria-label={link.name}
        >
          <link.Icon size={28} />
        </a>
      ))}
    </div>
  </section>
);

export default HeroSection;
