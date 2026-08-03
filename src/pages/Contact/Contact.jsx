import { useLanguage } from "../../i18n/LanguageContext";

function Contact() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white">
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#2B2B2B] mb-6">
          {language === "en" ? "Get in Touch" : "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ"}
        </h1>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-serif font-bold text-[#2B2B2B] mb-4">📍 {language === "en" ? "Address" : "ವಿಳಾಸ"}</h3>
            <p className="text-[#5A4C47]">Ranga Darshana Studio<br/>120-Seat Black Box Theatre<br/>Bengaluru, Karnataka<br/>India - 560001</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-serif font-bold text-[#2B2B2B] mb-4">📞 {language === "en" ? "Phone" : "ದೂರವಾಣಿ"}</h3>
            <p className="text-[#5A4C47]">+91 (80) 2345-6789<br/>+91 98765-43210</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-serif font-bold text-[#2B2B2B] mb-4">✉️ {language === "en" ? "Email" : "ಇಮೇಲ್"}</h3>
            <p className="text-[#5A4C47]">info@rangadarshana.com<br/>bookings@rangadarshana.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;