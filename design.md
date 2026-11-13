# design.md — Óptica Erredos: sistema de diseño y comportamiento de interfaz

> **Para qué sirve este archivo.** Reúne todo lo visual y de interacción: paleta, tipografía, tokens, componentes, patrones de página, responsive, accesibilidad y las decisiones de diseño (incluidas las descartadas). Está pensado para que otra persona o IA pueda continuar el diseño sin las conversaciones previas. El contexto de negocio, contenido y alcance está en `content.md`.
>
> **Última actualización:** 13-11-2026.
>
> **Regla de mantenimiento (obligatoria).** Cada cambio visual o de interacción que pida Jennih se refleja aquí en la misma entrega (sección afectada + línea en el "Registro de cambios"). Los valores reales viven en el código (`src/styles/tokens.css` y los componentes); si este archivo y el código difieren, **manda el código** y se corrige este archivo.

---

## 1. Principios

1. **Mobile First, comportamiento de Web App:** se diseña primero a 390 px; en escritorio se **recompone** (no solo se estira). Navegación inferior en móvil; menú horizontal desde 768 px.
2. **Conversión sencilla:** la acción principal siempre a la vista (consultar por WhatsApp, agendar hora, solicitar información). Sin carrito ni pagos.
3. **Estética:** moderna, profesional, cercana, limpia, minimalista, comercial, consistente, accesible. **Evitar** diseños genéricos, exceso de sombras, gradientes innecesarios, animaciones excesivas y tarjetas recargadas.
4. **Predominio del blanco;** azul petróleo para identidad y jerarquía; coral para acciones; negro carbón para legibilidad; gris para elementos secundarios.
5. **Honestidad visual:** todo lo provisional se ve provisional (etiquetas punteadas, "Imagen provisional"). Nunca presentar un dato inventado como real.
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
`src/assets/logo.png` (936×679, RGBA). En header: altura = `--header-h` − 1 rem (aprox.), `loading="eager"`, densidades 1x/2x. En footer: ancho 132 px, sobre azul. **Falta** versión vectorial, horizontal y en negativo (hoy el logo se usa tal cual sobre el footer azul; verificar legibilidad cuando llegue la versión en negativo). Favicon: `public/favicon.png` 96×96.

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
| Gutter | 1 rem (base) · 1.5 rem (≥768) · 2 rem (≥1024) |
| Táctil | `--touch-target: max(2.75rem, 44px)` (mínimo para todo lo pulsable) |
| Header | `--header-h: clamp(56px, 3.5rem, 72px)`; ≥1024: `clamp(72px, 4.5rem, 96px)` |
| Barra inferior | `--bottom-nav-h: clamp(64px, 4.25rem, 84px)` + `--safe-bottom` (área segura iOS/Android) |
| Movimiento | `--duration-fast 150ms` · `--duration-base 220ms` · `--easing cubic-bezier(.2,0,0,1)` |
| Capas | `--z-header 100` · `--z-bottom-nav 100` · `--z-text-size 90` · skip-link 1000 |

Secciones: `padding-top: --space-7` (3 rem) y `--space-8` (4 rem) desde 1024.
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
- Registrados hoy: home, eyeglasses, visibility, apartment, storefront, search, close, chat, schedule, construction, directions, sunny, event_available, handshake (+ `handshake-fill`), explore, widgets, image, sell, groups, chevron_right/left, tune, check, search_off, arrow_back, build, info, account_balance, school, diversity_3, edit_note, fact_check, forum, error, check_circle, hearing, task_alt, map, pause, play_arrow, y las variantes `-fill` de la barra inferior. Además text_increase, text_decrease, restart_alt, accessibility_new, arrow_forward, location_on, apartment, groups, etc. (ver `icons.ts` para la lista vigente).
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
- `ProvisionalBadge`: borde punteado `currentColor`, radio sm, 12 px/500. Textos usados: "Por confirmar", "Texto provisional", "Contenido provisional", "Espacio provisional", "Propuesta por validar con el negocio".
- `MediaPlaceholder`: caja con ratio configurable, icono al 55 % de opacidad y etiqueta "Imagen provisional" abajo-izquierda sobre blanco al 90 %; tonos `primary` (tinte azul), `accent` (tinte coral), `neutral` (`#f4f4f4`). Ocupa el mismo espacio que tendrá la foto real, para reemplazar sin tocar el layout. Rol `img` con `aria-label` descriptivo.

