import React, { useState, useEffect } from "react";
import About from "./About/About";
import ProfileData from "../ProfileData/ProfileData";
import { Route, Routes } from "react-router";
import Experiance from "./Experiance/Experiance";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Navbar from "./../Navbar/Navbar"

export default function Index() {
  const [showProfile, setShowProfile] = useState(true);

  useEffect(() => {
    const checkWidth = () => {
      if (window.innerWidth < 950) {
        setShowProfile(false);
      } else {
        setShowProfile(true);
      }
    };

    checkWidth(); // اجرا در لود اولیه
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);
  return (
    <div className="flex items-center center justify-center gap-2 mt-20">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/experiance" element={<Experiance />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {showProfile ? <ProfileData /> : <Navbar/>}
    </div>
  );
}
