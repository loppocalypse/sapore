import Image from "next/image";
import Header from "@/app/_components/header";
import AboutUs from "@/app/AboutUs/AboutUs";
import Footer from '@/app/_components/Footer';

export default function Home() {
  return (
    <>
      <AboutUs />
      <Footer />
    </>
  );
}