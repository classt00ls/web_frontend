# Mecanismos de Carga en la Aplicación Frontend

## Patrones de Implementación de Estados de Carga

La aplicación utiliza varios patrones para mostrar estados de carga mientras se recupera información del backend. A continuación se describen los mecanismos principales identificados:

### 1. Componente Loader Básico

Existe un componente `Loader` básico en `src/component/Loader/Loader.jsx` que muestra un texto "Loading...". Este componente se utiliza en muchas partes de la aplicación:

```jsx
import React from "react";

const Loader = () => {
  return (
    <div>
      <div>Loading...</div>
    </div>
  );
};

export default Loader;
```

### 2. Manejo de Estado de Carga con useState

La mayoría de los componentes implementan un patrón común para manejar estados de carga:

1. Definir un estado de carga usando `useState`:
   ```jsx
   const [loading, setLoading] = useState(true);
   ```

2. Activar el estado de carga antes de iniciar una petición:
   ```jsx
   setLoading(true);
   ```

3. Desactivar el estado de carga al finalizar la petición (tanto en éxito como en error):
   ```jsx
   try {
     const response = await fetchData();
     // Procesar datos
     setLoading(false);
   } catch (error) {
     // Manejar error
     setLoading(false);
   }
   ```

4. Renderizado condicional basado en el estado de carga:
   ```jsx
   if (loading) {
     return <Loader />;
   }
   
   // Renderizado normal del componente con los datos cargados
   return (
     <div>
       {/* Contenido del componente */}
     </div>
   );
   ```

### 3. Indicador de Carga Visual (Spinner)

En el componente de autenticación (`src/component/SignInUp/AuthPage.jsx`), se implementa un indicador de carga más elaborado mediante CSS:

```css
/* Animación de carga */
.loading-indicator {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(99, 234, 50, 0.3);
  border-top: 2px solid #63EA32;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  display: inline-block;
  margin-right: 10px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

Este spinner se utiliza en botones durante procesos de autenticación:

```jsx
<button
  type="submit"
  className="auth-button primary-button"
  disabled={isLoading}
>
  {isLoading && <span className="loading-indicator"></span>}
  {isSignUp ? t('auth.sign_up') : t('auth.sign_in')}
</button>
```

### 4. Mensajes de Carga Personalizados

Algunos componentes utilizan mensajes de carga personalizados en lugar del componente Loader:

```jsx
if (loading) {
  return <div>Loading...</div>;
}
```

O con texto específico del contexto:

```jsx
{loading ? "Creating Post..." : "Create Post"}
```

### 5. Deshabilitación de Elementos durante la Carga

Se utiliza el atributo `disabled` en elementos interactivos durante la carga:

```jsx
<button 
  disabled={loading}
  className={loading ? "opacity-50 cursor-not-allowed" : ""}
>
  {loading ? "Creating..." : "Create Advertisement"}
</button>
```

## Patrones de Llamadas a API

Las llamadas a la API se realizan principalmente a través de Axios usando dos instancias configuradas:

1. `anonApiCall`: Para peticiones que no requieren autenticación
2. `authApiCall`: Para peticiones que requieren token de autenticación

Ejemplo de uso en `ToolApi.tsx`:

```jsx
const getAllTools = (page = 0, pageSize = null): Promise<any> => {
  return new Promise((resolve, reject) => {
    const params = { page, pageSize };
        
    anonApiCall.get("/tool/search/lang", { params })
      .then(({ data, status }) => { resolve(data) })
      .catch((error) => { reject(processError(error)) })
  });
}
```

## Recomendaciones para Implementar Estados de Carga

1. **Componente de Spinner Reutilizable**: Mejorar el componente `Loader` actual para incluir una animación visual tipo spinner más atractiva.

2. **Loader Contextual**: Implementar diferentes tipos de loaders según el contexto (pantalla completa, inline, botón, etc.)

3. **Estado Global de Carga**: Para operaciones que afectan a múltiples componentes, considerar un estado global de carga en Redux.

4. **Interceptores de Axios**: Mejorar los interceptores de Axios para manejar automáticamente estados de carga globales.

5. **Skeleton Loaders**: Implementar "esqueletos" de carga que muestren la estructura del contenido mientras se carga.

## Ejemplo de Implementación Mejorada

```jsx
// Componente LoadingSpinner mejorado
const LoadingSpinner = ({ size = 'medium', color = 'primary', inline = false }) => {
  const sizeClass = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-10 h-10',
  }[size];
  
  const colorClass = {
    primary: 'border-t-blue-600',
    secondary: 'border-t-gray-600',
    success: 'border-t-green-600',
  }[color];
  
  return (
    <div className={inline ? 'inline-block' : 'flex justify-center items-center'}>
      <div 
        className={`${sizeClass} border-2 border-gray-200 ${colorClass} rounded-full animate-spin`}
      ></div>
    </div>
  );
};

