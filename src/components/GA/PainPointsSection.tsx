import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const painPoints = [
  "Aapne painkillers try kiye, kuch ghanton ke liye kaam karte hain, phir pain wapas aa jata hai",
  "Aapne physiotherapy karwayi, temporarily help karti hai, lekin last nahi karti",
  "Aapne massage karwaye, us waqt achha lagta hai, pain wapas aa jata hai",
  "Aapne lakhs kharch kiye treatments pe, phir bhi pain hai",
  'Doctors kehte hain "it\'s age" ya "iske saath jeena seekho"',
  "Doctors kehte hain surgery ka time aa gaya hai...",
];

const PainPointsSection = () => {
  const [checked, setChecked] = useState<boolean[]>(new Array(painPoints.length).fill(false));
  const toggle = (i: number) => {
    setChecked(prev => { const next = [...prev]; next[i] = !next[i]; return next; });
  };
  const count = checked.filter(Boolean).length;

  return (
    <section className="py-12 md:py-8 px-4">
  <div className="max-w-4xl mx-auto bg-secondary/30 rounded-2xl px-6 md:px-10 py-8 md:py-10">

        <AnimatedSection>
          <h2 className=" font-black text-center text-2xl md:text-4xl mb-4">
            Kya Aap Apni Spine, Knee, Ya Neck Pain Ko Reverse Karne Mein Struggle Kar Rahe Hain?
          </h2>
          <p className="font-bold text-blue-100 text-center text-lg md:text-xl mb-1">
            Agar haan, toh aap akele nahi hain. Thousands of patients ne same challenges face kiye hain.
          </p>
          <span className="block text-primary font-bold text-center text-lg md:text-xl mb-6 mt-10">
            Neeche click karke batao aap kya experience kar rahe ho:
          </span>
          <div className="space-y-3">
            {painPoints.map((p, i) => (
              <button key={i} onClick={() => toggle(i)}
                className={`w-full flex items-start gap-3 card-gradient border rounded-xl p-4 shadow-card text-left transition-all ${checked[i] ? "border-primary" : "border-border"}`}>
                <div className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all ${checked[i] ? "bg-primary border-primary" : "border-muted-foreground"}`}>
                  {checked[i] && (
                    <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <p className="text-foreground text-sm md:text-base">{p}</p>
              </button>
            ))}
          </div>
          {count >= 2 && (
            <div className="mt-10 card-gradient border border-primary/30 rounded-xl p-6 text-center shadow-glow animate-fade-in">
              <p className="text-foreground">
                Agar aapne 2 se zyada boxes check kiye hain... <strong>Congratulations...</strong>
              </p>
              <p className="text-muted-foreground mt-2">
                Aap officially pain ke saath hamesha jeene waale hain...{" "}
                <strong className="text-primary">jab tak aap kuch naya try nahi karte.</strong>
              </p>
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PainPointsSection;
