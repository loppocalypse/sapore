import Image from "next/image";
import Header from "@/app/_components/header";
import FAQ from "@/app/FAQ/Faq";
import Footer from '@/app/_components/Footer'

export default function Home() {
  return (
    <>
      <FAQ />
      <Footer />
    </>
  );
}