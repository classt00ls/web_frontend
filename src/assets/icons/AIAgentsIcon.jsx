import React from 'react';

const AIAgentsIcon = ({ className = "w-full h-full" }) => {
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
      {/* Cabeza de robot */}
      <rect 
        x="20" 
        y="8" 
        width="24" 
        height="20" 
        rx="8" 
        fill={pastelBlue} 
        stroke={pastelBlueDark} 
        strokeWidth="2"
      />
      
      {/* Ojos de robot */}
      <circle 
        cx="28" 
        cy="18" 
        r="3" 
        fill={pastelPurple} 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5"
      />
      <circle 
        cx="36" 
        cy="18" 
        r="3" 
        fill={pastelPurple} 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5"
      />
      
      {/* Antena */}
      <path 
        d="M32 8V4" 
        stroke={pastelBlueDark} 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <circle 
        cx="32" 
        cy="3" 
        r="1.5" 
        fill={pastelPurple} 
        stroke={pastelPurpleDark} 
        strokeWidth="1"
      />
      
      {/* Cuerpo del robot */}
      <rect 
        x="22" 
        y="28" 
        width="20" 
        height="24" 
        rx="6" 
        fill={pastelBlue} 
        stroke={pastelBlueDark} 
        strokeWidth="2"
      />
      
      {/* Panel de control en el cuerpo */}
      <rect 
        x="26" 
        y="34" 
        width="12" 
        height="8" 
        rx="2" 
        fill={pastelPurple} 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5"
      />
      
      {/* Luces indicadoras */}
      <circle 
        cx="29" 
        cy="38" 
        r="1.5" 
        fill="#6BAFDB"
      />
      <circle 
        cx="32" 
        cy="38" 
        r="1.5" 
        fill="#9F8AD7"
      />
      <circle 
        cx="35" 
        cy="38" 
        r="1.5" 
        fill="#6BAFDB"
      />
      
      {/* Conexiones (representando automatización) */}
      <path 
        d="M42 15L50 15C52 15 54 17 54 19V45C54 47 52 49 50 49H42" 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
        strokeDasharray="1 2"
      />
      
      <path 
        d="M22 15L14 15C12 15 10 17 10 19V45C10 47 12 49 14 49H22" 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
        strokeDasharray="1 2"
      />
      
      {/* Brazos */}
      <path 
        d="M22 34H14" 
        stroke={pastelBlueDark} 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <circle 
        cx="12" 
        cy="34" 
        r="2" 
        fill={pastelBlue} 
        stroke={pastelBlueDark} 
        strokeWidth="1.5"
      />
      
      <path 
        d="M42 34H50" 
        stroke={pastelBlueDark} 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <circle 
        cx="52" 
        cy="34" 
        r="2" 
        fill={pastelBlue} 
        stroke={pastelBlueDark} 
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default AIAgentsIcon; 