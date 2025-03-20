import React from 'react';

const PersonalAssistantIcon = ({ className = "w-full h-full" }) => {
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
      {/* Tablet / Dispositivo */}
      <rect 
        x="14" 
        y="12" 
        width="36" 
        height="40" 
        rx="4" 
        fill={pastelBlue} 
        stroke={pastelBlueDark} 
        strokeWidth="2"
      />
      
      {/* Pantalla del dispositivo */}
      <rect 
        x="18" 
        y="16" 
        width="28" 
        height="28" 
        rx="2" 
        fill="white" 
        stroke={pastelBlueDark} 
        strokeWidth="1.5"
      />
      
      {/* Botón home */}
      <circle 
        cx="32" 
        cy="48" 
        r="2" 
        fill="white" 
        stroke={pastelBlueDark} 
        strokeWidth="1.5"
      />
      
      {/* Calendario en pantalla */}
      <rect 
        x="22" 
        y="20" 
        width="20" 
        height="16" 
        rx="2" 
        fill={pastelPurple} 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5"
      />
      
      {/* Cabecera calendario */}
      <rect 
        x="22" 
        y="20" 
        width="20" 
        height="4" 
        rx="2" 
        fill={pastelPurpleDark}
      />
      
      {/* Días en calendario */}
      <circle 
        cx="25" 
        cy="27" 
        r="1" 
        fill={pastelPurpleDark}
      />
      <circle 
        cx="29" 
        cy="27" 
        r="1" 
        fill={pastelPurpleDark}
      />
      <circle 
        cx="33" 
        cy="27" 
        r="1" 
        fill={pastelPurpleDark}
      />
      <circle 
        cx="37" 
        cy="27" 
        r="1" 
        fill={pastelPurpleDark}
      />
      
      <circle 
        cx="25" 
        cy="31" 
        r="1" 
        fill={pastelPurpleDark}
      />
      <circle 
        cx="29" 
        cy="31" 
        r="1" 
        fill={pastelPurpleDark}
      />
      <circle 
        cx="33" 
        cy="31" 
        r="1.5" 
        fill="white"
        stroke={pastelPurpleDark}
        strokeWidth="1"
      />
      <circle 
        cx="37" 
        cy="31" 
        r="1" 
        fill={pastelPurpleDark}
      />
      
      {/* Lista de tareas */}
      <path 
        d="M22 40H42" 
        stroke={pastelBlueDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <path 
        d="M22 43H38" 
        stroke={pastelBlueDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      
      {/* Elemento de recordatorio/alarma */}
      <circle 
        cx="46" 
        cy="18" 
        r="6" 
        fill={pastelPurple} 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5"
      />
      <path 
        d="M46 15V18H49" 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Líneas de notificación */}
      <path 
        d="M49 12L52 9" 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <path 
        d="M51 20L54 23" 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PersonalAssistantIcon; 