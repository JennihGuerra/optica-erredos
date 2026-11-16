# design.md — Óptica Erredos: sistema de diseño y comportamiento de interfaz

> **Para qué sirve este archivo.** Reúne todo lo visual y de interacción: paleta, tipografía, tokens, componentes, patrones de página, responsive, accesibilidad y las decisiones de diseño (incluidas las descartadas). Está pensado para que otra persona o IA pueda continuar el diseño sin las conversaciones previas. El contexto de negocio, contenido y alcance está en `content.md`.
>
> **Última actualización:** 16-11-2026.
>
> **Regla de mantenimiento (obligatoria).** Cada cambio visual o de interacción que pida Jennih se refleja aquí en la misma entrega (sección afectada + línea en el "Registro de cambios"). Los valores reales viven en el código (`src/styles/tokens.css` y los componentes); si este archivo y el código difieren, **manda el código** y se corrige este archivo.

---

## 1. Principios

1. **Mobile First, comportamiento de Web App:** se diseña primero a 390 px; en escritorio se **recompone** (no solo se estira). Navegación inferior en móvil; menú horizontal desde 768 px.
2. **Conversión sencilla:** la acción principal siempre a la vista (consultar por WhatsApp, agendar hora, solicitar información). Sin carrito ni pagos.
3. **Estética:** moderna, profesional, cercana, limpia, minimalista, comercial, consistente, accesible. **Evitar** diseños genéricos, exceso de sombras, gradientes innecesarios, animaciones excesivas y tarjetas recargadas.
4. **Predominio del blanco;** azul petróleo para identidad y jerarquía; coral para acciones; negro carbón para legibilidad; gris para elementos secundarios.
5. **Maqueta limpia (desde 16-11-2026, pedido de Jennih):** la interfaz ya no muestra etiquetas de "por confirmar", "provisional" ni "de ejemplo". Lo pendiente de validar vive solo en `content.md` §11. Aviso de maqueta que sí permanece: los formularios en modo demostración.
6. **No sacrificar usabilidad por estética** ni SEO por imitar una app nativa.

Anchos de referencia: **320** (móvil pequeño), **390** (móvil principal), **768** (tablet), **1024** (notebook), **1440** (escritorio).

---

## 2. Identidad visual

### 2.1 Paleta oficial (no agregar colores sin justificación)

| Token | Hex | Nombre | Uso |
|---|---|---|---|
| `--color-primary` | `#05596A` | Erre Dóos Azul | Identidad, fondos destacados (heros internos, footer, banner), botón principal, estados activos |
| `--color-accent` | `#F4CBB6` | Erre Dóos Coral | CTA y acentos (botón de contacto, píldora activa, iconos de acceso, bloque de promociones) |
| `--color-bg` | `#FFFFFF` | Lienzo Claro | Fondo principal |
| `--color-text` | `#212121` | Texto Principal | Títulos y texto |
| `--color-border` | `#BDBDBD` | Detalles Sutiles | Bordes y divisores decorativos |

### 2.2 Derivados funcionales (tonos de la paleta, no colores de marca nuevos)

| Token | Valor | Para qué existe |
|---|---|---|
| `--color-primary-hover` | `#044552` | Hover/pressed del azul |
| `--color-primary-tint` | `#E6EEF0` | Azul al 10 % sobre blanco: fondos suaves, hover de botones outline |
| `--color-accent-hover` | `#EFBBA1` | Hover/pressed del coral |
| `--color-accent-tint` | `#FDF5F0` | Coral al 25 %: fondos suaves |
| `--color-text-muted` | `#5C5C5C` | Texto secundario (6,7:1 sobre blanco) |
| `--color-border-strong` | `#757575` | Bordes de campos y controles (4,6:1, WCAG 1.4.11) |
| `--color-on-primary` | `#FFFFFF` | Texto sobre azul (7,9:1) |
| `--color-on-accent` | `#212121` | Texto sobre coral (10,8:1) |

Otros valores literales en código (documentados por contraste):
- Filtro del acceso rápido con foto: `rgb(3 50 60 / 0.75)` (azul petróleo muy oscuro) → hover `0.85`; texto blanco, contraste mínimo estimado 6,3:1 sobre las zonas más claras de la foto.
- Fondo neutro del placeholder: `#f4f4f4`.
- Colores de muestra de los marcos (`frameColors`, solo para swatches e ilustraciones): Negro `#212121`, Café `#6b4226`, Azul `#1f4e8c`, Rojo `#b3261e`, Transparente `#c3d2d8`, Dorado `#c9a227`, Plateado `#a9afb5`, Otros `#4e7a5a`. **No son colores de interfaz.**

### 2.3 Reglas de contraste
- **Texto blanco sobre coral NO cumple (1,5:1).** Todo botón coral lleva texto `#212121`.
- Texto blanco solo sobre azul petróleo (o sobre su filtro oscuro).
- El estado de un control nunca depende solo del color: se suma icono, peso, línea, borde o forma.
- Los valores de contraste citados son **calculados, no medidos con herramienta**; WCAG 2.2 AA es objetivo de diseño, **sin afirmar certificación**.

### 2.4 Logo
`src/assets/logo.png` (1277×915, RGBA; logo apilado de 16-11-2026, más nítido que el anterior). En header **mantiene el tamaño anterior**: altura = `--header-h` − 1 rem (40 px en móvil, sin reglas por rango); `loading="eager"`, densidades 1x/2x. En footer: ancho 132 px sobre placa blanca. **Falta** la versión en blanco del footer (la entregará Jennih) y la vectorial. Favicon: `public/favicon.png` 96×96.

---

## 3. Tipografía

- Familia: **Poppins únicamente**, autoalojada con `@fontsource/poppins` (latin 400/500/600/700). Fallback: `system-ui, -apple-system, 'Segoe UI', sans-serif`.
- Pesos: 400 texto, 500 énfasis/etiquetas, 600 títulos de tarjeta y botones, 700 títulos de sección y h1.
- Interlineado: `--leading-tight 1.2` (títulos), `--leading-normal 1.6` (cuerpo). Los títulos usan `text-wrap: balance` y `overflow-wrap: anywhere`.
- Texto base de referencia: **16 px**.

| Token | Valor |
|---|---|
| `--text-xs` | 0.75rem (12) |
| `--text-sm` | 0.875rem (14) |
| `--text-base` | 1rem (16) |
| `--text-lg` | 1.125rem (18) |
| `--text-xl` | 1.25rem (20) |
| `--text-2xl` | clamp(1.375rem, 1.25rem + 0.6vw, 1.75rem) → 22–28 |
| `--text-3xl` | clamp(1.75rem, 1.45rem + 1.5vw, 2.5rem) → 28–40 |

h1 = 3xl/700; h2 = 2xl/700; h3 = xl/600. Todo en `rem`, de modo que **responde al control de tamaño de texto** (§9).
Excepciones con tope en píxeles (para que no se rompan con texto ampliado): etiquetas de la barra inferior `min(0.75rem, 3.4vw, 16px)`; valor del control de texto `min(--text-sm, 16px)`; etiqueta "Imagen provisional" `min(--text-xs, 14px)`; título del hero móvil `min(--text-3xl, 9.5vw)`.

## 4. Tokens de layout, forma y movimiento

