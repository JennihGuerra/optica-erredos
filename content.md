# content.md — Óptica Erredos: contexto, contenido y decisiones

> **Para qué sirve este archivo.** Es el contexto teórico, estratégico y de contenido del proyecto. Está escrito para que cualquier persona o IA que tome el proyecto sin haber estado en las conversaciones anteriores pueda continuar sin perder criterio. Su archivo hermano es `design.md` (sistema visual, componentes y comportamiento de interfaz).
>
> **Última actualización:** 12-11-2026 (generado tras la fase 7 y los ajustes del hero de Inicio).
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
11. Si un brief de página contradice las instrucciones generales, **manda el brief más reciente** (ocurrió con Servicios y Quiénes somos; ver §10).

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
- Header: logotipo + menú (≥ 768 px) + botón **"Contáctanos"** (abre WhatsApp) y, en todas las páginas, un botón flotante a la derecha **"Haz aquí tus consultas"** (WhatsApp, mensaje general). **No hay buscador** (se eliminó por decisión de Jennih; además contradecía un catálogo sin búsqueda por nombre).
- Footer: logo, descripción breve, "Secciones" (mismos 5 enlaces), "Contacto" (dirección, horarios, Cómo llegar), © año, enlace a Política de privacidad.

### Rutas existentes
`/`, `/productos`, `/productos/anteojos-opticos`, `/productos/anteojos-de-sol`, `/productos/:slug` (24 modelos de demostración), `/servicios` (ancla `#agendar-hora` y `#solicitar-atencion`), `/empresas` (anclas `#alternativas`, `#solicitar-informacion`), `/nosotros` (ancla `#ubicacion`), `/politica-de-privacidad` (marcador), `/404` (noindex).

---

## 4. Contenido por página

> Los textos que se citan están implementados tal cual. Todo lo marcado PROVISIONAL se debe validar con el negocio.

### 4.1 Inicio (`/`)
Orden de secciones: hero carrusel → accesos rápidos → por qué elegir Erredos → categorías → productos destacados → marcas → promociones → servicios → banner de convenios → ubicación y contacto.

**Hero carrusel (3 entradas, cada una con foto de fondo):**
1. *"Encuentra tus próximos anteojos en Óptica Erredos"* — "Descubre alternativas para tu día a día y conoce nuestros servicios de atención óptica." CTA: **Ver productos** (`/productos`) y **Conoce nuestros servicios** (`/servicios`).
2. Antetítulo "Atención visual" — *"Tu salud visual es importante."* — "Conoce nuestra atención visual y recibe orientación de nuestra tecnóloga." CTA: **Agenda tu hora** (`/servicios#agendar-hora`).
3. Antetítulo "Convenios y operativos" — *"Soluciones ópticas para tu organización."* — "Acercamos alternativas ópticas a empresas, sindicatos e instituciones." CTA: **Conocer convenios** (`/empresas`).

Comportamiento: cambia solo cada 7 s; se pausa con el puntero/foco encima, con cualquier uso manual y si el dispositivo pide reducir movimiento; controles anterior/siguiente/puntos/pausa; solo la diapositiva visible recibe foco; la primera lleva el único `h1`.

**Accesos rápidos (3):** Anteojos ópticos, Anteojos de sol y Solicitar atención (los tres con foto de fondo) → `/productos/anteojos-opticos`, `/productos/anteojos-de-sol` y Solicitar atención → `/servicios#solicitar-atencion`.

**Por qué elegir Erredos** (PROVISIONAL, no agregar garantías ni descuentos; cada tarjeta con descripción de 2–3 líneas): **Atención y asesoría personalizada** — "Te escuchamos y te orientamos según lo que necesitas, para que elijas con confianza."; **Alternativas para distintas necesidades** — "Explora anteojos ópticos y de sol en distintos estilos, formas y colores."; **Orientación para elegir tus anteojos** — "Consulta con nuestro equipo y te ayudamos a encontrar la opción que mejor va contigo."

