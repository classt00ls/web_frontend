'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaSpinner } from 'react-icons/fa';

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirección automática a la página del dashboard
    // Esta lógica se ejecuta cuando Next.js sirve la página raíz
    const path = window.location.pathname;
    
    // Si la URL termina en /dashboard (la raíz con basePath) o / (raíz sin basePath)
    // redirigimos a la página que muestra el contenido del dashboard
    if (path === '/dashboard' || path === '/') {
      router.push('/dashboard/home');
    }
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="animate-spin mb-4 text-primary">
        <FaSpinner size={40} />
      </div>
      <h1 className="text-2xl font-bold text-gray-800">Redirigiendo...</h1>
      <p className="text-gray-600">Por favor espere mientras le redirigimos al dashboard.</p>
    </div>
  );
} 