import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const WorkshopSection = () => {
  const [activeDay, setActiveDay] = useState(0);
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section className="py-0 md:py-4 px-4">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* ===== TOP INTRO BLOCK ===== */}
        <AnimatedSection>
          <div className="bg-secondary/30 rounded-3xl px-6 md:px-10 py-12 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              The FM4 Therapy Live Workshop
            </h2>

            <p className="text-blue-100 max-w-3xl mx-auto mb-8">
              Wahi therapy jisne 30,000+ logon ko naturally pain-free life di,
              ab aapke liye available hai is exclusive 2-day live training mein.
              Yeh koi temporary fix nahi hai. Yeh ek complete system hai.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                "Aapke pain ki root cause—sirf symptoms nahi",
                "Muscle imbalances jo chronic conditions create karte hain",
                "Movement patterns jo aapko pain cycle mein rakhte hain",
                "Natural recovery bina medications ki dependency ke",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-left">
                  <span className="text-primary flex-shrink-0 mt-0.5">✅</span>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ===== DAY 1 & DAY 2 BLOCK ===== */}
        <AnimatedSection>
          <div className="bg-secondary/30 rounded-3xl px-6 md:px-10 py-12">
            <h3 className="text-2xl md:text-4xl font-bold text-center mb-8">
              Is 2-Day Live Workshop Mein Aap Kya Experience Karoge?
            </h3>

            {/* Mobile Scroll Wrapper Added */}
            <div className="md:hidden">
              <div
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar"
                onScroll={(e) => {
                  const scrollLeft = e.currentTarget.scrollLeft;
                  const width = e.currentTarget.offsetWidth;
                  const index = Math.round(scrollLeft / width);
                  setActiveDay(index);
                }}
              >

                {/* Day 1 */}
                <div className="card-gradient border border-border rounded-2xl p-6 md:p-8 shadow-card w-full min-w-full snap-center">
                  <h4 className="text-primary font-bold uppercase mb-4">
                    DAY 1: APNI ROOT CAUSE DISCOVER KARO
                  </h4>
                  <p className="text-foreground font-semibold mb-4">
                    Live Personalized Pain Assessment
                  </p>
                  <ul className="space-y-2 text-sm text-blue-100 mb-4">
                    <li>• Exact origin discover karo</li>
                    <li>• Overloaded muscles samjho</li>
                    <li>• Compensation patterns identify karo</li>
                    <li>• Previous treatments kaam kyun nahi kiye</li>
                    <li>• Specific condition clarity pao</li>
                  </ul>
                  <p className="text-primary text-sm italic">
                    "Exactly jaano ki aapka pain kyun ho raha hai, LIVE."
                  </p>
                </div>

                {/* Day 2 */}
                <div className="card-gradient border border-border rounded-2xl p-6 md:p-8 shadow-card w-full min-w-full snap-center">
                  <h4 className="text-primary font-bold uppercase mb-4">
                    DAY 2: FM4 THERAPY EXPERIENCE KARO
                  </h4>
                  <p className="text-foreground font-semibold mb-4">
                    Live FM4 Therapy Demonstration
                  </p>
                  <ul className="space-y-2 text-sm text-blue-100 mb-4">
                    <li>• Proven 4-phase treatment experience</li>
                    <li>• Immediate relief feel karo</li>
                    <li>• Ghar pe continue techniques seekho</li>
                    <li>• Recovery science samjho</li>
                    <li>• 30,000+ logon ne benefit liya</li>
                  </ul>
                  <p className="text-primary text-sm italic">
                    "Wahi therapy jisne 30,000+ logo ki help ki..."
                  </p>
                </div>

              </div>

              {/* Scroll Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {[0, 1].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeDay === i
                        ? "w-6 bg-primary"
                        : "w-2 bg-muted-foreground/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Original Desktop Layout Unchanged */}
            <div className="hidden md:flex gap-4">

  {/* Day 1 */}
  <div className="card-gradient border border-border rounded-2xl p-6 md:p-8 shadow-card flex-1">
    <h4 className="text-primary font-bold uppercase mb-4">
      DAY 1: APNI ROOT CAUSE DISCOVER KARO
    </h4>
    <p className="text-foreground font-semibold mb-4">
      Live Personalized Pain Assessment
    </p>
    <ul className="space-y-2 text-sm text-blue-100 mb-4">
      <li>• Exact origin discover karo</li>
      <li>• Overloaded muscles samjho</li>
      <li>• Compensation patterns identify karo</li>
      <li>• Previous treatments kaam kyun nahi kiye</li>
      <li>• Specific condition clarity pao</li>
    </ul>
    <p className="text-primary text-sm italic">
      "Exactly jaano ki aapka pain kyun ho raha hai, LIVE."
    </p>
  </div>

  {/* Day 2 */}
  <div className="card-gradient border border-border rounded-2xl p-6 md:p-8 shadow-card flex-1">
    <h4 className="text-primary font-bold uppercase mb-4">
      DAY 2: FM4 THERAPY EXPERIENCE KARO
    </h4>
    <p className="text-foreground font-semibold mb-4">
      Live FM4 Therapy Demonstration
    </p>
    <ul className="space-y-2 text-sm text-blue-100 mb-4">
      <li>• Proven 4-phase treatment experience</li>
      <li>• Immediate relief feel karo</li>
      <li>• Ghar pe continue techniques seekho</li>
      <li>• Recovery science samjho</li>
      <li>• 30,000+ logon ne benefit liya</li>
    </ul>
    <p className="text-primary text-sm italic">
      "Wahi therapy jisne 30,000+ logo ki help ki..."
    </p>
  </div>

