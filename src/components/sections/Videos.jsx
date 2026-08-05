import VideoCard from "../ui/VideoCard";
import videos from "../../data/videos";
import { useLanguage } from "../../i18n/LanguageContext";

function Videos() {
  const { language } = useLanguage();

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            {language === "en" ? "Our Videos" : "ನಮ್ಮ ವೀಡಿಯೊಗಳು"}
          </h2>

          <p className="mt-4 text-gray-600">
            {language === "en"
              ? "Explore performances, theatre workshops and cultural events."
              : "ನಮ್ಮ ಪ್ರದರ್ಶನಗಳು, ನಾಟಕ ಕಾರ್ಯಾಗಾರಗಳು ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ವೀಕ್ಷಿಸಿ."}
          </p>
        </div>

        {/* Video Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Videos;