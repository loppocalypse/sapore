{/*'use client';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { IconDotsVertical } from '@tabler/icons-react';
import { toast } from 'sonner';
import { createSupabaseClient } from '@/lib/supabase-client';

export type Report = {
  id: string;
  name: string;
  email: string;
  branch: string;
  branch_name: string; // Added
  issue: string;
  created_at: string;
};

export const columns: ColumnDef<Report>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'E-mail' },
  { accessorKey: 'branch_name', header: 'Branch' }, // Changed to branch_name
  { accessorKey: 'issue', header: 'Issue' },
  {
    accessorKey: 'created_at',
    header: 'Created At',
    cell: ({ row }) => new Date(row.original.created_at).toLocaleString('tr-TR'),
  },
  {
    id: 'report_actions',
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
          onClick={async () => {
            const supabase = createSupabaseClient();
            const { error } = await supabase
              .from('reports')
              .delete()
              .eq('id', row.original.id);
            if (error) {
              toast.error(`Error: ${error.message}`);
            } else {
              toast.success('Report Deleted');
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