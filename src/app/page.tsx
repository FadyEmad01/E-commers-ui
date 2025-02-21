import BestSelling from "@/components/BestSelling";
import Browse from "@/components/Browse";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Join from "@/components/Join";
import Navbar from "@/components/Navbar";
import TabsSection from "@/components/TabsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Features/>
      <BestSelling/>
      <Browse/>
      <TabsSection/>
      <Join/>
      <Footer/>
    </>
  );
}