**Explora por categoría:** Anteojos ópticos (foto de banco provisional) / Anteojos de sol (foto de banco provisional) / Accesorios ópticos (foto de banco provisional con fundas de anteojos; enlaza a `/productos/accesorios`).

**Productos destacados:** 6 modelos de demostración ("Productos de demostración: el catálogo real se cargará más adelante."), enlace "Ver todos".

**Carrusel de marcas** (entre destacados y promociones): franja que desplaza en bucle nombres de marcas de anteojos ópticos y de sol. ⚠️ **PROVISIONAL:** son nombres de marcas de ejemplo (Ray-Ban, Oakley, Carrera, Persol, Police, Vogue, Arnette, Tommy Hilfiger) escritos como texto, no logos oficiales, y **no confirman que Erredos las distribuya**; reemplazar por las marcas reales (y sus logos con autorización) en `src/data/brands.ts`. Orden de secciones: ... destacados → marcas → promociones ...

**Promociones y ofertas:** sin texto visible (el `h2` "Promociones y ofertas" queda solo para lectores de pantalla). Muestra a ancho completo un afiche de banco provisional y el botón **Solicitar promoción** → WhatsApp (`whatsappMessages.promotion`). ⚠️ El afiche (2x1 en gafas graduadas, "válido hasta el 24 de diciembre o hasta agotar existencias") es una pieza de banco/otra marca **sin promoción real de Erredos**: se usa solo como maqueta por pedido de Jennih; debe reemplazarse por una promoción real de Erredos antes de mostrarlo al cliente. **No hay promoción real definida.**

**Nuestros servicios:** las dos tarjetas de `services.ts` + botón "Conocer servicios".

**Banner de convenios:** "Acercamos soluciones ópticas a empresas y organizaciones" / "Consulta por convenios y operativos ópticos para tu organización." / botón "Conoce nuestros convenios".

**Ubicación:** "Visítanos en Puerto Montt", dirección, horarios, "Cómo llegar" (Google Maps), "Escribir por WhatsApp" y el **mapa de Google Maps incrustado** (reemplaza la foto del local; se repite en Servicios y Convenios, bloque `LocationBlock`).

> Observación UX abierta: accesos rápidos y categorías repiten "Anteojos ópticos / de sol" a pocos pantallazos de distancia en móvil. Propuesta pendiente de decisión: quitar la sección de categorías o reemplazar esos accesos.

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
- **Tarjeta = un modelo con 1 a 4 colores.** Cambiar el color cambia imagen, nombre del color, mensaje de WhatsApp y enlace al detalle (que conserva `?color=`). Botón en móvil: "Consultar" (el nombre accesible es completo).

**Modelo de datos** (`src/data/products.ts`), para reemplazar por el catálogo real:
- `Product`: id, slug, name, code, brand (`null` = sin confirmar, no se muestra), type (`opticos|sol`), shape, style, price (`null` = "Consultar precio"), description, promotion (`null` = sin promoción), featured, addedAt, variants[].
- `ProductVariant`: id, color (familia), hex, image (`null` = ilustración provisional).
- Familias de color: Negro, Café, Azul, Rojo, Transparente, Dorado, Plateado, Otros. Formas: Redondo, Cuadrado, Rectangular, Aviador, Cat Eye, Geométrico.
- **Imágenes de producto (13-11-2026):** las ilustraciones SVG se reemplazaron por fotos de stock provisionales de Pexels (enlace directo `images.pexels.com`, 6 de ópticos y 6 de sol, repetidas entre los 24 modelos; una foto por modelo, compartida por sus colores, por lo que cambiar de color no cambia la foto). Se rotulan "Imagen referencial". `source.unsplash.com` ya no existe (dado de baja por Unsplash en 2024), por eso no se usó. Reemplazar por fotos propias en `variant.image`.
- 24 modelos de demostración: nombres ficticios (Urban 01, Lago 02…), marcas "Marca A–D", códigos `DEMO-01…`, estilos de prueba (Clásico, Moderno, Minimalista, Elegante, Deportivo) y precios ficticios. **Estilos y marcas se deben reemplazar por una clasificación real validada con el cliente.**
- El informe de benchmarking proponía además filtro por **género** (mujer, hombre, unisex) "si corresponde a los productos": hoy no está implementado porque no hay datos; es filtro candidato cuando llegue el catálogo real.

