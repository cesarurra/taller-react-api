export default function FavoritesPanel({ favoritos, onQuitar }) {
  return (
    <aside className="rounded-xl border border-surface2 bg-surface p-4">
      <p className="coord-tag mb-3">Favoritos ({favoritos.length})</p>

      {favoritos.length === 0 ? (
        <p className="text-sm text-muted">Aún no marcas favoritos.</p>
      ) : (
        <ul className="space-y-2">
          {favoritos.map((f) => (
            <li
              key={f.id}
              className="flex items-center gap-3 rounded-lg bg-surface2 p-2"
            >
              <img
                src={f.image}
                alt={f.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="flex-1 truncate text-sm text-ink">{f.name}</span>
              <button
                onClick={() => onQuitar(f)}
                className="text-xs text-muted hover:text-amber"
              >
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
