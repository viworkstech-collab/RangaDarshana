import { useLanguage } from "../../i18n/LanguageContext";

function Timeline() {
  const { language } = useLanguage();

  const timeline = [
    {
      year: "1987",
      titleEn: "Founded in Bengaluru",
      titleKn: "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಸ್ಥಾಪನೆ",
      descEn:
        "First production: Kadina Kathegalu, staged at Ravindra Kalakshetra.",
      descKn:
        "ಮೊದಲ ನಾಟಕ: ಕಾಡಿನ ಕಥೆಗಳು, ರವೀಂದ್ರ ಕಲಾಕ್ಷೇತ್ರದಲ್ಲಿ ಪ್ರದರ್ಶನಗೊಂಡಿತು.",
    },
    {
      year: "1994",
      titleEn: "First National Tour",
      titleKn: "ಮೊದಲ ರಾಷ್ಟ್ರೀಯ ಪ್ರವಾಸ",
      descEn:
        "Performed across five Indian cities with Neeruli.",
      descKn:
        "ನೀರುಳಿಯೊಂದಿಗೆ ಭಾರತದ ಐದು ನಗರಗಳಲ್ಲಿ ಪ್ರದರ್ಶನ ನೀಡಲಾಯಿತು.",
    },
    {
      year: "2003",
      titleEn: "Ranga Darshana Studio Opens",
      titleKn: "ರಂಗ ದರ್ಶನ ಸ್ಟುಡಿಯೋ ಆರಂಭ",
      descEn:
        "A permanent 120-seat black box theatre established.",
      descKn:
        "120 ಆಸನಗಳ ಶಾಶ್ವತ ಬ್ಲ್ಯಾಕ್ ಬಾಕ್ಸ್ ರಂಗಮಂದಿರ ಸ್ಥಾಪಿಸಲಾಯಿತು.",
    },
    {
      year: "2011",
      titleEn: "Karnataka Rajyotsava Recognition",
      titleKn: "ಕರ್ನಾಟಕ ರಾಜ್ಯೋತ್ಸವ ಗೌರವ",
      descEn:
        "State honour for contributions to Kannada performing arts.",
      descKn:
        "ಕನ್ನಡ ಪ್ರದರ್ಶನ ಕಲೆಗಳಿಗೆ ನೀಡಿದ ಕೊಡುಗೆಗಾಗಿ ರಾಜ್ಯ ಗೌರವ.",
    },
    {
      year: "2018",
      titleEn: "Sangeet Natak Akademi Award",
      titleKn: "ಸಂಗೀತ ನಾಟಕ ಅಕಾಡೆಮಿ ಪ್ರಶಸ್ತಿ",
      descEn:
        "Awarded for lifetime contribution to theatre.",
      descKn:
        "ರಂಗಭೂಮಿಗೆ ಜೀವಮಾನಪರ್ಯಂತ ನೀಡಿದ ಕೊಡುಗೆಗಾಗಿ ಪ್ರಶಸ್ತಿ.",
    },
    {
      year: "2023",
      titleEn: "Kaadina Haadu Premieres",
      titleKn: "ಕಾಡಿನ ಹಾಡು ಪ್ರಥಮ ಪ್ರದರ್ಶನ",
      descEn:
        "One of the most successful Kannada productions in recent years.",
      descKn:
        "ಇತ್ತೀಚಿನ ವರ್ಷಗಳಲ್ಲಿ ಅತ್ಯಂತ ಯಶಸ್ವಿಯಾದ ಕನ್ನಡ ನಾಟಕ ಪ್ರದರ್ಶನಗಳಲ್ಲಿ ಒಂದು.",
    },
  ];

  return (
    <section className="bg-[#FAF8F5] py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-[1px] bg-[#C89A53]" />

          <p className="uppercase tracking-[6px] text-[#8C6239] text-sm">
            {language === "en" ? "LEGACY" : "ಪರಂಪರೆ"}
          </p>
        </div>

        <h2 className="font-serif text-6xl text-[#2B2B2B] mb-20">
          {language === "en"
            ? "Thirty-six years, one stage at a time."
            : "ಮೂವತ್ತಾರು ವರ್ಷಗಳು, ಒಂದೊಂದು ಹೆಜ್ಜೆಯಾಗಿ."
          }
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
                  {language === "en"
                    ? item.titleEn
                    : item.titleKn
                  }
                </h3>

                <p className="text-gray-600 text-lg leading-8">
                  {language === "en"
                    ? item.descEn
                    : item.descKn
                  }
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