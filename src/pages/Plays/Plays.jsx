import { useLanguage } from "../../i18n/LanguageContext";

function Plays() {
  const { language } = useLanguage();

  const plays = [
    { title: "Neeruli", en: "A folk tragedy about love and loss", kn: "ಪ್ರೇಮ ಮತ್ತು ನಷ್ಟದ ನೃತ್ಯ", year: "1992" },
    { title: "Kaadina Haadu", en: "A musical exploration of Kannada poetry", kn: "ಕನ್ನಡ ಕವಿತೆಯ ಸಂಗೀತ", year: "2001" },
    { title: "Yakshagana", en: "A contemporary interpretation of classical form", kn: "ಕ್ಲಾಸಿಕಲ ರೂಪದ ಅರ್ಹನಾದ ಪರಿವರ್ತನೆ", year: "2008" },
    { title: "Kanoora", en: "A political drama set in colonial times", kn: "ಬ್ರಿಟಿಷ ಯುಗದ ರಾಜನೈತಿಕ ನಾಟಕ", year: "2015" },
    { title: "Mohan Manjari", en: "A romantic comedy of errors", kn: "ಆತ್ಮೀಯ ಹಾಸ್ಯ", year: "2019" },
    { title: "Aagathakshana", en: "An experimental piece on time and memory", kn: "ಸಮಯ ಮತ್ತು ಸ್ಮೃತಿಯ ಆಲೋಚನೆ", year: "2023" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white">
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#2B2B2B] mb-6">
          {language === "en" ? "Our Plays" : "ನಮ್ಮ ನಾಟಕಗಳು"}
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {plays.map((play, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="h-32 bg-gradient-to-b from-[#D4A04E] to-[#B8860B]" />
              <div className="p-6">
                <p className="text-[#D4A04E] text-sm font-semibold mb-2">{play.year}</p>
                <h3 className="text-2xl font-serif font-bold text-[#2B2B2B] mb-3">{play.title}</h3>
                <p className="text-[#5A4C47]">{language === "en" ? play.en : play.kn}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Plays;
