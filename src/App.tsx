import Navbar from "@/components/ecori/Navbar";
import HeroSection from "@/components/ecori/HeroSection";
import HowItWorks from "@/components/ecori/HowItWorks";
import Technology from "@/components/ecori/Technology";
import Experience from "@/components/ecori/Experience";
import Partners from "@/components/ecori/Partners";
import Reseller from "@/components/ecori/Reseller";
import FinalSection from "@/components/ecori/FinalSection";
import SolarCursor from "@/components/ecori/SolarCursor";

const App = () => {
  return (
    <main className="relative">
      <SolarCursor />
      <Navbar />
      <HeroSection />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="technology">
        <Technology />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="partners">
        <Partners />
      </div>
      <div id="reseller">
        <Reseller />
      </div>
      <FinalSection />
    </main>
  );
};

export default App;
