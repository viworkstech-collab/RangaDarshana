import { Play, ExternalLink } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

function VideoCard({ video }) {
  const { language } = useLanguage();

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        <img
          src={video.image}
          alt={video.title[language]}
          className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-full p-4 hover:scale-110 transition"
          >
            <Play
              size={28}
              className="text-red-600"
              fill="currentColor"
            />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="inline-block bg-red-100 text-red-700 text-xs font-medium px-3 py-1 rounded-full">
          {video.category[language]}
        </span>

        <h3 className="text-xl font-bold mt-4 text-gray-800">
          {video.title[language]}
        </h3>

        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700"
        >
          {language === "en" ? "Watch on YouTube" : "YouTube ನಲ್ಲಿ ವೀಕ್ಷಿಸಿ"}

          <ExternalLink size={18} />
        </a>
      </div>
    </div>
  );
}

export default VideoCard;