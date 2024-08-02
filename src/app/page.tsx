import Header from "@/app/components/Header";
import Image from "next/image";
import Hero from "./components/Hero";
// import LogoTicker from "./components/LogoTicker";
import ProductShowCase from "./components/ProductShowCase";
import Features from "./components/Features";
import LogoTicker from "./components/LogoTicker";
import { WhyChooseUs } from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import FYQ from "./components/FYQ";
import CallToAction from "./components/CallToAction";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowCase />
      <Features />
      <WhyChooseUs />
      <Pricing />
      <Testimonials />
      <FYQ />
      <CallToAction />
      <Footer />
    </div>
  );
}
