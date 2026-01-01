'use client'

import { Mail, Phone, Instagram, Music2, MapPinned } from 'lucide-react';
import { Playfair_Display, Roboto, Noto_Serif_Georgian, Amiri } from 'next/font/google';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { getTranslations, isRtl } from '@/lib/i18n';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '700'] });
const notoGeorgian = Noto_Serif_Georgian({ subsets: ['georgian'], weight: '400' });
const amiri = Amiri({ subsets: ['arabic'], weight: '400' });

export default function Contact() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';
  const t = getTranslations(lang);

  const getFontClass = () => {
    if (lang === 'ka') return notoGeorgian.className;
    if (lang === 'ar') return amiri.className;
    return roboto.className;
  };

  return (
    <main className={`relative min-h-screen bg-white text-[#2d1b11] py-20 px-4 sm:px-6 lg:px-8 ${getFontClass()}`} dir={isRtl(lang) ? 'rtl' : 'ltr'}>
      <div className="max-w-5xl mx-auto">
        
        {/* Başlık Bölümü */}
        <div className="text-center mb-16 border-b border-gray-100 pb-12">
          <h1 className={`${playfair.className} text-4xl sm:text-5xl font-normal text-[#2d1b11] mb-6`}>
            {t.contact?.title || 'Get in Touch'}
          </h1>
          <div className="w-16 h-[1px] bg-[#8a1a21] mx-auto mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed italic">
            {t.contact?.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Sol Kolon: İletişim Bilgileri */}
          <div className="space-y-12">
            <section>
              <h2 className={`${playfair.className} text-2xl border-l-4 border-[#8a1a21] pl-4 uppercase tracking-widest text-[#2d1b11] mb-8`}>
                {/* Burayı i18n 'Customer Service' anahtara bağla */}
                Customer Service
              </h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-50 rounded-full text-[#8a1a21]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <Link href="tel:+995599642008" className="text-lg hover:text-[#8a1a21] transition-colors">
                    {t.contact?.phone}
                  </Link>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-50 rounded-full text-[#8a1a21]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <Link href="mailto:saporegeo@gmail.com" className="text-lg hover:text-[#8a1a21] transition-colors">
                    {t.contact?.email}
                  </Link>
                </div>
              </div>
            </section>

            <section>
              <h2 className={`${playfair.className} text-2xl border-l-4 border-[#8a1a21] pl-4 uppercase tracking-widest text-[#2d1b11] mb-8`}>
                Follow Us
              </h2>
              <div className="flex space-x-6 pl-4">
                <Link href="https://www.instagram.com/sapore.tbilisi" target="_blank" className="hover:text-[#8a1a21] transition-colors text-gray-600">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="https://www.tiktok.com/@cafesaporetbilisi" target="_blank" className="hover:text-[#8a1a21] transition-colors text-gray-600">
                  <Music2 className="h-6 w-6" />
                </Link>
              </div>
            </section>
          </div>

          {/* Sağ Kolon: Tek Mağaza ve Harita Preview */}
          <div className="space-y-8">
            <section>
              <h2 className={`${playfair.className} text-2xl border-l-4 border-[#8a1a21] pl-4 uppercase tracking-widest text-[#2d1b11] mb-8`}>
                Our Main Shop
              </h2>
              <div className="flex items-start space-x-4 mb-6">
                <MapPinned className="h-6 w-6 text-[#8a1a21] mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-lg text-[#2d1b11]">
                    {t.contact?.address.davitAghmashenebeli134}
                  </p>
                  <p className="text-gray-500 text-sm">Tbilisi, Georgia</p>
                </div>
              </div>

              {/* Google Maps Preview */}
              <div className="w-full h-[350px] rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.434863920977!2d44.79644327657279!3d41.71111667127732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd6921350a9%3A0x7d28367a7834df9b!2s134%20David%20Aghmashenebeli%20Ave%2C%20T'bilisi!5e0!3m2!1sen!2sge!4v1710000000000!5m2!1sen!2sge"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </section>
          </div>

        </div>
      </div>
    </main>
  );
}