### 7.4 Tarjeta de producto (`ProductCard`)
Imagen (`ProductMedia`: foto de la variante o ilustración SVG por forma y color) con insignia de promoción si existe; muestras de color (`ColorSwatches`, botones `aria-pressed`); tipo; nombre (enlace al detalle); marca; precio (en **anteojos ópticos siempre "Desde $X"**; sol y accesorios, precio simple; o "Consultar precio"); **dos botones** (desde 13-11-2026): "Ver producto" (azul sólido, abre la ficha; conserva `?color=`) y "Consultar" (contorno azul, abre WhatsApp con el modelo y color), mismo patrón primario + outline que los heros. Van lado a lado y se apilan en columna si no caben (móvil de 320–390 px o texto ≥125 %); `flex: 1 1 7.5rem`, sin desborde. Cada tarjeta es independiente (un listener delegado). Versión `compact` para la grilla de 2 columnas y relacionados.
- **Fotos de stock (desde 12-11-2026):** las tarjetas y el detalle muestran fotos provisionales de Pexels (`variant.image` acepta `ImageMetadata`, URL `string` o `null`), recortadas con `object-fit: cover` (1/1 en móvil, 4/3 desde 768) y rotuladas "Imagen referencial" abajo a la izquierda. Si `image` es `null` vuelve la ilustración.
- Ilustraciones `FrameIllustration` (hoy sin uso mientras haya fotos): SVG de 200×120 con contorno de lente según forma (Redondo, Cuadrado, Rectangular, Aviador, Cat Eye, Geométrico), color vía `--frame-color`; los de sol llevan lente oscuro. Siempre con etiqueta "Imagen provisional".

### 7.4b Efecto hover de tarjetas (solo web)
Archivo `src/styles/card-hover.css` (importado en `BaseLayout`). Al pasar el mouse, la tarjeta **sube 4 px**, el borde pasa a azul (`--color-primary`) y aparece `--shadow-md`, con transición de `--duration-base`. **Solo se aplica con `(hover: hover) and (pointer: fine)` y desde 768 px**: en móvil y táctil no hay efecto. Con `prefers-reduced-motion` no se desplaza. Tarjetas incluidas: producto (`.product-card`), servicios de Inicio y de Servicios (`.services li`, `.service`), categorías, beneficios, accesos rápidos, públicos y alternativas de Convenios y accesos finales de Quiénes somos. Para sumar una tarjeta nueva, agregar su selector a las tres listas del archivo (`:not(#_)` sube la especificidad sin `!important`).

### 7.5 Catálogo
- **Banner de entrada** (`PageBanner.astro`: foto a todo el ancho + h1 + intro, mismo patrón que el hero de Inicio sin carrusel; móvil = foto arriba fundida a blanco y texto debajo, ≥768 = degradado blanco a la izquierda y foto a la derecha, alto mín. 30 rem (igual que Quiénes somos; foto móvil `clamp(210px, 66vw, 320px)`); props `title`, `text`, `kicker`, `image`, `imagePosition`; foto provisional `hero-productos.jpg`), pestañas de categoría (Todos / Anteojos ópticos / Anteojos de sol / Accesorios; sin aviso de catálogo de demostración) (`aria-current`), barra de acciones: botón **Filtrar** (con insignia con la cantidad de filtros activos) + selector **Ordenar por**, chips de filtros activos (con quitar), contador "N productos", grilla, "Mostrando X de Y" + **Ver más productos**, estado vacío, bloque de ayuda con WhatsApp.
- **Móvil/tablet:** filtros en **bottom sheet** (modo borrador): se aplican con "Ver N productos", se descartan al cerrar sin aplicar; botones "Limpiar filtros" y "Ver N productos". **Escritorio (≥1024):** barra lateral de 16 rem, aplicación instantánea.
- Grupos de filtro con casillas (`.check`) en rejilla fluida; precio con dos campos mín/máx (placeholder = valores reales).

