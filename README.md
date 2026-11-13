# Óptica Erredos — sitio web (maqueta funcional)

Sitio Mobile First con comportamiento de Web App para Óptica Erredos (Calle Talca 118, Puerto Montt, Chile).

**Estado:** maqueta funcional completa (Inicio, Productos, Detalle de producto, Servicios con agenda, Convenios, Quiénes somos y Política de privacidad). **Los formularios NO envían nada** (`prototypeMode: true`) y el catálogo, los precios y las fotos son **provisionales**. Qué falta para publicar: ver "Antes de publicar".

Documentación detallada (léela primero):

- [`design.md`](./design.md): sistema de diseño, componentes, comportamiento responsive, accesibilidad y decisiones (incluidas las descartadas).
- [`content.md`](./content.md): contenido, reglas del negocio, alcance, datos provisionales y pendientes.

## Stack

- **Astro 7**, sitio estático multipágina: cada ruta genera su HTML y se abre directo por URL.
- **`ClientRouter` de Astro**: navegación sin recarga completa.
- **CSS propio con tokens** (custom properties, `src/styles/tokens.css`). Sin framework de UI.
- **Poppins** autoalojada con `@fontsource/poppins`. **Material Symbols Rounded** como SVG en línea (`@material-symbols/svg-400`).
- Sin base de datos, sin backend, sin carrito ni pagos. Despliegue en Vercel (rama `main`).

## Uso

```bash
npm install
npm run dev      # desarrollo en http://localhost:4321
npm run build    # genera /dist (39 páginas)
npm run preview  # sirve /dist
```

## Rutas

| Ruta | Archivo |
|---|---|
| `/` | `src/pages/index.astro` |
| `/productos`, `/productos/anteojos-opticos`, `/productos/anteojos-de-sol`, `/productos/accesorios` | `src/pages/productos/*.astro` (usan `Catalog.astro`) |
| `/productos/:slug` | `src/pages/productos/[slug].astro` (se genera desde `src/data/products.ts`) |
| `/servicios` | `src/pages/servicios.astro` (incluye la agenda) |
| `/empresas` | `src/pages/empresas.astro` (menú: "Convenios") |
| `/nosotros` | `src/pages/nosotros.astro` (menú: "Quiénes somos") |
| `/politica-de-privacidad`, `404` | `src/pages/` |

## Estructura

```
src/
  assets/              logo y fotos (provisionales, de banco de imágenes)
  config/
    site.ts            datos del negocio, horarios, agenda, prototypeMode (PENDIENTES marcados)
    navigation.ts      navegación principal (fuente única: header, barra inferior y footer)
  data/
    products.ts        catálogo de DEMOSTRACIÓN (reemplazar por el real)
    services.ts        servicios y preguntas frecuentes
    brands.ts          sin uso por ahora
  lib/
    whatsapp.ts        enlaces y mensajes de WhatsApp
    whatsappContext.ts mensaje contextual según la página
  styles/
    tokens.css         color, tipografía, espacios, radios, sombras, movimiento
    global.css         reset, base, botones, formularios, utilidades
    card-hover.css     efecto hover de tarjetas (solo web)
  layouts/BaseLayout.astro   App Shell + metadatos SEO + escala de texto
  components/
    shell/             Header, BottomNav, Footer, TextSizeControl, FloatingWhatsApp
    ui/                Icon (+ icons.ts), SectionHeader, PageBanner, Faq, LocationBlock,
                       MediaPlaceholder, ProvisionalBadge, PagePlaceholder
    product/           Catalog, ProductCard, ProductMedia, ColorSwatches, MeasureDiagram,
                       FrameIllustration
    forms/             FormBehavior (validación y envío), AppointmentForm (agenda),
                       OrganizationForm (convenios)
  pages/               una ruta por archivo; el CSS propio de cada página va en su bloque <style>
```

## Cómo trabajar sobre esto

- **Colores y tipografía:** solo los de `tokens.css` (paleta oficial: `#05596A`, `#F4CBB6`, `#FFFFFF`, `#212121`, `#BDBDBD`; Poppins). No agregar colores ni fuentes sin acordarlo.
- **Iconos nuevos:** importarlos y registrarlos en `src/components/ui/icons.ts`. Si no, el build falla.
- **Catálogo real:** reemplazar el arreglo `products` en `src/data/products.ts`. Filtros, tarjetas, contadores y fichas se generan solos. Cada variante acepta `image` como foto importada, URL o `null` (ilustración).
- **Datos del negocio** (WhatsApp, horarios, dirección, redes): `src/config/site.ts`.
- **Formularios:** `FormBehavior.astro` valida y simula el envío. Con `?simular-error=` en la URL (solo en maqueta) se prueban los estados de error.
- **Archivos largos:** `index.astro`, `AppointmentForm.astro` y `Catalog.astro` concentran datos, HTML, CSS y JavaScript. Si se van a seguir ampliando, conviene partir su JavaScript en módulos `.ts`.
- **Accesibilidad:** el objetivo de diseño es WCAG 2.2 AA; **no hay certificación**. Probar siempre a 320, 390, 768, 1024 y 1440 px y con el texto al 150 %.

## Antes de publicar (a cargo del equipo)

1. **Formularios:** conectar un servicio en `formEndpoint` (POST con JSON) o dejar `prototypeMode: false`. Mientras esté en `true`, la persona cree que su hora o solicitud quedó registrada y no es así. La agenda además no sabe qué horas ya están tomadas.
2. **WhatsApp:** completar `whatsappNumber` en `site.ts`.
3. **Dominio:** completar `url` en `site.ts` y `site` en `astro.config.mjs` (URLs canónicas, sitemap y vista previa de WhatsApp).
4. **Catálogo, precios y fotos reales:** reemplazar `products.ts` y las fotos de `src/assets`. Revisar licencias de las fotos de banco.
5. **Contenido por validar con el negocio:** ver `content.md` (condiciones de la garantía, atención desde 10, 11 o 12 años, supuestos de la agenda, textos de preguntas frecuentes y de errores, "tecnóloga médica", horarios del sábado).
6. **Política de privacidad:** revisar el texto.
7. **Logo:** pendiente versión vectorial, horizontal y en negativo.
8. **Rutas:** decidir si `/empresas` pasa a `/convenios` y `/nosotros` a `/quienes-somos`.
9. **QA pendiente (Fase 8):** lectores de pantalla, dispositivos reales, Safari y Firefox, auditoría de contraste con herramienta.
