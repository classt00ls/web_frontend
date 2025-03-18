'use client';

import Link from 'next/link';
import { FaExclamationTriangle, FaHome, FaArrowLeft, FaBug } from 'react-icons/fa';

export default function DashboardNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full">
        <div className="flex items-center justify-center mb-6 text-red-500">
          <FaExclamationTriangle size={60} />
        </div>
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Página no encontrada</h1>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 mb-2 text-red-700">
            <FaBug />
            <h2 className="font-semibold">Error 404</h2>
          </div>
          
          <p className="text-gray-700 mb-3">
            La página que estás buscando no existe en el dashboard.
          </p>
          
          <div className="bg-white p-3 rounded border border-gray-200">
            <p className="font-mono text-sm text-gray-600">
              URL: {typeof window !== 'undefined' ? window.location.pathname : ''}
            </p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="font-semibold text-gray-700 mb-2">Posibles soluciones:</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Verifica que la URL sea correcta</li>
            <li>Revisa que la página exista en el código</li>
            <li>Comprueba si next.config.js tiene la configuración adecuada</li>
            <li>Verifica que la estructura de carpetas siga las convenciones de Next.js</li>
          </ul>
        </div>
        
        <div className="flex flex-col gap-3">
          <Link 
            href="/dashboard/home" 
            className="flex items-center justify-center gap-2 bg-primary text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaHome />
            Ir al inicio del Dashboard
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