import { Suspense } from 'react';
import MenuClient from './menu';
import { createSupabaseClient } from '@/lib/supabase-client';

interface Product {
  id?: string;
  name?: string;
  image_url?: string;
  category_id?: string;
  description?: string;
  price?: number; // Varyantsız ürünler için
  variants?: { id: string; variant_name: string; price: number }[];
}

interface Branch {
  id: string;
  name: string;
}

async function getProducts(categorySlug: string): Promise<Product[]> {
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
      ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/products?category_id=eq.${categoryId}&select=id,name,image_url,category_id,description,price,variants:product_variants(id,variant_name,price)`
      : `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/products?select=id,name,image_url,category_id,description,price,variants:product_variants(id,variant_name,price)`;

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
    console.log('Çekilen ürünler:', products); // Hata ayıklama için
    return products;
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
  const products = await getProducts(selectedCategory);

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
      />
    </Suspense>
  );
}