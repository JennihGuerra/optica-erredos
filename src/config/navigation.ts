import type { IconName } from '../components/ui/icons';

export interface NavItem {
  href: string;
  /** Etiqueta completa (menú de escritorio, footer). */
  label: string;
  /** Etiqueta corta para la barra inferior móvil. */
  shortLabel: string;
  icon: IconName;
}

/** Fuente única de la navegación principal: header, barra inferior y footer. */
const base = import.meta.env.BASE_URL;

export const mainNav: NavItem[] = [
  { href: `${base}`, label: 'Inicio', shortLabel: 'Inicio', icon: 'home' },
  { href: `${base}nosotros`, label: 'Quiénes somos', shortLabel: 'Quiénes somos', icon: 'storefront' },
  { href: `${base}productos`, label: 'Productos', shortLabel: 'Productos', icon: 'eyeglasses' },
  { href: `${base}servicios`, label: 'Servicios', shortLabel: 'Servicios', icon: 'visibility' },
  // Página "Convenios y operativos". La ruta se mantiene en /empresas hasta acordar un cambio.
  { href: `${base}empresas`, label: 'Convenios', shortLabel: 'Convenios', icon: 'handshake' },
];

/** Una sección está activa en su ruta y en todas sus subrutas. */
export function isActive(href: string, pathname: string): boolean {
  const path = pathname.replace(/\/+$/, '') || '/';
  if (href === '/') return path === '/';
  return path === href || path.startsWith(href + '/');
}
