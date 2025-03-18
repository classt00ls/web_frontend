'use client';

import { useState } from 'react';
import { FaPaperPlane, FaRobot, FaSpinner } from 'react-icons/fa';

export default function ProbarIA() {
  const [prompt, setPrompt] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSendMessage = async () => {
    if (!prompt.trim()) return;
    
    // Añadir mensaje del usuario a la conversación
    const userMessage = { role: 'user', content: prompt };
    setConversation([...conversation, userMessage]);
    
    // Limpiar el prompt y mostrar carga
    setPrompt('');
    setIsLoading(true);
    
    try {
      // Simular respuesta (en producción, esta sería una llamada a la API)
      setTimeout(() => {
        const aiResponse = { 
          role: 'assistant', 
          content: `Esta es una respuesta simulada a: "${prompt}". En una implementación real, aquí veríamos la respuesta generada por un modelo de IA.` 
        };
        setConversation(prev => [...prev, aiResponse]);
        setIsLoading(false);
      }, 1500);
      
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      setIsLoading(false);
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  return (
    <div className="h-[calc(100vh-7rem)] flex flex-col">
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-gray-800">Probar IA</h2>
        <p className="text-gray-600">Interactúa con nuestro modelo de inteligencia artificial</p>
      </div>
      
      <div className="flex-1 bg-white rounded-xl shadow-md p-4 flex flex-col mb-4 overflow-hidden">
        <div className="flex-1 overflow-y-auto space-y-4 p-2">
          {conversation.length === 0 ? (
            <div className="flex items-center justify-center h-full text-gray-400 flex-col">
              <FaRobot size={48} className="mb-4 text-gray-300" />
              <p>Escribe un mensaje para comenzar la conversación</p>
            </div>
          ) : (
            conversation.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-3/4 rounded-lg p-3 ${
                    message.role === 'user' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))
          )}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 rounded-lg p-3 flex items-center">
                <FaSpinner className="animate-spin mr-2" />
                Generando respuesta...
              </div>
            </div>
          )}
        </div>
        
        <div className="border-t pt-4">
          <div className="relative">
            <textarea 
              className="w-full border rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Escribe tu mensaje aquí..."
              rows={3}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button 
              className="absolute right-3 bottom-3 text-white bg-primary p-2 rounded-full"
              onClick={handleSendMessage}
              disabled={!prompt.trim() || isLoading}
            >
              <FaPaperPlane />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Presiona Enter para enviar. Shift + Enter para nueva línea.
          </p>
        </div>
      </div>
    </div>
  );
} 