import React from "react";
import { useTranslation } from "react-i18next";

/**
 * Componente LoadingSpinner reutilizable para mostrar estados de carga
 * @param {string} size - Tamaño del spinner: "small", "medium", "large"
 * @param {string} variant - Variante de color: "primary", "secondary", "success"
 * @param {boolean} fullscreen - Si debe mostrarse a pantalla completa con fondo semitransparente
 * @param {string} text - Texto opcional para mostrar junto al spinner
 * @param {boolean} inline - Si debe mostrarse en línea (útil para botones)
 */
const LoadingSpinner = ({ 
  size = "medium", 
  variant = "primary", 
  fullscreen = false,
  text = null,
  inline = false
}) => {
  const { t } = useTranslation();
  
  // Texto por defecto si no se proporciona y también como fallback si falla la traducción
  const loadingText = text || (
    t('common.loading', { defaultValue: 'Cargando...' })
  );
  
  // Clases de tamaño
  const sizeClasses = {
    small: "w-4 h-4 border-2",
    medium: "w-8 h-8 border-3",
    large: "w-12 h-12 border-4"
  };
  
  // Clases de variante de color
  const variantClasses = {
    primary: "border-t-blue-600",
    secondary: "border-t-gray-600",
    success: "border-t-green-500"
  };
  
  // Si es pantalla completa, mostramos un fondo semi-transparente
  if (fullscreen) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <div className={`${sizeClasses[size]} border-gray-200 ${variantClasses[variant]} rounded-full animate-spin`}></div>
          <p className="mt-4 text-gray-700">{loadingText}</p>
        </div>
      </div>
    );
  }
  
  // Versión inline (para usar dentro de botones o junto a texto)
  if (inline) {
    return (
      <div className="inline-flex items-center">
        <div className={`${sizeClasses[size]} border-gray-200 ${variantClasses[variant]} rounded-full animate-spin mr-2`}></div>
        {text && <span>{text}</span>}
      </div>
    );
  }
  
  // Versión estándar
  return (
    <div className="flex items-center justify-center py-3">
      <div className={`${sizeClasses[size]} border-gray-200 ${variantClasses[variant]} rounded-full animate-spin`}></div>
      {text && <p className="ml-3 text-gray-700">{text}</p>}
    </div>
  );
};

export default LoadingSpinner; 