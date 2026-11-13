/**
 * Catálogo de productos — DATOS DE DEMOSTRACIÓN.
 * Productos, marcas y precios son ficticios y sirven solo para visualizar la interfaz.
 * Para cargar el catálogo real basta con reemplazar el arreglo `products`:
 * los filtros, las tarjetas y los contadores se generan a partir de estos datos.
 */
import type { ImageMetadata } from 'astro';
import accessoriesPhoto from '../assets/categoria-accesorios.jpg';

export type ProductType = 'opticos' | 'sol' | 'accesorios';

/** Familias de color del marco usadas por el filtro. */
export const frameColors = {
  Negro: '#212121',
  Café: '#6b4226',
  Azul: '#1f4e8c',
  Rojo: '#b3261e',
  Transparente: '#c3d2d8',
  Dorado: '#c9a227',
  Plateado: '#a9afb5',
  Otros: '#4e7a5a',
} as const;

export type FrameColor = keyof typeof frameColors;

export interface ProductVariant {
  id: string;
  /** Familia de color (nombre visible y valor del filtro). */
  color: FrameColor;
  /** Color exacto de la muestra visual. */
  hex: string;
  /**
   * Fotografía propia de esta variante, importada desde src/assets.
   * - `ImageMetadata`: foto propia importada desde src/assets (se optimiza).
   * - `string`: URL de una foto de stock PROVISIONAL (se usa tal cual).
   * - `null`: se muestra una ilustración genérica con la forma y el color del marco.
   */
  image: ImageMetadata | string | null;
  // `available?: boolean` → agregar solo si el negocio puede mantener el dato actualizado.
}

/** Medidas del marco en milímetros. `null` = sin dato: no se muestra la guía de medidas. */
export interface ProductMeasurements {
  /** Altura del marco. */
  frameHeight: number;
  /** Ancho del marco. */
  frameWidth: number;
  /** Ancho del puente. */
  bridgeWidth: number;
  /** Longitud de la varilla. */
  templeLength: number;
}

export interface Product {
  id: string;
  slug: string;
  /** Nombre descriptivo del modelo. */
  name: string;
  /** Código interno. Se incluye en el mensaje de WhatsApp. */
  code: string;
  /** `null` = marca sin confirmar: no se muestra ni se filtra. */
  brand: string | null;
  /** Categoría del catálogo. */
  type: ProductType;
  /** `null` = no aplica (por ejemplo, accesorios): no se muestra ni se filtra. */
  shape: FrameShape | null;
  style: string | null;
  /** Precio en pesos chilenos. `null` muestra "Consultar precio". */
  price: number | null;
  description: string;
  /** Texto de la promoción vigente. `null` = sin promoción. */
  promotion: string | null;
  /** Entre una y cuatro variantes de color. La primera se muestra por defecto. */
  variants: ProductVariant[];
  /** Medidas del marco (mm). `null` = sin dato. */
  measurements: ProductMeasurements | null;
  /** Fotos adicionales para la galería del detalle (se suman a la foto de la variante). */
  gallery: (ImageMetadata | string)[];
  featured: boolean;
  /** Fecha de incorporación al catálogo (AAAA-MM-DD). */
  addedAt: string;
}

export const frameShapes = ['Redondo', 'Cuadrado', 'Rectangular', 'Aviador', 'Cat Eye', 'Geométrico'] as const;
export type FrameShape = (typeof frameShapes)[number];

export const productTypeLabels: Record<ProductType, string> = {
  opticos: 'Anteojos ópticos',
  sol: 'Anteojos de sol',
  accesorios: 'Accesorios',
};

export const productTypeRoutes: Record<ProductType, string> = {
  opticos: '/productos/anteojos-opticos',
  sol: '/productos/anteojos-de-sol',
  accesorios: '/productos/accesorios',
};

/* --- Productos de demostración -------------------------------------------
   Nombres, marcas, estilos y precios son FICTICIOS. Los estilos son etiquetas
   de prueba: reemplazar por una clasificación validada con el cliente. */

const demoNames = [
  'Urban', 'Lago', 'Costa', 'Bruma', 'Austral', 'Marea', 'Bosque', 'Faro',
  'Brisa', 'Niebla', 'Roca', 'Sendero', 'Puerto', 'Alba', 'Cumbre', 'Rada',
  'Estero', 'Duna', 'Canal', 'Ribera', 'Aurora', 'Litoral', 'Nevado', 'Caleta',
];
const demoBrands = ['Marca A', 'Marca B', 'Marca C', 'Marca D'];
const demoStyles = ['Clásico', 'Moderno', 'Minimalista', 'Elegante', 'Deportivo'];
const demoPrices = [24990, 29990, 34990, 39990, 44990, 49990, 59990, 69990, 79990, 89990];
const colorNames = Object.keys(frameColors) as FrameColor[];

