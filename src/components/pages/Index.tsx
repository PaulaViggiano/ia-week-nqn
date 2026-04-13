import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import FeaturesSection from "@/components/FeaturesSection";
import SpeakersSection from "@/components/SpeakersSection";
import AudienceSection from "@/components/AudienceSection";
import EventInfoSection from "@/components/EventInfoSection";
import OrganizersSection from "@/components/OrganizersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";

const Index = () => (
  <>
    {/* Fondos fijos globales */}
    <div className="bg-canvas" />
    <div className="grid-lines" />
    <Particles />

    {/* Contenido por encima del fondo */}
    <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <CountdownSection />
      <FeaturesSection />
      <SpeakersSection />
      <TestimonialsSection />
      <AudienceSection />
      <EventInfoSection />
      <OrganizersSection />
      <CtaSection />
      <Footer />
    </div>
  </>
);

export default Index;