import { CheckCircle2, Star, Lock } from "lucide-react";
import { planes } from "@/data/planes";

export function Planes() {
  return (
    <section id="planes" className="reel-section">
      <div className="section-container">
        <div className="planes-header">
          <div className="planes-badge">
            <Lock aria-hidden /> Precio de fundador — primeros cupos
          </div>
          <h2 className="section-title">
            Planes a tu <span>medida</span>
          </h2>
        </div>
        <div className="planes-grid">
          {planes.map((p) => (
            <div
              className={`plan-card ${p.featured ? "featured" : ""}`}
              key={p.name}
            >
              {p.featuredTag ? <div className="featured-tag">{p.featuredTag}</div> : null}
              <h3 className="plan-name">{p.name}</h3>
              <p className="plan-desc">{p.desc}</p>
              <div className="plan-price-box">
                <span className="plan-price">
                  {p.price} <small>COP</small>
                </span>
                <div className="plan-term">{p.term}</div>
                {p.savings ? <span className="plan-savings">{p.savings}</span> : null}
              </div>
              <ul className="plan-features">
                {p.features.map((f, i) => (
                  <li key={i} className={f.extra ? "extra" : undefined}>
                    {f.extra ? <Star aria-hidden /> : <CheckCircle2 aria-hidden />}
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
              <a
                href={p.href}
                className={`btn ${p.variant === "primary" ? "btn-primary" : "btn-secondary"}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="planes-note">
          Precios de lanzamiento válidos para los primeros negocios de cada rubro en Antioquia —
          después de esta etapa inicial, los planes vuelven a su valor estándar.
        </p>
      </div>
    </section>
  );
}
