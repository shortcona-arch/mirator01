import { useEffect, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const NAV_ITEMS = [
  { id: "hero", label: "Inicio" },
  { id: "quien-soy", label: "Quién Soy" },
  { id: "como-trabajo", label: "Cómo Trabajo" },
  { id: "selector-interactivo", label: "Tu Rubro" },
  { id: "portafolio", label: "Portafolio" },
  { id: "planes", label: "Planes" },
];

export function Header() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="site-header">
      <div className="nav-container">
        <a href="#hero" className="logo" onClick={(e) => handleNav(e, "hero")}>
          <span className="logo-dot" />
          MIRA<span>TOR</span>
        </a>
        <nav className="main-nav" aria-label="Navegación principal">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={active === item.id ? "active" : undefined}
                  aria-current={active === item.id ? "page" : undefined}
                  onClick={(e) => handleNav(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={buildWhatsAppUrl(
            "Hola Mirator, quiero crear la página web para mi negocio en Antioquia",
          )}
          className="nav-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Escríbeme
        </a>
      </div>
    </header>
  );
}
