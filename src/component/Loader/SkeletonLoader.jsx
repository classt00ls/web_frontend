import React from "react";

/**
 * Componente SkeletonCard que muestra un esqueleto de carga para tarjetas
 */
export const SkeletonCard = ({ imageHeight = "h-48" }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md animate-pulse">
      <div className={`${imageHeight} bg-gray-300`}></div>
      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="mt-4 flex justify-between">
          <div className="h-8 bg-gray-300 rounded w-24"></div>
          <div className="h-8 bg-gray-300 rounded w-12"></div>
        </div>
      </div>
    </div>
  );
};

/**
 * Componente SkeletonList que muestra un esqueleto de carga para listas
 * @param {number} rows - Número de filas a mostrar
 */
export const SkeletonList = ({ rows = 3 }) => {
  return (
    <div className="space-y-4">
      {[...Array(rows)].map((_, i) => (
        <div key={i} className="flex items-center space-x-4 animate-pulse">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * Componente SkeletonTable que muestra un esqueleto de carga para tablas
 * @param {number} rows - Número de filas a mostrar
 * @param {number} cols - Número de columnas a mostrar
 */
export const SkeletonTable = ({ rows = 5, cols = 4 }) => {
  return (
    <div className="overflow-hidden animate-pulse">
      {/* Header */}
      <div className="flex border-b border-gray-300 py-3">
        {[...Array(cols)].map((_, i) => (
          <div key={i} className={`flex-1 px-3 ${i === 0 ? "flex-2" : ""}`}>
            <div className="h-6 bg-gray-300 rounded w-full"></div>
          </div>
        ))}
      </div>
      
      {/* Rows */}
      {[...Array(rows)].map((_, rowIndex) => (
        <div key={rowIndex} className="flex border-b border-gray-200 py-3">
          {[...Array(cols)].map((_, colIndex) => (
            <div key={colIndex} className={`flex-1 px-3 ${colIndex === 0 ? "flex-2" : ""}`}>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

/**
 * Componente SkeletonToolCard específico para herramientas
 */
export const SkeletonToolCard = () => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md animate-pulse">
      <div className="h-40 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="flex items-center space-x-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-300 rounded"></div>
          ))}
          <div className="h-4 bg-gray-300 rounded w-10 ml-2"></div>
        </div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
        <div className="flex flex-wrap gap-1 mb-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-6 bg-gray-300 rounded px-3"></div>
          ))}
        </div>
        <div className="flex justify-between mt-3">
          <div className="h-8 w-24 bg-gray-300 rounded"></div>
          <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

/**
 * Componente SkeletonText para párrafos de texto
 * @param {number} lines - Número de líneas de texto
 */
export const SkeletonText = ({ lines = 3 }) => {
  return (
    <div className="space-y-2 animate-pulse">
      {[...Array(lines)].map((_, i) => (
        <div 
          key={i} 
          className={`h-4 bg-gray-300 rounded ${
            i === lines - 1 ? "w-4/5" : "w-full"
          }`}>
        </div>
      ))}
    </div>
  );
};

/**
 * Componente que retorna el skeleton adecuado según el tipo
 */
const SkeletonLoader = ({ type = "card", count = 1, ...props }) => {
  const skeletons = {
    card: SkeletonCard,
    list: SkeletonList,
    table: SkeletonTable,
    tool: SkeletonToolCard,
    text: SkeletonText
  };
  
  const SelectedSkeleton = skeletons[type] || SkeletonCard;
  
  if (count === 1) {
    return <SelectedSkeleton {...props} />;
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(count)].map((_, i) => (
        <SelectedSkeleton key={i} {...props} />
      ))}
    </div>
  );
};

export default SkeletonLoader; 