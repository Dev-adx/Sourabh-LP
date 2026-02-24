import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Index from "./pages/Index";
import IndexFB from "./pages/IndexFB";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import RegisterSectionFB from "./pages/RegisterSectionFB";
import ThankYouFB from "./pages/ThankYouFB";
import PaymentFailedFB from "./pages/PaymentFailedFB";

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
          <Route path="/index-fb" element={<IndexFB />} />
          <Route path="/register-section-fb" element={<RegisterSectionFB />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/thank-you-fb" element={<ThankYouFB />} />
          <Route path="/payment-failed-fb" element={<PaymentFailedFB />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
