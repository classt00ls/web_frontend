# ClassTools.io

Enlace del proyecto: https://classtools.io/

## Descripción

ClassTools.io es una plataforma educativa que ofrece herramientas de inteligencia artificial para profesores y estudiantes. El proyecto consta de dos partes principales:

1. **Aplicación principal**: Una aplicación React construida con Vite
2. **Dashboard de usuario**: Una aplicación Next.js para usuarios logueados

## Estructura del Proyecto

- `/src`: Código fuente de la aplicación principal (React)
- `/public`: Archivos estáticos de la aplicación principal
- `/dashboard`: Aplicación Next.js para el dashboard de usuario
- `/dist`: Directorio generado en la compilación de la aplicación principal
- `/dashboard/.next`: Directorio generado en la compilación de la aplicación Next.js

## Requisitos

- Node.js 18.x o superior
- npm 8.x o superior

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/class-tools-ai-web.git
   cd class-tools-ai-web
   ```

2. Instalar dependencias de la aplicación principal:
   ```bash
   npm install
   ```

3. Instalar dependencias del dashboard:
   ```bash
   cd dashboard
   npm install
   cd ..
   ```

## Desarrollo

Para ejecutar ambas aplicaciones simultáneamente en modo desarrollo:

```bash
npm run dev:all
```

Esto iniciará:
- La aplicación principal en http://localhost:5173
- El dashboard en http://localhost:3010/dashboard

También puedes ejecutar cada aplicación por separado:

```bash
# Solo la aplicación principal
npm run dev

# Solo el dashboard (desde la carpeta dashboard)
cd dashboard && npm run dev
```

## Compilación

Para compilar ambas aplicaciones para producción:

```bash
npm run build:all
```

Este comando:
1. Compila la aplicación React principal en la carpeta `/dist`
2. Compila la aplicación Next.js en la carpeta `/dashboard/.next`

## Despliegue

Existen varias opciones para desplegar toda la aplicación en un servidor:

### Opción 1: Usando un servidor web con configuración de proxy (recomendado)

1. **Compilar ambas aplicaciones**:
   ```bash
   npm run build:all
   ```

2. **Configuración con Nginx**:
   ```nginx
   server {
     listen 80;
     server_name tudominio.com;

     # Sirve la aplicación principal
     location / {
       root /ruta/a/tu/dist;
       try_files $uri $uri/ /index.html;
     }

     # Redirecciona al dashboard de Next.js
     location /dashboard {
       proxy_pass http://localhost:3010;
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
     }
   }
   ```

3. **Iniciar el servidor Next.js**:
   ```bash
   cd dashboard && npm run start
   ```

   Se recomienda usar PM2 o algún gestor similar para mantener el servidor activo:
   ```bash
   npm install -g pm2
   pm2 start dashboard/node_modules/next/dist/bin/next -- start
   ```

### Opción 2: Usando el directorio standalone de Next.js

Next.js con `output: 'standalone'` genera una carpeta con todo lo necesario para ejecutar la aplicación, incluyendo node_modules:

1. Compilar ambas aplicaciones: `npm run build:all`
2. Copiar la carpeta `/dist` al servidor
3. Copiar la carpeta `/dashboard/.next/standalone` al servidor
4. Configurar Nginx como en la opción anterior
5. Iniciar el servidor Next.js:
   ```bash
   node dashboard/.next/standalone/server.js
   ```

### Opción 3: Usando un servidor de aplicaciones Node.js unificado

Puedes crear un archivo `server.js` en la raíz del proyecto:

```javascript
const express = require('express');
const path = require('path');
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const app = express();
const nextApp = next({ dev: false, dir: './dashboard' });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  // Sirve la aplicación principal
  app.use(express.static('dist'));
  
  // Redirecciona cualquier ruta de dashboard a Next.js
  app.all('/dashboard*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    return handle(req, res, parsedUrl);
  });
  
  // Redirecciona cualquier otra ruta a la aplicación principal
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
  
  createServer(app).listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
  });
});
```

Luego puedes iniciar todo con:
```bash
node server.js
```

## Variables de Entorno

### Aplicación Principal
- `VITE_API_URL`: URL de la API para la aplicación principal

### Dashboard
- `API_URL`: URL de la API para el dashboard

## Licencia

[MIT](LICENSE)
