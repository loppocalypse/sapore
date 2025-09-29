{/*'use client';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { IconDotsVertical } from '@tabler/icons-react';
import { toast } from 'sonner';
import { createSupabaseClient } from '@/lib/supabase-client';

export type Order = {
  id: string;
  table_no: number;
  total: number;
  status: string;
  created_at: string;
  branch_id: string;
  branch_name: string; // Added
  items: { product_id: string; quantity: number; price_at_order: number; product_name: string }[];
};

export const columns: ColumnDef<Order>[] = [
  { accessorKey: 'table_no', header: 'Table No' },
  {
    accessorKey: 'total',
    header: 'Total (₾)',
    cell: ({ row }) => <div>₺{row.original.total.toFixed(2)}</div>,
  },
  { accessorKey: 'status', header: 'Status' },
  {
    accessorKey: 'created_at',
    header: 'Order Date',
    cell: ({ row }) => new Date(row.original.created_at).toLocaleString('tr-TR'),
  },
  {
    accessorKey: 'branch_name', // Changed to branch_name
    header: 'Branch',
    cell: ({ row }) => <div>{row.original.branch_name}</div>,
  },
  {
    id: 'order_actions',
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
              toast.success(`Sipariş #${row.original.id} için düzenleme açıldı`);
              // TODO: Edit modal veya sayfa yönlendirme
            }}
          >
            Düzenle
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={async () => {
              const supabase = createSupabaseClient();
              const { error } = await supabase
                .from('orders')
                .delete()
                .eq('id', row.original.id);
              if (error) {
                toast.error(`Error: ${error.message}`);
              } else {
                toast.success(`Order #${row.original.id} Deleted`);
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