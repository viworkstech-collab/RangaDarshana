const testimonials = [
  {
    id: 1,
    name: "Dr. Girish Karnad",
    role: "Playwright",
    quote:
      "Ranga Darshana continues to preserve the soul of Kannada theatre with remarkable dedication and artistic excellence.",
  },
  {
    id: 2,
    name: "Audience Member",
    role: "Theatre Enthusiast",
    quote:
      "Every performance leaves a lasting impression. The storytelling, music and performances are unforgettable.",
  },
  {
    id: 3,
    name: "The Hindu",
    role: "Media Review",
    quote:
      "A theatre group that has consistently elevated Kannada drama through innovation while respecting tradition.",
  },
];

function Testimonials() {
  return (
    <section className="bg-[#3D1F1A] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-[#D4A04E] text-sm mb-4">
            TESTIMONIALS
          </p>

          <h2 className="font-serif text-5xl md:text-6xl">
            Voices from the Stage
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-[#5A342C] bg-[#4A2721] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 text-5xl text-[#D4A04E]">
                ❝
              </div>

              <p className="leading-8 text-gray-200">
                {item.quote}
              </p>

              <div className="mt-10">
                <h3 className="font-semibold text-xl">
                  {item.name}
                </h3>

                <p className="text-[#D4A04E] mt-1">
                  {item.role}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