### 4.3 Detalle de producto (`/productos/:slug`)
Rediseñado el 12-11-2026 tomando como referencia la ficha de un producto de otra óptica (solo estructura; **Erredos no vende por la web**, no hay carrito, precio online ni envío).
Orden: Volver al catálogo (respeta filtros) y migas de pan; **galería** (foto principal + miniaturas); marca, nombre, código, promoción (si hay), precio o "Consultar precio", aviso de producto de demostración; etiqueta **"Garantía de 6 meses"**; selector de color; botón **Consultar por WhatsApp** (el mensaje incluye modelo, marca si existe, color y código) con la nota "Este producto no se compra por la web: escríbenos y te atendemos"; **Características** (marca, categoría, forma, estilo, colores); **Descripción** (PROVISIONAL); franja **"Garantía de 6 meses. Consulta las condiciones por WhatsApp o visítanos en Calle Talca 118"**; **Guía de medidas** (altura del marco, ancho del marco, ancho del puente, largo de la varilla, en mm, con esquemas); **Productos relacionados** (3 de la misma categoría, priorizando la misma forma).
- **Garantía de 6 meses:** dato entregado por Jennih; las condiciones de la garantía **no están definidas** (se remite a WhatsApp/tienda).
- **Medidas y fotos adicionales de demostración:** `product.measurements` (altura, ancho, puente, varilla; `null` oculta la guía) y `product.gallery` son datos ficticios hasta tener el catálogo real. Cambiar de color vuelve a la primera miniatura.
- Se quitaron del detalle: tipo en texto pequeño sobre el título.

### 4.4 Servicios (`/servicios`)
Hero con foto de fondo (banner `PageBanner`, foto de banco provisional `hero-atencion-visual.jpg`: examen visual con equipo no confirmado por el negocio) "Estamos aquí para ayudarte a cuidar tu visión" + CTAs "Agenda tu hora" (`#agendar-hora`) y "Repara tus anteojos" (abre WhatsApp con el mensaje de reparación); dos tarjetas de servicio (Atención visual con foto de banco provisional de una persona con lentes de prueba; Reparación con foto provisional de manos ajustando unos anteojos y un cartel "Reparamos / Ajustamos / Cambiamos tus lentes", imagen no real de Erredos); **agenda de atención visual** (§6, en una banda azul a ancho completo para que destaque); "¿Cómo solicitar atención?" (3 pasos: Elige el servicio → Contáctanos por WhatsApp → Coordinamos contigo) con botones "Consultar atención visual" y "Consultar reparación"; preguntas frecuentes; ubicación.

**Servicios (`src/data/services.ts`):**
- **Atención visual:** "Recibe atención y orientación visual con nuestra tecnóloga. Consulta por este servicio y conoce cómo podemos ayudarte." Aviso: la realiza una tecnóloga, **no reemplaza una consulta médica oftalmológica**; **no se atiende a menores de 10 años** (necesitan consulta previa con oftalmólogo).
- **Reparación y ajuste de anteojos:** "¿Tus anteojos necesitan una reparación o ajuste? Contáctanos y cuéntanos qué problema presentan para orientarte." Motivos de consulta: marcos desajustados, tornillos sueltos o faltantes, problemas en las patillas, otros daños en la estructura. Nota: "Revisamos cada caso: no todos los daños tienen reparación."

**Regla clínica importante:** nunca presentar la atención óptica como equivalente a una consulta oftalmológica.

