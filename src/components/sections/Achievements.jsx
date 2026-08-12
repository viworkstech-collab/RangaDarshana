import AchievementCard from "../ui/AchievementCard";
import achievements from "../../data/achievements";

const Achievement = () => {


  return (
    <section className="bg-white">

      {/* Introduction */}
      <div className="mx-auto max-w-5xl px-6 pb-16 pt-20 text-center md:pb-24 md:pt-28">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600">
          Our Journey
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
          Stories Written Through the Years
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
          From theatre productions and festivals to training, folk arts and
          community activities, every chapter has contributed to the journey
          of Rangadarshana.
        </p>
      </div>

      {/* Story Sections */}
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {achievements.map((achievement, index) => (
          <div key={achievement.id} className="relative">

            <AchievementCard
              image={achievement.image}
              period={achievement.period}
              title={achievement.title}
              description={achievement.description}
              details={achievement.details}
              reverse={index % 2 !== 0}
            />

            {/* Scroll connector */}
            {index !== achievements.length - 1 && (
              <div className="mx-auto flex h-24 items-center justify-center">
                <div className="h-16 w-px bg-yellow-500" />
              </div>
            )}

          </div>
        ))}

      </div>

      {/* Awards placeholder - LAST */}
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:px-10 md:pt-28">

        <div className="border-t border-gray-200 pt-16 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600">
            Recognition
          </p>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-5xl">
            Awards & Honours
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            Awards and honours received by Rangadarshana will be presented
            here. The official list will be added once it is provided.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Achievement;