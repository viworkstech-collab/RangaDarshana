import { NavLink } from "react-router-dom";
import navigation from "../../data/navigation";
import { useLanguage } from "../../i18n/LanguageContext";

function MobileMenu({ isOpen, onClose }) {
  const { language, toggleLanguage, t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 bg-white p-6">
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="text-3xl text-gray-700 hover:text-[#D4A04E]"
        >
          ×
        </button>
      </div>

      <nav className="mt-10">
        <ul className="space-y-6">
          {navigation.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={onClose}
                                className={({ isActive }) =>
                  `block text-lg font-medium transition ${
                    isActive
                      ? "text-[#D4A04E]"
                      : "text-gray-700 hover:text-[#D4A04E]"
                  }`
                }
              >
                {t.nav?.[item.key] ||
                  item.name?.[language] ||
                  item.name?.en}
              </NavLink>
            </li>
          ))}
        </ul>


        <button
          onClick={toggleLanguage}
          className="mt-8 w-full rounded-md border border-amber-600 py-2 text-amber-600 hover:bg-amber-600 hover:text-white transition"
        >
          {language === "en" ? "EN | ಕನ್ನಡ" : "ಕನ್ನಡ | EN"}
        </button>
      </nav>
    </div>
  );
}

export default MobileMenu;