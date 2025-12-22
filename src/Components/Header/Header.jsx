import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";

export default function Header({ onChange }) {
  return (
    <header className="header flex justify-between items-center p-5">
      <Logo />
      <Navbar />
    </header>
  );
}