**FAQ:** 8 preguntas en 2 grupos. Con respuesta (basada en info entregada): quién realiza la atención visual; cómo solicitar una atención; cómo saber si mis anteojos tienen reparación. **Con texto neutro y etiqueta "Por confirmar"** (`answer: null`): ¿Necesito agendar previamente?, ¿Qué debo llevar?, ¿Qué tipos de reparaciones realizan?, ¿Puedo consultar por anteojos de otra óptica?, ¿Cuánto demora una reparación?

### 4.5 Convenios y operativos (`/empresas`)
Hero con foto de fondo (banner `PageBanner`, la misma foto de banco `hero-convenios.jpg` del carrusel de Inicio; ⚠️ se lee el pendón de otra óptica, reemplazar) "Soluciones ópticas para empresas y organizaciones"; a quiénes está dirigido (Empresas, Sindicatos, Instituciones, Establecimientos educacionales, Agrupaciones y organizaciones — son públicos objetivo, **no clientes ni convenios vigentes**); alternativas de colaboración (**Convenios**: alianza con la óptica; **Operativos ópticos**: instancia de atención coordinada; se quitó la etiqueta visible "Condiciones por confirmar", pero las condiciones siguen sin definirse); ¿Cómo funciona? (Cuéntanos → Revisamos → Nos ponemos en contacto); formulario; contacto directo por WhatsApp; ubicación.
No se mencionan descuentos, beneficios, convenios existentes ni condiciones.
Los botones "Consultar por convenios/operativos" llevan al formulario con ese tipo preseleccionado.
Idea del benchmarking aún no usada: CTA "Quiero llevar un operativo óptico a mi organización" y contenido "¿Qué es un operativo óptico?" (requiere validación del negocio).

### 4.6 Quiénes somos (`/nosotros`)
Hero "Conoce Óptica Erredos" (banner con foto de banco de un examen visual con lámpara de hendidura, **provisional**: muestra equipos y personas que el negocio no ha confirmado); **Nuestra historia** (foto del interior del local de Erredos, tomada de una publicación del negocio con su logo y el texto "En Óptica Erre Dos encuentras tu estilo de lentes"; texto PROVISIONAL + lista de datos que debe entregar el negocio: cómo y cuándo nació, motivación inicial, evolución, aporte a clientes y comunidad); **Nuestra forma de trabajar** (4 principios, PROPUESTA por validar: Cercanía, Atención personalizada, Accesibilidad, Compromiso); **Nuestro espacio** (3 fotos de banco **provisionales**: fachada, equipo frente a la puerta e interior con mostrador; el texto ya no promete fotos futuras, solo indica la dirección); **Conoce dónde estamos** (dirección, horarios, Google Maps y mapa de Google Maps incrustado y visible de inmediato (carga diferida)); "Estamos aquí para ayudarte" (accesos a Productos, Servicios y Contacto/WhatsApp).
Se **omitieron** "Equipo" y "Tecnología y equipamiento" de las instrucciones originales porque el brief de esta página no las incluye. No se inventó historia.

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
| Redes sociales | `social: []` | **PENDIENTE** (vacío = no se muestran) |
| Dominio | `astro.config.mjs → site` comentado | **PENDIENTE** (canónicas y sitemap) |
| Logo | `logo.png` 936×679 | Falta vector (SVG), versión horizontal y en negativo |
| Destino de formularios | `formEndpoint: ''` | **PENDIENTE** |
| `prototypeMode` | `true` | Maqueta funcional (ver §7) |
| `catalogIsDemo` | `true` | Cambiar a `false` al cargar el catálogo real |

**Mensajes de WhatsApp** (`src/lib/whatsapp.ts`): general ("Hola, quisiera hacer una consulta a Óptica Erredos."); producto (modelo, marca si existe, color en minúscula y código); ayuda para elegir; servicios; atención visual; reparación; convenios/operativos. El formulario de organizaciones y la agenda arman además un mensaje con los datos ingresados.
El informe de benchmarking sugería este formato para producto: "Hola, vi los anteojos modelo [nombre o código] en la página de Óptica Erredos y quisiera consultar por disponibilidad y precio." El texto implementado es distinto; si se quiere ese tono, ajustarlo en `whatsappMessages.product`.

