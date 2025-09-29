'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { createSupabaseClient } from '@/lib/supabase-client';
import { toast } from 'sonner';

// Define the possible chart keys
type ChartKey = 'day' | 'week' | 'month' | 'threeMonths';

export function ChartAreaInteractive({ branchId, role }: { branchId?: string; role: string }) {
  const [chartData, setChartData] = useState<any[]>([]);
  const [activeChart, setActiveChart] = useState<ChartKey>('day');
  const isMobile = useIsMobile();
  const { user } = useUser();

  const chartConfig = {
    day: { label: '1 Gün', color: 'hsl(var(--chart-1))' },
    week: { label: '1 Hafta', color: 'hsl(var(--chart-2))' },
    month: { label: '1 Ay', color: 'hsl(var(--chart-3))' },
    threeMonths: { label: '3 Ay', color: 'hsl(var(--chart-4))' },
  } satisfies ChartConfig;

  const [ranges, setRanges] = useState<Record<ChartKey, string>>({
    day: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0],
    week: new Date(new Date().setDate(new Date().getDate() - 7)).toISOString().split('T')[0],
    month: new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString().split('T')[0],
    threeMonths: new Date(new Date().setMonth(new Date().getMonth() - 3)).toISOString().split('T')[0],
  });

  const fetchChartData = async () => {
    try {
      console.log('Fetching chart data - role:', role, 'branchId:', branchId); // Debug
      const supabase = createSupabaseClient();
      let query = supabase
        .from('orders')
        .select('created_at, branch_id')
        .lte('created_at', new Date().toISOString())
        .order('created_at');

      if (role === 'admin' && branchId) {
        if (!branchId.match(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)) {
          console.error('Invalid branch_id format:', branchId);
          setChartData([]);
          toast.error('Geçersiz şube ID formatı');
          return;
        }
        query = query.eq('branch_id', branchId);
      }

      const { data, error } = await query;
      if (error) {
        console.error('Chart data fetch error:', {
          message: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint,
        });
        setChartData([]);
        toast.error(`Veri yüklenemedi: ${error.message || 'Bilinmeyen hata'}`);
        return;
      }

      console.log('Raw orders data:', data); // Debug
      if (!data || data.length === 0) {
        setChartData([]);
        toast.info('Gösterilecek sipariş verisi yok.');
        return;
      }

      // Validate and aggregate orders by date
      const dailyOrders: Record<string, number> = data.reduce((acc: Record<string, number>, order: any) => {
        if (!order.created_at || isNaN(new Date(order.created_at).getTime())) {
          console.warn('Invalid order, missing or invalid created_at:', order); // Debug
          return acc;
        }
        const date = new Date(order.created_at).toISOString().split('T')[0];
        acc[date] = (acc[date] ?? 0) + 1;
        return acc;
      }, {});

      console.log('Aggregated daily orders:', dailyOrders); // Debug

      // Generate all dates in the range to ensure continuous data
      const startDate = new Date(ranges.threeMonths);
      const endDate = new Date();
      const allDates: string[] = [];
      for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
        allDates.push(new Date(d).toISOString().split('T')[0]);
      }

      // Normalize data to 0-1 range for all time periods
      const maxCount = Math.max(...Object.values(dailyOrders), 1); // Avoid division by zero
      const formattedData = allDates
        .map(date => {
          const orderDate = new Date(date);
          const count = dailyOrders[date] ?? 0;
          const normalizedCount = count / maxCount; // Normalize to 0-1
          return {
            date,
            day: orderDate >= new Date(ranges.day) ? normalizedCount : 0,
            week: orderDate >= new Date(ranges.week) ? normalizedCount : 0,
            month: orderDate >= new Date(ranges.month) ? normalizedCount : 0,
            threeMonths: normalizedCount,
          };
        })
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

      console.log('Formatted chart data:', formattedData); // Debug
      setChartData(formattedData);
    } catch (err: any) {
      console.error('Unexpected error in fetchChartData:', {
        message: err.message,
        stack: err.stack,
      });
      setChartData([]);
      toast.error('Grafik verileri yüklenirken hata oluştu');
    }
  };

  useEffect(() => {
    console.log('Chart useEffect - role:', role, 'branchId:', branchId); // Debug
    fetchChartData();

    const supabase = createSupabaseClient();
    const channel = supabase
      .channel('orders-chart')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'orders',
          filter: role === 'admin' && branchId ? `branch_id=eq.${branchId}` : undefined,
        },
        () => {
          console.log('New order received, refetching data'); // Debug
          toast.success('Yeni sipariş geldi!');
          fetchChartData();
        }
      )
      .subscribe((status, err) => {
        if (err) {
          console.error('Subscription error:', err);
        }
        console.log('Subscription status:', status); // Debug
      });

    return () => {
      console.log('Unsubscribing from orders-chart channel'); // Debug
      supabase.removeChannel(channel);
    };
  }, [branchId, role]);

  // Filter data based on activeChart to show only relevant dates
  const filteredData = chartData.filter(d => {
    const startDate = new Date(ranges[activeChart]);
    return new Date(d.date) >= startDate;
  });

  return (
    <Card className="shadow-xs">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-4 py-4 sm:px-6 sm:py-6">
          <CardTitle>Sipariş Trendleri</CardTitle>
          <CardDescription>Zaman içindeki sipariş sayıları</CardDescription>
        </div>
        <CardAction className="flex items-center gap-2 sm:border-l">
          {isMobile ? (
            <Select
              value={activeChart}
              onValueChange={(value: ChartKey) => {
                console.log('Selected chart:', value); // Debug
                setActiveChart(value);
              }}
            >
              <SelectTrigger className="m-2 h-auto w-[160px] rounded-lg sm:ml-2 sm:mr-6">
                <SelectValue placeholder="Zaman Aralığı Seç" />
              </SelectTrigger>
              <SelectContent>
                {(Object.keys(chartConfig) as ChartKey[]).map((key) => (
                  <SelectItem key={key} value={key}>
                    {chartConfig[key].label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <ToggleGroup
              type="single"
              value={activeChart}
              onValueChange={(value: ChartKey) => {
                if (value) {
                  console.log('Selected chart:', value); // Debug
                  setActiveChart(value);
                }
              }}
              className="m-2 sm:ml-2 sm:mr-6"
            >
              {(Object.keys(chartConfig) as ChartKey[]).map((key) => (
                <ToggleGroupItem
                  key={key}
                  value={key}
                  aria-label={`Toggle ${key}`}
                  className="rounded-lg"
                >
                  {chartConfig[key].label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          )}
        </CardAction>
      </CardHeader>
      <CardContent className="px-4 pt-4 sm:px-6 sm:pt-6">
        {filteredData.length === 0 ? (
          <div className="text-center text-muted-foreground">Veri yok</div>
        ) : (
          <ChartContainer config={chartConfig}>
            <AreaChart
              key={activeChart} // Key to remount and trigger animation on change
              data={filteredData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="fillDay" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#4CAF50" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="fillWeek" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2196F3" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#2196F3" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="fillMonth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF9800" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#FF9800" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="fillThreeMonths" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9C27B0" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#9C27B0" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  try {
                    if (!value) {
                      console.warn('XAxis tick value is undefined'); // Debug
                      return '';
                    }
                    const date = new Date(value);
                    if (isNaN(date.getTime())) {
                      console.warn('Invalid XAxis date:', value); // Debug
                      return '';
                    }
                    return date.toLocaleDateString('tr-TR', {
                      month: 'short',
                      day: 'numeric',
                    });
                  } catch (err) {
                    console.error('XAxis tick format error:', err, 'value:', value); // Debug
                    return '';
                  }
                }}
              />
              <YAxis
                ticks={[0, 1]} // Only show 0 and 1 as ticks
                tickLine={false}
                axisLine={false}
                domain={[0, 1]} // Force Y-axis range to 0-1 for all time periods
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    labelFormatter={(value) => {
                      try {
                        if (!value) {
                          console.warn('Tooltip value is undefined'); // Debug
                          return '';
                        }
                        const date = new Date(value);
                        if (isNaN(date.getTime())) {
                          console.warn('Invalid tooltip date:', value); // Debug
                          return '';
                        }
                        return date.toLocaleDateString('tr-TR', {
                          month: 'short',
                          day: 'numeric',
                        });
                      } catch (err) {
                        console.error('Tooltip format error:', err, 'value:', value); // Debug
                        return '';
                      }
                    }}
                    indicator="dot"
                    formatter={(value) => [
                      typeof value === 'number' ? value.toFixed(2) : String(value),
                      'Normalized Count',
                    ]} // Show normalized value in tooltip
                  />
                }
              />
              <Area
                dataKey={activeChart}
                type="monotone" // Smoother curve for less harsh appearance
                fill={`url(#fill${activeChart.charAt(0).toUpperCase() + activeChart.slice(1)})`}
                stroke={`var(--color-${activeChart})`}
                stackId="a"
                isAnimationActive={true}
                animationDuration={2000} // Smooth animation duration
                animationEasing="ease-in-out" // Smoother easing
              />
            </AreaChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
}