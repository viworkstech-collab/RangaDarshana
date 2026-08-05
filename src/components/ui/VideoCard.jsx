import { Play } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

function VideoCard({ video }) {
  const { language } = useLanguage();

  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={video.thumbnail}
          alt={video.title[language]}
          className="h-60 w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100">
          <a
            href={video.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-amber-500 p-4 text-white transition hover:scale-110"
          >
            <Play size={28} fill="white" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
          {video.category[language]}
        </span>

        <h3 className="mt-3 text-xl font-semibold text-gray-800">
          {video.title[language]}
        </h3>
      </div>
    </div>
  );
}

export default VideoCard;