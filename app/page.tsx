import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import CompanyIntroSection from "./components/CompanyIntroSection";
import PainPointSection from "./components/PainPointSection";
import PortfolioSection from "./components/PortfolioSection";
import PartnerSection from "./components/PartnerSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden text-fg">
      <Navbar />
      <HeroSection />
      <CompanyIntroSection />
      <ServiceSection />
      <PainPointSection />
      <PortfolioSection />
      <PartnerSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
