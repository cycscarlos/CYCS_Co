# AGENTS.md — CYCS & Co. (CYCS_Co-Anterior)

Sitio web corporativo multipágina: HTML5 + CSS vanilla + JavaScript (ESM) empaquetado con Vite 8. Sin framework, sin tests, sin linter. Contenido y commits en **español**.

## Reglas de trabajo (obligatorio)

- Lee `config_session/rules.md` y `config_session/memory.md` (ya cargados vía `opencode.json`).
- **Nunca modifiques código sin autorización escrita del usuario.** El usuario ejecuta las pruebas y el `git push`; el agente solo ejecuta commits, con formato `checkpoint: <descripción>` antes de cada modificación.

## Comandos

- `npm run dev` — servidor de desarrollo Vite.
- `npm run build` — build de producción → `dist/` (publicado por Netlify).
- `npm run preview` — previsualiza el build.
- No existe lint/test/typecheck. Verificar cambios con `npm run build` (o revisión visual en `npm run dev`).

## Arquitectura

- **Punto de entrada único:** todas las páginas (`index.html` + subpáginas) cargan `<script type="module" src="/assets/js/app.js">`. `app.js` importa **todo**: CSS (los estilos se agrupan vía imports JS, no `<link>`), swiper, scrollReveal, lightbox y utilidades.
- **Páginas secundarias** viven en `assets/html/*.html`. `vite.config.js` (rollupOptions.input) lista las 7 páginas: si creas/renombras una página, añádela ahí o no entrará al build.
- **Header/footer/WhatsApp compartidos:** se inyectan con placeholders `data-component` + `assets/js/components-loader.js`, que hace fetch de `/assets/html/components/*.html` (path absoluto desde la raíz del proyecto; aplica tanto en dev como en dist). Al editar el header/footer, edita **solo el componente**, no las páginas.
  - `header.html` → index; `header-subpages.html` → nosotros/contacto; `header-tech.html` → subpáginas técnicas.
  - Al terminar de inyectar, se dispara `components:loaded`; `app.js` re-inicializa los módulos en ese evento — si añades código que toca el DOM inyectado, suscríbete a ese evento o re-inicializa ahí.
- **Swiper:** dos archivos de init — `assets/js/swiper/swiper.js` (`initHeroSwiper`, clase `.slideshow1`, hero del index) y `assets/js/swiper/swiper_v2.js` (`initServiceSwipers`, clase `.slideshow2`, fondos de las subpáginas técnicas con el patrón `view-bg`). Ambos se inicializan en `app.js`.
- **Formulario de contacto:** action Formspree `https://formspree.io/f/xbjwzpzl` en `assets/html/contacto.html`, manejado por `assets/js/utils/formspree.js`. En localhost Formspree responde 403 (esperado; el aviso del dominio no autorizado está implementado).

## Build y deploy

- `vite-plugin-image-optimizer` comprime jpg/png a calidad 80 y webp/avif lossless. **SVG:** preservar `viewBox` y atributos numéricos (configurado explícitamente en vite.config.js); no lo quites.
- `netlify.toml`: build → `npm run build`, publish `dist/`. La **CSP global** está definida ahí: cualquier origen externo nuevo (CDN, API, widget) debe añadirse a la CSP o será bloqueado en producción. Ya permitidos: cdn.jsdelivr.net, fonts.googleapis.com, fonts.gstatic.com, app.chaport.com (chat), formspree.io.
- `dist/`, `node_modules/` están en `.gitignore`: el build es artefacto, no se edita ni se commitea.

## Trampas frecuentes

- `docs/Zai_Plan.md` es un roadmap de remodelación (directorio `docs/` está gitignored). Varios pasos están **planificados pero no implementados** (ej. GSAP/Swup NO están instalados en `package.json`) — verifica en el código antes de asumir que existen.
- `config_session/` y `opencode.json` están sin commitear a propósito — se mantienen locales.
- GitHub Actions/CI: no hay; el pipeline es solo Netlify al hacer push a main.