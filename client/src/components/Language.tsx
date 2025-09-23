// src/components/LanguageApp.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setLanguage } from "../store/slice/language";
const translations = {
  vi: {
    academy: "Học viện Rikkei",
  },
  en: {
    academy: "Rikkei Academy",
  },
};
export default function LanguageApp() {
  const dispatch = useDispatch();
  const currentLang = useSelector((state: RootState) => state.language.current);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLanguage(e.target.value as "en" | "vi"));
  };
  return (
    <div>
      <select
        value={currentLang}
        onChange={handleChange}
      >
        <option value="vi">Vietnamese</option>
        <option value="en">English</option>
      </select>

      <h2 style={{ marginTop: "20px" }}>{translations[currentLang].academy}</h2>
    </div>
  );
}
