import HeroSection from "@/components/EG/HeroSection";
import SocialProofSection from "@/components/EG/SocialProofSection";
import PainPointsSection from "@/components/EG/PainPointsSection";
import WorkshopSection from "@/components/EG/WorkshopSection";
import AudienceSection from "@/components/EG/AudienceSection";
import ExpertSection from "@/components/EG/ExpertSection";
import TestimonialsSection from "@/components/EG/TestimonialsSection";
import PricingSection from "@/components/EG/PricingSection";
import FAQSection from "@/components/EG/FAQSection";
import UrgencySection from "@/components/EG/UrgencySection";
import FooterSection from "@/components/EG/FooterSection";
import StickyFooter from "@/components/EG/StickyFooter";

const Index = () => {
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
