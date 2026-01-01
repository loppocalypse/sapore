'use client'

import React, { useEffect, useRef } from 'react'
import Image from "next/image"
import { Playfair_Display, Roboto, Noto_Serif_Georgian, Amiri } from 'next/font/google'
import { useSearchParams } from 'next/navigation'
import { getTranslations, isRtl } from '@/lib/i18n'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '700'] })
const notoGeorgian = Noto_Serif_Georgian({ subsets: ['georgian'], weight: '400' })
const amiri = Amiri({ subsets: ['arabic'], weight: '400' })

export default function History() {
  const searchParams = useSearchParams()
  const lang = searchParams.get('lang') || 'en'
  const t = getTranslations(lang)

  const getFontClass = () => {
    if (lang === 'ka') return notoGeorgian.className
    if (lang === 'ar') return amiri.className
    return roboto.className
  }

  // Zaman çizelgesi verilerini i18n'den doğru sırayla alıyoruz
  const timelineData = [
    { year: "1974", content: t.aboutUs?.section1974, img: "/Mahir-Benli-Baslangic.jpg", side: "left" },
    { year: "1980", content: t.aboutUs?.section1980, img: "/Mahir-Benli-Dukkan.jpg", side: "right" },
    { year: "1996", content: t.aboutUs?.section1996, img: "/Mahir-Mustafa-Omer-Benli.jpg", side: "left" },
    { year: "2016", content: t.aboutUs?.section2016_2020, img: "/cafe-today.jpg", side: "right" },
    { year: "Today", content: t.aboutUs?.sectionToday, img: "/images/cafe-sapore-today.jpg", side: "center" }
  ];

  return (
    <main className={`bg-[#fdfcf9] min-h-screen pb-40 overflow-hidden ${getFontClass()}`} dir={isRtl(lang) ? 'rtl' : 'ltr'}>
      
      {/* --- ELEGANT HEADER --- */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <span className="uppercase tracking-[0.6em] text-[12px] text-[#c5a367] mb-4 font-bold">The Heritage</span>
        <h1 className={`${playfair.className} text-7xl md:text-9xl text-[#2d1b11] opacity-90 italic`}>History</h1>
        <div className="mt-8 w-[1px] h-32 bg-gradient-to-b from-[#c5a367] to-transparent" />
      </section>

      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* --- DÜNYA STANDARDI SVG PATH (Keskin Kıvrımlı Çizgi) --- */}
        <div className="hidden md:block absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%" viewBox="0 0 1000 2400" fill="none" preserveAspectRatio="none">
            {/* Profesyonel Keskin Kırılımlı Ana Yol */}
            <path 
              d="M 500 0 
                 V 250 
                 H 150 
                 V 550 
                 H 850 
                 V 950 
                 H 150 
                 V 1350 
                 H 850 
                 V 1750 
                 H 500 
                 V 2200" 
              stroke="#d4a017" 
              strokeWidth="0.5" 
              strokeOpacity="0.4"
            />
            {/* Dekoratif Noktalar (Mühürler) */}
            <circle cx="500" cy="250" r="3" fill="#d4a017" />
            <circle cx="150" cy="250" r="3" fill="#d4a017" />
            <circle cx="850" cy="550" r="3" fill="#d4a017" />
            <circle cx="150" cy="950" r="3" fill="#d4a017" />
          </svg>
        </div>

        {/* --- CONTENT SECTIONS --- */}
        <div className="space-y-40 md:space-y-0">
          {timelineData.map((item, idx) => (
            <div 
              key={idx} 
              className={`relative z-10 flex flex-col md:flex-row items-center min-h-[500px] 
              ${item.side === 'right' ? 'md:flex-row-reverse' : ''} 
              ${item.side === 'center' ? 'justify-center' : 'justify-between'}`}
            >
              
              {/* Metin Bloğu */}
              <div className={`w-full md:w-[40%] ${item.side === 'left' ? 'md:text-left' : 'md:text-right'} ${item.side === 'center' ? 'text-center max-w-2xl' : ''}`}>
                <div className="mb-6">
                  <span className={`${playfair.className} text-6xl md:text-8xl text-[#2d1b11] opacity-10 block mb-[-40px]`}>
                    {item.year}
                  </span>
                  <h3 className={`${playfair.className} text-3xl md:text-4xl text-[#2d1b11] relative z-10`}>
                    {item.content?.title}
                  </h3>
                </div>
                <div className={`w-12 h-[1px] bg-[#c5a367] mb-8 ${item.side === 'left' ? 'mr-auto md:ml-0 md:mr-0' : 'mx-auto md:mr-0 md:ml-auto'}`} />
                <p className="text-[#666] text-base md:text-lg leading-relaxed font-light italic">
                  {item.content?.description}
                </p>
              </div>

              {/* Görsel Bloğu */}
              {item.side !== 'center' && (
                <div className="w-full md:w-[45%] mt-12 md:mt-0">
                  <div className="relative group overflow-hidden bg-white p-4 shadow-[30px_30px_80px_rgba(0,0,0,0.08)]">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image 
                        src={item.img} 
                        alt={item.year} 
                        fill 
                        className="object-cover grayscale hover:grayscale-0 scale-110 hover:scale-100 transition-all duration-[1500ms] ease-out"
                      />
                    </div>
                    {/* Hacı Bekir'deki o ince altın çerçeve detayı */}
                    <div className="absolute inset-6 border border-[#c5a367]/20 pointer-events-none" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Footer Süsü */}
      <div className="mt-40 text-center">
        <div className={`${playfair.className} text-[#c5a367] text-2xl`}>Since 1974</div>
      </div>
    </main>
  )
}