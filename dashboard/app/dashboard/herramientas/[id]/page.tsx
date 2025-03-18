'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaStar, FaArrowLeft, FaExternalLinkAlt, FaBookmark, FaThumbsUp, FaThumbsDown, FaComment } from 'react-icons/fa';

export default function DetalleHerramienta() {
  const params = useParams();
  const id = params.id;
  
  const [herramienta, setHerramienta] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('descripcion');
  
  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      const mockHerramienta = {
        id: parseInt(id as string),
        nombre: 'ChatGPT',
        descripcion: 'ChatGPT es un modelo de lenguaje de inteligencia artificial desarrollado por OpenAI. Está diseñado para mantener conversaciones naturales y generar respuestas coherentes a partir de las entradas del usuario.',
        descripcionLarga: `
          ChatGPT es un modelo de lenguaje de gran tamaño basado en la arquitectura GPT (Generative Pre-trained Transformer) que ha sido entrenado con grandes cantidades de texto para comprender y generar lenguaje natural.
          
          **Características principales:**
          
          - Capacidad para mantener conversaciones contextuales coherentes
          - Generación de texto en diversos formatos (ensayos, resúmenes, código, poesía, etc.)
          - Traducción entre idiomas
          - Respuesta a preguntas basadas en su conocimiento adquirido durante el entrenamiento
          
          **Casos de uso educativos:**
          
          - Asistencia en la redacción y revisión de textos académicos
          - Explicación de conceptos complejos de manera simplificada
          - Generación de ejemplos para ilustrar teorías o ideas
          - Creación de materiales educativos personalizados
        `,
        categoria: 'Chatbot',
        puntuacion: 4.8,
        numValoraciones: 156,
        imagen: 'https://via.placeholder.com/500x300',
        url: 'https://chat.openai.com',
        empresa: 'OpenAI',
        fechaLanzamiento: '2022-11-30',
        ultimaActualizacion: '2023-09-15',
        modelo: 'GPT-4',
        precio: 'Freemium',
        comentarios: [
          { id: 1, usuario: 'Carlos', fecha: '2023-05-15', puntuacion: 5, comentario: 'Herramienta revolucionaria para la enseñanza. Mis alumnos adoran usarla para resolver dudas.' },
          { id: 2, usuario: 'Laura', fecha: '2023-06-02', puntuacion: 4, comentario: 'Muy útil, aunque a veces da información inexacta que hay que verificar.' },
          { id: 3, usuario: 'Miguel', fecha: '2023-07-20', puntuacion: 5, comentario: 'Me ha ayudado a crear materiales didácticos personalizados en tiempo récord.' },
        ]
      };
      
      setHerramienta(mockHerramienta);
      setIsLoading(false);
    }, 1000);
  }, [id]);
  
  if (isLoading) {
    return (
      <div className="animate-pulse space-y-6">
        <div className="h-6 bg-gray-200 rounded w-1/3"></div>
        <div className="h-48 bg-gray-200 rounded"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    );
  }
  
  if (!herramienta) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800">Herramienta no encontrada</h2>
        <p className="text-gray-600 mt-2">La herramienta que buscas no existe o ha sido eliminada</p>
        <Link href="/dashboard/herramientas" className="btn-primary inline-block mt-4">
          Volver al listado
        </Link>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Link href="/dashboard/herramientas" className="text-gray-600 hover:text-primary">
          <FaArrowLeft />
        </Link>
        <h2 className="text-3xl font-bold text-gray-800">{herramienta.nombre}</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <img 
            src={herramienta.imagen} 
            alt={herramienta.nombre} 
            className="w-full rounded-xl shadow-md"
          />
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="border-b pb-4 mb-4">
              <div className="flex space-x-4">
                <button 
                  className={`pb-2 font-medium ${activeTab === 'descripcion' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('descripcion')}
                >
                  Descripción
                </button>
                <button 
                  className={`pb-2 font-medium ${activeTab === 'valoraciones' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('valoraciones')}
                >
                  Valoraciones ({herramienta.comentarios.length})
                </button>
              </div>
            </div>
            
            {activeTab === 'descripcion' ? (
              <div>
                <p className="text-gray-800 whitespace-pre-line">{herramienta.descripcionLarga}</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <div className="flex items-center">
                    <div className="text-4xl font-bold mr-2">{herramienta.puntuacion}</div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < Math.floor(herramienta.puntuacion) ? "text-yellow-400" : "text-gray-300"}
                          size={20}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="ml-4 text-gray-500">
                    Basado en {herramienta.numValoraciones} valoraciones
                  </div>
                </div>
                
                <div className="space-y-4">
                  {herramienta.comentarios.map((comentario) => (
                    <div key={comentario.id} className="border-b pb-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="font-medium">{comentario.usuario}</div>
                        <div className="text-gray-500 text-sm">{comentario.fecha}</div>
                      </div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={i < comentario.puntuacion ? "text-yellow-400" : "text-gray-300"}
                            size={14}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700">{comentario.comentario}</p>
                      <div className="flex gap-4 mt-2 text-sm text-gray-500">
                        <button className="flex items-center gap-1 hover:text-primary">
                          <FaThumbsUp size={12} /> Útil
                        </button>
                        <button className="flex items-center gap-1 hover:text-primary">
                          <FaComment size={12} /> Responder
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="btn-primary w-full">
                  Añadir valoración
                </button>
              </div>
            )}
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Información</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-sm">Categoría</p>
                <p className="font-medium">{herramienta.categoria}</p>
              </div>
              
              <div>
                <p className="text-gray-500 text-sm">Empresa</p>
                <p className="font-medium">{herramienta.empresa}</p>
              </div>
              
              <div>
                <p className="text-gray-500 text-sm">Fecha de lanzamiento</p>
                <p className="font-medium">{herramienta.fechaLanzamiento}</p>
              </div>
              
              <div>
                <p className="text-gray-500 text-sm">Última actualización</p>
                <p className="font-medium">{herramienta.ultimaActualizacion}</p>
              </div>
              
              <div>
                <p className="text-gray-500 text-sm">Modelo</p>
                <p className="font-medium">{herramienta.modelo}</p>
              </div>
              
              <div>
                <p className="text-gray-500 text-sm">Precio</p>
                <p className="font-medium">{herramienta.precio}</p>
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <a 
                href={herramienta.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                Visitar sitio <FaExternalLinkAlt size={12} />
              </a>
              
              <button className="w-full border border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-md transition-colors flex items-center justify-center gap-2">
                <FaBookmark /> Guardar
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Herramientas similares</h3>
            
            <div className="space-y-4">
              {[
                { id: 4, nombre: 'Claude', categoria: 'Chatbot', puntuacion: 4.5 },
                { id: 7, nombre: 'Bard', categoria: 'Chatbot', puntuacion: 4.2 },
                { id: 9, nombre: 'Anthropic Claude 2', categoria: 'Chatbot', puntuacion: 4.7 }
              ].map((similar) => (
                <Link key={similar.id} href={`/dashboard/herramientas/${similar.id}`}>
                  <div className="flex items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg mr-3"></div>
                    <div>
                      <h4 className="font-medium">{similar.nombre}</h4>
                      <div className="flex items-center">
                        <div className="text-xs text-gray-500 mr-2">{similar.categoria}</div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={i < Math.floor(similar.puntuacion) ? "text-yellow-400" : "text-gray-300"}
                              size={10}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 