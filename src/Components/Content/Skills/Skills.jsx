import React from "react";
import HeadingDecoration from "./../../HeadingDecoration/HeadingDecoration";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    setShow(true);
  }, []);
  const frontendSkills = ["React", "JavaScript", "C#","Tailwind", "Bootstrap", "CSS", "HTML"];
  const tools = ["Git / GitHub / GitHub Desktop", "Figma", "React Player", "Clickup"];
  const otherSkills = ["REST API", "Responsive Design", "UI/UX Principles"];
 const renderSkills = (skills) =>
    skills.map((skill) => (
      <span
        key={skill}
        className="px-3 py-1 text-sm rounded-full border border-white/20"
      >
        {skill}
      </span>
    ));
  return (
    <div
      className={`
    max-w-xl min-w-xl shadow-2xl h-96 rounded-xl p-6 backdrop-blur-lg border border-white/20
    transition-all duration-500 ease-out
    ${show ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
  `}
    >
      <div className="flex relative mb-4">
        <HeadingDecoration />
        <h2 className="absolute text-xl font-semibold text-right mt-1 ml-6">
          {t("Skills")}
        </h2>
      </div>
      <div className="mb-4">
        <h3 className="text-sm font-medium opacity-80 pt-4 pb-2">Frontend</h3>
        <div className="flex flex-wrap gap-2">{renderSkills(frontendSkills)}</div>
      </div>
      <div className="mb-4">
        <h3 className="text-sm font-medium opacity-80 pt-4 pb-2">Tools</h3>
        <div className="flex flex-wrap gap-2">{renderSkills(tools)}</div>
      </div>
      <div className="mb-4">
        <h3 className="text-sm font-medium opacity-80 pt-4 pb-2">Other Skills</h3>
        <div className="flex flex-wrap gap-2">{renderSkills(otherSkills)}</div>
      </div>
    </div>
  );
}
