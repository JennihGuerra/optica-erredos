# content.md — Óptica Erredos: contexto, contenido y decisiones

> **Para qué sirve este archivo.** Es el contexto teórico, estratégico y de contenido del proyecto. Está escrito para que cualquier persona o IA que tome el proyecto sin haber estado en las conversaciones anteriores pueda continuar sin perder criterio. Su archivo hermano es `design.md` (sistema visual, componentes y comportamiento de interfaz).
>
> **Última actualización:** 16-11-2026.
>
> **Regla de mantenimiento (obligatoria).** Cada vez que Jennih pida un cambio (contenido, estructura, alcance, decisión, pendiente resuelto), se actualiza este archivo en la misma entrega: se corrige la sección afectada y se agrega una línea al "Registro de cambios" del final. Lo mismo se hace con `design.md` cuando el cambio es visual o de interacción. Si un dato queda sin confirmar, se deja marcado como **PROVISIONAL** o **PENDIENTE**; nunca se rellena con información inventada.

---

## 1. El proyecto en una página

| | |
|---|---|
| **Cliente** | Óptica Erredos, Calle Talca 118, Puerto Montt, Chile. Contacto del negocio mencionado en las notas: Mauricio (dueño/encargado). Hay además una **tecnóloga** que realiza la atención visual. |
| **Negocio** | Venta de anteojos ópticos y de sol; atención visual (con tecnóloga); reparación y ajuste de anteojos; convenios y operativos ópticos para organizaciones. |
| **Quién lo diseña** | Jennih (diseñadora UX/UI, Prosys), trabajando con Claude como equipo senior de UX/UI + frontend. |
| **Objetivo** | Convertir el sitio en un canal complementario de información, atención y captación. Hoy el negocio depende de la atención presencial y del trabajo comercial en terreno; su web y redes tienen presencia limitada. |
| **Problema** | Sin canales digitales activos, la óptica no capta clientes nuevos fuera de la atención presencial. |
| **Qué se entrega hoy** | Una **maqueta funcional** (frontend completo, sin backend) con 5 secciones, catálogo de demostración, agenda de atención visual y formulario B2B. Ninguna solicitud llega realmente al negocio. |
| **Enfoque** | Mobile First + "Web App Experience" + Responsive. No es app nativa ni PWA. |
| **Carpeta local** | `C:\Users\Jennifer Muñoz\Desktop\PROYECTOS CLOUDE\óptica erredos` (código fuente + `vista-previa.html`). |
| **Vista previa en línea** | https://claude.ai/artifact/DaWRGSNtCibg33DGHoYqFE (archivo único con todo incrustado, navegación por hash). |
| **Proyecto en claude.ai** | "Óptica -Erredos": contiene las instrucciones, el PDF de benchmarking, el logo y las notas de cada fase (`claude/*.md`). |

### Alcance
**Incluye:** rediseño visual, arquitectura de información, App Shell, Mobile First, responsive, catálogo (~50 productos reales a futuro), filtros, detalle de producto, consultas por WhatsApp, Servicios con agenda de atención, página de Convenios y operativos con formulario, página institucional, control de tamaño de texto, SEO básico, QA responsive y de accesibilidad.

**No incluye (y no se debe agregar sin consultar):** carrito, checkout, pagos online, e-commerce, inventario, CRM, historial de clientes, automatización de marketing, sistema de fidelización, app nativa, panel administrativo complejo, administración de redes sociales o campañas pagadas, producción mensual de artículos.

> Nota: el nombre del proyecto habla de "fidelización", pero el alcance contratado **excluye** un sistema de fidelización. La audiencia web se trabaja con contenido, SEO local y canales de contacto.

---

## 2. Reglas de trabajo (instrucciones permanentes)

1. **Fases con aprobación.** Se trabaja por fases y no se avanza sin que Jennih apruebe la anterior. Orden original: 1 revisión técnica → 2 sistema visual → 3 App Shell → 4 Inicio → 5 Catálogo → 6 Detalle → 7 Servicios → 8 Empresas → 9 Nosotros → 10 QA. En la práctica las fases se renumeraron (ver §10).
2. **Al cerrar cada fase:** resumir lo implementado, explicar decisiones, listar archivos modificados, señalar errores y pendientes, comprobar responsive, y esperar aprobación.
3. **No inventar información comercial:** ni precios, promociones, horarios, servicios, testimonios, beneficios, marcas distribuidas, historia, fundadores, equipo ni equipamiento. Lo no confirmado se marca "Por confirmar", "Texto provisional", "Contenido provisional" o "Imagen provisional".
4. **No cambiar** paleta ni tipografía. No agregar funcionalidades fuera del alcance.
5. **Advertir** cuando una decisión de UX sea problemática y proponer alternativa (no solo ejecutar).
6. **No sacrificar** usabilidad por estética ni SEO por imitar una app.
7. **Antes de tocar código:** revisar estructura, reutilizar componentes, no reemplazar tecnologías sin justificación, **no eliminar archivos sin consultar**.
8. **Formularios:** no simular envíos reales si no hay servicio conectado; el modo actual es "maqueta funcional" (ver §7).
9. **Accesibilidad:** objetivo WCAG 2.2 AA como criterio de diseño y validación; **nunca afirmar certificación** si no se comprobó.
10. **Entregas:** al terminar, dar enlace para ver el avance en un navegador externo y copiar el proyecto a la carpeta local.
11. Si un brief de página contradice las instrucciones generales, **manda el brief más reciente**.

---

## 3. Arquitectura de información

### Navegación (fuente única: `src/config/navigation.ts`; orden definido por Jennih el 12-11-2026: Quiénes somos va en segundo lugar, en móvil y web)

| Etiqueta | Etiqueta corta (barra móvil) | Ruta | Icono |
|---|---|---|---|
| Inicio | Inicio | `/` | home |
| Quiénes somos | Quiénes somos | `/nosotros` | storefront |
| Productos | Productos | `/productos` | eyeglasses |
| Servicios | Servicios | `/servicios` | visibility |
| Convenios | Convenios | `/empresas` | handshake |

- "Empresas" se renombró **"Convenios y operativos"** (título de la página); en el menú se muestra **"Convenios"**. La **ruta sigue siendo `/empresas`** (decidir si pasa a `/convenios`).
- "Nosotros" se renombró **"Quiénes somos"** en web y móvil; la **ruta sigue siendo `/nosotros`**.
- Barra inferior fija: **solo en móvil (< 768 px)**. Desde 768 px el menú es horizontal en el header.
- Header: logotipo + menú (≥ 768 px) + botón **"Contáctanos"** (abre WhatsApp) y, en todas las páginas, un botón flotante a la derecha **"Haz aquí tus consultas"** (WhatsApp, mensaje general). **No hay buscador** (se eliminó por decisión de Jennih).
- Footer: logo blanco sobre el azul, descripción breve, "Secciones" (mismos 5 enlaces), "Contacto" (dirección, horarios, Cómo llegar), © año, enlace a Política de privacidad.

### Rutas existentes
`/`, `/productos`, `/productos/anteojos-opticos`, `/productos/anteojos-de-sol`, `/productos/:slug` (24 modelos de demostración), `/servicios` (ancla `#agendar-hora` y `#solicitar-atencion`), `/empresas` (anclas `#alternativas`, `#solicitar-informacion`), `/nosotros` (ancla `#ubicacion`), `/politica-de-privacidad` (marcador), `/404` (noindex).

---

## 4. Contenido por página

> Los textos que se citan están implementados tal cual. Todo lo marcado PROVISIONAL se debe validar con el negocio.

### 4.1 Inicio (`/`)
Orden de secciones: hero carrusel → franja "entrega el mismo día" → por qué elegir Erredos → categorías → productos destacados → promociones → servicios → banner de convenios → ubicación y contacto.

