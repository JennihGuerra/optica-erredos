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
export const mainNav: NavItem[] = [
  { href: '/', label: 'Inicio', shortLabel: 'Inicio', icon: 'home' },
  { href: '/nosotros', label: 'Quiénes somos', shortLabel: 'Quiénes somos', icon: 'storefront' },
  { href: '/productos', label: 'Productos', shortLabel: 'Productos', icon: 'eyeglasses' },
  { href: '/servicios', label: 'Servicios', shortLabel: 'Servicios', icon: 'visibility' },
  // Página "Convenios y operativos". La ruta se mantiene en /empresas hasta acordar un cambio.
  { href: '/empresas', label: 'Convenios', shortLabel: 'Convenios', icon: 'handshake' },
];

/** Una sección está activa en su ruta y en todas sus subrutas. */
export function isActive(href: string, pathname: string): boolean {
  const path = pathname.replace(/\/+$/, '') || '/';
  if (href === '/') return path === '/';
  return path === href || path.startsWith(href + '/');
}
