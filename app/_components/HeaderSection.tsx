'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '700' });

// Kategori verisi için tip tanımı
interface Category {
  id: string | number;
  name: string;
  slug: string;
}

export default function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State'e Category dizisi olacağını belirttik
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  
  const lastScrollY = useRef(0);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const lang = searchParams.get('lang') || 'en';
  const selectedCategory = searchParams.get('category') || 'all';

  // --- SCROLL LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      setIsScrolled(currentScrollY > 20);

      if (Math.abs(delta) > 10) {
        if (currentScrollY > 100 && delta > 0) {
          setIsTopBarVisible(false);
        } else if (delta < -15 || currentScrollY < 50) {
          setIsTopBarVisible(true);
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- BODY SCROLL LOCK ---
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  // --- FETCH CATEGORIES ---
  useEffect(() => {
    async function getCategoryList() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/categories?select=id,name,slug`,
          {
            headers: {
              apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
            },
          }
        );
        const data = await response.json();
        if (Array.isArray(data)) {
          setCategoryList(data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    getCategoryList();
  }, []);

  const handleLanguageChange = (newLang: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', newLang.toLowerCase());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[100] bg-white transition-all duration-300 ${isScrolled ? 'shadow-lg shadow-black/5' : ''}`}>
        
        {/* 1. TOP BAR */}
        <div 
          className={`w-full bg-[#f8f8f8] border-b border-gray-100 px-6 md:px-12 flex justify-between items-center text-[10px] tracking-widest font-medium text-[#666] transition-all duration-500 ease-in-out overflow-hidden ${
            isTopBarVisible ? 'h-9 opacity-100' : 'h-0 opacity-0'
          }`}
        >
          <div className="flex gap-4">
            {['EN', 'KA', 'RU', 'TR', 'AR'].map((l) => (
              <button 
                key={l} 
                onClick={() => handleLanguageChange(l)}
                className={`hover:text-[#8a1a21] transition-colors ${lang.toUpperCase() === l ? 'text-[#8a1a21] font-bold border-b border-[#8a1a21]' : ''}`}
              >
                {l}
              </button>
            ))}
          </div>
          <div className="flex gap-6 uppercase">
            <button className="hover:text-[#8a1a21]">Sign In</button>
            <button className="font-bold text-[#8a1a21]">Sign Up</button>
          </div>
        </div>

        {/* 2. MAIN NAVBAR */}
        <nav className={`w-full transition-all duration-500 px-6 md:px-12 flex items-center justify-between bg-white relative ${isScrolled ? 'h-16 md:h-20' : 'h-20 md:h-32'}`}>
          
          <div className="flex-1 flex items-center z-[110]">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-3 group outline-none"
            >
              <div className="p-2 border border-gray-100 group-hover:border-[#8a1a21] transition-all rounded-full bg-white">
                <Menu size={20} className="group-hover:text-[#8a1a21] transition-colors" />
              </div>
              <span className="text-[11px] font-bold tracking-[0.2em] hidden md:block uppercase">Menu</span>
            </button>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/collections" className="block relative">
                <div className={`relative transition-all duration-500 ease-in-out ${isScrolled ? 'w-20 h-20 md:w-24 md:h-24 translate-y-0' : 'w-28 h-28 md:w-28 md:h-28 translate-y-6 md:translate-y-2'}`}>
                  <Image 
                    src='/logo.png' 
                    alt="Logo" 
                    fill 
                    priority
                    className="object-contain"
                  />
                </div>
            </Link>
          </div>

          <div className="flex-1 hidden md:flex justify-end items-center">
             <div className="text-right">
               <p className="text-[9px] text-gray-400 tracking-[0.2em] uppercase leading-none mb-1">Customer Line</p>
               <p className="text-[13px] font-bold text-[#1a1a1a] tabular-nums">+995 579 29 01 35</p>
             </div>
          </div>
        </nav>
      </header>

      <div className={`transition-all duration-500 ${isScrolled ? 'h-16 md:h-20' : 'h-20 md:h-32'}`} />

      {/* 3. SIDE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-[199]" 
            />
            
            <motion.div 
              initial={{ x: '-100%' }} 
              animate={{ x: 0 }} 
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="fixed left-0 top-0 h-full w-full max-w-[380px] bg-white z-[200] shadow-2xl p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className={`${playfair.className} text-3xl text-[#8a1a21]`}>Collections</h2>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X size={26} />
                </button>
              </div>

              <div className="flex flex-col overflow-y-auto no-scrollbar flex-grow">
                <Link 
                  href={`/Menu?lang=${lang}&category=all`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex justify-between items-center py-5 border-b border-gray-50 group transition-all"
                >
                  <span className={`text-[12px] font-bold tracking-[0.2em] uppercase transition-all ${selectedCategory === 'all' ? 'text-[#8a1a21] pl-2' : 'text-[#1a1a1a] group-hover:text-[#8a1a21] group-hover:pl-2'}`}>
                    All Products
                  </span>
                  <ChevronRight size={16} className={selectedCategory === 'all' ? 'text-[#8a1a21]' : 'text-gray-300'} />
                </Link>

                {categoryList.map((cat) => (
                  <Link 
                    key={cat.id} 
                    href={`/Menu?lang=${lang}&category=${cat.slug}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex justify-between items-center py-5 border-b border-gray-50 group transition-all"
                  >
                    <span className={`text-[12px] font-bold tracking-[0.2em] uppercase transition-all ${selectedCategory === cat.slug ? 'text-[#8a1a21] pl-2' : 'text-[#1a1a1a] group-hover:text-[#8a1a21] group-hover:pl-2'}`}>
                      {cat.name}
                    </span>
                    <ChevronRight size={16} className={selectedCategory === cat.slug ? 'text-[#8a1a21]' : 'text-gray-300'} />
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-gray-100">
                <p className="text-[10px] text-gray-400 tracking-[0.2em] uppercase mb-5">Find us on</p>
                <div className="flex gap-6 text-[#8a1a21] text-[11px] font-black tracking-widest">
                  <a href="https://instagram.com/sapore.tbilisi" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">INSTAGRAM</a>
                  <a href="https://www.facebook.com/people/Saporetbilisi/61577981454302/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">FACEBOOK</a>
                  <a href="https://tiktok.com/@cafesaporetbilisi" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">TIKTOK</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}