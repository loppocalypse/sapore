import Image from "next/image";
import Header from "@/app/_components/header";
import OurShops from "@/app/OurShops/OurShops";
import Footer from '@/app/_components/Footer'

export default function Home() {
  return (
    <>
      <OurShops />
      <Footer />
    </>
  );
}