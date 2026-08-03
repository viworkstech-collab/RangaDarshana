import { useLanguage } from "../../i18n/LanguageContext";

function Gallery() {
  const { language } = useLanguage();

  const categories = [
    { title: "Productions", en: "Behind the scenes and on-stage moments", kn: "ನಾಟಕ ತೆರೆ" },
    { title: "Performances", en: "Live theatre experiences and audience engagement", kn: "ಪ್ರದರ್ಶನಗಳು" },
    { title: "Events", en: "Workshops, rehearsals, and community gatherings", kn: "ಕಾರ್ಯಕ್ರಮಗಳು" },
    { title: "Rehearsals", en: "The art of preparation and artistic collaboration", kn: "ಅಭ್ಯಾಸ" },
    { title: "Awards", en: "Recognition and accolades throughout our history", kn: "ಪುರಸ್ಕಾರಗಳು" },
    { title: "Community", en: "Moments with audiences and fellow artists", kn: "ಸಮುದಾಯ" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white">
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#2B2B2B] mb-6">
          {language === "en" ? "Gallery" : "ದೃಶ್ಯ ಸಂಗ್ರಹ"}
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {categories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group">
              <div className="h-40 bg-gradient-to-b from-[#D4A04E] to-[#8C6239] group-hover:from-[#B8860B] group-hover:to-[#6B5137] transition-colors" />
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-[#2B2B2B] mb-3">{category.title}</h3>
                <p className="text-[#5A4C47]">{language === "en" ? category.en : category.kn}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gallery;