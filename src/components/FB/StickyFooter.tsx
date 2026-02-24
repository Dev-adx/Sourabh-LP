import { useNavigate } from "react-router-dom";

const StickyFooter = () => {
  const navigate = useNavigate();
  return (
  <div className="fixed bottom-0 left-0 right-0 z-50 
                  bg-card/95 backdrop-blur-sm 
                  border-t border-border py-3 px-4">

    <div className="max-w-lg mx-auto flex justify-center">

      <button
  onClick={() => {
    navigate("/register-section-fb");
  }}
        className="relative w-full text-center py-4 rounded-xl 
        bg-gradient-to-r from-[#FF8A00] via-[#FFA000] to-[#FF6A00]
        text-black font-bold text-xl
        shadow-[0_0_25px_rgba(255,140,0,0.6)]
        transition-all duration-300
        hover:scale-105 hover:-translate-y-1
        hover:shadow-[0_0_45px_rgba(255,140,0,0.9)]
        active:scale-95"
      >
        ABHI REGISTER KAREIN – SIRF ₹99
      </button>

    </div>
  </div>
);
}

export default StickyFooter;
