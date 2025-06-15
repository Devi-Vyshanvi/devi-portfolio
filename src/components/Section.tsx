
import React from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const Section = ({ id, className = "", children }: SectionProps) => (
  <section
    id={id}
    className={`youth-section ${className}`}
    tabIndex={-1}
  >
    {children}
  </section>
);

export default Section;
