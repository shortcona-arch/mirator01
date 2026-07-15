import {
  Scissors,
  Sparkles,
  PawPrint,
  Wrench,
  Stethoscope,
  Mountain,
  Cog,
  type LucideIcon,
} from "lucide-react";

export type RubroKey =
  | "barberia"
  | "spa"
  | "veterinaria"
  | "ferreteria"
  | "odontologia"
  | "alojamiento"
  | "mecanica";

export interface RubroFeature {
  icon: string;
  name: string;
  precio: string;
}

export interface RubroChip {
  key: RubroKey;
  Icon: LucideIcon;
  chipTitle: string;
  chipSub: string;
}

export interface RubroData {
  nombre: string;
  rubro: string;
  acento: string;
  heroTitle: string;
  tagline: string;
  review: string;
  features: [RubroFeature, RubroFeature];
  avatar: string;
}

export const rubroChips: RubroChip[] = [
  { key: "barberia", Icon: Scissors, chipTitle: "Barbería / Peluquería", chipSub: "Cortes, estilo y masajes relajantes" },
  { key: "spa", Icon: Sparkles, chipTitle: "Spa / Estética", chipSub: "Uñas, masajes y cuidado botánico" },
  { key: "veterinaria", Icon: PawPrint, chipTitle: "Veterinaria / Mascotas", chipSub: "Salud, cirugías y mucho cariño" },
  { key: "ferreteria", Icon: Wrench, chipTitle: "Ferretería / Equipos", chipSub: "Materiales y herramientas a la mano" },
  { key: "odontologia", Icon: Stethoscope, chipTitle: "Odontología / Clínicas", chipSub: "Sonrisas en armonía y sin dolor" },
  { key: "alojamiento", Icon: Mountain, chipTitle: "Alojamiento / Glamping", chipSub: "Desconexión rural y naturaleza pura" },
  { key: "mecanica", Icon: Cog, chipTitle: "Mecánica / Talleres", chipSub: "Soluciones honestas para tu vehículo" },
];

export const rubrosData: Record<RubroKey, RubroData> = {
  barberia: {
    nombre: "The East Barbershop",
    rubro: "Barbería Premium",
    acento: "#B87333",
    heroTitle: "Estilo clásico & cuidado superior de barba",
    tagline: "El mejor corte de Rionegro",
    review: "Excelente atención y profesionalismo, se nota la calidad en cada detalle.",
    features: [
      { icon: "✂️", name: "Corte Supremo", precio: "$53.000" },
      { icon: "🧔", name: "Arreglo de Barba", precio: "$25.000" },
    ],
    avatar: "EB",
  },
  spa: {
    nombre: "Vanessa Uñas y Belleza",
    rubro: "Belleza / Spa",
    acento: "#D4AF7A",
    heroTitle: "Santuario de Calma e Ingredientes Botánicos",
    tagline: "Relajación pura en Llanogrande",
    review: "Un verdadero paraíso de calma. La limpieza facial y el té marcan la diferencia.",
    features: [
      { icon: "🌿", name: "Limpieza Facial", precio: "$120.000" },
      { icon: "💅", name: "Manicure Spa", precio: "$60.000" },
    ],
    avatar: "VU",
  },
  veterinaria: {
    nombre: "Mas Vet",
    rubro: "Salud / Veterinaria",
    acento: "#4F9D69",
    heroTitle: "El Cuidado y Amor que tu Mascota merece",
    tagline: "Consultas y urgencias 24/7",
    review: "Trataron a mi perrito con un amor y una paciencia que pocos tienen.",
    features: [
      { icon: "🩺", name: "Consulta General", precio: "$60.000" },
      { icon: "✂️", name: "Peluquería Canina", precio: "$50.000" },
    ],
    avatar: "MV",
  },
  ferreteria: {
    nombre: "Ferretería y Equipos",
    rubro: "Logística / Ferretería",
    acento: "#C53030",
    heroTitle: "Todo para tu Obra o Hogar en un solo mensaje",
    tagline: "Asesoría técnica y domicilios",
    review: "Llegué sin saber qué necesitaba y salí con la solución, no lo más caro.",
    features: [
      { icon: "🔧", name: "Herramienta Pro", precio: "Alquiler" },
      { icon: "🧱", name: "Materiales Obra", precio: "Cotizar" },
    ],
    avatar: "FE",
  },
  odontologia: {
    nombre: "Armonía Dental",
    rubro: "Odontología / Clínicas",
    acento: "#3182CE",
    heroTitle: "Odontología cercana, honesta y sin dolor",
    tagline: "Citas prioritarias en El Retiro",
    review: "Le tenía pánico al dentista y aquí me trataron con una paciencia increíble.",
    features: [
      { icon: "✨", name: "Blanqueamiento", precio: "$250.000" },
      { icon: "🪥", name: "Limpieza Dental", precio: "$90.000" },
    ],
    avatar: "AD",
  },
  alojamiento: {
    nombre: "La Cabaña del Río",
    rubro: "Alojamiento Rural",
    acento: "#805AD5",
    heroTitle: "Desconexión Rural Premium entre Naturaleza",
    tagline: "Río privado en Granada",
    review: "El arrullo del río en la noche en la Cabaña de Madera es mágico. Volveremos.",
    features: [
      { icon: "🪵", name: "Cabaña Madera", precio: "$180.000" },
      { icon: "⛺", name: "Glamping Nido", precio: "$140.000" },
    ],
    avatar: "CR",
  },
  mecanica: {
    nombre: "AutoFix Rionegro",
    rubro: "Mecánica / Talleres",
    acento: "#DD6B20",
    heroTitle: "Tu carro entra con el problema, sale con la solución",
    tagline: "Garantía de 6 meses",
    review: "Excelente taller. Te explican honestamente qué tiene el carro antes de empezar.",
    features: [
      { icon: "🚗", name: "Cambio de Aceite", precio: "$65.000" },
      { icon: "🔌", name: "Escáner Electrónico", precio: "$45.000" },
    ],
    avatar: "AF",
  },
};
