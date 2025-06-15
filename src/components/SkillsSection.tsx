
import React from "react";
import SkillBadge from "./SkillBadge";

const SKILLS = [
  "Figma (UI/UX)",
  "DSA (Basics)",
  "Python",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "SQL / SQLite"
] as const;

const SkillsSection = () => (
  <section id="skills" className="mb-8">
    <h2 className="text-xl font-semibold mb-2">Skills</h2>
    <div className="flex flex-wrap gap-2">
      {SKILLS.map(skill => <SkillBadge key={skill} skill={skill} />)}
    </div>
  </section>
);

export default SkillsSection;
