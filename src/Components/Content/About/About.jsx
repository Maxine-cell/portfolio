import React, { useState, useEffect } from "react";
import HeadingDecoration from "./../../HeadingDecoration/HeadingDecoration";
import { useTranslation } from "react-i18next";

export default function About() {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
      className={`
    max-w-2xl min-w-xl h-96 shadow-2xl rounded-xl p-6 backdrop-blur-lg border border-white/20
    transition-all duration-500 ease-out
    ${show ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
  `}
    >
      {/* Header */}
      <div className="flex relative">
        <HeadingDecoration />
        <h2 className="absolute text-xl font-semibold mt-1 ml-6">
          {t("About me")}
        </h2>
      </div>

      {/* About Text */}
      <section className="max-h-[300px]  overflow-y-auto">
        <p className="text-white-500 mt-4 text-sm leading-relaxed">
          {t(
            "I’m a Junior Frontend Developer specializing in building modern, responsive web applications with React. I have hands-on experience developing real-world projects, including AI-powered tools and video streaming platforms, and have worked in both local and international team environments. I’m familiar with using AI tools in the development process and focus on building secure, performant, and user-friendly interfaces. I enjoy collaborating with teams and solving challenging problems."
          )}
        </p>
        {/* Divider */}
        <div className="my-4 h-px w-full bg-white/10" />

        {/* Education */}
        <div>
          <h3 className="text-sm font-semibold opacity-80 mb-2">{t("Education")}</h3>
          <p className="text-sm opacity-90">M.Sc. in Software Engineering</p>
        </div>

        {/* Personal Info */}
        <div className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
          <span className="opacity-70">{t("Birth Date")}</span>
          <span>27 March 2000</span>

          <span className="opacity-70">{t("Location")}</span>
          <span>Mazandaran, Iran</span>

          <span className="opacity-70">{t("Marital Status")}</span>
          <span>{t("Single")}</span>
        </div>
      </section>
    </div>
  );
}
