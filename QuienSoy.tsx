import { Award, CloudCheck, Zap } from "lucide-react";

export function QuienSoy() {
  return (
    <section id="quien-soy" className="reel-section">
      <div className="section-container">
        <div className="section-title-wrapper">
          <span className="section-badge">Atención Directa</span>
          <h2 className="section-title">
            Quién está detrás de <span>Mirator</span>
          </h2>
        </div>
        <div className="quien-soy-box">
          <p className="quien-soy-text">
            Soy un <strong>diseñador freelance independiente</strong> en Antioquia. No soy una
            agencia gigante con departamentos lentos ni procesos corporativos aburridos: trabajo
            de forma directa, ágil y transparente contigo. Creo páginas que cargan al instante en
            celulares y están preparadas para capturar clientes reales en la región,{" "}
            <strong>sin contratos de permanencia ni cobros mensuales obligatorios</strong>.
          </p>
          <div className="quien-soy-meta">
            <div className="meta-item">
              <Award className="meta-icon" aria-hidden />
              <div className="meta-text">
                <h4>Atención de Fundador</h4>
                <p>Hablas directo conmigo, sin intermediarios.</p>
              </div>
            </div>
            <div className="meta-item">
              <CloudCheck className="meta-icon" aria-hidden />
              <div className="meta-text">
                <h4>Sin Ataduras</h4>
                <p>El sitio es 100% tuyo para siempre.</p>
              </div>
            </div>
            <div className="meta-item">
              <Zap className="meta-icon" aria-hidden />
              <div className="meta-text">
                <h4>Velocidad Local</h4>
                <p>Despliegue rápido en servidores óptimos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
