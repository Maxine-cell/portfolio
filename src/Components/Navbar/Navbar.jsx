import React from "react";
import "./Navbar.css";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar rounded-3xl">
      <ul className="navbar__list flex gap-5">
         <li
          className="navbar__item"
          data-tooltip-id="products"
          data-tooltip-content="See Products"
        >
          <Link to="/contact">Contact</Link>
        </li>
        <li
          className="navbar__item"
          data-tooltip-id="products"
          data-tooltip-content="See Products"
        >
          <Link to="/experiance">Experiance</Link>
        </li>
        <li
          className="navbar__item"
          data-tooltip-id="settings"
          data-tooltip-content="Experiance"
        >
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `navbar__item ${isActive ? "navbar__item--active" : ""}`
            }
          >
            Skills
          </NavLink>
        </li>
        <li
          className="navbar__item"
          data-tooltip-id="about"
          data-tooltip-content="About Me"
        >
          <Link to="/">About me</Link>
        </li>
      </ul>

      <Tooltip id="home" place="bottom" />
      <Tooltip id="products" place="bottom" />
      <Tooltip id="settings" place="bottom" />
      <Tooltip id="about" place="bottom" />
    </nav>
  );
}
