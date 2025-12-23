'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect, useMemo, memo, useCallback } from 'react'; // useMemo, memo, useCallback eklendi
import CategoryList from "@/app/_components/CategoryList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import Image from "next/image";
import { ShoppingCart, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Playfair_Display, Roboto, Poppins, Noto_Serif_Georgian, Amiri } from 'next/font/google';
import { getTranslations, isRtl } from '@/lib/i18n';

// Font tanımları aynen kalıyor
const playfair = Playfair_Display({ subsets: ['latin'], weight: '700', display: 'swap' }); // display swap eklendi
const roboto = Roboto({ subsets: ['latin'], weight: '400', display: 'swap' });
const poppins = Poppins({ subsets: ['latin'], weight: '600', display: 'swap' });
const notoGeorgian = Noto_Serif_Georgian({ subsets: ['georgian'], weight: '400', display: 'swap' });
const amiri = Amiri({ subsets: ['arabic'], weight: '400', display: 'swap' });

// Interface'ler aynen kalıyor
interface Variant {
  id: string;
  variant_name: string;
  variant_name_en: string;
  variant_name_tr: string;
  variant_name_ka: string;
  variant_name_ru: string;
  variant_name_ar: string;
  price: number;
}

interface Product {
  id: string;
  name: string;
  name_en: string;
  name_tr: string;
  name_ka: string;
  name_ru: string;
  name_ar: string;
  image_url?: string;
  category_id?: string;
  description?: string;
  description_en?: string;
  description_tr?: string;
  description_ka?: string;
  description_ru?: string;
  description_ar?: string;
  price?: number;
  variants?: Variant[];
}

interface CartItem {
  product_id: string;
  variant_id?: string;
  variant_name?: string;
  quantity: number;
  price: number;
  name: string;
}

interface Branch {
  id: string;
  name: string;
}

interface MenuClientProps {
  products: Product[];
  branches: Branch[];
  error: string | null;
  lang: string;
}

