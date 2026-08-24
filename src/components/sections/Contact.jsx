import { useLanguage } from "../../i18n/LanguageContext";
import contactInfo from "../../data/contact";
import ContactCard from "../ui/ContactCard";

const Contact = () => {
  const { language } = useLanguage();

  const currentLanguage = language === "kn" ? "kn" : "en";

  const content =
    currentLanguage === "kn"
      ? {
          eyebrow: "ರಂಗದರ್ಶನ",
          title: "ರಂಗದರ್ಶನವನ್ನು ಸಂಪರ್ಕಿಸಿ",
          description:
            "ರಂಗದರ್ಶನದ ಕುರಿತು ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ ಅಥವಾ ಯೆಶವಂತಪುರದಲ್ಲಿರುವ ನಮ್ಮ ಸ್ಥಳಕ್ಕೆ ಭೇಟಿ ನೀಡಿ.",

          visitTitle: "ನಮ್ಮನ್ನು ಭೇಟಿ ಮಾಡಿ",
          phoneTitle: "ಸಂಪರ್ಕಿಸಿ",
          locationTitle: "ನಮ್ಮ ಸ್ಥಳ",
          locationDescription:
            "ರಂಗದರ್ಶನವು ಬೆಂಗಳೂರಿನ ಯಶವಂತಪುರದಲ್ಲಿದೆ.",

          phoneLabel: "ದೂರವಾಣಿ",

          youtubeTitle: "ನಮ್ಮೊಂದಿಗೆ ಸಂಪರ್ಕದಲ್ಲಿರಿ",
          youtubeDescription:
            "ರಂಗದರ್ಶನದ ನಾಟಕಗಳು, ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಚಟುವಟಿಕೆಗಳ ಕುರಿತು ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ನಮ್ಮ YouTube ಚಾನೆಲ್ ಅನ್ನು ಭೇಟಿ ಮಾಡಿ.",
          youtubeButton: "YouTube ಚಾನೆಲ್ ಭೇಟಿ ನೀಡಿ",
        }
      : {
          eyebrow: "Rangadarshana",
          title: "Connect with RangaDarshana",
          description:
            "For more information about RangaDarshana, feel free to get in touch with us or visit us in Yeshwantpur.",

          visitTitle: "Visit Us",
          phoneTitle: "Contact Us",
          locationTitle: "Find Us",
          locationDescription:
            "RangaDarshana is located in Yeshwantpur, Bengaluru.",

          phoneLabel: "Phone",

          youtubeTitle: "Stay Connected",
          youtubeDescription:
            "Visit our YouTube channel for performances, theatre activities, and updates from RangaDarshana.",
          youtubeButton: "Visit Our YouTube Channel",
        };

  return (
    <section className="bg-[#fffdf8] px-6 py-20 md:px-10 lg:px-16">

      {/* =========================
          HERO SECTION
      ========================== */}
      <div className="mx-auto max-w-4xl text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b87821]">
          {content.eyebrow}
        </p>

        <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#18213b] md:text-5xl lg:text-6xl">
          {content.title}
        </h1>

        <div className="mx-auto mt-6 h-[3px] w-16 bg-[#d98b19]" />

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#596176] md:text-lg">
          {content.description}
        </p>

      </div>


      {/* =========================
          CONTACT CARDS
      ========================== */}
      <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-2">

        {/* VISIT US */}
        <ContactCard
          icon="📍"
          title={content.visitTitle}
        >
          <p>
            <span className="font-semibold text-[#30384e]">
              {contactInfo.name[currentLanguage]}
            </span>

            <br />

            {contactInfo.location[currentLanguage]}
          </p>
        </ContactCard>


        {/* CONTACT US */}
        <ContactCard
          icon="📞"
          title={content.phoneTitle}
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8b8176]">
            {content.phoneLabel}
          </p>

          <a
            href={contactInfo.phone.link}
            className="mt-2 inline-block text-xl font-semibold text-[#30384e] transition-colors hover:text-[#b87821]"
          >
            {contactInfo.phone.display}
          </a>
        </ContactCard>

      </div>


      {/* =========================
          LOCATION SECTION
      ========================== */}
      <div className="mx-auto mt-10 max-w-5xl rounded-2xl bg-[#18213b] px-8 py-12 text-center shadow-lg md:px-12">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d98b19]">

          <span className="text-3xl">
            📍
          </span>

        </div>

        <h2 className="mt-6 font-serif text-3xl font-bold text-white md:text-4xl">
          {content.locationTitle}
        </h2>

        <p className="mt-4 text-lg text-[#e7ddd6]">
          {contactInfo.location[currentLanguage]}
        </p>

        <p className="mt-2 text-sm text-[#beb3ac]">
          {content.locationDescription}
        </p>

      </div>


      {/* =========================
          YOUTUBE SECTION
      ========================== */}
      <div className="mx-auto mt-16 max-w-3xl text-center">

        {/* YOUTUBE ICON */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fff4df]">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-8 w-8"
            aria-label="YouTube"
          >
            {/* RED YOUTUBE SHAPE */}
            <path
              d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.56 9.38.56 9.38.56s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8Z"
              fill="#FF0000"
            />

            {/* WHITE PLAY BUTTON */}
            <path
              d="M9.75 15.5 15.5 12 9.75 8.5v7Z"
              fill="white"
            />
          </svg>

        </div>


        {/* TITLE */}
        <h2 className="mt-5 font-serif text-3xl font-bold text-[#18213b]">
          {content.youtubeTitle}
        </h2>


        {/* DESCRIPTION */}
        <p className="mx-auto mt-4 max-w-xl leading-7 text-[#596176]">
          {content.youtubeDescription}
        </p>


        {/* YOUTUBE BUTTON */}
        <a
          href={contactInfo.youtube.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#b87821] px-7 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#9f661b] hover:shadow-lg"
        >

          {/* RED YOUTUBE ICON */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.56 9.38.56 9.38.56s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8Z"
              fill="#FF0000"
            />

            <path
              d="M9.75 15.5 15.5 12 9.75 8.5v7Z"
              fill="white"
            />
          </svg>

          {content.youtubeButton}

        </a>

      </div>

    </section>
  );
};

export default Contact;