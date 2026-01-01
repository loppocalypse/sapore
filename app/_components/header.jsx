"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Playfair_Display } from 'next/font/google';
import { getTranslations, isRtl } from '@/lib/i18n';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '700' });

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const lang = searchParams.get('lang') || 'en';
  const t = getTranslations(lang);

  const changeLanguage = (newLang) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', newLang);
    router.push(`${pathname}?${params.toString()}`);
    setIsMenuOpen(false);
  };

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'ka', label: 'GE' },
    { code: 'ru', label: 'RU' },
    { code: 'tr', label: 'TR' },
    { code: 'ar', label: 'AR' }
  ];

  const menuParams = `?lang=${lang}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-[999]" dir={isRtl(lang) ? 'rtl' : 'ltr'}>
      <nav className="bg-[#fdfaf5]/95 backdrop-blur-md border-b border-[#e8dcc4] h-20 px-4 md:px-12 flex items-center justify-between relative">
        
        {/* SOL: Desktop Dil Seçenekleri (Tüm diller burada) */}
        <div className="hidden md:flex items-center space-x-3">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => changeLanguage(l.code)}
              className={`text-[10px] font-bold tracking-tighter transition-colors ${
                lang === l.code ? 'text-[#8a1a21]' : 'text-gray-400 hover:text-[#8a1a21]'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* ORTA/SOL: Logo - Mobilde sola, Desktopta merkeze */}
        <div className="md:absolute md:left-1/2 md:-translate-x-1/2 z-20">
          <Link href={`/${menuParams}`}>
            <h1 className={`${playfair.className} text-xl md:text-3xl tracking-[0.1em] text-[#8a1a21] uppercase`}>
              Sapore
            </h1>
          </Link>
        </div>

        {/* SAĞ: Desktop Linkler & Mobil Burger */}
        <div className="flex items-center">
          <nav className="hidden md:flex items-center space-x-6 mr-4">
            <Link href={`/AboutUs${menuParams}`} className="text-sm text-gray-500 hover:text-orange-400 transition-colors font-medium">
              {t.nav?.aboutUs || 'About Us'}
            </Link>
            <Link href={`/Menu${menuParams}`} className="text-sm text-gray-500 hover:text-orange-400 transition-colors font-medium">
              {t.nav?.menu || 'Menu'}
            </Link>
            <Link href={`/${menuParams}`} className="text-sm text-gray-500 hover:text-orange-400 transition-colors font-medium">
              {t.nav?.events || 'Events'}
            </Link>
            <Link href={`/Contact${menuParams}`} className="text-sm text-gray-500 hover:text-orange-400 transition-colors font-medium">
              {t.nav?.contact || 'Contact / Social Media'}
            </Link>
            <Link href={`/Report${menuParams}`} className="text-sm text-gray-500 hover:text-orange-400 transition-colors font-medium">
              {t.nav?.report || 'Report'}
            </Link>
          </nav>

          {/* Mobil Menü Butonu (Logo ile asla çakışmaz) */}
          <button className="md:hidden p-2 text-[#8a1a21] relative z-30" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBIL MENÜ PANELI */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#fdfaf5] z-[1000] flex flex-col p-10 md:hidden overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <h1 className={`${playfair.className} text-xl text-[#8a1a21]`}>SAPORE</h1>
              <button onClick={() => setIsMenuOpen(false)} className="text-[#8a1a21]">
                <X size={35} />
              </button>
            </div>

            {/* Renkli Mobil Linkler */}
            <div className="flex flex-col space-y-8 text-2xl font-serif tracking-widest uppercase pb-10 border-b border-[#e8dcc4]">
              <Link href={`/AboutUs${menuParams}`} onClick={() => setIsMenuOpen(false)} className="text-gray-500 hover:text-blue-400 transition-colors">
                {t.nav?.aboutUs || 'About Us'}
              </Link>
              <Link href={`/Menu${menuParams}`} onClick={() => setIsMenuOpen(false)} className="text-gray-500 hover:text-pink-400 transition-colors">
                {t.nav?.menu || 'Menu'}
              </Link>
              <Link href={`/${menuParams}`} onClick={() => setIsMenuOpen(false)} className="text-gray-500 hover:text-purple-400 transition-colors">
                {t.nav?.events || 'Events'}
              </Link>
              <Link href={`/Contact${menuParams}`} onClick={() => setIsMenuOpen(false)} className="text-gray-500 hover:text-green-400 transition-colors">
                {t.nav?.contact || 'Contact / Social Media'}
              </Link>
              <Link href={`/Report${menuParams}`} onClick={() => setIsMenuOpen(false)} className="text-gray-500 hover:text-orange-400 transition-colors">
                {t.nav?.report || 'Report'}
              </Link>
            </div>

            {/* Mobil Dil Seçici */}
            <div className="mt-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6 font-bold">Language</p>
              <div className="grid grid-cols-5 gap-2">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => changeLanguage(l.code)}
                    className={`py-3 border ${
                      lang === l.code ? 'border-[#8a1a21] text-[#8a1a21] bg-[#8a1a21]/5' : 'border-gray-200 text-gray-400'
                    } text-[10px] font-black transition-all`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}