| Grupo | Tokens |
|---|---|
| Espacios (base 4 px) | `--space-1` 0.25rem · `-2` 0.5 · `-3` 0.75 · `-4` 1 · `-5` 1.5 · `-6` 2 · `-7` 3 · `-8` 4 |
| Radios | `--radius-sm` 8px · `-md` 12px · `-lg` 16px · `-pill` 999px |
| Sombras (solo 2, sutiles) | `--shadow-sm: 0 1px 2px rgb(33 33 33 / .08)` · `--shadow-md: 0 4px 16px rgb(33 33 33 / .12)` (se usa en el control de texto y en el bottom sheet de filtros) |
| Contenedor | `--container-max: 1200px`; `.container` = ancho 100 % + `padding-inline: --gutter` |
| Gutter | 1,25 rem (base; antes 1 rem, 16-11-2026) · 1.5 rem (≥768) · 2 rem (≥1024) |
| Aire entre secciones | `--section-gap`: 4 rem (base; antes 3 rem) · 4,5 rem (≥768) · 5,5 rem (≥1024; antes 4 rem). Las bandas de color (convenios de Inicio, agenda, cómo funciona, forma de trabajar) usan `--section-gap − 0.5rem` de relleno vertical |
| Táctil | `--touch-target: max(2.75rem, 44px)` (mínimo para todo lo pulsable) |
| Header | `--header-h: clamp(56px, 3.5rem, 72px)`; ≥1024: `clamp(72px, 4.5rem, 96px)` |
| Barra inferior | `--bottom-nav-h: clamp(64px, 4.25rem, 84px)` + `--safe-bottom` (área segura iOS/Android) |
| Movimiento | `--duration-fast 150ms` · `--duration-base 220ms` · `--easing cubic-bezier(.2,0,0,1)` |
| Capas | `--z-header 100` · `--z-bottom-nav 100` · `--z-text-size 90` · skip-link 1000 |

Secciones: `padding-top: var(--section-gap)` (ver tabla; ya no `--space-7`/`--space-8`). `SectionHeader` deja `--space-6` (2 rem) bajo el título. En móvil las rejillas de tarjetas (beneficios, categorías, destacados, servicios, públicos, alternativas) separan sus tarjetas con `--space-4` o más.
Sección-estándar: `container section` + `SectionHeader` (título h2, descripción opcional, enlace "Ver todos →" opcional, etiqueta provisional opcional).

## 5. Breakpoints y comportamiento

| Ancho | Qué cambia |
|---|---|
| base (320–767) | Barra inferior fija (5 accesos), header compacto (logo + "Contáctanos"), hero de Inicio en columna (foto arriba, texto debajo), grillas de 1–2 columnas, filtros en bottom sheet |
| `48em` (768) | **Se oculta la barra inferior**; aparece el menú horizontal compacto en el header; footer en columnas; hero con foto a todo el ancho y texto a la izquierda; gutter 1.5 rem; productos en 3 columnas |
| `64em` (1024) | Menú completo; header más alto; filtros en barra lateral (16 rem) con aplicación instantánea; gutter 2 rem |
| `90em` (1440) | Contenedor limitado a 1200 px; catálogo a 3 columnas (máximo) |

Columnas del catálogo por ancho: **2 / 2 / 3 / 3 / 3** (320/390/768/1024/1440); máximo 3 por fila para tarjetas más amplias. El desborde horizontal **no está permitido** en ningún ancho ni nivel de texto.

---

## 6. Iconografía

- **Material Symbols Rounded**, SVG en línea desde `@material-symbols/svg-400` (`?raw`), registrados en `src/components/ui/icons.ts` (tipo `IconName`). Componente `Icon.astro`; clase `.icon` = 1.5 rem.
- **No mezclar bibliotecas ni usar emojis como iconos funcionales.**
- Para usar un icono nuevo: importarlo en `icons.ts` y agregarlo al registro (si no, el build falla con "reading 'replace'").
- Registrados hoy: person, precision_manufacturing y workspace_premium (16-11-2026), home, eyeglasses, visibility, apartment, storefront, search, close, chat, schedule, construction, directions, sunny, event_available, handshake (+ `handshake-fill`), explore, widgets, image, sell, groups, chevron_right/left, tune, check, search_off, arrow_back, build, info, account_balance, school, diversity_3, edit_note, fact_check, forum, error, check_circle, hearing, task_alt, map, pause, play_arrow, y las variantes `-fill` de la barra inferior. Además text_increase, text_decrease, restart_alt, accessibility_new, arrow_forward, location_on, apartment, groups, etc. (ver `icons.ts` para la lista vigente).
- Barra inferior: icono contorno (inactivo) / relleno `-fill` (activo).

---

## 7. Componentes

### 7.1 Botones (`global.css`)
Base `.btn`: mín. alto táctil, padding `--space-2 × --space-5`, borde 2 px transparente, radio `--radius-md`, texto 600, `position: relative`, centrado, icono opcional a la izquierda con `gap --space-2`.
- `.btn--primary`: fondo azul, texto blanco; hover azul oscuro. **Acción principal** (ver productos, agendar, enviar).
- `.btn--accent`: fondo coral, **texto negro**; hover coral oscuro. **CTA de contacto/WhatsApp** y acción destacada sobre fondos azules.
- `.btn--outline`: borde azul, texto azul; hover tinte azul. Acción secundaria.
- `.hero__secondary` (heros azules internos): borde blanco, texto blanco; hover blanco al 12 %.
- `.icon-btn`: cuadrado táctil, sin borde, hover tinte.
- Regla: **dos botones de una misma acción van uno al lado del otro** (nunca uno sobre otro) cuando caben; en móvil se compactan (padding y tamaño menores). En <30 em los botones de heros internos pueden ocupar el ancho completo.
- Enlaces a WhatsApp abren en pestaña nueva con texto oculto "(se abre en una pestaña nueva)".

### 7.2 Formularios
- `.field`: etiqueta (500) + control + error. Control: alto táctil, borde 1 px `--color-border-strong`, radio md. `(opcional)` en `--text-sm` gris.
- Error: borde 2 px negro + icono + texto (no solo color); resumen de errores arriba con `role="status"`/foco; campos con `aria-invalid`.
- Opciones de radio como tarjetas (`.form__option`): seleccionado = borde azul + fondo tinte + `inset` 1 px. (Ya no se usan en Convenios: "Tipo de solicitud" es un `select.field__control` con opción inicial "Elige una opción", igual que el rango de edad de la agenda; el estilo queda disponible.)
- **Confirmación de correo (Convenios y agenda):** campo `data-rule="match"` con `autocomplete="off"` y el mismo ejemplo de correo que el campo original. Se compara al salir del campo (aunque aún no se envíe), se re-compara si cambia el correo original y el error se limpia al coincidir. En Convenios el orden en 2 columnas es: nombre | organización · correo | confirmación · teléfono | cargo · participantes | tipo de solicitud.
- **Ejemplos en los campos:** placeholder con prefijo "Ej.: " en gris `--color-text-muted` (nombre, organización, correo, confirmación, teléfono, cargo, participantes y mensaje en Convenios; nombre, correo, confirmación y teléfono en la agenda). El placeholder no reemplaza la etiqueta visible. Las listas usan la opción inicial "Elige una opción".
- **Error en filas de 2 columnas (≥768 px):** el mensaje se muestra **entre la etiqueta y el control** (no debajo) para que los controles de la fila sigan alineados abajo cuando solo un campo tiene error.
- Grillas de formulario: 1 columna en móvil; `auto-fit minmax(min(100%, 16rem), 1fr)` desde 768, con `.form__wide` a ancho completo.
- Botón de enviar: `min-width: min(12rem, 100%)`; a ancho completo bajo 30 em; deshabilitado muestra "Enviando…" con cursor de progreso.
- Estado final (`.form__status`): caja con borde 2 px, `aria-live="polite"`.
- Nota/etiqueta de demostración (`.form__demo`): borde punteado; solo aparece con `prototypeMode: false` y sin endpoint.

### 7.3 Etiquetas de contenido provisional
- `ProvisionalBadge`: componente que **ya no se usa** en ninguna página (etiquetas retiradas el 16-11-2026); se deja en el repo por si se necesita de nuevo (no se elimina sin consultar).
- `MediaPlaceholder`: caja con ratio configurable e icono al 55 % de opacidad (sin etiqueta visible desde 16-11-2026); tonos `primary` (tinte azul), `accent` (tinte coral), `neutral`.

