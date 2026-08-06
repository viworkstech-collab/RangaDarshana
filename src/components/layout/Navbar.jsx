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
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">  
      <nav className="mx-auto flex h-20 items-center justify-between px-8">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="flex-1 flex justify-center ml-8">
        <ul 
        id="desktop-nav"
        className="hidden min-[1200px]:flex flex-1 items-center justify-center gap-8 ml-40">  
          {navigation.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path}>
                {({ isActive }) => (
    <div className="relative group font-medium text-sm tracking-wide">
      <span
        className={
          isActive
            ? "text-[#D4A04E]"
            : "text-[#2B2B2B] group-hover:text-[#D4A04E]"
        }
      >
        {t.nav?.[item.key] || item.name?.[language] || item.name?.en}
      </span>

      <span
        className={`absolute -bottom-1 left-0 h-0.5 bg-[#D4A04E] transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </div>
  )}

            
              </NavLink>
            </li>
          ))}
        </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="rounded-full border-2 border-[#D4A04E] px-6 py-2 text-xs font-semibold text-[#D4A04E] transition-all duration-300 hover:bg-[#D4A04E] hover:text-white shadow-sm hover:shadow-md"
          >
            {language === "en" ? "EN | ಕನ್ನಡ" : "ಕನ್ನಡ | EN"}
          </button>
          

          {/* Mobile Menu Button */}
          <button
          id="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(true)}
            className="min-[1200px]:hidden text-2xl text-[#2B2B2B] hover:text-[#D4A04E] transition-colors"
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