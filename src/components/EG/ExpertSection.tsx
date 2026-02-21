import { useState, useEffect, useRef } from "react";
import celebrity1 from "@/assets/celebrity-1.webp";
import celebrity2 from "@/assets/celebrity-2.webp";
import celebrity3 from "@/assets/celebrity-3.webp";
import AnimatedSection from "./AnimatedSection";

const ExpertSection = () => {
  const images = [celebrity1, celebrity2, celebrity3];
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;

      const cardWidth =
        container.firstElementChild?.clientWidth || container.offsetWidth;

      const nextIndex = (active + 1) % images.length;

      container.scrollTo({
        left: cardWidth * nextIndex,
        behavior: "smooth",
      });

      setActive(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [active, images.length]);

  // Detect manual scroll
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth =
      container.firstElementChild?.clientWidth || container.offsetWidth;

    const index = Math.round(container.scrollLeft / cardWidth);
    setActive(index);
  };

  return (
    <section className="mt-1 md:mt-0 py-1 md:py-4 px-4">
      <div className="max-w-6xl mx-auto bg-secondary/30 rounded-2xl px-6 md:px-10 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="text-primary text-center text-2xl font-semibold mb-2">
              Meet Your Expert
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
              Hi, Main Sourobh Kulkorni
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-blue-100 mb-4 text-sm md:text-base leading-relaxed">
                  Main Sourobh Kulkorni hoon, FM4 Therapy ka founder aur India ki only government-patented, 4-phase pain relief system ka creator. Certified Health Care Professional, Nutritionist, Diet Consultant, Personal Trainer, aur Rehabilitation Specialist hoon international recognition ke saath.
                </p>
                <p className="text-blue-100 mb-6 text-sm md:text-base leading-relaxed">
                  FM4 Therapy government-patented hai, India mein scientifically validated 4-phase treatment hai jo spine, knee, aur neck pain ki root causes ko target karta hai bina medicines, surgeries, ya traditional physiotherapy ke.
                </p>

                <div className="card-gradient border border-primary/30 rounded-xl p-4 mb-6 shadow-glow">
                  <p className="text-primary font-bold">
                    Amazing Performer in Fitness Industry 2024
                  </p>
                </div>

                <div className="space-y-2 mb-8">
                  {[
                    "30,000+ clients ne chronic pain overcome kiya",
                    "5,000+ surgeries avoid ki",
                    "₹100+ crores medical bills mein bachaye",
                    "Government-patented FM4 Therapy",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-primary flex-shrink-0">✓</span>
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-foreground font-bold mb-4">
                  Sourobh Ka Approach Kaam Kyun Karta Hai:
                </h3>
                <div className="space-y-2">
                  {[
                    "Aapke body mein actual mechanical breakdown identify karna",
                    "Muscle tension aur nerve pressure release karna",
                    "Weak support systems strengthen karna",
                    "Natural movement patterns restore karna",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-primary flex-shrink-0">→</span>
                      <span className="text-sm text-blue-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photos - same size, same layout, only auto scroll added */}
              <div>
                <div
                  ref={scrollRef}
                  onScroll={handleScroll}
                  className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory scroll-smooth"
                >
                  {[celebrity1, celebrity2, celebrity3].map((img, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden shadow-card min-w-[85vw] w-[85vw] sm:min-w-[320px] sm:w-[320px] md:min-w-[380px] md:w-[380px] lg:min-w-[420px] lg:w-[420px] snap-center flex-shrink-0"
                    >
                      <img
                        src={img}
                        alt={`Sourobh Kulkarni ${i + 1}`}
                        className="w-full aspect-[4/5] object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Scroll Dots */}
                <div className="flex justify-center gap-2 mt-4">
                  {images.map((_, i) => (
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

            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