### 7.4 Tarjeta de producto (`ProductCard`)
Imagen (`ProductMedia`: foto de la variante o ilustración SVG por forma y color) con insignia de promoción si existe; muestras de color (`ColorSwatches`, botones `aria-pressed`); tipo; nombre (enlace al detalle); marca; precio (en **anteojos ópticos siempre "Desde $X"**; sol y accesorios, precio simple; o "Consultar precio"); **dos botones** (desde 13-11-2026): "Ver producto" (azul sólido, abre la ficha; conserva `?color=`) y "Consultar" (contorno azul, abre WhatsApp con el modelo y color), mismo patrón primario + outline que los heros. Van lado a lado y se apilan en columna si no caben (móvil de 320–390 px o texto ≥125 %); `flex: 1 1 7.5rem`, sin desborde. Cada tarjeta es independiente (un listener delegado). Versión `compact` para la grilla de 2 columnas y relacionados.
- **Fotos de stock (desde 12-11-2026):** las tarjetas y el detalle muestran fotos provisionales de Pexels (`variant.image` acepta `ImageMetadata`, URL `string` o `null`), recortadas con `object-fit: cover` (1/1 en móvil, 4/3 desde 768). **Sin etiqueta "Imagen referencial"** (retirada el 16-11-2026 a pedido de Jennih; ya no existe `hasStock` en `ProductMedia`). Si `image` es `null` vuelve la ilustración con su etiqueta "Imagen provisional".
- Ilustraciones `FrameIllustration` (hoy sin uso mientras haya fotos): SVG de 200×120 con contorno de lente según forma (Redondo, Cuadrado, Rectangular, Aviador, Cat Eye, Geométrico), color vía `--frame-color`; los de sol llevan lente oscuro. Siempre con etiqueta "Imagen provisional".

### 7.4b Efecto hover de tarjetas (solo web)
Archivo `src/styles/card-hover.css` (importado en `BaseLayout`). Al pasar el mouse, la tarjeta **sube 4 px**, el borde pasa a azul (`--color-primary`) y aparece `--shadow-md`, con transición de `--duration-base`. **Solo se aplica con `(hover: hover) and (pointer: fine)` y desde 768 px**: en móvil y táctil no hay efecto. Con `prefers-reduced-motion` no se desplaza. Tarjetas incluidas: producto (`.product-card`), servicios de Inicio y de Servicios (`.services li`, `.service`), categorías, beneficios, accesos rápidos, públicos y alternativas de Convenios . Para sumar una tarjeta nueva, agregar su selector a las tres listas del archivo (`:not(#_)` sube la especificidad sin `!important`).

### 7.5 Catálogo
- **Banner de entrada** (`PageBanner.astro`: foto a todo el ancho + h1 + intro, mismo patrón que el hero de Inicio sin carrusel; móvil = foto arriba fundida a blanco y texto debajo, ≥768 = degradado blanco a la izquierda y foto a la derecha, alto mín. 30 rem (igual que Quiénes somos; foto móvil `clamp(210px, 66vw, 320px)`); props `title`, `text`, `kicker`, `image`, `imagePosition`; foto provisional `hero-productos.jpg`), pestañas de categoría (Todos / Anteojos ópticos / Anteojos de sol / Accesorios; sin aviso de catálogo de demostración) (`aria-current`), barra de acciones: botón **Filtrar** (con insignia con la cantidad de filtros activos) + selector **Ordenar por**, chips de filtros activos (con quitar), contador "N productos", grilla, "Mostrando X de Y" + **Ver más productos**, estado vacío, bloque de ayuda con WhatsApp.
- **Móvil/tablet:** filtros en **bottom sheet** (modo borrador): se aplican con "Ver N productos", se descartan al cerrar sin aplicar; botones "Limpiar filtros" y "Ver N productos". **Escritorio (≥1024):** barra lateral de 16 rem, aplicación instantánea.
- Rejilla de productos: móvil `gap: --space-4` vertical y `--space-3` horizontal; mínimo por columna `8rem` (con el gutter de 1,25 rem a 320 px sigue habiendo dos columnas; con texto muy ampliado baja a una).
- Grupos de filtro con casillas (`.check`) en rejilla fluida; precio con dos campos mín/máx (placeholder = valores reales).

### 7.6 Detalle de producto
Enlace "Volver a productos" (móvil) y migas de pan (≥768); **dos columnas** desde 768 px (galería sticky | información), una columna en móvil.
- **Galería:** marco con borde gris y radio lg (foto 1/1 en móvil, 4/3 desde 768, sin etiqueta "Imagen referencial" desde el 16-11-2026) + **miniaturas** de 4,5 rem (`aria-pressed`, borde azul en la activa) que cambian la foto principal.
- **Información:** "Marca: X", h1, "Código: …" (pequeño, gris), promoción, precio (xl/700), aviso de demostración, **etiqueta de garantía** (`verified_user`, fondo tinte azul, texto azul 600) "Garantía de 6 meses", selector de color, botón coral grande de WhatsApp + nota "Este producto no se compra por la web…", **Características** como lista de definiciones y **Descripción** (provisional).
- **Franja de garantía** a ancho de contenedor (borde superior e inferior gris, icono azul, texto centrado).
- **Guía de medidas** (`MeasureDiagram.astro`): bloque con fondo `--color-primary-tint` y radio lg; título azul centrado; rejilla `auto-fit minmax(min(100%, 9rem), 1fr)` con 4 esquemas SVG (frente con cota de altura, ancho, puente; varilla de lado) en gris `--color-border-strong` con flechas azules + texto "Altura del marco: **37 mm**". Decorativos (`aria-hidden`).
- **Productos relacionados:** 3 tarjetas completas; **móvil = carrusel horizontal con scroll-snap** (15 rem / 78 vw, la siguiente asoma), ≥768 = 3 columnas.
- Referencia visual usada: ficha de otra óptica; se adaptó a la paleta, tipografía y componentes de Erredos y se eliminaron elementos de compra online.

### 7.7 Agenda de atención visual (`AppointmentForm`)
- **Dos pasos** + pantalla final (el paso de revisión se eliminó el 13-11-2026). Indicador de progreso (`ol.progress`): círculo numerado de 2,25 rem; paso actual relleno azul con anillo tinte y etiqueta en negrita (`aria-current="step"`), pasos completados con **check** y borde azul, pendientes en gris; línea de unión entre pasos. El estado se anuncia en texto oculto ("paso actual/completado/pendiente"). Se oculta en la pantalla final.
- Paso 1 "Selecciona fecha y hora": encabezado de semana con flechas (`icon-btn`), **siete botones de día** (seleccionado: relleno azul + barra coral; sin horas: borde discontinuo y raya), **leyenda** de tres estados (forma + texto), "Horas para el {día}" con grupos Mañana y Tarde (`aria-pressed`), pie con "Elegiste: …" y **Continuar** (`aria-disabled` hasta elegir hora).
- Paso 2 "Completa tus datos": resumen azul con **Cambiar**, campos con etiqueta visible (correo y "Confirma tu correo" lado a lado desde 768 px, regla `data-rule="match"`; teléfono a ancho completo) y ejemplo en placeholder (color `--color-text-muted`), aviso de edad con borde azul; pie con **Volver** (outline) y **Solicitar hora** (primario; envía la solicitud). Al enviar: botón inactivo con indicador giratorio ("Enviando…"; el giro se anula con "reducir movimiento"). No hay paso de revisión: tras enviar se muestra la reserva.
- Final "¡Tu hora quedó agendada con éxito!": icono check, línea "Te enviamos la confirmación a [correo]" y una **tarjeta tipo correo** (`.booking-ui__mail`: blanca, borde gris con borde izquierdo azul de 4 px, asunto en azul 600, saludo, día y hora destacados con icono `event_available`, dirección y aviso por WhatsApp) en lugar del resumen de datos; única acción **Solicitar otra hora** (se quitó el botón de WhatsApp el 13-11-2026).
- Foco programático al encabezado de cada paso (`tabindex="-1"`). Mecánica: el paso 2 envía el `<form>` y `FormBehavior` valida y hace el envío; al terminar emite `form:success` y se muestra la pantalla final (`form:valid` sigue disponible pero la agenda ya no lo usa).
- La introducción usa una sola nota (la edad mínima), en tarjeta blanca destacada.

