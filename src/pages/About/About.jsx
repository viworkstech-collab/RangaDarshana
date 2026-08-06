import { useLanguage } from "../../i18n/LanguageContext";

function About() {
  const { t } = useLanguage();

  return (
    <>
      {/* ABOUT HERO */}
      <section className="bg-[#F8F5F0] border-b border-[#E6DED2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20">

          {/* Heading */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-[2px] bg-[#D4A04E]"></div>

            <span className="uppercase tracking-[6px] text-xs text-[#8B5E3C]">
              {t.about || "ABOUT"}
            </span>
          </div>

          <h1 className="font-serif text-5xl lg:text-7xl leading-tight text-[#2B2B2B]">
            {t.aboutTitle || "A house for Kannada stories."}
          </h1>

          <h2 className="mt-3 text-3xl lg:text-4xl text-[#8B4E3A]">
            {t.aboutKannada || "ಕನ್ನಡ ಕಥೆಗಳಿಗೆ ಒಂದು ಮನೆ"}
          </h2>

          <p className="mt-10 max-w-3xl text-lg leading-10 text-gray-700">
            {t.aboutDescription ||
              "Ranga Darshana was founded in 1987 by three friends who believed Kannada theatre deserved the same craft rigour as any classical art. Nearly four decades later, that belief still shapes every rehearsal room we open."}
          </p>
        </div>
      </section>

      {/* MISSION VISION PHILOSOPHY */}

      <section className="bg-[#F8F5F0] border-b border-[#E6DED2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24 grid md:grid-cols-3 gap-16">

          <div>
            <h4 className="uppercase tracking-[6px] text-xs text-[#8B4E3A] mb-8">
              {t.mission || "MISSION"}
            </h4>

            <p className="font-serif text-3xl leading-relaxed text-[#2B2B2B]">
              {t.missionText ||
                "To keep original Kannada theatre alive as a rigorous, contemporary art form grounded in language, in place and in ensemble."}
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-[6px] text-xs text-[#8B4E3A] mb-8">
              {t.vision || "VISION"}
            </h4>

            <p className="font-serif text-3xl leading-relaxed text-[#2B2B2B]">
              {t.visionText ||
                "A Karnataka in which every district has a stage, and every stage carries a story told in its own voice."}
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-[6px] text-xs text-[#8B4E3A] mb-8">
              {t.philosophy || "PHILOSOPHY"}
            </h4>

            <p className="font-serif text-3xl leading-relaxed text-[#2B2B2B]">
              {t.philosophyText ||
                "Slow rehearsal. Small ensembles. Handmade craft. The play, always, before the production."}
            </p>
          </div>

        </div>
      </section>

    </>
  );
}

export default About;