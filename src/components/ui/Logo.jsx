import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#D4A04E] to-[#B8860B] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
        RD
      </div>

      <div className="hidden sm:block">
        <h1 className="text-xl font-serif font-bold text-[#2B2B2B] leading-tight">
          Rangadarshana
        </h1>
        <p className="text-xs text-[#8C6239] font-medium tracking-wide">
          Preserving Karnataka's Theatre Heritage
        </p>
      </div>
    </Link>
  );
}

export default Logo;