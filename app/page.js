import SEO from "./components/SEO";
import { HeroSection } from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { Maps } from "./components/Maps";
import WhatsAppButton from "./components/WhatsappButton";
import Features from "./components/Features";
import Photos from "./components/Photos";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <main className="main relative overflow-hidden">
        <SEO
          title="Alps Living - Best girl's PG"
          description="Best Girls PG in Bangalore."
        />
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="main-wrapper bg-[#FFF7E4] relative z-10 pb-20 pt-20 ">
          <Navbar />
          <WhatsAppButton />
          <HeroSection />
          <Features />
          <Photos />
          <FAQ />
          <Maps />
          <Footer />
        </div>
      </main>
    </>
  );
}
