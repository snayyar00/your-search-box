import Header from "@/app/components/Header";
import Image from "next/image";
import Hero from "./components/Hero";
// import LogoTicker from "./components/LogoTicker";
import ProductShowCase from "./components/ProductShowCase";
import Features from "./components/Features";
import LogoTicker from "./components/LogoTicker";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowCase />
      <Features />
    </div>
  );
}
