'use client'

import React, { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Playfair_Display, Montserrat, Marcellus } from 'next/font/google'
import { Plus, Minus, Search, X } from 'lucide-react'
import { getTranslations } from '@/lib/i18n'
import { useSearchParams } from 'next/navigation'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700', '900'] })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '600'] })
const marcellus = Marcellus({ subsets: ['latin'], weight: ['400'] })

export default function SaporeFAQ() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';
  const t = getTranslations(lang);

  const [searchQuery, setSearchQuery] = useState("");
  // faqData artık doğrudan i18n dosyasından geliyor
  const faqData = t.faq.data;
  const [activeCategory, setActiveCategory] = useState(faqData[0]?.id);
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  // Arama Fonksiyonu
  const filteredFaq = useMemo(() => {
    if (!searchQuery) return faqData;
    
    return faqData.map((category: any) => ({
      ...category,
      questions: category.questions.filter(
        (item: any) => 
          item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
          item.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter((category: any) => category.questions.length > 0);
  }, [searchQuery, faqData]);

  // Kaydırma Takibi (Scroll Tracking)
  useEffect(() => {
    if (searchQuery) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    faqData.forEach((cat: any) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [searchQuery, faqData]);

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className={`bg-[#FDFCF9] min-h-screen ${montserrat.className}`}>
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-24 border-b border-[#C5A367]/10">
        <div className="container mx-auto px-6 text-center">
          <span className="uppercase tracking-[0.6em] text-[10px] text-[#C5A367] font-bold mb-6 block">Concierge & Support</span>
          <h1 className={`${playfair.className} text-5xl md:text-8xl font-light italic text-[#2D241E] mb-12`}>
            {t.faq.title} <br /> {t.faq.subtitle}
          </h1>
          
          <div className="max-w-md mx-auto relative group">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.faq.searchPlaceholder} 
              className="w-full bg-transparent border-b border-[#C5A367]/30 py-4 px-10 text-sm focus:outline-none focus:border-[#C5A367] transition-all italic font-light text-[#2D241E]" 
            />
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-[#C5A367]/50" size={18} />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#C5A367]"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* --- FAQ CONTENT --- */}
      <section className="py-24 container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* SIDE NAVIGATION */}
          <div className="lg:col-span-3 hidden lg:block">
            {!searchQuery && (
              <div className="sticky top-40 space-y-6">
                <h3 className={`${playfair.className} text-sm uppercase tracking-widest text-[#C5A367] mb-8`}>{t.faq.categoriesTitle}</h3>
                {faqData.map((cat: any) => (
                  <button 
                    key={cat.id} 
                    onClick={() => scrollToCategory(cat.id)}
                    className={`block text-xs uppercase tracking-[0.3em] transition-all text-left w-full ${
                      activeCategory === cat.id ? 'text-[#C5A367] font-bold pl-2 border-l border-[#C5A367]' : 'text-gray-300 hover:text-gray-500'
                    }`}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* QUESTIONS ACCORDION */}
          <div className={`${searchQuery ? 'lg:col-span-12' : 'lg:col-span-9'} min-h-[400px]`}>
            {filteredFaq.length > 0 ? (
              filteredFaq.map((category: any) => (
                <div key={category.id} id={category.id} className="mb-32 scroll-mt-40">
                  <div className="flex items-center gap-4 mb-12">
                     <div className="h-px w-12 bg-[#C5A367]/30" />
                     <h2 className={`${marcellus.className} text-xs uppercase tracking-[0.5em] text-[#C5A367]`}>
                      {category.category}
                     </h2>
                  </div>
                  
                  <div className="space-y-2">
                    {category.questions.map((item: any, qIdx: number) => {
                      const globalIdx = `${category.id}-${qIdx}`;
                      const isOpen = openIndex === globalIdx;
                      return (
                        <div key={qIdx} className={`border-b border-[#C5A367]/10 transition-colors ${isOpen ? 'bg-[#F9F8F3]' : ''}`}>
                          <button 
                            onClick={() => setOpenIndex(isOpen ? null : globalIdx)}
                            className="w-full py-8 px-6 flex justify-between items-center text-left"
                          >
                            <span className={`${playfair.className} text-xl md:text-2xl text-[#2D241E] italic`}>{item.q}</span>
                            <div className={isOpen ? 'text-[#C5A367]' : 'text-gray-300'}>
                              {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                            </div>
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                                <div className="px-6 pb-8 text-gray-500 font-light italic leading-relaxed max-w-2xl">
                                  {item.a}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                <p className={`${playfair.className} text-2xl text-gray-300 italic`}>
                  {t.faq.noResults.replace('{query}', searchQuery)}
                </p>
                <button onClick={() => setSearchQuery("")} className="mt-4 text-[#C5A367] uppercase tracking-widest text-[10px] font-bold">
                  {t.faq.clearSearch}
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* --- CONTACT CTA --- */}
      <section className="pb-20 md:pb-40 container mx-auto px-4 md:px-6 text-center">
        <div className="relative py-16 md:py-24 px-6 border border-[#C5A367]/20 bg-white/50 backdrop-blur-sm overflow-hidden">
          <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-[#C5A367]/30" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <h3 className={`${playfair.className} text-3xl md:text-5xl italic text-[#2D241E] leading-tight`}>
              {t.faq.stillQuestions}
            </h3>
            <p className="text-gray-400 font-light italic max-w-sm md:max-w-lg mx-auto text-sm md:text-base leading-relaxed">
              {t.faq.supportDesc}
            </p>
            <div className="pt-4">
              <button className="w-full md:w-auto border border-[#C5A367] text-[#C5A367] px-8 md:px-14 py-4 text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold hover:bg-[#C5A367] hover:text-white transition-all duration-700">
                {t.faq.contactSupport}
              </button>
            </div>
          </motion.div>

          <span className="absolute -bottom-4 -right-4 text-6xl md:text-9xl font-black text-black/[0.02] select-none pointer-events-none">
            SAPORE
          </span>
        </div>
      </section>
    </main>
  );
}