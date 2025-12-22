import React from "react";
import About from "./About/About";
import ProfileData from "../ProfileData/ProfileData";
import { Route, Routes } from "react-router";
import Experiance from "./Experiance/Experiance";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";

export default function Index() {
  return (
    <div className="flex items-center justify-center gap-2 mt-20">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/experiance" element={<Experiance />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ProfileData />
    </div>
  );
}
