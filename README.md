# Óptica Erredos — sitio web

Experiencia Mobile First tipo Web App para Óptica Erredos (Puerto Montt, Chile).
**Estado: Fases 1 y 2 (preparación + App Shell).** Las páginas interiores son marcadores provisionales.

## Stack

- **Astro** (sitio estático multipágina): cada ruta genera su propio HTML indexable y se puede abrir directamente por URL.
- **Transiciones de vista de Astro (`ClientRouter`)**: navegación sin recarga completa, con sensación de app.
- **CSS propio con tokens** (custom properties). Sin framework de UI.
- **Poppins** (Google Fonts) servida desde el propio sitio vía `@fontsource/poppins`.
- **Material Symbols Rounded** (Google Fonts Icons) como SVG en línea vía `@material-symbols/svg-400`.

## Uso

```bash
npm install
npm run dev      # desarrollo en http://localhost:4321
npm run build    # genera /dist
npm run preview  # sirve /dist
```

## Estructura

```
src/
  assets/            logo
  config/
    site.ts          datos del negocio (PENDIENTES marcados)
    navigation.ts    navegación principal (fuente única)
  lib/whatsapp.ts    enlaces y mensajes contextuales de WhatsApp
  styles/
    tokens.css       color, tipografía, espacios, bordes, sombras, breakpoints
    global.css       reset, base, botones, utilidades
  layouts/BaseLayout.astro   App Shell + metadatos SEO
  components/
    shell/           Header, BottomNav, Footer, TextSizeControl
    ui/              Icon, ProvisionalBadge, PagePlaceholder
  pages/             una ruta por archivo
```

## Breakpoints

| Ancho | Uso |
|---|---|
| base (320–767 px) | móvil: barra inferior (solo aquí), header compacto |
| 48em (768 px) | tablet: menú horizontal compacto, sin barra inferior, footer en columnas |
| 64em (1024 px) | notebook/escritorio: menú horizontal completo |

## Pendientes de confirmar con el negocio

- Número de WhatsApp (`src/config/site.ts → whatsappNumber`).
- Redes sociales (`social`).
- Dominio definitivo (`astro.config.mjs → site`) para canónicas y sitemap.
- Texto de la política de privacidad.
- Logotipo en vector (SVG), versión horizontal y versión en negativo.