---

## 6. Agenda de atención visual (`/servicios#agendar-hora`)

Pedida por Jennih para reemplazar un formulario simple. Dos pasos:
1. **Elige día y hora:** vista semanal con mes y año, rango de la semana, siete días (domingo bloqueado, días pasados bloqueados), flechas de semana, horas del día elegido en "Mañana" y "Tarde"; día y hora elegidos quedan marcados.
2. **Tus datos:** resumen de la hora (con "Cambiar"), nombre y apellido, correo, **confirmación del correo**, número de celular, **rango de edad del paciente**.
3. **Confirmación** (solo en maqueta): título "¡Tu hora quedó agendada con éxito!", aviso destacado "Te confirmaremos tu atención 24 horas antes. Nos pondremos en contacto contigo por correo electrónico o por teléfono para confirmar tu hora.", dirección del local, resumen, "Agenda otra hora" y "Escribir por WhatsApp". **PENDIENTE:** el negocio debe poder cumplir la confirmación 24 h antes (correo/teléfono); en la maqueta no se envía nada.

**Reglas** (en `site.appointments`):
- Atención de **30 min**. Lunes a viernes 09:30–13:00 y 14:00–17:00 (13 horas/día: 09:30…12:30 y 14:00…16:30). Sábado 10:00–13:00 (6 horas) — **SUPUESTO** (se usó el horario del local; el negocio no indicó el bloque del sábado). Domingo sin atención.
- Se puede pedir hora desde mañana y hasta 6 semanas adelante — **SUPUESTO por confirmar**.
- Rangos de edad: 11 a 18, 19 a 25, 26 a 35, 36 a 45, 46 o más años.
- Aviso permanente: "No atendemos a menores de 10 años. Ellos necesitan una consulta previa con un oftalmólogo."
- Inconsistencia abierta: el aviso dice "menores de 10" y los rangos parten en 11, por lo que **una persona de 10 años no calza en ningún rango**. Las notas anteriores mencionaron "aprox. 12 años". Confirmar edad mínima.

**Limitación estructural:** no hay sistema de agenda. El sitio calcula horas desde el horario pero **no sabe cuáles están tomadas, ni feriados ni ausencias**; dos personas podrían pedir la misma hora. En la maqueta, la hora "agendada" deja de ofrecerse solo en ese navegador/sesión (`sessionStorage`). Para disponibilidad real se necesita un servicio de reservas o calendario integrado (fuera de alcance; requiere decisión).

---

## 7. Maqueta funcional vs. publicación real

`site.prototypeMode: true` hace que agenda y formulario de convenios recorran el flujo completo, validen, muestren "Enviando…" y terminen en pantalla de confirmación, **sin enviar ni guardar nada**. Se quitaron los avisos de "modo demostración" por decisión de Jennih (quiere ver cómo funciona aunque no esté conectado).

**⚠️ Antes de publicar:** una persona real creería que su hora o solicitud quedó registrada. Hay que (a) conectar `site.formEndpoint` (POST JSON) y un sistema de agenda, o (b) poner `prototypeMode: false` (vuelven los avisos de demostración y la alternativa por WhatsApp).
Con `formEndpoint` configurado se envía un POST con JSON y se muestra confirmación o error reales; **esa vía no se ha probado contra un servicio real**.

**Validaciones** (`FormBehavior.astro`): obligatorios con mensaje junto al campo, resumen de errores con foco al primero, correo válido, teléfono con al menos 8 dígitos, participantes > 0 o vacío, confirmación de correo igual al correo, un tipo de solicitud elegido.

**Formulario de convenios — campos:** nombre y apellido*, empresa u organización*, cargo (opcional), correo*, teléfono*, cantidad aproximada de participantes (opcional), tipo de solicitud* (lista desplegable con una sola selección: Convenio óptico / Operativo óptico / Ambos / Necesito más información), mensaje (opcional). Nota de privacidad: "Usaremos estos datos solo para responder tu solicitud. No pedimos información de los participantes."
(La opción "Necesito más información" se agregó respecto del brief original, que solo pedía convenio, operativo o ambos.)

