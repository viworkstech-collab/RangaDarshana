const ContactCard = ({ icon, title, children }) => {
  return (
    <div className="rounded-2xl border border-[#eadfce] bg-white p-8 shadow-[0_12px_35px_rgba(76,55,32,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(76,55,32,0.16)]">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#fff4df] text-2xl">
        {icon}
      </div>

      <h2 className="font-serif text-2xl font-bold text-[#18213b]">
        {title}
      </h2>

      <div className="mt-4 h-[2px] w-10 bg-[#d98b19]" />

      <div className="mt-5 text-[15px] leading-7 text-[#596176]">
        {children}
      </div>
    </div>
  );
};

export default ContactCard;