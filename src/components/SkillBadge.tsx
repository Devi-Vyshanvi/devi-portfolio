
import React from "react";
import {
  Code,
  Palette,
  Terminal,
  Feather,
  MonitorSmartphone
} from "lucide-react";

type Skill =
  | "HTML"
  | "CSS"
  | "Python"
  | "Tailwind CSS"
  | "JavaScript";

const icons: Record<Skill, React.ReactNode> = {
  HTML: <Code size={22} className="text-[#e44d26]" />,
  CSS: <Palette size={22} className="text-[#264de4]" />,
  Python: <Terminal size={22} className="text-[#3872a9]" />,
  "Tailwind CSS": <Feather size={22} className="text-[#38bdf8]" />,
  JavaScript: <MonitorSmartphone size={22} className="text-[#facc15]" />,
};

const colorClass: Record<Skill, string> = {
  HTML: "text-[#e44d26]",
  CSS: "text-[#264de4]",
  Python: "text-[#3872a9]",
  "Tailwind CSS": "text-[#38bdf8]",
  JavaScript: "text-[#facc15]",
};

type SkillBadgeProps = {
  skill: Skill;
};

const SkillBadge = ({ skill }: SkillBadgeProps) => (
  <span
    className={`youth-badge gap-2 text-base shadow transition-colors ${colorClass[skill]}`}
    tabIndex={0}
  >
    {icons[skill]}
    <span className="font-semibold text-powder-blue">{skill}</span>
  </span>
);

export default SkillBadge;
