'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface DarkModeHandlerProps {
  children: React.ReactNode;
}

export default function DarkModeHandler({ children }: DarkModeHandlerProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.startsWith('/admin')) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [pathname]);

  return <>{children}</>;
}