
import React from "react";
import Section from "./Section";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    title: "Landing Page",
    description: "A clean and modern landing page using HTML, CSS, and a bit of JavaScript. Great for learning layouts & responsiveness.",
    url: "",
    imageUrl: "https://placehold.co/600x400/1E293B/F1F5F9?text=Landing+Page",
  },
  {
    title: "Simple Calculator",
    description: "A beginner-friendly calculator app built with JavaScript and styled with Tailwind CSS.",
    url: "",
    imageUrl: "https://placehold.co/600x400/1E293B/F1F5F9?text=Calculator",
  },
  {
    title: "My Portfolio Website",
    description: "You’re on it! A portfolio to showcase my learning journey, built with React and Tailwind CSS.",
    url: "",
    imageUrl: "https://placehold.co/600x400/1E293B/F1F5F9?text=Portfolio",
  },
];

const ProjectsSection = () => (
  <Section id="projects">
    <h2 className="youth-section-header">Selected Work</h2>
    <div className="grid gap-8 md:grid-cols-2 grid-cols-1 mt-6">
      {PROJECTS.map((p) => (
        <ProjectCard
          key={p.title}
          {...p}
        />
      ))}
    </div>
  </Section>
);

export default ProjectsSection;
