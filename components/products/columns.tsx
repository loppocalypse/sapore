{/*'use client';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { IconDotsVertical } from '@tabler/icons-react';
import { toast } from 'sonner';
import { createSupabaseClient } from '@/lib/supabase-client';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category_id: string;
  created_at: string;
  category: string;
  branch_id: string;
  branch_name: string; // Added
};

export const columns: ColumnDef<Product>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'description', header: 'Description' },
  {
    accessorKey: 'price',
    header: 'Price (₾)',
    cell: ({ row }) => <div>₾{row.original.price.toFixed(2)}</div>,
  },
  { accessorKey: 'category', header: 'Category' },
  {
    accessorKey: 'branch_name', // Changed to branch_name
    header: 'Branch',
    cell: ({ row }) => <div>{row.original.branch_name}</div>,
  },
  {
    accessorKey: 'created_at',
    header: 'Created At',
    cell: ({ row }) => new Date(row.original.created_at).toLocaleString('tr-TR'),
  },
  {
    id: 'product_actions',
    header: 'İşlemler',
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <IconDotsVertical className="h-4 w-4" />
            <span className="sr-only">Open Menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => {
              toast.success(`${row.original.name} için düzenleme açıldı`);
              // TODO: Edit modal veya sayfa yönlendirme
            }}
          >
            Düzenle
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={async () => {
              const supabase = createSupabaseClient();
              const { error } = await supabase
                .from('products')
                .delete()
                .eq('id', row.original.id);
              if (error) {
                toast.error(`Error: ${error.message}`);
              } else {
                toast.success(`${row.original.name} Deleted`);
                // TODO: DataTable'ı yenile
              }
            }}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];*/}