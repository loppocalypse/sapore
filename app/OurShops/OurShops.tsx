'use client'

import React, { useRef } from "react"
import Image from "next/image"
import { Playfair_Display, Montserrat, Marcellus } from 'next/font/google'
import { motion } from "framer-motion"
import { getTranslations } from '@/lib/i18n'
import { useSearchParams } from 'next/navigation'
import { Target } from "lucide-react"

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700', '900'] })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '600'] })
const marcellus = Marcellus({ subsets: ['latin'], weight: ['400'] })

export default function SaporeShopsPage() {
  const containerRef = useRef(null)
  const searchParams = useSearchParams()
  const lang = searchParams.get('lang') || 'en'
  const t = getTranslations(lang)

  // Şube Verileri - i18n entegrasyonu yapıldı
  const stores = [
    {
      name: "Marjanishvili I",
      address: t.contact.address.davitAghmashenebeli95,
      phone: t.contact.phone,
      image: "/95marjanishvili.jpeg",
      tags: [t.shops.tags.mainBranch, t.shops.tags.cafe],
      mapUrl: "https://maps.app.goo.gl/eeEoEX817WEAwAGK9"
    },
    {
      name: "Leselidze",
      address: t.contact.address.koteApkhazis31,
      phone: t.contact.phone,
      image: "/leselidze.jpg",
      tags: [t.shops.tags.touristic, t.shops.tags.takeAway],
      mapUrl: "https://maps.app.goo.gl/EnYkUnpwE7RRMm2g9"
    },
    {
      name: "Marjanishvili II",
      address: t.contact.address.davitAghmashenebeli134,
      phone: t.contact.phone,
      image: "/134marjanishvili.jpeg",
      tags: [t.shops.tags.premium],
      mapUrl: "https://maps.app.goo.gl/tSEo9knEB7JoJqpu6"
    },
    {
      name: "300 Aragveli",
      address: t.contact.address.ialbuzi9,
      phone: t.contact.phone,
      image: "/cafe-today.jpg",
      tags: [t.shops.tags.production, t.shops.tags.fresh],
      mapUrl: "https://maps.app.goo.gl/EFZWX8Z2YUaKAw3c8"
    }
  ];

  return (
    <main ref={containerRef} className={`bg-[#FDFCF9] min-h-screen text-[#2D241E] ${montserrat.className}`}>
      
      {/* --- HEADER SECTION --- */}
      <section className="relative pt-32 pb-20 border-b border-[#C5A367]/20">
        <div className="container mx-auto px-6 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.6em] text-[10px] text-[#C5A367] font-bold block mb-4"
          >
            {t.shops.locateTitle}
          </motion.span>
          <h1 className={`${playfair.className} text-5xl md:text-7xl font-light italic`}>
            {t.shops.title}
          </h1>
          <p className="mt-8 text-gray-500 font-light max-w-2xl mx-auto italic leading-relaxed">
            {t.contact.description}
          </p>
        </div>
      </section>

      {/* --- GRID SECTION --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {stores.map((store, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-sm mb-8">
                <Image 
                  src={store.image} 
                  alt={store.name} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {store.tags.map(tag => (
                    <span key={tag} className="bg-white/90 backdrop-blur-sm text-[#C5A367] text-[9px] font-bold px-3 py-1 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info Container */}
              <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-gray-100 pb-8">
                <div className="space-y-3">
                  <h3 className={`${marcellus.className} text-3xl text-[#1A1A1A]`}>{store.name}</h3>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                      <span className="text-[#C5A367] mr-2">●</span> {store.address}
                    </p>
                    <p className="text-sm text-gray-600 font-bold">
                      <span className="text-[#C5A367] mr-2">T:</span> {store.phone}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 w-full md:w-auto">
                  <a 
                    href={store.mapUrl} 
                    className="border border-[#C5A367] text-[#C5A367] px-8 py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-[#C5A367] hover:text-white transition-all text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.shops.seeOnMaps}
                  </a>
                  {/*<button className="text-[9px] uppercase tracking-tighter text-gray-400 hover:text-[#C5A367] transition-colors">
                    {t.shops.seeDetails} →
                  </button>*/}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FOOTER PATTERN --- */}
      <footer className="py-10 text-center border-t border-gray-100">
        <p className={`${playfair.className} text-[10px] uppercase tracking-[0.5em] text-gray-300`}>
          Sapore Patisserie • Istanbul • Tbilisi
        </p>
      </footer>

      <style jsx global>{`
        body { background-color: #FDFCF9; }
        ::selection { background: #C5A367; color: white; }
      `}</style>
    </main>
  );
}