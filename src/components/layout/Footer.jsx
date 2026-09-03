import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/useLanguage";
import contactInfo from "../../data/contact";

function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-[#F8F5EF] border-t border-[#E7DDD2]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Left */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-14 h-14 object-contain"
              />

              <h2 className="text-4xl font-serif text-[#7B2D26]">
                Ranga Darshana
              </h2>
            </div>

            <p className="text-gray-700 leading-9 text-lg max-w-md">
              {language === "en"
                ? "A Kannada theatre ensemble devoted to original stagecraft, folk revival and contemporary drama. Since 1987, we have staged over 240 productions across Karnataka and beyond."
                : "1987ರಿಂದ ಕರ್ನಾಟಕದಾದ್ಯಂತ ಹಾಗೂ ಹೊರಗಡೆಯೂ 240ಕ್ಕೂ ಹೆಚ್ಚು ನಾಟಕಗಳನ್ನು ಪ್ರದರ್ಶಿಸಿರುವ ರಂಗ ದರ್ಶನವು ಮೂಲ ರಂಗಭೂಮಿ, ಜನಪದ ಪುನರುಜ್ಜೀವನ ಮತ್ತು ಸಮಕಾಲೀನ ನಾಟಕಗಳಿಗೆ ಸಮರ್ಪಿತವಾಗಿದೆ."}
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 mt-10">
              {/* Instagram - account URL not provided yet */}
              <span
                aria-label="Instagram"
                className="w-14 h-14 rounded-full border border-[#DDD5CA] flex items-center justify-center text-gray-500"
              >
                IG
              </span>

              {/* Facebook - account URL not provided yet */}
              <span
                aria-label="Facebook"
                className="w-14 h-14 rounded-full border border-[#DDD5CA] flex items-center justify-center text-gray-500"
              >
                FB
              </span>

              {/* YouTube */}
              <a
                href={contactInfo.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-14 h-14 rounded-full border border-[#DDD5CA] flex items-center justify-center hover:bg-[#7B2D26] hover:text-white transition"
              >
                YT
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${contactInfo.phone.link.replace(
                  "tel:",
                  ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-14 h-14 rounded-full border border-[#DDD5CA] flex items-center justify-center hover:bg-[#7B2D26] hover:text-white transition"
              >
                WA
              </a>

              {/* Email - email address not confirmed yet */}
              <span
                aria-label="Email"
                className="w-14 h-14 rounded-full border border-[#DDD5CA] flex items-center justify-center text-gray-500"
              >
                EM
              </span>
            </div>
          </div>

          {/* Middle */}
          <div>
            <h4 className="uppercase tracking-[8px] text-sm text-[#8B6B58] mb-10">
              {language === "en" ? "EXPLORE" : "ಅನ್ವೇಷಿಸಿ"}
            </h4>

            <div className="space-y-5 text-lg">
              <Link
                to="/about"
                className="block hover:text-[#7B2D26]"
              >
                {language === "en" ? "About" : "ನಮ್ಮ ಬಗ್ಗೆ"}
              </Link>

              <Link
                to="/founders"
                className="block hover:text-[#7B2D26]"
              >
                {language === "en" ? "Founders" : "ಸ್ಥಾಪಕರು"}
              </Link>

              <Link
                to="/plays"
                className="block hover:text-[#7B2D26]"
              >
                {language === "en" ? "Plays" : "ನಾಟಕಗಳು"}
              </Link>

              <Link
                to="/gallery"
                className="block hover:text-[#7B2D26]"
              >
                {language === "en" ? "Gallery" : "ಗ್ಯಾಲರಿ"}
              </Link>

              <Link
                to="/videos"
                className="block hover:text-[#7B2D26]"
              >
                {language === "en" ? "Videos" : "ವೀಡಿಯೊಗಳು"}
              </Link>

              <Link
    to="/achievements"
    className="block hover:text-[#7B2D26]"
  >
    {language === "en" ? "Achievements" : "ಸಾಧನೆಗಳು"}
  </Link>

  <Link
    to="/events"
    className="block hover:text-[#7B2D26]"
  >
    {language === "en" ? "Events" : "ಕಾರ್ಯಕ್ರಮಗಳು"}
  </Link>
            </div>
          </div>

          {/* Right - Contact */}
          <div>
            <h4 className="uppercase tracking-[8px] text-sm text-[#8B6B58] mb-10">
              {language === "en" ? "CONTACT" : "ಸಂಪರ್ಕ"}
            </h4>

            <div className="space-y-5 text-lg text-gray-700">
              <p>{contactInfo.location[language]}</p>

              <p>
                {language === "en"
                  ? "Ravindra Kalakshetra Road"
                  : "ರವೀಂದ್ರ ಕಲಾಕ್ಷೇತ್ರ ರಸ್ತೆ"}
              </p>

              <p>
                {language === "en"
                  ? "Bengaluru 560002, Karnataka"
                  : "ಬೆಂಗಳೂರು 560002, ಕರ್ನಾಟಕ"}
              </p>

              <a
                href={contactInfo.phone.link}
                className="block hover:text-[#7B2D26]"
              >
                {contactInfo.phone.display}
              </a>

              <p>
                {language === "en"
                  ? "hello@rangadarshana.in"
                  : "hello@rangadarshana.in"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#E7DDD2]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>
            {language === "en"
              ? "© 2026 Ranga Darshana. All rights reserved."
              : "© 2026 Ranga Darshana. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ."}
          </p>

          <div className="flex gap-5 mt-4 md:mt-0">
            <span>
              {language === "en"
                ? "Designed with care"
                : "ಕಾಳಜಿಯಿಂದ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ"}
            </span>

            <span>
              {language === "en" ? "Privacy" : "ಗೌಪ್ಯತೆ"}
            </span>

            <span>
              {language === "en" ? "Terms" : "ನಿಯಮಗಳು"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;