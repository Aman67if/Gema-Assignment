import ContactForm from "./ContactForm";
import FaqSection from "./FaqSection";

const ContactFaqSection = () => {
  return (
    <section
      id="contact-section"
      className="w-full bg-[#2c1a12] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#3e2723] via-[#2c1a12] to-[#1a0e08] pointer-events-none" />

      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-700/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest
            bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-4">
            Connect With Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            Have Questions? <span className="text-amber-300">Let's Talk</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <ContactForm />
          <FaqSection />
        </div>
      </div>
    </section>
  );
};

export default ContactFaqSection;
