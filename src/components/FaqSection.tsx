import { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 1,
    question: "What age group is the AI & Robotics Summer Workshop for?",
    answer:
      "The workshop is designed for students aged 8–14 years. Activities and projects are tailored to different skill levels, so both beginners and those with some experience can benefit.",
  },
  {
    id: 2,
    question: "Do I need any prior coding or robotics experience?",
    answer:
      "No prior experience is needed! Our curriculum starts from the basics and gradually advances. We use visual programming tools and hands-on kits that make learning intuitive and fun.",
  },
  {
    id: 3,
    question: "How is the workshop conducted — online or offline?",
    answer:
      "The workshop is conducted entirely online via live interactive sessions. Students will receive all necessary software links and materials before the workshop begins.",
  },
  {
    id: 4,
    question: "What is the duration and schedule of the workshop?",
    answer:
      "The workshop runs for 4 weeks starting July 15, 2026. Sessions are held on weekdays with flexible timing options. Each session lasts approximately 1.5 hours.",
  },
];

const FaqSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div id="FAQ" className="flex-1">
      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 drop-shadow">
        Frequently Asked Questions
      </h3>
      <p className="text-white/60 text-sm mb-6">
        Everything you need to know about the workshop.
      </p>

      <div className="flex flex-col gap-3">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`rounded-xl border transition-all duration-300 overflow-hidden
                ${
                  isOpen
                    ? "bg-white/[0.12] border-amber-400/30 shadow-[0_0_20px_rgba(251,191,36,0.08)]"
                    : "bg-white/5 border-white/15 hover:bg-white/10 hover:border-white/25"
                }`}
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer
                  group transition-all duration-200"
              >
                <span
                  className={`font-semibold text-sm sm:text-base pr-4 transition-colors duration-200
                    ${isOpen ? "text-amber-300" : "text-white/90 group-hover:text-white"}`}
                >
                  {faq.question}
                </span>

                <span
                  className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full
                    border transition-all duration-300
                    ${
                      isOpen
                        ? "border-amber-400/40 bg-amber-400/10 rotate-180"
                        : "border-white/20 bg-white/5 group-hover:border-white/40"
                    }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 text-white/80"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out
                  ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="px-5 pb-4 pt-0">
                  <p className="text-white/60 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqSection;
