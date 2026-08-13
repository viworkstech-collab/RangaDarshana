import { useLanguage } from "../../i18n/LanguageContext";

function About() {
  const { language } = useLanguage();

  const isEnglish = language === "en";

  return (
    <>
      {/* ABOUT HERO */}
      <section className="bg-[#F8F5F0] border-b border-[#E6DED2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20">

          {/* Heading */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-[2px] bg-[#D4A04E]"></div>

            <span className="uppercase tracking-[6px] text-xs text-[#8B5E3C]">
              {isEnglish ? "ABOUT" : "ನಮ್ಮ ಬಗ್ಗೆ"}
            </span>
          </div>

          <h1 className="font-serif text-5xl lg:text-7xl leading-tight text-[#2B2B2B]">
            {isEnglish
              ? "A house for Kannada stories."
              : "ಕನ್ನಡ ಕಥೆಗಳಿಗೆ ಒಂದು ಮನೆ."}
          </h1>

          <h2 className="mt-3 text-3xl lg:text-4xl text-[#8B4E3A]">
            {isEnglish
              ? "ಕನ್ನಡ ಕಥೆಗಳಿಗೆ ಒಂದು ಮನೆ"
              : "A house for Kannada stories"}
          </h2>

          <p className="mt-10 max-w-3xl text-lg leading-10 text-gray-700">
            {isEnglish
              ? "Ranga Darshana was founded in 1987 by three friends who believed Kannada theatre deserved the same craft rigour as any classical art. Nearly four decades later, that belief still shapes every rehearsal room we open."
              : "ಕನ್ನಡ ರಂಗಭೂಮಿಗೂ ಶಾಸ್ತ್ರೀಯ ಕಲೆಯಷ್ಟೇ ಶಿಸ್ತು ಮತ್ತು ಕಲಾತ್ಮಕತೆ ಇರಬೇಕು ಎಂದು ನಂಬಿದ ಮೂವರು ಸ್ನೇಹಿತರು 1987ರಲ್ಲಿ ರಂಗ ದರ್ಶನವನ್ನು ಸ್ಥಾಪಿಸಿದರು. ಸುಮಾರು ನಾಲ್ಕು ದಶಕಗಳ ನಂತರವೂ ಆ ನಂಬಿಕೆಯೇ ನಾವು ನಡೆಸುವ ಪ್ರತಿಯೊಂದು ತಾಲೀಮು ಕೊಠಡಿಯನ್ನೂ ರೂಪಿಸುತ್ತಿದೆ."}
          </p>
        </div>
      </section>

      {/* MISSION VISION PHILOSOPHY */}
      <section className="bg-[#F8F5F0] border-b border-[#E6DED2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24 grid md:grid-cols-3 gap-16">

          {/* Mission */}
          <div>
            <h4 className="uppercase tracking-[6px] text-xs text-[#8B4E3A] mb-8">
              {isEnglish ? "MISSION" : "ಧ್ಯೇಯ"}
            </h4>

            <p className="font-serif text-3xl leading-relaxed text-[#2B2B2B]">
              {isEnglish
                ? "To keep original Kannada theatre alive as a rigorous, contemporary art form grounded in language, in place and in ensemble."
                : "ಭಾಷೆ, ನೆಲ ಮತ್ತು ತಂಡದ ಕಲಾತ್ಮಕತೆಯನ್ನು ಆಧಾರವಾಗಿಸಿಕೊಂಡು ಮೂಲ ಕನ್ನಡ ರಂಗಭೂಮಿಯನ್ನು ಸಮಕಾಲೀನ ಕಲಾರೂಪವಾಗಿ ಜೀವಂತವಾಗಿರಿಸುವುದು."}
            </p>
          </div>

          {/* Vision */}
          <div>
            <h4 className="uppercase tracking-[6px] text-xs text-[#8B4E3A] mb-8">
              {isEnglish ? "VISION" : "ದೃಷ್ಟಿಕೋನ"}
            </h4>

            <p className="font-serif text-3xl leading-relaxed text-[#2B2B2B]">
              {isEnglish
                ? "A Karnataka in which every district has a stage, and every stage carries a story told in its own voice."
                : "ಪ್ರತಿಯೊಂದು ಜಿಲ್ಲೆಗೂ ಒಂದು ರಂಗವೇದಿಕೆ ಮತ್ತು ಪ್ರತಿಯೊಂದು ವೇದಿಕೆಯೂ ತನ್ನದೇ ಧ್ವನಿಯಲ್ಲಿ ಹೇಳುವ ಒಂದು ಕಥೆಯನ್ನು ಹೊಂದಿರುವ ಕರ್ನಾಟಕವನ್ನು ನಿರ್ಮಿಸುವುದು."}
            </p>
          </div>

          {/* Philosophy */}
          <div>
            <h4 className="uppercase tracking-[6px] text-xs text-[#8B4E3A] mb-8">
              {isEnglish ? "PHILOSOPHY" : "ತತ್ತ್ವ"}
            </h4>

            <p className="font-serif text-3xl leading-relaxed text-[#2B2B2B]">
              {isEnglish
                ? "Slow rehearsal. Small ensembles. Handmade craft. The play, always, before the production."
                : "ನಿಧಾನವಾದ ತಾಲೀಮು. ಸಣ್ಣ ತಂಡಗಳು. ಕೈಯಿಂದ ರೂಪುಗೊಂಡ ಕಲಾಕೃತಿ. ನಿರ್ಮಾಣಕ್ಕಿಂತಲೂ ಸದಾ ನಾಟಕವೇ ಮೊದಲ ಆದ್ಯತೆ."}
            </p>
          </div>

        </div>
      </section>
            {/* HISTORY */}
      <section className="bg-[#F8F5F0] border-b border-[#E6DED2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Image */}
            <div>
              <img
                src="/src/assets/images/plays/play3.jpg"
                alt={isEnglish ? "Ranga Darshana history" : "ರಂಗ ದರ್ಶನದ ಇತಿಹಾಸ"}
                className="w-full h-[650px] object-cover rounded-3xl"
              />
            </div>

            {/* Content */}
            <div className="pt-2">

              <h2 className="font-serif text-5xl text-[#2B2B2B] mb-8">
                {isEnglish ? "History" : "ಇತಿಹಾಸ"}
              </h2>

              <p className="text-xl text-gray-700 leading-9 mb-10">
                {isEnglish
                  ? "The company began in a rented hall in Basavanagudi, staging adaptations of Kuvempu and Karanth for audiences of thirty. Word travelled. Within a decade, Ranga Darshana was touring nationally; within two, it had built its own black-box theatre."
                  : "ಬಸವನಗುಡಿಯ ಬಾಡಿಗೆ ಸಭಾಂಗಣದಲ್ಲಿ ಮೂವತ್ತು ಪ್ರೇಕ್ಷಕರಿಗಾಗಿ ಕುವೆಂಪು ಮತ್ತು ಕಾರಂತರ ಕೃತಿಗಳ ರೂಪಾಂತರಗಳನ್ನು ಪ್ರದರ್ಶಿಸುವ ಮೂಲಕ ಈ ಸಂಸ್ಥೆಯ ಪಯಣ ಆರಂಭವಾಯಿತು. ಸುದ್ದಿ ಹರಡಿತು. ಒಂದು ದಶಕದೊಳಗೆ ರಂಗ ದರ್ಶನವು ದೇಶದಾದ್ಯಂತ ಪ್ರವಾಸ ಮಾಡಿತು; ಎರಡು ದಶಕಗಳೊಳಗೆ ತನ್ನದೇ ಬ್ಲ್ಯಾಕ್-ಬಾಕ್ಸ್ ರಂಗಮಂದಿರವನ್ನು ನಿರ್ಮಿಸಿತು."}
              </p>

              <p className="text-xl text-gray-700 leading-9">
                {isEnglish
                  ? "Today the ensemble carries 24 permanent members, an active writers' room, an actors' studio and a small library of handbound Kannada scripts — many of them our own."
                  : "ಇಂದು ಈ ತಂಡದಲ್ಲಿ 24 ಖಾಯಂ ಸದಸ್ಯರು, ಸಕ್ರಿಯ ಬರಹಗಾರರ ಕೊಠಡಿ, ನಟರ ತರಬೇತಿ ಸ್ಟುಡಿಯೋ ಮತ್ತು ಕೈಯಿಂದ ಕಟ್ಟಿದ ಕನ್ನಡ ನಾಟಕಗಳ ಸಣ್ಣ ಗ್ರಂಥಾಲಯವಿದೆ — ಅವುಗಳಲ್ಲಿ ಅನೇಕವು ನಮ್ಮದೇ ಕೃತಿಗಳು."}
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24">

          {/* Heading */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-[2px] bg-[#D4A04E]" />

            <span className="uppercase tracking-[6px] text-xs text-[#8B5E3C]">
              {isEnglish ? "TIMELINE" : "ಕಾಲಕ್ರಮ"}
            </span>
          </div>

          <h2 className="font-serif text-5xl lg:text-6xl text-[#2B2B2B] mb-20">
            {isEnglish ? "Milestones." : "ಪ್ರಮುಖ ಮೈಲಿಗಲ್ಲುಗಳು."}
          </h2>

          <div className="border-l border-[#D8D0C5]">

            {/* 1987 */}
            <div className="relative pl-12 pb-20">
              <div className="absolute -left-[6px] top-2 w-3 h-3 rounded-full bg-[#D4A04E]" />

              <div className="grid md:grid-cols-[150px_1fr] gap-10">
                <p className="font-serif text-3xl text-[#7A2E27]">
                  1987
                </p>

                <div>
                  <h3 className="font-serif text-3xl text-[#2B2B2B] mb-4">
                    {isEnglish
                      ? "Founded in Bengaluru"
                      : "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಸ್ಥಾಪನೆ"}
                  </h3>

                  <p className="text-lg text-gray-600">
                    {isEnglish
                      ? "First production: Kadina Kathegalu, staged at Ravindra Kalakshetra."
                      : "ಮೊದಲ ನಾಟಕ: ಕಾಡಿನ ಕಥೆಗಳು, ರವೀಂದ್ರ ಕಲಾಕ್ಷೇತ್ರದಲ್ಲಿ ಪ್ರದರ್ಶನಗೊಂಡಿತು."}
                  </p>
                </div>
              </div>
            </div>

            {/* 1994 */}
            <div className="relative pl-12 pb-20">
              <div className="absolute -left-[6px] top-2 w-3 h-3 rounded-full bg-[#D4A04E]" />

              <div className="grid md:grid-cols-[150px_1fr] gap-10">
                <p className="font-serif text-3xl text-[#7A2E27]">
                  1994
                </p>

                <div>
                  <h3 className="font-serif text-3xl text-[#2B2B2B] mb-4">
                    {isEnglish
                      ? "First national tour"
                      : "ಮೊದಲ ರಾಷ್ಟ್ರೀಯ ಪ್ರವಾಸ"}
                  </h3>

                  <p className="text-lg text-gray-600">
                    {isEnglish
                      ? "Toured five cities with Neeruli, a play on river memory."
                      : "ನದಿಯ ನೆನಪುಗಳನ್ನು ಆಧರಿಸಿದ ನೀರುಳಿ ನಾಟಕದೊಂದಿಗೆ ಐದು ನಗರಗಳಲ್ಲಿ ಪ್ರವಾಸ."}
                  </p>
                </div>
              </div>
            </div>

            {/* 2003 */}
            <div className="relative pl-12 pb-20">
              <div className="absolute -left-[6px] top-2 w-3 h-3 rounded-full bg-[#D4A04E]" />

              <div className="grid md:grid-cols-[150px_1fr] gap-10">
                <p className="font-serif text-3xl text-[#7A2E27]">
                  2003
                </p>

                <div>
                  <h3 className="font-serif text-3xl text-[#2B2B2B] mb-4">
                    {isEnglish
                      ? "Ranga Darshana Studio opens"
                      : "ರಂಗ ದರ್ಶನ ಸ್ಟುಡಿಯೋ ಆರಂಭ"}
                  </h3>

                  <p className="text-lg text-gray-600">
                    {isEnglish
                      ? "A permanent 120-seat black-box theatre in Basavanagudi."
                      : "ಬಸವನಗುಡಿಯಲ್ಲಿ 120 ಆಸನಗಳ ಶಾಶ್ವತ ಬ್ಲ್ಯಾಕ್-ಬಾಕ್ಸ್ ರಂಗಮಂದಿರ."}
                  </p>
                </div>
              </div>
            </div>

            {/* 2011 */}
            <div className="relative pb-4 pl-12">
              <div className="absolute -left-[6px] top-2 w-3 h-3 rounded-full bg-[#D4A04E]" />

              <div className="grid md:grid-cols-[150px_1fr] gap-10">
                <p className="font-serif text-3xl text-[#7A2E27]">
                  2011
                </p>

                <div>
                  <h3 className="font-serif text-3xl text-[#2B2B2B] mb-4">
                    {isEnglish
                      ? "Karnataka Rajyotsava recognition"
                      : "ಕರ್ನಾಟಕ ರಾಜ್ಯೋತ್ಸವ ಗೌರವ"}
                  </h3>

                  <p className="text-lg text-gray-600">
                    {isEnglish
                      ? "State honour for contributions to Kannada performing arts."
                      : "ಕನ್ನಡ ಪ್ರದರ್ಶನ ಕಲೆಗಳಿಗೆ ನೀಡಿದ ಕೊಡುಗೆಗಾಗಿ ರಾಜ್ಯ ಗೌರವ."}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default About;