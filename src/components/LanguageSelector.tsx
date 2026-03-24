import React from "react";
import "./LanguageSelector.css";

interface LanguageSelectorProps {
  currentLanguage: "es" | "en";
  onLanguageChange: (language: "es" | "en") => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  return (
    <div className="language-selector">
      <button
        className={`lang-btn ${currentLanguage === "es" ? "active" : ""}`}
        onClick={() => onLanguageChange("es")}
        aria-label="Cambiar a español"
      >
        <span className="flag">🇪🇸</span>
        <span className="lang-code">ES</span>
      </button>
      <button
        className={`lang-btn ${currentLanguage === "en" ? "active" : ""}`}
        onClick={() => onLanguageChange("en")}
        aria-label="Switch to English"
      >
        <span className="flag">🇺🇸</span>
        <span className="lang-code">EN</span>
      </button>
    </div>
  );
};

export default LanguageSelector;
