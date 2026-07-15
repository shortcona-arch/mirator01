import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { rubroChips, rubrosData, type RubroKey } from "@/data/rubros";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function SelectorInteractivo() {
  const [selected, setSelected] = useState<RubroKey>("barberia");
  const [fadingOut, setFadingOut] = useState(false);
  const [displayed, setDisplayed] = useState<RubroKey>("barberia");

  useEffect(() => {
    if (selected === displayed) return;
    setFadingOut(true);
    const t = setTimeout(() => {
      setDisplayed(selected);
      setFadingOut(false);
    }, 280);
    return () => clearTimeout(t);
  }, [selected, displayed]);

  const data = rubrosData[displayed];
  const accent = data.acento;

  return (
    <section id="selector-interactivo" className="reel-section">
      <div className="section-container">
        <div className="section-title-wrapper">
          <span className="section-badge">Demostración en vivo</span>
          <h2 className="section-title">
            Elige tu rubro y mira la <span>magia</span>
          </h2>
        </div>
        <div className="selector-grid">
          <div className="chips-container" role="tablist" aria-label="Rubros disponibles">
            {rubroChips.map(({ key, Icon, chipTitle, chipSub }) => (
              <button
                type="button"
                key={key}
                role="tab"
                aria-selected={selected === key}
                className={`rubro-chip ${selected === key ? "active" : ""}`}
                onClick={() => setSelected(key)}
              >
                <div className="chip-main">
                  <Icon className="chip-icon" aria-hidden />
                  <div className="chip-info">
                    <h4>{chipTitle}</h4>
                    <p>{chipSub}</p>
                  </div>
                </div>
                <ArrowRight className="chip-arrow" aria-hidden />
              </button>
            ))}
          </div>

          <div className="mockup-container">
            <div className="css-phone" style={{ borderColor: accent }}>
              <div className="phone-notch" />
              <div className="screen-wrapper">
                <div className={`dynamic-content ${fadingOut ? "fade-out" : ""}`}>
                  <div className="client-app-header">
                    <div className="client-app-header-left">
                      <div
                        className="client-app-avatar"
                        style={{ background: `linear-gradient(135deg, ${accent}, var(--accent-gold))` }}
                      >
                        {data.avatar}
                      </div>
                      <span className="client-app-title">{data.nombre}</span>
                    </div>
                    <div className="client-app-status">
                      <span className="status-dot" /> Abierto
                    </div>
                  </div>

                  <div className="client-app-hero" style={{ borderColor: accent }}>
                    <span
                      className="client-app-badge"
                      style={{ backgroundColor: `${accent}33`, color: accent }}
                    >
                      {data.rubro}
                    </span>
                    <h3 className="client-app-h1">{data.heroTitle}</h3>
                  </div>

                  <div className="client-app-features">
                    {data.features.map((f) => (
                      <div className="client-feature-card" key={f.name}>
                        <div className="client-feature-icon">{f.icon}</div>
                        <div className="client-feature-name">{f.name}</div>
                        <div className="client-feature-price" style={{ color: accent }}>
                          {f.precio}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="client-app-review" style={{ borderLeftColor: accent }}>
                    <div className="client-review-stars">★★★★★</div>
                    <p>&ldquo;{data.review}&rdquo;</p>
                  </div>

                  <a
                    href={buildWhatsAppUrl(
                      `Hola, vi el mockup de ${data.nombre} en la web y quiero uno así para mi negocio`,
                    )}
                    className="client-app-cta"
                    style={{ backgroundColor: accent }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle aria-hidden /> Reservar Turno
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
