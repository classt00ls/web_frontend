'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Error 404 - Página no encontrada</h1>
        
        <div className="mb-6 p-4 bg-red-50 rounded border border-red-200">
          <p className="text-gray-700 mb-2">
            La página que estás buscando no existe o ha sido movida.
          </p>
          <p className="text-sm text-gray-500">
            URL: <span className="font-mono bg-gray-100 px-1">{typeof window !== 'undefined' ? window.location.pathname : ''}</span>
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Posibles causas:</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>La URL podría estar mal escrita</li>
            <li>La página podría haber sido movida o eliminada</li>
            <li>Es posible que el routing de Next.js no esté configurado correctamente</li>
            <li>Podría haber un problema con el basePath en next.config.js</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <Link href="/" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 text-center">
            Volver al inicio
          </Link>
          <button 
            onClick={() => {window.location.reload()}}
            className="border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50"
          >
            Intentar nuevamente
          </button>
        </div>
      </div>
    </div>
  );
} 