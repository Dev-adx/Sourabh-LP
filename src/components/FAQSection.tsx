import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  { q: "Kya aap severe conditions ke liye complete pain relief ki guarantee de sakte hain?", a: "Jabki humari 30,000+ success rate hai, results aapki specific condition, consistency, aur commitment pe depend karte hain. Hum honest assessments aur realistic timelines provide karte hain." },
  { q: "FM4 Therapy exactly kya hai?", a: "FM4 ek proven 4-phase treatment hai jo spine, neck, aur knees mein pain ki root causes ko target karta hai. Ismein shamil hai: Cause identify karna, Muscle tension release karna, Weak muscles strengthen karna, Flexibility improve karna." },
  { q: "Yeh workshop kaise deliver hota hai?", a: "Yeh ek LIVE online workshop hai jo 2 days mein video conference ke through conduct hota hai. Aapko stable internet connection aur ek device chahiye hoga." },
  { q: "Kya mujhe koi special equipment chahiye?", a: "Nahi! Workshop mein jo bhi demonstrate hoga woh zero equipment ke saath kiya ja sakta hai." },
  { q: "FM4 physiotherapy ya chiropractic se kaise alag hai?", a: "Traditional treatments aksar pain location pe focus karte hain. FM4 Therapy compensatory patterns identify karti hai—kyun ek weak muscle dusre muscles ko overwork karne pe majboor karta hai." },
  { q: "Kya yeh elderly logon ke liye suitable hai?", a: "Bilkul! Humne 60-80+ age ke patients ko successfully treat kiya hai. Techniques gentle aur safe hain." },
  { q: "Purani injuries ke liye kaam karega ya sirf recent pain ke liye?", a: "FM4 Therapy acute aur chronic dono conditions ke liye kaam karti hai. Humari kai success stories aise pain ki hain jinke saath patients 10-20+ saal se jee rahe the." },
  { q: "Workshop ke baad kya hota hai?", a: "Aapko ghar pe continue karne ke liye actionable techniques milenge, ongoing practice ke liye resources, aur extended FM4 Therapy programs ke baare mein information." },
  { q: "Kya koi refund policy hai?", a: "Is workshop ki deeply discounted nature ki wajah se, sabhi sales final hain. Lekin hum value mein confident hain—30,000+ logon ne hum pe bharosa kiya hai." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-10 md:py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>

          <div className="bg-secondary/30 rounded-3xl px-6 md:px-10 py-12">

            <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
              Aam Sawaal (FAQ)
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="card-gradient border border-border rounded-xl overflow-hidden shadow-card transition-all duration-300"
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-white/5 transition"
                  >
                    <span className="text-foreground font-semibold text-sm md:text-base pr-4">
                      {faq.q}
                    </span>

                    {/* Animated Icon */}
                    <span
                      className={`text-primary text-xl flex-shrink-0 transition-transform duration-300 ${
                        open === i ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      open === i
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden px-6 pb-4">
                      <p className="text-yellow-600 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;
