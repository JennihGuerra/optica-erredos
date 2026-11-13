/**
 * Servicios de Óptica Erredos.
 * Nombres y descripciones generales: definidos en el brief del proyecto.
 * PENDIENTE de confirmar con Mauricio y la profesional responsable: alcance,
 * procedimientos, duración, requisitos, horarios, precios, plazos y repuestos.
 * No agregar prestaciones, exámenes, garantías ni condiciones sin confirmación.
 */
import type { IconName } from '../components/ui/icons';
import { whatsappMessages } from '../lib/whatsapp';

export interface Service {
  slug: string;
  name: string;
  description: string;
  icon: IconName;
  /** Texto del botón de consulta. */
  cta: string;
  /** Mensaje prellenado de WhatsApp. */
  whatsappMessage: string;
  /** Descripción de la fotografía que debe ir en la tarjeta. */
  imageLabel: string;
  /** Motivos de consulta de ejemplo (no garantizan que el caso tenga solución). */
  examples?: { title: string; items: string[]; note: string };
  /** Aclaración importante sobre el alcance del servicio. */
  notice?: string;
  /** Acción principal dentro del sitio (ej.: ir al formulario de hora). */
  primaryAction?: { label: string; href: string };
}

export const services: Service[] = [
  {
    slug: 'atencion-visual',
    name: 'Atención visual',
    description:
      'Orientación visual con nuestra tecnóloga.',
    icon: 'visibility',
    cta: 'Consultar atención',
    whatsappMessage: whatsappMessages.visualCare,
    imageLabel: 'atención visual en la óptica',
    primaryAction: { label: 'Agenda tu hora', href: '#agendar-hora' },
    notice:
      'No reemplaza una consulta oftalmológica. No atendemos a menores de 10 años: necesitan antes un oftalmólogo.',
  },
  {
    slug: 'reparacion-y-ajuste',
    name: 'Reparación y ajuste de anteojos',
    description:
      'Cuéntanos qué problema tienen tus anteojos y te orientamos.',
    icon: 'build',
    cta: 'Consultar reparación',
    whatsappMessage: whatsappMessages.repair,
    imageLabel: 'persona ajustando o reparando unos anteojos',
    examples: {
      title: 'Puedes consultarnos por',
      items: [
        'Marcos desajustados',
        'Tornillos sueltos o faltantes',
        'Problemas en las patillas',
        'Otros daños en la estructura',
      ],
      note: 'Revisamos cada caso: no todo tiene reparación.',
    },
  },
];

/**
 * Preguntas frecuentes de Servicios.
 * `answer: null` = respuesta PENDIENTE de confirmar con el negocio:
 * se muestra un texto neutro que invita a consultar por WhatsApp.
 */
export interface FaqItem {
  question: string;
  answer: string | null;
}

export const servicesFaq: { title: string; items: FaqItem[] }[] = [
  {
    title: 'Sobre la atención visual',
    items: [
      {
        question: '¿Quién realiza la atención visual?',
        answer:
          'La atención visual la realiza una tecnóloga. No corresponde a una consulta médica oftalmológica.',
      },
      {
        question: '¿Cómo puedo solicitar una atención?',
        answer:
          'En "Agenda tu hora de atención visual", en esta misma página, elige el día y la hora que prefieras y déjanos tus datos. También puedes escribirnos por WhatsApp.',
      },
      { question: '¿Necesito agendar previamente?', answer: null },
      { question: '¿Qué debo llevar el día de mi atención?', answer: null },
    ],
  },
  {
    title: 'Sobre la reparación de anteojos',
    items: [
      { question: '¿Qué tipos de reparaciones realizan?', answer: null },
      { question: '¿Puedo consultar por anteojos comprados en otra óptica?', answer: null },
      {
        question: '¿Cómo puedo saber si mis anteojos tienen reparación?',
        answer:
          'Escríbenos por WhatsApp y cuéntanos qué problema presentan tus anteojos. Con esa información podremos orientarte.',
      },
      { question: '¿Cuánto demora una reparación?', answer: null },
    ],
  },
];
