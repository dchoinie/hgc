import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <h2 className="text-5xl text-brand-green font-bold text-center">{title}</h2>
  );
};

export default SectionTitle;
