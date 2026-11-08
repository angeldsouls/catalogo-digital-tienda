# Catálogo digital

Proyecto de práctica: catálogo web moderno, simple y adaptable para pequeños negocios.

## Funcionalidades

- Encabezado con nombre y descripción del negocio.
- Listado de productos con imagen, nombre, precio y descripción.
- Buscador por nombre o descripción.
- Filtros por categoría (generados automáticamente).
- Botón de consulta por WhatsApp por producto.
- Diseño adaptable a PC y celular.
- Hecho con **HTML, CSS y JavaScript puro** (sin frameworks ni dependencias).

## Estructura

- `index.html`: estructura de la página.
- `css/style.css`: estilos visuales y diseño responsive.
- `js/app.js`: productos de ejemplo, búsqueda, filtros y WhatsApp.
- `assets/images/`: imágenes locales de productos (opcional).
- `assets/icons/`: iconos (opcional).

## Cómo personalizar

1. Abrí `js/app.js`.
2. Cambiá `WHATSAPP_NUMBER` por el número real (con código de país, sin `+`, espacios ni guiones).
3. Editá el array `products` para agregar o modificar productos.
4. Para usar imágenes locales, guardalas en `assets/images/` y usá rutas como `"assets/images/producto.jpg"`.

## Cómo probar

Abrí `index.html` en tu navegador.
