import { useEffect, useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({ hours: 0, min: 0, sec: 0 });

  useEffect(() => {
    const year = new Date().getFullYear();
    const target = new Date(year, 1, 21, 20, 0, 0).getTime(); // 21 Feb 8 PM

    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);

      setTimeLeft({
        hours: Math.floor((diff % 86400000) / 3600000),
        min: Math.floor((diff % 3600000) / 60000),
        sec: Math.floor((diff % 60000) / 1000),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);
const [isMuted, setIsMuted] = useState(true);

const toggleMute = () => {
  if (!videoRef.current) return;
  videoRef.current.muted = !videoRef.current.muted;
  setIsMuted(videoRef.current.muted);
};

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div className="text-center md:text-left">

            {/* Glowing Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6 text-sm">
              {[
                "2-Day Live Workshop",
                "30,000+ Cases Reversed",
                "4.6 Rating",
              ].map((item, i) => (
                <span
                  key={i}
                  className="bg-secondary px-4 py-1.5 rounded-full font-medium
                             shadow-[0_0_15px_rgba(255,165,0,0.6)] animate-pulse"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Headlines */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black leading-tight mb-4">
              <span className="text-gradient">
                Spine, Knee & Neck Pain
              </span>{" "}
              Ko Hamesha Ke Liye Reverse Karne Ke Untold Secrets Jaaniye
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-black leading-tight mb-4">
              Bina Kisi{" "}
              <span className="text-gradient">
                Medicine, Surgery, Physio, Chiro, ya Oil Massage Ke
              </span>
            </p>

            <p className="text-xl sm:text-2xl md:text-3xl font-black leading-tight mb-6">
              Especially for Busy Professionals, Entrepreneurs & Unke{" "}
              <span className="text-gradient">Loved Ones Ke Liye</span>
            </p>

            {/* Event Details */}
<div className="flex flex-wrap justify-center md:justify-start gap-2 text-sm font-semibold text-primary mb-6">
  
  <span className="shadow-[0_0_10px_rgba(255,165,0,0.7)] rounded-2xl px-3 py-1">
   <span className="flex items-center gap-3">
      <span>21st February</span>
      <span>&</span>
      <span>22nd February</span>
    </span>
  </span>

  <span>|</span>

  <span className="shadow-[0_0_10px_rgba(255,165,0,0.7)] rounded-2xl px-3 py-1">
    <span className="flex items-center gap-3">
      <span>Day 1: 8:00 PM</span>
      <span>&</span>
      <span>Day 2: 10:00 AM</span>
    </span>
  </span>

  <span>|</span>

  <span className="shadow-[0_0_10px_rgba(255,165,0,0.7)] rounded-lg px-3 py-1">
    <span className="flex items-center gap-3">
      <span>Hindi</span>
      <span>&</span>
      <span>English</span>
    </span>
  </span>

</div>


            {/* CTA + TIMER */}
<div className="flex flex-col items-center md:items-start text-center md:text-left">

  {/* Animated Gradient Border CTA */}
  <div className="relative inline-block group mt-2">
    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r 
                    from-orange-500 via-yellow-400 to-orange-500 
                    blur opacity-40 group-hover:opacity-60 
                    transition duration-1000 animate-gradient-x">
    </div>

    <button
  onClick={() => {
    navigate("/register-section-eg");
  }}
      className="relative px-10 py-4 rounded-xl 
      bg-gradient-to-r from-[#FF8A00] via-[#FFA000] to-[#FF6A00]
      text-black font-bold text-sm
      shadow-[0_0_15px_rgba(255,140,0,0.35)]
      transition-all duration-300
      hover:scale-105 hover:-translate-y-1
      hover:shadow-[0_0_25px_rgba(255,140,0,0.5)]
      active:scale-95"
    >
      BOOK NOW — Sirf{" "}
      <span className="relative">41 Seats</span>{" "}
      Bachi Hain!
    </button>
  </div>

  <p className="text-sm font-semibold mt-6">
    Full Hone Par Booking Band!
  </p>

  {/* Flip Timer */}
  <div className="flex gap-4 mt-6 justify-center md:justify-start">
    {[
      { val: timeLeft.hours, label: "HOURS" },
      { val: timeLeft.min, label: "MIN" },
      { val: timeLeft.sec, label: "SEC" },
    ].map((t, i) => (
      <div key={i} className="flex flex-col items-center">
        <div className="relative w-[80px] h-[80px] perspective">
          <div className="absolute inset-0 bg-secondary rounded-lg 
                          flex items-center justify-center
                          text-3xl font-bold text-orange-400
                          shadow-[0_0_12px_rgba(255,165,0,0.3)]
                          animate-flip">
            {String(t.val).padStart(2, "0")}
          </div>
        </div>
        <span className="text-[10px] mt-2 text-muted-foreground">
          {t.label}
        </span>
      </div>
    ))}
  </div>

</div>
          </div>

          {/* RIGHT VIDEO */}
          <div className="flex justify-center">
  <div className="relative rounded-2xl overflow-hidden shadow-glow border border-border bg-card w-full max-w-[400px]">

    <video
      ref={videoRef}
      className="w-full aspect-[9/16] object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    >
      <source src="/videos/saurabh-intro.mp4" type="video/mp4" />
    </video>

    {/* Mute Toggle Icon */}
    <button
      onClick={toggleMute}
      className="absolute bottom-4 right-4 
                 bg-black/50 backdrop-blur-md 
                 p-3 rounded-full 
                 hover:bg-black/70 transition"
    >
      {isMuted ? (
        <VolumeX className="w-5 h-5 text-white" />
      ) : (
        <Volume2 className="w-5 h-5 text-white" />
      )}
    </button>

  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