/**
 * Fotos de stock PROVISIONALES (Pexels, uso libre) para reemplazar las ilustraciones mientras
 * no existan fotos reales del catálogo. Se enlazan directamente desde Pexels; los IDs salen de
 * la URL pública de cada foto. Reemplazar por fotos propias en `variant.image`.
 * El conjunto es corto, por lo que algunas fotos se repiten entre modelos.
 */
const stockPhoto = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

const stockPhotos: Record<'opticos' | 'sol', string[]> = {
  opticos: [28881363, 28938434, 28211038, 1054777, 1438409, 39716].map(stockPhoto),
  sol: [31305965, 16577200, 6253849, 255305, 343720, 13145653].map(stockPhoto),
};

function demoProduct(n: number): Product {
  const id = String(n).padStart(2, '0');
  const type: 'opticos' | 'sol' = n % 5 < 3 ? 'opticos' : 'sol';
  // Una foto por modelo (todas sus variantes de color comparten la foto de referencia).
  const typeIndex = Array.from({ length: n }, (_, i) => i + 1).filter((k) => (k % 5 < 3 ? 'opticos' : 'sol') === type).length - 1;
  const photo = stockPhotos[type][typeIndex % stockPhotos[type].length];
  const name = `${demoNames[n - 1]} ${id}`;
  const variantCount = 1 + (n % 4); // entre 1 y 4 colores
  const variants: ProductVariant[] = Array.from({ length: variantCount }, (_, i) => {
    const color = colorNames[(n * 3 + i * 3) % colorNames.length];
    return { id: `demo-${id}-${i + 1}`, color, hex: frameColors[color], image: photo };
  });
  return {
    id: `demo-${id}`,
    slug: `${demoNames[n - 1].toLowerCase()}-${id}`,
    name,
    code: `DEMO-${id}`,
    brand: demoBrands[(n * 3) % demoBrands.length],
    type,
    shape: frameShapes[(n * 5 + Math.floor(n / 2)) % frameShapes.length],
    style: demoStyles[(n * 2 + Math.floor(n / 5)) % demoStyles.length],
    price: demoPrices[(n * 7) % demoPrices.length],
    description: 'Descripción provisional del producto.',
    promotion: null,
    variants,
    // PROVISIONAL: medidas y fotos adicionales de demostración.
    measurements: {
      frameHeight: 34 + ((n * 3) % 14),
      frameWidth: 48 + ((n * 5) % 9),
      bridgeWidth: 16 + (n % 5),
      templeLength: 135 + (n % 3) * 5,
    },
    gallery: [1, 2].map((k) => stockPhotos[type][(typeIndex + k) % stockPhotos[type].length]),
    featured: n <= 6,
    addedAt: `2026-${String(1 + ((n * 5) % 10)).padStart(2, '0')}-${String(1 + ((n * 7) % 27)).padStart(2, '0')}`,
  };
}

/* Accesorios de DEMOSTRACIÓN: nombres, marcas y precios ficticios; todos comparten una foto de banco provisional. */
const demoAccessories = ['Funda acolchada', 'Paño de microfibra', 'Cadena para anteojos', 'Estuche rígido', 'Kit de limpieza'];

function demoAccessory(n: number): Product {
  const id = String(n).padStart(2, '0');
  const name = demoAccessories[n - 1];
  const variantCount = 1 + (n % 3);
  const variants: ProductVariant[] = Array.from({ length: variantCount }, (_, i) => {
    const color = colorNames[(n * 2 + i * 3) % colorNames.length];
    return { id: `demo-acc-${id}-${i + 1}`, color, hex: frameColors[color], image: accessoriesPhoto };
  });
  return {
    id: `demo-acc-${id}`,
    slug: `${name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}-a${id}`,
    name,
    code: `DEMO-A${id}`,
    brand: demoBrands[n % demoBrands.length],
    type: 'accesorios',
    shape: null,
    style: null,
    price: [4990, 2990, 6990, 8990, 5990][n - 1],
    description: 'Descripción provisional del producto.',
    promotion: null,
    variants,
    measurements: null,
    gallery: [],
    featured: false,
    addedAt: `2026-11-${String(n).padStart(2, '0')}`,
  };
}

export const products: Product[] = [
  ...Array.from({ length: demoNames.length }, (_, i) => demoProduct(i + 1)),
  ...Array.from({ length: demoAccessories.length }, (_, i) => demoAccessory(i + 1)),
];

export const featuredProducts = products.filter((product) => product.featured);

export function formatPrice(price: number | null): string {
  if (price === null) return 'Consultar precio';
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(price);
}

/** Anteojos ópticos: el precio se muestra siempre como "Desde $X" (los lentes se cotizan aparte). */
export function productPriceLabel(product: Pick<Product, 'type' | 'price'>): string {
  const base = formatPrice(product.price);
  return product.type === 'opticos' && product.price !== null ? `Desde ${base}` : base;
}
