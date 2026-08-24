import { MapPin, Building2, CalendarDays, Clock3, Ticket } from "lucide-react";
import { useContext } from "react";
import { useLanguage } from "../../i18n/LanguageContext";

const EventCard = ({ event }) => {
  const { language } = useLanguage();

  const currentLanguage = language === "kn" ? "kn" : "en";

  const title = event.title?.[currentLanguage] || event.title?.en;
  const description =
    event.description?.[currentLanguage] || event.description?.en;
  const location = event.location?.[currentLanguage] || event.location?.en;
  const venue = event.venue?.[currentLanguage] || event.venue?.en;

  const formattedDate = new Date(event.date).toLocaleDateString(
    currentLanguage === "kn" ? "kn-IN" : "en-IN",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  const labels =
    currentLanguage === "kn"
      ? {
          location: "ಸ್ಥಳ",
          venue: "ವೇದಿಕೆ",
          date: "ದಿನಾಂಕ",
          time: "ಸಮಯ",
          book: "ಟಿಕೆಟ್ ಬುಕ್ ಮಾಡಿ",
        }
      : {
          location: "Location",
          venue: "Venue",
          date: "Date",
          time: "Time",
          book: "Book Tickets",
        };

  return (
    <article className="group w-full max-w-md overflow-hidden rounded-2xl border border-[#eadfce] bg-white shadow-[0_12px_35px_rgba(76,55,32,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(76,55,32,0.16)]">
      {/* Event Image */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff7e6] via-[#f8ecd9] to-[#f1dfc3]">
        {event.image ? (
          <img
            src={event.image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-[#a34732]">
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-[#e3b66b] bg-white/70">
              <Ticket size={30} strokeWidth={1.5} />
            </div>

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b87821]">
              Rangadarshana
            </span>

            <span className="mt-1 text-sm text-[#7b6250]">
              Theatre &amp; Performing Arts
            </span>
          </div>
        )}

        <div className="absolute left-5 top-5 rounded-full border border-[#e3b66b] bg-white/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#a34732] shadow-sm">
          {currentLanguage === "kn" ? "ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮ" : "Upcoming Event"}
        </div>
      </div>

      {/* Event Content */}
      <div className="p-7">
        <h2 className="font-serif text-2xl font-bold leading-tight text-[#18213b]">
          {title}
        </h2>

        <div className="mt-4 h-px w-14 bg-[#d98b19]" />

        <p className="mt-5 text-[15px] leading-7 text-[#596176]">
          {description}
        </p>

        {/* Event Details */}
        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3">
            <MapPin
              size={19}
              strokeWidth={1.8}
              className="mt-0.5 shrink-0 text-[#c77a16]"
            />

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8b8176]">
                {labels.location}
              </p>
              <p className="mt-1 text-sm font-medium text-[#30384e]">
                {location}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Building2
              size={19}
              strokeWidth={1.8}
              className="mt-0.5 shrink-0 text-[#c77a16]"
            />

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8b8176]">
                {labels.venue}
              </p>
              <p className="mt-1 text-sm font-medium text-[#30384e]">
                {venue}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CalendarDays
              size={19}
              strokeWidth={1.8}
              className="mt-0.5 shrink-0 text-[#c77a16]"
            />

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8b8176]">
                {labels.date}
              </p>
              <p className="mt-1 text-sm font-medium text-[#30384e]">
                {formattedDate}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock3
              size={19}
              strokeWidth={1.8}
              className="mt-0.5 shrink-0 text-[#c77a16]"
            />

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8b8176]">
                {labels.time}
              </p>
              <p className="mt-1 text-sm font-medium text-[#30384e]">
                {event.time}
              </p>
            </div>
          </div>
        </div>

        {/* Booking Button */}
        <a
          href={event.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#e97900] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#c96300] hover:shadow-lg"
        >
          <Ticket size={18} />
          {labels.book}
        </a>
      </div>
    </article>
  );
};

export default EventCard;