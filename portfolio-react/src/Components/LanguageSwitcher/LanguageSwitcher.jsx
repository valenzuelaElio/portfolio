import { useTranslation } from "react-i18next";
import './LanguageSwitcher.css'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
   <div className="lang-switcher">
    <div className="lang-btn en" onClick={() => i18n.changeLanguage("en")}>EN</div>
    <div className="lang-btn es" onClick={() => i18n.changeLanguage("es")}>ES</div>
    </div>
  );
}