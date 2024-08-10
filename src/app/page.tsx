import Header from "@/app/components/Header";
import Image from "next/image";
import Hero from "./components/Hero";
import ProductShowCase from "./components/ProductShowCase";
import LogoTicker from "./components/LogoTicker";
import { WhyChooseUs } from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import FYQ from "./components/FYQ";
import CallToAction from "./components/CallToAction";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import { TracingBeam } from "@/components/ui/tracing-beam";
import OnePlaceForQuestion from "./components/OnePlaceForQuestion";
import KeyMetrics from "./components/KeyMetrics";
import Features from "./components/Features";
import BlogCards from "./components/BlogCards";
import CreatePostsButton from "./components/CreatePostButton";

export default async function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <LogoTicker />
      <OnePlaceForQuestion />
      <KeyMetrics />
      <Features />
      <TracingBeam>
        <WhyChooseUs />
        <Pricing />
        <Testimonials />
        <FYQ />
        <BlogCards />
        <CreatePostsButton />
      </TracingBeam>
      <CallToAction />
      <Footer />
    </>
  );
}