### 7.8 FAQ (`Faq`)
Acordeones agrupados por tema (`details/summary`), operables con teclado. Respuestas pendientes muestran texto neutro + "Por confirmar".

### 7.9 Ubicación (`LocationBlock`)
Título, dirección, horarios (de `site.hours`), un solo botón "Cómo llegar" (primario; se quitó "Escribir por WhatsApp" el 13-11-2026 por redundar con el botón flotante) + **mapa de Google Maps incrustado** (`iframe` en `.location__map`, ratio 4/3, mín. 16 rem de alto, borde gris y radio lg, `loading="lazy"`). La foto del local `local-erredos.jpg` ya no se usa en este bloque (archivo conservado). En Quiénes somos el mapa de Google se muestra **de inmediato** (iframe con `loading="lazy"`, mín. 20 rem de alto; antes era bajo demanda por rendimiento y privacidad).

### 7.10 Ventana de confirmación del formulario de Convenios (`OrganizationForm`)
`<dialog class="success-modal">` nativo abierto con `showModal()` (foco atrapado, Escape y clic fuera la cierran, fondo `rgb(33 33 33 / .55)`). Tarjeta blanca centrada (ancho `min(26rem, 100% − 2rem)`, borde 2 px azul, radio lg, `--shadow-md`), icono `check_circle` azul de 3,5 rem, título en `--text-xl`/700 ("¡Tu solicitud ha sido recibida exitosamente!"), texto gris ("El equipo de Óptica Erredos se pondrá en contacto contigo a la brevedad posible.") y botón primario **"Salir"** (enlace a `/`). Al abrirse, el foco va al título. Se activa con el evento cancelable `form:success` de `FormBehavior` (`preventDefault` evita el mensaje en línea). Verificado a 390 y 1440 px sin desborde.

---

### 7.12 Valor del servicio (`ServicePrice`)
Bloque `.service-price` (`components/ui/ServicePrice.astro`): fondo `--color-primary-tint`, **barra izquierda azul de 4 px**, radio sm. Línea 1: icono `sell` + "Valor de la atención: **$10.000**" (`--text-lg`, monto en azul/700). Línea 2: icono `check_circle` + beneficio en `--text-sm`/500 ("¡Atención gratis al comprar tus lentes ópticos en Erredos!"). El beneficio se distingue por icono y texto, no solo por color. Datos en `services.ts` → `pricing`. Se usa en la tarjeta de Atención visual de Inicio y de Servicios.
**Letra pequeña en heros (16-11-2026):** además, la versión corta (`pricing.fine`: "Valor de la atención: $10.000. Gratis al comprar tus lentes ópticos en Erredos.") aparece como línea de `--text-xs`, `#212121`, `line-height 1.5`, máx. 38ch, 0,75 rem sobre los botones (antes del llamado a la acción) en la diapositiva "Atención visual" del hero de Inicio (`.hero__fine`) y en el banner de Servicios (`.banner-fine`). Es texto discreto, sin recuadro, que se lee sobre el blanco del degradado (móvil: sobre fondo blanco, bajo la foto). Sigue el control de tamaño de texto.

### 7.11 Estados de error de envío (`FormBehavior`, `AppointmentForm`)

Bloque `.form__status--error`: borde 2 px de texto con **barra izquierda gruesa** (no depende solo del color), título en negrita, texto y fila de acciones (`.form__status-actions`, envuelve en móvil). Botón primario **"Reintentar"** (reenvía con `requestSubmit`, conserva lo escrito) y botón coral de WhatsApp. `role="status"` con foco al aparecer; en "datos rechazados" el foco va al campo con `aria-invalid` y su mensaje `.field__error`. Siete casos: red, tiempo, servidor, validación, límite, conflicto, genérico (textos en content.md §7). El **conflicto 409** de la agenda (`form:conflict`) devuelve al paso 1, tacha la hora tomada, limpia la elección y muestra un aviso `role="alert"` sobre "Todavía no eliges una hora". Simulación solo en maqueta con `?simular-error=`. Verificado a 390 px.

## 8. App Shell

### 8.1 Header (sticky, borde inferior gris)
Móvil: logo a la izquierda + botón **"Contáctanos"** a la derecha, con el **mismo estilo gráfico del botón flotante** (§8.4b): píldora coral, círculo azul con icono `chat` blanco, texto en 700, anillo blanco y sombra; alto táctil mín. (se reduce a 14/16 px de letra según ancho). ≥768: logo | menú | botón. Menú de escritorio: enlaces 500, con **línea inferior de 3 px** como indicador (activo = azul, 600, línea completa; hover = línea al 40 %). Tablet (768–1023): menú más compacto (14 px, padding menor). Con texto ≥125 % (o 112 % en 768–1152 px) el menú **baja a una segunda fila**; en móvil muy angosto el botón queda solo con icono (mantiene `aria-label`).

### 8.2 Barra inferior (solo <768 px)
Fija, 5 columnas iguales, ancho máx. 40 rem, fondo blanco con borde superior gris, respeta `safe-area`. Cada ítem: icono en **píldora** + etiqueta (hasta 2 líneas, centrada, `text-wrap: balance`), alineados arriba para que los iconos queden a la misma altura aunque "Quiénes somos" use dos líneas. **Activo:** icono relleno + píldora coral + etiqueta en 600 + color azul + `aria-current="page"`. Hover: píldora tinte azul.

### 8.3 Footer
Fondo azul, texto blanco. Tres columnas desde 768 (marca/descripción · secciones · contacto). Sin botón de WhatsApp (se quitó el 13-11-2026). Franja legal con © y política de privacidad. Horarios desde `site.hours`.

### 8.4 Control de tamaño de texto (accesibilidad)
Pestaña fija en el borde derecho (azul, esquinas redondeadas a la izquierda, icono `accessibility_new`), **más grande que los demás controles: `--toggle: clamp(54px, 3.5rem, 62px)` con icono al 58 % de su tamaño** (antes 44–52 px); el tope en px evita que se deforme al ampliar el texto. Los botones del panel siguen en `--control` (44–52 px). Móvil: **sobre la barra inferior y sobre el botón flotante de WhatsApp** (se reserva `3.75rem` para el alto de la píldora, que con texto ampliado pasa a 2 líneas), sin taparlos; ≥768: centrada verticalmente. Al abrir, panel con: aumentar (`text_increase`), valor "NNN %", disminuir, restablecer. 6 niveles: **87,5 / 100 / 112,5 / 125 / 137,5 / 150 %** (por defecto 100). Implementación: `--text-scale` en `<html>` + `html { font-size: calc(100% × var(--text-scale)) }`; persiste en `localStorage` (`erredos:text-scale`); script en línea aplica el valor antes del primer pintado y en cada transición de página. Botones con `aria-disabled` (no `disabled`) para no perder el foco; Escape cierra y devuelve el foco; etiquetas accesibles.

