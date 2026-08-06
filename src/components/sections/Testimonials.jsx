import { useLanguage } from "../../i18n/LanguageContext";

function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
  
    {
      quote: t.testimonial.testimonial1Quote,
      author: t.testimonial.testimonial1Author,
      role: t.testimonial.testimonial1Role,
    },
    {
      quote: t.testimonial.testimonial2Quote,
      author: t.testimonial.testimonial2Author,
      role: t.testimonial.testimonial2Role,
    },
    {
      quote: t.testimonial.testimonial3Quote,
      author: t.testimonial.testimonial3Author,
      role: t.testimonial.testimonial3Role,
    },
  ];

  return (
    <section className="bg-[#7A1F1F] text-[#F6E5D0] py-28">
      <div className="max-w-7xl mx-auto px-10">

        <div className="flex items-center gap-4 mb-20">
          <div className="w-16 h-[1px] bg-[#D9A55A]" />
          <p className="uppercase tracking-[6px] text-[#D9A55A] text-sm">
            {t.testimonial.label}
          </p>
        </div>

        <h2 className="font-serif text-6xl text-center mb-20">
          {t.testimonial.title}
        </h2>


        <div className="grid lg:grid-cols-3 gap-20">
          {testimonials.map((item, index) => (
            <div key={index}>
              <p className="font-serif italic text-[34px] leading-[1.6]">
                "{item.quote}"
              </p>

              <div className="mt-12 uppercase tracking-[4px] text-[#D9A55A] text-sm font-medium">
                {item.author}
                <span className="mx-2">—</span>
                {item.role}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;