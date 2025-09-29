{/*import { headers } from 'next/headers';
import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { createServerClient } from '@/lib/supabase-server';

export async function SectionCards({ branchId, role }: { branchId?: string; role: string }) {
  const supabase = createServerClient();

  // Günlük gelir
  let revenueQuery = supabase
    .from('order_items')
    .select('price_at_order, quantity, orders(created_at, branch_id)')
    .gte('orders.created_at', new Date().toISOString().split('T')[0])
    .lte('orders.created_at', new Date().toISOString().split('T')[0] + 'T23:59:59.999Z');

  if (role === 'admin' && branchId) {
    revenueQuery = revenueQuery.eq('orders.branch_id', branchId);
  }

  const { data: revenueData } = await revenueQuery;
  const totalRevenue = revenueData?.reduce((sum, item) => sum + item.price_at_order * item.quantity, 0) || 0;

  // Günlük sipariş sayısı
  let orderQuery = supabase
    .from('orders')
    .select('id, branch_id, branches(name)')
    .gte('created_at', new Date().toISOString().split('T')[0])
    .lte('created_at', new Date().toISOString().split('T')[0] + 'T23:59:59.999Z');

  if (role === 'admin' && branchId) {
    orderQuery = orderQuery.eq('branch_id', branchId);
  }

  const { data: orderData } = await orderQuery;
  const orderCount = orderData?.length || 0;

  // Şube bazlı siparişler
  const activeAccounts = role === 'superadmin' ? Object.values(
    orderData?.reduce((acc, order) => {
      const branchName = order.branches?.name || 'Unknown Branch';
      acc[branchName] = (acc[branchName] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  ).reduce((sum, count) => sum + count, 0) || 0 : orderCount;

  // Aylık büyüme
  let monthlyQuery = supabase
    .from('order_items')
    .select('price_at_order, quantity, orders(created_at, branch_id)')
    .gte('orders.created_at', new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1).toISOString())
    .lte('orders.created_at', new Date().toISOString());

  if (role === 'admin' && branchId) {
    monthlyQuery = monthlyQuery.eq('orders.branch_id', branchId);
  }

  const { data: monthlyData } = await monthlyQuery;
  const monthlyTotals = monthlyData?.reduce((acc, item) => {
    const month = new Date(item.orders.created_at).getMonth();
    const year = new Date(item.orders.created_at).getFullYear();
    const key = `${year}-${month}`;
    acc[key] = (acc[key] || 0) + item.price_at_order * item.quantity;
    return acc;
  }, {} as Record<string, number>);
  const months = Object.keys(monthlyTotals).sort();
  const growthRate = months.length >= 2
    ? ((monthlyTotals[months[months.length - 1]] - monthlyTotals[months[months.length - 2]]) / (monthlyTotals[months[months.length - 2]] || 1) * 100).toFixed(1)
    : months.length === 1 ? 100 : 0;

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Toplam Gelir</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            ₾{totalRevenue.toFixed(2)}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              {totalRevenue > 0 ? <IconTrendingUp /> : <IconTrendingDown />}
              {totalRevenue > 0 ? '+100%' : '0%'}
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Bugünkü gelir {totalRevenue > 0 ? <IconTrendingUp className="size-4" /> : <IconTrendingDown className="size-4" />}
          </div>
          <div className="text-muted-foreground">Gece yarısı sıfırlanır</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Siparişler (Burada)</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {orderCount}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              {orderCount > 0 ? <IconTrendingUp /> : <IconTrendingDown />}
              {orderCount > 0 ? '+100%' : '0%'}
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Bugünkü siparişler {orderCount > 0 ? <IconTrendingUp className="size-4" /> : <IconTrendingDown className="size-4" />}
          </div>
          <div className="text-muted-foreground">Gece yarısı sıfırlanır</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Siparişler (Tüm Şubeler)</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {activeAccounts}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              {activeAccounts > 0 ? <IconTrendingUp /> : <IconTrendingDown />}
              {activeAccounts > 0 ? '+100%' : '0%'}
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Bugünkü şube siparişleri {activeAccounts > 0 ? <IconTrendingUp className="size-4" /> : <IconTrendingDown className="size-4" />}
          </div>
          <div className="text-muted-foreground">Gece yarısı sıfırlanır</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Büyüme Oranı</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {growthRate}%
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              {growthRate >= 0 ? <IconTrendingUp /> : <IconTrendingDown />}
              {growthRate >= 0 ? `+${growthRate}%` : `${growthRate}%`}
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Aylık gelir değişimi {growthRate >= 0 ? <IconTrendingUp className="size-4" /> : <IconTrendingDown className="size-4" />}
          </div>
          <div className="text-muted-foreground">Önceki aya kıyasla</div>
        </CardFooter>
      </Card>
    </div>
  );
}*/}