### 8.4b Botón flotante de WhatsApp (`FloatingWhatsApp.astro`)
Píldora coral (`--color-accent`, texto `#212121`, **700**, `--text-base` móvil / `--text-lg` desde 768, alto mín. 3,25–3,5 rem; no el verde de WhatsApp) con **círculo azul `--color-primary` con el icono `chat` en blanco** a la izquierda, **anillo blanco de 3 px + sombra marcada** (se separa del fondo claro y del azul) y el texto "Haz aquí tus consultas"; un **halo coral late 3 veces** al cargar (retraso 1,5 s; sin animación con `prefers-reduced-motion`) y sube 2 px al pasar el mouse, fija en la esquina inferior derecha en todas las páginas; abre WhatsApp con el mensaje general. Móvil: sobre la barra inferior (`right 0.75rem`); el control de tamaño de texto sube para quedar encima de ella. ≥768: `right/bottom 1.5rem`; el control de texto queda centrado a la derecha sin chocar. Capa `--z-float: 95`. Tamaño de letra con tope en px; `max-width` evita desborde en 320 px.

### 8.5 Transiciones
`ClientRouter` de Astro (navegación sin recarga) con prefetch al pasar el cursor. Transiciones sutiles; respetan `prefers-reduced-motion`.

---

## 9. Accesibilidad (objetivo WCAG 2.2 AA; sin certificación declarada)

- **Foco visible:** `outline: 3px solid #212121`, offset 2 px; sobre azul (`.on-primary`) el contorno es blanco. Enlace "Saltar al contenido principal" al inicio.
- **Teclado:** todo operable; carrusel, agenda, acordeones, filtros y control de texto probados con teclado.
- **Semántica:** un `h1` por página, jerarquía h1>h2>h3, `main#contenido`, `nav` etiquetadas (dos `nav` principales —header y barra inferior— con el mismo nombre porque nunca coinciden en pantalla), listas con `role="list"`, `aria-current` en navegación, `aria-live` en estados.
- **Carrusel:** `aria-roledescription` carrusel/diapositiva, `inert` en las ocultas, pausa visible, `aria-live` al estar en pausa.
- **Áreas táctiles** ≥ 44 px. **No depender solo del color.** Mensajes de error junto al campo y resumen.
- **Texto ampliado:** hasta 150 % sin desborde en 320 px — técnicas usadas: `grid-template-columns: minmax(0,1fr)`, `min-width: 0`, `overflow-wrap: anywhere` en títulos, rejillas `auto-fit/auto-fill` con `min(100%, Xrem)`, topes en px en etiquetas pequeñas.
- **No verificado aún:** lectores de pantalla reales, dispositivos físicos, Safari/Firefox.

---

## 10. Patrones de página

### 10.1 Hero de página interior — Quiénes somos, Productos, Servicios y Convenios usan el banner con foto (§10.1b, `PageBanner`); el hero azul con marcador ya no se usa
Fondo azul, texto blanco (`.on-primary`), kicker opcional, h1, párrafo, botones: **primario coral** + **secundario con borde blanco**; imagen provisional 4/3 (a la derecha desde 768; **oculta en móvil** en Servicios para hero compacto). Desde 1024 en dos columnas.

### 10.1b Hero de Quiénes somos (banner con foto)
Mismo patrón que el carrusel de Inicio, **sin carrusel**: foto `hero-quienes-somos.jpg` (740×493) a todo el ancho con `object-position center 35%`; **móvil** = foto arriba (alto `clamp(210px, 66vw, 320px)`) fundida a blanco y texto debajo; **≥768** = foto de fondo con degradado lineal blanco a la izquierda (88 % bajo el texto → 0) y texto oscuro (kicker azul, h1 `--text-3xl`/700, párrafo `--text-lg`), botones lado a lado: primario azul "Conoce nuestros servicios" + outline azul "Visítanos"; alto mínimo 30 rem. Foto provisional de banco.

### 10.2 Hero de Inicio — carrusel (3 entradas)
Estructura: `.hero` > `.hero__track` (scroll-snap horizontal, sin barra) > 3 `.hero__slide` (foto + texto) + controles.
- **Logo en el título (16-11-2026, ajustado el mismo día):** la entrada 1 muestra el título en dos líneas fijas (`.hero__line`, bloque) y el logo horizontal **sin la palabra "ÓPTICA"**, solo "ERREDOOS" (`logo-horizontal.png`, 1400×192; la versión con "ÓPTICA" 1400×284 queda como respaldo fuera del proyecto) en una tercera línea: `.hero__title:has(.hero__title-end)` usa `width: fit-content` y el logo `width: 100%`, así comparte borde izquierdo y derecho con la línea más larga ("Encuentra tus próximos"); `alt="Erredos"` (la palabra "óptica" va escrita en el título). En 320 px con texto al 150 % la primera línea baja sola (sin `nowrap`) y el logo sigue el ancho del bloque. Medidas del logo: 288×40 (320 a 150 %), 356×49 (390), 425×58 (768), 472×65 (1024), 490×67 (1440).
- **Texto:** kicker (azul, 600), h1/h2, párrafo (`--text-lg`, máx. 45ch), botones lado a lado (principal azul + outline azul). **Letra pequeña opcional** (`slide.fine` → `.hero__fine`, 16-11-2026): línea de `--text-xs` antes de los botones (`.hero__fine + .hero__actions` reduce el margen a `--space-3`); hoy la usa solo la diapositiva "Atención visual" con el valor de la atención (§7.12).
- **Móvil:** foto arriba (alto `clamp(210px, 66vw, 320px)`, `object-position` por slide), su borde inferior se funde a blanco (degradado de 6 rem: 0 → 0,9 a 70 % → 1), el texto sube 1,75 rem sobre la foto; botones compactos (`--text-sm`, padding `--space-3`) en una fila.
- **≥768:** foto a todo el ancho (`inset: 0`), **degradado lineal blanco a la izquierda** cuya longitud sigue al texto: `--hero-text-end = max(gutter, (100% − 1200px)/2) + 32rem`; paradas: blanco 88 % hasta `end − 6rem` → 55 % en `end + 4rem` → 0 en `end + 18rem`. El texto (máx. 32 rem) queda centrado verticalmente, alto mínimo 34 rem; los controles se colocan abajo a la izquierda.
- **Controles:** píldora azul sólida con anterior, puntos (el activo se alarga a 26 px), siguiente y pausar/reanudar; ocultos hasta que el JS activa el carrusel.
- **Encuadres:** slide 2 `62% 18%` (las personas deben ser protagonistas); slide 1 `center 65%`; slide 3 por defecto.
- **Fotos:** `hero-productos.jpg` (2048×1367), `hero-atencion-visual.jpg` (1000×667), `hero-convenios.jpg` (1024×683) servidas con `astro:assets` (anchos 640/1024/1600/original).
- Historial de iteraciones y por qué se descartaron: ver §12.

### 10.2b Franja "Entrega el mismo día" (Inicio)
Banda azul `--color-primary` a ancho completo, justo bajo el hero (`.same-day`, `on-primary`). Icono `schedule` en círculo coral con el reloj azul (2,75 rem móvil / 3,5 rem desde 768), título 700 (`--text-xl` → `--text-2xl`) y texto debajo. La aclaración va siempre visible: en móvil debajo, separada por una línea blanca al 30 % y en `--text-xs`; desde 768 px en una tercera columna con filete coral de 3 px a la izquierda. Alto aprox.: 182 px (390), 111 px (1440). Texto blanco sobre azul (7,9:1). Sin botón. Con texto al 150 % crece en alto sin desborde.

### 10.3 Accesos rápidos de Inicio — ELIMINADOS (16-11-2026)
Sección retirada a pedido de Jennih (código, CSS y selectores de hover). Las fotos `acceso-opticos.jpg`, `acceso-sol.jpg` y `acceso-atencion.jpg` siguen en `src/assets` sin uso.

