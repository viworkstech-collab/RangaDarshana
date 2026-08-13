import { useLanguage } from "../../i18n/LanguageContext";
import plays from "../../data/plays";

function Plays() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FAF8F5]">

      {/* Page Header */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-[1px] bg-[#C89A53]" />

          <p className="uppercase tracking-[6px] text-[#8C6239] text-sm">
            {t.plays.label}
          </p>
        </div>

        <h1 className="text-5xl md:text-6xl font-serif text-[#2B2B2B] mb-8">
          {t.plays.title}
        </h1>

        <p className="text-lg md:text-xl text-[#5A4C47] leading-8 max-w-4xl">
          {t.plays.description}
        </p>

      </section>


      {/* Plays */}
      <section className="px-6 md:px-12 pb-24">

        <div className="max-w-7xl mx-auto">

          {plays.map((play, index) => (

            <article
              key={play.id}
              className={`grid lg:grid-cols-2 gap-16 items-center mb-28 ${
                index % 2 !== 0 ? "lg:flex lg:flex-row-reverse" : ""
              }`}
            >

              {/* Image */}
              <div className="w-full">

                {play.image ? (
                  <img
                    src={play.image}
                    alt={play.title[language]}
                    className="w-full h-[650px] object-cover rounded-[28px]"
                  />
                ) : (
                  <div className="w-full h-[650px] rounded-[28px] bg-[#2B2B2B] flex items-center justify-center">
                    <span className="text-[#D4A04E] font-serif text-3xl">
                      {play.title[language]}
                    </span>
                  </div>
                )}

              </div>


              {/* Content */}
              <div>

                {/* Year / Category / Duration */}
                <p className="uppercase tracking-[6px] text-[#8C6239] text-sm mb-8">
                  {play.year}
                  <span className="mx-3 text-[#C89A53]">•</span>
                  {play.category[language]}
                  <span className="mx-3 text-[#C89A53]">•</span>
                  {play.duration}
                </p>


                {/* Title */}
                <h2 className="font-serif text-5xl text-[#7B2D26] mb-4">
                  {play.title.en}
                </h2>

                {/* Kannada Title */}
                <h3 className="font-serif text-3xl text-[#9A4037] mb-8">
                  {play.title.kn}
                </h3>


                {/* Description */}
                <p className="text-[#5A4C47] text-xl leading-9 mb-8">
                  {play.description[language]}
                </p>


                {/* Credits */}
                <div className="flex flex-wrap gap-x-8 gap-y-3 text-[#5A4C47] mb-10">

                  <span>
                    Director · {play.director[language]}
                  </span>

                  <span>
                    Writer · {play.writer[language]}
                  </span>

                  <span>
                    Music · {play.music[language]}
                  </span>

                </div>


                {/* Read More */}
                <button className="uppercase tracking-[5px] text-[#7B2D26] hover:text-[#C89A53] transition">
                  {t.plays.readMore} →
                </button>

              </div>

            </article>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Plays;