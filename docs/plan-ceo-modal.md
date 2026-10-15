# Plan de implementación: Modal CEO (subsistema autónomo)

## Objetivo

Crear un modal "CEO" autónomo y elegante que se abra desde un submenú "CEO" dentro del enlace "Contacto". Requisitos:

- Ventana modal centrada, tamaño ~1/4 del viewport (`50vw x 50vh` con `clamp`).
- Desktop: Título + biografía a la izquierda; imagen del CEO a la derecha.
- Responsive: imagen detrás del contenido (opacada con gradiente), contenido centrado vertical y horizontalmente.
- Estética elegante: glassmorphism sutil, borde con acento naranja, sombra profunda, animación suave.
- Subsistema autónomo: archivos nuevos aislados + mínimas modificaciones al proyecto original.

## Modificaciones permitidas (mínimas)

1. `assets/html/components/header-subpages.html` → añadir submenú "CEO" dentro del enlace "Contacto".
2. `vite.config.mjs` → añadir la entrada `ceo` al `rollupOptions.input`.

## Archivos a crear (nuevos)

1. `assets/html/ceo.html` — página autónoma con el modal (overlay + ventana).
2. `assets/css/ceo.css` — estilos aislados con prefijo `.ceo-*`.
3. `assets/img/ceo/` — imagen del CEO optimizada (a partir de `ref_ceo_hero.png`).

## Detalles de diseño

### Tamaño del modal

- `width: clamp(320px, 50vw, 680px)`
- `height: clamp(240px, 50vh, 520px)`
- Centrado: `position: fixed; inset: 0; margin: auto;`

### Estilos de la ventana

- Fondo: `rgba(1, 22, 39, 0.92)`
- Backdrop: `rgba(0, 0, 0, 0.65)` + `backdrop-filter: blur(4px)`
- Borde: `1px solid rgba(255, 76, 0, 0.4)` (acento `#ff4c00`)
- Sombra: `0 20px 60px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.02)`
- Radio: `14px`
- Animación: fade + scale (opacity 0→1, scale 0.98→1, 200–250 ms ease-out)

### Desktop (≥1024px)

- `.ceo-window` → `display: flex; flex-direction: row; gap: 1.5rem;`
- `.ceo-content` → izquierda (título + biografía), ~40–50% del ancho.
- `.ceo-media` → derecha, ~50–60%, imagen `object-fit: cover; height: 100%; width: 100%; border-radius: 10px;`

### Responsive (≤768px)

- `.ceo-media` → `position: absolute; inset: 0; z-index: 0;`
- Imagen con efecto: `mask-image: linear-gradient(to right, black 45%, transparent 85%); -webkit-mask-image: ...; filter: brightness(.8) saturate(.95);`
- `.ceo-content` → `position: relative; z-index: 1; display: grid; place-items: center; padding: 2rem;` (centrado V/H).

### JS mínimo (autónomo)

- Abrir/cerrar modal: click en backdrop, botón de cierre y tecla ESC.
- Sin dependencia de `app.js` / `core/main.js`. JS propio pequeño.

## Tareas (desglosadas, cortas, con riesgo)

### Tarea 1: Preparar imagen del CEO

- Acción: copiar/optimizar `ref_ceo_hero.png` a `assets/img/ceo/ceo.webp`.
- Archivos: crear carpeta `assets/img/ceo/`.
- Riesgo: Bajo (solo copiar/optimizar imagen).
- Verificación: la imagen existe y carga.

### Tarea 2: Crear CSS autónomo `ceo.css`

- Acción: crear `assets/css/ceo.css` con estilos aislados (`.ceo-*`).
- Riesgo: Bajo (archivo nuevo, no toca globales).
- Verificación: sintaxis CSS válida.

### Tarea 3: Crear página autónoma `ceo.html`

- Acción: crear `assets/html/ceo.html` con el modal (overlay + ventana), título + biografía breve, imagen y botón de cierre.
- Riesgo: Bajo (archivo nuevo).
- Verificación: HTML válido, carga sus propios CSS/JS.

### Tarea 4: Añadir submenú "CEO" en `header-subpages.html`

- Acción: añadir el ítem "CEO" como submenú dentro del enlace "Contacto".
- Riesgo: Bajo (modificación mínima, solo navegación).
- Verificación: el menú aparece y el enlace apunta a `ceo.html`.

### Tarea 5: Añadir entrada `ceo` en `vite.config.mjs`

- Acción: añadir `ceo: resolve(import.meta.dirname, 'assets/html/ceo.html')` al `rollupOptions.input`.
- Riesgo: Muy bajo (añadir línea; no afecta a otras entradas).
- Verificación: el build incluye `ceo.html`.

### Tarea 6: Verificar build y navegación

- Acción: ejecutar `npm run build` para confirmar que todo compila y `dist/` incluye `ceo`.
- Riesgo: Muy bajo.
- Verificación: sin errores y archivos generados.

## Autorización

Requiere autorización explícita para ejecutar cada tarea o grupo de tareas (Regla 9 de `rules.md`).
