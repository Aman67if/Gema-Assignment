import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [apiMessage, setApiMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('https://gema-assignment-alpha.vercel.app/api/enquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "" });

    const data = await res.text();
    setApiMessage(data);
  };

  return (
    <div
      className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl
        rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-white/[0.12] hover:border-white/30"
    >
      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 drop-shadow">
        Get in Touch
      </h3>
      <p className="text-white/60 text-sm mb-6">
        Fill in your details and we'll reach out to you shortly.
      </p>

      <form id="userform" onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Name Field */}
        <div className="relative group">
          <label
            htmlFor="contact-name"
            className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2"
          >
            Full Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white
              placeholder-white/30 outline-none
              focus:border-amber-400/60 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(251,191,36,0.1)]
              transition-all duration-300"
          />
        </div>

        {/* Email Field */}
        <div className="relative group">
          <label
            htmlFor="contact-email"
            className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2"
          >
            Email Address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white
              placeholder-white/30 outline-none
              focus:border-amber-400/60 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(251,191,36,0.1)]
              transition-all duration-300"
          />
        </div>

        {/* Phone Field */}
        <div className="relative group">
          <label
            htmlFor="contact-phone"
            className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2"
          >
            Phone Number
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white
              placeholder-white/30 outline-none
              focus:border-amber-400/60 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(251,191,36,0.1)]
              transition-all duration-300"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-2 w-full py-3.5 rounded-full font-bold text-white text-sm uppercase tracking-wider
            bg-gradient-to-r from-amber-600/80 to-amber-800/80
            border border-amber-400/30 shadow-lg
            hover:from-amber-500/90 hover:to-amber-700/90 hover:border-amber-400/50
            hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]
            active:scale-[0.98]
            transition-all duration-300 cursor-pointer"
        >
          {submitted ? "✓ Message Sent!" : "Submit"}
        </button>

        {submitted && (
          <p className="text-center text-white font-bold text-sm animate-pulse">
            {apiMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
