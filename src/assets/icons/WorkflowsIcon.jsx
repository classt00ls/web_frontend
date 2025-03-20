import React from 'react';

const WorkflowsIcon = ({ className = "w-full h-full" }) => {
  // Colores pastel y sus variantes más oscuras
  const pastelBlue = "#A5D8FF";
  const pastelBlueDark = "#6BAFDB";
  const pastelPurple = "#D0BFFF";
  const pastelPurpleDark = "#9F8AD7";

  return (
    <svg 
      viewBox="0 0 64 64" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {/* Nodo inicial */}
      <circle 
        cx="20" 
        cy="18" 
        r="8" 
        fill={pastelBlue} 
        stroke={pastelBlueDark} 
        strokeWidth="2"
      />
      
      {/* Símbolo play en nodo inicial */}
      <path 
        d="M18 15L23 18L18 21V15Z" 
        fill={pastelBlueDark} 
      />
      
      {/* Nodo intermedio 1 */}
      <rect 
        x="16" 
        y="34" 
        width="12" 
        height="12" 
        rx="2" 
        fill={pastelPurple} 
        stroke={pastelPurpleDark} 
        strokeWidth="2"
      />
      
      {/* Símbolo configuración en nodo intermedio */}
      <circle 
        cx="22" 
        cy="40" 
        r="3" 
        fill="none"
        stroke={pastelPurpleDark} 
        strokeWidth="1.5"
      />
      <path 
        d="M22 37V36" 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <path 
        d="M22 44V43" 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      
      {/* Nodo final */}
      <circle 
        cx="44" 
        cy="40" 
        r="8" 
        fill={pastelBlue} 
        stroke={pastelBlueDark} 
        strokeWidth="2"
      />
      
      {/* Símbolo de verificación en nodo final */}
      <path 
        d="M40 40L43 43L48 38" 
        stroke={pastelBlueDark} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Líneas de flujo */}
      <path 
        d="M20 26V34" 
        stroke={pastelBlueDark} 
        strokeWidth="2" 
        strokeLinecap="round"
        strokeDasharray="1 2"
      />
      
      <path 
        d="M28 40H36" 
        stroke={pastelBlueDark} 
        strokeWidth="2" 
        strokeLinecap="round"
        strokeDasharray="1 2"
      />
      
      <path 
        d="M44 18V32" 
        stroke={pastelPurpleDark} 
        strokeWidth="2" 
        strokeLinecap="round"
        strokeDasharray="1 2"
      />
      
      {/* Nodo intermedio 2 */}
      <rect 
        x="38" 
        y="14" 
        width="12" 
        height="8" 
        rx="2" 
        fill={pastelPurple} 
        stroke={pastelPurpleDark} 
        strokeWidth="2"
      />
      
      {/* Conector entre nodos */}
      <path 
        d="M28 18H38" 
        stroke={pastelBlueDark} 
        strokeWidth="2" 
        strokeLinecap="round"
        strokeDasharray="1 2"
      />
    </svg>
  );
};

export default WorkflowsIcon; 