### 10.4 Otros bloques de Inicio
- Beneficios: tarjetas con icono + título (600) + descripción corta (`--text-sm`, gris `--color-text-muted`, 2–3 líneas); en móvil icono a la izquierda y texto a la derecha, desde 768 px icono arriba (provisional).
- Categorías (título "Explora nuestros productos" con bajada de una a tres líneas bajo el título, 16-11-2026): tarjeta con imagen 16/9 + título con flecha. "Anteojos ópticos" ya lleva foto (`categoria-opticos.jpg`, 612×408, persona probándose anteojos en una óptica, encuadre `center 35%`, banco provisional); "Anteojos de sol" también lleva foto (`categoria-sol.jpg`, 612×408, hombre con anteojos de sol, encuadre `center 12%`, banco provisional). Tercera tarjeta "Accesorios ópticos": foto `categoria-accesorios.jpg` (379×527, fundas acolchadas rosa y negra, encuadre `center 40%`, banco provisional; resolución baja), enlace a WhatsApp (pestaña nueva). Las tres van **en una sola línea desde 600 px** (`auto-fit minmax(min(100%, 11rem), 1fr)`, gap 0,75 rem, título `--text-base`, padding `--space-3`); con texto ampliado o en móvil bajan de a una.
- Destacados (**3 tarjetas** desde 16-11-2026, con bajada bajo el título): **carrusel horizontal con scroll-snap en móvil** (tarjetas de min(15rem, 78vw)); rejilla `auto-fit minmax(min(100%, max(14rem, 30%)), 1fr)` desde 768 (3 columnas; verificado 320/390/768/1024/1440, texto 150 %).
- Servicios (16-11-2026): tarjetas con **foto 16/9 a sangre arriba** (`servicio-atencion-visual.jpg` y `servicio-reparacion.jpg`, las mismas de `/servicios`, banco provisional), título `--text-xl`, texto y **un botón por tarjeta** abajo (`margin-top: auto` para alinearlos): Atención visual = primario azul "Agenda tu hora"; Reparación = outline "Consulta por tu reparación" (WhatsApp). Sin botón "Conocer servicios". Dos columnas desde 768 (`auto-fit minmax(min(100%, 14rem), 1fr)`), botones a ancho completo bajo 30 em. Verificado 320 (150 %)/390/768/1024/1440 sin desborde.
- Promociones: **solo el afiche a ancho completo** (`promocion.jpg`, 1024×539, radio lg, `h2` oculto visualmente) y el botón coral **Solicitar promoción** (WhatsApp, pestaña nueva): desde 768 px **superpuesto abajo a la derecha** sobre la franja roja del afiche (`right 3%`, `bottom 2.5%`); en móvil **debajo** de la imagen, a ancho completo. El botón ya no es coral: sobre el rojo del afiche es **blanco con texto azul, 700, `--text-lg`, flecha y `--shadow-md`** (hover: azul con texto blanco); en móvil, sobre fondo blanco, es **azul sólido**. Sin texto ni etiqueta provisional. El afiche es provisional (no es una promoción de Erredos).
- Banner de convenios (16-11-2026, más jerarquía): franja azul a ancho completo con más aire (`padding-block` `--section-gap − 0.5rem`), icono coral más grande (3,5 rem móvil, 4,5 rem desde 768), antetítulo en mayúsculas coral (`--text-sm`/600), título `--text-3xl` (máx. 24ch), reseña de 4–6 líneas en `--text-lg` (máx. 60ch) y botón coral `--text-lg`. Móvil y tablet: todo apilado (en tablet con el texto alineado bajo el icono); ≥1024: icono | texto | botón. Verificado 320 (150 %)/390/768/1024/1440 sin desborde.

### 10.5 Servicios
Jerarquía (rediseño 13-11-2026): **1)** banner con un solo CTA "Agenda tu hora" con la letra pequeña del valor de la atención justo antes (`.banner-fine`, §7.12); **2)** *Atención visual* protagonista; **3)** *Agenda* en banda azul; **4)** *Reparación* compacta y secundaria; **5)** FAQ; **6)** ubicación.
- **Atención visual:** tarjeta de dos columnas desde 1024 px (foto `servicio-atencion-visual.jpg` 1.05fr + contenido 1fr, `min-height` 26 rem), fondo `--color-primary-tint`, radio lg; en móvil, foto primero (4/3) y contenido debajo. Sin eyebrow (se quitó el 13-11-2026; el protagonismo lo da el tamaño), título, texto `--text-lg`, aclaración discreta con icono info, botón primario "Agenda tu hora" (ancho completo en <480 px). Sin etiqueta sobre la foto provisional (se quitó "Imagen referencial" el 16-11-2026; ya no existe `.photo-tag`).
- **Agenda (`#agendar-hora`):** banda azul (`--color-primary`) a ancho completo, `padding-block` `--space-7` (`--space-8` desde 1024); eyebrow coral, título y texto blancos, **tarjeta coral con el valor de la atención** (`.booking__note--price`, icono `sell`, "Valor de la atención: $10.000" + beneficio; texto `#212121` sobre coral, 10,8:1; 16-11-2026), nota de edad en tarjeta blanca y, debajo, lista `.booking__steps` de 3 pasos (círculo coral con número + texto blanco 500); formulario en tarjeta blanca con `--shadow-md`. Dos columnas desde 1024 (0.8fr intro | 1.4fr agenda). Es el bloque más destacado. La pestaña del control de texto lleva un anillo blanco para verse sobre el azul.
- **Reparación:** bloque horizontal de borde gris (radio lg), foto `servicio-reparacion.jpg` (16/7 en móvil, columna 0.8fr desde 768), título `--text-xl`, texto, nota pequeña y botón **outline** "Consulta por tu reparación". El contenido va centrado verticalmente junto a la foto. Sin icono grande ni color de acento: no compite con la agenda.
- **FAQ:** desde 1024 px dos columnas (`.faq-layout`, 0.8fr | 1.6fr): título, línea de ayuda y botón outline de WhatsApp a la izquierda (sticky bajo el header) y acordeón a la derecha en una sola columna; bajo 1024 px todo apilado, ancho completo. El desplazamiento suave a la agenda se activa solo con `prefers-reduced-motion: no-preference`.

### 10.6 Convenios
Públicos en rejilla de iconos; dos tarjetas de alternativa (la segunda en variante alterna) **con una foto 16/9 a sangre en la parte superior** (`Image`, `object-fit: cover`; `convenios-alianza.jpg` encuadre `center 40%` y `convenios-operativo.jpg` encuadre `center 30%`, fotos provisionales de referencia; mantener la proporción al reemplazar), pasos con icono en cuadro; sección de formulario con intro + aside de WhatsApp y el formulario en tarjeta.

### 10.7 Quiénes somos
Historia: foto `historia-local.jpg` (399×501, ratio 4/5, radio lg; incluye logo y texto de la publicación original, resolución baja) + eyebrow, título y 3 párrafos cortos de historia (16-11-2026; sin etiqueta provisional ni recuadro de pendientes, se eliminó `.story__pending`); principios en 4 tarjetas; **equipo** (16-11-2026): cabecera de ancho máx. 60ch (eyebrow, h2, reseña `--text-lg`, `ProvisionalBadge`) y rejilla `.team__grid` `auto-fit minmax(min(100%, 14rem), 1fr)` de 3 tarjetas (`.team__card`: borde gris 1 px, radio lg, foto cuadrada 1/1 a sangre arriba —`MediaPlaceholder` con icono `person` o `Image` si hay `photo`—, y debajo nombre `--text-lg`/600 y cargo en gris, centrados); sin hover; sección sobre fondo blanco tras la banda coral de principios; **tecnología** (16-11-2026): cabecera de ancho máx. 60ch (eyebrow, h2, reseña `--text-lg`, `ProvisionalBadge`), rejilla `.tech__grid` `auto-fit minmax(min(100%, 14rem), 1fr)` de 3 tarjetas (`.tech__card`: borde gris, radio lg, padding `--space-5`, icono en cuadro coral de 3 rem con icono `#212121`, título `--text-lg`/600 y texto gris) y bajo ellas el subtítulo "Conoce nuestras instalaciones" con `.tech__photos` (1 columna en móvil, 2 desde 600 px; fotos 16/10, radio lg, `MediaPlaceholder` `image` neutro o `Image` si hay `photo`); sin hover; fondo blanco; espacio con **3 fotos** (`espacio-exterior.jpg` grande a la izquierda; `espacio-equipo.jpg` e `espacio-interior.jpg` apiladas a la derecha, filas de 13 rem desde 600 px; en móvil una bajo otra en 4/3, `object-fit: cover`, radio lg) y botón "Cómo llegar"; ubicación con lista (dirección/horarios), botones y mapa de Google visible de inmediato. (Los accesos finales en 3 tarjetas se eliminaron el 16-11-2026.)

