
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
  <div className="bg-card rounded-2xl border-2 border-gray-900 shadow-[8px_8px_0px_#111827] flex flex-col h-full transition-all duration-300 hover:shadow-[4px_4px_0px_#111827] hover:translate-x-1 hover:translate-y-1 group overflow-hidden">
    <div className="overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-1">{description}</p>
      {url ? (
        <Button asChild variant="outline" className="mt-auto w-fit border-gray-900 border-2 font-semibold hover:bg-gray-100">
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
