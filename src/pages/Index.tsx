import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScrollIndicator from "@/components/ScrollIndicator";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ScrollIndicator />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