---

## 11. Imágenes

- **Hoy no hay fotografías propias.** Se usan fotos genéricas provisionales (3 del hero + 1 de acceso rápido) y `MediaPlaceholder`/ilustraciones SVG en el resto. No repetir imágenes innecesariamente; no inventar marcas.
- **Etiqueta "Imagen referencial":** retirada de todas las fotos el 16-11-2026 (pedido de Jennih: para la maqueta no sirve). Solo queda "Imagen provisional" en los marcadores sin foto (`MediaPlaceholder`, ilustraciones de producto). La lista de fotos a reemplazar vive en `content.md` §11.
- Las fotos entregadas por Jennih se usan como están; el entorno de Claude no puede descargar imágenes externas.
- Optimización: `astro:assets` (`Image`) con anchos y `sizes`, `loading="eager"` + `fetchpriority="high"` solo en la primera foto del hero.
- Problemas abiertos de las fotos provisionales (pendón de otra óptica, equipos no confirmados, marca de agua, baja resolución, licencias): ver `content.md` §11.
- Cuando lleguen fotos reales: reemplazar `variant.image` (productos), `background` (hero) y los `MediaPlaceholder` por `Image`; mantener la proporción para no mover el layout.

---

## 12. Decisiones de diseño y alternativas descartadas

| Tema | Decisión vigente | Descartado y por qué |
|---|---|---|
| Hero de Inicio | Carrusel de 3 entradas con foto a todo el ancho y **degradado lineal blanco** que deja ver la foto | (1) Filtro azul petróleo 75 % con texto blanco: "se ve mal todo con filtro azul", apagaba las fotos. (2) Panel blanco con el texto dentro: se percibía como un "cuadro" sobre la foto. (3) Imagen solo en un lado: Jennih pidió que ocupe todo el espacio |
| Botones del hero | Uno al lado del otro | Apilados (Jennih no quiere un botón sobre otro) |
| Acceso rápido con foto | Foto con filtro azul 75 % (aquí sí, por legibilidad del texto blanco pequeño) y encuadre bajo | Encuadre con personas como protagonistas |
| Slide 2 | Encuadre alto: las personas son protagonistas | Encuadre centrado (cortaba a las personas) |
| Búsqueda | Eliminada del header | Panel de búsqueda a `/productos?q=` (el catálogo no busca por nombre) |
| CTA de contacto | Botón "Contáctanos" coral → WhatsApp en el header **y** botón flotante "Haz aquí tus consultas" (pedido de Jennih 12-11-2026) | Solo el botón del header (se había descartado el flotante) |
| Navegación móvil | Barra inferior de 5 accesos, solo <768 | Barra inferior también en web |
| Navegación | "Quiénes somos" (2 líneas en barra inferior) | Etiqueta corta "Nosotros" |
| Filtros móviles | Bottom sheet en modo borrador | Filtros que se aplican al instante en móvil (provocan saltos de contenido) |
| Productos | Una tarjeta por modelo con selector de color | Una tarjeta por cada color |
| Mapa | Incrustado y visible de inmediato (decisión de Jennih, 12-11-2026) | Bajo demanda con botón "Mostrar mapa aquí" |
| Agenda | Vista semanal en 3 pasos (fecha y hora → datos → revisión), final "Solicitud recibida" (13-11-2026) | Formulario simple de solicitud; versión de 2 pasos con "agendada con éxito" (prometía una confirmación no validada) |
| Maqueta | Sin avisos de "modo demostración" (`prototypeMode`) | Avisos y "no se agendó" (Jennih quiere ver el flujo completo) |
| Etiqueta "Imagen referencial" | Sin etiqueta en ninguna foto (16-11-2026) | Rótulo sobre cada foto de stock: no sirve para la maqueta |

Observaciones de diseño aún abiertas:
- Hero 1 en escritorio: los anteojos de la izquierda quedan bajo el 88 % de blanco y se ven atenuados. Opciones: mover la foto, bajar la opacidad del blanco, o ubicar el texto a la derecha.
- En 320 px, "Conoce nuestros servicios" puede pasar a dos líneas dentro del botón para mantener los dos lado a lado.
- Contraste del texto sobre el degradado: estimado ≥ 8,8:1 donde el blanco empieza a desvanecerse y ≈12:1 sobre blanco pleno (calculado con el peor caso, zona negra de la foto; no medido).

---

## 13. Verificación visual y QA (cómo se comprueba)

- Chrome headless (Playwright) contra `astro preview`, en **320, 390, 768, 1024 y 1440 px**, a **100 % y 150 %** de texto.
- Criterios: sin desborde horizontal, un solo `h1`, jerarquía de títulos, enlaces internos sin error, carrusel y formularios funcionando, filtros y agenda con sus pruebas (38 comprobaciones del catálogo y 23 de la agenda sin fallas en su momento).
- Capturas por ancho para revisar composición (no solo reducción).
- **Pendiente (fase 8):** lectores de pantalla, dispositivos reales, Safari/Firefox, auditoría de contraste con herramienta.

---

## 14. Archivos de diseño clave

`src/styles/tokens.css` (tokens) · `src/styles/global.css` (reset, base, botones, formularios, utilidades) · `src/layouts/BaseLayout.astro` (shell + SEO + escala de texto) · `src/components/shell/*` (Header, BottomNav, Footer, TextSizeControl) · `src/components/ui/*` (Icon, icons.ts, SectionHeader, ServicePrice, MediaPlaceholder, ProvisionalBadge, Faq, LocationBlock, PagePlaceholder) · `src/components/product/*` (Catalog, ProductCard, ProductMedia, ColorSwatches, FrameIllustration) · `src/components/forms/*` (FormBehavior, AppointmentForm, OrganizationForm) · `src/pages/*` (estilos propios de cada página en su bloque `<style>`) · `src/assets/*` (logo y fotos).

---

## 15. Registro de cambios de este archivo

