import { useLanguage } from "../../i18n/LanguageContext";

function Events() {
  const { language } = useLanguage();

  const upcomingEvents = [
    { date: "Aug 15, 2026", title: "Kaadina Haadu Encore", en: "Special performance celebrating Independence Day", kn: "ಸ್ವಾತಂತ್ರ್ಯ ದಿವಸ ಪ್ರದರ್ಶನ" },
    { date: "Sep 5, 2026", title: "Workshop on Kannada Theatre", en: "Interactive session with renowned directors", kn: "ಕನ್ನಡ ನಾಟಕ ಕಾರ್ಯಶಾಲೆ" },
    { date: "Oct 20, 2026", title: "Yakshagana Adaptation Launch", en: "Premiere of our new classical adaptation", kn: "ಹೊಸ ಸಿನೆಮೈ ನಾಟಕ" },
    { date: "Nov 10, 2026", title: "Community Theatre Festival", en: "Celebrating local and independent theatre", kn: "ಸಮುದಾಯ ನಾಟಕ ಮೇಳ" },
    { date: "Dec 1, 2026", title: "Annual Gala Night", en: "Celebration of arts with patrons and partners", kn: "ವಾರ್ಷಿಕ ಉತ್ಸವ" },
    { date: "Dec 26, 2026", title: "New Production Announcement", en: "Unveiling our exciting 2027 schedule", kn: "2027 ನೇ ವರ್ಷದ ಯೋಜನೆ" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white">
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#2B2B2B] mb-6">
          {language === "en" ? "Events" : "ಕಾರ್ಯಕ್ರಮಗಳು"}
        </h1>
        <div className="space-y-6 mt-12">
          {upcomingEvents.map((event, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#D4A04E]">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-[#D4A04E] font-bold text-sm mb-2">{event.date}</p>
                  <h3 className="text-2xl font-serif font-bold text-[#2B2B2B] mb-2">{event.title}</h3>
                  <p className="text-[#5A4C47]">{language === "en" ? event.en : event.kn}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Events;