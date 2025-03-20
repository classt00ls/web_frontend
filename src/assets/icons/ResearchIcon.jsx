import React from 'react';

const ResearchIcon = ({ className = "w-full h-full" }) => {
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
      {/* Lupa minimalista - círculo principal */}
      <circle 
        cx="26" 
        cy="26" 
        r="16" 
        fill={pastelBlue} 
        stroke={pastelBlueDark} 
        strokeWidth="2.5"
      />
      
      {/* Mango de la lupa */}
      <path 
        d="M38 38L50 50" 
        stroke={pastelBlueDark} 
        strokeWidth="5" 
        strokeLinecap="round"
      />
      
      {/* Elementos de cerebro/circuito - simplificados */}
      <path 
        d="M26 18C26 18 22 21 22 26" 
        stroke={pastelBlueDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <path 
        d="M26 18C26 18 30 21 30 26" 
        stroke={pastelBlueDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      
      {/* Líneas internas estilo cerebro/circuito */}
      <path 
        d="M20 26H32" 
        stroke={pastelBlueDark} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeDasharray="1 2"
      />
      
      {/* Elemento científico - ADN simplified */}
      <circle 
        cx="14" 
        cy="40" 
        r="6" 
        fill={pastelPurple} 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5"
      />
      <path 
        d="M12 36L16 44" 
        stroke={pastelPurpleDark} 
        strokeWidth="1.2" 
        strokeLinecap="round"
      />
      <path 
        d="M16 36L12 44" 
        stroke={pastelPurpleDark} 
        strokeWidth="1.2" 
        strokeLinecap="round"
      />
      
      {/* Elemento de datos - simple documento */}
      <rect 
        x="44" 
        y="14" 
        width="8" 
        height="12" 
        rx="1.5" 
        fill={pastelPurple} 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5"
      />
      <path 
        d="M46 18H50" 
        stroke={pastelPurpleDark} 
        strokeWidth="1" 
        strokeLinecap="round"
      />
      <path 
        d="M46 21H48" 
        stroke={pastelPurpleDark} 
        strokeWidth="1" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ResearchIcon; 