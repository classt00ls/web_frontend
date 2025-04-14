import React, { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import SkeletonLoader, { SkeletonCard, SkeletonList, SkeletonToolCard } from "./SkeletonLoader";
import { useTranslation } from "react-i18next";
import useLoading from "../../hooks/useLoading";

/**
 * Componente de ejemplo que muestra diferentes estados de carga
 * ¡Importante! Este es solo un componente de demostración, no parte del flujo de la aplicación.
 */
const LoadingExample = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("spinners");
  const { loading, startLoading, stopLoading, withLoading } = useLoading("example");
  
  // Simulación de carga
  const handleLoadingDemo = () => {
    withLoading(async () => {
      // Simulamos una operación que tarda 2 segundos
      await new Promise(resolve => setTimeout(resolve, 2000));
    });
  };
  
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">{t('common.loading_demo')}</h1>
      
      {/* Tabs para navegar entre ejemplos */}
      <div className="flex border-b mb-6">
        <button 
          onClick={() => setActiveTab("spinners")}
          className={`px-4 py-2 ${activeTab === "spinners" 
            ? "border-b-2 border-blue-500 text-blue-600" 
            : "text-gray-600"}`}
        >
          Spinners
        </button>
        <button 
          onClick={() => setActiveTab("skeletons")}
          className={`px-4 py-2 ${activeTab === "skeletons" 
            ? "border-b-2 border-blue-500 text-blue-600" 
            : "text-gray-600"}`}
        >
          Skeletons
        </button>
        <button 
          onClick={() => setActiveTab("hook")}
          className={`px-4 py-2 ${activeTab === "hook" 
            ? "border-b-2 border-blue-500 text-blue-600" 
            : "text-gray-600"}`}
        >
          Hook Demo
        </button>
      </div>
      
      {/* Contenido según la tab seleccionada */}
      {activeTab === "spinners" && (
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Tamaños</h2>
            <div className="flex space-x-8">
              <div>
                <p className="text-sm text-gray-600 mb-2">Small</p>
                <LoadingSpinner size="small" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Medium (default)</p>
                <LoadingSpinner size="medium" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Large</p>
                <LoadingSpinner size="large" />
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">Colores</h2>
            <div className="flex space-x-8">
              <div>
                <p className="text-sm text-gray-600 mb-2">Primary (default)</p>
                <LoadingSpinner variant="primary" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Secondary</p>
                <LoadingSpinner variant="secondary" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Success</p>
                <LoadingSpinner variant="success" />
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">Con texto</h2>
            <LoadingSpinner text="Cargando datos..." />
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">Inline (para botones)</h2>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              <LoadingSpinner size="small" inline={true} />
              <span>Cargando...</span>
            </button>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">Pantalla completa</h2>
            <p className="text-gray-600 mb-2">
              Haz clic en el botón para mostrar el loader de pantalla completa:
            </p>
            <button 
              onClick={() => {
                const loader = document.createElement('div');
                loader.id = 'fullscreen-loader';
                document.body.appendChild(loader);
                
                // Renderizamos el spinner en el contenedor
                const reactRoot = document.createElement('div');
                loader.appendChild(reactRoot);
                // En una aplicación real usaríamos ReactDOM.render o createRoot
                
                // Simulamos eliminarlo después de 2 segundos
                setTimeout(() => {
                  document.body.removeChild(loader);
                }, 2000);
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Mostrar loader de pantalla completa
            </button>
          </section>
        </div>
      )}
      
      {activeTab === "skeletons" && (
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Card Skeleton</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <SkeletonCard />
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">List Skeleton</h2>
            <SkeletonList rows={5} />
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">Tool Card Skeleton</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <SkeletonToolCard />
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">Múltiples Cards</h2>
            <SkeletonLoader type="tool" count={3} />
          </section>
        </div>
      )}
      
      {activeTab === "hook" && (
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Demo del Hook useLoading</h2>
            <p className="text-gray-600 mb-4">
              Este ejemplo muestra cómo el hook `useLoading` gestiona automáticamente el estado de carga.
            </p>
            
            <div className="p-4 border rounded-lg">
              <button 
                onClick={handleLoadingDemo}
                disabled={loading}
                className={`px-4 py-2 bg-blue-600 text-white rounded ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? (
                  <>
                    <LoadingSpinner size="small" variant="primary" inline={true} />
                    <span className="ml-2">Procesando...</span>
                  </>
                ) : (
                  'Iniciar carga (2 segundos)'
                )}
              </button>
              
              <div className="mt-6">
                {loading ? (
                  <div>
                    <p className="text-gray-700 mb-4">Cargando contenido...</p>
                    <SkeletonLoader type="card" count={2} />
                  </div>
                ) : (
                  <div>
                    <p className="text-green-600 font-medium">¡Contenido cargado con éxito!</p>
                    <p className="text-gray-600 mt-2">
                      El hook useLoading gestiona automáticamente el estado de carga,
                      lo que simplifica enormemente el código y evita repeticiones.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default LoadingExample; 