'use client'

import { Mail, Phone, Instagram, Twitter, Music2, MapPinned } from 'lucide-react';
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
      <main className="relative mt-8 min-h-screen flex items-center justify-center py-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
                className={`${roboto.className} text-gray-500 text-base sm:text-lg hover:text-orange-400 transition-colors`}
              >
                +995 599 64 20 08
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-6 w-6 text-[#D4A017]" />
              <Link
                href="mailto:saporegeo@gmail.com"
                className={`${roboto.className} text-gray-500 text-base sm:text-lg hover:text-orange-400 transition-colors`}
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
                className={`${roboto.className} text-gray-500 text-base sm:text-lg hover:text-orange-400 transition-colors`}
              >
                @sapore.tbilisi
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Music2 className="h-6 w-6 text-[#D4A017]" />
              <Link
                href="https://www.tiktok.com/@cafesaporetbilisi"
                target="_blank"
                rel="noopener noreferrer"
                className={`${roboto.className} text-gray-500 text-base sm:text-lg hover:text-orange-400 transition-colors`}
              >
                @cafesaporetbilisi
              </Link>
            </div>
          </div>

          {/* Adresler */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto py-10">
            <div className="flex items-center justify-center space-x-3">
              <MapPinned className="h-6 w-6 text-[#D4A017]" />
              <Link
                href="https://maps.app.goo.gl/gGNgvUoUkFdBsSr99?g_st=ipc"
                target="_blank"
                rel="noopener noreferrer"
                className={`${roboto.className} text-gray-500 text-base sm:text-lg hover:text-orange-400 transition-colors`}
              >
                Ialbuzi 9
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPinned className="h-6 w-6 text-[#D4A017]" />
              <Link
                href="https://maps.app.goo.gl/55mvP7L2LGGHJZFq5?g_st=ipc"
                target="_blank"
                rel="noopener noreferrer"
                className={`${roboto.className} text-gray-500 text-base sm:text-lg hover:text-orange-400 transition-colors`}
              >
                Kote Apkhazis 31
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPinned className="h-6 w-6 text-[#D4A017]" />
              <Link
                href="https://maps.app.goo.gl/oLZQS1bcdAQUwZZx7"
                target="_blank"
                rel="noopener noreferrer"
                className={`${roboto.className} text-gray-500 text-base sm:text-lg hover:text-orange-400 transition-colors`}
              >
                Davit Aghmashenebeli Ave. 95
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPinned className="h-6 w-6 text-[#D4A017]" />
              <Link
                href="https://maps.google.com/?ftid=0x40440df438d5e0ad:0x3296d3bc35dbe775&entry=gps&lucs=,94284463,94224825,94227247,94227248,94231188,94280568,47071704,47069508,94218641,94282134,94203019,47084304,94286863&g_st=ipc"
                target="_blank"
                rel="noopener noreferrer"
                className={`${roboto.className} text-gray-500 text-base sm:text-lg hover:text-orange-400 transition-colors`}
              >
                Davit Aghmashenebeli Ave. 134
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}