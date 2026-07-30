import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import Logo from "../ui/Logo";
import navigation from "../../data/navigation";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition-colors ${
                    isActive
                      ? "text-amber-600"
                      : "text-gray-700 hover:text-amber-600 hover:scale-105"
                  }`
                }
              >
                {t[item.key]}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="rounded-lg border border-amber-600 px-5 py-2 text-sm font-semibold text-amber-600 transition hover:bg-amber-600 hover:text-white"
          >
            {language === "en" ? "EN | ಕನ್ನಡ" : "ಕನ್ನಡ | EN"}
          </button>
          

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-2xl md:hidden"
          >
            ☰
          </button>
        </div>
      </nav>
      
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}

export default Navbar;