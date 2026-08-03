import { useLanguage } from "../../i18n/LanguageContext";
import { Link } from "react-router-dom";

function NotFound() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white flex items-center justify-center">
      <div className="text-center px-6">
        <div className="text-9xl font-serif font-bold text-[#D4A04E] mb-4">404</div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2B2B2B] mb-4">
          {language === "en" ? "Page Not Found" : "ಪುಟ ಸಿದ್ಧವಿಲ್ಲ"}
        </h1>
        <p className="text-lg text-[#8C6239] mb-8 max-w-md mx-auto">
          {language === "en"
            ? "The page you're looking for doesn't exist. Let's get you back to the stage."
            : "ನೀವು ಹುಡುಕುತ್ತಿರುವ ಪುಟ ಕಂಡುಬಂದಿಲ್ಲ."}
        </p>
        <Link to="/" className="inline-block px-8 py-3 bg-[#D4A04E] text-white rounded-full font-semibold hover:bg-[#B8860B] transition-colors">
          {language === "en" ? "Back to Home" : "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ"}
        </Link>
      </div>
    </div>
  );
}

export default NotFound;