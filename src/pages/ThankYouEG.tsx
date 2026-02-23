import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaClock, FaGlobe, FaWhatsapp } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";

const ThankYouEG = () => {
  const [confetti, setConfetti] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setConfetti(false), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">

        {confetti && (
          <div className="flex justify-center mb-6 animate-fade-in">
            <GiPartyPopper className="text-6xl text-primary" />
          </div>
        )}

        <h1 className="text-3xl md:text-4xl font-black mb-4">
          <span className="text-gradient">Thank You!</span>
        </h1>

        <p className="text-foreground text-lg mb-2 font-semibold">
          Aapki Seat Successfully Book Ho Gayi Hai!
        </p>

        <p className="text-muted-foreground mb-8">
          FM4 Therapy Live Workshop ke liye aapka registration confirm ho gaya hai.
          Workshop details aapke email pe bhej diye jayenge.
        </p>

        {/* Workshop Details Card */}
        <div className="card-gradient border border-primary/30 rounded-2xl p-6 shadow-glow mb-8 text-left space-y-4">

          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-primary text-lg" />
            <span className="text-sm text-foreground">
              21st & 22nd February 2026
            </span>
          </div>

          <div className="flex items-center gap-3">
            <FaClock className="text-primary text-lg" />
            <span className="text-sm text-foreground">
              Day 1: 8:00 PM | Day 2: 10:00 AM
            </span>
          </div>

          <div className="flex items-center gap-3">
            <FaGlobe className="text-primary text-lg" />
            <span className="text-sm text-foreground">
              Online Live Workshop (Hindi & English)
            </span>
          </div>

        </div>

        {/* WhatsApp Button */}
        <Link
          to="https://chat.whatsapp.com/EYhPWBybzoO2xP35GbKKJ0"
          className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-bold px-8 py-3 rounded-xl shadow-glow hover:scale-105 transition-transform"
        >
          <FaWhatsapp />
          Whatsapp Group Join Karein →
        </Link>

      </div>
    </div>
  );
};

export default ThankYouEG;
