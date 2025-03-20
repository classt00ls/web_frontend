import React from 'react';

const MarketingIcon = ({ className = "w-full h-full" }) => {
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
      {/* Megáfono - base */}
      <path 
        d="M14 38C14 35 16 33 18 33H22V43H18C16 43 14 41 14 38Z" 
        fill={pastelBlue} 
        stroke={pastelBlueDark} 
        strokeWidth="2"
        strokeLinejoin="round"
      />
      
      {/* Megáfono - bocina */}
      <path 
        d="M22 33L42 23V53L22 43V33Z" 
        fill={pastelPurple} 
        stroke={pastelPurpleDark} 
        strokeWidth="2"
        strokeLinejoin="round"
      />
      
      {/* Ondas de sonido */}
      <path 
        d="M46 30C49 34 49 42 46 46" 
        stroke={pastelBlueDark} 
        strokeWidth="2" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      <path 
        d="M49 26C54 32 54 44 49 50" 
        stroke={pastelBlueDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1 2"
      />
      
      {/* Gráfico de barras creciente */}
      <rect 
        x="16" 
        y="16" 
        width="4" 
        height="8" 
        rx="1" 
        fill={pastelBlue} 
        stroke={pastelBlueDark} 
        strokeWidth="1.5"
      />
      
      <rect 
        x="22" 
        y="12" 
        width="4" 
        height="12" 
        rx="1" 
        fill={pastelPurple} 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5"
      />
      
      <rect 
        x="28" 
        y="8" 
        width="4" 
        height="16" 
        rx="1" 
        fill={pastelBlue} 
        stroke={pastelBlueDark} 
        strokeWidth="1.5"
      />
      
      {/* Línea de tendencia creciente */}
      <path 
        d="M16 20L32 8" 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
        strokeDasharray="1 1"
      />
      
      {/* Elemento de corazón (engagement) */}
      <path 
        d="M42 14C43.5 12.5 46 12.5 47.5 14C49 15.5 49 18 47.5 19.5L42 25L36.5 19.5C35 18 35 15.5 36.5 14C38 12.5 40.5 12.5 42 14Z" 
        fill={pastelPurple} 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MarketingIcon; 