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
    max-w-xl shadow-2xl rounded-xl h-96 p-6 backdrop-blur-lg border border-white/20
    transition-all duration-500 ease-out
    ${show ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
  `}
    >
      <div className="flex">
        <HeadingDecoration />
        <h2 className="absolute text-xl font-semibold text-right mt-1 ml-6">
          {t("Experiance")}
        </h2>
      </div>
         <div className="mt-4">
        <h3 className="text-base font-semibold">
          Frontend Developer – PantoHealth
        </h3>
        <p className="text-sm opacity-70 mt-1">
          Railway Monitoring Platform
        </p>
      </div>

      {/* Experience Details */}
      <ul className="mt-4 space-y-2 text-sm leading-relaxed opacity-90 max-h-[260px] overflow-y-auto pr-2">
        <li>
          • Refactored complex UI logic in an existing React codebase
        </li>
        <li>
          • Improved notification handling by restructuring components and state management
        </li>
        <li>
          • Reduced coupling between UI and logic, making future changes easier
        </li>
        <li>
          • Ensured backward compatibility while improving user experience
        </li>
      </ul>
    {/* </div> */}
    </div>
  );
}
