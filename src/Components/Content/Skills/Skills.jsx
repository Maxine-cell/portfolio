import React from "react";
import HeadingDecoration from "./../../HeadingDecoration/HeadingDecoration";
import { useState, useEffect } from "react";

export default function Skills() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
      className={`
    max-w-xl shadow-2xl rounded-xl p-6 backdrop-blur-lg border border-white/20
    transition-all duration-500 ease-out
    ${show ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
  `}
    >
      <div className="flex">
        <HeadingDecoration />
        <h2 className="absolute text-xl font-semibold text-right mt-1 ml-6">
          Skills
        </h2>
      </div>


      <div>
        <h3 className="text-sm font-medium opacity-80 pt-4 pb-2">Frontend</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-sm rounded-full border border-white/20">
            React
          </span>
          <span className="px-3 py-1 text-sm rounded-full border border-white/20">
            JavaScript
          </span>
          <span className="px-3 py-1 text-sm rounded-full border border-white/20">
            Tailwind
          </span>
           <span className="px-3 py-1 text-sm rounded-full border border-white/20">
            Bootstrap
          </span>
           <span className="px-3 py-1 text-sm rounded-full border border-white/20">
            Tailwind
          </span>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium opacity-80 pt-4 pb-2">Tools</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-sm rounded-full border border-white/20">
            Git
          </span>
          <span className="px-3 py-1 text-sm rounded-full border border-white/20">
            Figma
          </span>
           <span className="px-3 py-1 text-sm rounded-full border border-white/20">
            Clickup
          </span> <span className="px-3 py-1 text-sm rounded-full border border-white/20">
            Figma
          </span> <span className="px-3 py-1 text-sm rounded-full border border-white/20">
            Figma
          </span>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}
