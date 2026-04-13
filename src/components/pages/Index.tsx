import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import FeaturesSection from "@/components/FeaturesSection";
import SpeakersSection from "@/components/SpeakersSection";
import AudienceSection from "@/components/AudienceSection";
import EventInfoSection from "@/components/EventInfoSection";
import OrganizersSection from "@/components/OrganizersSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";

const Index = () => (
  <>
    <div className="bg-canvas" />
    <div className="grid-lines" />
    <Particles />

    <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <CountdownSection />
      <FeaturesSection />
      <SpeakersSection />
      <AudienceSection />
      <EventInfoSection />
      <OrganizersSection />
      <CtaSection />
      <Footer />
    </div>
  </>
);

export default Index;