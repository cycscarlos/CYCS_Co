# Contexto de Sesión

## Checkpoints
- ffd13f9 — checkpoint: fix titulo cards invisible en responsive (incluye el fix + escalado proporcional h3/boton en cards.css).
- 13fe434 — checkpoint: estado actual antes de bajar swiper de fondo en vistas tecnicas (fix drawer nav__btns incluido).
- 38aba2e — checkpoint: estado actual antes de mover X de nav__menu a nav__btns (fix flash/cierre del drawer).
- 4b305b2 — checkpoint: fix alto header responsive + 2 líneas logo (antes de eliminar scroll horizontal en index).
- a9e0d27 — checkpoint: estado actual antes de fix alto header responsive (2 líneas logo).
- 944e3e0 — checkpoint: grid 2×2 de cards en index (estado actual antes de aplicar 2×2 en vistas seguridad/redes/sistemasCriticos).
- 27f27fa — fix: rediseño del footer — tokens `--footer-*` siempre oscuros y sinergia con la paleta del hero (variables.css + footer.css).
- 32cfcb5 — checkpoint estado actual (vite.config.js + package-lock.json) antes de renombrar a `.mjs`.
- e5d18d1 — checkpoint estado actual (ediciones locales index) antes de eliminar vista nosotros.
- 81c47ff — último commit antes del rediseño de vistas (punto de rollback del rediseño; árbol limpio).
- 735ef6c — checkpoint: estado actual antes de arreglar menu responsive y cards de vistas.
- 342c853 — checkpoint: estado actual antes de fix responsive menu hamburguesa y cards de vistas (incluye Regla 9 en rules.md).
- bbad4f8 — checkpoint: fix menu responsive (panel pantalla completa) + cards opacas en vistas, antes de eliminar scroll horizontal.
- dea4d14 — checkpoint: html clip en responsive (elimina scroll horizontal global) antes de clip mainBox.
- e2ac2e8 — checkpoint: pre-scrollReveal — estado actual antes de modificar scrollReveal.js (rollback de la Tarea 3).

## Commits de la sesión actual
- ffd13f9 — checkpoint: fix titulo cards invisible en responsive (incluye el fix + escalado proporcional h3/boton en cards.css).
- 13fe434 — checkpoint: estado actual antes de bajar swiper de fondo en vistas tecnicas (fix drawer nav__btns incluido).
- 38aba2e — checkpoint: estado actual antes de mover X de nav__menu a nav__btns (fix flash/cierre del drawer).
- c9f3452 — fix: menu responsive — header servicios con nav__btns + link Contacto en header-tech + overflow-y drawer.
- fbbbc2e — subir a producción (commit del usuario): fix servicios responsive (padding-top 136px + flex-start + gap 64px) + `theme-color` cambiado a `#080e18` (naranja `#ff4c00` comentado).
- 6a9019a — checkpoint: color Night Owl #011627 en footer/cards/titulos (modo light) — antes de ajustar servicios responsive.
- 2135dd1 — fix: eliminar scroll horizontal en index responsive — ScrollReveal sin translateX en movil (.clients/.galeria) + preloader no anula overflow-x del body.
- 4b305b2 — checkpoint: fix alto header responsive + 2 líneas logo (antes de eliminar scroll horizontal en index).
- a9e0d27 — checkpoint: estado actual antes de fix alto header responsive (2 líneas logo).
- 0dc19e4 — checkpoint: estado actual antes de cambiar el color del titulo principal a blanco
- 283c617 — checkpoint: estado actual funcional antes de ajustar margen superior del titulo respecto al navbar
- 63ba6a5 — checkpoint: restaurar posicionamiento absoluto overlay en .view-content con overflow-y auto para scroll perfecto
- 4cee3f4 — checkpoint: ajustar altura dinamica del swiper y permitir scroll natural para cards
- 26da663 — checkpoint: posicionamiento absoluto del contenedor de cards superpuesto directamente sobre el swiper
- b0bbe43 — checkpoint: estado actual antes de refactorizar cards translucidas (swiper como fondo visible)
- 941a854 — fix: eliminar scroll horizontal en vistas tecnicas (se remueve animacion ScrollReveal de section.security que aplicaba translateX(60px)).

