import { buildWhatsAppUrl } from "@/lib/whatsapp";

export interface PlanFeature {
  text: string;
  extra?: boolean;
}

export interface Plan {
  name: string;
  desc: string;
  price: string;
  term: string;
  savings?: string;
  features: PlanFeature[];
  cta: string;
  href: string;
  featured?: boolean;
  featuredTag?: string;
  variant: "primary" | "secondary";
}

export const planes: Plan[] = [
  {
    name: "Precio de Fundador GBP",
    desc: "Sácale provecho al mapa de Google para atraer clientes locales que ya están buscando tus servicios.",
    price: "$70.000",
    term: "Pago único",
    features: [
      { text: "Configuración completa del perfil (categorías, horario, fotos, descripción optimizada)" },
      { text: "Código QR de reseñas listo para usar" },
      { text: "Respuesta a reseñas existentes" },
      { text: "Registro en directorios de nicho (guías locales según rubro)" },
    ],
    cta: "Quiero este plan",
    href: buildWhatsAppUrl("Hola Mirator, quiero el Plan Google Business Profile de $70.000"),
    variant: "secondary",
  },
  {
    name: "Precio de Fundador Plan Completo",
    desc: "Tu ecosistema digital absoluto. Web Esencial y Google Business Profile trabajando de la mano para capturar más clientes.",
    price: "$200.000",
    term: "Pago único",
    savings: "Ahorra $20.000 vs. comprar por separado",
    features: [
      { text: "Todo lo de Web Esencial + todo lo de GBP" },
      { text: "WhatsApp Business configurado: catálogo, mensaje de bienvenida, etiquetas", extra: true },
      { text: "Tarjeta digital única con toda tu información (WhatsApp, ubicación, redes)", extra: true },
      { text: "Extra sin costo: botón «Cómo llegar» + link de reserva directa por WhatsApp", extra: true },
    ],
    cta: "Quiero este plan",
    href: buildWhatsAppUrl("Hola Mirator, quiero el Plan Completo de $200.000 con ahorro de $20.000"),
    featured: true,
    featuredTag: "Más elegido",
    variant: "primary",
  },
  {
    name: "Precio de Fundador Web Esencial",
    desc: "Tu carta de presentación impecable para que te encuentren en internet y te escriban de inmediato de forma rápida.",
    price: "$150.000",
    term: "Pago único",
    features: [
      { text: "Landing de una página, diseño adaptado al rubro" },
      { text: "Botón de WhatsApp directo" },
      { text: "Hosting gratis primer año" },
      { text: "Diseño responsive (optimizado para celular)" },
    ],
    cta: "Quiero este plan",
    href: buildWhatsAppUrl("Hola Mirator, quiero el Plan Web Esencial de $150.000"),
    variant: "secondary",
  },
];
