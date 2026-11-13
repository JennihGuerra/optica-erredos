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
      'Nuestra tecnóloga médica evaluará tu visión y te guiará paso a paso para encontrar los lentes ideales para ti.',
    icon: 'visibility',
    cta: 'Consultar por WhatsApp',
    whatsappMessage: whatsappMessages.visualCare,
    imageLabel: 'atención visual en la óptica',
    primaryAction: { label: 'Agenda tu hora', href: '#agendar-hora' },
    notice: 'Esta atención no corresponde a una consulta oftalmológica.',
  },
  {
    slug: 'reparacion-y-ajuste',
    name: 'Reparación y ajuste de anteojos',
    description:
      '¿Tus anteojos necesitan un ajuste o reparación? Contáctanos y cuéntanos qué les sucede para orientarte.',
    icon: 'build',
    cta: 'Consultar por WhatsApp',
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
    title: 'Lo más consultado',
    items: [
      {
        question: '¿Cómo puedo reservar una atención?',
        answer:
          'En "Agenda tu atención visual", en esta misma página, elige el día y la hora que prefieras, completa tus datos y revisa tu solicitud antes de enviarla.',
      },
      { question: '¿Qué debo llevar a mi atención visual?', answer: null },
      {
        question: '¿Cómo sabré si mi solicitud fue confirmada?',
        answer:
          'Al enviar tu solicitud, esta queda pendiente. El equipo de Óptica Erredos se comunicará contigo para confirmar tu hora.',
      },
      {
        question: '¿Cómo puedo consultar por una reparación?',
        answer:
          'Escríbenos por WhatsApp y cuéntanos qué problema presentan tus anteojos. Con esa información podremos orientarte.',
      },
    ],
  },
];
