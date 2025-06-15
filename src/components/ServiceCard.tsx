
import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => (
  <div className="bg-card p-8 rounded-2xl border-2 border-border shadow-[8px_8px_0px_#334155] transition-all duration-300 hover:shadow-[4px_4px_0px_#334155] hover:-translate-y-2">
    <Icon className="w-12 h-12 mb-4 text-primary" strokeWidth={1.5} />
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground mb-6">{description}</p>
    <a href="#contact" className="font-semibold inline-flex items-center gap-2 group text-sm">
      Get In Touch
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </a>
  </div>
);

export default ServiceCard;
