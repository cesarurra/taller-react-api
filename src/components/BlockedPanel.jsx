export default function BlockedPanel({ bloqueados, onDesbloquear }) {
  return (
    <aside className="rounded-xl border border-surface2 bg-surface p-4">
      <p className="coord-tag mb-3">Bloqueados ({bloqueados.length})</p>

      {bloqueados.length === 0 ? (
        <p className="text-sm text-muted">No has bloqueado personajes.</p>
      ) : (
        <ul className="space-y-2">
          {bloqueados.map((b) => (
            <li
              key={b.id}
              className="flex items-center gap-3 rounded-lg bg-surface2 p-2"
            >
              <img
                src={b.image}
                alt={b.name}
                className="h-10 w-10 rounded-full object-cover grayscale"
              />
              <span className="flex-1 truncate text-sm text-ink">{b.name}</span>
              <button
                onClick={() => onDesbloquear(b)}
                className="text-xs text-muted hover:text-portal"
              >
                Desbloquear
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