### 7.6 Detalle de producto
Enlace "Volver a productos" (móvil) y migas de pan (≥768); **dos columnas** desde 768 px (galería sticky | información), una columna en móvil.
- **Galería:** marco con borde gris y radio lg (foto 1/1 en móvil, 4/3 desde 768, etiqueta "Imagen referencial") + **miniaturas** de 4,5 rem (`aria-pressed`, borde azul en la activa) que cambian la foto principal.
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
- **Texto:** kicker (azul, 600), h1/h2, párrafo (`--text-lg`, máx. 45ch), botones lado a lado (principal azul + outline azul).
- **Móvil:** foto arriba (alto `clamp(210px, 66vw, 320px)`, `object-position` por slide), su borde inferior se funde a blanco (degradado de 6 rem: 0 → 0,9 a 70 % → 1), el texto sube 1,75 rem sobre la foto; botones compactos (`--text-sm`, padding `--space-3`) en una fila.
- **≥768:** foto a todo el ancho (`inset: 0`), **degradado lineal blanco a la izquierda** cuya longitud sigue al texto: `--hero-text-end = max(gutter, (100% − 1200px)/2) + 32rem`; paradas: blanco 88 % hasta `end − 6rem` → 55 % en `end + 4rem` → 0 en `end + 18rem`. El texto (máx. 32 rem) queda centrado verticalmente, alto mínimo 34 rem; los controles se colocan abajo a la izquierda.
- **Controles:** píldora azul sólida con anterior, puntos (el activo se alarga a 26 px), siguiente y pausar/reanudar; ocultos hasta que el JS activa el carrusel.
- **Encuadres:** slide 2 `62% 18%` (las personas deben ser protagonistas); slide 1 `center 65%`; slide 3 por defecto.
- **Fotos:** `hero-productos.jpg` (2048×1367), `hero-atencion-visual.jpg` (1000×667), `hero-convenios.jpg` (1024×683) servidas con `astro:assets` (anchos 640/1024/1600/original).
- Historial de iteraciones y por qué se descartaron: ver §12.

### 10.2b Franja "Entrega el mismo día" (Inicio)
Banda azul `--color-primary` a ancho completo, justo bajo el hero (`.same-day`, `on-primary`). Icono `schedule` en círculo coral con el reloj azul (2,75 rem móvil / 3,5 rem desde 768), título 700 (`--text-xl` → `--text-2xl`) y texto debajo. La aclaración va siempre visible: en móvil debajo, separada por una línea blanca al 30 % y en `--text-xs`; desde 768 px en una tercera columna con filete coral de 3 px a la izquierda. Alto aprox.: 182 px (390), 111 px (1440). Texto blanco sobre azul (7,9:1). Sin botón. Con texto al 150 % crece en alto sin desborde.

### 10.3 Accesos rápidos de Inicio
Tres tarjetas (borde gris, radio lg, alto mín. 5,5 rem): icono en cuadro coral (azul sobre coral), etiqueta 600, flecha. Rejilla fluida `auto-fit minmax(min(100%,14rem),1fr)`. Las tres llevan **foto de fondo** con el mismo filtro azul 75 % y texto blanco: `acceso-opticos.jpg` (encuadre `center 80%`, predominan los anteojos y no las personas) y `acceso-sol.jpg` (612×408, anteojos de sol rosados sobre arena, encuadre `center 62%`, foto de banco provisional). `acceso-atencion.jpg` (612×386, examen visual con equipo, encuadre `center 38%`, foto de banco provisional; muestra equipos no confirmados por el negocio).

