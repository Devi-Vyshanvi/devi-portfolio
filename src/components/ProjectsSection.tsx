import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const PROJECTS = [
  {
    title: "Cyber-Edu",
    description: "A comprehensive cybersecurity education platform design, featuring interactive learning modules and security training courses.",
    url: "http://bit.ly/3QRWLKX",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1332&auto=format&fit=crop",
  },
  {
    title: "Web Page",
    description: "A modern web page design prototype showcasing clean layouts and user-friendly interface elements.",
    url: "https://www.figma.com/proto/iOJZntMVpesdyQC57b7xQM/MooVelicious?node-id=44-2&t=NtlEduE3NmHwhD7g-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=44%3A2",
    imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1332&auto=format&fit=crop",
  },
  {
    title: "Mobile App Concept",
    description: "A design concept for a new mobile application, detailing the user interface and experience in Figma.",
    url: "https://www.figma.com/design/ieZALzKNZR7fgVAjN51Ecs/Untitled?node-id=0-1&p=f",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1374&auto=format&fit=crop",
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, {
    freezeOnceVisible: true,
    threshold: 0.2,
  });
  
  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={cn(
        'py-12 md:py-20 opacity-0 translate-y-8 transform transition-all duration-700 ease-out',
        isVisible && 'opacity-100 translate-y-0'
      )}
    >
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
};

export default ProjectsSection;
