
import React from "react";
import { ArrowRight } from "lucide-react";
import Section from "./Section";

const ContactSection = () => (
  <Section id="contact" className="mb-4 text-center">
    <h2 className="youth-section-header">Get In Touch</h2>
    <p className="text-lg text-powder-blue mt-4 mb-6 max-w-xl mx-auto">
      I’m currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
    </p>
    <a
      href="mailto:your.email@example.com"
      className="inline-flex items-center gap-2 text-xl font-semibold text-light-gray bg-celestial-blue px-8 py-3 rounded-lg transition-transform hover:scale-105"
    >
      Say Hello <ArrowRight size={22} />
    </a>
  </Section>
);

export default ContactSection;
