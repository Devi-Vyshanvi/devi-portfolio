
import React from "react";
import Section from "./Section";

const AboutSection = () => (
  <Section id="about">
    <h2 className="youth-section-header">About Me</h2>
    <p className="text-lg md:text-xl text-foreground/90 leading-relaxed max-w-2xl mx-auto">
      I’m a curious and motivated learner currently exploring <span className="text-primary font-semibold">Web Development</span>.
      <br />At NIAT, I immerse myself in problem-solving and building cool things. When I’m not coding, I enjoy brainstorming ideas, reading, or learning something new!
    </p>
  </Section>
);

export default AboutSection;
