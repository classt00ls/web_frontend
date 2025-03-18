/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para integración con la aplicación React existente
  basePath: '/dashboard',

  // Configuración para usar en producción
  output: 'standalone',
  
  // Configuración de rewrites para API
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.API_URL ? `${process.env.API_URL}/api/:path*` : 'http://localhost:3030/api/:path*',
      },
    ];
  },
  
  // Permitir imágenes externas
  images: {
    domains: ['via.placeholder.com', 'classtools.io'],
  },
  
  // Variables de entorno disponibles en el cliente
  env: {
    MAIN_APP_URL: process.env.NODE_ENV === 'development' 
      ? 'http://localhost:5173'
      : '', // En producción, estará vacío porque estarán en el mismo dominio
  },
};

module.exports = nextConfig; 