**Hero carrusel (3 entradas, cada una con foto de fondo):**
1. *"Encuentra tus próximos / anteojos en óptica"* en dos líneas y, en una tercera línea, el **logo horizontal solo con "ERREDOOS"** (sin la palabra "ÓPTICA", que ya va escrita en el título) con el mismo ancho que la línea más larga (16-11-2026, pedido de Jennih; nombre accesible "Erredos") — "Descubre alternativas para tu día a día y conoce nuestros servicios de atención óptica." CTA: **Ver productos** (`/productos`) y **Conoce nuestros servicios** (`/servicios`).
2. Antetítulo "Atención visual" — *"Tu salud visual es importante."* — "Conoce nuestra atención visual y recibe orientación de nuestra tecnóloga." CTA: **Agenda tu hora** (`/servicios#agendar-hora`). **Letra pequeña antes del botón (16-11-2026, pedido de Jennih; primero iba debajo y ese mismo día pasó arriba del botón):** "Valor de la atención: $10.000. Gratis al comprar tus lentes ópticos en Erredos." (dato en `services.ts` → `pricing.fine`).
3. Antetítulo "Convenios y operativos" — *"Soluciones ópticas para tu organización."* — "Acercamos alternativas ópticas a empresas, sindicatos e instituciones." CTA: **Conocer convenios** (`/empresas`).

Comportamiento: cambia solo cada 7 s; se pausa con el puntero/foco encima, con cualquier uso manual y si el dispositivo pide reducir movimiento; controles anterior/siguiente/puntos/pausa; solo la diapositiva visible recibe foco; la primera lleva el único `h1`.

**Franja "Entrega el mismo día" (13-11-2026, texto entregado por Jennih):** título "¡Tus anteojos listos el mismo día!"; texto "Trae tu receta durante la mañana y consulta por la entrega el mismo día."; aclaración siempre visible "Aplica a tratamientos estándar. Lentes bifocales y con adelgazado pueden requerir más tiempo." No es una garantía universal de entrega. **PENDIENTE:** el negocio debe confirmar el beneficio, el horario límite de la mañana y qué tratamientos aplican.

**Accesos rápidos:** sección eliminada el 16-11-2026 (pedido de Jennih; eran 3 tarjetas con foto a Ópticos, Sol y Solicitar atención). Las fotos `acceso-*.jpg` quedan en `src/assets` sin uso (no se eliminaron). Esos destinos siguen accesibles desde el menú, el hero y las categorías.

**Por qué elegir Erredos** (PROVISIONAL, no agregar garantías ni descuentos; cada tarjeta con descripción de 2–3 líneas): **Atención y asesoría personalizada** — "Te escuchamos y orientamos para que elijas con confianza."; **Alternativas para distintas necesidades** — "Anteojos ópticos y de sol en distintos estilos."; **Orientación para elegir tus anteojos** — "Te ayudamos a encontrar la opción que va contigo."

**Explora nuestros productos** (antes "Explora por categoría"; 16-11-2026, pedido de Jennih), con la bajada "Desde anteojos ópticos y de sol hasta accesorios: elige la categoría que necesitas y encuentra el estilo que va contigo.": Anteojos ópticos (foto de banco provisional) / Anteojos de sol (foto de banco provisional) / Accesorios ópticos (foto de banco provisional con fundas de anteojos; enlaza a `/productos/accesorios`).

**Productos destacados:** 3 modelos de demostración (2 anteojos ópticos + 1 de sol; antes 6; 16-11-2026, pedido de Jennih; sin accesorios), enlace "Ver todos". Bajada (redactada por Claude, por validar): "Los favoritos de nuestros clientes: anteojos ópticos y de sol que combinan estilo y comodidad para tu día a día." ⚠️ "Favoritos de nuestros clientes" es un texto de maqueta: con el catálogo real debe respaldarse con productos realmente más pedidos.


**Promociones y ofertas:** sin texto visible (el `h2` "Promociones y ofertas" queda solo para lectores de pantalla). Muestra a ancho completo un afiche de banco provisional y el botón **Solicitar promoción** → WhatsApp (`whatsappMessages.promotion`). ⚠️ El afiche (2x1 en gafas graduadas, "válido hasta el 24 de diciembre o hasta agotar existencias") es una pieza de banco/otra marca **sin promoción real de Erredos**: se usa solo como maqueta por pedido de Jennih; debe reemplazarse por una promoción real de Erredos antes de mostrarlo al cliente. **No hay promoción real definida.**

**Nuestros servicios (16-11-2026):** las dos tarjetas de `services.ts`, ahora con **foto** (las mismas fotos provisionales de `/servicios`) y su propio botón: **Atención visual** → "Agenda tu hora" (`/servicios#agendar-hora`) y **Reparación y ajuste** → "Consulta por tu reparación" (WhatsApp, pestaña nueva). Se quitó el botón "Conocer servicios" (el usuario ya está viendo los servicios). La tarjeta de Atención visual muestra además el **valor y el beneficio** (ver 4.4).

**Banner de convenios (16-11-2026, más jerarquía por pedido de Jennih):** antetítulo "Convenios y operativos" / "Acercamos soluciones ópticas a empresas y organizaciones" / reseña: "Si tu empresa, sindicato o institución busca facilitar el acceso a productos y servicios visuales para sus integrantes, podemos conversar sobre convenios y coordinar operativos ópticos. Cuéntanos qué necesitas y nos ponemos en contacto." / botón "Conoce nuestros convenios".

**Ubicación:** "Visítanos en Puerto Montt", dirección, horarios, "Cómo llegar" (Google Maps; sin botón de WhatsApp desde el 13-11-2026, ya existe el flotante) y el **mapa de Google Maps incrustado** (reemplaza la foto del local; se repite en Servicios y Convenios, bloque `LocationBlock`).

### 4.2 Productos (`/productos`, `/anteojos-opticos`, `/anteojos-de-sol`)
- **Banner de entrada** (foto + texto, componente `PageBanner`): foto de banco provisional (`hero-productos.jpg`) con el título como `h1` e intro; pensado para cambiar foto y texto cuando haya contenido definitivo. Título: *"Encuentra los anteojos que van contigo"*. Intro: "Explora nuestra selección de anteojos ópticos y de sol. Descubre diferentes estilos, formas y colores."
- Ya no se muestra el aviso "Catálogo de demostración" (quitado a pedido de Jennih; `site.catalogIsDemo` sigue existiendo pero sin uso visible en el catálogo).
- Categorías: Todos / Anteojos ópticos / Anteojos de sol / Accesorios (ruta `/productos/accesorios`). Los 5 accesorios (funda, paño, cadena, estuche, kit de limpieza) son **datos de demostración** con precios y marcas ficticios y una sola foto de banco provisional; no tienen forma ni medidas, por eso no aparecen en el filtro de forma ni en la guía de medidas.
- **Sin buscador por nombre, código ni modelo** (decisión tomada con el brief de la fase 4).
- Filtros: Marca, Forma, Color, Estilo, Precio (mínimo/máximo). Solo aparecen los que tienen datos. Entre grupos se cumplen todos; dentro de un grupo basta uno; color considera todas las variantes del modelo.
- Orden: Destacados, Más recientes, Menor precio, Mayor precio (los de precio solo si hay precios).
- Chips de filtros activos, contador de resultados, carga progresiva (12 + "Ver más productos"), estado sin resultados ("No encontramos anteojos con estas características." + Limpiar filtros / Ver todos los productos).
- Los filtros viajan en la URL y se conservan al recargar, cambiar de categoría o volver desde el detalle (`sessionStorage` clave `erredos:catalog-url`).
- Cierre: "¿Necesitas ayuda para elegir tus anteojos? Escríbenos y te orientamos." + WhatsApp.
- **Tarjeta = un modelo con 1 a 4 colores.** Cambiar el color cambia imagen, nombre del color, mensaje de WhatsApp y enlace al detalle (que conserva `?color=`). **Precio (13-11-2026):** en anteojos ópticos siempre se muestra "Desde $X" (tarjeta y ficha; función `productPriceLabel`); sol y accesorios muestran el precio simple; el filtro de precio sigue usando el valor base. **Dos botones por tarjeta (13-11-2026):** "Ver producto" (lleva a la ficha, conserva `?color=`) y "Consultar" (abre WhatsApp con un mensaje en lista: modelo, marca, color, código y **precio** (el mismo que muestra la tarjeta, p. ej. "Desde $X" en ópticos; se omite si el producto es "Consultar precio"), más el enlace a la ficha con `?color=` cuando `site.url` esté configurado; el nombre accesible es completo). **Regla general de WhatsApp (13-11-2026):** si el botón corresponde a algo con imagen (un producto, la promoción), el mensaje la identifica y, con `site.url` configurado, incluye el enlace para que WhatsApp la muestre como vista previa; si no hay imagen, el mensaje se refiere al tema de la sección (servicios, atención visual, reparación, convenios, Quiénes somos, etc.). El mensaje de producto usa "este producto" (también sirve para accesorios). **Promoción:** "Hola, quisiera solicitar esta promoción de Óptica Erredos." + enlace a `public/promociones/promocion.jpg` (hay que reemplazar ese archivo al cambiar de promoción; hoy es el afiche provisional de banco). **Foto en WhatsApp (13-11-2026):** un enlace `wa.me` no puede adjuntar imágenes; la foto llega como vista previa del enlace de la ficha (`og:image`), por lo que requiere publicar el sitio y completar `site.url`.

