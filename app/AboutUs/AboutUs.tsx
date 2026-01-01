'use client'

import { useRef } from "react"
import Image from "next/image"
import { Playfair_Display, Roboto, Noto_Serif_Georgian, Amiri } from 'next/font/google'
import { useSearchParams } from 'next/navigation'
import { getTranslations, isRtl } from '@/lib/i18n'
import { motion, useScroll, useTransform } from "framer-motion"

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700', '900'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500'] })
const notoGeorgian = Noto_Serif_Georgian({ subsets: ['georgian'], weight: '400' })
const amiri = Amiri({ subsets: ['arabic'], weight: '400' })

export default function GrandMasterpieceAboutUs() {
  const searchParams = useSearchParams()
  const lang = searchParams.get('lang') || 'en'
  const t = getTranslations(lang)
  const containerRef = useRef(null)

  // i18n verisi
  const ap = t.aboutPage;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const getFontClass = () => {
    if (lang === 'ka') return notoGeorgian.className
    if (lang === 'ar') return amiri.className
    return roboto.className
  }

  // Eğer veri henüz yüklenmediyse patlamayı önle
  if (!ap) return null;

  return (
    <main 
      ref={containerRef}
      className={`bg-[#F8F7F3] min-h-screen text-[#1A1A1A] selection:bg-[#C5A367] selection:text-white overflow-hidden ${getFontClass()}`} 
      dir={isRtl(lang) ? 'rtl' : 'ltr'}
    >
      
      {/* --- SECTION 1: HERO (Efsanenin Doğuşu) --- */}
      <section className="relative h-[120vh] flex items-center justify-center">
        <div className="container mx-auto px-6 relative z-20">
          <div className="flex flex-col items-start">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="uppercase tracking-[1em] text-[11px] text-[#C5A367] font-bold mb-12 block">
                {ap.hero.badge}
              </span>
            </motion.div>
            
            <div className="relative">
              <h1 className={`${playfair.className} text-[11vw] md:text-[13vw] leading-[0.8] tracking-tighter inline-block`}>
                {ap.hero.title1} <br />
                <span className="italic font-extralight text-[#C5A367] ml-[8vw]">{ap.hero.title2}</span>
              </h1>
              
              <motion.div 
                style={{ y: useTransform(scrollYProgress, [0, 0.2], [0, -100]) }}
                className={`${playfair.className} absolute -top-20 -right-20 text-[15vw] text-black/[0.03] select-none -z-10 font-black`}
              >
                1974
              </motion.div>
            </div>
          </div>
        </div>

        {/* Hero Background Image - Parallax Efekti Korundu */}
        <motion.div 
          style={{ 
            y: useTransform(scrollYProgress, [0, 0.5], [0, 200]),
            scale: useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
          }}
          className="absolute top-[25%] right-0 w-[85vw] md:w-[45vw] h-[55vh] md:h-[70vh] z-10 block"
        >
          <div className="relative w-full h-full shadow-[30px_30px_60px_rgba(0,0,0,0.1)] md:shadow-[100px_100px_200px_-50px_rgba(0,0,0,0.15)] overflow-hidden rounded-bl-[150px] md:rounded-bl-[300px]">
            <Image 
              src="/Mahir-Mustafa-Omer-Benli.jpg" 
              alt="Benli Family" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* --- SECTION 2: THE MANIFESTO --- */}
      <section className="relative py-40 md:py-60 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
          <div className="md:col-span-6">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <h2 className={`${playfair.className} text-4xl md:text-7xl mb-10 md:mb-16 leading-tight`}>
                {ap.manifesto.title} <br /> <span className="italic text-[#C5A367]">{ap.manifesto.subtitle}</span>
              </h2>
              <div className="w-24 h-px bg-[#C5A367] mb-10 md:mb-16" />
              <p className="text-lg text-gray-400 italic font-light">
                {ap.manifesto.desc1.substring(0, 80)}... {/* Opsiyonel: Giriş metni */}
              </p>
            </motion.div>
          </div>

          <div className="md:col-span-6 space-y-8 md:space-y-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl md:text-3xl font-light italic text-gray-500 leading-relaxed border-l-2 border-[#C5A367] pl-6 md:pl-10"
            >
              "{ap.manifesto.quote}"
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6 text-base md:text-lg text-gray-600 font-light leading-loose text-justify italic"
            >
              <p>{ap.manifesto.desc1}</p>
              <p>{ap.manifesto.desc2}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE EXPANSION (Tiflis Dönemi) --- */}
      <section className="py-20 md:py-40 relative">
        <div className="flex flex-col md:flex-row gap-0">
          <motion.div 
             style={{ x: useTransform(scrollYProgress, [0.3, 0.6], [-100, 0]) }}
             className="w-full md:w-1/2 aspect-square relative overflow-hidden grayscale"
          >
            <Image src="/Mahir-Benli-Baslangic.jpg" alt="History" fill className="object-cover transition-all duration-[2s] hover:grayscale-0" />
          </motion.div>
          <motion.div 
             style={{ x: useTransform(scrollYProgress, [0.3, 0.6], [100, 0]) }}
             className="w-full md:w-1/2 aspect-square relative bg-[#1A1A1A] flex items-center justify-center p-12 md:p-20"
          >
            <div className="text-center text-white space-y-6 md:space-y-10">
              <span className={`${playfair.className} text-[#C5A367] text-5xl md:text-7xl italic`}>&</span>
              <h3 className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase px-4">{ap.expansion.title}</h3>
              <p className="text-sm md:text-base opacity-60 font-light italic px-6 leading-relaxed">
                {ap.expansion.desc}
              </p>
              <div className="w-12 h-px bg-[#C5A367] mx-auto"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 4: THE VALUES (Sayılarla Sapore) --- */}
      <section className="py-32 md:py-60 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-32">
          {[
            { year: '2008', data: ap.values.v2008 },
            { year: '2016', data: ap.values.v2016 },
            { year: '2025', data: ap.values.v2025 }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 text-center md:text-left"
            >
              <span className={`${playfair.className} text-[#C5A367] text-4xl md:text-5xl opacity-30`}>{item.year}</span>
              <h3 className={`${playfair.className} text-xl md:text-2xl font-bold`}>{item.data.title}</h3>
              <p className="text-gray-500 font-light italic leading-relaxed">{item.data.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION 5: FINAL (Kapanış) --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale: useTransform(scrollYProgress, [0.8, 1], [1, 1.2]) }}
          className="absolute inset-0 z-0"
        >
          <Image src="/cafe-today.jpg" alt="Café Sapore atmosphere" fill className="object-cover brightness-50" />
        </motion.div>
        
        <div className="relative z-10 text-center text-white px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <h4 className={`${playfair.className} text-[8vw] md:text-[6vw] leading-none mb-10`}>
              {ap.final.title} <br /> <span className="italic font-light">{ap.final.subtitle}</span>
            </h4>
            <div className="w-16 h-px bg-[#C5A367] mx-auto mb-10" />
            <p className="uppercase tracking-[0.6em] md:tracking-[0.8em] text-[9px] md:text-[10px] text-[#C5A367]">Café Sapore Luxury Patisserie Group</p>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 bg-[#F8F7F3] text-center px-6">
        <p className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-gray-400">{ap.final.footer}</p>
      </footer>
    </main>
  );
}