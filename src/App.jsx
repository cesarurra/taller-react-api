import Header from "./components/Header";
import Footer from "./components/Footer";
import StatsBar from "./components/StatsBar";

// NOTA: en este commit inicial solo se arma la estructura y el layout base.
// La carga desde la API, la busqueda, favoritos y bloqueados se conectan
// en los siguientes commits (ver README / historial de Git).
function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="space-y-6 py-6">
        <StatsBar total={0} favoritos={0} bloqueados={0} />

        <p className="px-6 text-center text-muted md:px-10">
          🚧 Estructura inicial del proyecto. La conexión con la API llega en
          el próximo commit.
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default App;