### 10.4 Otros bloques de Inicio
- Beneficios: tarjetas con icono + título (600) + descripción corta (`--text-sm`, gris `--color-text-muted`, 2–3 líneas); en móvil icono a la izquierda y texto a la derecha, desde 768 px icono arriba (provisional).
- Categorías: tarjeta con imagen 16/9 + título con flecha. "Anteojos ópticos" ya lleva foto (`categoria-opticos.jpg`, 612×408, persona probándose anteojos en una óptica, encuadre `center 35%`, banco provisional); "Anteojos de sol" también lleva foto (`categoria-sol.jpg`, 612×408, hombre con anteojos de sol, encuadre `center 12%`, banco provisional). Tercera tarjeta "Accesorios ópticos": foto `categoria-accesorios.jpg` (379×527, fundas acolchadas rosa y negra, encuadre `center 40%`, banco provisional; resolución baja), enlace a WhatsApp (pestaña nueva). Las tres van **en una sola línea desde 600 px** (`auto-fit minmax(min(100%, 11rem), 1fr)`, gap 0,75 rem, título `--text-base`, padding `--space-3`); con texto ampliado o en móvil bajan de a una.
- Destacados: **carrusel horizontal con scroll-snap en móvil** (tarjetas de min(15rem, 78vw)); rejilla `auto-fill minmax(min(100%, max(14rem, 30%)), 1fr)` desde 768.
- Promociones: **solo el afiche a ancho completo** (`promocion.jpg`, 1024×539, radio lg, `h2` oculto visualmente) y el botón coral **Solicitar promoción** (WhatsApp, pestaña nueva): desde 768 px **superpuesto abajo a la derecha** sobre la franja roja del afiche (`right 3%`, `bottom 2.5%`); en móvil **debajo** de la imagen, a ancho completo. El botón ya no es coral: sobre el rojo del afiche es **blanco con texto azul, 700, `--text-lg`, flecha y `--shadow-md`** (hover: azul con texto blanco); en móvil, sobre fondo blanco, es **azul sólido**. Sin texto ni etiqueta provisional. El afiche es provisional (no es una promoción de Erredos).
- Banner de convenios: franja azul a ancho completo, icono coral, título (máx. 26ch) y botón coral; en fila desde 768.

### 10.5 Servicios
Jerarquía (rediseño 13-11-2026): **1)** banner con un solo CTA "Agenda tu hora"; **2)** *Atención visual* protagonista; **3)** *Agenda* en banda azul; **4)** *Reparación* compacta y secundaria; **5)** FAQ; **6)** ubicación.
- **Atención visual:** tarjeta de dos columnas desde 1024 px (foto `servicio-atencion-visual.jpg` 1.05fr + contenido 1fr, `min-height` 26 rem), fondo `--color-primary-tint`, radio lg; en móvil, foto primero (4/3) y contenido debajo. Sin eyebrow (se quitó el 13-11-2026; el protagonismo lo da el tamaño), título, texto `--text-lg`, aclaración discreta con icono info, botón primario "Agenda tu hora" (ancho completo en <480 px). Etiqueta "Imagen referencial" sobre la foto provisional.
- **Agenda (`#agendar-hora`):** banda azul (`--color-primary`) a ancho completo, `padding-block` `--space-7` (`--space-8` desde 1024); eyebrow coral, título y texto blancos, nota de edad en tarjeta blanca y, debajo, lista `.booking__steps` de 3 pasos (círculo coral con número + texto blanco 500); formulario en tarjeta blanca con `--shadow-md`. Dos columnas desde 1024 (0.8fr intro | 1.4fr agenda). Es el bloque más destacado. La pestaña del control de texto lleva un anillo blanco para verse sobre el azul.
- **Reparación:** bloque horizontal de borde gris (radio lg), foto `servicio-reparacion.jpg` (16/7 en móvil, columna 0.8fr desde 768), título `--text-xl`, texto, nota pequeña y botón **outline** "Consulta por tu reparación". El contenido va centrado verticalmente junto a la foto. Sin icono grande ni color de acento: no compite con la agenda.
- **FAQ:** desde 1024 px dos columnas (`.faq-layout`, 0.8fr | 1.6fr): título, línea de ayuda y botón outline de WhatsApp a la izquierda (sticky bajo el header) y acordeón a la derecha en una sola columna; bajo 1024 px todo apilado, ancho completo. El desplazamiento suave a la agenda se activa solo con `prefers-reduced-motion: no-preference`.

