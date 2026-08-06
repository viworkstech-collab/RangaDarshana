import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";

function Logo() {
  const { language } = useLanguage();
  return (
    <Link to="/" className="flex items-center gap-4 group">
      <img
        src="/logo.png"
        alt="Ranga Darshana Logo"
        className="h-14 w-14 object-contain"
      />

      <div className="hidden sm:block">
        <h1 className="text-2xl font-serif font-bold text-[#7B2D26] leading-tight">
           {language === "en" ? "Ranga Darshana" : "ರಂಗ ದರ್ಶನ"}
        </h1>
      </div>
    </Link>
  );
}

export default Logo;