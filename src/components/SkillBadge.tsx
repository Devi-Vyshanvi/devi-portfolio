
import React from "react";

type Skill =
  | "DSA (Basics)"
  | "Python"
  | "HTML"
  | "CSS"
  | "Tailwind CSS"
  | "JavaScript"
  | "SQL / SQLite"
  | "Figma (UI/UX)";

type SkillBadgeProps = {
  skill: Skill;
};

const SkillBadge = ({ skill }: SkillBadgeProps) => (
  <span
    className="px-3 py-1 rounded bg-gray-100 text-gray-700 text-sm transition-colors duration-150 hover:bg-gray-200 cursor-pointer"
  >
    {skill}
  </span>
);

export default SkillBadge;
