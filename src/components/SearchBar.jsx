export default function SearchBar({ value, onChange }) {
  return (
    <div className="px-6 md:px-10">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar personaje por nombre..."
        className="w-full rounded-lg border border-surface2 bg-surface px-4 py-3 font-body text-ink placeholder:text-muted focus:border-portal focus:outline-none focus:ring-1 focus:ring-portal"
      />
    </div>
  );
}
