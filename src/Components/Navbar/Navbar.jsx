import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="navbar rounded-3xl flex">
      <ul className="navbar__list flex ">
        <li
          className="navbar__item"
          data-tooltip-content="See Products"
        >
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `navbar__item ${isActive ? "navbar__item--active" : ""}`
            }
          >
            {t("Contact")}
          </NavLink>
        </li>
        <li
          className="navbar__item"
          data-tooltip-content="See Products"
        >
          <NavLink
            to="/experiance"
            className={({ isActive }) =>
              `navbar__item ${isActive ? "navbar__item--active" : ""}`
            }
          >
            {t("Experiance")}
          </NavLink>
        </li>
        <li
          className="navbar__item"
          data-tooltip-content="Experiance"
        >
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `navbar__item ${isActive ? "navbar__item--active" : ""}`
            }
          >
            {t("Skills")}
          </NavLink>
        </li>
        <li
          className="navbar__item"
          data-tooltip-content="About Me"
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `navbar__item ${isActive ? "navbar__item--active" : ""}`
            }
          >
            {t("About me")}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
