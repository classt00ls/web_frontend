import React from 'react';

const LowCodeIcon = ({ className = "w-full h-full" }) => {
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
      {/* Bloque de construcción 1 */}
      <rect 
        x="14" 
        y="18" 
        width="16" 
        height="12" 
        rx="2" 
        fill={pastelBlue} 
        stroke={pastelBlueDark} 
        strokeWidth="2"
      />
      
      {/* Bloque de construcción 2 */}
      <rect 
        x="34" 
        y="18" 
        width="16" 
        height="12" 
        rx="2" 
        fill={pastelPurple} 
        stroke={pastelPurpleDark} 
        strokeWidth="2"
      />
      
      {/* Bloque de construcción 3 */}
      <rect 
        x="24" 
        y="34" 
        width="16" 
        height="12" 
        rx="2" 
        fill={pastelBlue} 
        stroke={pastelBlueDark} 
        strokeWidth="2"
      />
      
      {/* Conector entre bloques 1 y 3 */}
      <path 
        d="M22 30V34" 
        stroke={pastelBlueDark} 
        strokeWidth="2" 
        strokeLinecap="round"
        strokeDasharray="2 1"
      />
      
      {/* Conector entre bloques 2 y 3 */}
      <path 
        d="M42 30V34" 
        stroke={pastelPurpleDark} 
        strokeWidth="2" 
        strokeLinecap="round"
        strokeDasharray="2 1"
      />
      
      {/* Símbolo de arrastrar en bloque 1 */}
      <path 
        d="M18 23H26" 
        stroke={pastelBlueDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <path 
        d="M18 25H26" 
        stroke={pastelBlueDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      
      {/* Símbolo "+" en bloque 2 */}
      <path 
        d="M42 20V28" 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <path 
        d="M38 24H46" 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      
      {/* Símbolo engranaje en bloque 3 */}
      <circle 
        cx="32" 
        cy="40" 
        r="3" 
        fill="none" 
        stroke={pastelBlueDark} 
        strokeWidth="1.5"
      />
      <path 
        d="M32 37V35" 
        stroke={pastelBlueDark} 
        strokeWidth="1" 
        strokeLinecap="round"
      />
      <path 
        d="M32 45V43" 
        stroke={pastelBlueDark} 
        strokeWidth="1" 
        strokeLinecap="round"
      />
      <path 
        d="M35 40H37" 
        stroke={pastelBlueDark} 
        strokeWidth="1" 
        strokeLinecap="round"
      />
      <path 
        d="M27 40H29" 
        stroke={pastelBlueDark} 
        strokeWidth="1" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LowCodeIcon; 