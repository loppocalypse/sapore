'use client';

import React from 'react';
import { Playfair_Display, Roboto } from 'next/font/google';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { getTranslations } from '@/lib/i18n';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

export default function Showcase({ products }: any) {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';
  const t = getTranslations(lang);

  const promoSlides = [
    '/banner4.jpg',
    '/banner1.jpg',
    '/banner2.jpg',
    '/banner3.jpg',
    '/banner5.jpg'
  ];

  const categories = [
    { 
      title: t.showcase.categories.turkishDelights, 
      slug: "turkish delights", 
      img: "/TurkishDelights.png", 
      desc: t.showcase.descriptions.turkishDelights 
    },
    { 
      title: t.showcase.categories.savories, 
      slug: "savories", 
      img: "/Savories.png", 
      desc: t.showcase.descriptions.savories 
    },
    { 
      title: t.showcase.categories.boxes, 
      slug: "boxes", 
      img: "/Boxes.png", 
      desc: t.showcase.descriptions.boxes 
    },
    { 
      title: t.showcase.categories.baklavas, 
      slug: "baklavas", 
      img: "/Baklavas.png", 
      desc: t.showcase.descriptions.baklavas 
    },
    { 
      title: t.showcase.categories.cookies, 
      slug: "cookies", 
      img: "/cookies.png", 
      desc: t.showcase.descriptions.cookies 
    },
  ];

  return (
    <div className={`min-h-screen bg-white ${roboto.className} pt-1 overflow-hidden`}>
      
    {/* SECTION 1: TOP PROMO SLIDER */}
    <section className="relative w-full h-[450px] bg-[#f4f4f4] mb-12 group">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.promo-next',
            prevEl: '.promo-prev',
          }}
          pagination={{ 
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          className="w-full h-full"
        >
          {promoSlides.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full overflow-hidden">
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[3000ms] group-hover:scale-105" 
                  style={{ backgroundImage: `url('${img}')` }} 
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </SwiperSlide>
          ))}

          {/* Navigasyon Okları - Z-index'i yükselttik */}
          <div className="absolute inset-0 container mx-auto flex items-center justify-between px-6 z-30 pointer-events-none">
            <button className="promo-prev pointer-events-auto hidden md:flex items-center justify-center w-12 h-12 border border-white/50 text-white rounded-full hover:bg-[#8a1a21] transition-all bg-black/20">
              <ChevronLeft size={24} />
            </button>
            <button className="promo-next pointer-events-auto hidden md:flex items-center justify-center w-12 h-12 border border-white/50 text-white rounded-full hover:bg-[#8a1a21] transition-all bg-black/20">
              <ChevronRight size={24} />
            </button>
          </div>
        </Swiper>

        {/* Global CSS ile Pagination'ı Sol Alta Sabitleme */}
        <style jsx global>{`
          .swiper-pagination {
            text-align: left !important;
            left: 30px !important;
            bottom: 30px !important;
            width: auto !important;
          }
          .swiper-pagination-bullet {
            background: #fff !important;
            opacity: 0.6;
            width: 10px;
            height: 10px;
          }
          .swiper-pagination-bullet-active {
            background: #C5A367 !important;
            opacity: 1;
            width: 30px;
            border-radius: 5px;
          }
        `}</style>
      </section>

      {/* SECTION 2: CATEGORY CARDS 400x195 */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-bold">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="relative w-full group overflow-hidden shadow-sm"
              style={{ height: '195px' }} 
            >
              {/* Background Picture */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110"
                style={{ backgroundImage: `url(${cat.img})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 transition-all duration-500" />
              
              {/* Info Container */}
              <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">                
                <div className="text-left">
                  <h3 className={`${playfair.className} text-lg tracking-[0.1em] uppercase`}>
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-col items-start space-y-3">
                  <p className="text-[9px] tracking-[0.1em] uppercase opacity-90 italic leading-tight max-w-[180px]">
                    {cat.desc}
                  </p>
                  
                  {/* Button */}
                  <Link 
                    href={`/Menu?category=${encodeURIComponent(cat.slug)}&lang=${lang}`}
                    className="inline-block rounded-full border border-white px-4 py-1.5 text-[9px] tracking-[0.15em] font-bold uppercase hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                  >
                    {t.startShopping}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: PRODUCT CAROUSEL (Sliding) */}
      <section className="container mx-auto px-4 mb-24 relative group">
        <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-4">
          <h2 className={`${playfair.className} text-3xl text-[#2d1b11]`}>{t.showcase.highlightedTastes}</h2>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={1}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="bg-gray-100 border border-gray-100"
        >
          {products.map((p: any) => (
            <SwiperSlide key={p.id}>
              <div className="bg-white group relative p-8 flex flex-col items-center text-center h-full transition-all duration-500 hover:shadow-xl">
                <div className="absolute top-5 right-5 text-gray-200 hover:text-[#8a1a21] cursor-pointer z-10">
                  <Heart size={20} />
                </div>

                <div 
                  className="w-full aspect-square mb-6 bg-contain bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-105" 
                  style={{ backgroundImage: `url(${p.img})` }} 
                />

                <h4 className="text-[13px] font-bold text-[#2d1b11] h-10 flex items-center justify-center uppercase tracking-wide">
                  {p.name}
                </h4>
                <div className="w-8 h-[1px] bg-[#d4a017] my-4" />
                <p className="text-[10px] text-gray-400 tracking-widest uppercase mb-4">{p.weight}</p>
                <div className="text-lg font-bold text-[#8a1a21] mb-8 italic">₾{p.price.toFixed(2)}</div>

                {/*<button className="w-full bg-[#2d1b11] text-white py-4 text-[11px] font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:bg-[#8a1a21]">
                  {t.addToCart}
                </button>*/}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="swiper-button-prev-custom absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white shadow-md p-3 rounded-full text-gray-400 hover:text-[#8a1a21] opacity-0 group-hover:opacity-100 transition-all">
          <ChevronLeft size={24} />
        </button>
        <button className="swiper-button-next-custom absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white shadow-md p-3 rounded-full text-gray-400 hover:text-[#8a1a21] opacity-0 group-hover:opacity-100 transition-all">
          <ChevronRight size={24} />
        </button>
      </section>
    </div>
  );
}