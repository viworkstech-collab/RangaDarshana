import { Link } from "react-router-dom";
import play1 from "../../assets/images/plays/play1.jpg";
import play2 from "../../assets/images/plays/play2.jpg";
import play3 from "../../assets/images/plays/play3.jpg";
import { useLanguage } from "../../i18n/LanguageContext";

function SelectedWorks() {
  const { language } = useLanguage();

  const plays = [
    {
      id: 1,
      image: play1,
      title: "Neeruli",
    },
    {
      id: 2,
      image: play2,
      title: "Kaadina Haadu",
    },
    {
      id: 3,
      image: play3,
      title: "Yakshagana",
    },
  ];

  return (
    <section className="bg-[#FAF8F5] py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-16">

          <div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-[1px] bg-[#C89A53]" />

              <p className="uppercase tracking-[6px] text-[#8C6239] text-sm">
                {language === "en"
                  ? "SELECTED WORKS"
                  : "ಆಯ್ದ ಕೃತಿಗಳು"
                }
              </p>
            </div>

            <h2 className="font-serif text-6xl text-[#2B2B2B]">
              {language === "en"
                ? "Plays from the repertory."
                : "ನಾಟಕಗಳ ಸಂಗ್ರಹದಿಂದ."
              }
            </h2>

          </div>

          <Link
            to="/plays"
            className="hidden lg:flex uppercase tracking-[6px] text-[#7B2D26] hover:text-[#C89A53]"
          >
            {language === "en"
              ? "VIEW ALL →"
              : "ಎಲ್ಲವನ್ನೂ ನೋಡಿ →"
            }
          </Link>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {plays.map((play) => (

            <div
              key={play.id}
              className="group overflow-hidden rounded-3xl cursor-pointer"
            >

              <img
                src={play.image}
                alt={play.title}
                className="w-full h-[620px] object-cover transition duration-500 group-hover:scale-110"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default SelectedWorks;