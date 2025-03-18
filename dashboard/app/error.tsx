'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Registra el error en la consola para diagnóstico
    console.error('Error en la aplicación:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-red-600 mb-4">¡Ha ocurrido un error!</h1>
        
        <div className="mb-6 p-4 bg-red-50 rounded border border-red-200">
          <p className="text-gray-700 mb-2">
            Mensaje de error:
          </p>
          <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm overflow-x-auto">
            {error.message || 'Error desconocido'}
          </div>
          {error.digest && (
            <p className="text-sm mt-2 text-gray-500">
              Digest: {error.digest}
            </p>
          )}
          <p className="text-sm mt-2 text-gray-500">
            URL: <span className="font-mono bg-gray-100 px-1 text-gray-800">{typeof window !== 'undefined' ? window.location.pathname : ''}</span>
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Información para desarrolladores:</h2>
          <div className="bg-gray-100 p-3 rounded text-sm font-mono overflow-auto max-h-40">
            <p>Nombre: {error.name}</p>
            <p>Stack trace disponible en consola (F12)</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button 
            onClick={reset}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Intentar de nuevo
          </button>
          <Link href="/dashboard/home" className="border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50 text-center">
            Volver al dashboard
          </Link>
        </div>
      </div>
    </div>
  );
} 