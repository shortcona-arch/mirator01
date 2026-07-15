import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function CtaFinal() {
  return (
    <section id="cta-final" className="reel-section">
      <div className="section-container">
        <div className="cta-box">
          <h2 className="cta-title">
            ¿Listo para que tu negocio aparezca donde te están buscando?
          </h2>
          <p className="cta-subtitle">
            Da el paso hoy y digitaliza tu presencia con un experto local.
          </p>
          <a
            href={buildWhatsAppUrl(
              "Hola Mirator, estoy listo para crear mi presencia digital. Quiero más información",
            )}
            className="btn btn-primary btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle aria-hidden /> Quiero mi presencia digital
          </a>
          <span className="cta-microtext">Respuesta en el mismo día</span>
        </div>
      </div>
    </section>
  );
}
