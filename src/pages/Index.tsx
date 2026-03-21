import CountdownTimer from "@/components/sales/CountdownTimer";
import SocialProofNotification from "@/components/sales/SocialProofNotification";
import ExitIntentPopup from "@/components/sales/ExitIntentPopup";
import HeroSection from "@/components/sales/HeroSection";
import ProblemSection from "@/components/sales/ProblemSection";
import SolutionSection from "@/components/sales/SolutionSection";
import BenefitsSection from "@/components/sales/BenefitsSection";
import TestimonialsSection from "@/components/sales/TestimonialsSection";
import PricingSection from "@/components/sales/PricingSection";
import FaqSection from "@/components/sales/FaqSection";
import FinalCtaSection from "@/components/sales/FinalCtaSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <CountdownTimer />
      <SocialProofNotification />
      <ExitIntentPopup />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PricingSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}