| Fecha | Cambio |
|---|---|
| 12-11-2026 | Creación del archivo a partir de la lectura completa del código y de las notas de cada fase. |
| 12-11-2026 | **Resumen del día** (detalle en cada sección): fotos de stock en tarjetas; orden de navegación con Quiénes somos 2.º; categorías, promociones y ubicación de Inicio con foto/afiche; detalle de producto rediseñado (§7.6, `MeasureDiagram`); banners con foto `PageBanner` en Quiénes somos, Productos, Servicios (§7.5, §10.1); pestaña Accesorios y catálogo a 3 columnas (§5); botón flotante de WhatsApp (§8.4b); fotos en las tarjetas de Servicios; se quitan las etiquetas "Contenido provisional". |
| 13-11-2026 | **Resumen del día** (detalle en cada sección): footer y ubicación sin botón de WhatsApp (§7.9, §8.3); "Agenda tu hora"; banner con foto en Convenios; hover de tarjetas (§7.4b); mapa incrustado; Servicios rediseñada con agenda en banda azul, 2 pasos, confirmación tipo correo y reparación secundaria (§7.7, §10.5); Convenios con select, ventana de confirmación (§7.10), confirmación de correo y ejemplos "Ej.: …" (§7.2); estados de error (§7.11); botón flotante, header y control de texto con más presencia (§8.1, §8.4, §8.4b); tarjeta de producto con dos botones y "Desde $X" (§7.4); franja "entrega el mismo día" (§10.2b); carrusel de marcas agregado y retirado; limpieza de CSS de la agenda. |
| 16-11-2026 | Logo nuevo (más nítido) en el header, **conservando el tamaño que ya tenía la página** (sin agrandarlo). Footer con el mismo logo sobre placa blanca hasta recibir la versión en blanco (§2.4). |
| 16-11-2026 | Inicio: se elimina la sección de accesos rápidos (§10.3); se quitan sus selectores de `card-hover.css`. |
| 16-11-2026 | Inicio → categorías: título "Explora nuestros productos" y bajada breve bajo el título (`SectionHeader` con `description`) (§10.4). |
| 16-11-2026 | Inicio → Productos destacados: 3 tarjetas en lugar de 6 y bajada nueva; rejilla pasa de `auto-fill` a `auto-fit` (§10.4). |
| 16-11-2026 | Inicio → Servicios: foto en cada tarjeta, botones propios (Agenda tu hora / Consulta por tu reparación) y sin "Conocer servicios" (§10.4). Nuevo componente `ServicePrice` con el valor de la atención visual y su beneficio (§7.12), en Inicio y Servicios. |
| 16-11-2026 | `ServicePrice`: el beneficio cambia a "¡Atención gratis al comprar tus lentes ópticos en Erredos!" (§7.12). |
| 16-11-2026 | Hero de Inicio (entrada 1): el título termina con el logo horizontal en lugar del texto "Óptica Erredos" (§10.2). |
| 16-11-2026 | Hero de Inicio (entrada 1): título en dos líneas (`.hero__line`, bloque) y logo horizontal en una tercera línea (`.hero__title-end`, bloque, ancho 100 % del título con `width: fit-content`); mismos bordes izquierdo y derecho que la línea más larga; reemplaza el logo en línea de la versión anterior. Verificado 320 (150 %)/390/768/1024/1440 sin desborde. |
| 16-11-2026 | Hero de Inicio (entrada 1): título "Encuentra tus próximos anteojos en óptica" y logo recortado a solo "ERREDOOS" en la tercera línea (§10.2). |
| 16-11-2026 | Inicio → banner de convenios con más jerarquía: antetítulo, título y reseña más largos, icono y botón más grandes (§10.4). |
| 16-11-2026 | **Más aire en todo el sitio** (pedido de Jennih, sobre todo en móvil): token `--section-gap` (4 / 4,5 / 5,5 rem) en lugar de 3 / 4 rem, gutter móvil 1,25 rem, más espacio bajo los títulos de sección y entre tarjetas apiladas, bandas de color con más relleno; grilla de productos con mínimo de columna 8 rem para conservar 2 columnas en 320 px (§4, §7.5, §10.4). Revisado 320 (100 % y 150 %)/390/768/1024/1440 en todas las páginas, sin desborde. |
| 16-11-2026 | Servicios → agenda: se agrega, sobre la nota de edad, una tarjeta coral con el valor de la atención ($10.000) y su beneficio (§10.5). Sin desborde a 320 (150 %)/390/1440. |
| 16-11-2026 | Hero de Inicio (diapositiva "Atención visual", `.hero__fine`) y banner de Servicios (`.banner-fine`): letra pequeña bajo el botón con el valor y cuándo es gratis; `--text-xs`, #212121; texto desde `pricing.fine` en `services.ts`. Sin desborde en 320 (150 %), 390 y 1440 (§7.12, §10.2, §10.5). |
| 16-11-2026 | Se retira la etiqueta "Imagen referencial" de todas las fotos (tarjetas y ficha de producto, fotos de Servicios); se eliminan `.photo-tag` y `hasStock`. Solo permanece "Imagen provisional" en marcadores sin foto (§7.4, §7.6, §10.5, §11). |
| 16-11-2026 | Letra pequeña del valor: pasa a ir antes del botón "Agenda tu hora" en el hero de Inicio y en el banner de Servicios (§7.12, §10.2, §10.5). Sin desborde en 320 (150 %), 390 y 1440. |
| 16-11-2026 | Quiénes somos: el `h1` del hero cambia a "Cuidamos tu visión y acompañamos tu bienestar" (`nosotros.astro`). Sin desborde en 320 (150 %), 390 y 1440; en 320 el título ocupa 4 líneas. |
| 16-11-2026 | Quiénes somos → historia: texto definitivo de maqueta en 3 párrafos; se eliminan la etiqueta "Texto provisional", el recuadro "Información necesaria…" y su CSS (§10.7). Sin desborde en 320 (150 %), 390 y 1440. |
| 16-11-2026 | Quiénes somos → sección "Nuestro equipo de trabajo": 3 tarjetas con foto cuadrada (placeholder `person`), nombre y cargo; icono `person` agregado a `icons.ts` (§6, §10.7). Sin desborde en 320 (150 %), 390, 768 y 1440. |
| 16-11-2026 | Quiénes somos → equipo: las 3 tarjetas pasan a usar `Image` con fotos `equipo-1/2/3.jpg` (1:1, la 3 recortada a cuadrado centrada en el rostro) y nombres/cargos de ejemplo; sin cambios de CSS. Sin desborde en 320 (150 %), 390, 768 y 1440. |
| 16-11-2026 | Quiénes somos → sección "Tecnología" (3 tarjetas con icono coral + 2 espacios de foto 16/10); iconos `precision_manufacturing` y `workspace_premium` en `icons.ts` (§6, §10.7). Sin desborde en 320 (150 %), 390, 768 y 1440. |
| 16-11-2026 | Quiénes somos → tecnología: el encabezado pasa a título nuevo y dos párrafos (cada uno `--text-lg`, separados por `--space-3`); sin cambios de CSS. Sin desborde en 320 (150 %), 390, 768 y 1440. |
| 16-11-2026 | Se retiran de toda la maqueta las etiquetas visibles de "por confirmar / provisional / por validar / de ejemplo" (pedido de Jennih): `ProvisionalBadge` ya no se usa; `MediaPlaceholder` y `ProductMedia` sin etiqueta "Imagen provisional"; se elimina la prop `provisional` de `SectionHeader`; fuera el aviso "Producto de demostración" de la ficha; descripciones de producto neutras generadas desde los datos. Horarios sin dato: "Consúltanos por WhatsApp". Permanecen los avisos de los formularios en modo demostración. |
| 16-11-2026 | Quiénes somos → tecnología: se cambian los textos de las 3 tarjetas; sin cambios de CSS. |
| 16-11-2026 | Quiénes somos → tecnología: las 2 fotos de instalaciones usan `Image` (16/10, radio lg); sin cambios de CSS. Sin desborde en 320 (150 %), 390, 768 y 1440. |
| 16-11-2026 | Quiénes somos → Nuestro espacio: cambia solo el texto de la cabecera; sin cambios de CSS. |
| 16-11-2026 | Ubicación (`LocationBlock`, Quiénes somos) y footer: fila "Teléfono" con icono `call` y enlace `tel:`; icono agregado a `icons.ts`. Sin desborde en 320 (150 %), 390 y 1440. |
| 16-11-2026 | Quiénes somos: se elimina la sección final de 3 accesos (`.connect`) y su selector en `card-hover.css`. |
| 16-11-2026 | Quiénes somos → historia: título y párrafo único nuevos; sin cambios de CSS. |
| 16-11-2026 | Quiénes somos → tecnología: la cabecera pasa a un solo párrafo; sin cambios de CSS. |
| 16-11-2026 | Footer: se reemplaza la placa blanca por el logo en blanco (`src/assets/logo-blanco.png`, 1278×914, transparente) sobre `--color-primary`, ancho 140 px. |
