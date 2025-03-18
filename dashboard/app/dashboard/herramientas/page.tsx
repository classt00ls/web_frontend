'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaStar, FaSearch, FaFilter } from 'react-icons/fa';

export default function Herramientas() {
  const [herramientas, setHerramientas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulación de carga de datos
    setTimeout(() => {
      const mockData = [
        {
          id: 1,
          nombre: 'ChatGPT',
          descripcion: 'Modelo de lenguaje conversacional desarrollado por OpenAI',
          categoria: 'Chatbot',
          puntuacion: 4.8,
          numValoraciones: 156,
          imagen: 'https://via.placeholder.com/150',
        },
        {
          id: 2,
          nombre: 'DALL-E',
          descripcion: 'Generador de imágenes a partir de texto desarrollado por OpenAI',
          categoria: 'Generación de imágenes',
          puntuacion: 4.6,
          numValoraciones: 98,
          imagen: 'https://via.placeholder.com/150',
        },
        {
          id: 3,
          nombre: 'Midjourney',
          descripcion: 'Herramienta de generación de imágenes con alta calidad artística',
          categoria: 'Generación de imágenes',
          puntuacion: 4.7,
          numValoraciones: 112,
          imagen: 'https://via.placeholder.com/150',
        },
        {
          id: 4,
          nombre: 'Claude',
          descripcion: 'Asistente de IA conversacional desarrollado por Anthropic',
          categoria: 'Chatbot',
          puntuacion: 4.5,
          numValoraciones: 87,
          imagen: 'https://via.placeholder.com/150',
        },
        {
          id: 5,
          nombre: 'Stable Diffusion',
          descripcion: 'Modelo de generación de imágenes de código abierto',
          categoria: 'Generación de imágenes',
          puntuacion: 4.4,
          numValoraciones: 76,
          imagen: 'https://via.placeholder.com/150',
        },
        {
          id: 6,
          nombre: 'Gemini',
          descripcion: 'Modelo multimodal de Google que entiende texto, imágenes y más',
          categoria: 'Multimodal',
          puntuacion: 4.3,
          numValoraciones: 64,
          imagen: 'https://via.placeholder.com/150',
        },
      ];
      
      setHerramientas(mockData);
      setIsLoading(false);
    }, 1000);
  }, []);
  
  const herramientrasFiltradas = herramientas.filter((h) => 
    h.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    h.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
    h.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-800">Herramientas</h2>
        <p className="text-gray-600">Explora nuestra colección de herramientas de IA</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Buscar herramientas..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn bg-white border hover:bg-gray-100">
            <FaFilter /> <span className="ml-2">Filtrar</span>
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52">
            <li><a>Todas las categorías</a></li>
            <li><a>Chatbot</a></li>
            <li><a>Generación de imágenes</a></li>
            <li><a>Multimodal</a></li>
          </ul>
        </div>
      </div>
      
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="dashboard-card animate-pulse">
              <div className="w-full h-32 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2 w-2/3"></div>
              <div className="h-3 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 rounded mb-2"></div>
              <div className="flex items-center mt-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="w-4 h-4 bg-gray-200 rounded-full"></div>
                  ))}
                </div>
                <div className="h-3 bg-gray-200 rounded w-16 ml-2"></div>
              </div>
            </div>
          ))}
        </div>
      ) : herramientrasFiltradas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {herramientrasFiltradas.map((herramienta) => (
            <Link key={herramienta.id} href={`/dashboard/herramientas/${herramienta.id}`}>
              <div className="dashboard-card h-full cursor-pointer hover:shadow-lg transition-shadow">
                <img 
                  src={herramienta.imagen} 
                  alt={herramienta.nombre}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-1">{herramienta.nombre}</h3>
                <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full mb-2">
                  {herramienta.categoria}
                </span>
                <p className="text-gray-600 text-sm">{herramienta.descripcion}</p>
                <div className="flex items-center mt-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < Math.floor(herramienta.puntuacion) ? "text-yellow-400" : "text-gray-300"} 
                        size={14} 
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-2">
                    ({herramienta.puntuacion}) {herramienta.numValoraciones} valoraciones
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No se encontraron herramientas que coincidan con tu búsqueda</p>
        </div>
      )}
    </div>
  );
} 