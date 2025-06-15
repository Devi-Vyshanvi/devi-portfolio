
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => (
  <section id="contact" className="py-12 md:py-20 my-12 md:my-20 text-center bg-gray-100 rounded-2xl border-2 border-gray-900">
    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Get In Touch</h2>
    <p className="text-lg text-gray-600 mt-4 mb-6 max-w-xl mx-auto">
      I’m currently looking for new opportunities. My inbox is always open, whether you have a question or just want to say hi!
    </p>
    <Button asChild size="lg" className="bg-primary text-primary-foreground font-bold rounded-lg shadow-lg hover:bg-primary/90 transition-all transform hover:scale-105">
      <a
        href="mailto:your.email@example.com"
        className="inline-flex items-center gap-2"
      >
        Say Hello <ArrowRight size={22} />
      </a>
    </Button>
  </section>
);

export default ContactSection;
