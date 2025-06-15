
import React from "react";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    title: "Landing Page",
    description: "A clean and modern landing page using HTML, CSS, and a bit of JavaScript. Great for learning layouts & responsiveness.",
    url: "",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Simple Calculator",
    description: "A beginner-friendly calculator app built with JavaScript and styled with Tailwind CSS.",
    url: "",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "My Portfolio Website",
    description: "You’re on it! A portfolio to showcase my learning journey, built with React and Tailwind CSS.",
    url: "",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1170&auto=format&fit=crop",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-12 md:py-20">
    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-12">My Work</h2>
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-6">
      {PROJECTS.map((p) => (
        <ProjectCard
          key={p.title}
          {...p}
        />
      ))}
    </div>
  </section>
);

export default ProjectsSection;
