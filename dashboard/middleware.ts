import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Para desarrollo, omitimos la verificación de token
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next();
  }
  
  // En producción, verificamos el token
  const token = request.cookies.get('access_token')?.value;
  
  // Si no hay token o es "false", redirigir al login
  if (!token || token === 'false') {
    return NextResponse.redirect(new URL('/signIn', request.url));
  }
  
  return NextResponse.next();
}

// Configuración de rutas a proteger
export const config = {
  matcher: [
    '/dashboard/:path*',
  ],
}; 