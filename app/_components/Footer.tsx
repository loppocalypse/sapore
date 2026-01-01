'use client';

import { Playfair_Display, Roboto, Noto_Serif_Georgian, Amiri } from 'next/font/google';
import Link from 'next/link';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '700', display: 'swap' });
const roboto = Roboto({ subsets: ['latin'], weight: '400', display: 'swap' });
const notoGeorgian = Noto_Serif_Georgian({ subsets: ['georgian'], weight: '400', display: 'swap' });
const amiri = Amiri({ subsets: ['arabic'], weight: '400', display: 'swap' });

export default function Footer() {
  return (
    <footer className="w-full bg-[#fdfaf5] border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Old Navbar Sections */}
        <div>
          <h4 className="text-[12px] font-bold tracking-[0.2em] text-[#8a1a21] mb-6 uppercase">INSTITUTIONAL</h4>
          <ul className="space-y-4 text-[13px] text-gray-600">
            <li className="hover:text-[#8a1a21] cursor-pointer transition-colors"><Link className='' href={'/AboutUs'}>About Us</Link></li>
            <li className="hover:text-[#8a1a21] cursor-pointer transition-colors"><Link className='' href={'/History'}>History</Link></li>
            <li className="hover:text-[#8a1a21] cursor-pointer transition-colors"><Link className='' href={'/OurShops'}>Our Shops</Link></li>
          </ul>
        </div>

        {/* Old Navbar Sections */}
        <div>
          <h4 className="text-[12px] font-bold tracking-[0.2em] text-[#8a1a21] mb-6 uppercase">CUSTOMER SERVICES</h4>
          <ul className="space-y-4 text-[13px] text-gray-600">
            <li className="hover:text-[#8a1a21] cursor-pointer transition-colors"><Link className='' href={'/Contact'}>Contact</Link></li>
            <li className="hover:text-[#8a1a21] cursor-pointer transition-colors"><Link className='' href={'/FAQ'}>Frequently Asked Questions</Link></li>
            {/*<li className="hover:text-[#8a1a21] cursor-pointer transition-colors"><Link className='' href={'#'}>Delivery and Shipment</Link></li>*/}
            <li className="hover:text-[#8a1a21] cursor-pointer transition-colors"><Link className='' href={'/Report'}>Report an Issue</Link></li>
          </ul>
        </div>

        {/* Legal Info (SOON 2.1.0 UPDATE) */}
        {/*<div>
          <h4 className="text-[12px] font-bold tracking-[0.2em] text-[#8a1a21] mb-6 uppercase">POLICIES</h4>
          <ul className="space-y-4 text-[13px] text-gray-600">
            <li className="hover:text-[#8a1a21] cursor-pointer transition-colors">KVKK</li>
            <li className="hover:text-[#8a1a21] cursor-pointer transition-colors">Satış Sözleşmesi</li>
            <li className="hover:text-[#8a1a21] cursor-pointer transition-colors">Cookie Settings</li>
          </ul>
        </div>*/}

        {/* Logo and Rights */}
        <div className="flex flex-col items-start md:items-end">
          <h2 className={`${playfair.className} text-2xl text-[#1a1a1a] mb-2`}>Cafe Sapore</h2>
          <p className="text-[11px] text-gray-400 text-left md:text-right leading-relaxed">
            Since 2008.
          </p>
        </div>
      </div>
      
      <div className="max-w-[1440px] mx-auto px-8 mt-20 pt-8 border-t border-gray-200/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400 tracking-widest uppercase">
        <span>© 2025 Sapore All Rights Reserved.</span>
        <div className="flex gap-6">
          <span></span>
        </div>
      </div>
    </footer>
  );
}