import HeadingDecoration from "./../../HeadingDecoration/HeadingDecoration";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
      className={`
    max-w-2xl h-96 shadow-2xl rounded-xl p-6 backdrop-blur-lg border border-white/20
    transition-all duration-500 ease-out
    ${show ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
  `}
    >
      <div className="flex">
        <HeadingDecoration />
        <h2 className="absolute text-xl font-semibold text-right mt-1 ml-6">
          {t("Contact")}
        </h2>
      </div>
      <form className="mt-4 space-y-4">
        <input
          type="text"
          placeholder={t("Your name")}
          className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-white/30"
        />
        <input
          type="email"
          placeholder={t("Your email")}
          className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-white/30"
        />
        <textarea
          rows="4"
          placeholder={t("Your message")}
          className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-white/40 resize-none focus:outline-none focus:border-white/30"
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-white/20 py-2 text-white font-medium hover:bg-white/30 transition"
        >
          {t("Send message")}
        </button>
      </form>
    </div>
  );
}
