
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
    className={
      skill === "Figma (UI/UX)"
        ? "px-3 py-1 rounded bg-yellow-100 border border-yellow-400 text-black font-bold text-sm"
        : "px-3 py-1 rounded bg-gray-100 text-gray-700 text-sm"
    }
  >
    {skill}
  </span>
);

export default SkillBadge;
