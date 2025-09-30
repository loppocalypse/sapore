'use client'

import { Mail, Phone, Instagram, Twitter, Music2 } from 'lucide-react';
import StarsCanvas from '@/app/StarsBG/StarBackground';
import { Playfair_Display, Roboto, Poppins } from 'next/font/google';
import Link from 'next/link';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '700' });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: '600' });


export default function Contact() {
  return (
    <>
      <StarsCanvas />
      <main className="bg-transparent min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[800px] w-full text-center space-y-8">
          {/* Başlık */}
          <h1 className={`${playfair.className} text-4xl sm:text-5xl font-bold text-[#D4A017] tracking-tight`}>
            Get in Touch with Us
          </h1>

          {/* Açıklama */}
          <p className={`${roboto.className} text-lg sm:text-xl text-gray-400 max-w-xl mx-auto`}>
            Join us at Cafe Sapore for a delightful experience. Reach out to share your thoughts, make a reservation, or just say hello!
          </p>

          {/* İletişim Bilgileri */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="h-6 w-6 text-[#D4A017]" />
              <Link
                href="tel:+995 599 64 20 08"
                className={`${roboto.className} text-gray-500 text-base sm:text-lg hover:text-[#F44322] transition-colors`}
              >
                +995 599 64 20 08
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-6 w-6 text-[#D4A017]" />
              <Link
                href="mailto:saporegeo@gmail.com"
                className={`${roboto.className} text-gray-500 text-base sm:text-lg hover:text-[#F44322] transition-colors`}
              >
                saporegeo@gmail.com
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Instagram className="h-6 w-6 text-[#D4A017]" />
              <Link
                href="https://www.instagram.com/sapore.tbilisi"
                target="_blank"
                rel="noopener noreferrer"
                className={`${roboto.className} text-gray-500 text-base sm:text-lg hover:text-[#F44322] transition-colors`}
              >
                @sapore.tbilisi
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Music2 className="h-6 w-6 text-[#D4A017]" /> {/* #F1D27A */}
              <Link
                href="https://www.tiktok.com/@cafesaporetbilisi"
                target="_blank"
                rel="noopener noreferrer"
                className={`${roboto.className} text-gray-500 text-base sm:text-lg hover:text-[#F44322] transition-colors`}
              >
                @cafesaporetbilisi
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}