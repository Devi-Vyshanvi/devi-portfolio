
import React from "react";

const HeroSection = () => (
  <section className="text-center mt-8 mb-8">
    <h1 className="text-3xl font-bold mb-2">
      Hello, I'm <span className="text-yellow-500">Your Name</span>
    </h1>
    <p className="text-gray-600 mb-4">
      BTech CSE student | Web, Code &amp; Design
    </p>
    <div className="flex justify-center gap-2 mb-4">
      <a
        href="#skills"
        className="bg-yellow-400 text-black rounded px-4 py-2 text-sm font-medium"
      >
        My Skills
      </a>
    </div>
  </section>
);

export default HeroSection;