**Modelo de datos** (`src/data/products.ts`), para reemplazar por el catálogo real:
- `Product`: id, slug, name, code, brand (`null` = sin confirmar, no se muestra), type (`opticos|sol`), shape, style, price (`null` = "Consultar precio"), description, promotion (`null` = sin promoción), featured, addedAt, variants[].
- `ProductVariant`: id, color (familia), hex, image (`null` = ilustración provisional).
- Familias de color: Negro, Café, Azul, Rojo, Transparente, Dorado, Plateado, Otros. Formas: Redondo, Cuadrado, Rectangular, Aviador, Cat Eye, Geométrico.
- **Imágenes de producto (13-11-2026):** las ilustraciones SVG se reemplazaron por fotos de stock provisionales de Pexels (enlace directo `images.pexels.com`, 6 de ópticos y 6 de sol, repetidas entre los 24 modelos; una foto por modelo, compartida por sus colores, por lo que cambiar de color no cambia la foto). Desde el 16-11-2026 **ya no llevan la etiqueta "Imagen referencial"** (pedido de Jennih: para la maqueta no sirve). Reemplazar por fotos propias en `variant.image`.
- 24 modelos de demostración: nombres ficticios (Urban 01, Lago 02…), marcas "Marca A–D", códigos `DEMO-01…`, estilos de prueba (Clásico, Moderno, Minimalista, Elegante, Deportivo) y precios ficticios. **Estilos y marcas se deben reemplazar por una clasificación real validada con el cliente.**
- El informe de benchmarking proponía además filtro por **género** (mujer, hombre, unisex) "si corresponde a los productos": hoy no está implementado porque no hay datos; es filtro candidato cuando llegue el catálogo real.

### 4.3 Detalle de producto (`/productos/:slug`)
Rediseñado el 12-11-2026 tomando como referencia la ficha de un producto de otra óptica (solo estructura; **Erredos no vende por la web**, no hay carrito, precio online ni envío).
Orden: Volver al catálogo (respeta filtros) y migas de pan; **galería** (foto principal + miniaturas); marca, nombre, código, promoción (si hay), precio o "Consultar precio", aviso de producto de demostración; etiqueta **"Garantía de 6 meses"**; selector de color; botón **Consultar por WhatsApp** (el mensaje incluye modelo, marca si existe, color y código) con la nota "Este producto no se compra por la web: escríbenos y te atendemos"; **Características** (marca, categoría, forma, estilo, colores); **Descripción** (PROVISIONAL); franja **"Garantía de 6 meses. Consulta las condiciones por WhatsApp o visítanos en Calle Talca 118"**; **Guía de medidas** (altura del marco, ancho del marco, ancho del puente, largo de la varilla, en mm, con esquemas); **Productos relacionados** (3 de la misma categoría, priorizando la misma forma).
- **Garantía de 6 meses:** dato entregado por Jennih; las condiciones de la garantía **no están definidas** (se remite a WhatsApp/tienda).
- **Medidas y fotos adicionales de demostración:** `product.measurements` (altura, ancho, puente, varilla; `null` oculta la guía) y `product.gallery` son datos ficticios hasta tener el catálogo real. Cambiar de color vuelve a la primera miniatura.

### 4.4 Servicios (`/servicios`)
Rediseño del 13-11-2026 (brief de Jennih): la página prioriza la **atención visual y su agenda online**; la reparación es secundaria. Orden: banner → Atención visual → Agenda → Reparación → FAQ → Ubicación.

- **Encabezado** (banner `PageBanner`, foto de banco provisional `hero-atencion-visual.jpg`): "Tu salud visual merece atención." / "Conoce nuestra atención visual y agenda tu hora de manera fácil y online." Un solo CTA: **"Agenda tu hora"** (`#agendar-hora`, desplazamiento suave; se anula con "reducir movimiento"). **Letra pequeña antes del botón (16-11-2026, pedido de Jennih; primero iba debajo y ese mismo día pasó arriba del botón):** "Valor de la atención: $10.000. Gratis al comprar tus lentes ópticos en Erredos."
- **Atención visual** (sección protagonista, id `solicitar-atencion` para el enlace de Inicio): foto a la izquierda (arriba en móvil), sin etiqueta "Imagen referencial" (se quitó el 16-11-2026), y contenido a la derecha (sin antetítulo; el protagonismo lo da el tamaño y la posición): "Atención visual", "Nuestra tecnóloga médica evaluará tu visión y te guiará paso a paso para encontrar los lentes ideales para ti." (texto entregado por Jennih el 13-11-2026; ya no menciona la receta; **por confirmar con el negocio** el título "tecnóloga médica" y mantener la aclaración de que no es una consulta oftalmológica), aclaración discreta "Esta atención no corresponde a una consulta oftalmológica." y CTA **"Agenda tu hora"**.
- **Agenda online** (§6): título "Agenda tu atención visual", "Elige el día y horario que más te acomode y solicita tu atención online." Una nota (la edad mínima) y, debajo, un paso a paso de 3 pasos: "Elige la fecha y la hora" → "Completa tus datos" → "¡Listo! Tu hora queda agendada" (13-11-2026, pedido de Jennih). Se quitaron la nota "Cada atención dura 30 minutos + horarios" (duplicaba el calendario) y "Tu solicitud queda pendiente" (13-11-2026, pedido de Jennih: la confirmación es un trámite interno del negocio, no una condición para que la hora exista).
- **Reparación y ajuste de anteojos** (bloque horizontal compacto, foto provisional de reparación, sin etiqueta "Imagen referencial"): "¿Tus anteojos necesitan un ajuste o reparación? Contáctanos y cuéntanos qué les sucede para orientarte." + "Revisamos cada caso: no todo tiene reparación." + botón secundario **"Consulta por tu reparación"** (abre WhatsApp con el mensaje de reparación). No hay formulario de reparación.
- **Se quitó** la sección "¿Cómo solicitar atención?" (3 pasos con botones de WhatsApp) para no competir con la agenda ni alargar la página, y la lista de motivos de reparación (los datos siguen en `services.ts`, sin uso).
- **Preguntas frecuentes** (acordeón, 4 preguntas desde el 16-11-2026): ¿Cómo puedo reservar una atención? (con respuesta), ¿Qué debo llevar a mi atención visual? (13-11-2026, texto de Jennih: llevar los anteojos actuales o la receta anterior; igual se evalúa la visión; redacción de Claude, por validar con el negocio), ¿Cómo puedo consultar por una reparación? (con respuesta, por WhatsApp).
- **Ayuda junto a las preguntas (13-11-2026):** al costado del título, "¿Tienes otra duda? Escríbenos y te orientamos." + botón "Escribir por WhatsApp" (mensaje general).
- **Ubicación y contacto:** sin cambios.

