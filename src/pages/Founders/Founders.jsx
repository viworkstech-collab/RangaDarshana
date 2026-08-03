import { useLanguage } from "../../i18n/LanguageContext";

function Founders() {
  const { language } = useLanguage();

  const founders = [
    { en: { name: "Girish Kasaravalli", role: "Founder & Director" }, kn: { name: "ಗಿರೀಶ ಕಸರವಳ್ಳಿ", role: "ಸಂಸ್ಥಾಪಕ" } },
    { en: { name: "Lakshmi Reddy", role: "Co-Founder & Artistic Advisor" }, kn: { name: "ಲಕ್ಷ್ಮಿ ರೆಡ್ಡಿ", role: "ಸಹ-ಸಂಸ್ಥಾಪಕ" } },
    { en: { name: "Prakash Rao", role: "Co-Founder & Music Director" }, kn: { name: "ಪ್ರಕಾಶ ರಾಓ", role: "ಸಹ-ಸಂಸ್ಥಾಪಕ" } }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white">
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#2B2B2B] mb-6">
          {language === "en" ? "Our Founders" : "ನಮ್ಮ ಸಂಸ್ಥಾಪಕರು"}
        </h1>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {founders.map((founder, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-b from-[#D4A04E] to-[#8C6239]" />
              <div className="p-6">
                <h2 className="text-2xl font-serif font-bold text-[#2B2B2B] mb-2">
                  {language === "en" ? founder.en.name : founder.kn.name}
                </h2>
                <p className="text-[#D4A04E] font-semibold">
                  {language === "en" ? founder.en.role : founder.kn.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Founders;
