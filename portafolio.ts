import {
  Sparkles,
  Scissors,
  Cog,
  Wrench,
  PawPrint,
  UtensilsCrossed,
  Mountain,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

export interface PortafolioItem {
  rubro: string;
  name: string;
  desc: string;
  url: string;
  Icon: LucideIcon;
}

export const portafolio: PortafolioItem[] = [
  {
    rubro: "Belleza / Spa",
    name: "Boutique Spa Oriente",
    desc: "Santuario de calma y bienestar premium en Llanogrande, Rionegro. Destaca rituales botánicos y test interactivo de bienestar.",
    url: "https://spabt.mrtr.workers.dev",
    Icon: Sparkles,
  },
  {
    rubro: "Barbería",
    name: "Blackwood Barbershop",
    desc: "Barbería clásica y spa facial en Rionegro. Cuenta con agendamiento rápido, catálogo completo de combos y quiz de estilo.",
    url: "https://blackbs.mrtr.workers.dev",
    Icon: Scissors,
  },
  {
    rubro: "Mecánica / Talleres",
    name: "AutoFix Rionegro",
    desc: "Taller mecánico de alta reputación en Rionegro. Incluye cotizador dinámico de servicios preventivos y semáforo de urgencias.",
    url: "https://autofix.mrtr.workers.dev",
    Icon: Cog,
  },
  {
    rubro: "Logística / Ferretería",
    name: "Ferretería El Tornillo",
    desc: "Catálogo ágil y calculadora interactiva de materiales de construcción en La Ceja. Optimizado para cotizaciones rápidas.",
    url: "https://tllo.mrtr.workers.dev",
    Icon: Wrench,
  },
  {
    rubro: "Veterinaria",
    name: "Huellas del Valle",
    desc: "Clínica veterinaria y estética canina en La América, Medellín. Ofrece semáforo inteligente de triage médico para peludos.",
    url: "https://hlls.mrtr.workers.dev",
    Icon: PawPrint,
  },
  {
    rubro: "Restaurante / Finca",
    name: "Sabor Mirador",
    desc: "Cocina tradicional campesina a la leña en el Parque Principal de Guarne. Con un asombroso sistema de reserva de mesas y quiz de platos.",
    url: "https://sm.mrtr.workers.dev",
    Icon: UtensilsCrossed,
  },
  {
    rubro: "Alojamiento Rural",
    name: "La Cabaña del Río",
    desc: "Refugio campestre premium e interactivo con cabañas y glamping de lujo en el municipio de Granada. Incluye cotizador online instantáneo.",
    url: "https://mira.mrtr.workers.dev",
    Icon: Mountain,
  },
  {
    rubro: "Odontología",
    name: "Armonía Dental",
    desc: "Consultorio odontológico de confianza en El Retiro. Integra un sistema ágil antes/después de estética y agendamiento preferencial.",
    url: "https://dntl.mrtr.workers.dev",
    Icon: Stethoscope,
  },
];
