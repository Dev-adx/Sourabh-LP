import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import PainPointsSection from "@/components/PainPointsSection";
import WorkshopSection from "@/components/WorkshopSection";
import AudienceSection from "@/components/AudienceSection";
import ExpertSection from "@/components/ExpertSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import UrgencySection from "@/components/UrgencySection";
import FooterSection from "@/components/FooterSection";
import StickyFooter from "@/components/StickyFooter";
import { useNonFBPixel } from "@/hooks/useNonFBPixel";

const Index = () => {
  useNonFBPixel({ eventName: "PageView" });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <SocialProofSection />
      <PainPointsSection />
      <WorkshopSection />
      <AudienceSection />
      <ExpertSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <UrgencySection />
      <FooterSection />
      <StickyFooter />
    </div>
  );
};

export default Index;
