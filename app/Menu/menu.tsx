'use client';

import { useState, useEffect, useMemo, memo, useCallback } from 'react';
import CategoryList from "@/app/_components/CategoryList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import Image from "next/image";
import { ShoppingCart, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Playfair_Display, Roboto, Noto_Serif_Georgian, Amiri } from 'next/font/google';
import { getTranslations, isRtl } from '@/lib/i18n';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '700', display: 'swap' });
const roboto = Roboto({ subsets: ['latin'], weight: '400', display: 'swap' });
const notoGeorgian = Noto_Serif_Georgian({ subsets: ['georgian'], weight: '400', display: 'swap' });
const amiri = Amiri({ subsets: ['arabic'], weight: '400', display: 'swap' });

const ProductCard = memo(({ product, index, lang, t, fonts, selectedVariant, onVariantSelect, onAddToCart }: any) => {
  const getProductName = (p: any) => p[`name_${lang}`] || p.name_en || p.name;
  const getProductDescription = (p: any) => p[`description_${lang}`] || p.description_en || '';
  const getVariantName = (v: any) => v[`variant_name_${lang}`] || v.variant_name_en || v.variant_name;

  return (
    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <Card className="rounded-none border border-[#e8dcc4] bg-white h-full flex flex-col group hover:border-[#8a1a21] transition-all duration-300">
        
        {/* PICTURE SPACES */}
        <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-[#fdfaf5]">
          {product.image_url && (
            <Image
              src={product.image_url}
              alt={getProductName(product)}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              priority={index < 4}
            />
          )}
          <div className="absolute top-0 right-0 bg-[#8a1a21] text-white px-3 py-1 text-[10px] font-bold tracking-widest z-20">
            ₾{selectedVariant ? selectedVariant.price.toFixed(2) : (product.price || 0).toFixed(2)}
          </div>
        </div>
        
        <CardHeader className="text-center p-4">
          <CardTitle className={`${fonts.playfair} text-sm md:text-base text-[#2d1b11] uppercase tracking-wider`}>
            {getProductName(product)}
          </CardTitle>
          <div className="w-8 h-[1px] bg-[#d4a017] mx-auto mt-2" />
        </CardHeader>

        <CardContent className="flex-grow flex flex-col items-center px-4 pb-6">
          <p className="text-[11px] text-gray-500 text-center mb-4 italic line-clamp-2 min-h-[32px]">
            {getProductDescription(product)}
          </p>
          
          {product.variants?.length > 0 && (
            <div className="flex flex-wrap justify-center gap-1 mb-4">
              {product.variants.map((variant: any) => (
                <button
                  key={variant.id}
                  onClick={() => onVariantSelect(product.id, variant)}
                  className={`text-[9px] px-2 py-1 border transition-all ${
                    selectedVariant?.id === variant.id 
                    ? 'bg-[#8a1a21] text-white border-[#8a1a21]' 
                    : 'border-[#e8dcc4] text-gray-400 hover:border-[#8a1a21]'
                  }`}
                >
                  {getVariantName(variant)}
                </button>
              ))}
            </div>
          )}

          {/*<Button 
            onClick={() => onAddToCart(product, selectedVariant)}
            className="w-full rounded-none bg-transparent border border-[#8a1a21] text-[#8a1a21] hover:bg-[#8a1a21] hover:text-white text-[10px] uppercase tracking-widest h-10 transition-all"
          >
            {t.addToCart || 'SEPETE EKLE'}
          </Button>*/}
        </CardContent>
      </Card>
    </motion.div>
  );
});

export default function MenuClient({ products, branches, lang }: any) {
  const [cart, setCart] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedVariants, setSelectedVariants] = useState<{ [key: string]: any }>({});
  const [branchId, setBranchId] = useState('');
  const t = useMemo(() => getTranslations(lang), [lang]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((product: any, variant: any) => {
    setCart(prev => {
      const existingItem = prev.find(item => 
        item.id === product.id && 
        (variant ? item.selectedVariant?.id === variant.id : !item.selectedVariant)
      );
      if (existingItem) {
        return prev.map(item => item === existingItem ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, selectedVariant: variant, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const fonts = useMemo(() => ({
    playfair: playfair.className,
    mainFont: lang === 'ka' ? notoGeorgian.className : lang === 'ar' ? amiri.className : roboto.className
  }), [lang]);

  return (
    <div className={`min-h-screen bg-[#fdfaf5] ${fonts.mainFont} pt-28 pb-20`} dir={isRtl(lang) ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6">
        {/* <CategoryList /> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {products.map((product: any, index: number) => (
            <ProductCard 
              key={product.id}
              product={product}
              index={index}
              lang={lang}
              t={t}
              fonts={fonts}
              selectedVariant={selectedVariants[product.id] || product.variants?.[0]}
              onVariantSelect={(id: string, v: any) => setSelectedVariants(prev => ({ ...prev, [id]: v }))}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>
      {/* SEPET BUTONU */}
      {/* <button 
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-[#8a1a21] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
      >
        <ShoppingCart size={24} />
        {cart.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#d4a017] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
            {cart.reduce((a, b) => a + b.quantity, 0)}
          </span>
        )}
      </button> */}

      {/* SEPET SIDEBAR (Orijinal Mantık, Hacı Bekir Tasarımı) */}
      {/* <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsCartOpen(false)} className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[100]" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed right-0 top-0 h-full w-full max-w-md bg-[#fdfaf5] z-[101] shadow-2xl flex flex-col">
              <div className="p-6 border-b border-[#e8dcc4] flex justify-between items-center bg-white">
                <h3 className={`${playfair.className} text-xl text-[#8a1a21] uppercase`}>{t.cart || 'Sepet'}</h3>
                <button onClick={() => setIsCartOpen(false)} className="text-[#2d1b11]"><X size={24} /></button>
              </div>

              <div className="flex-grow overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-20 text-gray-400 italic text-sm">Sepetiniz boş.</div>
                ) : (
                  cart.map((item, i) => (
                    <div key={i} className="flex gap-4 bg-white p-3 border border-[#e8dcc4]">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image src={item.image_url} alt="product" fill className="object-cover" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="text-[11px] font-bold text-[#2d1b11] uppercase truncate">{item[`name_${lang}`] || item.name}</h4>
                        <p className="text-[9px] text-[#8a1a21]">{item.selectedVariant ? item.selectedVariant[`variant_name_${lang}`] || item.selectedVariant.variant_name : ''}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs font-bold text-[#2d1b11]">₾{(item.selectedVariant ? item.selectedVariant.price : item.price).toFixed(2)}</span>
                          <span className="text-[10px] text-gray-400">x{item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="p-6 bg-white border-t border-[#e8dcc4] space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{t.branch}</label>
                  <select
                    value={branchId}
                    onChange={(e) => setBranchId(e.target.value)}
                    className="w-full p-3 border border-[#e8dcc4] bg-[#fdfaf5] text-[#2d1b11] text-xs outline-none"
                  >
                    <option value="">{t.selectBranch}</option>
                    {branches?.map((branch: any) => (
                      <option key={branch.id} value={branch.id}>{branch.name}</option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase text-gray-500">Toplam</span>
                  <span className={`${playfair.className} text-2xl text-[#8a1a21]`}>₾{calculateTotal()}</span>
                </div>
                <Button className="w-full rounded-none bg-[#8a1a21] text-white py-6 text-[11px] uppercase tracking-[0.3em] hover:bg-[#6b1419]">
                  Siparişi Tamamla
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence> */}
    </div>
  );
}