</div>
          </div>
        </AnimatedSection>

        {/* ===== PHASES + PRACTICAL BLOCK ===== */}
        <AnimatedSection>
          <div className="bg-secondary/30 rounded-3xl px-6 md:px-10 py-12">

            <h3 className="text-2xl md:text-4xl font-bold text-center mb-8">
              Workshop Mein Hum Kya Cover Karenge
            </h3>

            {/* Mobile Scroll Added */}
            <div className="md:hidden">
              <div
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar"
                onScroll={(e) => {
                  const scrollLeft = e.currentTarget.scrollLeft;
                  const width = e.currentTarget.offsetWidth;
                  const index = Math.round(scrollLeft / width);
                  setActivePhase(index);
                }}
              >
                {[
                  { title: "Phase 1: Identify", text: "Root cause pinpoint karo." },
                  { title: "Phase 2: Release", text: "Muscle tension release karo." },
                  { title: "Phase 3: Strengthen", text: "Weak muscles reactivate karo." },
                  { title: "Phase 4: Restore", text: "Mobility protocols implement karo." },
                ].map((phase, i) => (
                  <div
                    key={i}
                    className="card-gradient border border-border rounded-2xl p-4 shadow-card w-full min-w-full snap-center"
                  >
                    <h4 className="text-primary font-bold mb-3">{phase.title}</h4>
                    <p className="text-sm text-blue-100">{phase.text}</p>
                  </div>
                ))}
              </div>

              {/* Scroll Dots */}
              <div className="flex justify-center gap-2 mt-4 mb-6">
                {[0, 1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activePhase === i
                        ? "w-6 bg-primary"
                        : "w-2 bg-muted-foreground/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Original Desktop Grid Unchanged */}
            <div className="hidden md:grid md:grid-cols-4 gap-4 mb-10">
              {[
                { title: "Phase 1: Identify", text: "Root cause pinpoint karo." },
                { title: "Phase 2: Release", text: "Muscle tension release karo." },
                { title: "Phase 3: Strengthen", text: "Weak muscles reactivate karo." },
                { title: "Phase 4: Restore", text: "Mobility protocols implement karo." },
              ].map((phase, i) => (
                <div key={i} className="card-gradient border border-border rounded-2xl p-4 shadow-card">
                  <h4 className="text-primary font-bold mb-3">{phase.title}</h4>
                  <p className="text-sm text-blue-100">{phase.text}</p>
                </div>
              ))}
            </div>

            {/* Practical Applications Unchanged */}
            <div className="card-gradient border border-border rounded-2xl p-6">
              <h4 className="text-primary font-bold mb-4 text-center">
                Plus: Practical Applications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Morning stiffness prevent karne ke liye",
                  "Desk setup pain-free work ke liye",
                  "Sleep positions optimal recovery ke liye",
                  "Daily habits jo healing support karte hain",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-primary">✅</span>
                    <span className="text-sm text-blue-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default WorkshopSection;
