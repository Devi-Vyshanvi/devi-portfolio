
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  url?: string;
  imageUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  url,
  imageUrl,
}: ProjectCardProps) => (
  <div className="rounded-xl bg-gunmetal/40 shadow-youth p-0 flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg animate-fade-in group">
    <div className="overflow-hidden rounded-t-xl">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div className="p-5 flex flex-col flex-1">
      <h3 className="text-xl font-bold text-light-gray mb-2">{title}</h3>
      <p className="text-powder-blue/80 mb-4 flex-1">{description}</p>
      {url ? (
        <a href={url} className="mt-auto youth-badge w-fit hover:bg-celestial-blue/80" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      ) : (
        <span className="mt-auto text-sm text-muted-foreground">Coming soon</span>
      )}
    </div>
  </div>
);

export default ProjectCard;
