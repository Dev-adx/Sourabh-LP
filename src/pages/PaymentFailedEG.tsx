import { useNavigate } from "react-router-dom";

const PaymentFailed = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="bg-secondary/30 rounded-3xl px-8 py-12 text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-red-500 mb-4">
          Payment Failed
        </h1>

        <p className="text-muted-foreground mb-8">
          Your transaction could not be completed. Please try again.
        </p>

        <button
          onClick={() => navigate("/register-section-eg")}
          className="px-8 py-3 rounded-xl 
          bg-gradient-to-r from-[#FF8A00] via-[#FFA000] to-[#FF6A00]
          text-black font-bold text-sm
          shadow-[0_0_15px_rgba(255,140,0,0.35)]
          transition-all duration-300
          hover:scale-105 hover:-translate-y-1
          hover:shadow-[0_0_25px_rgba(255,140,0,0.5)]
          active:scale-95"
        >
          TRY AGAIN
        </button>
      </div>
    </div>
  );
};

export default PaymentFailed;