**Valor de la atención visual (16-11-2026, dato entregado por Jennih/el negocio):** costo **$10.000**; **gratis si el cliente compra sus lentes ópticos (cristales y marco) en Erredos**. Texto en pantalla (ajustado el 16-11-2026 a pedido de Jennih): "Valor de la atención: **$10.000**" + "¡Atención gratis al comprar tus lentes ópticos en Erredos!" (componente `ServicePrice`, se muestra en la tarjeta de Atención visual de Inicio y en la de Servicios; dato en `services.ts` → `pricing`). la condición exacta (si "lentes ópticos" incluye siempre cristales **y** marco, si aplica a todos los marcos, a promociones, a bono Fonasa, vigencia) **debe confirmarse con el negocio**. Desde el 16-11-2026 el valor y el beneficio también aparecen destacados junto a la agenda (tarjeta coral sobre la nota de edad) y **como letra pequeña justo antes del botón "Agenda tu hora" del hero de Inicio (diapositiva "Atención visual") y del banner de Servicios** (versión corta en `pricing.fine`).

**Servicios (`src/data/services.ts`):** Atención visual (descripción y aclaración del brief) y Reparación (descripción del brief). La regla de edad ("No atendemos a menores de 10 años…") vive en la agenda (`site.appointments.ageNotice`).

**Regla clínica importante:** nunca presentar la atención óptica como equivalente a una consulta oftalmológica.

**FAQ de Servicios:** 4 preguntas en un solo grupo; desde el 16-11-2026 incluye "¿Cuánto cuesta la atención visual?" (valor $10.000 y que es gratis al comprar lentes ópticos en Erredos), todas con respuesta.

### 4.5 Convenios y operativos (`/empresas`)
Hero con foto de fondo (banner `PageBanner`, la misma foto de banco `hero-convenios.jpg` del carrusel de Inicio; ⚠️ se lee el pendón de otra óptica, reemplazar) "Soluciones ópticas para empresas y organizaciones"; a quiénes está dirigido (Empresas, Sindicatos, Instituciones, Establecimientos educacionales, Agrupaciones y organizaciones — son públicos objetivo, **no clientes ni convenios vigentes**); alternativas de colaboración (cada tarjeta lleva una foto a sangre arriba: `convenios-alianza.jpg` —examen con lámpara de hendidura, 678×452— y `convenios-operativo.jpg` —operativo con lentes de prueba—; ⚠️ son fotos de otras instituciones, con sus logos visibles (Alemania/Esalud y CIS Universidad) y personas reales, entregadas por Jennih como referencia: **reemplazar por fotos propias o con permiso antes de mostrar al cliente o publicar**) (**Convenios**: "Una alianza con Óptica Erredos para acercar nuestros productos y servicios a tus integrantes."; **Operativos ópticos**: "Coordinamos una instancia de atención óptica para tu organización. Consulta las condiciones con nuestro equipo."; se quitó el recuadro "Pensado para" y la bajada de la sección pasó a "Elige la que mejor se adapte a tu organización."; se quitó la etiqueta visible "Condiciones por confirmar", pero las condiciones siguen sin definirse); ¿Cómo funciona? (Cuéntanos → Revisamos → Nos ponemos en contacto); formulario; contacto directo por WhatsApp; ubicación.
No se mencionan descuentos, beneficios, convenios existentes ni condiciones.

### 4.6 Quiénes somos (`/nosotros`)
Hero con título "Cuidamos tu visión y acompañamos tu bienestar" (cambio pedido por Jennih; el resto del hero igual) (banner con foto de banco de un examen visual con lámpara de hendidura, **provisional**: muestra equipos y personas que el negocio no ha confirmado); **Nuestra historia** (foto del interior del local de Erredos, tomada de una publicación del negocio con su logo y el texto "En Óptica Erre Dos encuentras tu estilo de lentes"; 16-11-2026, pedido de Jennih: texto redactado por Claude a partir de datos entregados por Jennih —Erredos nació de **dos hermanos de apellido Rojas** (de ahí el nombre "Erre Dos") y un texto base de la óptica—, más cercano, simple y corto. Texto final (16-11-2026, entregado por Jennih): título "Una óptica familiar, hecha para tu estilo de vida" y un párrafo: "Nacimos en Puerto Montt de la mano de dos hermanos (de ahí, Erre Dos). Combinamos atención cercana y diseño para llevar soluciones ópticas a toda la Región de Los Lagos, porque unos buenos lentes no solo te hacen ver mejor: expresan quién eres." Ya no menciona el apellido Rojas. **Por validar con el negocio:** nombres de los hermanos, año de fundación, que el nombre "Erre Dos" viene de la inicial del apellido, y el recorrido del negocio; no se inventaron); **Nuestra forma de trabajar** (4 principios, propuesta a validar: Cercanía, Atención personalizada, Accesibilidad, Compromiso); **Nuestro equipo de trabajo** (nueva, 16-11-2026, pedido de Jennih; va entre "Nuestra forma de trabajar" y "Nuestro espacio"; reemplaza la omisión de "Equipo"): eyebrow "Quiénes te atienden", título "Nuestro equipo de trabajo" y reseña redactada por Claude a partir de lo pedido (personal profesional, capacitado y cercano): "Somos un equipo profesional, capacitado y cercano. Te escuchamos, te orientamos y te acompañamos en cada paso para que encuentres la solución visual que necesitas." Debajo, **3 tarjetas** con foto, nombre y cargo. **Datos de ejemplo (16-11-2026, pedido de Jennih):** las fotos son de banco entregadas por ella (⚠️ la tercera trae marca de agua de banco; licencias desconocidas) y los **nombres son ficticios** (primer nombre y primer apellido): *Camila Fuentes* — Tecnóloga médica en Oftalmología; *Daniela Vargas* — Encargada de convenios y operativos; *Ricardo Alvarado* — Gerente General. Los cargos los definió Jennih; ni nombres, ni fotos ni cargos están confirmados con el negocio (la maqueta ya no muestra etiqueta de aviso; pendiente solo en §11). Para reemplazarlas: editar el arreglo `team` de `nosotros.astro` (`name`, `role`, `photo` importada desde `src/assets`). "Profesional" y "capacitado" son afirmaciones entregadas por Jennih: validarlas con el negocio; no se inventaron títulos ni cargos; **Tecnología que utilizamos** (nueva, 16-11-2026, pedido de Jennih; va bajo "Nuestro equipo de trabajo"): eyebrow "Cada lente, con respaldo", título **"Tu visión no merece menos que tecnología de vanguardia"** y un párrafo resumido (16-11-2026, pedido de Jennih; el título no cambió): "Cada lente que elaboramos une tecnología de precisión y el cuidado de nuestros profesionales, con la inmediatez de talleres locales y el respaldo de laboratorios de alto renombre." (⚠️ "talleres locales" y "laboratorios de alto renombre" por validar con el negocio). **3 tarjetas (textos de Jennih, 16-11-2026):** *Innovación y precisión* ("Equipamiento de última generación para lograr graduaciones exactas y montajes milimétricos que maximizan tu confort visual."), *Asesoría experta* ("Profesionales apasionados por tu salud visual, listos para guiarte y cuidar cada detalle de tus nuevos lentes.") y *Alianzas de confianza* ("La agilidad de nuestro taller local combinada con el respaldo de los laboratorios ópticos más prestigiosos del mundo."; ⚠️ "última generación" y "más prestigiosos del mundo" por validar). Debajo, subtítulo "Conoce nuestras instalaciones" con **2 fotos de banco** entregadas por Jennih (examen con lámpara de hendidura y con autorrefractómetro; `instalaciones-1/2.jpg`; arreglo `facilities` de `nosotros.astro`). No se nombra ningún laboratorio, marca, equipo ni modelo: **por validar con el negocio** qué tecnología/equipamiento tienen, qué se elabora en el local, con qué laboratorios trabajan y si pueden nombrarse; (sin etiqueta visible desde 16-11-2026); **Nuestro espacio** (kicker "Ven a conocernos", título "Te esperamos en nuestro local", bajada "Pásate por Calle Talca 118, Puerto Montt, y encuentra tus próximos lentes con la mejor asesoría."; texto de Jennih 16-11-2026, "la mejor asesoría" por validar; 3 fotos de banco: fachada, equipo e interior); **Conoce dónde estamos** (dirección, horarios, Google Maps y mapa de Google Maps incrustado y visible de inmediato (carga diferida)). La sección final "Estamos aquí para ayudarte" (3 accesos) se eliminó el 16-11-2026 (pedido de Jennih).
Las secciones "Equipo" y "Tecnología que utilizamos" no estaban en el brief original de esta página y se agregaron el 16-11-2026 a pedido de Jennih. No se inventó historia.

