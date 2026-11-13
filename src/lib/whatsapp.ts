import { site } from '../config/site';
import { productPriceLabel, type Product } from '../data/products';

/** Línea de precio del mensaje; vacío si el producto no tiene precio definido. */
export function priceText(product: Pick<Product, 'type' | 'price'>): string | undefined {
  return product.price === null ? undefined : productPriceLabel(product);
}

/** Mensajes contextuales por defecto. Cada página puede pasar el suyo. */
export const whatsappMessages = {
  general: 'Hola, quisiera hacer una consulta a Óptica Erredos.',
  product: (name: string, brand: string | null, color: string, code: string, link?: string, price?: string) =>
    `Hola, quisiera consultar por este producto:
` +
    `• Modelo: ${name}
` +
    (brand ? `• Marca: ${brand}
` : '') +
    `• Color: ${color}
` +
    `• Código: ${code}` +
    (price ? `
• Precio: ${price}` : '') +
    (link ? `
${link}` : ''),
  productPage: (name: string, brand: string | null, code: string, link?: string, price?: string) =>
    `Hola, quisiera consultar por este producto:
` +
    `• Modelo: ${name}
` +
    (brand ? `• Marca: ${brand}
` : '') +
    `• Código: ${code}` +
    (price ? `
• Precio: ${price}` : '') +
    (link ? `
${link}` : ''),
  catalogHelp: 'Hola, necesito ayuda para elegir mis anteojos.',
  services: 'Hola, quisiera consultar por los servicios de Óptica Erredos.',
  visualCare:
    'Hola, quisiera obtener información sobre la atención visual que realizan en Óptica Erredos. ¿Podrían orientarme?',
  accessories: 'Hola, quisiera consultar por los accesorios ópticos que tienen en Óptica Erredos.',
  promotion: (link?: string) =>
    'Hola, quisiera solicitar esta promoción de Óptica Erredos.' +
    (link ? `\n${link}` : '\nQuisiera información sobre las promociones vigentes.'),
  repair: 'Hola, quisiera consultar por una reparación o ajuste de anteojos. ¿Podrían orientarme?',
  business:
    'Hola, represento a una organización y quisiera conocer las alternativas de convenios y operativos ópticos que ofrece Óptica Erredos.',
};

/** Construye el enlace de WhatsApp con un mensaje prellenado. */
export function whatsappUrl(message: string = whatsappMessages.general): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Enlace público a la ficha de un producto (con el color elegido). Devuelve `undefined` mientras
 * `site.url` esté vacío. WhatsApp no permite adjuntar fotos desde un enlace: al incluir este
 * enlace, la conversación muestra la foto y el nombre del producto como vista previa.
 */
export function productLink(slug: string, color?: string): string | undefined {
  if (!site.url) return undefined;
  const query = color ? `?color=${encodeURIComponent(color)}` : '';
  return `${site.url}/productos/${slug}${query}`;
}

/**
 * Enlace público a la imagen de la promoción vigente. WhatsApp la muestra como vista previa
 * dentro del mensaje. Devuelve `undefined` mientras `site.url` esté vacío.
 * Al cambiar de promoción, reemplazar `public/promociones/promocion.jpg`.
 */
export function promotionImageLink(): string | undefined {
  return site.url ? `${site.url}/promociones/promocion.jpg` : undefined;
}
