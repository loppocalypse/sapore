'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function TopBar({ lang = 'en' }: { lang?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentLang = lang ? lang.toUpperCase() : 'EN';

  const handleLanguageChange = (newLang: string) => {
    // Mevcut tüm URL parametrelerini al (örneğin category=tatli gibi)
    const params = new URLSearchParams(searchParams.toString());
    
    // Sadece dili güncelle
    params.set('lang', newLang.toLowerCase());
    
    // Yeni URL'i oluştur ve yönlendir
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="w-full bg-[#f8f8f8] border-b border-gray-100 py-2.5 px-6 md:px-12 flex justify-between items-center text-[11px] tracking-[0.1em] font-medium text-[#666] relative z-[180]">
      {/* SOL: Dil Seçeneği */}
      <div className="flex gap-4">
        {['EN', 'KA', 'RU', 'TR', 'AR'].map((l) => (
          <button 
            key={l} 
            onClick={() => handleLanguageChange(l)}
            className={`hover:text-[#8a1a21] transition-colors ${
              currentLang === l ? 'text-[#8a1a21] font-bold underline underline-offset-4' : ''
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      {/* ORTA: Üyelik İşlemleri */}
      <div className="flex gap-6 absolute left-1/2 -translate-x-1/2">
        <button className="hover:text-[#8a1a21] transition-colors uppercase">Sign In</button>
        <span className="text-gray-300">|</span>
        <button className="hover:text-[#8a1a21] transition-colors uppercase">Sign Up</button>
      </div>

      {/* SAĞ: Müşteri Hizmetleri */}
      <div className="hidden md:block">
        <span className="text-[10px] text-gray-400 uppercase tracking-tighter">
          Customer Service: +995 579 29 01 35
        </span>
      </div>
    </div>
  );
}