### 4.7 Política de privacidad y 404
Privacidad: marcador; el texto legal debe entregarlo o validarlo el negocio. 404: "No encontramos esta página" con botones a Inicio y Productos (`noindex`).

---

## 5. Datos del negocio (`src/config/site.ts` — fuente única)

| Dato | Valor | Estado |
|---|---|---|
| Nombre | Óptica Erredos | Confirmado |
| Dirección | Calle Talca 118, Puerto Montt | Confirmado |
| Horario | Lunes a viernes 09:30 a 18:15 hrs; sábados 10:00 a 13:00 hrs | Confirmado (12-11-2026). Domingo no informado: no se muestra |
| WhatsApp | `whatsappNumber: ''` | **PENDIENTE**. Mientras esté vacío los botones abren WhatsApp con el mensaje listo pero sin destinatario |
| Dirección pública del sitio | `site.url: ''` | **PENDIENTE**. Sin ella el mensaje de WhatsApp de un producto no incluye el enlace (ni, por tanto, la foto como vista previa). Configurar también `site` en `astro.config.mjs`. Sitio provisional: https://optica-erredos.vercel.app |
| Teléfono fijo | `phone: '65 2 123 456'` | **FICTICIO** (maqueta): reemplazar por el real. Se muestra con enlace `tel:` en Ubicación (Inicio, Servicios, Convenios, Quiénes somos) y en el footer |
| Redes sociales | `social: []` | **PENDIENTE** (vacío = no se muestran) |
| Dominio | `astro.config.mjs → site` comentado | **PENDIENTE** (canónicas y sitemap) |
| Logo | `logo.png` 1277×915 (nuevo, 16-11) | Falta el vector (la versión en blanco ya está en el footer) |
| Destino de formularios | `formEndpoint: ''` | **PENDIENTE** |
| `prototypeMode` | `true` | Maqueta funcional (ver §7) |
| `catalogIsDemo` | `true` | Cambiar a `false` al cargar el catálogo real |

**Mensajes de WhatsApp por sección (13-11-2026, `src/lib/whatsappContext.ts`):** los botones generales (header "Contáctanos", flotante "Haz aquí tus consultas", Ubicación y Quiénes somos) indican desde dónde se consulta: Inicio → "…una consulta a Óptica Erredos (sección Inicio)."; Productos → "…por los productos…"; Ópticos/Sol → "…por los anteojos ópticos / de sol…"; Accesorios, Servicios y Convenios usan su mensaje propio; Quiénes somos → "(sección Quiénes somos)"; ficha de producto → "…por el modelo X, marca Y (código Z)." Reparación, agenda, promoción y tarjetas de producto ya tenían su mensaje específico.

**Mensajes de WhatsApp** (`src/lib/whatsapp.ts`): general ("Hola, quisiera hacer una consulta a Óptica Erredos."); producto (modelo, marca si existe, color en minúscula y código); ayuda para elegir; servicios; atención visual; reparación; convenios/operativos. El formulario de organizaciones y la agenda arman además un mensaje con los datos ingresados.

---

## 6. Agenda de atención visual (`/servicios#agendar-hora`)

Pedida por Jennih para reemplazar un formulario simple; rediseñada el 13-11-2026; desde el mismo día tiene **dos pasos** más la pantalla final (se eliminó el paso de revisión por pedido de Jennih: sumaba un paso innecesario), con indicador de progreso (círculos numerados, check en el paso completado, paso actual con `aria-current`):
1. **Selecciona fecha y hora:** vista semanal con mes y año, rango de la semana, siete días (domingo y días pasados bloqueados), flechas de semana, **leyenda** (con horas / elegido / sin horas, distinguidos por forma y texto), horas del día elegido en "Mañana" y "Tarde"; la elección queda visible.
2. **Completa tus datos:** resumen de la fecha y hora (con "Cambiar"), nombre y apellido, correo electrónico, **confirmación del correo** (campo "Confirma tu correo", debe ser igual al anterior; decisión de Jennih 13-11-2026 para asegurar datos correctos del usuario), teléfono de contacto y **rango de edad del paciente**; etiquetas visibles, ejemplos de formato (placeholder) y mensajes de error. El botón final es **"Solicitar hora"** (en lugar de "Continuar"): valida y envía la solicitud de inmediato. Se conservó el rango de edad por la regla de menores de 10 años; **decisión por confirmar con Jennih/negocio** (el brief pedía solo nombre, correo y teléfono).
3. *(Eliminado 13-11-2026)* El paso "Revisa tu solicitud" ya no existe: tras "Solicitar hora" se muestra directamente la reserva (pantalla final).
- **Estados:** hora seleccionada; enviando (botón inactivo con indicador y "Enviando…"); error de validación (cuenta de campos y mensaje junto a cada uno); error al enviar (mensaje + envío por WhatsApp); **"¡Tu hora quedó agendada con éxito!"** (única acción: "Solicitar otra hora"; sin botón de WhatsApp) con un mensaje tipo correo de confirmación que se entrega al instante: "Te enviamos la confirmación a [correo]" + asunto "Tu hora en Óptica Erredos está agendada", saludo con el nombre, día y hora, dirección y aviso de avisar por WhatsApp si no puede asistir (texto redactado por Claude, por validar). Sin aviso de confirmación posterior (decisión de Jennih 13-11-2026: la confirmación previa es un trámite interno del negocio; no se promete "24 horas antes"). **En la maqueta no se envía ningún correo real**; requiere un servicio de envío antes de publicar.
- En la maqueta (`prototypeMode`) no se envía ni se guarda nada.

**Reglas** (en `site.appointments`):
- Atención de **30 min**. Lunes a viernes 09:30–13:00 y 14:00–17:00 (13 horas/día: 09:30…12:30 y 14:00…16:30). Sábado 10:00–13:00 (6 horas) — **SUPUESTO** (se usó el horario del local; el negocio no indicó el bloque del sábado). Domingo sin atención.
- Se puede pedir hora desde mañana y hasta 6 semanas adelante — **SUPUESTO por confirmar**.
- Rangos de edad: 11 a 18, 19 a 25, 26 a 35, 36 a 45, 46 o más años.
- Aviso permanente: "No atendemos a menores de 10 años. Ellos necesitan una consulta previa con un oftalmólogo."
- Inconsistencia abierta: el aviso dice "menores de 10" y los rangos parten en 11, por lo que **una persona de 10 años no calza en ningún rango**. Confirmar edad mínima.

