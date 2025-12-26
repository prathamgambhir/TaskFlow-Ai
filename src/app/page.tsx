import CallToAction from "@/sections/calltoaction";
import Faqs from "@/sections/faq";
import Features from "@/sections/features";
import Footer from "@/sections/footer";
import Hero from "@/sections/hero";
import LogoTicker from "@/sections/logo-ticker";
import Navbar from "@/sections/navbar";
import ProductShowcase from "@/sections/product-showcase";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <Faqs />
      <CallToAction />
      <Footer />
    </div>
  );
}
