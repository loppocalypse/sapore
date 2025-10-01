'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import CategoryList from "@/app/_components/CategoryList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import Image from "next/image";
import { ShoppingCart, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Playfair_Display, Roboto, Poppins } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '700' });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: '600' });

interface Product {
  id?: string;
  name?: string;
  image_url?: string;
  category_id?: string;
  description?: string;
  price?: number; // Varyantsız ürünler için
  variants?: { id: string; variant_name: string; price: number }[];
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
}

export default function MenuClient({ products, branches, error }: MenuClientProps) {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'all';
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [tableNumber, setTableNumber] = useState<string>('');
  const [branchId, setBranchId] = useState<string>('');
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [selectedVariants, setSelectedVariants] = useState<{ [key: string]: { id: string; variant_name: string; price: number } }>({});

  // Varsayılan olarak her ürünün ilk varyantını seç
  useEffect(() => {
    const initialVariants: { [key: string]: { id: string; variant_name: string; price: number } } = {};
    products.forEach(product => {
      if (product.id && product.variants && product.variants.length > 0) {
        initialVariants[product.id] = product.variants[0];
      }
      console.log(`Ürün: ${product.name}, Price: ${product.price}, Variants:`, product.variants); // Hata ayıklama
    });
    setSelectedVariants(initialVariants);
  }, [products]);

  const addToCart = (product: Product) => {
    if (!product.id || !product.name) {
      setSubmitError('Ürün bilgisi eksik');
      return;
    }
    if (product.variants && product.variants.length > 0) {
      const selectedVariant = selectedVariants[product.id];
      if (!selectedVariant) {
        setSubmitError('Please Select a Variant');
        return;
      }
      const existingItem = cart.find(item => item.product_id === product.id && item.variant_id === selectedVariant.id);
      if (existingItem) {
        setCart(cart.map(item =>
          item.product_id === product.id && item.variant_id === selectedVariant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
      } else {
        setCart([...cart, {
          product_id: product.id,
          variant_id: selectedVariant.id,
          variant_name: selectedVariant.variant_name,
          quantity: 1,
          price: selectedVariant.price,
          name: product.name
        }]);
      }
    } else if (typeof product.price === 'number' && product.price > 0) {
      const existingItem = cart.find(item => item.product_id === product.id && !item.variant_id);
      if (existingItem) {
        setCart(cart.map(item =>
          item.product_id === product.id && !item.variant_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
      } else {
        setCart([...cart, {
          product_id: product.id,
          quantity: 1,
          price: product.price,
          name: product.name
        }]);
      }
    } else {
      setSubmitError(`Fiyat bilgisi eksik: ${product.name}`);
      console.error(`Fiyat eksik: ${product.name}, Price: ${product.price}`);
    }
  };

  const updateQuantity = (productId: string, variantId: string | undefined, change: number) => {
    setCart(cart.map(item => {
      if (item.product_id === productId && item.variant_id === variantId) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter((item): item is CartItem => item !== null));
  };

  const calculateTotal = (): string => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const submitOrder = async () => {
    if (!tableNumber || isNaN(parseInt(tableNumber)) || parseInt(tableNumber) <= 0) {
      setSubmitError('Please Select a Valid Table Number');
      return;
    }
    if (!branchId) {
      setSubmitError('Please Select a Branch');
      return;
    }
    if (cart.length === 0) {
      setSubmitError('Your Cart is Empty');
      return;
    }

    try {
      console.log('Sending order:', { table_no: parseInt(tableNumber), items: cart, branch_id: branchId });
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ table_no: parseInt(tableNumber), items: cart, branch_id: branchId }),
      });
      const result = await response.json();
      if (result.success) {
        setCart([]);
        setTableNumber('');
        setBranchId('');
        setIsCartOpen(false);
        alert('Successfully Ordered!');
      } else {
        throw new Error(result.error || 'Can Not Create The Order');
      }
    } catch (error: any) {
      console.error('Order Error:', error.message);
      setSubmitError(`Could Not Order: ${error.message}`);
    }
  };

  if (error || submitError) {
    return <div className="text-red-500 text-center py-6">{error || submitError}</div>;
  }

  if (!products.length && !branches.length) {
    return <div className="text-center py-6 text-gray-300">Info Not Found</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4 bg-gradient-to-br from-black via-neutral-900 to-black text-white overflow-hidden">
      <CategoryList />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
        {products.map((product, index) => (
          <motion.div
            key={product.id || index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.08 }}
          >
            <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[rgba(212,175,55,0.3)] hover:border-[rgba(212,175,55,0.8)] bg-neutral-900/60 backdrop-blur-sm">
              <div className="relative group">
                <Image
                  src={product.image_url || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'}
                  alt={product.name || 'Ürün'}
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className={`${poppins.className} absolute top-3 right-3 px-4 py-1 rounded-lg text-sm font-semibold shadow-lg backdrop-blur-md bg-white/10 text-amber-400 border border-amber-500/30`}>
                  {product.variants && product.variants.length > 0 && selectedVariants[product.id!]
                    ? `₾${selectedVariants[product.id!].price.toFixed(2)}`
                    : typeof product.price === 'number' && product.price > 0
                      ? `₾${product.price.toFixed(2)}`
                      : 'Fiyat mevcut değil'}
                </span>
              </div>
              <CardHeader className="pb-0">
                <CardTitle className={`${playfair.className} text-xl font-playfair text-amber-400`}>
                  {product.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`${roboto.className} text-gray-300 text-sm mb-4 line-clamp-3`}>{product.description}</p>
                {product.variants && product.variants.length > 0 && (
                  <div className="flex flex-col gap-2 mb-4">
                    {product.variants.map(variant => (
                      <Button
                        key={variant.id}
                        onClick={() => setSelectedVariants({
                          ...selectedVariants,
                          [product.id!]: variant
                        })}
                        className={`${poppins.className} w-full font-semibold border border-amber-500/30 text-amber-400 bg-neutral-800/50 hover:bg-amber-500 hover:text-black transition-all ${
                          selectedVariants[product.id!]?.id === variant.id ? 'bg-amber-500 text-black' : ''
                        }`}
                      >
                        {variant.variant_name} - ₾{variant.price.toFixed(2)}
                      </Button>
                    ))}
                  </div>
                )}
                {/*<Button
                  onClick={() => addToCart(product)}
                  className={`${poppins.className} w-full font-semibold border border-amber-500 text-amber-400 bg-transparent hover:bg-amber-500 hover:text-black transition-all`}
                >
                  Add to Cart
                </Button>*/}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      {cart.length > 0 && (
        <Button
          onClick={() => setIsCartOpen(true)}
          className={`${poppins.className} fixed bottom-6 right-6 rounded-3xl w-16 h-16 flex items-center justify-center shadow-lg hover:scale-110 transition bg-amber-500 text-black`}
        >
          <ShoppingCart size={22} />
          <span className="absolute -top-2 -right-2 bg-black text-amber-400 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold border border-amber-400">
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </span>
        </Button>
      )}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          >
            <div className="bg-neutral-900/80 backdrop-blur-md p-6 rounded-2xl shadow-xl w-full max-w-md border border-[rgba(212,175,55,0.4)]">
              <div className="flex justify-between items-center mb-4">
                <h2 className={`${playfair.className} text-lg font-playfair text-amber-400`}>Your Cart</h2>
                <Button onClick={() => setIsCartOpen(false)} variant="ghost" className={`${poppins.className} hover:bg-neutral-800 text-gray-300`}>
                  <X />
                </Button>
              </div>
              {cart.length === 0 ? (
                <p className={`${roboto.className} text-gray-300`}>Empty Cart.</p>
              ) : (
                <>
                  <div className="space-y-3">
                    {cart.map((item) => (
                      <div key={`${item.product_id}-${item.variant_id || 'no-variant'}`} className="flex justify-between items-center">
                        <span className={`${roboto.className} text-amber-400`}>{item.name}{item.variant_name ? ` (${item.variant_name})` : ''} x{item.quantity}</span>
                        <div className="flex items-center">
                          <Button onClick={() => updateQuantity(item.product_id, item.variant_id, -1)} className={`${poppins.className} px-2 py-1 bg-neutral-800 text-amber-400`} variant="outline">-</Button>
                          <span className={`${poppins.className} mx-2 font-semibold text-amber-400`}>{item.quantity}</span>
                          <Button onClick={() => updateQuantity(item.product_id, item.variant_id, 1)} className={`${poppins.className} px-2 py-1 bg-neutral-800 text-amber-400`} variant="outline">+</Button>
                          <span className={`${roboto.className} ml-4 font-semibold text-amber-400`}>₾{(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <label className={`${playfair.className} block mb-2 text-amber-400 font-medium`}>Table No:</label>
                    <select
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                      className={`${roboto.className} w-full p-2 border border-amber-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-neutral-800 text-amber-400`}
                    >
                      <option value="">Select a Table</option>
                      {[...Array(20).keys()].map(i => (
                        <option key={i + 1} value={i + 1}>Table {i + 1}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mt-4">
                    <label className={`${playfair.className} block mb-2 text-amber-400 font-medium`}>Branch:</label>
                    <select
                      value={branchId}
                      onChange={(e) => setBranchId(e.target.value)}
                      className={`${roboto.className} w-full p-2 border border-amber-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-neutral-800 text-amber-400`}
                    >
                      <option value="">Select a Branch</option>
                      {branches.map((branch) => (
                        <option key={branch.id} value={branch.id}>{branch.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className={`${poppins.className} mt-4 text-lg font-bold text-amber-400`}>
                    Total: ₾{calculateTotal()}
                  </div>
                  <div className="mt-6 flex justify-end gap-3">
                    <Button onClick={() => setIsCartOpen(false)} variant="outline" className={`${poppins.className} text-amber-400 border-amber-500/30 hover:bg-neutral-800`}>
                      Close
                    </Button>
                    <Button onClick={submitOrder} className={`${poppins.className} bg-amber-500 text-black hover:bg-amber-600`}>
                      Confirm Order
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