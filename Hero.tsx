import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section id="hero" className="reel-section">
      <div className="section-container">
        <div className="hero-grid">
          <div className="hero-text-content">
            <div className="hero-pretitle">Digitalización Cercana</div>
            <h1 className="hero-title">
              Negocios reales de <span>Antioquia</span>, vendiendo más por internet.
            </h1>
            <p className="hero-description">
              Creo páginas web rápidas, estéticas y configuradas para recibir reservas y mensajes
              directo en tu WhatsApp. Diseñadas especialmente para PyMEs de la región.
            </p>
            <div className="hero-actions">
              <a
                href={buildWhatsAppUrl(
                  "Hola Mirator, quiero conversar sobre el sitio web de mi negocio",
                )}
                className="btn btn-primary btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle aria-hidden />
                Escríbeme por WhatsApp
              </a>
              <a href="#portafolio" className="btn btn-secondary">
                Ver casos reales
              </a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden>
            <div className="hero-phone-mockup">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="phone-header">
                  <span className="phone-logo">MIRATOR</span>
                  <span className="phone-time">21:35</span>
                </div>
                <div className="phone-content">
                  <div className="phone-app-card">
                    <div className="phone-avatar">MK</div>
                    <div className="phone-app-name">Estilo &amp; Calma</div>
                    <div className="phone-app-sub">Negocios de Antioquia</div>
                    <div className="phone-stats">
                      <div className="stat-item">
                        <span className="stat-val">+1.2k</span>
                        <span className="stat-lbl">Clientes</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-val">4.9 ★</span>
                        <span className="stat-lbl">Google</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="phone-footer">
                  <a
                    href={buildWhatsAppUrl("Hola Mirator, quiero conocer más")}
                    className="phone-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Conversar ya
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
