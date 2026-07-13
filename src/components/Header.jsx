export default function Header() {
  return (
    <header className="border-b border-surface2 px-6 py-8 md:px-10">
      <p className="coord-tag mb-2">Dimension C-137 // Explorador</p>
      <h1 className="font-display text-3xl font-semibold text-ink md:text-4xl">
        Rick &amp; Morty <span className="text-portal">Explorer</span>
      </h1>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Busca personajes de todo el multiverso, marca tus favoritos y bloquea
        los que no quieres volver a ver.
      </p>
    </header>
  );
}
