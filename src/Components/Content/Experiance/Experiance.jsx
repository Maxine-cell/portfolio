import React from "react";
import HeadingDecoration from "./../../HeadingDecoration/HeadingDecoration";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Experiance() {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div
      className={`
    max-w-2xl shadow-2xl rounded-xl h-96 p-6 backdrop-blur-lg border border-white/20
    transition-all duration-500 ease-out
    ${show ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
  `}
    >
      <div className="flex">
        <HeadingDecoration />
        <h2 className="absolute text-xl font-semibold text-right mt-1 ml-6">
          {t("Experience")}
        </h2>
      </div>
      <section className="max-h-[300px]  overflow-y-auto">
        <div className="mt-4">
          <h3 className="text-base font-semibold">
            Frontend Developer – PantoHealth (Germany)
          </h3>
          <p className="text-sm opacity-70 mt-1">
            Railway Monitoring Platform — Duration: 4 months
          </p>
        </div>

        {/* Experience Details */}
        <ul className="mt-4 space-y-2 text-sm leading-relaxed opacity-90 max-h-[260px] pr-2">
          <li>
            •{" "}
            {t(
              "Worked on a real-world railway monitoring platform used for managing and visualizing train-related data"
            )}
          </li>
          <li>
            •{" "}
            {t(
              "Refactored complex React components to improve readability and maintainability"
            )}
          </li>
          <li>
            •{" "}
            {t(
              "Improved notification and state handling using better component structure and state management patterns"
            )}
          </li>
          <li>
            •{" "}
            {t(
              "Collaborated with the team to enhance UI consistency and user experience"
            )}
          </li>
          <li>
            •{" "}
            {t(
              "Focused on performance, security considerations, and backward compatibility"
            )}
          </li>
          <li>• {t("Helped improve UI scalability for future features")}</li>
        </ul>
        <div className="my-4 h-px w-full bg-white/10" />
        <div className="mt-6">
          <h3 className="text-base font-semibold">
            Intern Developer — Owj Company (Iran)
          </h3>
          <p className="text-sm opacity-70 mt-1">
            Software Development Internship — Duration: 6 months
          </p>
        </div>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed opacity-90 max-h-[260px] overflow-y-auto pr-2">
          <li>
            •{" "}
            {t(
              "Gained a strong foundation in programming logic and problemb solving concepts"
            )}
          </li>
          <li>
            •{" "}
            {t(
              "Worked with C# to implement basic algorithms and application logic"
            )}
          </li>
          <li>
            •{" "}
            {t(
              "Learned how to break down problems and design structured solutions"
            )}
          </li>
          <li>
            •{" "}
            {t(
              "Improved understanding of clean code principles and code readability"
            )}
          </li>
          <li>
            •{" "}
            {t(
              "Experienced working in a real team environment and following development workflows"
            )}
          </li>
        </ul>
      </section>
    </div>
  );
}
