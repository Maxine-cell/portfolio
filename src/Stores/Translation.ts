import { create } from "zustand";
import { persist } from "zustand/middleware";

type TranslationState = {
  language: "en" | "de";
  toggleLanguage: () => void;
};

export const useTranslationStore = create<TranslationState>()(
  persist(
    (set) => ({
      language: "en",
      toggleLanguage: () =>
        set((state) => ({
          language: state.language === "en" ? "de" : "en",
        })),
    }),
    {
      name: "translation-storage",
    }
  )
);
