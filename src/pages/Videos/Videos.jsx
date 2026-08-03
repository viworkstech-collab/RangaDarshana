import { useLanguage } from "../../i18n/LanguageContext";

function Videos() {
  const { language } = useLanguage();

  const videos = [
    { title: "Kaadina Haadu - Full Performance", year: "2023", duration: "150 min" },
    { title: "Neeruli - Excerpt from Act 2", year: "2020", duration: "45 min" },
    { title: "Documentary: 30 Years of Theatre", year: "2017", duration: "90 min" },
    { title: "Yakshagana - Classical Adaptation", year: "2019", duration: "120 min" },
    { title: "Behind the Scenes: Rehearsal Process", year: "2022", duration: "30 min" },
    { title: "Interview with Founder", year: "2021", duration: "60 min" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white">
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#2B2B2B] mb-6">
          {language === "en" ? "Videos" : "ವೀಡಿಯೊಗಳು"}
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {videos.map((video, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div className="h-40 bg-gradient-to-b from-[#2B2B2B] to-[#4A4A4A] flex items-center justify-center group-hover:bg-gradient-to-b group-hover:from-[#1B1B1B] group-hover:to-[#3A3A3A]">
                <div className="text-[#D4A04E] text-5xl">▶</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif font-bold text-[#2B2B2B] mb-3">{video.title}</h3>
                <div className="flex justify-between text-sm text-[#5A4C47]">
                  <span>{video.year}</span>
                  <span>{video.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Videos;
