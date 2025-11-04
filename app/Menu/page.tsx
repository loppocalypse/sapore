import { Suspense } from 'react';
import MenuClient from './menu';
import { createSupabaseClient } from '@/lib/supabase-client';

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

interface Branch {
  id: string;
  name: string;
}

async function getProducts(categorySlug: string, lang: string): Promise<Product[]> {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      throw new Error("Supabase URL veya Anon Key eksik");
    }

    let categoryId: string | null = null;
    if (categorySlug !== 'all') {
      const categoryResponse = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/categories?slug=eq.${categorySlug}&select=id`,
        {
          headers: {
            apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          },
          cache: 'no-store',
        }
      );
      if (!categoryResponse.ok) {
        console.error('Kategori alınamadı:', categoryResponse.status);
        return [];
      }
      const categories = await categoryResponse.json() as { id: string }[];
      if (!categories?.length) {
        console.error('Kategori bulunamadı:', categorySlug);
        return [];
      }
      categoryId = categories[0].id;
    }

    const productQuery = categoryId
      ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/products?category_id=eq.${categoryId}&select=id,name,name_en,name_tr,name_ka,name_ru,name_ar,image_url,category_id,description,description_en,description_tr,description_ka,description_ru,description_ar,price,variants:product_variants(id,variant_name,variant_name_en,variant_name_tr,variant_name_ka,variant_name_ru,variant_name_ar,price)`
      : `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/products?select=id,name,name_en,name_tr,name_ka,name_ru,name_ar,image_url,category_id,description,description_en,description_tr,description_ka,description_ru,description_ar,price,variants:product_variants(id,variant_name,variant_name_en,variant_name_tr,variant_name_ka,variant_name_ru,variant_name_ar,price)`;

    const productResponse = await fetch(productQuery, {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      },
      cache: 'no-store',
    });

    if (!productResponse.ok) {
      console.error('Ürünler alınamadı:', productResponse.status);
      return [];
    }
    const products = await productResponse.json() as Product[];
    // Filter out products with missing id or name to match the required Product interface
    const validProducts = products.filter(
      (product): product is Product => !!product.id && !!product.name
    );
    console.log('Çekilen ürünler:', validProducts);
    return validProducts;
  } catch (error: any) {
    console.error('Ürünleri çekerken hata:', error.message);
    return [];
  }
}

interface MenuPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function MenuPage({ searchParams }: MenuPageProps) {
  const resolvedSearchParams = await searchParams;
  const selectedCategory = (resolvedSearchParams.category as string) || 'all';
  const lang = (resolvedSearchParams.lang as string) || 'en';
  const products = await getProducts(selectedCategory, lang);

  const supabase = createSupabaseClient();
  const { data: branches, error: branchError } = await supabase
    .from('branches')
    .select('id, name');

  if (branchError) {
    console.error('Şubeler alınamadı:', branchError.message);
    return <div className="text-red-500 text-center py-6">Şubeler yüklenemedi: {branchError.message}</div>;
  }

  return (
    <Suspense fallback={<div className="text-center py-6 text-gray-300">Loading...</div>}>
      <MenuClient
        products={products}
        branches={branches || []}
        error={null}
        lang={lang}
      />
    </Suspense>
  );
}