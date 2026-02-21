import AnimatedSection from "./AnimatedSection";
import { useNavigate } from "react-router-dom";

const urgencyItems = [
  { text: "Zyada Pain:", desc: "Untreated conditions time ke saath worse hoti hain" },
  { text: "Lost Experiences:", desc: "Activities miss ho rahi hain jo aap love karte hain" },
  { text: "Higher Costs:", desc: "Baad mein zyada expensive treatments" },
  { text: "Surgery Ka Risk:", desc: "Irreversible procedures jo aap avoid kar sakte the" },
  { text: "Quality of Life:", desc: "Pain mein guzra har din woh din hai jo wapas nahi aa sakta" },
];

const UrgencySection = () => {
  const navigate = useNavigate();
  return (
  <section className="py-0 md:py-6 px-4">
    <div className="max-w-3xl mx-auto bg-secondary/30 rounded-2xl px-6 md:px-10 py-8 md:py-10 text-center">
      <AnimatedSection>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Bohot Der Hone Ka Wait Mat Karo</h2>
        <p className="text-blue-100 text-lg font-bold md:text-xl mb-8">Har din delay karne se aap yeh kho rahe hain:</p>
        <div className="space-y-3 text-left mb-8">
          {urgencyItems.map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-2 text-center">
              <span className="text-destructive flex-shrink-0"></span>
              <p className="text-lg text-foreground"><strong className="text-[#FFA000]">{item.text}</strong> {item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-primary font-semibold mb-6">41 Seats Bachi Hain | Aapki Pain-Free Life Yahan Se Start Hoti Hai</p>
        <button
  onClick={() => {
    navigate("/register-section-eg");
  }}
  className="relative px-24 py-4 rounded-xl 
  bg-gradient-to-r from-[#FF8A00] via-[#FFA000] to-[#FF6A00]
  text-black font-bold text-lg
  shadow-[0_0_25px_rgba(255,140,0,0.6)]
  transition-all duration-300
  hover:scale-105 hover:-translate-y-1
  hover:shadow-[0_0_45px_rgba(255,140,0,0.9)]
  active:scale-95"
>
  APNI SEAT ABHI CLAIM KAREIN
</button>

      </AnimatedSection>
    </div>
  </section>
);
}

export default UrgencySection;
