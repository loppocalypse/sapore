'use client'

import { GradientBackground } from "@/app/AboutUs/components/gradient-background"
import { Playfair_Display, Roboto, Poppins } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '700' });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: '600' });

export default function Page() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GradientBackground />
      <div className="absolute inset-0 -z-10 bg-black/20" />

      <section className="px-6">
        <h3
          className={`${playfair.className} text-white text-center text-balance font-normal tracking-tight text-7xl`}
        >
          Our Story
        </h3>
      </section>
    </main>
  )
}
