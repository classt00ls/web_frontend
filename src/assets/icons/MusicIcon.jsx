import React from 'react';

const MusicIcon = ({ className = "w-full h-full" }) => {
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
      {/* Nota musical principal */}
      <path 
        d="M36 12V36" 
        stroke={pastelBlueDark} 
        strokeWidth="2.5" 
        strokeLinecap="round"
      />
      
      {/* Cabeza de la nota musical */}
      <ellipse 
        cx="30" 
        cy="36" 
        rx="8" 
        ry="6" 
        fill={pastelBlue} 
        stroke={pastelBlueDark} 
        strokeWidth="2"
      />
      
      {/* Nota musical secundaria */}
      <path 
        d="M46 16V30" 
        stroke={pastelPurpleDark} 
        strokeWidth="2.5" 
        strokeLinecap="round"
      />
      
      {/* Cabeza de la nota secundaria */}
      <ellipse 
        cx="40" 
        cy="30" 
        rx="8" 
        ry="6" 
        fill={pastelPurple} 
        stroke={pastelPurpleDark} 
        strokeWidth="2"
      />
      
      {/* Símbolo de la clave de sol simplificada */}
      <path 
        d="M20 40C16 35 16 25 20 20C24 15 20 10 18 8" 
        stroke={pastelBlueDark} 
        strokeWidth="2.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      <path 
        d="M20 40C18 42 14 42 12 40C10 38 10 34 12 32C14 30 18 30 20 32" 
        stroke={pastelBlueDark} 
        strokeWidth="2.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Ondas de sonido */}
      <path 
        d="M50 42C52 44 52 48 50 50" 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      <path 
        d="M54 38C58 42 58 50 54 54" 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1 2"
      />
      
      {/* Pequeño auricular */}
      <path 
        d="M32 50C34 48 38 48 40 50" 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      
      <path 
        d="M30 48C28 50 28 54 30 56" 
        stroke={pastelBlueDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      
      <path 
        d="M42 48C44 50 44 54 42 56" 
        stroke={pastelBlueDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      
      <path 
        d="M30 56H42" 
        stroke={pastelBlueDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MusicIcon; 