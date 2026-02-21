import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  { quote: "Maine knee replacement surgery avoid ki. FM4 Therapy ne meri life badal di!", name: "Mrs. Sharma", info: "62 years, Delhi" },
  { quote: "5 saal mein pehli baar pain-free hoon. Business pe focus kar pa raha hoon ab.", name: "Rajesh K.", info: "Business Owner, Mumbai" },
  { quote: "Ab main apne bacchon ke saath khel sakti hoon bina kisi pain ke.", name: "Priya M.", info: "Working Mom, Pune" },
  { quote: "Doctors ne surgery bola tha, FM4 se naturally pain khatam hua. Unbelievable!", name: "Ankit S.", info: "IT Professional, Bangalore" },
  { quote: "20 saal purana back pain 3 months mein gone. Worth every penny.", name: "Suresh P.", info: "Retired, Hyderabad" },
  { quote: "Mere father 72 saal ke hain, ab daily walk karte hain pain-free.", name: "Meera D.", info: "Daughter of patient, Chennai" },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-10 md:py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>

          <div className="bg-secondary/30 rounded-3xl px-6 md:px-10 py-12">

            {/* Heading */}
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
              Humare ab pain-free Clients se hi sunlo
            </h2>

            {/* Google Rating */}
            <div className="flex items-center justify-center gap-2 text-primary mb-10">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span>⭐⭐⭐⭐⭐ Rated 4.6 | 1000+ Google Reviews</span>
            </div>

            {/* MOBILE SCROLL */}
            <div className="md:hidden">
              <div
                className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar"
                onScroll={(e) => {
                  const scrollLeft = e.currentTarget.scrollLeft;
                  const width = e.currentTarget.offsetWidth;
                  const index = Math.round(scrollLeft / width);
                  setActive(index);
                }}
              >
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="card-gradient border border-border rounded-2xl p-5 shadow-card w-full min-w-full snap-center flex-shrink-0"
                  >
                    <p className="text-foreground italic text-sm mb-4 leading-relaxed">
                      "{t.quote}"
                    </p>

                    <div className="flex items-center gap-2">
                      <p className="text-primary font-bold text-sm">{t.name}</p>

                      {/* Verified Badge */}
                      <span className="bg-primary text-black text-[10px] px-2 py-0.5 rounded-full font-semibold">
                        ✔ Verified
                      </span>
                    </div>

                    <p className="text-muted-foreground text-xs mt-1">
                      {t.info}
                    </p>
                  </div>
                ))}
              </div>

              {/* Scroll Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, i) => (
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

            {/* DESKTOP GRID */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="card-gradient border border-border rounded-2xl p-6 shadow-card 
                             hover:-translate-y-2 hover:shadow-glow 
                             transition-all duration-300"
                >
                  <p className="text-foreground italic text-sm mb-4">
                    "{t.quote}"
                  </p>

                  <div className="flex items-center gap-2">
                    <p className="text-primary font-bold text-sm">{t.name}</p>
                    <span className="bg-primary text-black text-[10px] px-2 py-0.5 rounded-full font-semibold">
                      ✔ Verified
                    </span>
                  </div>

                  <p className="text-muted-foreground text-xs mt-1">
                    {t.info}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
