import Image from "next/image";
import SEO from "./components/SEO";
import { HeroSection } from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Amenities from "./components/Amenities";
import { Pricing } from "./components/Pricing";
import { Maps } from "./components/Maps";

export default function Home() {
  return (
    <>
      <main className="main relative overflow-hidden">
        <SEO
          title="Alps Living - Best girl's PG"
          description="Best Girls PG in Bangalore."
        />
        <div className="main-wrapper bg-[#FFF7E4] relative z-10 pb-20 pt-20 ">
          <Navbar />
          <HeroSection />
          <Amenities/>
        <Pricing/>
        <Maps/>
        </div>
      </main>
    </>
  );
}
