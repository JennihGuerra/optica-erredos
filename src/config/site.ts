/**
 * Datos centrales del negocio.
 * Todo lo marcado como PENDIENTE debe confirmarse con Óptica Erredos antes de publicar.
 */
export const site = {
  name: 'Óptica Erredos',
  city: 'Puerto Montt',
  address: 'Calle Talca 118, Puerto Montt',
  description:
    'Óptica Erredos en Puerto Montt: anteojos ópticos, anteojos de sol y atención óptica.',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Óptica Erredos, Calle Talca 118, Puerto Montt'),

  /** Teléfono fijo del negocio. NÚMERO FICTICIO de maqueta: reemplazar por el real. `phoneHref` es el mismo número para el enlace tel:. */
  phone: '65 2 123 456',
  phoneHref: '+56652123456',

  /** Mapa incrustado de Google Maps para la dirección del local (no requiere clave). */
  mapsEmbedUrl:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('Calle Talca 118, Puerto Montt, Chile') +
    '&z=17&output=embed',

  /**
   * PENDIENTE: número de WhatsApp del negocio en formato internacional, solo dígitos
   * (ej.: 569XXXXXXXX). Mientras esté vacío, los enlaces abren WhatsApp con el mensaje
   * listo, pero sin destinatario.
   */
  whatsappNumber: '',

  /**
   * PENDIENTE: dirección pública del sitio, sin barra final (ej.: https://www.ejemplo.cl).
   * Con ella, el mensaje de WhatsApp de cada producto incluye el enlace a su ficha y WhatsApp
   * muestra la foto del anteojo como vista previa. Mientras esté vacío el enlace se omite.
   */
  url: '',

  /**
   * Horarios de atención confirmados por el negocio (12-11-2026).
   * Un arreglo vacío muestra "Por confirmar". No se indica el domingo porque no fue informado.
   */
  hours: [
    { days: 'Lunes a viernes', time: '09:30 a 18:15 hrs' },
    { days: 'Sábados', time: '10:00 a 13:00 hrs' },
  ] as { days: string; time: string }[],

  /**
   * `true` mientras el catálogo use productos, marcas y precios ficticios.
   * Muestra un aviso en la ficha de cada producto. Cambiar a `false` al cargar el catálogo real.
   */
  catalogIsDemo: true,

  /**
   * Agenda de atención visual (definida por el negocio el 12-11-2026).
   * El sitio calcula las horas a partir de estos bloques. OJO: no existe un sistema de
   * agenda conectado, así que el sitio NO sabe qué horas ya están tomadas.
   */
  appointments: {
    /** Duración de cada atención, en minutos. */
    slotMinutes: 30,
    /** Cuántas semanas hacia adelante se pueden pedir horas. PENDIENTE de confirmar. */
    weeksAhead: 6,
    /** Bloques de atención de lunes a viernes: [inicio, término]. */
    weekdays: [
      ['09:30', '13:00'],
      ['14:00', '17:00'],
    ],
    /** Bloques del sábado. PENDIENTE de confirmar: se asumió el horario del local. */
    saturday: [['10:00', '13:00']],
    /** Rangos de edad del paciente. */
    ageRanges: ['11 a 18 años', '19 a 25 años', '26 a 35 años', '36 a 45 años', '46 años o más'],
    ageNotice:
      'No atendemos a menores de 10 años. Ellos necesitan una consulta previa con un oftalmólogo.',
  },

  /**
   * MAQUETA FUNCIONAL. Con `true`, los formularios y la agenda se comportan como si
   * estuvieran conectados: validan, muestran el estado de envío y terminan en la pantalla
   * de confirmación, pero NO envían ni guardan nada.
   * ⚠️ ANTES DE PUBLICAR EL SITIO: conectar `formEndpoint` o cambiar esto a `false`.
   * Si se publica así, las personas creerán que su hora o solicitud quedó registrada.
   */
  prototypeMode: true,

  /**
   * PENDIENTE: dirección del servicio que recibirá los formularios (se envía un POST con JSON).
   * Mientras esté vacío y `prototypeMode` sea `false`, los formularios funcionan en MODO
   * DEMOSTRACIÓN: validan los datos, pero no envían nada y lo informan claramente a la persona.
   */
  formEndpoint: '',

  /** PENDIENTE: redes sociales confirmadas. Vacío = no se muestran. */
  social: [] as { label: string; href: string }[],
} as const;