### 10.6 Convenios
Públicos en rejilla de iconos; dos tarjetas de alternativa (la segunda en variante alterna) **con una foto 16/9 a sangre en la parte superior** (`Image`, `object-fit: cover`; `convenios-alianza.jpg` encuadre `center 40%` y `convenios-operativo.jpg` encuadre `center 30%`, fotos provisionales de referencia; mantener la proporción al reemplazar), pasos con icono en cuadro; sección de formulario con intro + aside de WhatsApp y el formulario en tarjeta.

### 10.7 Quiénes somos
Historia: foto `historia-local.jpg` (399×501, ratio 4/5, radio lg; incluye logo y texto de la publicación original, resolución baja) + texto + nota con la información pendiente; principios en 4 tarjetas; espacio con **3 fotos** (`espacio-exterior.jpg` grande a la izquierda; `espacio-equipo.jpg` e `espacio-interior.jpg` apiladas a la derecha, filas de 13 rem desde 600 px; en móvil una bajo otra en 4/3, `object-fit: cover`, radio lg) y botón "Cómo llegar"; ubicación con lista (dirección/horarios), botones y mapa de Google visible de inmediato; accesos finales en 3 tarjetas con flecha.

---

## 11. Imágenes

- **Hoy no hay fotografías propias.** Se usan fotos genéricas provisionales (3 del hero + 1 de acceso rápido) y `MediaPlaceholder`/ilustraciones SVG en el resto. No repetir imágenes innecesariamente; no inventar marcas.
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

`src/styles/tokens.css` (tokens) · `src/styles/global.css` (reset, base, botones, formularios, utilidades) · `src/layouts/BaseLayout.astro` (shell + SEO + escala de texto) · `src/components/shell/*` (Header, BottomNav, Footer, TextSizeControl) · `src/components/ui/*` (Icon, icons.ts, SectionHeader, MediaPlaceholder, ProvisionalBadge, Faq, LocationBlock, PagePlaceholder) · `src/components/product/*` (Catalog, ProductCard, ProductMedia, ColorSwatches, FrameIllustration) · `src/components/forms/*` (FormBehavior, AppointmentForm, OrganizationForm) · `src/pages/*` (estilos propios de cada página en su bloque `<style>`) · `src/assets/*` (logo y fotos).

---

## 15. Registro de cambios de este archivo

