import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StatsBar from "./components/StatsBar";
import CharacterList from "./components/CharacterList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import useFetch from "./hooks/useFetch";

const API_URL = "https://rickandmortyapi.com/api/character";

function App() {
  // useFetch es nuestro hook propio: nos entrega los datos, si esta
  // cargando y si hubo error, todo en un solo lugar.
  const { data, loading, error } = useFetch(API_URL);

  // Por ahora favoritos y bloqueados son arreglos vacios; se conectan
  // de verdad en los proximos commits.
  const [favoritos] = useState([]);

  const personajes = data?.results ?? [];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="space-y-6 py-6">
        <StatsBar
          total={personajes.length}
          favoritos={favoritos.length}
          bloqueados={0}
        />

        {loading && <Loader />}

        {error && <ErrorMessage mensaje={error} />}

        {!loading && !error && (
          <CharacterList
            personajes={personajes}
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
