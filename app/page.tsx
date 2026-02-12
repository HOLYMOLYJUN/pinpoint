import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PainPointSection from "./components/PainPointSection";
import ServiceSection from "./components/ServiceSection";
import PortfolioSection from "./components/PortfolioSection";
import ProcessSection from "./components/ProcessSection";
import TrustSection from "./components/TrustSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden text-fg">
      <Navbar />
      <HeroSection />
      <PainPointSection />
      <ServiceSection />
      <PortfolioSection />
      <ProcessSection />
      <TrustSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
