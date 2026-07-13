import { useState, useMemo } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StatsBar from "./components/StatsBar";
import SearchBar from "./components/SearchBar";
import CharacterList from "./components/CharacterList";
import FavoritesPanel from "./components/FavoritesPanel";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import useFetch from "./hooks/useFetch";

const API_URL = "https://rickandmortyapi.com/api/character";

function App() {
  const { data, loading, error } = useFetch(API_URL);

  const [favoritos, setFavoritos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const personajes = data?.results ?? [];

  const personajesFiltrados = useMemo(() => {
    return personajes.filter((p) =>
      p.name.toLowerCase().includes(busqueda.toLowerCase())
    );
  }, [personajes, busqueda]);

  // Agrega o quita un personaje de favoritos segun si ya estaba o no.
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

  return (
    <div className="min-h-screen">
      <Header />

      <main className="space-y-6 py-6">
        <StatsBar
          total={personajes.length}
          favoritos={favoritos.length}
          bloqueados={0}
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
              onBloquear={() => {}}
            />

            <FavoritesPanel favoritos={favoritos} onQuitar={quitarFavorito} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;