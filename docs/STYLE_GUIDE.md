# Guía de Estilo - CYCS & Co.

## Convenciones de Código

### HTML

- **Indentación**: 2 espacios
- **Atributos**: Usar comillas dobles
- **Meta tags**: Mantener orden consistente (charset, viewport, SEO, Open Graph)
- **Rutas**: Usar rutas relativas (`./assets/` desde root, `../assets/` desde subdirectorios)

### CSS

- **Organización**: Modular por funcionalidad
  - `base/` - Variables, reset, tipografía
  - `components/` - Componentes reutilizables (header, footer, cards, etc.)
  - `layout/` - Sistema de grid y secciones
- **Naming**: BEM-like (`.component__element--modifier`)
- **Variables CSS**: Usar `:root` y `*` para variables globales
- **Comentarios**: Usar `/*: Descripción */` para secciones principales

### JavaScript

- **Estructura**: Organizado por funcionalidad
  - `core/` - Funcionalidad esencial (menuNav, darkTheme)
  - `scroll/` - Funcionalidad relacionada con scroll
  - `swiper/` - Configuración de Swiper
  - `utils/` - Utilidades generales
- **IIFE**: Envolver código en funciones auto-ejecutables para evitar conflictos globales
- **Comentarios**: Usar JSDoc para funciones principales
- **Carga**: Usar `defer` en scripts no críticos

## Estructura de Archivos

```
assets/
├── css/
│   ├── base/
│   │   ├── variables.css
│   │   ├── reset.css
│   │   └── typography.css
│   ├── components/
│   │   ├── header.css
│   │   ├── footer.css
│   │   ├── cards.css
│   │   ├── swiper.css
│   │   └── social-icons.css
│   ├── layout/
│   │   ├── grid.css
│   │   └── sections.css
│   └── style.css (importa todos los módulos)
├── js/
│   ├── core/
│   │   ├── menuNav.js
│   │   └── darkTheme.js
│   ├── scroll/
│   │   ├── scroll.js
│   │   └── scrollReveal.js
│   ├── swiper/
│   │   └── swiper.js
│   └── utils/
│       ├── mouseHover.js
│       └── formspree.js
└── html/
    └── components/
        ├── head-meta.html
        ├── header.html
        └── footer.html
```

## Convenciones de Naming

- **Archivos CSS**: kebab-case (`header.css`, `social-icons.css`)
- **Archivos JS**: camelCase (`menuNav.js`, `darkTheme.js`)
- **Clases CSS**: BEM-like (`nav__menu`, `nav__link--active`)
- **Variables CSS**: kebab-case (`--color-pagina`, `--header-height`)

## Optimización

- **CSS**: Usar solo archivos minificados de librerías externas
- **JavaScript**: Usar `defer` para scripts no críticos
- **CDN**: Agregar `preconnect` para recursos externos
- **Imágenes**: Usar `loading="lazy"` para imágenes no críticas

## Responsive Design

- **Breakpoints**:
  - Mobile: `max-width: 414px`
  - Tablet: `max-width: 768px`
  - Desktop: `min-width: 968px`
- **Mobile-first**: Escribir estilos base para mobile, luego media queries para pantallas más grandes


