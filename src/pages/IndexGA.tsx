import HeroSection from "@/components/FB/HeroSection";
import SocialProofSection from "@/components/FB/SocialProofSection";
import PainPointsSection from "@/components/FB/PainPointsSection";
import WorkshopSection from "@/components/FB/WorkshopSection";
import AudienceSection from "@/components/FB/AudienceSection";
import ExpertSection from "@/components/FB/ExpertSection";
import TestimonialsSection from "@/components/FB/TestimonialsSection";
import PricingSection from "@/components/FB/PricingSection";
import FAQSection from "@/components/FB/FAQSection";
import UrgencySection from "@/components/FB/UrgencySection";
import FooterSection from "@/components/FB/FooterSection";
import StickyFooter from "@/components/FB/StickyFooter";
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