## Resumen de la sesión
1. **Refactorización de Vistas Técnicas (automatizaciones, sistemasCriticos, seguridad, redes)**:
   - Contenido (`.view-content`) sobrepuesto de forma absoluta sobre el swiper de fondo (`position: absolute; inset: 0; z-index: 2`).
   - Scroll vertical activado en `.view-content` (`overflow-y: auto`) para lectura completa de tarjetas sin recortes.
   - Transparencia cristal glassmorphic (`rgba(8, 14, 24, 0.28)` + `blur(5px)`) para proyectar el carrusel al fondo.
   - Margen superior del título ampliado (`calc(var(--header-height) + var(--space-12))`) despejando holgadamente el navbar.
   - Títulos principales en color **blanco puro (`#FFFFFF`)** conservando la acentuación naranja (`var(--brand-primary)`) en los `span`.

2. **Responsive — menú hamburguesa y cards de vistas**:
   - Menú móvil en `assets/css/components/header.css` (solo `@media max-width:768px`): panel `height:100vh/100dvh`, fondo `--neutral-950`, links `--neutral-300` con hover blanco, botón cerrar claro. Causa raíz: `backdrop-filter` del header ancla el drawer `fixed` y los colores de texto dependían del tema (light por defecto en `main.js`).
   - Cards de vistas en `security.css` y `redes.css` (solo `@media max-width:1024px`): `background: rgba(8,14,24,0.9)` (hover `0.96`) para legibilidad. Desktop intacto (0.28/0.42).

3. **Playbook "eliminar scroll horizontal en responsive" (360×800, Redmi Note 12S)**:
   - **Causa raíz definitiva:** `assets/js/scroll/scrollReveal.js` → `sr.reveal('.clients, .security', { origin:'right', distance:'60px' })` aplicaba a `section.security` un `transform: translateX(60px)` → desbordaba el viewport 60px de más en seguridad/automatizaciones/sistemasCriticos. Redes usa `section.telco` (no coincide con `.security`) → nunca se animó → funcionaba.
   - **Fix (Commit 941a854):** cambiar `.clients, .security` → `.clients` en `scrollReveal.js:21`. Las 3 vistas quedan estáticas (como redes); `.galeria`/`.clients` del index conservan su animación.
   - **Pasos descartados en el camino (conservados como aprendizaje):** `html/mainBox` con `overflow-x: hidden/clip` en `@media ≤768px` de `smartphones.css` — enmascara pero no elimina y trunca contenido real. Diagnosticar primero el exceso exacto con scripts en consola (archivos en `docs/diagnostico-*.js` guardados en archivo porque pegar código de OpenCode en DevTools falla).
   - **Regla 9 activa en `config_session/rules.md`:** no implementar sin plan Markdown en `docs/`, tareas cortas con riesgo, autorización explícita por tarea.

4. **Fix alto header responsive (2 líneas del logo)**:
   - **Causa:** `display: none` en `.nav__logo small` dentro de `@media ≤414px` de `header.css` ocultaba por completo la línea "Ingenieros" en móvil (simulador 360px). No era falta de alto: la línea 2 no existía en el DOM renderizado.
   - **Fix:** quitar el `display:none` (el `small` ahora se muestra en móvil con `font-size: var(--text-xs)` + `letter-spacing: 0.12em`) y subir el alto de `.nav` en `@media ≤768px` a `calc(var(--header-height) + 2.5rem)` (80px → 96px) para que la caja glassmorphism del logo despliegue ambas líneas cómodamente. Desktop intacto.

5. **Eliminar scroll horizontal en index (responsive)**:
   - **Causa 1 (origen real):** en `scrollReveal.js`, `.clients` (origin right, 60px) y `.galeria` (origin left, 60px) aplicaban `translateX(±60px)` → desbordaban el viewport en móvil. Mismo patrón que el fix 941a854 de las vistas técnicas.
   - **Causa 2 (habilitador):** preloader en `index.html` → `document.body.style.overflow = "auto"` (inline) anulaba el `body { overflow-x: hidden }` de `reset.css`, re-habilitando el scroll horizontal de la página.
   - **Fix (Commit 2135dd1):** en `scrollReveal.js`, si `matchMedia(min-width:769px)` es falso (≤768px) `.clients`/`.galeria` usan `origin: "bottom"` + `distance: "0px"` (solo fade, sin translateX); desktop conserva su animación. En `index.html` el preloader ahora usa `overflowX="hidden"` + `overflowY="auto"` en vez de `overflow="auto"`. Plan en `docs/plan-scroll-horizontal-index.md`.

