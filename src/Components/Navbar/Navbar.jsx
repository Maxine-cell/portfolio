import React, { useEffect } from "react";
import "./Navbar.css";
import { Tooltip } from "react-tooltip";
import { NavLink } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";
import { useTranslationStore } from "../../Stores/Translation.ts";

export default function Navbar() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const { language, toggleLanguage } = useTranslationStore();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <nav className="navbar rounded-3xl flex">
      <Menu as="div" className="relative inline-block">
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20">
          {language === "en" ? "English" : "German"}
          <ChevronDownIcon className="size-4 text-gray-400" />
        </MenuButton>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-34 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
        >
          <div className="">
            <MenuItem>
              <button
                onClick={() => toggleLanguage()}
                className="block w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-white/10"
              >
                English
              </button>
            </MenuItem>

            <MenuItem>
              <button
                onClick={() => toggleLanguage()}
                className="block w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-white/10"
              >
                German
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
      <ul className="navbar__list flex gap-5">
        <li
          className="navbar__item"
          data-tooltip-id="products"
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
          data-tooltip-id="products"
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
          data-tooltip-id="settings"
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
          data-tooltip-id="about"
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

      <Tooltip id="home" place="bottom" />
      <Tooltip id="products" place="bottom" />
      <Tooltip id="settings" place="bottom" />
      <Tooltip id="about" place="bottom" />
    </nav>
  );
}
