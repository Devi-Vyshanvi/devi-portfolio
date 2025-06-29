
import React, { useRef } from "react";
import { Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, {
    freezeOnceVisible: true,
    threshold: 0.2,
  });

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className={cn(
        'py-12 md:py-20 my-12 md:my-20 text-center bg-card rounded-2xl border-2 border-border opacity-0 translate-y-8 transform transition-all duration-700 ease-out',
        isVisible && 'opacity-100 translate-y-0'
      )}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Get In Touch</h2>
      <p className="text-lg text-muted-foreground mt-4 mb-6 max-w-xl mx-auto">
        I’m currently looking for new opportunities. My inbox is always open, whether you have a question or just want to say hi!
      </p>
      <div className="flex justify-center items-center gap-4">
        <Button asChild size="lg" variant="outline" className="font-bold hover:scale-105 transition-transform border-2">
          <a
            href="https://www.linkedin.com/in/devi-vyshnavy-ankana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="font-bold hover:scale-105 transition-transform border-2">
          <a
            href="https://github.com/Devi-Vyshanvi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Github className="mr-2 h-5 w-5" /> GitHub
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
