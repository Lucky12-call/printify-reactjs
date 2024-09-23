import "./App.css";
import ConnectToStore from "./components/hero_section/ConnectToStore";
import Design from "./components/hero_section/Design";
import Features from "./components/hero_section/Features";
import Hero from "./components/hero_section/Hero";
import TalkToSales from "./components/hero_section/TalkToSales";
import ReviewSection from "./components/hero_section/ReviewSection";
import Navbar from "./components/navbar/Navbar";
import StartSelling from "./components/hero_section/StartSelling";
import LinksSection from "./components/hero_section/LinksSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="relative z-50">
        <Navbar />
      </div>

      <div className="w-[80%] mx-auto mt-32">
        <Hero />
        <Features />
      </div>

      <Design />

      <div className="w-[80%] mx-auto mt-32">
        <ConnectToStore className="z-0" />
        <TalkToSales />
      </div>

      <ReviewSection />

      <div className=" w-[80%] mx-auto">
        <StartSelling />
        <LinksSection />
      </div>

      <Footer />
    </>
  );
}

export default App;
