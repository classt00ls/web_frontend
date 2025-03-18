import { NextResponse } from 'next/server';

export async function GET() {
  // Esta ruta siempre debería funcionar para comprobar si la API está viva
  return NextResponse.json({ 
    status: 'ok',
    timestamp: new Date().toISOString(),
    nextjsVersion: process.env.NEXT_RUNTIME || 'unknown',
    env: process.env.NODE_ENV || 'unknown',
  });
} 