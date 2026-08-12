import { useLanguage } from "../../i18n/LanguageContext";

const AchievementCard = ({
  image,
  period,
  title,
  description,
  details,
  reverse,
}) => {
  const { language } = useLanguage();
  
  const currentPeriod =
    typeof period === "object" ? period[language] : period;

  const currentTitle =
    typeof title === "object" ? title[language] : title;

  const currentDescription =
    typeof description === "object"
      ? description[language]
      : description;

  const currentDetails =
    typeof details === "object" ? details[language] : details;

  return (
    <article className="grid items-center gap-10 md:grid-cols-2 md:gap-16">

      {/* Image */}
      <div className={reverse ? "md:order-2" : "md:order-1"}>
        <div className="group relative overflow-hidden rounded-2xl">

          <img
            src={image}
            alt={currentTitle}
            className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[420px]"
          />

          <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/0" />
        </div>
      </div>

      {/* Story */}
      <div className={reverse ? "md:order-1" : "md:order-2"}>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
          {currentPeriod}
        </p>

        <h3 className="text-2xl font-bold leading-tight text-gray-900 md:text-4xl">
          {currentTitle}
        </h3>

        <div className="mt-5 h-1 w-16 bg-yellow-500" />

        <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
          {currentDescription}
        </p>

        <p className="mt-5 border-l-4 border-yellow-500 pl-5 text-base leading-8 text-gray-700">
          {currentDetails}
        </p>

      </div>

    </article>
  );
};

export default AchievementCard;