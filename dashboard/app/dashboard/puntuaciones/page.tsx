'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaStar, FaEdit, FaTrash } from 'react-icons/fa';

export default function Puntuaciones() {
  const [puntuaciones, setPuntuaciones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulación de carga de datos
    setTimeout(() => {
      const mockData = [
        {
          id: 1,
          herramienta: {
            id: 1,
            nombre: 'ChatGPT',
            imagen: 'https://via.placeholder.com/50',
            categoria: 'Chatbot',
          },
          puntuacion: 5,
          comentario: 'Excelente herramienta para crear contenido educativo rápidamente. Mis estudiantes se benefician mucho de las explicaciones personalizadas.',
          fecha: '2023-05-15',
        },
        {
          id: 2,
          herramienta: {
            id: 2,
            nombre: 'DALL-E',
            imagen: 'https://via.placeholder.com/50',
            categoria: 'Generación de imágenes',
          },
          puntuacion: 4,
          comentario: 'Muy útil para crear imágenes ilustrativas para mis presentaciones de clase.',
          fecha: '2023-06-22',
        },
        {
          id: 3,
          herramienta: {
            id: 4,
            nombre: 'Claude',
            imagen: 'https://via.placeholder.com/50',
            categoria: 'Chatbot',
          },
          puntuacion: 4,
          comentario: 'Buen asistente para la creación de ejercicios y exámenes.',
          fecha: '2023-07-10',
        },
      ];
      
      setPuntuaciones(mockData);
      setIsLoading(false);
    }, 1000);
  }, []);
  
  const handleEliminarPuntuacion = (id) => {
    if (confirm('¿Estás seguro de que quieres eliminar esta valoración?')) {
      // En un caso real, aquí se haría una petición DELETE al API
      setPuntuaciones(puntuaciones.filter(p => p.id !== id));
    }
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-800">Mis Puntuaciones</h2>
        <p className="text-gray-600">Administra las valoraciones que has dado a herramientas de IA</p>
      </div>
      
      <div className="mb-4 flex justify-between">
        <div>
          <span className="text-gray-600">Total: {puntuaciones.length} valoraciones</span>
        </div>
        <button className="btn-primary">
          Nueva valoración
        </button>
      </div>
      
      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 animate-pulse">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-lg mr-4"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="w-4 h-4 bg-gray-200 rounded-full"></div>
                  ))}
                </div>
              </div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : puntuaciones.length > 0 ? (
        <div className="space-y-4">
          {puntuaciones.map((puntuacion) => (
            <div key={puntuacion.id} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <Link href={`/dashboard/herramientas/${puntuacion.herramienta.id}`}>
                  <img 
                    src={puntuacion.herramienta.imagen} 
                    alt={puntuacion.herramienta.nombre} 
                    className="w-12 h-12 object-cover rounded-lg mr-4"
                  />
                </Link>
                <div className="flex-1">
                  <Link href={`/dashboard/herramientas/${puntuacion.herramienta.id}`}>
                    <h3 className="font-bold text-lg hover:text-primary">
                      {puntuacion.herramienta.nombre}
                    </h3>
                  </Link>
                  <span className="text-sm text-gray-500">{puntuacion.herramienta.categoria}</span>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < puntuacion.puntuacion ? "text-yellow-400" : "text-gray-300"}
                      size={16}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-2">{puntuacion.comentario}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Valorado el {puntuacion.fecha}</span>
                <div className="flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                    <FaEdit size={14} /> Editar
                  </button>
                  <button 
                    className="text-red-500 hover:text-red-700 flex items-center gap-1"
                    onClick={() => handleEliminarPuntuacion(puntuacion.id)}
                  >
                    <FaTrash size={14} /> Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl shadow-md">
          <p className="text-gray-500 mb-4">Aún no has valorado ninguna herramienta</p>
          <Link href="/dashboard/herramientas" className="btn-primary">
            Explorar herramientas
          </Link>
        </div>
      )}
    </div>
  );
} 