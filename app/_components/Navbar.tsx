'use client';

import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '400' });

export default function Navbar({ categories = [], lang = 'en' }: any) {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'all';

  return (
    <nav className="w-full bg-white sticky top-0 z-[100] border-b border-gray-50">
      <div className="max-w-[1440px] mx-auto px-6 py-8 flex flex-col items-center">
        {/* LOGO */}
        <Link href="/" className="mb-8">
          <h1 className={`${playfair.className} text-4xl tracking-[-0.05em] text-[#1a1a1a] font-serif`}>
            Sapore
          </h1>
          <p className="text-center text-[9px] tracking-[0.5em] text-gray-400 -mt-1 uppercase">2008</p>
        </Link>

        {/* ANA KATEGORİLER */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 uppercase text-[12px] tracking-[0.2em] text-[#333] font-medium">
          <Link href={`?lang=${lang}&category=all`}>
            <span className={`cursor-pointer transition-all pb-1 border-b-2 ${
              selectedCategory === 'all' ? 'text-[#8a1a21] border-[#8a1a21]' : 'text-[#333] border-transparent hover:border-gray-200'
            }`}>
              All
            </span>
          </Link>
          {categories.map((cat: any) => (
            <Link key={cat.id} href={`?lang=${lang}&category=${cat.slug}`}>
              <span className={`cursor-pointer transition-all pb-1 border-b-2 ${
                selectedCategory === cat.slug ? 'text-[#8a1a21] border-[#8a1a21]' : 'text-[#333] border-transparent hover:border-gray-200'
              }`}>
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}