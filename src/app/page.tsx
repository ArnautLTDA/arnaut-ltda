import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AgencyEngine from "@/components/AgencyEngine";
import Pillars from "@/components/Pillars";
import Lifecycle from "@/components/Lifecycle";
import TechStack from "@/components/TechStack";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <AgencyEngine />
        <Pillars />
        <Lifecycle />
        <TechStack />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
