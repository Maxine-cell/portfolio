import React, { useEffect , useState} from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";
import { useTranslationStore } from "../../Stores/Translation.ts";

export default function Header({ onChange }) {
  const { i18n } = useTranslation();
  const { language, toggleLanguage } = useTranslationStore();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

    const [showNavbar, setShowNavbar] = useState(true);
  
    useEffect(() => {
      const checkWidth = () => {
        if (window.innerWidth < 950) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      };
  
      checkWidth(); // اجرا در لود اولیه
      window.addEventListener("resize", checkWidth);
  
      return () => window.removeEventListener("resize", checkWidth);
    }, []);

  return (
    <header className="header flex justify-between items-center p-5">
      <div className="flex items-center gap-4">
        <Logo />

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
      </div>
      {showNavbar &&  <Navbar />}
     
    </header>
  );
}
