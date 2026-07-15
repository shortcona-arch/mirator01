const STEPS = [
  {
    n: 1,
    title: "Conozco tu negocio",
    desc: "Charlamos sobre lo que vendes, tus clientes ideales en Antioquia y lo que realmente necesitas.",
  },
  {
    n: 2,
    title: "Diseño tu presencia",
    desc: "Creo una web rápida, ultra-estética y adaptada para capturar miradas desde cualquier celular.",
  },
  {
    n: 3,
    title: "Optimizo tu Google",
    desc: "Configuro tu perfil de Google Business para que aparezcas de primero cuando busquen en tu zona.",
  },
  {
    n: 4,
    title: "Recibes clientes",
    desc: "Tu web canaliza los leads directo a tu WhatsApp y Google Business atrae visitas físicas y llamadas.",
  },
];

export function ComoTrabajo() {
  return (
    <section id="como-trabajo" className="reel-section">
      <div className="section-container">
        <div className="section-title-wrapper">
          <span className="section-badge">Método Ágil</span>
          <h2 className="section-title">
            Cómo trabajamos <span>juntos</span>
          </h2>
        </div>
        <div className="timeline-container">
          {STEPS.map((s) => (
            <div className="timeline-step" key={s.n}>
              <div className="step-num">{s.n}</div>
              <div className="step-content">
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
