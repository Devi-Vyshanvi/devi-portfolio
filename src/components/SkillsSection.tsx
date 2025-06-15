
import React from "react";
import SkillBadge from "./SkillBadge";
import Section from "./Section";

const SKILLS = [
  "HTML",
  "CSS",
  "Python",
  "Tailwind CSS",
  "JavaScript",
] as const;

const SkillsSection = () => (
  <Section id="skills">
    <h2 className="youth-section-header">Skills</h2>
    <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-3">
      {SKILLS.map((skill) => (
        <SkillBadge key={skill} skill={skill} />
      ))}
    </div>
  </Section>
);

export default SkillsSection;
