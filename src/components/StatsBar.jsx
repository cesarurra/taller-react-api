function Stat({ label, value }) {
  return (
    <div className="rounded-lg border border-surface2 bg-surface px-4 py-3 text-center">
      <p className="font-display text-2xl font-semibold text-portal">{value}</p>
      <p className="coord-tag mt-1">{label}</p>
    </div>
  );
}

export default function StatsBar({ total, favoritos, bloqueados }) {
  return (
    <div className="grid grid-cols-3 gap-3 px-6 md:px-10">
      <Stat label="Totales" value={total} />
      <Stat label="Favoritos" value={favoritos} />
      <Stat label="Bloqueados" value={bloqueados} />
    </div>
  );
}
