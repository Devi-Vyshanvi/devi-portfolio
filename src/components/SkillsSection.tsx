
import React from "react";
import SkillBadge from "./SkillBadge";
import Section from "./Section";

const SKILLS = [
  "DSA (Basics)",
  "Python",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "SQL / SQLite",
  "Figma (UI/UX)"
] as const;

const SkillsSection = () => (
  <Section id="skills">
    <h2 className="youth-section-header font-display mb-8">My Skillset</h2>
    <div className="flex flex-wrap gap-5 justify-center mt-3">
      {SKILLS.map((skill) => (
        <SkillBadge key={skill} skill={skill} />
      ))}
    </div>
  </Section>
);

export default SkillsSection;
