import { KeyRound, Puzzle, Clock } from "lucide-react";

const CARDS = [
  {
    Icon: KeyRound,
    title: "Independencia",
    desc: "Eres dueño 100% de tu sitio, sin depender de plataformas cerradas ni pagar mensualidades obligatorias para seguir existiendo en internet.",
  },
  {
    Icon: Puzzle,
    title: "Ecosistema Completo",
    desc: "No es solo una página bonita — incluye tu perfil de Google Business optimizado y WhatsApp configurado, listo para que te encuentren en tu zona.",
  },
  {
    Icon: Clock,
    title: "Oportunidad",
    desc: "Precio de fundador por tiempo limitado, mientras construyo los primeros casos reales de éxito de cada rubro en el departamento.",
  },
];

export function PorQueMirator() {
  return (
    <section id="por-que-mirator" className="reel-section">
      <div className="section-container">
        <div className="section-title-wrapper">
          <span className="section-badge">La Diferencia</span>
          <h2 className="section-title">
            Por qué elegir <span>Mirator</span>
          </h2>
        </div>
        <div className="why-grid">
          {CARDS.map(({ Icon, title, desc }) => (
            <div className="why-card" key={title}>
              <div className="why-icon">
                <Icon aria-hidden />
              </div>
              <h3 className="why-title">{title}</h3>
              <p className="why-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
