import { useState, useEffect } from "react";

/**
 * Hook propio reutilizable: consulta una URL y expone datos, estado de
 * carga y estado de error, tal como pide la rubrica del taller.
 *
 * @param {string} url - Endpoint a consultar.
 * @returns {{data: *, loading: boolean, error: string|null}}
 */
export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelado = false;

    async function cargarDatos() {
      setLoading(true);
      setError(null);
      try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
          throw new Error(`Error ${respuesta.status}: no se pudo obtener la informacion`);
        }
        const json = await respuesta.json();
        if (!cancelado) {
          setData(json);
        }
      } catch (err) {
        if (!cancelado) {
          setError(err.message || "Ocurrio un error al conectar con la API");
        }
      } finally {
        if (!cancelado) {
          setLoading(false);
        }
      }
    }

    cargarDatos();

    return () => {
      cancelado = true;
    };
  }, [url]);

  return { data, loading, error };
}
