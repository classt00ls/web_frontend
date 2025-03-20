import React from 'react';

const VideoEditingIcon = ({ className = "w-full h-full" }) => {
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
      {/* Cámara de video - cuerpo */}
      <rect 
        x="12" 
        y="18" 
        width="24" 
        height="16" 
        rx="2" 
        fill={pastelBlue} 
        stroke={pastelBlueDark} 
        strokeWidth="2"
      />
      
      {/* Lente de cámara */}
      <circle 
        cx="24" 
        cy="26" 
        r="6" 
        fill={pastelPurple} 
        stroke={pastelPurpleDark} 
        strokeWidth="2"
      />
      
      {/* Parte lateral de la cámara */}
      <path 
        d="M36 22L48 18V34L36 30V22Z" 
        fill={pastelBlue} 
        stroke={pastelBlueDark} 
        strokeWidth="2"
        strokeLinejoin="round"
      />
      
      {/* Timeline de edición */}
      <rect 
        x="12" 
        y="40" 
        width="40" 
        height="8" 
        rx="2" 
        fill={pastelPurple} 
        stroke={pastelPurpleDark} 
        strokeWidth="2"
      />
      
      {/* Clips en la línea de tiempo */}
      <rect 
        x="14" 
        y="42" 
        width="10" 
        height="4" 
        rx="1" 
        fill={pastelBlue} 
        stroke={pastelBlueDark} 
        strokeWidth="1"
      />
      
      <rect 
        x="26" 
        y="42" 
        width="8" 
        height="4" 
        rx="1" 
        fill={pastelBlue} 
        stroke={pastelBlueDark} 
        strokeWidth="1"
      />
      
      <rect 
        x="36" 
        y="42" 
        width="12" 
        height="4" 
        rx="1" 
        fill={pastelBlue} 
        stroke={pastelBlueDark} 
        strokeWidth="1"
      />
      
      {/* Indicador de posición de reproducción */}
      <path 
        d="M26 38V50" 
        stroke={pastelBlueDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <path 
        d="M26 38L28 40H24L26 38Z" 
        fill={pastelBlueDark} 
      />
      
      {/* Herramienta de corte */}
      <path 
        d="M52 38L58 44M52 44L58 38" 
        stroke={pastelPurpleDark} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      
      {/* Botón de grabación */}
      <circle 
        cx="52" 
        cy="26" 
        r="4" 
        fill="#FF8A8A" 
        stroke="#E07070" 
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default VideoEditingIcon; 