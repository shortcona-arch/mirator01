import { ExternalLink } from "lucide-react";
import { portafolio } from "@/data/portafolio";

export function Portafolio() {
  return (
    <section id="portafolio" className="reel-section">
      <div className="section-container">
        <div className="section-title-wrapper">
          <span className="section-badge">Casos de Éxito</span>
          <h2 className="section-title">
            Portafolio de <span>Casos Reales</span>
          </h2>
        </div>
        <div className="portfolio-grid">
          {portafolio.map(({ name, rubro, desc, url, Icon }) => (
            <article className="portfolio-card" key={name}>
              <div className="portfolio-card-visual">
                <span className="portfolio-badge">Proyecto Real</span>
                <Icon className="portfolio-icon" aria-hidden />
              </div>
              <div className="portfolio-info">
                <span className="portfolio-rubro">{rubro}</span>
                <h3 className="portfolio-name">{name}</h3>
                <p className="portfolio-desc">{desc}</p>
                <a
                  href={url}
                  className="portfolio-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver demo completa <ExternalLink aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
