'use client'

import { GradientBackground } from "@/app/AboutUs/components/gradient-background"
import Image from "next/image"
import { Playfair_Display, Roboto, Poppins } from 'next/font/google'
import { useEffect } from 'react'

const playfair = Playfair_Display({ subsets: ['latin'], weight: '700' })
const roboto = Roboto({ subsets: ['latin'], weight: '400' })
const poppins = Poppins({ subsets: ['latin'], weight: '600' })

export default function Page() {
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
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* <GradientBackground /> */} {/* Disabled to avoid conflict */}
      <div className="absolute inset-0 -z-10 bg-black/20" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 elegant-hero">
        <h1 className={`${playfair.className} text-[#D4A017] text-center text-balance font-normal tracking-tight text-7xl md:text-8xl`}>
          Our Story
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
                alt="1974: Mahir Benli's first börek shop in Istanbul"
                width={300}
                height={300}
                className="rounded-lg object-contain bg-black/20"
                priority={false}
              />
            </div>
            <div className="flex-1 text-center md:text-left elegant-text">
              <h2 className={`${playfair.className} text-[#D4A017] text-4xl md:text-5xl mb-6`}>1974: The Beginning</h2>
              <p className={`${roboto.className} text-gray-400 text-lg md:text-xl leading-relaxed`}>
                Mahir Benli’s journey began in 1974 in Istanbul. Guided by his uncle, he rented a small börek shop, selling his family’s dairy herd to fund it. With his own hands, he crafted poğaça and açma, laying the foundation for a legacy of artisanal baked goods.
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
                alt="1980: Çakmak Pastanesi opening"
                width={300}
                height={300}
                className="rounded-lg object-contain bg-black/20"
                priority={false}
              />
            </div>
            <div className="flex-1 text-center md:text-right elegant-text">
              <h2 className={`${playfair.className} text-[#D4A017] text-4xl md:text-5xl mb-6`}>1980: Çakmak Patisserie</h2>
              <p className={`${roboto.className} text-gray-400 text-lg md:text-xl leading-relaxed`}>
                Mastering the art of pastry, Mahir Benli opened Çakmak Patisserie in 1980. Expanding into cakes, cookies, and baklava, he invested in new ovens and displays, growing his craft and reputation for quality.
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
                alt="1996: Damla Pastanesi with family"
                width={300}
                height={300}
                className="rounded-lg object-contain bg-black/20"
                priority={false}
              />
            </div>
            <div className="flex-1 text-center md:text-left elegant-text">
              <h2 className={`${playfair.className} text-[#D4A017] text-4xl md:text-5xl mb-6`}>1996: Damla Patisserie</h2>
              <p className={`${roboto.className} text-gray-400 text-lg md:text-xl leading-relaxed`}>
                In 1996, Mahir Benli opened Damla Patisserie, a milestone in branding. His sons, Mustafa and Ömer Benli, joined the business, turning it into a family legacy that thrived until 2013.
              </p>
            </div>
          </div>
        </div>

        {/* 2008 Section */}
        <div className="max-w-6xl mx-auto mb-16 story-section">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="flex-shrink-0 elegant-image">
              <Image
                src="/Mustafa-Omer-Benli.jpeg"
                alt="2008: First Café Sapore branch in Tbilisi"
                width={300}
                height={300}
                className="rounded-lg object-contain bg-black/20"
                priority={false}
              />
            </div>
            <div className="flex-1 text-center md:text-right elegant-text">
              <h2 className={`${playfair.className} text-[#D4A017] text-4xl md:text-5xl mb-6`}>2008: Tbilisi Expansion</h2>
              <p className={`${roboto.className} text-gray-400 text-lg md:text-xl leading-relaxed`}>
                Mustafa and Ömer Benli took the family legacy global, opening the first Café Sapore branch in Tbilisi, Georgia, at Davit Aghmashenebeli No:95 in 2008, marking a bold new chapter.
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
                alt="2016-2023: Modern Café Sapore growth"
                width={300}
                height={300}
                className="rounded-lg object-contain bg-black/20"
                priority={false}
              />
            </div>
            <div className="flex-1 text-center md:text-left elegant-text">
              <h2 className={`${playfair.className} text-[#D4A017] text-4xl md:text-5xl mb-6`}>2016-2023: Growth & Legacy</h2>
              <p className={`${roboto.className} text-gray-400 text-lg md:text-xl leading-relaxed`}>
                From establishing their own production facility in 2016 to opening additional branches in 2018 (Kote Abkhazis No:31) and 2021 (Davit Aghmashenebeli No:134), Café Sapore grew. In 2023, a new facility and branch at Ialbuzis No:9 solidified their modern yet traditional approach.
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
                alt="Today: Café Sapore family legacy"
                width={300}
                height={300}
                className="rounded-lg object-contain bg-black/20"
                priority={false}
              />
            </div>
            <div className="flex-1 elegant-text">
              <h2 className={`${playfair.className} text-[#D4A017] text-4xl md:text-5xl mb-6`}>Today: Café Sapore</h2>
              <p className={`${roboto.className} text-gray-400 text-lg md:text-xl leading-relaxed`}>
                Today, Café Sapore operates four branches, blending its rich heritage with modern innovation. With the same dedication as Mahir Benli in 1974, they continue to serve traditional flavors to their community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Animations */}
      <style jsx global>{`
        /* Background Overlay with Subtle Glow */
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

        /* Hero Section */
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

        /* Story Section Animation */
        .story-section {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .story-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Image Animation */
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

        /* Text Animation */
        .elegant-text {
          opacity: 0.7;
          transition: opacity 0.8s ease-out 0.2s;
        }
        .story-section.visible .elegant-text {
          opacity: 1;
        }

        /* Mobile Adjustments */
        @media (max-width: 768px) {
          .elegant-image {
            transform: scale(0.97); /* Slightly less zoom on mobile */
          }
          .story-section.visible .elegant-image {
            transform: scale(1);
          }
          .object-contain {
            width: 250px !important;
            height: 250px !important;
          }
          .story-section {
            transform: translateY(30px); /* Less initial offset */
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
                    entry.target.classList.remove('visible'); // Reverse effect when scrolling out
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