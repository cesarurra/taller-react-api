import CharacterCard from "./CharacterCard";

export default function CharacterList({
  personajes,
  favoritos,
  onToggleFavorito,
  onBloquear,
}) {
  if (personajes.length === 0) {
    return (
      <p className="px-6 py-10 text-center text-muted md:px-10">
        No se encontraron personajes con ese criterio de búsqueda.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 px-6 sm:grid-cols-2 md:px-10 lg:grid-cols-3">
      {personajes.map((personaje) => (
        <CharacterCard
          key={personaje.id}
          character={personaje}
          esFavorito={favoritos.some((f) => f.id === personaje.id)}
          onToggleFavorito={onToggleFavorito}
          onBloquear={onBloquear}
        />
      ))}
    </div>
  );
}
