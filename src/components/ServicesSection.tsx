
import React, { useRef } from 'react';
import ServiceCard from './ServiceCard';
import { Figma, Code, Database } from 'lucide-react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: Figma,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and beautiful user interfaces. From wireframes to final mockups and prototypes using Figma.'
  },
  {
    icon: Database,
    title: 'Backend & Data',
    description: 'Handling data with SQL/SQLite and building application logic with Python. Grounded in DSA basics.'
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building responsive and performant websites with HTML, CSS, JavaScript (Essentials), and Tailwind CSS.'
  }
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, {
    freezeOnceVisible: true,
    threshold: 0.2,
  });

  return (
    <section
      id="services"
      ref={sectionRef}
      className={cn(
        'py-12 md:py-20 opacity-0 translate-y-8 transform transition-all duration-700 ease-out',
        isVisible && 'opacity-100 translate-y-0'
      )}
    >
      <div className="text-center mb-12">
        <p className="text-lg font-medium text-muted-foreground">Passion led us here</p>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-2">What I do</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map(service => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
