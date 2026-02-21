import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Index from "./pages/Index";
import IndexEG from "./pages/IndexEG";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import RegisterSectionEG from "./pages/RegisterSectionEG";
import ThankYouEG from "./pages/ThankYouEG";
import PaymentFailedEG from "./pages/PaymentFailedEG";

const queryClient = new QueryClient();

function MetaRouteTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "PageView");
      console.log("Meta PageView:", location.pathname);
    }
  }, [location]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* 🔥 This is the important addition */}
        <MetaRouteTracker />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/index-eg" element={<IndexEG />} />
          <Route path="/register-section-eg" element={<RegisterSectionEG />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/thank-you-eg" element={<ThankYouEG />} />
          <Route path="/payment-failed-eg" element={<PaymentFailedEG />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
