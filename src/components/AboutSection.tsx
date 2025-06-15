
import React from "react";
import Section from "./Section";

const AboutSection = () => (
  <Section id="about">
    <div className="grid md:grid-cols-5 gap-12 items-center">
      <div className="md:col-span-2">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=256&q=80"
          alt="Student"
          className="w-full h-auto rounded-lg shadow-lg object-cover"
          draggable="false"
        />
      </div>
      <div className="md:col-span-3">
        <h2 className="youth-section-header">About Me</h2>
        <p className="text-lg md:text-xl text-powder-blue/90 leading-relaxed">
          I’m a curious and motivated learner currently exploring <span className="text-light-gray font-semibold">Web Development</span>.
          <br /><br />
          At NIAT, I immerse myself in problem-solving and building cool things. When I’m not coding, I enjoy brainstorming ideas, reading, or learning something new!
        </p>
      </div>
    </div>
  </Section>
);

export default AboutSection;
