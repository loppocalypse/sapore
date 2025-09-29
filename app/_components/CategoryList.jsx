'use client'

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '700' });

function CategoryList() {
  const listRef = useRef(null);
  const [categoryList, setCategoryList] = useState([]);
  const params = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const category = params.get('category') || 'all';
    setSelectedCategory(category);
  }, [params]);

  useEffect(() => {
    async function getCategoryList() {
      try {
        if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
          throw new Error('Supabase URL veya Anon Key eksik');
        }
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/categories?select=id,name,slug,image_url`,
          {
            headers: {
              apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
            },
            cache: 'no-store',
          }
        );
        if (!response.ok) {
          throw new Error(`Kategori sorgusu başarısız: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        if (!data?.length) {
          setCategoryList([]);
          return;
        }
        setCategoryList(data.map(category => ({
          id: category.id || '',
          name: category.name || 'İsimsiz Kategori',
          slug: category.slug || '',
          imageUrl: category.image_url && typeof category.image_url === 'string' 
            ? category.image_url 
            : 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
        })));
      } catch (error) {
        console.error('Kategori yükleme hatası:', {
          message: error.message,
          stack: error.stack,
          url: process.env.NEXT_PUBLIC_SUPABASE_URL,
        });
        setCategoryList([]);
      }
    }
    getCategoryList();
  }, []);

  return (
    <div className='mt-16 relative [mask-image:linear-gradient(to_right,transparent,rgba(0,0,0,0.9),transparent)]'>
      <div
        className='flex gap-4 overflow-auto scrollbar-hide py-4'
        ref={listRef}
      >
        <Link
          href={'/Menu'}
          className={`flex flex-col items-center gap-2 p-4 rounded-2xl min-w-28 transition-all duration-500 border border-[rgba(212,175,55,0.3)] hover:border-[rgba(212,175,55,0.8)] bg-neutral-900/60 backdrop-blur-sm hover:shadow-lg cursor-pointer group ${
            selectedCategory === 'all' && 'border-[rgba(212,175,55,0.8)] shadow-lg'
          }`}
        >
          <motion.div
            whileHover={{ scale: 1.25 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          >
            <Image
              src={'https://drive.google.com/uc?export=view&id=1Y9lGPq_M6OJWkv1JvhGLaFpQPuvPRlcv'}
              alt="Tümü"
              width={40}
              height={40}
              style={{ filter: 'brightness(0) saturate(100%) invert(76%) sepia(73%) saturate(1861%) hue-rotate(357deg) brightness(100%) contrast(104%)' }}
              className='transition-all duration-200 invert'
            />
          </motion.div>
          <h2
            className={`${playfair.className} text-sm text-amber-400 group-hover:text-amber-500 ${
              selectedCategory === 'all' && 'text-amber-500'
            }`}
          >
            All
          </h2>
        </Link>
        {categoryList.length === 0 ? (
          <div className="text-center py-4 text-gray-300 font-inter">
            Kategoriler yükleniyor veya bulunamadı...
          </div>
        ) : (
          categoryList.map((category, index) => (
            <Link
              href={'?category=' + category.slug}
              key={index}
              className={`flex flex-col items-center gap-2 p-4 rounded-2xl min-w-28 transition-all duration-500 border border-[rgba(212,175,55,0.3)] hover:border-[rgba(212,175,55,0.8)] bg-neutral-900/60 backdrop-blur-sm hover:shadow-lg cursor-pointer group ${
                selectedCategory === category.slug && 'border-[rgba(212,175,55,0.8)] shadow-lg'
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.25 }}
                transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              >
                <Image
                  src={category.imageUrl}
                  alt={category.name || 'Kategori'}
                  width={40}
                  height={40}
                  style={{ filter: 'brightness(0) saturate(100%) invert(76%) sepia(73%) saturate(1861%) hue-rotate(357deg) brightness(100%) contrast(104%)' }}
                  className='transition-all duration-200'
                />
              </motion.div>
              <h2
                className={`${playfair.className} text-sm text-amber-400 group-hover:text-amber-500 ${
                  selectedCategory === category.slug && 'text-amber-500'
                }`}
              >
                {category.name}
              </h2>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default CategoryList;