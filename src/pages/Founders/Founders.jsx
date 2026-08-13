import founders from "../../data/founders";
import { useLanguage } from "../../i18n/LanguageContext";

function Founders() {
  const { language, t } = useLanguage();

  return (
    <main className="bg-[#F8F5F0]">

      {/* Hero */}
      <section className="border-b border-[#E5DDD2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24">

          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-[2px] bg-[#D4A04E]"></div>

            <p className="uppercase tracking-[6px] text-xs text-[#8B5E3C]">
              {language === "en" ? "FOUNDERS" : "ಸ್ಥಾಪಕರು"}
            </p>
          </div>

          {/* KEEP THIS ENGLISH */}
          <h1 className="font-serif text-5xl lg:text-7xl text-[#2B2B2B] leading-tight">
            The people at the door.
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-gray-700 leading-10">
            {language === "en"
              ? "Three artists, three practices, one company. Meet the founders whose voices continue to shape Ranga Darshana."
              : "ಮೂರು ಕಲಾವಿದರು, ಮೂರು ಕಲಾ ಅಭ್ಯಾಸಗಳು, ಒಂದು ಸಂಸ್ಥೆ. ರಂಗ ದರ್ಶನದ ರೂಪವನ್ನು ಇಂದಿಗೂ ರೂಪಿಸುತ್ತಿರುವ ಸಂಸ್ಥಾಪಕರನ್ನು ಪರಿಚಯಿಸಿಕೊಳ್ಳಿ."
            }
          </p>

        </div>
      </section>

      {/* Founder Cards */}
      <section>
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20 grid gap-16 md:grid-cols-2 xl:grid-cols-3">

          {founders.map((founder) => (
            <div key={founder.id}>

              <img
                src={founder.image}
                alt={founder.name}
                className="rounded-3xl w-full h-[620px] object-cover"
              />

              <p className="mt-8 uppercase tracking-[5px] text-xs text-[#7A5A44]">
                {founder.years}
              </p>

              {/* Name stays English */}
              <h2 className="mt-5 font-serif text-5xl text-[#2B2B2B]">
                {founder.name}
              </h2>

              <p className="mt-3 italic text-[#8B4E3A] text-2xl">
                {language === "en"
                  ? founder.role
                  : founder.roleKn
                }
              </p>

              <p className="mt-8 text-gray-700 leading-9 text-lg">
                {language === "en"
                  ? founder.description
                  : founder.descriptionKn
                }
              </p>

              <button className="mt-10 uppercase tracking-[5px] text-[#8B4E3C] hover:text-[#D4A04E] transition">
                {language === "en"
                  ? "READ PROFILE →"
                  : "ಪ್ರೊಫೈಲ್ ಓದಿ →"
                }
              </button>

            </div>
          ))}

        </div>
      </section>

    </main>
  );
}

export default Founders;