import React, { useState, useEffect } from "react";
import HeadingDecoration from "./../../HeadingDecoration/HeadingDecoration";

export default function About() {
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
          About me
        </h2>
      </div>
      <p className="max-h-[320px] text-white-500 mt-3 overflow-y-auto">
        I’m a Junior Frontend Developer with hands-on experience in building
        modern, responsive web applications using React and Tailwind. I’ve
        worked on real-world projects including video streaming platforms and
        AI-powered applications, and I enjoy turning complex ideas into clean,
        user-friendly interfaces. Currently, I’m focused on improving my
        frontend architecture skills and building scalable UI components.
      </p>
    </div>
  );
}
