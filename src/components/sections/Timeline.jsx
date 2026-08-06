import { useLanguage } from "../../i18n/LanguageContext";

function Timeline() {
  const { t } = useLanguage();
const timeline = [
  {
    year: "1987",
    title: "Founded in Bengaluru",
    desc: "First production: Kadina Kathegalu, staged at Ravindra Kalakshetra.",
  },
  {
    year: "1994",
    title: "First National Tour",
    desc: "Performed across five Indian cities with Neeruli.",
  },
  {
    year: "2003",
    title: "Ranga Darshana Studio Opens",
    desc: "A permanent 120-seat black box theatre established.",
  },
  {
    year: "2011",
    title: "Karnataka Rajyotsava Recognition",
    desc: "State honour for contributions to Kannada performing arts.",
  },
  {
    year: "2018",
    title: "Sangeet Natak Akademi Award",
    desc: "Awarded for lifetime contribution to theatre.",
  },
  {
    year: "2023",
    title: "Kaadina Haadu Premieres",
    desc: "One of the most successful Kannada productions in recent years.",
  },
];

  return (
    <section className="bg-[#FAF8F5] py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-[1px] bg-[#C89A53]" />
          <p className="uppercase tracking-[6px] text-[#8C6239] text-sm">
            Legacy
          </p>
        </div>

        <h2 className="font-serif text-6xl text-[#2B2B2B] mb-20">
          Thirty-six years, one stage at a time.
        </h2>

        <div className="relative">

          <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-[#D8C8AE]" />

          {timeline.map((item) => (
            <div
              key={item.year}
              className="grid md:grid-cols-[120px_1fr] gap-12 relative mb-20"
            >
              <div className="relative">

                <div className="absolute left-[34px] top-3 w-4 h-4 rounded-full bg-[#C89A53]" />

                <h3 className="pl-16 text-3xl font-serif text-[#7B2D26]">
                  {item.year}
                </h3>

              </div>

              <div>

                <h3 className="font-serif text-3xl mb-3 text-[#2B2B2B]">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-lg leading-8">
                  {item.desc}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Timeline;