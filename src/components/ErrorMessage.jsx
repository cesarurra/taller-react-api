export default function ErrorMessage({ mensaje }) {
  return (
    <div className="mx-6 rounded-lg border border-amber/40 bg-amber/10 px-4 py-4 text-center md:mx-10">
      <p className="font-medium text-amber">
        No se pudo conectar con el portal (API).
      </p>
      <p className="mt-1 text-sm text-muted">{mensaje}</p>
    </div>
  );
}
