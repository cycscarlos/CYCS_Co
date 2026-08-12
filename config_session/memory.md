# Contexto de Sesión

## Checkpoints
- 944e3e0 — checkpoint: grid 2×2 de cards en index (estado actual antes de aplicar 2×2 en vistas seguridad/redes/sistemasCriticos).
- 27f27fa — fix: rediseño del footer — tokens `--footer-*` siempre oscuros y sinergia con la paleta del hero (variables.css + footer.css).
- 32cfcb5 — checkpoint estado actual (vite.config.js + package-lock.json) antes de renombrar a `.mjs`.
- e5d18d1 — checkpoint estado actual (ediciones locales index) antes de eliminar vista nosotros.
- 81c47ff — último commit antes del rediseño de vistas (punto de rollback del rediseño; árbol limpio).

## Commits de la sesión actual
- 0dc19e4 — checkpoint: estado actual antes de cambiar el color del titulo principal a blanco
- 283c617 — checkpoint: estado actual funcional antes de ajustar margen superior del titulo respecto al navbar
- 63ba6a5 — checkpoint: restaurar posicionamiento absoluto overlay en .view-content con overflow-y auto para scroll perfecto
- 4cee3f4 — checkpoint: ajustar altura dinamica del swiper y permitir scroll natural para cards
- 26da663 — checkpoint: posicionamiento absoluto del contenedor de cards superpuesto directamente sobre el swiper
- b0bbe43 — checkpoint: estado actual antes de refactorizar cards translucidas (swiper como fondo visible)

## Resumen de la sesión
1. **Refactorización de Vistas Técnicas (automatizaciones, sistemasCriticos, seguridad, redes)**:
   - Contenido (`.view-content`) sobrepuesto de forma absoluta sobre el swiper de fondo (`position: absolute; inset: 0; z-index: 2`).
   - Scroll vertical activado en `.view-content` (`overflow-y: auto`) para lectura completa de tarjetas sin recortes.
   - Transparencia cristal glassmorphic (`rgba(8, 14, 24, 0.28)` + `blur(5px)`) para proyectar el carrusel al fondo.
   - Margen superior del título ampliado (`calc(var(--header-height) + var(--space-12))`) despejando holgadamente el navbar.
   - Títulos principales en color **blanco puro (`#FFFFFF`)** conservando la acentuación naranja (`var(--brand-primary)`) en los `span`.

## Pendiente
- **Probar en `npm run dev`** (el usuario): verificar el texto blanco del título, el espacio respecto al navbar y la experiencia completa en las 4 vistas.

- **Investigación del usuario**: Chaport vs Tawk.to (el snippet de Tawk.to ya está comentado en index.html). Decidir si se cambia de proveedor (implicaría snippet en 7 páginas + CSP). Información de Chaport en `docs/chatbot-chaport.md`.
- **Leftovers** (a decidir): `assets/css/components/footer.css` con línea comentada (resto de experimento); borrado de `CYCS_Co-v2.code-workspace`; archivos untracked `AGENTS.md`, `config_session/`, `opencode.json`, `x-CYCS_Co-v2.code-workspace` (locales, no se commitean).
- **Git**: rama `main` **sincronizada con `origin/main`** (push hecho). Árbol limpio.
