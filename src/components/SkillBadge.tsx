
import React from "react";
import {
  Code,
  Database,
  FileText,
  Palette,
  MonitorSmartphone
} from "lucide-react";

type Skill =
  | "DSA (Basics)"
  | "Python"
  | "HTML"
  | "CSS"
  | "Tailwind CSS"
  | "JavaScript"
  | "SQL / SQLite"
  | "Figma (UI/UX)";

const icons: Record<Skill, React.ReactNode> = {
  "DSA (Basics)": <FileText size={22} className="text-black" />,
  Python: <Code size={22} className="text-[#3572A5]" />,
  HTML: <Code size={22} className="text-[#e44d26]" />,
  CSS: <Palette size={22} className="text-[#264de4]" />,
  "Tailwind CSS": <Palette size={22} className="text-[#38bdf8]" />,
  JavaScript: <MonitorSmartphone size={22} className="text-[#facc15]" />,
  "SQL / SQLite": <Database size={22} className="text-[#336791]" />,
  "Figma (UI/UX)": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="7" cy="5" r="3" fill="#F24E1E"/>
      <circle cx="17" cy="5" r="3" fill="#A259FF"/>
      <circle cx="7" cy="15" r="3" fill="#FF7262"/>
      <circle cx="12" cy="10" r="3" fill="#1ABCFE"/>
      <circle cx="17" cy="15" r="3" fill="#0ACF83"/>
    </svg>
  ),
};

type SkillBadgeProps = {
  skill: Skill;
};

const SkillBadge = ({ skill }: SkillBadgeProps) => (
  <span
    className={[
      "youth-badge gap-2 text-base shadow-sm rounded-full bg-white border-2 border-gray-200 text-black font-semibold transition-colors duration-200",
      skill === "Figma (UI/UX)" ? "skill-badge-figma scale-105" : "",
    ].join(" ")}
    tabIndex={0}
  >
    {icons[skill]}
    <span className={`${skill === "Figma (UI/UX)" ? "font-bold" : "text-gray-700"}`}>
      {skill}
    </span>
  </span>
);

export default SkillBadge;
