
import React from "react";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    title: "E-commerce UI/UX Design",
    description: "A comprehensive UI/UX design case study for an e-commerce platform, created in Figma.",
    url: "http://bit.ly/3QRWLKX",
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1332&auto=format&fit=crop",
  },
  {
    title: "Interactive Web Prototype",
    description: "A fully interactive website prototype developed using Framer, showcasing modern animations and user flows.",
    url: "https://possible-oval-692489.framer.app/",
    imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Mobile App Concept",
    description: "A design concept for a new mobile application, detailing the user interface and experience in Figma.",
    url: "https://www.figma.com/design/ieZALzKNZR7fgVAjN51Ecs/Untitled?node-id=0-1&p=f",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1374&auto=format&fit=crop",
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
