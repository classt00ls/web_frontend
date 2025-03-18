'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaHome, FaRobot, FaTools, FaStar } from 'react-icons/fa';

export default function Sidebar() {
  const pathname = usePathname();
  // Usa el MAIN_APP_URL de las variables de entorno, o usa / si estamos en producción
  const mainAppUrl = process.env.MAIN_APP_URL || '';

  const menuItems = [
    {
      name: 'Dashboard',
      href: '/dashboard/home',
      icon: <FaHome size={20} />,
    },
    {
      name: 'Probar IA',
      href: '/dashboard/probar-ia',
      icon: <FaRobot size={20} />,
    },
    {
      name: 'Herramientas',
      href: '/dashboard/herramientas',
      icon: <FaTools size={20} />,
    },
    {
      name: 'Puntuaciones',
      href: '/dashboard/puntuaciones',
      icon: <FaStar size={20} />,
    },
  ];

  return (
    <div className="w-64 bg-white shadow-md h-full flex flex-col">
      <div className="p-4 border-b">
        <h1 className="text-2xl font-bold text-primary">ClassTools.AI</h1>
        <p className="text-sm text-gray-500">Panel de Control</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || 
            (item.href !== '/dashboard/home' && pathname?.startsWith(item.href));
            
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={isActive ? 'sidebar-item-active' : 'sidebar-item'}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 border-t">
        <a href={mainAppUrl} className="flex items-center gap-2 text-gray-600 hover:text-primary">
          <span>Volver al sitio principal</span>
        </a>
      </div>
    </div>
  );
} 