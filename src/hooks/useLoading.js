import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/**
 * Hook personalizado para manejar estados de carga
 * @param {string} globalKey - Clave opcional para el estado global (en Redux)
 * @param {number} delay - Retraso en ms antes de mostrar el loader (evita parpadeos)
 * @returns {Object} - Estado y funciones para manejar la carga
 */
export const useLoading = (globalKey = null, delay = 300) => {
  const [localLoading, setLocalLoading] = useState(false);
  const [delayedLoading, setDelayedLoading] = useState(false);
  const dispatch = useDispatch();

  // Para referencia: cuando implementemos el reducer loadingReducer, usaremos esto:
  // const globalLoading = useSelector(state => 
  //   globalKey ? state.loading?.loadingStates?.[globalKey] : false
  // );
  
  // Mientras tanto, manejamos solo estado local
  const isLoading = delayedLoading;
  
  // Efecto para retrasar la visualización del loader (evita parpadeos en cargas rápidas)
  useEffect(() => {
    let timeoutId;
    
    if (localLoading) {
      timeoutId = setTimeout(() => {
        setDelayedLoading(true);
      }, delay);
    } else {
      setDelayedLoading(false);
    }
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [localLoading, delay]);
  
  /**
   * Inicia el estado de carga
   */
  const startLoading = useCallback((message = null) => {
    setLocalLoading(true);
    
    // Para cuando implementemos el reducer de loading
    // if (globalKey && dispatch) {
    //   dispatch({
    //     type: 'SET_LOADING_STATE', 
    //     payload: { key: globalKey, value: true, message }
    //   });
    // }
  }, [globalKey]);
  
  /**
   * Finaliza el estado de carga
   */
  const stopLoading = useCallback(() => {
    setLocalLoading(false);
    
    // Para cuando implementemos el reducer de loading
    // if (globalKey && dispatch) {
    //   dispatch({
    //     type: 'SET_LOADING_STATE', 
    //     payload: { key: globalKey, value: false }
    //   });
    // }
  }, [globalKey]);
  
  /**
   * Ejecuta una función asíncrona con manejo automático del estado de carga
   * @param {Function} asyncFn - Función asíncrona a ejecutar
   * @returns {Promise} - Promesa con el resultado de la función
   */
  const withLoading = useCallback(async (asyncFn) => {
    try {
      startLoading();
      return await asyncFn();
    } finally {
      stopLoading();
    }
  }, [startLoading, stopLoading]);
  
  return { 
    loading: isLoading, 
    startLoading, 
    stopLoading, 
    withLoading 
  };
};

export default useLoading; 