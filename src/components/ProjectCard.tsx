
import React from "react";
import { Button } from "./ui/button";

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
  <div className="bg-card rounded-2xl border-2 border-border shadow-[8px_8px_0px_hsl(var(--border))] flex flex-col h-full transition-shadow duration-300 hover:shadow-[4px_4px_0px_hsl(var(--border))] group overflow-hidden">
    <div className="overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4 flex-1">{description}</p>
      {url ? (
        <Button asChild className="mt-auto w-fit border-border border-2 font-semibold hover:bg-accent">
          <a href={url} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </Button>
      ) : (
        <span className="mt-auto text-sm text-muted-foreground">Coming soon</span>
      )}
    </div>
  </div>
);

export default ProjectCard;