---

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
| 5 Servicios | Hero, 2 servicios, pasos, FAQ | El brief reemplazó el formulario de solicitud por WhatsApp (más tarde se agregó la agenda) |
| 6 Convenios | Página B2B + formulario | "Empresas" → "Convenios y operativos" |
| 7 Quiénes somos | Historia provisional, principios, espacio, ubicación | "Nosotros" → "Quiénes somos"; horarios confirmados y cargados |
| Ajustes Inicio | Hero → carrusel de 3 entradas; acceso "Anteojos ópticos" con foto; "Agendar hora"; agenda semanal; buscador fuera; botón "Contáctanos"; maqueta funcional; hero visual en 3 iteraciones (ver `design.md`) | — |
| Pendiente | **Fase 8: QA y validación** (no iniciada; espera aprobación de las páginas y las decisiones abiertas) | — |

---

## 11. Pendientes

### Del negocio (Mauricio / tecnóloga)
- Número de WhatsApp; redes sociales; dominio; logo vectorial (horizontal y negativo).
- Historia, validación de los 4 principios y del texto del hero de Quiénes somos.
- Servicios: alcance, procedimientos, duración, requisitos; respuestas de 5 FAQ; edad mínima real; bloque de atención del sábado; anticipación mínima/máxima para pedir hora; feriados; cómo evitar horas duplicadas y quién confirma cada solicitud; a dónde llegan las solicitudes.
- Convenios: condiciones, beneficios, alcance de operativos (capacidad, mínimos, cobertura), públicos reales.
- Catálogo real (~50 productos con fotos, marcas, códigos, formas, colores, precios, estilos, género si aplica) y promociones reales.
- Texto de la política de privacidad; destino de formularios.
- Fotografías reales: fachada, interior, exhibición, atención, productos. Si se atiende los domingos.

### De decisión (Jennih)
1. Ruta `/empresas` vs. `/convenios` y `/nosotros` vs. `/quienes-somos`.
2. Edad límite: 10 vs. 11 años (o 12) en aviso y rangos.
3. Supuestos de la agenda (sábado, 6 semanas, desde mañana) y si se muestra "domingo cerrado".
4. Repetición accesos rápidos / categorías en Inicio.
5. (Resuelta 12-11-2026) Los tres accesos rápidos llevan foto.
6. Mantener o quitar "Catálogo de demostración" y las etiquetas "provisional" para presentaciones.
7. Dónde ubicar el texto del hero 1 (los anteojos de la izquierda quedan atenuados bajo el degradado).
8. Si se conecta un sistema de agenda real.

### Imágenes (antes de mostrar al cliente)
- `hero-convenios.jpg`: se lee el pendón de otra óptica ("Olive Dexter") → reemplazar.
- `espacio-exterior.jpg`, `espacio-equipo.jpg`, `espacio-interior.jpg` (Quiénes somos → Nuestro espacio): ⚠️ son fotos de **otra óptica (se lee el letrero "OpticaPRO" en las tres) y muestran personas reales** que no son del equipo de Erredos. Usarlas solo en la maqueta: reemplazar por fotos propias antes de mostrar al cliente o publicar.
- `hero-quienes-somos.jpg` (740×493, se ve blanda en pantallas grandes): examen visual con equipo no confirmado → reemplazar por foto real del local/equipo.
- `hero-atencion-visual.jpg`: muestra equipos/procedimiento no confirmados → reemplazar o validar.
- `acceso-opticos.jpg`: tiene marca de agua de banco de imágenes. `acceso-atencion.jpg` (612×386) muestra un examen con equipos que el negocio no ha confirmado. `acceso-sol.jpg` (612×408) es una foto de banco entregada por Jennifer; licencia desconocida y resolución baja.
- Fotos 2 y 3 del hero miden ~1000 px de ancho (blandas en pantallas grandes). **Licencias de uso desconocidas.**
- Todas las imágenes del sitio son provisionales; no inventar marcas distribuidas por Erredos.

