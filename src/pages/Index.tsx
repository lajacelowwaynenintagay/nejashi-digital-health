import { ProposalSidebar } from "@/components/ProposalSidebar";
import { MobileNav } from "@/components/MobileNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroductionSection } from "@/components/sections/IntroductionSection";
import { WebsiteFeaturesSection } from "@/components/sections/WebsiteFeaturesSection";
import { HospitalExamplesSection } from "@/components/sections/HospitalExamplesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { InvestmentSection } from "@/components/sections/InvestmentSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ApproveSection } from "@/components/sections/ApproveSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProposalSidebar />
      <MobileNav />
      
      <main className="lg:ml-64 pt-16 lg:pt-0">
        <HeroSection />
        <IntroductionSection />
        <WebsiteFeaturesSection />
        <HospitalExamplesSection />
        <ProcessSection />
        <InvestmentSection />
        <ProjectsSection />
        <AboutSection />
        <ApproveSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
