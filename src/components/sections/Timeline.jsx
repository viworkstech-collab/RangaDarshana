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

function Timeline() {
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

          <div className="absolute top-0 left-7 w-[2px] h-full bg-[#D4A04E]" />

          <div className="space-y-12">

            {timeline.map((item, idx) => (
              <div key={idx} className="relative pl-20">

                <div className="absolute left-0 top-1 w-16 h-16 bg-white rounded-full border-4 border-[#D4A04E] flex items-center justify-center">
                  <span className="font-serif text-[#D4A04E] text-xl font-bold">
                    {item.year}
                  </span>
                </div>

                <div className="pt-2">

                  <h3 className="font-serif text-2xl text-[#2B2B2B]">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-2 max-w-2xl">
                    {item.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Timeline;
