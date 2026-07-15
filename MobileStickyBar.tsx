import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-100px 0px 0px 0px" },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`mobile-sticky-bar ${visible ? "visible" : ""}`}>
      <div className="sticky-bar-content">
        <div className="sticky-text">
          <span className="sticky-text-title">Digitaliza tu negocio hoy</span>
          <span className="sticky-text-sub">¿Platicamos por WhatsApp?</span>
        </div>
        <a
          href={buildWhatsAppUrl(
            "Hola Mirator, quiero digitalizar mi negocio. Hablemos hoy.",
          )}
          className="sticky-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle aria-hidden /> Escríbeme
        </a>
      </div>
    </div>
  );
}
