import Image from "next/image";
import Header from "@/app/_components/header";
import History from "@/app/History/History";
import Footer from '@/app/_components/Footer'

export default function Home() {
  return (
    <>
      <History />
      <Footer />
    </>
  );
}