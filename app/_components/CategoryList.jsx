'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '400' });

function CategoryList() {
  const [categoryList, setCategoryList] = useState([]);
  const params = useSearchParams();
  const lang = params.get('lang') || 'en';
  const selectedCategory = params.get('category') || 'all';

  useEffect(() => {
    async function getCategoryList() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/categories?select=id,name,slug`,
        {
          headers: {
            apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          },
        }
      );
      const data = await response.json();
      setCategoryList(data);
    }
    getCategoryList();
  }, []);

  return (
    <div className="w-full border-b border-gray-100 mb-12 overflow-x-auto no-scrollbar">
      <div className="max-w-7xl mx-auto flex justify-center space-x-10 py-6 px-4 min-w-max">
        <Link href={`?lang=${lang}&category=all`}>
          <span className={`${playfair.className} text-sm tracking-[0.2em] cursor-pointer transition-all ${
            selectedCategory === 'all' ? 'text-[#8a1a21] border-b border-[#8a1a21]' : 'text-gray-400 hover:text-black'
          } pb-2`}>
            All
          </span>
        </Link>
        {categoryList.map((cat, i) => (
          <Link key={i} href={`?lang=${lang}&category=${cat.slug}`}>
            <span className={`${playfair.className} text-sm tracking-[0.2em] cursor-pointer transition-all uppercase ${
              selectedCategory === cat.slug ? 'text-[#8a1a21] border-b border-[#8a1a21]' : 'text-gray-400 hover:text-black'
            } pb-2`}>
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;