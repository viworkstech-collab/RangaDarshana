import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero-bg.jpg";

function Hero() {
  return (
    <section
      className="relative h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-white via-white/30 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-2xl">

          <p className="uppercase tracking-[0.35em] text-[#D4A04E] text-sm mb-6">
            ನಾಟಕ ಸಂಘ • EST. 1987 • BENGALURU
          </p>

          <h1 className="text-white leading-none font-serif">
            <span className="block text-7xl lg:text-8xl">
              Ranga
            </span>

            <span className="block text-7xl lg:text-8xl italic text-[#D4A04E]">
              Darshana
            </span>
          </h1>

          <p className="text-gray-200 text-xl mt-10 leading-9 max-w-xl">
            Celebrating the art of Kannada theatre through stories,
            culture and performance — a slow, luminous craft,
            staged since 1987.
          </p>

          <div className="flex flex-wrap gap-6 mt-12">

            <Link
              to="/plays"
              className="bg-[#D4A04E] text-black px-9 py-4 rounded-full font-medium hover:scale-105 transition"
            >
              Explore Our Plays
            </Link>

            <Link
              to="/videos"
              className="border border-white text-white px-9 py-4 rounded-full hover:bg-white hover:text-black transition"
            >
              Watch Performances
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
