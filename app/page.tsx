import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MerchantSection from "@/components/MerchantSection";
import BuisnessDevelopment from "@/components/BuisnessDevelopment";
import Investment from "@/components/Investment";
import Industries from "@/components/Industries";
import Portfolio from "@/components/Portfolio";
import WhoAreWe from "@/components/WhoAreWe";
import Members from "@/components/members-card/Members";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
     <div className="relative">
      {/* Page Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <MerchantSection />
        <BuisnessDevelopment />
        <Investment />
        <Industries />
        <Portfolio />
        <WhoAreWe />
        <Members />
        <Contact />
        <Footer /> 
      </div>
    </div>
  );
}