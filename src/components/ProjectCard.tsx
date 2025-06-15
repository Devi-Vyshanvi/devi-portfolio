
import React from "react";
import { FileCode2 } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  url?: string;
  iconColor?: string;
}

const ProjectCard = ({
  title,
  description,
  url,
  iconColor = "#4981e3",
}: ProjectCardProps) => (
  <div className="rounded-xl bg-white/95 shadow-youth p-5 flex flex-col justify-between h-full transition-all duration-200 hover:scale-105 hover:shadow-lg animate-fade-in">
    <div className="flex items-center gap-3 mb-2">
      <FileCode2 size={28} className="text-primary" style={{ color: iconColor }} />
      <h3 className="text-xl font-bold text-primary">{title}</h3>
    </div>
    <p className="text-foreground/80 mb-3 flex-1">{description}</p>
    {url ? (
      <a href={url} className="mt-2 youth-badge w-fit hover:bg-sky" target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    ) : (
      <span className="mt-2 text-sm text-muted-foreground">Coming soon</span>
    )}
  </div>
);

export default ProjectCard;
