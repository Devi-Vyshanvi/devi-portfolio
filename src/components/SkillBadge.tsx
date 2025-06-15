
import React from "react";
import { Html5, Css3, Python, FileCode2, Javascript } from "lucide-react";

type Skill =
  | "HTML"
  | "CSS"
  | "Python"
  | "Tailwind CSS"
  | "JavaScript";

const icons: Record<Skill, React.ReactNode> = {
  HTML: <Html5 size={22} className="text-[#e44d26]" />,
  CSS: <Css3 size={22} className="text-[#264de4]" />,
  Python: <Python size={22} className="text-[#3872a9]" />,
  "Tailwind CSS": <FileCode2 size={22} className="text-[#38bdf8]" />,
  JavaScript: <Javascript size={22} className="text-[#facc15]" />,
};

const colorClass: Record<Skill, string> = {
  HTML: "bg-[#ffe5ec]/80 text-[#c6693b]",
  CSS: "bg-[#e9ecef]/80 text-[#3b82f6]",
  Python: "bg-[#e0f7fa]/80 text-[#3872a9]",
  "Tailwind CSS": "bg-[#d0f1ff]/80 text-[#38bdf8]",
  JavaScript: "bg-[#fff4b8]/80 text-[#eab308]",
};

type SkillBadgeProps = {
  skill: Skill;
};

const SkillBadge = ({ skill }: SkillBadgeProps) => (
  <span
    className={`youth-badge gap-2 text-base shadow ${colorClass[skill]} transition-colors`}
    tabIndex={0}
  >
    {icons[skill]}
    <span className="font-semibold">{skill}</span>
  </span>
);

export default SkillBadge;
