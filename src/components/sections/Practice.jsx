import { Link } from "react-router-dom";

function Practice() {
  return (
    <section className="bg-[#FAF8F5] py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

        {/* Left */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-[1px] bg-[#C59D5F]" />
            <p className="uppercase tracking-[6px] text-sm text-[#8C6239]">
              OUR PRACTICE
            </p>
          </div>

          <h2 className="text-6xl font-serif leading-tight text-[#2B2B2B]">
            A theatre of quiet weight.
          </h2>
        </div>

        {/* Right */}
        <div className="space-y-8">

          <p className="text-xl leading-10 text-gray-700">
            For nearly four decades, Ranga Darshana has staged plays that treat
            the Kannada language as a living instrument — its consonants, its
            silences and its songs.
          </p>

          <p className="text-xl leading-10 text-gray-700">
            Our repertory spans folk revival, chamber theatre, historical
            portraiture and contemporary musicals — always in Kannada, always
            in service of the story.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-4 mt-10 uppercase tracking-[6px] text-[#7B2D26] hover:gap-6 transition-all"
          >
            READ OUR STORY →
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Practice;
