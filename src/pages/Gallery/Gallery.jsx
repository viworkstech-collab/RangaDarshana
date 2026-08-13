import { useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import gallery from "../../data/gallery";

function Gallery() {
  const { language } = useLanguage();

  const [activeCategory, setActiveCategory] = useState("stage");

  const categories = [
    {
      id: "stage",
      en: "STAGE PERFORMANCES",
      kn: "ವೇದಿಕೆ ಪ್ರದರ್ಶನಗಳು",
    },
    {
      id: "behind",
      en: "BEHIND THE SCENES",
      kn: "ತೆರೆ ಹಿಂದಿನ ಕ್ಷಣಗಳು",
    },
    {
      id: "rehearsals",
      en: "REHEARSALS",
      kn: "ಅಭ್ಯಾಸಗಳು",
    },
    {
      id: "workshops",
      en: "WORKSHOPS",
      kn: "ಕಾರ್ಯಾಗಾರಗಳು",
    },
    {
      id: "events",
      en: "EVENTS",
      kn: "ಕಾರ್ಯಕ್ರಮಗಳು",
    },
  ];

  const images = gallery[activeCategory];

  return (
    <main className="bg-[#FAF8F5] min-h-screen">

      {/* ================= HERO ================= */}

      <section className="border-b border-[#E5DED5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

          <div className="min-h-[560px] flex items-center">

            <div className="max-w-4xl">

              {/* Label */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-[1px] bg-[#C89A53]" />

                <p className="uppercase tracking-[6px] text-[#8C6239] text-sm">
                  {language === "en" ? "GALLERY" : "ಗ್ಯಾಲರಿ"}
                </p>
              </div>

              {/* Heading */}
              <h1 className="font-serif text-6xl md:text-7xl lg:text-[76px] leading-tight text-[#2B2B2B] mb-8">
                {language === "en"
                  ? "Moments, held still."
                  : "ಹೆಪ್ಪುಗಟ್ಟಿದ ಕ್ಷಣಗಳು."}
              </h1>

              {/* Description */}
              <p className="text-[#5A4C47] text-xl md:text-2xl leading-9 max-w-4xl">
                {language === "en"
                  ? "A curated selection from three decades of stagecraft — on stage, in rehearsal and behind the curtain."
                  : "ಮೂರು ದಶಕಗಳ ರಂಗಭೂಮಿ ಕಲೆಯ ಆಯ್ದ ಕ್ಷಣಗಳು — ವೇದಿಕೆಯಲ್ಲಿ, ಅಭ್ಯಾಸದಲ್ಲಿ ಮತ್ತು ತೆರೆ ಹಿಂದಿನಿಂದ."}
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= GALLERY ================= */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

          {/* Category Buttons */}

          <div className="flex flex-wrap gap-3 mb-14">

            {categories.map((category) => {

              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    px-7 py-3
                    rounded-full
                    border
                    text-sm
                    tracking-[4px]
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "bg-[#7B211E] text-white border-[#7B211E]"
                        : "bg-transparent text-[#6B625C] border-[#DDD5CC] hover:border-[#7B211E] hover:text-[#7B211E]"
                    }
                  `}
                >
                  {language === "en"
                    ? category.en
                    : category.kn}
                </button>
              );

            })}

          </div>


          {/* Images */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {images.map((image, index) => (

              <div
                key={`${activeCategory}-${index}`}
                className="overflow-hidden rounded-[28px] bg-black"
              >

                <img
                  src={image}
                  alt={
                    language === "en"
                      ? "Ranga Darshana theatre moment"
                      : "ರಂಗದರ್ಶನ ರಂಗಭೂಮಿ ಕ್ಷಣ"
                  }
                  className="w-full h-85 object-cover transition-transform duration-500 hover:scale-105"
                />

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Gallery;