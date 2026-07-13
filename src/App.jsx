import { useState, useMemo } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StatsBar from "./components/StatsBar";
import SearchBar from "./components/SearchBar";
import CharacterList from "./components/CharacterList";
import FavoritesPanel from "./components/FavoritesPanel";
import BlockedPanel from "./components/BlockedPanel";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import useFetch from "./hooks/useFetch";
import useLocalStorage from "./hooks/useLocalStorage";

const API_URL = "https://rickandmortyapi.com/api/character";

function App() {
  const { data, loading, error } = useFetch(API_URL);

  // useLocalStorage funciona igual que useState, pero ademas guarda el
  // valor en el navegador bajo la clave indicada, para que no se pierda
  // al refrescar la pagina.
  const [favoritos, setFavoritos] = useLocalStorage("favoritos", []);
  const [bloqueados, setBloqueados] = useLocalStorage("bloqueados", []);
  const [busqueda, setBusqueda] = useState("");

  const personajes = data?.results ?? [];

  // Un personaje bloqueado no debe aparecer en los resultados de busqueda.
  const personajesFiltrados = useMemo(() => {
    return personajes
      .filter((p) => !bloqueados.some((b) => b.id === p.id))
      .filter((p) => p.name.toLowerCase().includes(busqueda.toLowerCase()));
  }, [personajes, busqueda, bloqueados]);

  function alternarFavorito(personaje) {
    setFavoritos((actuales) => {
      const yaEsta = actuales.some((f) => f.id === personaje.id);
      if (yaEsta) {
        return actuales.filter((f) => f.id !== personaje.id);
      }
      return [...actuales, personaje];
    });
  }

  function quitarFavorito(personaje) {
    setFavoritos((actuales) => actuales.filter((f) => f.id !== personaje.id));
  }

  function bloquearPersonaje(personaje) {
    setBloqueados((actuales) => {
      const yaEsta = actuales.some((b) => b.id === personaje.id);
      if (yaEsta) return actuales;
      return [...actuales, personaje];
    });
    // Si el personaje estaba en favoritos, se retira automaticamente
    // (requisito del enunciado).
    setFavoritos((actuales) => actuales.filter((f) => f.id !== personaje.id));
  }

  function desbloquearPersonaje(personaje) {
    setBloqueados((actuales) => actuales.filter((b) => b.id !== personaje.id));
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="space-y-6 py-6">
        <StatsBar
          total={personajes.length}
          favoritos={favoritos.length}
          bloqueados={bloqueados.length}
        />

        <SearchBar value={busqueda} onChange={setBusqueda} />

        {loading && <Loader />}

        {error && <ErrorMessage mensaje={error} />}

        {!loading && !error && (
          <div className="grid grid-cols-1 gap-6 px-6 md:px-10 lg:grid-cols-[1fr_280px]">
            <CharacterList
              personajes={personajesFiltrados}
              favoritos={favoritos}
              onToggleFavorito={alternarFavorito}
              onBloquear={bloquearPersonaje}
            />

            <div className="space-y-4">
              <FavoritesPanel favoritos={favoritos} onQuitar={quitarFavorito} />
              <BlockedPanel
                bloqueados={bloqueados}
                onDesbloquear={desbloquearPersonaje}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;