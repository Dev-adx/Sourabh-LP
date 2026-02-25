import AnimatedSection from "./AnimatedSection";
import { useNavigate } from "react-router-dom";



const PricingSection = () => {
  const navigate = useNavigate();
  return (
  <section className="py-1 md:py-6 px-4">
    <div className="max-w-lg mx-auto bg-secondary/30 rounded-2xl px-6 md:px-8 py-8 md:py-10">
      <AnimatedSection>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          Limited Seats Available—Abhi Register Karein
        </h2>
        <div className="card-gradient border border-primary/30 rounded-2xl p-8 text-center shadow-glow">
          <div className="mb-6">
            <span className="text-muted-foreground line-through text-lg">₹499</span>
            <span className="text-4xl md:text-5xl font-black text-gradient ml-3">₹99</span>
          </div>
          <p className="text-primary font-semibold mb-6">80% OFF — Special Launch Price</p>
          <div className="space-y-3 text-left mb-8">
            {["2-Day Live Workshop", "Personalized Pain Assessment", "FM4 Therapy Live Demo", "Lifetime Access to Resources", "Sourobh Kulkarni Ke Saath Q&A"].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <button
  onClick={() => {
    if (window.fbq) {
      window.fbq("track", "AddToCart");
      window.fbq("track", "Subscribe");
    }
    navigate("/register-section-fb");
  }}
  className="relative px-12 py-4 rounded-xl 
  bg-gradient-to-r from-[#FF8A00] via-[#FFA000] to-[#FF6A00]
  text-black font-bold text-lg
  shadow-[0_0_25px_rgba(255,140,0,0.6)]
  transition-all duration-300
  hover:scale-105 hover:-translate-y-1
  hover:shadow-[0_0_45px_rgba(255,140,0,0.9)]
  active:scale-95"
>
  APNI SEAT ABHI BOOK KAREIN
</button>

          <p className="text-muted-foreground font-bold text-sm mt-4">Sirf 41 Seats Bachi Hain | Full Hone Par Booking Band</p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);
}

export default PricingSection;
