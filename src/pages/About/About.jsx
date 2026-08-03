import { useLanguage } from "../../i18n/LanguageContext";

function About() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white">
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#2B2B2B] mb-6">
          {language === "en" ? "Our Story" : "ನಮ್ಮ ಕಥೆ"}
        </h1>
        <p className="text-lg text-[#8C6239] mb-12 max-w-3xl">
          {language === "en"
            ? "Since 1987, Ranga Darshana has been preserving the soul of Kannada theatre through dedicated artistic practice and cultural stewardship."
            : "1987ರಿಂದ, ರಂಗದರ್ಶನ ಕನ್ನಡ ನಾಟಕದ ಆತ್ಮವನ್ನು ಸಂರಕ್ಷಿಸುತ್ತಿದೆ."}
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#2B2B2B] mb-4">
              {language === "en" ? "Our Mission" : "ನಮ್ಮ ಲಕ್ಷ್ಯ"}
            </h2>
            <p className="text-[#5A4C47] leading-relaxed">
              {language === "en"
                ? "To nurture Kannada theatre as a living, evolving art form that honors tradition while embracing innovation."
                : "ಕನ್ನಡ ನಾಟಕವನ್ನು ಜೀವಂತವಾದ, ವಿಕಸನಶೀಲ ಕಲೆಯಾಗಿ ಪೋಷಿಸುವುದು."}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#2B2B2B] mb-4">
              {language === "en" ? "Our Vision" : "ನಮ್ಮ ದೃಷ್ಟಿ"}
            </h2>
            <p className="text-[#5A4C47] leading-relaxed">
              {language === "en"
                ? "A vibrant ecosystem where Kannada theatre thrives and contemporary productions coexist with classical forms."
                : "ಕನ್ನಡ ನಾಟಕವು ಅಭಿವೃದ್ಧಿ ಹೊಂದಿದ ಸಮಾಜವನ್ನು ನಮ್ಮ ದೃಷ್ಟಿ."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;