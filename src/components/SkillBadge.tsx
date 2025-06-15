
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
    className="px-3 py-1 rounded bg-gray-800 text-gray-200 text-sm transition-colors duration-150 hover:bg-gray-700 cursor-pointer"
  >
    {skill}
  </span>
);

export default SkillBadge;
