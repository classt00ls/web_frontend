'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { FaExclamationCircle, FaHome, FaRedo, FaArrowLeft, FaCode } from 'react-icons/fa';

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Registra el error en la consola para diagnóstico
    console.error('Error en el dashboard:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full">
        <div className="flex items-center justify-center mb-6 text-red-500">
          <FaExclamationCircle size={60} />
        </div>
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Error en el Dashboard
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Se ha producido un error al cargar esta página
        </p>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="mb-3">
            <p className="font-semibold text-red-700">Mensaje de error:</p>
            <div className="mt-1 bg-gray-800 rounded p-3 text-white font-mono text-sm overflow-auto">
              {error.message || 'Error desconocido'}
            </div>
          </div>
          
          {error.digest && (
            <div className="mb-3">
              <p className="font-semibold text-gray-700">Error ID:</p>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">{error.digest}</code>
            </div>
          )}
          
          <div>
            <p className="font-semibold text-gray-700">Detalles para el desarrollador:</p>
            <div className="flex items-center gap-2 mt-1">
              <FaCode size={14} className="text-gray-600" />
              <span className="text-sm text-gray-600">
                Consulta la consola (F12) para más información
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-3">
          <button 
            onClick={reset}
            className="flex items-center justify-center gap-2 bg-primary text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaRedo />
            Intentar de nuevo
          </button>
          
          <Link 
            href="/dashboard/home" 
            className="flex items-center justify-center gap-2 border border-gray-300 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
          >
            <FaHome />
            Volver al inicio del Dashboard
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 border border-gray-300 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
          >
            <FaArrowLeft />
            Volver a la página anterior
          </button>
        </div>
      </div>
    </div>
  );
} 