**Limitación estructural:** no hay sistema de agenda. El sitio calcula horas desde el horario pero **no sabe cuáles están tomadas, ni feriados ni ausencias**; dos personas podrían pedir la misma hora. En la maqueta, la hora "agendada" deja de ofrecerse solo en ese navegador/sesión (`sessionStorage`). Para disponibilidad real se necesita un servicio de reservas o calendario integrado (fuera de alcance; requiere decisión).

---

## 7. Maqueta funcional vs. publicación real

`site.prototypeMode: true` hace que agenda y formulario de convenios recorran el flujo completo, validen, muestren "Enviando…" y terminen en pantalla de confirmación, **sin enviar ni guardar nada**. Se quitaron los avisos de "modo demostración" por decisión de Jennih (quiere ver cómo funciona aunque no esté conectado).

**⚠️ Antes de publicar:** una persona real creería que su hora o solicitud quedó registrada. Hay que (a) conectar `site.formEndpoint` (POST JSON) y un sistema de agenda, o (b) poner `prototypeMode: false` (vuelven los avisos de demostración y la alternativa por WhatsApp).
Con `formEndpoint` configurado se envía un POST con JSON y se muestra confirmación o error reales; **esa vía no se ha probado contra un servicio real**.

**Validaciones** (`FormBehavior.astro`): obligatorios con mensaje junto al campo, resumen de errores con foco al primero, correo válido, teléfono con al menos 8 dígitos, participantes > 0 o vacío, confirmación de correo igual al correo, un tipo de solicitud elegido.

**Formulario de convenios — campos:** nombre y apellido*, empresa u organización*, cargo (opcional), correo*, **confirmación del correo*** (campo "Confirma tu correo electrónico", debe ser igual al correo; pedido de Jennih 13-11-2026 porque el correo es la única vía para contactar a la organización; se revisa al salir del campo, al corregir el correo original y al enviar; mensaje "Los correos no coinciden. Escríbelo igual que el de arriba."), teléfono*, cantidad de participantes (etiqueta "Cantidad de participantes (aprox.)", en una sola línea; campo opcional), tipo de solicitud* (lista desplegable con una sola selección: Convenio óptico / Operativo óptico / Ambos / Necesito más información), mensaje (opcional). Nota de privacidad: "Usaremos estos datos solo para responder tu solicitud. No pedimos información de los participantes." **Ejemplos (13-11-2026):** los campos de texto llevan un placeholder "Ej.: …" genérico (no son datos reales), también en la agenda.
**Confirmación del envío (13-11-2026, pedido de Jennih):** al enviar la solicitud con éxito se abre una **ventana emergente** (pop-up) con el título "¡Tu solicitud ha sido recibida exitosamente!", el texto "El equipo de Óptica Erredos se pondrá en contacto contigo a la brevedad posible." y un botón **"Salir"** que lleva a la página principal (`/`). Ya no se muestra el mensaje en línea bajo el botón. En la maqueta no se envía nada (ver arriba).

---

**Mensajes de error de envío (13-11-2026, pedido de Jennih).** Existen para cuando el formulario se conecte a un servicio real; en la maqueta no ocurren solos. Valen para la agenda y para Convenios. Todos conservan lo escrito, explican qué pasó y ofrecen una salida. Textos provisionales, por validar con el negocio:

| Caso | Título | Texto | Acciones |
|---|---|---|---|
| Sin conexión | Parece que no tienes conexión. | Tus datos siguen aquí. Revisa tu internet e inténtalo de nuevo. | Reintentar · WhatsApp |
| Demora (15 s) | El envío está tardando más de lo normal. | No sabemos si tu solicitud llegó. Inténtalo de nuevo; si ya la recibimos, te lo confirmaremos. | Reintentar · WhatsApp |
| Falla del servidor (5xx) | Tuvimos un problema de nuestro lado. | No es culpa tuya y tus datos siguen aquí. Inténtalo en unos minutos o escríbenos por WhatsApp. | Reintentar · WhatsApp |
| Datos rechazados (400/422) | Revisa algunos datos. | Hay información que no pudimos aceptar. Corrígela y vuelve a enviar. | Mensaje junto al campo señalado |
| Demasiados envíos (429) | Hiciste varios envíos seguidos. | Espera un minuto y vuelve a intentarlo. También puedes escribirnos por WhatsApp. | Reintentar · WhatsApp |
| Hora ocupada (409, solo agenda) | Esa hora ya no está disponible. | La hora del [día, hora] fue tomada por otra persona mientras completabas tus datos. Elige otra; tus datos siguen guardados. | Vuelve al paso 1 con esa hora tachada |
| Otro error | No pudimos enviar tu solicitud. | Tus datos siguen aquí. Inténtalo nuevamente o escríbenos por WhatsApp. | Reintentar · WhatsApp |

Contrato esperado del servicio: 409 = hora tomada; 400/422 con `{ "errors": { "campo": "mensaje" } }`; 429 = límite; 5xx = servidor. **Cómo verlos en la maqueta:** agregar `?simular-error=red|tiempo|servidor|validacion|limite|conflicto|generico` a la dirección (p. ej. `/servicios?simular-error=conflicto`; en la vista previa, tras el `#`). Falla una sola vez; "Reintentar" ya funciona. Solo actúa con `prototypeMode` activo.

## 8. SEO y contenido local

Implementado: `lang="es-CL"`, `<title>` con patrón "{página} | Óptica Erredos", meta description por página, Open Graph básico, `theme-color #05596a`, favicon, un solo `h1` por página, jerarquía de títulos, rutas legibles e indexables (HTML por ruta), `noindex` en 404, canónica solo si se define `site`.
Pendiente: dominio, sitemap, datos estructurados (LocalBusiness), imágenes reales optimizadas.

Recomendaciones del informe de benchmarking (no implementadas como contenido todavía):
- Búsquedas locales a investigar y validar (no repetir artificialmente): óptica en Puerto Montt, anteojos ópticos en Puerto Montt, lentes de sol en Puerto Montt, atención óptica en Puerto Montt, operativos ópticos para empresas en Puerto Montt.
- Una página/sección por intención: Inicio, anteojos ópticos, anteojos de sol, atención y horas, convenios y operativos, contacto.
- Perfil de Negocio de Google completo (horarios, fotos reales, reseñas auténticas) y medición con Search Console.
- Contenido que responda dudas reales (forma del rostro, óptico vs. sol, cuándo renovar, lentes para niños, cómo funciona un operativo). **Producción mensual de artículos quedó fuera de alcance salvo acuerdo expreso.**

---

## 9. Benchmarking que originó las decisiones

Documento: `optica erredos.pdf` (en el Project). Referentes: GMO, Rotter & Krauss, Econópticas y Chile Suplementos (referente **funcional** porque al dueño le resulta fácil buscar con filtros). Siete parámetros: propuesta de valor, descubrimiento y filtros, ofertas, conversión y contacto, captación de servicios, captación de convenios, visibilidad en Google.
Decisiones derivadas: catálogo fácil con filtros **útiles** (no más filtros por tenerlos; ~50 productos); sección de ofertas y destacados con condiciones y vigencia claras (no descuentos permanentes sin estrategia); lenguaje que vende soluciones, no solo productos; WhatsApp visible y consulta por producto con nombre/código; solicitud de hora sencilla; sección propia de convenios y operativos (no escondida en el pie); dirección, horarios y cómo llegar siempre a mano. Ventaja buscada: experiencia sencilla y cercana en Puerto Montt, no competir en cantidad de marcas.
Modalidades de promoción a evaluar con el negocio: descuento directo, segunda unidad, packs, promoción temporal, campañas estacionales (regreso a clases, Día de la Madre/Padre), beneficio por convenio.

---

## 10. Historial de fases y decisiones relevantes

