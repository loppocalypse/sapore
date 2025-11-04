'use client'

import { GradientBackground } from "@/app/AboutUs/components/gradient-background"
import Image from "next/image"
import { Playfair_Display, Roboto, Poppins, Noto_Serif_Georgian, Amiri } from 'next/font/google'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { getTranslations, isRtl } from '@/lib/i18n'

const playfair = Playfair_Display({ subsets: ['latin'], weight: '700' })
const roboto = Roboto({ subsets: ['latin'], weight: '400' })
const poppins = Poppins({ subsets: ['latin'], weight: '600' })
const notoGeorgian = Noto_Serif_Georgian({ subsets: ['georgian'], weight: '400' })
const amiri = Amiri({ subsets: ['arabic'], weight: '400' })

export default function Page() {
  const searchParams = useSearchParams()
  const lang = searchParams.get('lang') || 'en'
  const t = getTranslations(lang)

  const getFontClass = () => {
    if (lang === 'ka') return notoGeorgian.className
    if (lang === 'ar') return amiri.className
    return roboto.className
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sections = document.querySelectorAll('.story-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className={`relative min-h-screen overflow-hidden bg-black ${getFontClass()}`} dir={isRtl(lang) ? 'rtl' : 'ltr'}>
      {/* <GradientBackground /> */} {/* Disabled to avoid conflict */}
      <div className="absolute inset-0 -z-10 bg-black/20" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 elegant-hero">
        <h1 className={`${playfair.className} text-[#D4A017] text-center text-balance font-normal tracking-tight text-7xl md:text-8xl`}>
          {t.aboutUs?.heroTitle || 'Our Story'}
        </h1>
      </section>

      {/* Story Sections with Elegant Animations */}
      <section className="relative py-20 px-6">
        {/* 1974 Section */}
        <div className="max-w-6xl mx-auto mb-16 story-section">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 elegant-image">
              <Image
                src="/Mahir-Benli-Baslangic.jpg"
                alt={t.aboutUs?.section1974.imageAlt || '1974: Mahir Benli\'s first börek shop in Istanbul'}
                width={300}
                height={300}
                className="rounded-lg object-contain bg-black/20"
                priority={false}
              />
            </div>
            <div className="flex-1 text-center md:text-left elegant-text">
              <h2 className={`${playfair.className} text-[#D4A017] text-4xl md:text-5xl mb-6`}>
                {t.aboutUs?.section1974.title || '1974: The Beginning'}
              </h2>
              <p className={`${roboto.className} text-gray-400 text-lg md:text-xl leading-relaxed`}>
                {t.aboutUs?.section1974.description || 'Mahir Benli’s journey began in 1974 in Istanbul...'}
              </p>
            </div>
          </div>
        </div>

        {/* 1980 Section */}
        <div className="max-w-6xl mx-auto mb-16 story-section">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="flex-shrink-0 elegant-image">
              <Image
                src="/Mahir-Benli-Dukkan.jpg"
                alt={t.aboutUs?.section1980.imageAlt || '1980: Çakmak Pastanesi opening'}
                width={300}
                height={300}
                className="rounded-lg object-contain bg-black/20"
                priority={false}
              />
            </div>
            <div className="flex-1 text-center md:text-right elegant-text">
              <h2 className={`${playfair.className} text-[#D4A017] text-4xl md:text-5xl mb-6`}>
                {t.aboutUs?.section1980.title || '1980: Çakmak Patisserie'}
              </h2>
              <p className={`${roboto.className} text-gray-400 text-lg md:text-xl leading-relaxed`}>
                {t.aboutUs?.section1980.description || 'Mastering the art of pastry, Mahir Benli opened Çakmak Patisserie in 1980...'}
              </p>
            </div>
          </div>
        </div>

        {/* 1996 Section */}
        <div className="max-w-6xl mx-auto mb-16 story-section">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 elegant-image">
              <Image
                src="/Mahir-Mustafa-Omer-Benli.jpg"
                alt={t.aboutUs?.section1996.imageAlt || '1996: Damla Pastanesi with family'}
                width={300}
                height={300}
                className="rounded-lg object-contain bg-black/20"
                priority={false}
              />
            </div>
            <div className="flex-1 text-center md:text-left elegant-text">
              <h2 className={`${playfair.className} text-[#D4A017] text-4xl md:text-5xl mb-6`}>
                {t.aboutUs?.section1996.title || '1996: Damla Patisserie'}
              </h2>
              <p className={`${roboto.className} text-gray-400 text-lg md:text-xl leading-relaxed`}>
                {t.aboutUs?.section1996.description || 'In 1996, Mahir Benli opened Damla Patisserie...'}
              </p>
            </div>
          </div>
        </div>

        {/* 2016-2023 Section */}
        <div className="max-w-6xl mx-auto mb-16 story-section">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 elegant-image">
              <Image
                src="/cafe-today.jpg"
                alt={t.aboutUs?.section2016_2023.imageAlt || '2016-2023: Modern Café Sapore growth'}
                width={300}
                height={300}
                className="rounded-lg object-contain bg-black/20"
                priority={false}
              />
            </div>
            <div className="flex-1 text-center md:text-left elegant-text">
              <h2 className={`${playfair.className} text-[#D4A017] text-4xl md:text-5xl mb-6`}>
                {t.aboutUs?.section2016_2023.title || '2016-2023: Growth & Legacy'}
              </h2>
              <p className={`${roboto.className} text-gray-400 text-lg md:text-xl leading-relaxed`}>
                {t.aboutUs?.section2016_2023.description || 'From establishing their own production facility in 2016...'}
              </p>
            </div>
          </div>
        </div>

        {/* Final Section */}
        <div className="max-w-6xl mx-auto mb-16 story-section">
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="flex-shrink-0 elegant-image">
              <Image
                src="/images/cafe-sapore-today.jpg"
                alt={t.aboutUs?.sectionToday.imageAlt || 'Today: Café Sapore family legacy'}
                width={300}
                height={300}
                className="rounded-lg object-contain bg-black/20"
                priority={false}
              />
            </div>
            <div className="flex-1 elegant-text">
              <h2 className={`${playfair.className} text-[#D4A017] text-4xl md:text-5xl mb-6`}>
                {t.aboutUs?.sectionToday.title || 'Today: Café Sapore'}
              </h2>
              <p className={`${roboto.className} text-gray-400 text-lg md:text-xl leading-relaxed`}>
                {t.aboutUs?.sectionToday.description || 'Today, Café Sapore operates four branches...'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Animations */}
      <style jsx global>{`
        main::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(255, 193, 7, var(--overlay-opacity, 0.3)) 0%, transparent 70%);
          z-index: -2;
          pointer-events: none;
        }
        .elegant-hero {
          position: relative;
          overflow: hidden;
        }
        .elegant-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.2), transparent);
          z-index: -1;
        }
        .story-section {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .story-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .elegant-image {
          opacity: 0.7;
          transform: scale(0.95);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          will-change: opacity, transform;
        }
        .story-section.visible .elegant-image {
          opacity: 1;
          transform: scale(1);
        }
        .elegant-text {
          opacity: 0.7;
          transition: opacity 0.8s ease-out 0.2s;
        }
        .story-section.visible .elegant-text {
          opacity: 1;
        }
        @media (max-width: 768px) {
          .elegant-image {
            transform: scale(0.97);
          }
          .story-section.visible .elegant-image {
            transform: scale(1);
          }
          .object-contain {
            width: 250px !important;
            height: 250px !important;
          }
          .story-section {
            transform: translateY(30px);
          }
          .story-section.visible {
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Intersection Observer for Animations */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined') {
              const sections = document.querySelectorAll('.story-section');
              const observerOptions = {
                threshold: 0.2,
                rootMargin: '0px 0px -50px 0px'
              };
              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                  } else {
                    entry.target.classList.remove('visible');
                  }
                });
              }, observerOptions);
              sections.forEach(section => observer.observe(section));
            }
          `,
        }}
      />
    </main>
  )
}