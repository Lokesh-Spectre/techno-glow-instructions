
import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  icon: ReactNode;
}

const Section = ({ title, children, icon }: SectionProps) => {
  return (
    <div className="section-card animate-fade-in">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-primary">{icon}</div>
        <h2 className="text-2xl font-bold text-gradient">{title}</h2>
      </div>
      <div className="prose prose-invert max-w-none">
        {children}
      </div>
    </div>
  );
};

export default Section;