6. **Color Night Owl `#011627` en modo light (footer + cards + títulos de vistas)**:
   - **Iteración de color (3 valores):** el usuario pidió inicialmente `#483335` → lo corrigió a `#0072CE` (azul médico) → **final definitivo `#011627`** (color principal del tema Night Owl). Solo bajo `body.light-theme`, Desktop y dark-theme intactos.
   - **Alcance (docs/navbar.md):** footer de index (#home) completo (`.footer` + `.copyrightTexto`), y en vistas técnicas `seguridad`/`redes` (y por patrón automatizaciones/sistemasCriticos usan los mismos archivos) → solo el título de sección h2 (`.view-content .title h2`) con `#011627`; los h3 de cards siguen blancos; el `span` naranja no se toca. `servicios.html` y `contacto.html` quedan **excluidos** por decisión del usuario.
   - **Archivos:** `assets/css/components/footer.css`, `assets/css/redes.css`, `assets/css/security.css` (Commit 6a9019a). Build OK.

7. **Fix posición de título h2 + carrusel en servicios.html (responsive)**:
   - **Síntoma original:** en móvil el carrusel y el h2 quedaban muy abajo y con ~150px de hueco entre ambos (`.servicios` con `justify-content: space-evenly` en el `@media ≤768px`).
   - **Iteración (2 intentos fallidos → correcto):**
     - Intento 1: `flex-start` + `gap: var(--space-6)` pero `padding-top: calc(var(--header-height) + 1rem)` (72px) → el título quedaba cubierto/pegado por el header y el carrusel medio tapado (el header móvil mide **96px** = `--header-height` + 2.5rem).
     - Intento 2: `padding-top` a `calc(var(--header-height) + 2.5rem + 1rem)` (112px) → se veía pero aún muy pegado al header y **sin separación visible** h2↔carrusel.
     - **Causa raíz de la falta de separación:** las figuras del carrusel 3D (`.container-carrousel figure`, `translateZ(300px)` bajo `perspective: 1000px`) desbordan ~27px hacia arriba de su caja de 160px → se comían el `gap` de 24px.
     - **Fix final (Commit fbbbc2e, solo `@media ≤768px` de `assets/css/servicios.css`):** `justify-content: flex-start`, `gap: var(--space-16)` (64px) y `padding-top: calc(var(--header-height) + 2.5rem + 2.5rem)` (136px = header 96px + 40px de aire). Desktop intacto.

8. **`theme-color` naranja en smartphone real**:
   - **Reporte del usuario:** al abrir en teléfono real (no simulado) la app se veía naranja `#ff4c00`.
   - **Causa:** `<meta name="theme-color" content="#ff4c00" />` en `index.html` (el `.loader` solo es el spinner del preloader). No se aprecia igual en DevTools desktop.
   - **Fix (Commit fbbbc2e, index.html):** comentado el `#ff4c00` → nuevo `theme-color` = `#080e18` (oscuro, coherente con el tema). El usuario **no autorizó** aún sincronizar dinámicamente el theme-color con el tema light/dark (propuesta rechazada por ahora).

9. **`theme-color` blanco `#ffffff` en todas las vistas (sin checkpoint, orden directa)**:
   - **Alcance:** sustitución global de `<meta name="theme-color" content="#ff4c00" />` → `content="#ffffff"` en las **8 ocurrencias activas**: `index.html:24`, `assets/html/{seguridad,contacto,redes,servicios,sistemasCriticos,automatizaciones}.html` y `assets/html/components/head-meta.html`.
   - **Nota:** en `index.html:25` queda la línea comentada `<!-- theme-color #080e18 -->` (intacta, no se tocó).
   - **Riesgo:** nulo (solo color de la barra del navegador en móvil). Sin commit todavía.

10. **Fix drawer — X movida a `.nav__btns` (fuera del drawer)**:
    - **Síntomas encadenados:** (a) hamburguesa y X se superponían al abrir; (b) al ocultar el hamburguesa, el tema se superponía a la X; (c) con el drawer abierto, click en la franja alta → el header parpadeaba y cualquier click ahí cerraba el menú como si fuera la X.
    - **Causa raíz (c):** la X (`.nav__close`) vivía dentro del drawer `.nav__menu` en su esquina superior derecha (`top:16px; right:16px`), zona que coincide con la franja del header; el `backdrop-filter` del header ancla el drawer `fixed` → clicks/repintados erráticos en esa franja.
    - **Fix (Commit 13fe434, 6 archivos):** mover la X fuera del drawer a `.nav__btns` (hermano del tema y hamburguesa) en los 5 headers (index, servicios, header, header-subpages, header-tech) + en `header.css`: `.nav__btns` con `position:relative; z-index:calc(var(--z-fixed)+1)` (queda sobre el drawer), eliminado el `display:none` de `.nav__btns` al abrir, e intercambio de visibilidad: drawer cerrado → hamburguesa visible y X `display:none`; drawer abierto → X `display:flex` y hamburguesa oculto (`.nav__menu.show-menu ~ .nav__btns .nav__toggle/close`). La X ya no es absoluta: es item flex normal. `main.js` usa IDs (`getEl('nav-close')`/`getEl('nav-toggle')`), insensible a ubicación → sin cambios. **Verificado por el usuario: funciona.**

11. **Fix swiper de fondo oculto tras el navbar en vistas técnicas (responsive)**:
    - **Síntoma:** en las 4 vistas (`docs/navbar.md`), en `@media ≤768px`, la `div` `.swiper.slideshow2.view-bg` se renderizaba justo detrás del navbar y solo se apreciaban las últimas 3/4 de las imágenes del carrusel.
    - **Causa:** en mobile la sección `.hero-wrapper` pasa a `height:auto; min-height:100vh` y `.view-content` a `position:relative`, pero el `.view-bg` seguía con `position:absolute; inset:0` → arrancaba en el top de la sección, tras el header fijo (96px).
    - **Fix (Commit 13fe434, mismo commit que el drawer):** en `security.css` y `redes.css` (`@media ≤768px`): `.view-bg` ahora con `top:calc(var(--header-height) + 2.5rem); height:auto; bottom:0` (arranca bajo el navbar y ocupa el resto) y `.view-content` padding-top a `calc(var(--header-height) + 2.5rem + var(--space-6))` (120px) para que el título quede con aire sobre el swiper. Plan en `docs/plan-vistas-swiper-nabvar.md`. **Verificado por el usuario: funciona.**

12. **Chatbot Chaport INACTIVADO (no eliminado)**:
    - **Motivo:** el usuario necesita investigar más, definir qué necesita y escoger la herramienta adecuada (aún no sabe cuál es).
    - **Cambio:** bloque Chaport (`window.chaportConfig` + loader `app.chaport.com/javascripts/insert.js`) envuelto en comentario HTML `<!-- ... -->` en las **7 páginas**: `index.html`, `assets/html/{automatizaciones,contacto,redes,seguridad,servicios,sistemasCriticos}.html`. Etiqueta cambiada a `Begin of Chaport Live Chat code (DESACTIVADO — revisar proveedor)`.
    - **Tawk.to:** ya estaba comentado (se conserva igual).
    - **Reactivar:** quitar las marcas `<!--`/`-->` de los bloques. **Nota:** `app.chaport.com` sigue en la CSP de `netlify.toml` (inofensivo mientras nadie lo llame; retirarlo si no se elige Chaport). **Verificado: build OK.**

13. **Fix título h3 de cards invisible en responsive + escalado proporcional h3/botón (index)**:
    - **Síntoma:** en `index.html`, sección `#cards`, el título `h3` de cada `div.card` no se renderizaba en modo responsive.
    - **Causa raíz:** en `cards.css` (`@media ≤414px`) `bottom: var(--space-14)` → `--space-14` **no existe** en `variables.css` (escala 1..12,16,20,24) → `bottom` inválido = `auto` → el h3 (absolute, tras el `<img>` con `height:100%`) caía a su posición estática fuera de la card y `overflow:hidden` de `.card` lo recortaba.
    - **Fix (Commit ffd13f9, solo `cards.css`, solo media queries):** ≤768px → h3 `font-size: clamp(0.82rem, 2.6vw, 1.25rem)` y botón `.boton_mostrar` `font-size: clamp(0.72rem, 2vw, 0.9rem)` + `padding: clamp(5px,1.4vw,8px) clamp(12px,4vw,20px)` (escala proporcional al viewport); ≤414px → se elimina la línea rota y el h3 recupera `bottom: var(--space-12)` (48px, sin solape con el botón). Desktop intacto. Plan en `docs/plan-cards-titulo-responsive.md`. **Pendiente de prueba por el usuario.**

## Pendiente
- **Commit de cierre:** el usuario hace el commit final y `git push` a main (Netlify publica al hacer push).
- **Investigación del usuario**: Chaport vs Tawk.to vs otra herramienta (chatbot inactivado hasta decidir). El snippet de Tawk.to ya está comentado en index.html; Chaport comentado en las 7 páginas. Información de Chaport en `docs/chatbot-chaport.md`. Decidir proveedor → implicaría descomentar/reactivar snippet + posible ajuste de CSP en `netlify.toml`.
- **Leftovers** (a decidir): `assets/css/components/footer.css` con línea comentada (resto de experimento); borrado de `CYCS_Co-v2.code-workspace`; archivos untracked `AGENTS.md`, `config_session/`, `opencode.json`, `x-CYCS_Co-v2.code-workspace` (locales, no se commitean).
- **Git**: rama `main` **21 commits por delante de `origin/main`** (push pendiente, lo ejecuta el usuario).