| Fecha | Cambio |
|---|---|
| 12-11-2026 | Creación del archivo a partir de la lectura completa del código y de las notas de cada fase. |
| 12-11-2026 | Tarjetas de producto: ilustraciones reemplazadas por fotos de stock provisionales (§7.4). |
| 12-11-2026 | Orden de navegación: Inicio, Quiénes somos, Productos, Servicios, Convenios (header, barra inferior y footer). Sin cambios visuales. |
| 12-11-2026 | Acceso rápido "Anteojos de sol" con foto de fondo, igual tratamiento que "Anteojos ópticos" (§10.3). |
| 12-11-2026 | Acceso rápido "Solicitar atención" con foto de fondo; los 3 accesos quedan con foto (§10.3). |
| 12-11-2026 | Inicio: categoría "Anteojos ópticos" con foto en lugar del marcador (§10.4). |
| 12-11-2026 | Inicio: categoría "Anteojos de sol" con foto; las dos categorías quedan con foto (§10.4). |
| 12-11-2026 | Inicio: tercera categoría "Accesorios ópticos" (marcador provisional, consulta por WhatsApp); las tres en una línea desde 600 px con tarjetas más pequeñas (§10.4). |
| 12-11-2026 | Se eliminaron todas las etiquetas "Contenido provisional" (encabezados de sección, descripción del detalle de producto y página de privacidad). Las demás etiquetas provisionales se mantienen. |
| 12-11-2026 | Inicio: categoría "Accesorios ópticos" con foto; las tres categorías quedan con foto (§10.4). |
| 12-11-2026 | Inicio: bloque de promociones con foto y botón "Solicitar promoción" a WhatsApp (§10.4). |
| 12-11-2026 | Inicio: promociones = afiche completo + botón superpuesto (móvil: botón debajo); se quitó el texto (§10.4). |
| 12-11-2026 | Inicio: afiche de promociones cambiado por la versión 2x1 (1024×539) (§10.4). |
| 12-11-2026 | Ubicación (`LocationBlock`): foto del local en lugar del marcador, en Inicio, Servicios y Convenios (§7.9). |
| 12-11-2026 | Beneficios de Inicio con descripción de 2–3 líneas por tarjeta (§10.4). |
| 12-11-2026 | Detalle de producto rediseñado (§7.6): galería con miniaturas, garantía, guía de medidas con esquemas, relacionados en carrusel móvil / 3 columnas. Nuevo componente `MeasureDiagram`. |
| 12-11-2026 | Quiénes somos: hero con foto de fondo tipo banner, como Inicio (§10.1b). |
| 12-11-2026 | Quiénes somos → Nuestro espacio con 3 fotos reales de banco en lugar de marcadores (§10.7). |
| 12-11-2026 | Quiénes somos: mapa visible de inmediato en lugar de bajo demanda (§7.9, §12). |
| 12-11-2026 | Quiénes somos → Nuestra historia con foto del local (§10.7). |
| 12-11-2026 | Productos: banner de entrada con foto y texto, nuevo componente reutilizable `PageBanner` (§7.5). |
| 12-11-2026 | Productos: pestaña "Accesorios" (`ProductType` 'accesorios', `shape` opcional). `PageBanner` iguala el hero de Quiénes somos: foto móvil `clamp(210px,66vw,320px)` y alto mínimo 30rem en escritorio (§7.5). |
| 12-11-2026 | Productos: se elimina el aviso "Catálogo de demostración" (`.catalog__demo`) (§7.5). |
| 12-11-2026 | Catálogo: máximo 3 tarjetas por fila (antes 4 en escritorio) (§5). |
| 12-11-2026 | Catálogo: 3 columnas fijas desde 768 px (`repeat(3, minmax(0,1fr))`), sin depender del ancho mínimo de tarjeta (§5). |
| 12-11-2026 | Servicios: hero con foto de fondo (`PageBanner` + `hero-atencion-visual.jpg`, encuadre 62% 18%), botones primario azul + outline azul lado a lado; reemplaza el hero azul con marcador (§10.1). |
| 12-11-2026 | Nuevo botón flotante de WhatsApp "Haz aquí tus consultas" en todas las páginas; el control de texto sube en móvil para no chocar (§8.4b, §12). |
| 12-11-2026 | Servicios: foto en la tarjeta "Atención visual" (mapa `servicePhotos` por slug en `servicios.astro`) (§10.5). |
| 12-11-2026 | Servicios: foto en la tarjeta "Reparación y ajuste"; ambas tarjetas quedan con foto (§10.5). |
| 13-11-2026 | Footer: eliminado el botón coral "Escribir por WhatsApp" (§8.3). |
| 13-11-2026 | Servicios: botones del hero = primario "Agenda tu hora" + outline "Repara tus anteojos" (sin icono), lado a lado (§10.1). |
| 13-11-2026 | Servicios: el botón "Repara tus anteojos" del hero abre WhatsApp en pestaña nueva (§10.1). |
| 13-11-2026 | Textos de botones: "Agendar hora" → "Agenda tu hora" en todo el sitio. |
| 13-11-2026 | Servicios: botón "Repara tus anteojos" del hero sin icono (§10.1). |
| 13-11-2026 | Convenios: hero con foto de fondo (`PageBanner` + `hero-convenios.jpg`), botones primario azul + outline azul; en móvil se apilan (§10.1). |
| 13-11-2026 | Nuevo efecto hover en todas las tarjetas del sitio, solo web (§7.4b). |
| 13-11-2026 | `LocationBlock`: mapa incrustado en lugar de la foto del local, en Inicio, Servicios y Convenios (§7.9). |
| 13-11-2026 | Convenios: eliminada la etiqueta "Condiciones por confirmar" de las tarjetas de alternativas (§7.3). |
| 13-11-2026 | Servicios: agenda destacada en banda azul a ancho completo; pestaña del control de texto con anillo blanco (§10.5, §8.4). |
| 13-11-2026 | Servicios: la banda azul de la agenda ya no tiene margen inferior; queda pegada a la sección de pasos (tinte azul), sin franja blanca (§10.5). |
| 13-11-2026 | Confirmación de agenda: título de éxito y callout coral con el aviso de confirmación 24 h antes (§7.7, paso 3). |
| 13-11-2026 | Formulario de Convenios: "Tipo de solicitud" como campo desplegable (`select`) en lugar de tarjetas de radio (§7.2). |
| 13-11-2026 | Inicio: carrusel infinito de marcas entre destacados y promociones (§10.4). |
| 13-11-2026 | Inicio: eliminado el carrusel de marcas (§10.4). |
| 13-11-2026 | Inicio: botón "Solicitar promoción" blanco con texto azul sobre el afiche (azul en móvil) para que destaque sobre el rojo (§10.4). |
| 13-11-2026 | Botón flotante de WhatsApp con más presencia: más grande y en negrita, círculo azul con el icono, anillo blanco, sombra marcada y halo breve (§8.4b). |
| 13-11-2026 | Control de accesibilidad: pestaña más grande (54–62 px) con icono proporcional; en móvil se reserva más espacio sobre el botón flotante para que no choquen con el texto al 150 % (§8.4). |
| 13-11-2026 | Header: el botón "Contáctanos" adopta el estilo del botón flotante (píldora coral con círculo azul, negrita, anillo y sombra) (§8.1). |
| 13-11-2026 | Tarjeta de producto: dos botones, "Ver producto" (ficha) y "Consultar" (WhatsApp); se apilan cuando no caben (§7.4). |
| 13-11-2026 | Tarjeta de producto: "Ver producto" pasa a azul sólido y "Consultar" a contorno azul (como los botones del hero); precios de anteojos ópticos como "Desde $X" (§7.4, §7.6). |
| 13-11-2026 | Convenios: las dos tarjetas de alternativas llevan un espacio de imagen 16/9 arriba para destacarlas (§10.6). |
| 13-11-2026 | Formularios (≥768 px): los campos de una misma fila alinean sus controles aunque una etiqueta ocupe dos líneas (§7.2). |
| 13-11-2026 | Convenios: fotos de referencia en las dos tarjetas de alternativas, reemplazan los marcadores (§10.6). |
| 13-11-2026 | Formulario de Convenios: etiqueta corta "Cantidad de participantes (aprox.)" en una línea (§7.2). |
| 13-11-2026 | Inicio: nueva franja azul "entrega el mismo día" bajo el hero (§10.2b). |
| 13-11-2026 | Convenios: las tarjetas de alternativas pierden el recuadro "Pensado para" (queda foto, título, 1 frase y botón). Criterio general: textos de tarjeta de 1–2 líneas (§10.6). |
| 13-11-2026 | Ubicación (`LocationBlock`): se revierte la reducción del mapa; vuelve a media columna, ratio 4/3 (§7.9). |
| 13-11-2026 | Consulta por WhatsApp de un producto: el mensaje lista modelo, marca, color y código y, cuando `site.url` esté configurado, el enlace a la ficha (WhatsApp muestra la foto como vista previa gracias a `og:image`) (§7.4, §7.6). |
| 13-11-2026 | Botón "Solicitar promoción": el mensaje de WhatsApp incluye el enlace a la imagen de la promoción (`public/promociones/promocion.jpg`) cuando `site.url` está configurado (§10.4). Sin cambios visuales. |
| 13-11-2026 | Consulta por WhatsApp de un producto: se agrega la línea de precio al mensaje. Sin cambios visuales (§7.4, §7.6). |
| 13-11-2026 | Servicios rediseñada (§10.5, §7.7): jerarquía atención visual → agenda → reparación; agenda en tres pasos con indicador de progreso, leyenda del calendario, paso de revisión y estado "enviando"; reparación como bloque compacto outline; se quita "¿Cómo solicitar atención?". |
| 13-11-2026 | `FormBehavior`: nuevo evento cancelable `form:valid` para formularios de varios pasos. `astro.config.mjs` vuelve a la configuración sin `base` (publicación en Vercel). |
| 13-11-2026 | Servicios → Reparación: el texto del bloque queda centrado verticalmente respecto de la foto (§10.5). |
| 13-11-2026 | Servicios → Atención visual: se elimina el eyebrow "Nuestro servicio principal" (§10.5). |
| 13-11-2026 | Servicios → FAQ: recomposición en escritorio (título + ayuda a la izquierda, acordeón a la derecha) para eliminar el vacío lateral (§10.5). |
| 13-11-2026 | Servicios → Atención visual: cambio de texto, sin cambios visuales (§10.5). |
| 13-11-2026 | Servicios → Agenda: se elimina la nota "Cada atención dura 30 minutos" con horarios, por duplicar el calendario; quedan dos notas (§7.7, §10.5). |
| 13-11-2026 | Servicios → Agenda: se eliminan los avisos de confirmación (callouts del paso 3 y de la pantalla final, nota "solicitud pendiente" de la intro) y la pantalla final pasa a "¡Tu hora quedó agendada con éxito!"; la FAQ pierde una pregunta (§7.7, §10.5). Esas clases se eliminaron del código el 13-11-2026. |
| 13-11-2026 | Agenda → pantalla final: tarjeta blanca estilo correo (asunto en azul, borde izquierdo azul, día y hora con icono event_available) bajo "Te enviamos la confirmación a [correo]"; reemplaza la lista de datos. |
| 13-11-2026 | Servicios → Agenda: lista de 3 pasos (círculos coral numerados + texto blanco) bajo el aviso de edad en la banda azul (§10.5). |
| 13-11-2026 | Agenda → paso 2: se restituye el campo "Confirma tu correo" junto al correo; el teléfono pasa a ancho completo (§7.7). |
| 13-11-2026 | Agenda → pantalla final: se elimina el botón "Escribir por WhatsApp"; queda solo "Solicitar otra hora" (§7.7). |
| 13-11-2026 | Agenda: se elimina el paso "Revisa tu solicitud"; el botón del paso 2 pasa de "Continuar" a "Solicitar hora" y el indicador queda en 2 pasos (§7.7). |
| 13-11-2026 | Ubicación (`LocationBlock`): se elimina el botón "Escribir por WhatsApp"; queda solo "Cómo llegar" (§7.9). |
| 13-11-2026 | Servicios → Reparación: el texto del botón outline pasa a "Consulta por tu reparación" (§10.5). |
| 13-11-2026 | Convenios → formulario: la confirmación pasa a ventana emergente (`dialog`) con icono, título, texto y botón "Salir" a `/` (§7.10). |
| 13-11-2026 | Ventana de confirmación de Convenios: texto "…a la brevedad posible." (§7.10). |
| 13-11-2026 | Nuevo §7.11: estados de error de envío, aviso de hora ocupada en la agenda y simulación `?simular-error=` (maqueta). |
| 13-11-2026 | Convenios: campo "Confirma tu correo electrónico" y nuevo orden de campos en 2 columnas; el error de campo en filas de 2 columnas pasa entre etiqueta y control para no desalinear (§7.2). |
| 13-11-2026 | Formularios: ejemplos "Ej.: …" como placeholder en todos los campos de texto de la agenda y de Convenios (§7.2). |
| 13-11-2026 | Revisión de código para entrega a un desarrollador: limpieza de CSS sin uso en la agenda (`.booking-ui__notice` y `.booking-ui__details` ya no existen). Sin cambios visibles. |
