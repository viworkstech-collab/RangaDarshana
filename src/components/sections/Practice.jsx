import { useLanguage } from "../../i18n/LanguageContext";
import { Link } from "react-router-dom";

function OurPractice() {
  const { language } = useLanguage();

  return (
    <section className="bg-[#FAF8F5] py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

        {/* Left */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-[1px] bg-[#C59D5F]" />

            <p className="uppercase tracking-[6px] text-sm text-[#8C6239]">
              {language === "en" ? "OUR PRACTICE" : "ನಮ್ಮ ರಂಗಭೂಮಿ"}
            </p>
          </div>

          <h2 className="text-6xl font-serif leading-tight text-[#2B2B2B]">
            {language === "en"
              ? "A theatre of quiet weight."
              : "ಆಳವಾದ ಭಾವನೆಯ ರಂಗಭೂಮಿ."
            }
          </h2>
        </div>

        {/* Right */}
        <div className="space-y-8">

          <p className="text-xl leading-10 text-gray-700">
            {language === "en"
              ? "For nearly four decades, Ranga Darshana has staged plays that treat the Kannada language as a living instrument — its consonants, its silences and its songs."
              : "ಸುಮಾರು ನಾಲ್ಕು ದಶಕಗಳಿಂದ ರಂಗ ದರ್ಶನವು ಕನ್ನಡ ಭಾಷೆಯನ್ನು ಜೀವಂತ ಕಲಾ ಮಾಧ್ಯಮವಾಗಿ ಪರಿಗಣಿಸಿ ನಾಟಕಗಳನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತಿದೆ — ಅದರ ಅಕ್ಷರಗಳು, ಮೌನಗಳು ಮತ್ತು ಹಾಡುಗಳೊಂದಿಗೆ."
            }
          </p>

          <p className="text-xl leading-10 text-gray-700">
            {language === "en"
              ? "Our repertory spans folk revival, chamber theatre, historical portraiture and contemporary musicals — always in Kannada, always in service of the story."
              : "ನಮ್ಮ ನಾಟಕಗಳ ಸಂಗ್ರಹವು ಜಾನಪದ ಪುನರುಜ್ಜೀವನ, ಚೇಂಬರ್ ಥಿಯೇಟರ್, ಐತಿಹಾಸಿಕ ಚಿತ್ರಣ ಮತ್ತು ಸಮಕಾಲೀನ ಸಂಗೀತ ನಾಟಕಗಳನ್ನು ಒಳಗೊಂಡಿದೆ — ಸದಾ ಕನ್ನಡದಲ್ಲಿ, ಸದಾ ಕಥೆಯ ಸೇವೆಯಲ್ಲಿ."
            }
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-4 mt-10 uppercase tracking-[6px] text-[#7B2D26] hover:gap-6 transition-all"
          >
            {language === "en"
              ? "READ OUR STORY →"
              : "ನಮ್ಮ ಕಥೆಯನ್ನು ಓದಿ →"
            }
          </Link>

        </div>

      </div>
    </section>
  );
}

export default OurPractice;