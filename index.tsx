import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-mirator.jpg";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { QuienSoy } from "@/components/site/QuienSoy";
import { ComoTrabajo } from "@/components/site/ComoTrabajo";
import { SelectorInteractivo } from "@/components/site/SelectorInteractivo";
import { Portafolio } from "@/components/site/Portafolio";
import { Planes } from "@/components/site/Planes";
import { PorQueMirator } from "@/components/site/PorQueMirator";
import { CtaFinal } from "@/components/site/CtaFinal";
import { Footer } from "@/components/site/Footer";
import { MobileStickyBar } from "@/components/site/MobileStickyBar";

const TITLE = "Mirator | Páginas web para negocios de Antioquia";
const DESCRIPTION =
  "Diseñador freelance en Antioquia. Páginas web rápidas y estéticas para PyMEs, con WhatsApp y Google Business optimizados. Precio de fundador.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: heroImage },
    ],
    links: [{ rel: "preload", as: "image", href: heroImage, fetchpriority: "high" }],
  }),
  component: Landing,
});

function Landing() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuienSoy />
        <ComoTrabajo />
        <SelectorInteractivo />
        <Portafolio />
        <Planes />
        <PorQueMirator />
        <CtaFinal />
      </main>
      <MobileStickyBar />
      <Footer />
    </>
  );
}
