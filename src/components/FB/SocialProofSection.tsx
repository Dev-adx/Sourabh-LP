import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  {
    value: 30000,
    suffix: "+",
    text: "Spine, Knee & Neck Pain Cases Successfully Reversed",
  },
  {
    value: 5000,
    suffix: "+",
    text: "Surgeries Avoid Kari FM4 Therapy Se",
  },
  {
    value: 100,
    prefix: "₹",
    suffix: " Cr+",
    text: "Medical Bills Bachaye 10 Saal Mein",
  },
  {
    value: 1000,
    suffix: "+",
    text: "Verified 5-Star Google Reviews",
  },
];

const SocialProofSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="py-0 md:py-2 px-4">
      <div className="max-w-6xl mx-auto bg-secondary/30 rounded-2xl px-6 md:px-10 py-8 md:py-10">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          Aise Numbers Jo Khud Bolte Hain
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`card-gradient border border-border rounded-xl p-6 text-center shadow-card 
              transition-all duration-700 ease-out transform ${
                isVisible
                  ? "opacity-100 translate-y-0 rotate-0 scale-100"
                  : "opacity-0 translate-y-12 rotate-6 scale-95"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="text-2xl md:text-3xl font-black text-gradient mb-2">
                <AnimatedCounter
                  end={s.value}
                  prefix={s.prefix || ""}
                  suffix={s.suffix || ""}
                  start={isVisible}
                />
              </div>

              <p className="text-sm text-blue-100">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
