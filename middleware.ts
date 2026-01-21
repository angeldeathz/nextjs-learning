import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 1. Obtenemos la cookie de sesión
  const isLoggedIn = request.cookies.get('isLoggedIn');

  // 2. Si el usuario intenta ir al dashboard y NO está logueado
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!isLoggedIn) {
      // Lo mandamos de vuelta al login
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // 3. Si todo está bien, permitimos que continúe
  return NextResponse.next();
}

// 4. Configura en qué rutas debe activarse este "guardia"
export const config = {
  matcher: ['/dashboard/:path*'],
};