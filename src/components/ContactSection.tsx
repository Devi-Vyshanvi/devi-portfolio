
import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import Section from "./Section";

const CONTACTS = [
  {
    name: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
    Icon: Mail,
    color: "#4981e3",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    href: "https://www.linkedin.com/in/yourusername/",
    Icon: Linkedin,
    color: "#0e76a8",
  },
  {
    name: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
    Icon: Github,
    color: "#212121",
  },
];

const ContactSection = () => (
  <Section id="contact" className="mb-4">
    <h2 className="youth-section-header">Contact</h2>
    <ul className="flex flex-col sm:flex-row gap-6 items-center justify-center mt-3">
      {CONTACTS.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            className="flex items-center gap-3 youth-badge text-lg hover:scale-110"
            style={{ color: item.color }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <item.Icon size={22} />
            <span className="text-base md:text-lg font-semibold">{item.name}</span>
          </a>
          <div className="text-xs text-muted-foreground mt-1 text-center">{item.value}</div>
        </li>
      ))}
    </ul>
  </Section>
);

export default ContactSection;
