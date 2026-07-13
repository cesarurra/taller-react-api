export default function CharacterCard({
  character,
  esFavorito,
  onToggleFavorito,
  onBloquear,
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-surface2 bg-surface transition hover:border-portal/60">
      <img
        src={character.image}
        alt={character.name}
        className="h-48 w-full object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-ink">
          {character.name}
        </h3>
        <p className="coord-tag mt-1">{character.species}</p>

        <div className="mt-3 flex gap-2">
          <button
            onClick={() => onToggleFavorito(character)}
            className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition ${
              esFavorito
                ? "bg-portal text-void"
                : "bg-surface2 text-ink hover:bg-portal/20"
            }`}
          >
            {esFavorito ? "★ Favorito" : "☆ Favorito"}
          </button>
          <button
            onClick={() => onBloquear(character)}
            className="rounded-md bg-surface2 px-3 py-2 text-sm font-medium text-amber transition hover:bg-amber/20"
          >
            Bloquear
          </button>
        </div>
      </div>
    </div>
  );
}
