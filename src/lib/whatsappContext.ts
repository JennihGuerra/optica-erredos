import { whatsappMessages, productLink, priceText } from './whatsapp';
import { products } from '../data/products';

/**
 * Mensaje de WhatsApp según la sección donde está el visitante. Lo usan los botones generales
 * (header, botón flotante, bloque de ubicación) para que el negocio sepa qué se consulta:
 * un producto concreto, los servicios, convenios, etc.
 */
export function contextMessage(pathname: string): string {
  const path = pathname.replace(/\/+$/, '') || '/';
  const section = (name: string) => `Hola, quisiera hacer una consulta a Óptica Erredos (sección ${name}).`;

  if (path === '/servicios') return whatsappMessages.services;
  if (path === '/empresas') return whatsappMessages.business;
  if (path === '/nosotros') return section('Quiénes somos');
  if (path === '/productos') return 'Hola, quisiera consultar por los productos de Óptica Erredos (sección Productos).';
  if (path === '/productos/anteojos-opticos') return 'Hola, quisiera consultar por los anteojos ópticos de Óptica Erredos.';
  if (path === '/productos/anteojos-de-sol') return 'Hola, quisiera consultar por los anteojos de sol de Óptica Erredos.';
  if (path === '/productos/accesorios') return whatsappMessages.accessories;

  if (path.startsWith('/productos/')) {
    const product = products.find((item) => item.slug === path.slice('/productos/'.length));
    if (product) return whatsappMessages.productPage(product.name, product.brand, product.code, productLink(product.slug), priceText(product));
  }

  return section('Inicio');
}
