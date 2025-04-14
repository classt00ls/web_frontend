# Documentación Frontend - ClassTools.io

## Estructura del Proyecto

El proyecto está desarrollado con React y utiliza Vite como herramienta de construcción. La estructura principal se organiza de la siguiente manera:

### Carpetas Principales

- **src/**: Contiene todo el código fuente de la aplicación
  - **api/**: Contiene los archivos para interactuar con las APIs del backend
  - **assets/**: Archivos estáticos como imágenes y recursos
  - **component/**: Componentes React principales de la aplicación
  - **components/**: Componentes React reutilizables (como LanguageSelector)
  - **configuration/**: Archivos de configuración
  - **Context/**: Contextos de React para gestión de estado global
  - **data/**: Datos estáticos y mocks
  - **Domain/**: Lógica de dominio
  - **Layout/**: Componentes de estructura y layout
  - **Router/**: Configuración de rutas con react-router-dom
  - **store/**: Gestión de estado con Redux
  - **styles/**: Estilos CSS
  - **utils/**: Funciones de utilidad

- **public/**: Archivos públicos accesibles directamente
- **dist/**: Código construido para producción (generado)
- **cursor/**: Documentación y guías para agentes de IA

## Tecnologías Principales

- **React**: Framework principal de UI
- **Vite**: Herramienta de construcción
- **React Router**: Navegación y ruteo
- **Redux**: Gestión de estado
- **Tailwind CSS**: Framework CSS para estilos
- **Axios**: Cliente HTTP para peticiones API
- **i18next**: Internacionalización
- **Firebase**: Para autenticación y despliegue

## Recuperación de Información

La aplicación recupera información principalmente a través de los siguientes métodos:

### 1. APIs

Los archivos en la carpeta `src/api/` contienen las funciones para interactuar con el backend:

- **ToolApi.tsx**: Gestiona las operaciones relacionadas con herramientas, como:
  - `getAllTools`: Obtiene todas las herramientas
  - `getDetailTool`: Obtiene detalles de una herramienta por ID
  - `getDetailToolBySlug`: Obtiene detalles de una herramienta por su slug
  - `getFilteredlTool`: Búsqueda con filtros
  - `getSuggestedTools`: Obtiene herramientas sugeridas
  - `toggleFavorite`: Marca/desmarca una herramienta como favorita

- **UserApi.tsx**: Gestiona las operaciones de usuarios
- **TagApi.tsx**: Gestiona las operaciones de etiquetas
- **apiCalls.tsx**: Contiene la configuración de Axios con `anonApiCall` y `authApiCall`

### 2. Redux Store

La aplicación utiliza Redux para la gestión de estado global:

- **store/store.tsx**: Configura el store principal
- **store/reducers/**: Contiene los reducers para diferentes partes de la aplicación
- **store/actions/**: Define las acciones que pueden ser despachadas

## Navegación y Rutas

La navegación se gestiona con React Router en `src/Router/Router.jsx`, con las siguientes rutas principales:

- `/`: Página principal (Home)
- `/about`: Página Acerca de
- `/tools`: Listado de herramientas
- `/product/:id`: Detalle de un producto por ID
- `/tool/:slug`: Detalle de una herramienta por slug
- `/signIn`: Página de autenticación
- `/addTools`: Añadir herramientas
- `/community`: Sección de comunidad
- `/advertise`: Sección de publicidad
- `/blog`: Sección de blog

## Internacionalización

La aplicación soporta múltiples idiomas usando i18next. La configuración se encuentra en:

- **src/i18n.js**: Configuración de i18next
- **components/LanguageSelector/**: Componente para cambiar el idioma

## Consejos para Desarrollo

### Patrones Comunes

1. **Llamadas a API**:
   ```javascript
   // Ejemplo de llamada a API
   ToolApi.getFilteredlTool(0, 10, { category: 'education' }, 'es')
     .then(data => {
       // Manejar la respuesta
     })
     .catch(error => {
       // Manejar el error
     });
   ```

2. **Navegación**:
   ```javascript
   // Usar Link para navegación
   import { Link } from 'react-router-dom';
   <Link to="/tools">Ver herramientas</Link>
   
   // Navegación programática
   import { useNavigate } from 'react-router-dom';
   const navigate = useNavigate();
   navigate('/product/123');
   ```

3. **Acceso al Store**:
   ```javascript
   // Acceder al estado
   import { useSelector } from 'react-redux';
   const user = useSelector(state => state.user);
   
   // Despachar acciones
   import { useDispatch } from 'react-redux';
   const dispatch = useDispatch();
   dispatch({ type: 'USER_LOGIN', payload: userData });
   ```

4. **Internacionalización**:
   ```javascript
   // Usar traducciones
   import { useTranslation } from 'react-i18next';
   const { t } = useTranslation();
   <h1>{t('welcome.title')}</h1>
   ```

### Consideraciones para Modificaciones

- Asegúrate de mantener consistencia en los estilos usando las clases de Tailwind CSS
- Verifica las traducciones al añadir nuevo texto para mantener la coherencia entre idiomas
- Respeta la estructura de carpetas existente
- Las nuevas características deberían seguir los patrones existentes de llamadas a API y gestión de estado
- Para componentes nuevos, consulta los existentes como referencia para mantener la coherencia

Este documento sirve como guía general. Para información más detallada, examina el código fuente relevante para cada característica específica. 