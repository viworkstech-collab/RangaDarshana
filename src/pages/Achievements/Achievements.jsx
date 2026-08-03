import { useLanguage } from "../../i18n/LanguageContext";

function Achievements() {
  const { language } = useLanguage();

  const achievements = [
    { year: "2023", title: "Best Theatre Production Award", en: "Recognized for Kaadina Haadu production", kn: "ಕಾಡಿನ ಹಾಡಿನ ಲಾಭ" },
    { year: "2022", title: "Cultural Excellence Award", en: "State recognition for arts contribution", kn: "ರಾಜ್ಯ ಸಂಸ್ಕೃತಿ ಪುರಸ್ಕಾರ" },
    { year: "2021", title: "Community Theatre Award", en: "For significant community engagement", kn: "ಸಮುದಾಯ ನೃತ್ಯ ಪುರಸ್ಕಾರ" },
    { year: "2018", title: "Sangeet Natak Akademi Award", en: "Lifetime contribution to theatre arts", kn: "ಜೀವನ ಕಾಲಿನ ಅವದಾನ" },
    { year: "2015", title: "National Theatre Festival", en: "Participated and won Best Direction", kn: "ರಾಷ್ಟ್ರೀಯ ನಾಟಕ ಮೇಳ ವಿಜೇತ" },
    { year: "2011", title: "Karnataka Rajyotsava Award", en: "State honour for cultural contributions", kn: "ರಾಜ್ಯೋತ್ಸವ ಪುರಸ್ಕಾರ" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white">
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#2B2B2B] mb-6">
          {language === "en" ? "Achievements" : "ಸಾಧನೆಗಳು"}
        </h1>
        <div className="space-y-6 mt-12">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#D4A04E] hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-[#D4A04E] font-bold text-sm mb-2">{achievement.year}</p>
                  <h3 className="text-2xl font-serif font-bold text-[#2B2B2B] mb-2">{achievement.title}</h3>
                  <p className="text-[#5A4C47]">{language === "en" ? achievement.en : achievement.kn}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Achievements;
