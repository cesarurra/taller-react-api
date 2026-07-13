import { useState, useMemo } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StatsBar from "./components/StatsBar";
import SearchBar from "./components/SearchBar";
import CharacterList from "./components/CharacterList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import useFetch from "./hooks/useFetch";

const API_URL = "https://rickandmortyapi.com/api/character";

function App() {
  const { data, loading, error } = useFetch(API_URL);

  const [favoritos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const personajes = data?.results ?? [];

  // useMemo evita recalcular el filtro en cada render si "personajes" y
  // "busqueda" no cambiaron. toLowerCase() en ambos lados hace que la
  // busqueda no distinga mayusculas de minusculas.
  const personajesFiltrados = useMemo(() => {
    return personajes.filter((p) =>
      p.name.toLowerCase().includes(busqueda.toLowerCase())
    );
  }, [personajes, busqueda]);

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
          <CharacterList
            personajes={personajesFiltrados}
            favoritos={favoritos}
            onToggleFavorito={() => {}}
            onBloquear={() => {}}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;