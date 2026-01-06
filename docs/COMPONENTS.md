# Componentes Reutilizables - CYCS & Co.

## Componentes HTML

### Head Meta (`assets/html/components/head-meta.html`)

Contiene todos los meta tags SEO, Open Graph, Twitter Cards, y datos estructurados.

**Uso**: Incluir en el `<head>` de todas las páginas.

### Header (`assets/html/components/header.html`)

Navegación principal del sitio con logo, menú, y botón de tema oscuro.

**Uso**: Incluir después de `<body>` o dentro de `.mainBox`.

**Características**:
- Menú responsive con toggle móvil
- Botón de cambio de tema (dark/light)
- Navegación activa basada en scroll

### Footer (`assets/html/components/footer.html`)

Footer con información de contacto, enlaces, mapa, y copyright.

**Uso**: Incluir antes del cierre de `</body>`.

## Componentes CSS

### Header (`assets/css/components/header.css`)

Estilos para la navegación principal:
- `.header` - Contenedor principal
- `.nav__menu` - Menú de navegación
- `.nav__link` - Enlaces del menú
- `.scroll-header` - Estado cuando se hace scroll

### Cards (`assets/css/components/cards.css`)

Estilos para tarjetas de servicios:
- `.cards` - Contenedor de tarjetas
- `.cardsBx` - Grid de tarjetas
- `.card` - Tarjeta individual
- `.boton_mostrar` - Botón "Leer Más"

### Footer (`assets/css/components/footer.css`)

Estilos para el footer:
- `.footer` - Contenedor principal
- `.main .contenedor` - Grid de columnas
- `.linkSecundarios` - Enlaces secundarios
- `.copyrightTexto` - Texto de copyright

### Swiper (`assets/css/components/swiper.css`)

Estilos para sliders Swiper:
- `.slideshow1` - Slider principal con efecto coverflow
- `.swiper-button-next/prev` - Botones de navegación
- `.swiper-pagination` - Paginación

### Social Icons (`assets/css/components/social-icons.css`)

Estilos para iconos sociales y WhatsApp:
- `.social_Icon` - Iconos de redes sociales (comentado actualmente)
- `.banner_Icon` - Icono de WhatsApp flotante
- `.whatsapp_Texto` - Tooltip de WhatsApp

## Componentes JavaScript

### Core

#### `menuNav.js`
Maneja el menú de navegación móvil:
- Toggle del menú
- Cierre al hacer clic en enlaces
- Validación de elementos antes de usar

#### `darkTheme.js`
Maneja el cambio de tema oscuro/claro:
- Toggle del tema
- Persistencia en localStorage
- Cambio de icono

### Scroll

#### `scroll.js`
Consolida toda la funcionalidad de scroll:
- Cambio de fondo del header al hacer scroll
- Mostrar/ocultar botón "scroll up"
- Resaltar sección activa en navegación
- Optimizado con `requestAnimationFrame`

#### `scrollReveal.js`
Configuración de animaciones ScrollReveal:
- Animaciones desde arriba (`.proveedores`, `.telco`, `.muro`)
- Animaciones desde izquierda (`.galeria`, `.ctrlAcceso`, `.equipo`)
- Animaciones desde derecha (`.clients`, `.security`, `.servicesRD`)

### Swiper

#### `swiper.js`
Configuración consolidada de todos los sliders Swiper:
- `.slideshow1` - Slider principal con coverflow
- `.slideshow2` - Slider secundario con paginación fraccionaria
- Detección automática de qué sliders existen en la página

### Utils

#### `mouseHover.js`
Efectos hover para la galería:
- Agrega clase `.hover` al pasar el mouse
- Funciona con `.container` y `.gallery-container`

#### `formspree.js`
Resetea formularios al recargar la página.

## Uso de Componentes

### Cargar Componentes HTML

Los componentes HTML pueden cargarse usando el `components-loader.js` o incluyéndolos manualmente:

```html
<!-- Usando data-component -->
<div data-component="header"></div>
<div data-component="footer"></div>

<!-- O incluyendo manualmente -->
<!-- Copiar contenido de assets/html/components/header.html -->
```

### Incluir Scripts

```html
<!-- Core -->
<script src="./assets/js/core/menuNav.js" defer></script>
<script src="./assets/js/core/darkTheme.js" defer></script>

<!-- Scroll -->
<script src="./assets/js/scrollreveal.min.js" defer></script>
<script src="./assets/js/scroll/scrollReveal.js" defer></script>
<script src="./assets/js/scroll/scroll.js" defer></script>

<!-- Swiper (si se usa) -->
<script src="./assets/Swiper/swiper-bundle.min.js" defer></script>
<script src="./assets/js/swiper/swiper.js" defer></script>

<!-- Utils -->
<script src="./assets/js/utils/mouseHover.js" defer></script>
```

## Personalización

### Variables CSS

Las variables principales están en `assets/css/base/variables.css`:
- `--color-pagina`: Color principal (#ff4c00)
- `--color-logo`: Color del logo (#9d8d6c)
- `--header-height`: Altura del header (3rem)
- `--section-height`: Altura de secciones (100vh)

### Breakpoints

Definidos en `variables.css`:
- Desktop: `min-width: 968px`
- Tablet: `max-width: 768px`
- Mobile: `max-width: 414px`

