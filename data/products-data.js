/* =========================================================
   PRODUCTOS DE GUMROAD - Viajando al Mundo
   =========================================================
   Cómo editar:
   1. Cada producto es un bloque { ... }, separado por comas.
   2. country: país al que pertenece el producto (se muestra
      como etiqueta arriba de la imagen).
   3. title: nombre del producto.
   4. price: precio a mostrar (ej: '$12', 'USD 8', etc).
   5. link: URL directa al producto en Gumroad. Si no la tenés,
      dejá el link general: https://gumroad.com/viajandoalmundo
   6. img: imagen de portada del producto. Si tenés la imagen
      real del producto, pedile a Claude que la suba y te pase
      el link, o usá cualquier URL de imagen pública.
   7. Para agregar un producto nuevo, copiá un bloque como este:
        {country:'Grecia', title:'Nombre', price:'$10',
         link:'https://gumroad.com/l/xxxxx',
         img:'https://...'},
   ========================================================= */

const productsData = [

  // ---------- GRECIA (placeholders - reemplazar con datos reales) ----------
  {
    country: 'Grecia',
    title: 'Esencial — Los imperdibles, zona por zona',
    price: 'Gratis',
    link: 'https://viajandoalmundo.gumroad.com/l/grecia',
    img: 'products_images/Grecia-Gratis_COVER.png'
  },
  {
    country: 'Grecia',
    title: 'Santorini + Mykonos (mapa + guía)',
    price: '$9',
    link: 'https://viajandoalmundo.gumroad.com/l/grecia-islas',
    img: 'products_images/Grecia-Islas_COVER.png'
  },
  {
    country: 'Grecia',
    title: 'De Atenas a las Cícladas (mapa + guía)',
    price: '$15',
    link: 'https://viajandoalmundo.gumroad.com/l/grecia-completo',
    img: 'products_images/Grecia-Completo_COVER.png'
  },
  {
    country: 'Grecia',
    title: 'Pack Total — el viaje entero resuelto',
    price: '$25',
    link: 'https://viajandoalmundo.gumroad.com/l/grecia-total',
    img: 'products_images/Grecia-PackTotal_COVER.png'
  },

  // ---------- JAPÓN (placeholders - reemplazar con datos reales) ----------
  {
    country: 'Japón',
    title: 'Esencial — Los imperdibles, zona por zona',
    price: 'Gratis',
    link: 'https://viajandoalmundo.gumroad.com/l/japon?layout=profile',
    img: 'products_images/Japon-Gratis_COVER.png'
  },
  {
    country: 'Japón',
    title: 'Tokio y sus escapadas (mapa + guía)',
    price: '$12',
    link: 'https://viajandoalmundo.gumroad.com/l/japon-tokio?layout=profile',
    img: 'products_images/Tokio_COVER.png'
  },
  {
    country: 'Japón',
    title: 'Kioto, Osaka y el oeste (mapa + guía)',
    price: '$12',
    link: 'https://viajandoalmundo.gumroad.com/l/japon-kioto?layout=profile',
    img: 'products_images/Kioto_COVER.png'
  },
  {
    country: 'Japón',
    title: 'De Tokio a Hiroshima (mapa + guía)',
    price: '$19',
    link: 'https://viajandoalmundo.gumroad.com/l/japon-completo?layout=profile',
    img: 'products_images/JaponCompleto_COVER.png'
  },
  {
    country: 'Japón',
    title: 'Pack Total — el viaje entero resuelto',
    price: '$29',
    link: 'https://viajandoalmundo.gumroad.com/l/japon-total?layout=profile',
    img: 'products_images/JaponTotal_COVER.png'
  },

];
