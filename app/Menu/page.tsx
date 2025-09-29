import { Suspense } from 'react';
import MenuClient from './menu';
import { createSupabaseClient } from '@/lib/supabase-client';

interface Product {
  id?: number;
  name?: string;
  price?: number;
  image_url?: string;
  category_id?: number;
  description?: string;
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

    let categoryId: number | null = null;
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
      if (!categoryResponse.ok) return [];
      const categories = await categoryResponse.json() as { id: number }[];
      if (!categories?.length) return [];
      categoryId = categories[0].id;
    }

    const productQuery = categoryId
      ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/products?category_id=eq.${categoryId}&select=id,name,price,image_url,category_id,description`
      : `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/products?select=id,name,price,image_url,category_id,description`;
    
    const productResponse = await fetch(productQuery, {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      },
      cache: 'no-store',
    });

    if (!productResponse.ok) return [];
    return await productResponse.json() as Product[];
  } catch {
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