// Uso en componentes
{isLoading ? (
  <LoadingSpinner size="medium" color="primary" />
) : (
  <div>Contenido cargado</div>
)}
```

Este documento proporciona una visión general de los mecanismos de carga existentes en la aplicación y sugiere mejoras para una experiencia de usuario más consistente. 

## Plan de Acción para Implementación

A continuación se presenta un plan de acción detallado para implementar las mejoras propuestas, dividido en fases para facilitar su ejecución:

### Fase 1: Componentes Básicos (1-2 semanas)

1. **Semana 1: Creación de Componentes Reutilizables**
   - **Día 1-2:** Crear el componente `LoadingSpinner` con todas las variantes (tamaño, color, texto, pantalla completa)
   - **Día 3-4:** Implementar los componentes de Skeleton Loaders para diferentes contextos (cards, listas, tablas)
   - **Día 5:** Pruebas unitarias para los componentes

2. **Semana 2: Implementación del Hook useLoading**
   - **Día 1-2:** Desarrollar el hook `useLoading` con sus funciones principales
   - **Día 3:** Documentar el uso del hook
   - **Día 4-5:** Crear ejemplos de uso en un componente de prueba

### Fase 2: Estado Global en Redux (1 semana)

1. **Día 1-2:** Implementar el reducer de loading para Redux
   ```
   src/store/reducers/loadingReducer.js
   ```

2. **Día 3-4:** Crear las acciones para gestionar estados de carga
   ```
   src/store/actions/loadingActions.js
   ```

3. **Día 5:** Integrar el reducer en el store existente
   ```jsx
   // Modificar src/store/store.tsx
   import loadingReducer from './reducers/loadingReducer';
   
   // Añadir a los reducers combinados
   ```

### Fase 3: Mejora de Interceptores Axios (3 días)

1. **Día 1:** Crear archivo de configuración de interceptores
   ```
   src/api/apiInterceptors.js
   ```

2. **Día 2:** Integrar los interceptores con las instancias existentes de Axios
   ```jsx
   // Modificar src/api/apiCalls.tsx
   import { setupInterceptors } from './apiInterceptors';
   
   setupInterceptors(authApiCall, 'auth-api');
   setupInterceptors(anonApiCall, 'anon-api');
   ```

3. **Día 3:** Pruebas de integración con los interceptores

### Fase 4: Migración Progresiva (2-3 semanas)

1. **Semana 1: Componentes Críticos**
   - Identificar 3-5 componentes críticos con mayor visibilidad
   - Migrar esos componentes al nuevo sistema de carga

2. **Semana 2: Componentes Secundarios**
   - Migrar componentes de menor prioridad
   - Realizar pruebas de rendimiento y UX

3. **Semana 3: Finalización**
   - Completar la migración de todos los componentes
   - Eliminar código obsoleto de manejo de carga

### Fase 5: Pruebas y Optimización (1 semana)

1. **Día 1-2:** Pruebas de usuario y rendimiento
   - Identificar posibles problemas de rendimiento
   - Recopilar feedback de usuarios

2. **Día 3-4:** Optimizaciones
   - Ajustar tiempos de aparición de loaders para evitar flashes
   - Optimizar transiciones

3. **Día 5:** Documentación final
   - Actualizar documentación técnica
   - Crear guía de uso para desarrolladores

### Estructura de Archivos Propuesta

```
src/
  components/
    LoadingSpinner/
      LoadingSpinner.jsx
      LoadingSpinner.test.jsx
    SkeletonLoader/
      SkeletonLoader.jsx
      SkeletonCards.jsx
      SkeletonList.jsx
      SkeletonTable.jsx
      SkeletonLoader.test.jsx
  hooks/
    useLoading.js
    useLoading.test.js
  store/
    reducers/
      loadingReducer.js
    actions/
      loadingActions.js
  api/
    apiInterceptors.js
```

### Migración de Ejemplo

Ejemplo de cómo migrar un componente existente:

**Antes:**
```jsx
import React, { useEffect, useState } from "react";
import { ToolApi } from "../api/ToolApi";
import Loader from "../component/Loader/Loader";

const ToolsSection = () => {
  const [loading, setLoading] = useState(true);
  const [tools, setTools] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const toolsData = await ToolApi.getAllTools();
        setTools(toolsData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  if (loading) {
    return <Loader />;
  }
  
  return (
    <div>
      {/* Renderizado de herramientas */}
    </div>
  );
};
```

**Después:**
```jsx
import React, { useEffect, useState } from "react";
import { ToolApi } from "../api/ToolApi";
import { useLoading } from "../hooks/useLoading";
import { SkeletonCard } from "../components/SkeletonLoader/SkeletonLoader";

const ToolsSection = () => {
  const { loading, withLoading } = useLoading("tools-section");
  const [tools, setTools] = useState([]);
  
  useEffect(() => {
    withLoading(async () => {
      const toolsData = await ToolApi.getAllTools();
      setTools(toolsData);
    });
  }, [withLoading]);
  
  return (
    <div>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : (
        <div>
          {/* Renderizado de herramientas */}
        </div>
      )}
    </div>
  );
};
```

### Métricas de Éxito

Para evaluar el éxito de la implementación, se monitorizarán las siguientes métricas:

1. **Tiempo de Desarrollo:**
   - Reducción en líneas de código para manejar estados de carga
   - Tiempo ahorrado en implementación de nuevas funcionalidades

2. **Experiencia de Usuario:**
   - Tiempo percibido de carga (mediante pruebas de usuario)
   - Tasa de abandono durante procesos de carga

3. **Mantenibilidad:**
   - Consistencia en el manejo de estados de carga
   - Facilidad para añadir nuevos componentes

Siguiendo este plan de acción, se logrará una implementación estructurada y progresiva del nuevo sistema de carga, mejorando significativamente la experiencia de usuario y la mantenibilidad del código. 