| Etapa | Qué se hizo | Cambios de rumbo |
|---|---|---|
| 1–2 | Stack (Astro + CSS propio), tokens, App Shell, control de texto | Búsqueda del header enviaba a `/productos?q=` (luego eliminada) |
| 3 Inicio | Todas las secciones, tarjetas, servicios provisionales | — |
| Entre fases | Barra inferior solo móvil; menú tradicional desde 768 px | Pedido de Jennih |
| 4 Productos | Catálogo con filtros, detalle, color por variante, 24 modelos demo | Brief sin buscador por nombre/código |
| 5 Servicios | Hero, 2 servicios, pasos, FAQ (rediseñada el 13-11-2026: atención visual protagonista, agenda en 3 pasos, reparación secundaria; ver §4.4) | El brief reemplazó el formulario de solicitud por WhatsApp (más tarde se agregó la agenda) |
| 6 Convenios | Página B2B + formulario | "Empresas" → "Convenios y operativos" |
| 7 Quiénes somos | Historia provisional, principios, espacio, ubicación | "Nosotros" → "Quiénes somos"; horarios confirmados y cargados |
| Ajustes Inicio | Hero → carrusel de 3 entradas; acceso "Anteojos ópticos" con foto; "Agendar hora"; agenda semanal; buscador fuera; botón "Contáctanos"; maqueta funcional; hero visual en 3 iteraciones (ver `design.md`) | — |
| Pendiente | **Fase 8: QA y validación** (no iniciada; espera aprobación de las páginas y las decisiones abiertas) | — |

---

## 11. Pendientes

### Del negocio (Mauricio / tecnóloga)
- Número de WhatsApp; redes sociales; dominio; logo vectorial.
- Tecnología: confirmar equipamiento, qué lentes se elaboran en el local, laboratorios con los que trabajan (¿se pueden nombrar?) y aportar 2 fotos de las instalaciones.
- Equipo: nombre, cargo y foto reales de 3 personas, que reemplazan los nombres ficticios y las fotos de banco de la maqueta (y validar que se les describa como "profesionales y capacitados").
- Historia: validar el texto redactado (hermanos Rojas, origen del nombre) y aportar año de fundación, nombres y recorrido si se quieren incluir; validación de los 4 principios y del texto del hero de Quiénes somos.
- Servicios: alcance, procedimientos, duración, requisitos; respuestas de 5 FAQ; edad mínima real; bloque de atención del sábado; anticipación mínima/máxima para pedir hora; feriados; cómo evitar horas duplicadas y quién confirma cada solicitud; a dónde llegan las solicitudes.
- Convenios: condiciones, beneficios, alcance de operativos (capacidad, mínimos, cobertura), públicos reales.
- Catálogo real (~50 productos con fotos, marcas, códigos, formas, colores, precios, estilos, género si aplica) y promociones reales.
- Texto de la política de privacidad; destino de formularios.
- Fotografías reales: fachada, interior, exhibición, atención, productos. Si se atiende los domingos.

### De decisión (Jennih)
1. Ruta `/empresas` vs. `/convenios` y `/nosotros` vs. `/quienes-somos`.
2. Edad límite: 10 vs. 11 años (o 12) en aviso y rangos.
3. Supuestos de la agenda (sábado, 6 semanas, desde mañana) y si se muestra "domingo cerrado".
4. (Resuelta 16-11-2026) Se eliminaron los accesos rápidos de Inicio.
5. (Resuelta 12-11-2026) Los tres accesos rápidos llevan foto.
6. Mantener o quitar "Catálogo de demostración" y las etiquetas "provisional" para presentaciones.
7. Dónde ubicar el texto del hero 1 (los anteojos de la izquierda quedan atenuados bajo el degradado).
8. Si se conecta un sistema de agenda real.

### Imágenes (antes de mostrar al cliente)
- `convenios-alianza.jpg` y `convenios-operativo.jpg` (Convenios → alternativas): fotos de otras instituciones con logos y personas reales; baja resolución la primera (678×452) → reemplazar.
- `hero-convenios.jpg`: se lee el pendón de otra óptica ("Olive Dexter") → reemplazar.
- `espacio-exterior.jpg`, `espacio-equipo.jpg`, `espacio-interior.jpg` (Quiénes somos → Nuestro espacio): ⚠️ son fotos de **otra óptica (se lee el letrero "OpticaPRO" en las tres) y muestran personas reales** que no son del equipo de Erredos. Usarlas solo en la maqueta: reemplazar por fotos propias antes de mostrar al cliente o publicar.
- `equipo-1.jpg`, `equipo-2.jpg`, `equipo-3.jpg` (Quiénes somos → equipo): fotos de banco de personas reales que no son del equipo de Erredos; la tercera conserva marca de agua → reemplazar por fotos del equipo real.
- `instalaciones-1.jpg` y `instalaciones-2.jpg` (Quiénes somos → tecnología): fotos de banco con personas y equipos que no son de Erredos → reemplazar por fotos reales de las instalaciones.
- `hero-quienes-somos.jpg` (740×493, se ve blanda en pantallas grandes): examen visual con equipo no confirmado → reemplazar por foto real del local/equipo.
- `hero-atencion-visual.jpg`: muestra equipos/procedimiento no confirmados → reemplazar o validar.
- `acceso-opticos.jpg`: tiene marca de agua de banco de imágenes. `acceso-atencion.jpg` (612×386) muestra un examen con equipos que el negocio no ha confirmado. `acceso-sol.jpg` (612×408) es una foto de banco entregada por Jennifer; licencia desconocida y resolución baja.
- Fotos 2 y 3 del hero miden ~1000 px de ancho (blandas en pantallas grandes). **Licencias de uso desconocidas.**
- Todas las imágenes del sitio son provisionales; no inventar marcas distribuidas por Erredos. Como la etiqueta "Imagen referencial" se quitó de la maqueta (16-11-2026), esta lista es la única señal de qué fotos hay que reemplazar.

### Técnicos
- Fase 8 (QA): lectores de pantalla reales, dispositivos físicos, Safari y Firefox **no verificados**; envío real de formularios no probado; mapa incrustado no comprobado contra el punto exacto del local.
- README del repo reescrito el 13-11-2026 (estado real, rutas, estructura, cómo reemplazar catálogo, pendientes antes de publicar).

---

## 12. Flujo de trabajo técnico (para retomar)

- **Código:** `/home/claude/optica-erredos` en el entorno de trabajo de Claude (no persiste entre sesiones); la copia vigente es la carpeta local de Jennih. Para reconstruir: `npm install`, `npm run dev | build | preview`.
- **Vista previa:** se genera un HTML único con CSS (hojas enlazadas **y** los `<style>` en línea que Astro deja en cada página), fuentes e imágenes incrustados y navegación por hash, y se publica como artefacto (slug `65db568a-93cf-418b-ac98-5d1eb946a571`).
- **Verificación:** Chrome headless con Playwright contra `astro preview`, en 320/390/768/1024/1440 px y texto al 100 % y 150 %; sin desborde horizontal, un solo `h1`, enlaces internos sin errores.
- **Notas de fase** viven en el Project (`claude/*.md`) y en este archivo; este documento las consolida.
- Las imágenes externas no se pueden descargar desde el entorno de Claude: las fotos las entrega Jennih.

---

## 13. Registro de cambios de este archivo

