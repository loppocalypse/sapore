'use client';
import { useUser } from '@clerk/nextjs';
import { useState, useEffect } from 'react';
import { createSupabaseClient } from '@/lib/supabase-client';
import {
  IconChartBar, IconDashboard, IconDatabase, IconFolder, IconHelp, IconInnerShadowTop, IconSettings, IconUsers,
} from '@tabler/icons-react';
import { NavMain } from '@/components/nav-main';
import { NavSecondary } from '@/components/nav-secondary';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { UserButton } from '@clerk/nextjs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  selectedBranch?: string;
  setSelectedBranch?: (branch: string) => void;
  branches?: { id: string; name: string }[];
  role?: string;
}

export function AppSidebar({ 
  selectedBranch = 'all',
  setSelectedBranch,
  branches = [],
  role: propRole,
  ...props 
}: AppSidebarProps) {
  const { user } = useUser();
  const [role, setRole] = useState(propRole || 'superadmin');
  const [internalBranches, setInternalBranches] = useState<any[]>([]);

  // Use branches from props if available, otherwise use internal state
  const branchesToUse = branches.length > 0 ? branches : internalBranches;

  useEffect(() => {
    if (user && !propRole) {
      const supabase = createSupabaseClient();
      supabase
        .from('users')
        .select('role, branch_id')
        .eq('clerk_id', user.id)
        .single()
        .then(({ data }) => {
          setRole(data?.role || 'superadmin');
          if (data?.branch_id && setSelectedBranch) {
            setSelectedBranch(data.branch_id);
          }
        });
    }
    
    // Only fetch branches if not provided via props
    if (user && branches.length === 0) {
      const supabase = createSupabaseClient();
      supabase.from('branches').select('id, name').then(({ data }) => {
        setInternalBranches(data || []);
      });
    }
  }, [user, propRole, branches.length, setSelectedBranch]);

  const navMain = role === 'superadmin' ? [
    { title: 'Dashboard', url: '/admin', icon: IconDashboard },
    { title: 'Menü Yönetimi', url: '/admin/products', icon: IconDatabase },
    { title: 'Şubeler', url: '/admin/branches', icon: IconFolder },
    { title: 'Analitik', url: '/admin/analytics', icon: IconChartBar },
    { title: 'Ekip', url: '/admin/team', icon: IconUsers },
  ] : [
    { title: 'Dashboard', url: '/admin', icon: IconDashboard },
    { title: 'Menü', url: '/admin/products', icon: IconDatabase },
  ];

  const navSecondary = [
    { title: 'Ayarlar', url: '/admin/settings', icon: IconSettings },
    { title: 'Yardım', url: '/admin/help', icon: IconHelp },
  ];

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="/">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Cafe Sapore</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          {role === 'superadmin' && setSelectedBranch && (
            <SidebarMenuItem>
              <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Şube Seç" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tüm Şubeler</SelectItem>
                  {branchesToUse.map(b => (
                    <SelectItem key={b.id} value={b.id}>{b.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </SidebarMenuItem>
          )}
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
        <NavSecondary items={navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <UserButton />
      </SidebarFooter>
    </Sidebar>
  );
}