### Técnicos
- Fase 8 (QA): lectores de pantalla reales, dispositivos físicos, Safari y Firefox **no verificados**; envío real de formularios no probado; mapa incrustado no comprobado contra el punto exacto del local.
- README del repo está desactualizado (dice "Fases 1 y 2").

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
| 12-11-2026 | Productos: ilustraciones reemplazadas por fotos de stock provisionales de Pexels (§4.2). |
| 12-11-2026 | Navegación: "Quiénes somos" pasa a ser el 2.º ítem del menú (header, barra inferior y footer). |
| 12-11-2026 | Inicio: acceso rápido "Anteojos de sol" con foto de fondo (4.1). |
| 12-11-2026 | Inicio: acceso rápido "Solicitar atención" con foto de fondo (4.1). |
| 12-11-2026 | Inicio: categoría "Anteojos ópticos" con foto (4.1). |
| 12-11-2026 | Inicio: categoría "Anteojos de sol" con foto (4.1). |
| 12-11-2026 | Inicio: nueva categoría "Accesorios ópticos" (sin catálogo ni foto; enlaza a consulta por WhatsApp; PROVISIONAL) (4.1). |
| 12-11-2026 | Se eliminaron las etiquetas visibles "Contenido provisional" por decisión de Jennih (es una maqueta; el contenido se cambiará después). Lo provisional sigue listado en este archivo. |
| 12-11-2026 | Inicio: categoría "Accesorios ópticos" con foto (fundas de anteojos, banco provisional) (4.1). |
| 12-11-2026 | Inicio: bloque de promociones con foto y botón "Solicitar promoción" → WhatsApp (en lugar de "Ver productos"); texto ya no dice que no hay promociones (4.1). |
| 12-11-2026 | Inicio: promociones sin texto; el afiche completo ocupa la sección con el botón "Solicitar promoción" encima (4.1). |
| 12-11-2026 | Inicio: afiche de promociones reemplazado por la versión 2x1 sin logo (franja inferior vacía para el botón) (4.1). |
| 12-11-2026 | Bloque "Visítanos en Puerto Montt" (Inicio, Servicios y Convenios): el marcador se reemplazó por una foto del local (anteojos sobre el mostrador, vitrinas al fondo). Es una foto real del negocio, recortada de una publicación (se quitaron logo y texto). Siguen provisionales las imágenes de los heros y de Quiénes somos. |
| 12-11-2026 | Inicio, "Por qué elegir Erredos": 1.ª tarjeta pasa a "Atención y asesoría personalizada"; las tres llevan descripción de 2–3 líneas (4.1). |
| 12-11-2026 | Detalle de producto rediseñado: galería con miniaturas, código, garantía de 6 meses, nota de que no se compra por la web, guía de medidas y 3 productos relacionados (4.3). Se agregan al modelo de datos `measurements` y `gallery`. |
| 12-11-2026 | Quiénes somos: el hero pasa a banner con foto de fondo (examen visual), igual que los del carrusel de Inicio (4.6). |
| 12-11-2026 | Quiénes somos → "Nuestro espacio": 3 fotos de banco (fachada, equipo, interior) en lugar de los marcadores; texto sin la promesa de fotos futuras (4.6, §11). |
| 12-11-2026 | Quiénes somos → "Conoce dónde estamos": el mapa se muestra directamente, sin el botón "Mostrar mapa aquí" (4.6). |
| 12-11-2026 | Quiénes somos → "Nuestra historia": foto real del interior del local (de una publicación del negocio) en lugar del marcador (4.6). |
| 12-11-2026 | Productos: nuevo banner de entrada con foto y texto (componente `PageBanner`, reutilizable); el título y la intro pasan al banner (4.2). |
| 12-11-2026 | Productos: nueva categoría Accesorios (5 productos de demostración); la tarjeta de Inicio ahora enlaza a `/productos/accesorios`. Banner de Productos con el mismo alto que el de Quiénes somos (4.1, 4.2). |
| 12-11-2026 | Productos: se quita el aviso "Catálogo de demostración" sobre las categorías (4.2). |
| 12-11-2026 | Productos: la grilla muestra como máximo 3 productos por fila (sin cambio de contenido). |
| 12-11-2026 | Servicios: el hero azul con marcador pasa a banner con foto de fondo, igual que Inicio, Productos y Quiénes somos (4.4). |
| 12-11-2026 | Botón flotante de WhatsApp "Haz aquí tus consultas" en todas las páginas (§3). |
| 12-11-2026 | Servicios: la tarjeta "Atención visual" muestra una foto de banco (provisional) en lugar del marcador (4.4). |
| 12-11-2026 | Vista previa: corregido que los banners (Productos, Servicios) aparecían sin estilo por faltar los `<style>` en línea al armar el HTML único. El sitio compilado no estaba afectado (§12). |
| 12-11-2026 | Servicios: la tarjeta "Reparación y ajuste de anteojos" muestra una foto provisional en lugar del marcador (4.4). |
| 13-11-2026 | Footer: se elimina el botón "Escribir por WhatsApp" (el contacto por WhatsApp queda en "Contáctanos" del header y en el botón flotante) (§3). |
| 13-11-2026 | Servicios: los botones del hero pasan a "Agendar hora" y "Repara tus anteojos" (llevan a la agenda y a la tarjeta de reparación) (4.4). |
| 13-11-2026 | Servicios: "Agenda tu hora" lleva a la agenda y "Repara tus anteojos" abre WhatsApp con el mensaje de reparación (4.4). |
| 13-11-2026 | Todos los botones "Agendar hora" pasan a "Agenda tu hora" (hero de Inicio, hero de Servicios, tarjeta Atención visual y envío de la agenda); "Agendar otra hora" pasa a "Agenda otra hora". |
| 13-11-2026 | Servicios: el botón "Repara tus anteojos" del hero queda sin icono (4.4). |
| 13-11-2026 | Convenios: el hero azul con marcador pasa a banner con la foto del carrusel de Inicio; se mantiene el texto y los botones "Solicitar información" y "Conocer nuestras alternativas" (4.5). |
| 13-11-2026 | Tarjetas del sitio con efecto al pasar el mouse (solo versión web); sin cambios de contenido. |
| 13-11-2026 | Bloque de ubicación (Inicio, Servicios y Convenios): el mapa de Google Maps reemplaza la foto del local. La foto `local-erredos.jpg` queda en el proyecto sin uso (no se eliminó). Quiénes somos ya tenía el mapa (4.1, 4.4, 4.5). |
| 13-11-2026 | Convenios: se elimina la etiqueta visible "Condiciones por confirmar" de las dos tarjetas de alternativas (4.5). |
| 13-11-2026 | Servicios: la agenda "Agenda tu hora de atención visual" pasa a una banda azul a ancho completo, con el formulario en tarjeta blanca elevada, para destacarla (4.4). |
| 13-11-2026 | Servicios: se elimina la franja blanca entre la banda azul de la agenda y "¿Cómo solicitar atención?"; las dos secciones quedan pegadas (4.4). |
| 13-11-2026 | Servicios: pantalla de confirmación indica que la hora se agendó con éxito y que se confirmará por correo o teléfono 24 horas antes (§6, paso 3). Compromiso pendiente de validar con el negocio. |
| 13-11-2026 | Convenios: "Tipo de solicitud" pasa de 4 botones de opción a un campo desplegable con las mismas 4 opciones; los botones "Consultar por convenios/operativos" siguen preseleccionándolo (§7). |
| 13-11-2026 | Inicio: nuevo carrusel de marcas de anteojos entre "Productos destacados" y "Promociones" (4.1). Marcas provisionales como texto; datos en `src/data/brands.ts`. |
