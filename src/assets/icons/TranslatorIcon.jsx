import React from 'react';

const TranslatorIcon = ({ className = "w-full h-full" }) => {
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
      {/* Globo de conversación izquierdo */}
      <path 
        d="M10 18C10 14 14 10 18 10H26C30 10 34 14 34 18V24C34 28 30 32 26 32H22L16 38V32H14C10 32 10 28 10 24V18Z" 
        fill={pastelBlue} 
        stroke={pastelBlueDark} 
        strokeWidth="2"
        strokeLinejoin="round"
      />
      
      {/* Texto representando idioma en globo izquierdo */}
      <path 
        d="M16 16H28" 
        stroke={pastelBlueDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <path 
        d="M16 20H24" 
        stroke={pastelBlueDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <path 
        d="M16 24H26" 
        stroke={pastelBlueDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      
      {/* Símbolo letra "A" en globo izquierdo */}
      <path 
        d="M18 28L22 18L26 28" 
        stroke={pastelBlueDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path 
        d="M20 24H24" 
        stroke={pastelBlueDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      
      {/* Globo de conversación derecho */}
      <path 
        d="M54 32C54 28 50 24 46 24H38C34 24 30 28 30 32V38C30 42 34 46 38 46H42L48 52V46H50C54 46 54 42 54 38V32Z" 
        fill={pastelPurple} 
        stroke={pastelPurpleDark} 
        strokeWidth="2"
        strokeLinejoin="round"
      />
      
      {/* Texto representando idioma en globo derecho */}
      <path 
        d="M36 30H48" 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <path 
        d="M36 34H44" 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <path 
        d="M36 38H46" 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      
      {/* Símbolo de caracteres orientales en globo derecho */}
      <path 
        d="M40 32H44" 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <path 
        d="M42 30V38" 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <path 
        d="M39 35H45" 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      
      {/* Símbolo de traducción (flechas bidireccionales) */}
      <path 
        d="M26 42L38 14" 
        stroke={pastelBlueDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
        strokeDasharray="1 2"
      />
      
      {/* Puntas de flecha */}
      <path 
        d="M23 39L26 42L29 39" 
        stroke={pastelBlueDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      <path 
        d="M41 17L38 14L35 17" 
        stroke={pastelBlueDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TranslatorIcon; 