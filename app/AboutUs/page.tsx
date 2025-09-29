import Image from "next/image";
import Header from "@/app/_components/header";
import AboutUs from "@/app/AboutUs/AboutUs";

{/*
import { Hero } from "@/app/AboutUs/sections/Hero";
import { LogoTicker } from "@/app/sections/LogoTicker";
import { Testimonials } from "@/app/AboutUs/sections/Testimonials";
import { CallToAction } from "@/app/AboutUs/sections/CallToAction";
import { Footer } from "@/app/AboutUs/sections/Footer";
*/}

export default function Home() {
  return (
    <>
      <AboutUs />
      {/*
      <Header />
      <Hero />
      <LogoTicker />
      <Testimonials />
      <CallToAction />
      <Footer />
      */}
    </>
  );
}