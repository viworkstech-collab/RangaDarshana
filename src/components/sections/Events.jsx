import { useEffect, useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import { getEvents } from "../../api/eventApi";
import EventCard from "../ui/EventCard";

const Events = () => {
  const { language } = useLanguage();

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const currentLanguage = language === "kn" ? "kn" : "en";

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getEvents();

        setEvents(data);
      } catch (err) {
        console.error("Failed to load events:", err);
        setError("Unable to load events at the moment.");
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  const visibleEvents = events.filter(
    (event) => event.isVisible === true
  );

  const content =
    currentLanguage === "kn"
      ? {
          eyebrow: "ರಂಗದರ್ಶನ",
          title: "ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳು",
          description:
            "ರಂಗದರ್ಶನದ ಮುಂಬರುವ ನಾಟಕಗಳು, ಪ್ರದರ್ಶನಗಳು ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಇಲ್ಲಿ ಅನ್ವೇಷಿಸಿ.",
          noEventsTitle: "ಯಾವುದೇ ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳಿಲ್ಲ",
          noEventsDescription:
            "ಹೊಸ ನಾಟಕಗಳು ಮತ್ತು ಪ್ರದರ್ಶನಗಳ ಮಾಹಿತಿಯನ್ನು ಶೀಘ್ರದಲ್ಲೇ ಪ್ರಕಟಿಸಲಾಗುವುದು.",
          comingSoon: "ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ",
          loading: "ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",
          error: "ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",
        }
      : {
          eyebrow: "Rangadarshana",
          title: "Upcoming Events",
          description:
            "Discover Rangadarshana's upcoming plays, performances and cultural events.",
          noEventsTitle: "No Upcoming Events",
          noEventsDescription:
            "New plays and performances will be announced soon. Please check back for upcoming events.",
          comingSoon: "Coming Soon",
          loading: "Loading events...",
          error: "Unable to load events.",
        };

  return (
    <section className="bg-[#fffdf8] px-6 py-20 md:px-10 lg:px-16">
      {/* Section Header */}
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

      {/* Loading */}
      {loading && (
        <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-[#eadfce] bg-white px-8 py-16 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fff4df] text-3xl">
            🎭
          </div>

          <p className="mt-6 text-base font-medium text-[#596176]">
            {content.loading}
          </p>
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-red-200 bg-red-50 px-8 py-16 text-center shadow-sm">
          <div className="text-4xl">⚠️</div>

          <p className="mt-5 text-base font-medium text-red-700">
            {content.error}
          </p>
        </div>
      )}

      {/* Events */}
      {!loading && !error && visibleEvents.length > 0 && (
        <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 justify-items-center gap-10 md:grid-cols-2">
          {visibleEvents.map((event) => (
            <EventCard
              key={event._id}
              event={event}
            />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && visibleEvents.length === 0 && (
        <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-[#eadfce] bg-white px-8 py-16 text-center shadow-sm">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fff4df] text-4xl">
            🎭
          </div>

          <h2 className="mt-6 font-serif text-3xl font-bold text-[#18213b]">
            {content.noEventsTitle}
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-[#596176]">
            {content.noEventsDescription}
          </p>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#b87821]">
            {content.comingSoon}
          </p>
        </div>
      )}
    </section>
  );
};

export default Events;