| Fecha | Cambio |
|---|---|
| 12-11-2026 | Creación del archivo a partir de la lectura completa del proyecto (código, datos, 9 notas de fase, PDF de benchmarking e instrucciones). |
| 12-11-2026 | **Resumen del día** (el detalle vive en cada sección): fotos de stock en productos; "Quiénes somos" pasa al 2.º lugar del menú; categorías, accesos y promociones de Inicio con foto; categoría Accesorios; detalle de producto rediseñado (galería, garantía, medidas, relacionados); banners con foto (`PageBanner`) en Quiénes somos, Productos y Servicios; fotos en las tarjetas de Servicios; botón flotante de WhatsApp; se quitan las etiquetas "Contenido provisional" (lo provisional sigue listado en §11); vista previa corregida (`<style>` en línea) (§3, 4.1–4.6, §12). |
| 13-11-2026 | **Resumen del día** (el detalle vive en cada sección): Footer y ubicación sin botón de WhatsApp; "Agenda tu hora" en todo el sitio; banner con foto en Convenios; hover de tarjetas solo web; mapa incrustado en lugar de la foto del local; Servicios rediseñada (atención visual protagonista, agenda en banda azul con 2 pasos, confirmación tipo correo, "Confirma tu correo", reparación secundaria, FAQ en dos columnas); Convenios con "Tipo de solicitud" desplegable, confirmación en ventana emergente, confirmación de correo y ejemplos "Ej.: …"; mensajes de error de envío y simulación `?simular-error=`; tarjetas de producto con "Ver producto" y "Consultar", precio "Desde $X" en ópticos; WhatsApp con modelo, color, código, precio y enlace; franja "entrega el mismo día"; botón flotante y control de texto con más presencia; carrusel de marcas agregado y retirado; textos más breves; publicación en Vercel; revisión de código para el desarrollador (§3–§7, §12). |
| 16-11-2026 | Logo nuevo (`logo.png`, 1277×915, apilado ÓPTICA ERRE DOOS con lentes, más nítido) en el header, con el mismo tamaño que ya tenía. El footer sigue usando este mismo logo sobre su placa blanca **hasta que Jennih entregue la versión en blanco** (pendiente). |
| 16-11-2026 | Inicio: se elimina la sección de accesos rápidos (3 tarjetas con foto) bajo la franja "entrega el mismo día" (4.1). Código y CSS retirados; las fotos `acceso-*.jpg` se conservan sin uso. |
| 16-11-2026 | Inicio: el título "Explora por categoría" pasa a "Explora nuestros productos" y se agrega una bajada breve (4.1). |
| 16-11-2026 | Inicio → Productos destacados: pasan de 6 a 3 (2 ópticos + 1 de sol) y la bajada pasa a "Los favoritos de nuestros clientes: …" (4.1). |
| 16-11-2026 | Inicio → Nuestros servicios: foto en cada tarjeta, botón "Agenda tu hora" (Atención visual) y "Consulta por tu reparación" por WhatsApp (Reparación); se quita "Conocer servicios". Nuevo dato: la atención visual cuesta $10.000 y es gratis al comprar lentes ópticos en Erredos (en Inicio, Servicios y FAQ) (4.1, 4.4). |
| 16-11-2026 | Valor de la atención visual: el beneficio pasa a "¡Atención gratis al comprar tus lentes ópticos en Erredos!" (4.4). |
| 16-11-2026 | Inicio → hero 1: el nombre "Óptica Erredos" del título se reemplaza por el logo horizontal (4.1). |
| 16-11-2026 | Inicio → hero 1: el título pasa a dos líneas fijas y el logo horizontal a una tercera línea, del mismo ancho que el texto (4.1). |
| 16-11-2026 | Inicio → hero 1: el título dice "Encuentra tus próximos anteojos en óptica" y el logo de la tercera línea pasa a mostrar solo "ERREDOOS" (sin la palabra "ÓPTICA") (4.1). |
| 16-11-2026 | Inicio → banner de convenios con más jerarquía: antetítulo "Convenios y operativos", reseña más larga (basada en el texto de la página de Convenios, sin datos nuevos), icono y botón más grandes (4.1). |
| 16-11-2026 | Ajuste visual sin cambios de contenido: más aire entre secciones y gutter móvil mayor (detalle en `design.md` §4). |
| 16-11-2026 | Servicios → agenda: el valor de la atención ($10.000, gratis al comprar lentes ópticos) se muestra también como dato destacado junto a la agenda (4.4). |
| 16-11-2026 | Inicio (diapositiva "Atención visual") y encabezado de Servicios: letra pequeña con el valor y cuándo es gratis (primero bajo el botón; luego se movió antes del botón "Agenda tu hora"): "Valor de la atención: $10.000. Gratis al comprar tus lentes ópticos en Erredos." (4.1, 4.4). Misma confirmación pendiente con Mauricio sobre qué incluye "lentes ópticos". |
| 16-11-2026 | Se elimina de todas las imágenes la etiqueta "Imagen referencial" (tarjetas y ficha de producto, fotos de Servicios), pedido de Jennih: para la maqueta no sirve. Las fotos siguen siendo provisionales; la lista de §11 sigue vigente (4.2, 4.4, §11). |
| 16-11-2026 | La letra pequeña del valor pasa a ir **antes** del botón "Agenda tu hora" (primero descripción, luego el llamado a la acción) en el hero de Inicio y en el banner de Servicios (4.1, 4.4). |
| 16-11-2026 | Quiénes somos → hero: el título "Conoce Óptica Erredos" pasa a "Cuidamos tu visión y acompañamos tu bienestar" (pedido de Jennih; kicker, bajada y botones sin cambios). El título SEO de la página sigue siendo "Quiénes somos". |
| 16-11-2026 | Quiénes somos → Nuestra historia: texto nuevo "Una óptica que nace en familia" (hermanos Rojas, origen del nombre, propósito y atención personalizada), basado en datos de Jennih y simplificado; se quitan la etiqueta provisional y el recuadro de datos pendientes; se omiten afirmaciones sin validar (marcas de prestigio, rigor clínico) (4.6, §11). |
| 16-11-2026 | Quiénes somos → nueva sección "Nuestro equipo de trabajo" tras "Nuestra forma de trabajar": reseña (profesional, capacitado, cercano) y 3 tarjetas con foto, nombre y cargo como marcadores por completar (4.6, §11). |
| 16-11-2026 | Quiénes somos → equipo: se cargan 3 fotos de banco con nombres ficticios y cargos definidos por Jennih (Camila Fuentes, Daniela Vargas, Ricardo Alvarado) (4.6, §11). |
| 16-11-2026 | Quiénes somos → tecnología: título "Tu visión no merece menos que tecnología de vanguardia" y dos párrafos nuevos entregados por Jennih (4.6). |
| 16-11-2026 | Quiénes somos → nueva sección "La tecnología que utilizamos en cada lente" tras el equipo: reseña, 3 tarjetas (tecnología de primera, equipo de calidad, laboratorios de renombre) y 2 espacios para fotos de las instalaciones (4.6, §11). |
| 16-11-2026 | Se quitan de la maqueta todas las etiquetas visibles de "por confirmar / provisional / por validar" (pedido de Jennih). Lo pendiente de validar con el negocio queda solo en §11. |
| 16-11-2026 | Quiénes somos → tecnología: nuevos títulos y textos de las 3 tarjetas, entregados por Jennih (4.6). |
| 16-11-2026 | Quiénes somos → tecnología: se cargan 2 fotos de banco en "Conoce nuestras instalaciones" (4.6, §11). |
| 16-11-2026 | Quiénes somos → Nuestro espacio: nuevo kicker, título y bajada entregados por Jennih (4.6). |
| 16-11-2026 | Teléfono fijo ficticio (65 2 123 456) en Ubicación y footer, con enlace `tel:` (§5). |
| 16-11-2026 | Quiénes somos: se elimina la sección final "Estamos aquí para ayudarte" (4.6). |
| 16-11-2026 | Quiénes somos → Nuestra historia: nuevo título y un solo párrafo entregados por Jennih (4.6). |
| 16-11-2026 | Quiénes somos → tecnología: los dos párrafos se resumen en uno (4.6). |
| 16-11-2026 | Footer: logo blanco (`logo-blanco.png`, PNG transparente) directo sobre el azul del footer, sin placa. |
