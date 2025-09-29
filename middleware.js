import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase-server';

const isProtectedRoute = createRouteMatcher(['']);
const isPublicRoute = createRouteMatcher(['/', '/menu(.*)', '/api/orders(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) {
    return NextResponse.next(); // Public rotalar için auth bypass
  }

  if (isProtectedRoute(req)) {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.redirect(new URL('/sign-in', req.url));
    }

    const supabase = createServerClient();
    const { data: user, error } = await supabase
      .from('users')
      .select('role, branch_id')
      .eq('clerk_id', userId)
      .single();

    if (error || !user || !user.is_active) {
      console.error('User fetch error:', error);
      return NextResponse.redirect(new URL('/sign-in', req.url));
    }

    const response = NextResponse.next();
    response.headers.set('x-user-role', user.role); // 'admin' veya 'superadmin'
    response.headers.set('x-user-branch', user.branch_id?.toString() || 'all');
    return response;
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};