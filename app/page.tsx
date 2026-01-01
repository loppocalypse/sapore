'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Playfair_Display } from 'next/font/google'
import { useSearchParams } from 'next/navigation'
import { getTranslations } from '@/lib/i18n'
import Link from 'next/link'

const playfair = Playfair_Display({ subsets: ['latin'], weight: '700' });

export default function LandingPage() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';
  const t = getTranslations(lang);

  return (
    <main className="relative min-h-screen bg-[#fdfaf5] flex flex-col items-center justify-center">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center z-10 px-6"
      >
        {/* Heritage Subtitle */}
        <span className="text-[#8a1a21] text-[10px] md:text-xs tracking-[0.6em] uppercase mb-4 block font-semibold">
          {t.home?.subtitle || "Heritage of Traditional Flavors"}
        </span>
        
        {/* Brand Name */}
        <h1 className={`${playfair.className} text-6xl md:text-9xl text-[#2d1b11] mb-6 tracking-tight`}>
          Sapore
        </h1>
        
        {/* Decorative Line */}
        <div className="w-24 h-[1px] bg-[#d4a017] mx-auto mb-8" />
        
        {/* Slogan / Description */}
        <p className="max-w-xl mx-auto text-[#634832] text-base md:text-xl leading-relaxed italic font-serif mb-12">
          {t.home?.description || `"Since 2008, we preserve a story in every recipe and a heritage in every bite."`}
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link 
            href={`/collections?lang=${lang}`}
            className="w-full md:w-auto px-12 py-4 bg-[#8a1a21] text-white text-[11px] uppercase tracking-[0.3em] hover:bg-[#6b1419] transition-all duration-500 shadow-xl text-center"
          >
            {t.home?.discoverMenu || "Discover The Menu"}
          </Link>
          
          <Link 
            href={`/History?lang=${lang}`}
            className="w-full md:w-auto px-12 py-4 border border-[#8a1a21] text-[#8a1a21] text-[11px] uppercase tracking-[0.3em] hover:bg-[#8a1a21] hover:text-white transition-all duration-500 text-center"
          >
            {t.home?.ourHeritage || "Our Heritage"}
          </Link>
        </div>
      </motion.div>

      {/* Decorative Bottom Detail */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#d4a017] to-transparent" />
      </motion.div>
    </main>
  )
}