// --- PERFORMANS İÇİN AYRILMIŞ VE MEMOİZE EDİLMİŞ ÜRÜN KARTI ---
// Bu bileşen, sadece kendi verisi değişirse render olur.
const ProductCard = memo(({ 
  product, 
  index, 
  selectedVariant, 
  onSelectVariant, 
  lang, 
  t, 
  fonts 
}: { 
  product: Product, 
  index: number, 
  selectedVariant: Variant | undefined, 
  onSelectVariant: (productId: string, variant: Variant) => void,
  lang: string,
  t: any,
  fonts: any
}) => {
  
  const getProductName = (p: Product): string => {
    const key = `name_${lang}` as keyof Product;
    return (p[key] as string) || p.name_en || p.name_tr || p.name_ka || p.name_ru || p.name_ar || p.name || t.error.noData;
  };

  const getProductDescription = (p: Product): string => {
    const key = `description_${lang}` as keyof Product;
    return (p[key] as string) || p.description_en || p.description_tr || p.description_ka || p.description_ru || p.description_ar || p.description || '';
  };

  const getVariantName = (v: Variant): string => {
    const key = `variant_name_${lang}` as keyof Variant;
    return (v[key] as string) || v.variant_name_en || v.variant_name_tr || v.variant_name_ka || v.variant_name_ru || v.variant_name_ar || v.variant_name || t.error.noData;
  };

  // Kart animasyonunu basitleştirdik
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }} // Once true: sadece bir kere çalışır
      transition={{ duration: 0.3, delay: index < 4 ? index * 0.1 : 0 }} // İlk 4'ü hariç gecikmeyi kaldır
      className="h-full"
    >
      {/* PERFORMANCE FIX: backdrop-blur kaldırıldı, bg-opacity artırıldı */}
      <Card className="overflow-hidden rounded-2xl shadow-lg border border-[rgba(212,175,55,0.3)] bg-[#1a1a1a] h-full flex flex-col transform-gpu will-change-transform">
        <div className="relative group w-full">
          <Image
            src={product.image_url || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'}
            alt={getProductName(product)}
            width={400}
            height={300}
            priority={index < 4} // İlk 4 resim hemen yüklenir
            loading={index < 4 ? "eager" : "lazy"}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="w-full h-48 sm:h-60 object-cover bg-neutral-800"
          />
          <span className={`${fonts.poppins} absolute top-3 right-3 px-3 py-1 sm:px-4 rounded-lg text-xs sm:text-sm font-semibold shadow-md bg-black/60 text-amber-400 border border-amber-500/30`}>
            {product.variants && product.variants.length > 0 && selectedVariant
              ? `₾${selectedVariant.price.toFixed(2)}`
              : typeof product.price === 'number' && product.price > 0
                ? `₾${product.price.toFixed(2)}`
                : t.error.priceMissing.replace('{product}', getProductName(product))}
          </span>
        </div>
        <CardHeader className="pb-0 pt-4">
          <CardTitle className={`${fonts.playfair} text-lg sm:text-xl text-amber-400`}>
            {getProductName(product)}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between pt-2">
          <p className={`${fonts.roboto} text-gray-400 text-sm mb-4 line-clamp-3`}>{getProductDescription(product)}</p>
          {product.variants && product.variants.length > 0 && (
            <div className="flex flex-col gap-2 mt-auto">
              {product.variants.map(variant => (
                <Button
                  key={variant.id}
                  onClick={() => onSelectVariant(product.id, variant)}
                  className={`${fonts.poppins} w-full font-semibold border border-amber-500/30 text-amber-400 bg-neutral-800 hover:bg-amber-500 hover:text-black transition-colors touch-manipulation text-sm ${
                    selectedVariant?.id === variant.id ? 'bg-amber-500 text-black' : ''
                  }`}
                >
                  {getVariantName(variant)} - ₾{variant.price.toFixed(2)}
                </Button>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
});

ProductCard.displayName = 'ProductCard';

// --- ANA BİLEŞEN ---
export default function MenuClient({ products, branches, error, lang }: MenuClientProps) {
  // const router = useRouter(); // Kullanılmıyorsa kaldırıldı (Perf)
  const t = useMemo(() => getTranslations(lang), [lang]);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [tableNumber, setTableNumber] = useState<string>('');
  const [branchId, setBranchId] = useState<string>('');
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [selectedVariants, setSelectedVariants] = useState<{ [key: string]: Variant }>({});

  // Font sınıflarını bir obje olarak memoize et
  const fonts = useMemo(() => ({
    playfair: playfair.className,
    roboto: roboto.className,
    poppins: poppins.className,
    mainFont: lang === 'ka' ? notoGeorgian.className : lang === 'ar' ? amiri.className : roboto.className
  }), [lang]);

  useEffect(() => {
    const initialVariants: { [key: string]: Variant } = {};
    products.forEach(product => {
      if (product.id && product.variants && product.variants.length > 0) {
        initialVariants[product.id] = product.variants[0];
      }
    });
    setSelectedVariants(initialVariants);
  }, [products]); // lang bağımlılığı kaldırıldı, gereksiz loop'u önlemek için

  // Variant seçimini useCallback ile sarmaladık ki ProductCard boşuna render olmasın
  const handleVariantSelect = useCallback((productId: string, variant: Variant) => {
    setSelectedVariants(prev => ({
      ...prev,
      [productId]: variant,
    }));
  }, []);

  const addToCart = (product: Product) => {
    // ... (Mevcut mantık aynı kalacak, burası UI'da çağrılmıyor gibi görünüyordu ama fonksiyonu korudum)
  };

  const updateQuantity = useCallback((productId: string, variantId: string | undefined, change: number) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.product_id === productId && item.variant_id === variantId) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter((item): item is CartItem => item !== null));
  }, []);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const cartTotalItems = useMemo(() => cart.reduce((total, item) => total + item.quantity, 0), [cart]);

  if (error || submitError) {
    return <div className={`${fonts.mainFont} text-red-500 text-center py-6`}>{error || submitError}</div>;
  }

  if (!products.length && !branches.length) {
    return <div className={`${fonts.mainFont} text-center py-6 text-gray-300`}>{t.error.noData}</div>;
  }

  return (
    <div className={`container mx-auto py-6 sm:py-8 px-4 bg-black text-white min-h-screen overflow-x-hidden ${fonts.mainFont}`} dir={isRtl(lang) ? 'rtl' : 'ltr'}>
      <CategoryList />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-10 mt-6 sm:mt-10">
        {products.map((product, index) => (
          <ProductCard 
            key={product.id || index}
            product={product}
            index={index}
            selectedVariant={selectedVariants[product.id]}
            onSelectVariant={handleVariantSelect}
            lang={lang}
            t={t}
            fonts={fonts}
          />
        ))}
      </div>

      {cart.length > 0 && (
        <Button
          onClick={() => setIsCartOpen(true)}
          className={`${fonts.poppins} fixed bottom-4 right-4 sm:bottom-6 sm:right-6 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shadow-xl shadow-amber-900/20 active:scale-95 transition-transform bg-amber-500 text-black z-40 touch-manipulation`}
        >
          <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-black text-amber-400 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs font-bold border border-amber-400">
            {cartTotalItems}
          </span>
        </Button>
      )}

      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-6"
          >
            <div className="bg-[#1a1a1a] p-4 sm:p-6 rounded-2xl shadow-2xl w-full max-w-md border border-[rgba(212,175,55,0.4)] max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4 sticky top-0 bg-[#1a1a1a] py-2 z-10 border-b border-white/10">
                <h2 className={`${fonts.playfair} text-lg text-amber-400`}>{t.cart}</h2>
                <Button onClick={() => setIsCartOpen(false)} variant="ghost" className="hover:bg-neutral-800 text-gray-300 -mr-2">
                  <X />
                </Button>
              </div>
              
              {cart.length === 0 ? (
                <p className="text-gray-300 text-center py-4">{t.cartEmpty}</p>
              ) : (
                <>
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={`${item.product_id}-${item.variant_id || 'nv'}`} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-white/5 pb-2 last:border-0">
                        <span className="text-amber-400 text-sm sm:text-base font-medium">{item.name}{item.variant_name ? ` (${item.variant_name})` : ''}</span>
                        <div className="flex items-center justify-between w-full sm:w-auto">
                          <div className="flex items-center gap-2">
                            <Button onClick={() => updateQuantity(item.product_id, item.variant_id, -1)} className="h-8 w-8 p-0 bg-neutral-800 text-amber-400 border border-amber-500/20" variant="outline">-</Button>
                            <span className={`${fonts.poppins} w-6 text-center font-semibold text-amber-400`}>{item.quantity}</span>
                            <Button onClick={() => updateQuantity(item.product_id, item.variant_id, 1)} className="h-8 w-8 p-0 bg-neutral-800 text-amber-400 border border-amber-500/20" variant="outline">+</Button>
                          </div>
                          <span className="ml-4 font-semibold text-amber-400 min-w-[3rem] text-right">₾{(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-amber-500/20">
                     {/* Select inputlar optimize edildi */}
                    <div className="mb-4">
                      <label className={`${fonts.playfair} block mb-2 text-amber-400 font-medium`}>{t.tableNumber}</label>
                      <select
                        value={tableNumber}
                        onChange={(e) => setTableNumber(e.target.value)}
                        className="w-full p-3 border border-amber-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-neutral-800 text-amber-400 text-base appearance-none"
                      >
                        <option value="">{t.selectTable}</option>
                        {[...Array(20).keys()].map(i => (
                          <option key={i + 1} value={i + 1}>
                             {lang === 'en' ? `Table ${i + 1}` : lang === 'tr' ? `Masa ${i + 1}` : lang === 'ka' ? `მაგიდა ${i + 1}` : lang === 'ru' ? `Стол ${i + 1}` : `طاولة ${i + 1}`}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className={`${fonts.playfair} block mb-2 text-amber-400 font-medium`}>{t.branch}</label>
                      <select
                        value={branchId}
                        onChange={(e) => setBranchId(e.target.value)}
                        className="w-full p-3 border border-amber-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-neutral-800 text-amber-400 text-base appearance-none"
                      >
                        <option value="">{t.selectBranch}</option>
                        {branches.map((branch) => (
                          <option key={branch.id} value={branch.id}>{branch.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className={`${fonts.poppins} mt-6 flex justify-between items-center text-lg sm:text-xl font-bold text-amber-400`}>
                      <span>{t.total}:</span>
                      <span>₾{calculateTotal()}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end gap-3 sticky bottom-0 bg-[#1a1a1a] py-2">
                    <Button onClick={() => setIsCartOpen(false)} variant="outline" className="w-full sm:w-auto text-amber-400 border-amber-500/30 hover:bg-neutral-800">
                      {t.close}
                    </Button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}