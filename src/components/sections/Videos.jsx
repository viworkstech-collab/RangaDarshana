import videos from "../../data/videos";
import VideoCard from "../ui/VideoCard";
import { useLanguage } from "../../i18n/LanguageContext";


function Videos() {
  const { language } = useLanguage();

  return (
    <section className="bg-[#FAF8F5] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            {language === "en"
              ? "Featured Performances"
              : "ಪ್ರಮುಖ ಪ್ರದರ್ಶನಗಳು"}
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">
            {language === "en"
              ? "Explore memorable theatre performances presented by Rangadarshana."
              : "ರಂಗದರ್ಶನದ ಪ್ರಮುಖ ನಾಟಕಗಳು ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಪ್ರದರ್ಶನಗಳನ್ನು ವೀಕ್ಷಿಸಿ."}
          </p>
        </div>

        {/* Video Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
            />
          ))}
        </div>

        {/* YouTube Button */}
        <div className="flex justify-center mt-14">
          <a
            href="https://www.youtube.com/@rangadarshanaKarnataka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition"
          >
           

            {language === "en"
              ? "Visit Official YouTube Channel"
              : "ಅಧಿಕೃತ YouTube ಚಾನೆಲ್"}
          </a>
        </div>

      </div>
    </section>
  );
}

export default Videos;