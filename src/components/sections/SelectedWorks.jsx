import { Link } from "react-router-dom";
import play1 from "../../assets/images/plays/play1.jpg";
import play2 from "../../assets/images/plays/play2.jpg";
import play3 from "../../assets/images/plays/play3.jpg";

const plays = [
  {
    id: 1,
    image: play1,
    title: "Neeruli",
  },
  {
    id: 2,
    image: play2,
    title: "Kaadina Haadu",
  },
  {
    id: 3,
    image: play3,
    title: "Yakshagana",
  },
];

function SelectedWorks() {
  return (
    <section className="bg-[#FAF8F5] py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="flex justify-between items-center mb-16">

          <div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-[1px] bg-[#C89A53]" />
              <p className="uppercase tracking-[6px] text-[#8C6239] text-sm">
                Selected Works
              </p>
            </div>

            <h2 className="font-serif text-6xl text-[#2B2B2B]">
              Plays from the repertory.
            </h2>

          </div>

          <Link to="/gallery" className="uppercase tracking-[6px] text-[#7B2D26] hover:text-[#C59D5F] transition">
            View All →
          </Link>

        </div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {plays.map((play) => (
            <div key={play.id} className="group">

              <div className="relative mb-6 overflow-hidden rounded-2xl h-80 bg-gray-300">

                <img
                  src={play.image}
                  alt={play.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                />

              </div>

              <h3 className="font-serif text-3xl text-[#2B2B2B]">
                {play.title}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default SelectedWorks;
