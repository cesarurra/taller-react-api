import { useState, useEffect } from "react";

/**
 * Hook propio reutilizable: sincroniza un estado de React con localStorage.
 * Se comporta igual que useState, pero el valor persiste entre recargas
 * de la pagina bajo la clave (key) indicada.
 *
 * @param {string} key - Clave bajo la cual se guarda el valor en localStorage.
 * @param {*} initialValue - Valor inicial si no hay nada guardado todavia.
 * @returns {[value, setValue]} - Igual que useState.
 */
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.error(`Error leyendo localStorage para la clave "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error guardando en localStorage para la clave "${key}":`, error);
    }
  }, [key, value]);

  return [value, setValue];
}
