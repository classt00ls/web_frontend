'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaUser, FaBell, FaSignOutAlt } from 'react-icons/fa';

export default function DashboardHeader() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    // Aquí se podría hacer una petición para obtener los datos del usuario
    // Por ahora, simulamos un usuario
    setUser({
      name: 'Usuario',
      email: 'usuario@classtools.ai'
    });
  }, []);

  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-sm text-gray-500">Bienvenido a tu panel de control</p>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
          <FaBell className="text-gray-600" />
        </button>
        
        <div className="relative group">
          <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
              <FaUser />
            </div>
            {user && (
              <span className="font-medium text-gray-700">{user.name}</span>
            )}
          </button>
          
          <div className="absolute right-0 mt-2 w-48 p-2 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
            <div className="p-2 border-b">
              {user && (
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              )}
            </div>
            <Link href="/" className="flex items-center gap-2 p-2 text-red-500 hover:bg-gray-100 rounded-lg transition-colors">
              <FaSignOutAlt />
              <span>Cerrar sesión</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 