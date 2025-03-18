import { FaRobot, FaTools, FaStar, FaChartLine } from 'react-icons/fa';
import Link from 'next/link';

export default function Dashboard() {
  const cards = [
    {
      title: 'Probar IA',
      description: 'Experimenta con las últimas herramientas de inteligencia artificial',
      icon: <FaRobot size={24} />,
      href: '/dashboard/probar-ia',
      color: 'bg-blue-500',
    },
    {
      title: 'Herramientas',
      description: 'Explora nuestra colección de herramientas de IA',
      icon: <FaTools size={24} />,
      href: '/dashboard/herramientas',
      color: 'bg-green-500',
    },
    {
      title: 'Puntuaciones',
      description: 'Revisa y califica las herramientas que has utilizado',
      icon: <FaStar size={24} />,
      href: '/dashboard/puntuaciones',
      color: 'bg-yellow-500',
    },
    {
      title: 'Estadísticas',
      description: 'Análisis de tu uso de herramientas de IA',
      icon: <FaChartLine size={24} />,
      href: '/dashboard/estadisticas',
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-800">Bienvenido</h2>
        <p className="text-gray-600">Explora las herramientas de IA y potencia tu trabajo educativo</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <Link key={card.title} href={card.href}>
            <div className="dashboard-card flex flex-col h-full cursor-pointer">
              <div className={`${card.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-600 flex-grow">{card.description}</p>
              <div className="mt-4">
                <span className="text-primary font-medium">Explorar →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold mb-4">Herramientas destacadas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border rounded-lg p-4 hover:border-primary transition-colors">
              <h4 className="font-bold">Herramienta #{i}</h4>
              <p className="text-sm text-gray-600">Descripción breve de la herramienta #{i}</p>
              <div className="flex items-center mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" size={14} />
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-2">(24 valoraciones)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 