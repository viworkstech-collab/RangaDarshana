import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero-bg.jpg";
import { useLanguage } from "../../i18n/LanguageContext";

function Hero() {
  const { language } = useLanguage();

  return (
    <section
      className="relative h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-white/70 via-white/10 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-2xl">

          {/* Small heading */}
          <p className="uppercase tracking-[0.35em] text-[#D4A04E] text-sm mb-6">
            {language === "en"
              ? "THEATRE ENSEMBLE • EST. 1987 • BENGALURU"
              : "ನಾಟಕ ಸಂಘ • ಸ್ಥಾಪನೆ 1987 • ಬೆಂಗಳೂರು"}
          </p>

          {/* Logo / Name */}
          <h1 className="text-white leading-none font-serif">
            <span className="block text-7xl lg:text-8xl">
              Ranga
            </span>

            <span className="block text-7xl lg:text-8xl italic text-[#D4A04E]">
              Darshana
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-xl mt-10 leading-9 max-w-xl">
            {language === "en"
              ? "Celebrating the art of Kannada theatre through stories, culture and performance — a slow, luminous craft, staged since 1987."
              : "ಕಥೆಗಳು, ಸಂಸ್ಕೃತಿ ಮತ್ತು ಪ್ರದರ್ಶನಗಳ ಮೂಲಕ ಕನ್ನಡ ರಂಗಭೂಮಿಯ ಕಲೆಯನ್ನು ಸಂಭ್ರಮಿಸುತ್ತಾ — 1987ರಿಂದ ರಂಗದ ಮೇಲೆ ಮೂಡಿಬರುತ್ತಿರುವ ಒಂದು ನಿಧಾನವಾದ, ಪ್ರಕಾಶಮಾನವಾದ ಕಲಾ ಪಯಣ."}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 mt-12">

            <Link
              to="/plays"
              className="bg-[#D4A04E] text-black px-9 py-4 rounded-full font-medium hover:scale-105 transition"
            >
              {language === "en"
                ? "Explore Our Plays"
                : "ನಮ್ಮ ನಾಟಕಗಳನ್ನು ನೋಡಿ"}
            </Link>

            <Link
              to="/videos"
              className="border border-white text-white px-9 py-4 rounded-full hover:bg-white hover:text-black transition"
            >
              {language === "en"
                ? "Watch Performances"
                : "ಪ್ರದರ್ಶನಗಳನ್ನು ವೀಕ್ಷಿಸಿ"}
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;