import React from 'react';

const EducationIcon = ({ className = "w-full h-full" }) => {
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
      {/* Gorro de graduación - base */}
      <path 
        d="M12 32L32 22L52 32L32 42L12 32Z" 
        fill={pastelBlue} 
        stroke={pastelBlueDark} 
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      
      {/* Cinta que cuelga del gorro */}
      <path 
        d="M32 42V52" 
        stroke={pastelBlueDark} 
        strokeWidth="2.5" 
        strokeLinecap="round"
      />
      
      {/* Borla del gorro */}
      <circle 
        cx="32" 
        cy="20" 
        r="4" 
        fill={pastelPurple} 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5"
      />
      
      {/* Libro abierto */}
      <path 
        d="M18 44C18 44 17 47 24 47H32" 
        fill={pastelBlue}
        stroke={pastelBlueDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <path 
        d="M46 44C46 44 47 47 40 47H32" 
        fill={pastelPurple}
        stroke={pastelPurpleDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      
      {/* Líneas del libro - izquierda */}
      <path 
        d="M22 43H29" 
        stroke={pastelBlueDark} 
        strokeWidth="1" 
        strokeLinecap="round"
      />
      <path 
        d="M23 45H28" 
        stroke={pastelBlueDark} 
        strokeWidth="1" 
        strokeLinecap="round"
      />
      
      {/* Líneas del libro - derecha */}
      <path 
        d="M35 43H42" 
        stroke={pastelPurpleDark} 
        strokeWidth="1" 
        strokeLinecap="round"
      />
      <path 
        d="M36 45H41" 
        stroke={pastelPurpleDark} 
        strokeWidth="1" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export default EducationIcon; 