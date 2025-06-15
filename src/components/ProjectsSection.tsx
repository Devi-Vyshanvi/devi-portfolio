
import React from "react";
import Section from "./Section";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    title: "Landing Page",
    description: "A clean and modern landing page using HTML, CSS, and a bit of JavaScript. Great for learning layouts & responsiveness.",
    url: "", // Placeholder; user can update later
    iconColor: "#38bdf8",
  },
  {
    title: "Simple Calculator",
    description: "A beginner-friendly calculator app built with JavaScript and styled with Tailwind CSS.",
    url: "",
    iconColor: "#facc15",
  },
  {
    title: "My Portfolio Website",
    description: "You’re on it! A portfolio to showcase my learning journey, built with React and Tailwind CSS.",
    url: "",
    iconColor: "#4981e3",
  },
];

const ProjectsSection = () => (
  <Section id="projects">
    <h2 className="youth-section-header">Projects</h2>
    <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-6">
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
