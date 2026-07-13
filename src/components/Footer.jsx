const INTEGRANTES = ["Cesar Urra"];

export default function Footer() {
  return (
    <footer className="border-t border-surface2 px-6 py-6 text-center md:px-10">
      <p className="coord-tag mb-2">Tripulación</p>
      <p className="text-sm text-muted">{INTEGRANTES.join(" · ")}</p>
    </footer>
  );
}
