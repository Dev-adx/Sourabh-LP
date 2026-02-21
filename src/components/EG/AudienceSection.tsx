import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const audiences = [
  { emoji: "💼", title: "Busy Business Owners", text: "Jo frustrating back, neck, ya knee pain ki wajah se business manage karne mein struggle kar rahe hain" },
  { emoji: "🖥️", title: "Desk Job Employees", text: "Jo long hours baith kar kaam karte hain aur back-induced pain eliminate karna chahte hain" },
  { emoji: "🧓", title: "Older Adults (55+)", text: "Jo gentle yet effective techniques se pain relieve karna aur mobility improve karna chahte hain" },
  { emoji: "👩‍👧", title: "Working Moms", text: "Jo chronic body pain ki wajah se daily activities manage karne mein difficulties face kar rahi hain" },
  { emoji: "🏃", title: "Athletes & Active Individuals", text: "Jinki pain unki performance aur favorite activities ko limit kar rahi hai" },
  { emoji: "🏥", title: "Surgery Soch Rahe Hain Jo Log", text: "Jo irreversible decisions lene se pehle natural alternatives explore karna chahte hain" },
];

const AudienceSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-10 md:py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>

          <div className="bg-secondary/30 rounded-3xl px-6 md:px-10 py-12">

            <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
              Yeh Un Logon Ke Liye Hai Jo Kisi Bhi Industry Mein Pain Mein Hain
            </h2>

            {/* Mobile Scroll */}
            <div className="md:hidden">

              <div
                className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory"
                onScroll={(e) => {
  const scrollLeft = e.currentTarget.scrollLeft;
  const cardWidth = 276; // 260px card + 16px gap
  const index = Math.round(scrollLeft / cardWidth);
  setActive(index);
}}

              >
                {audiences.map((a, i) => (
                  <div
                    key={i}
                    className="card-gradient border border-border rounded-2xl p-5 shadow-card w-[260px] min-w-[260px] snap-center flex-shrink-0"
                  >
                    <span className="text-2xl mb-2 block">{a.emoji}</span>
                    <h3 className="text-foreground font-bold text-sm mb-2">{a.title}</h3>
                    <p className="text-xs text-blue-100 leading-relaxed">{a.text}</p>
                  </div>
                ))}
              </div>

              {/* Scroll Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {audiences.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      active === i
                        ? "w-6 bg-primary"
                        : "w-2 bg-muted-foreground/40"
                    }`}
                  />
                ))}
              </div>

            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {audiences.map((a, i) => (
                <div
                  key={i}
                  className="card-gradient border border-border rounded-2xl p-6 shadow-card hover:-translate-y-2 hover:shadow-glow transition-all duration-300"
                >
                  <span className="text-3xl mb-3 block">{a.emoji}</span>
                  <h3 className="text-foreground font-bold mb-2">{a.title}</h3>
                  <p className="text-sm text-blue-100">{a.text}</p>
                </div>
              ))}
            </div>

          </div>

        </AnimatedSection>
      </div>
    </section>
  );
};

export default AudienceSection;
