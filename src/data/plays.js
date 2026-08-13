import play1 from "../assets/images/plays/play1.jpg";
import play2 from "../assets/images/plays/play2.jpg";
import play3 from "../assets/images/plays/play3.jpg";
import play4 from "../assets/images/plays/play4.jpg";

const plays = [
  {
    id: 1,
    image: play1,

    year: "2023",
    category: {
      en: "FOLK DRAMA",
      kn: "ಜನಪದ ನಾಟಕ",
    },
    duration: "1H 50M",

    title: {
      en: "Kaadina Haadu",
      kn: "ಕಾಡಿನ ಹಾಡು",
    },

    description: {
      en: "A luminous folk tale from the Western Ghats, where a forest guardian's song holds a village together across three generations.",
      kn: "ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ ಪ್ರಕಾಶಮಾನವಾದ ಜನಪದ ಕಥೆ. ಮೂರು ತಲೆಮಾರುಗಳವರೆಗೆ ಒಂದು ಗ್ರಾಮದ ಜನರನ್ನು ಕಾಡಿನ ರಕ್ಷಕನ ಹಾಡು ಒಗ್ಗೂಡಿಸುತ್ತದೆ.",
    },

    director: {
      en: "Shrinivas Bhat",
      kn: "ಶ್ರೀನಿವಾಸ್ ಭಟ್",
    },

    writer: {
      en: "Shrinivas Bhat",
      kn: "ಶ್ರೀನಿವಾಸ್ ಭಟ್",
    },

    music: {
      en: "Praveen Godkhindi",
      kn: "ಪ್ರವೀಣ್ ಗೋಡ್ಖಿಂಡಿ",
    },
  },

  {
    id: 2,
    image: play2,

    year: "2022",
    category: {
      en: "CONTEMPORARY TRAGEDY",
      kn: "ಸಮಕಾಲೀನ ದುರಂತ ನಾಟಕ",
    },
    duration: "2H 10M",

    title: {
      en: "Andhakara",
      kn: "ಅಂಧಕಾರ",
    },

    description: {
      en: "Three sisters return to their ancestral home in Mysuru to divide an inheritance — and confront a silence that has shaped their lives.",
      kn: "ಮೂರು ಸಹೋದರಿಯರು ಮೈಸೂರಿನ ತಮ್ಮ ಪೂರ್ವಿಕರ ಮನೆಗೆ ಆಸ್ತಿಯನ್ನು ಹಂಚಿಕೊಳ್ಳಲು ಹಿಂದಿರುಗುತ್ತಾರೆ — ಮತ್ತು ಅವರ ಜೀವನವನ್ನು ರೂಪಿಸಿದ ಮೌನವನ್ನು ಎದುರಿಸುತ್ತಾರೆ.",
    },

    director: {
      en: "Lalita Iyer",
      kn: "ಲಲಿತಾ ಅಯ್ಯರ್",
    },

    writer: {
      en: "Lalita Iyer",
      kn: "ಲಲಿತಾ ಅಯ್ಯರ್",
    },

    music: {
      en: "Bindhumalini",
      kn: "ಬಿಂದುಮಾಲಿನಿ",
    },
  },

  {
    id: 3,
    image: play3,

    year: "2021",
    category: {
      en: "MUSICAL",
      kn: "ಸಂಗೀತ ನಾಟಕ",
    },
    duration: "1H 40M",

    title: {
      en: "Belaku",
      kn: "ಬೆಳಕು",
    },

    description: {
      en: "A young Bharatanatyam dancer discovers her grandmother's forgotten manuscripts, and with them, a lineage of forbidden verse.",
      kn: "ಒಬ್ಬ ಯುವ ಭರತನಾಟ್ಯ ಕಲಾವಿದೆ ತನ್ನ ಅಜ್ಜಿಯ ಮರೆತುಹೋದ ಹಸ್ತಪ್ರತಿಗಳನ್ನು ಕಂಡುಕೊಳ್ಳುತ್ತಾಳೆ. ಅವುಗಳೊಂದಿಗೆ ನಿಷೇಧಿತ ಪದ್ಯಗಳ ಪರಂಪರೆಯನ್ನೂ ಅರಿಯುತ್ತಾಳೆ.",
    },

    director: {
      en: "Shrinivas Bhat",
      kn: "ಶ್ರೀನಿವಾಸ್ ಭಟ್",
    },

    writer: {
      en: "Lalita Iyer",
      kn: "ಲಲಿತಾ ಅಯ್ಯರ್",
    },

    music: {
      en: "T. M. Krishna",
      kn: "ಟಿ. ಎಂ. ಕೃಷ್ಣ",
    },
  },

  {
    id: 4,
    image: play4,

    year: "2019",
    category: {
      en: "HISTORICAL",
      kn: "ಐತಿಹಾಸಿಕ ನಾಟಕ",
    },
    duration: "2H 5M",

    title: {
      en: "Hejje Galu",
      kn: "ಹೆಜ್ಜೆಗಳು",
    },

    description: {
      en: "The final months of poet D. R. Bendre, rendered as a walk through memory, marketplaces and monsoon rains.",
      kn: "ಕವಿ ಡಿ. ಆರ್. ಬೇಂದ್ರೆಯವರ ಅಂತಿಮ ತಿಂಗಳುಗಳನ್ನು ನೆನಪುಗಳು, ಮಾರುಕಟ್ಟೆಗಳು ಮತ್ತು ಮುಂಗಾರು ಮಳೆಯ ಮೂಲಕ ಸಾಗುವ ಪಯಣದಂತೆ ಚಿತ್ರಿಸಲಾಗಿದೆ.",
    },

    director: {
      en: "Lalita Iyer",
      kn: "ಲಲಿತಾ ಅಯ್ಯರ್",
    },

    writer: {
      en: "Shrinivas Bhat",
      kn: "ಶ್ರೀನಿವಾಸ್ ಭಟ್",
    },

    music: {
      en: "Praveen D. Rao",
      kn: "ಪ್ರವೀಣ್ ಡಿ. ರಾವ್",
    },
  },
];

export default plays;