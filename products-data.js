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
    title: 'Guía de Viaje: Grecia Vol. 1',
    price: 'Ver precio en Gumroad',
    link: 'https://gumroad.com/viajandoalmundo',
    img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=500&auto=format&fit=crop'
  },
  {
    country: 'Grecia',
    title: 'Guía de Viaje: Grecia Vol. 2',
    price: 'Ver precio en Gumroad',
    link: 'https://gumroad.com/viajandoalmundo',
    img: 'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?q=80&w=500&auto=format&fit=crop'
  },
  {
    country: 'Grecia',
    title: 'Guía de Viaje: Grecia Vol. 3',
    price: 'Ver precio en Gumroad',
    link: 'https://gumroad.com/viajandoalmundo',
    img: 'https://images.unsplash.com/photo-1602088113235-229c19758e9d?q=80&w=500&auto=format&fit=crop'
  },
  {
    country: 'Grecia',
    title: 'Guía de Viaje: Grecia Vol. 4',
    price: 'Ver precio en Gumroad',
    link: 'https://gumroad.com/viajandoalmundo',
    img: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=500&auto=format&fit=crop'
  },

  // ---------- JAPÓN (placeholders - reemplazar con datos reales) ----------
  {
    country: 'Japón',
    title: 'Guía de Viaje: Japón Vol. 1',
    price: 'Ver precio en Gumroad',
    link: 'https://gumroad.com/viajandoalmundo',
    img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=500&auto=format&fit=crop'
  },
  {
    country: 'Japón',
    title: 'Guía de Viaje: Japón Vol. 2',
    price: 'Ver precio en Gumroad',
    link: 'https://gumroad.com/viajandoalmundo',
    img: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=500&auto=format&fit=crop'
  },
  {
    country: 'Japón',
    title: 'Guía de Viaje: Japón Vol. 3',
    price: 'Ver precio en Gumroad',
    link: 'https://gumroad.com/viajandoalmundo',
    img: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=500&auto=format&fit=crop'
  },
  {
    country: 'Japón',
    title: 'Guía de Viaje: Japón Vol. 4',
    price: 'Ver precio en Gumroad',
    link: 'https://gumroad.com/viajandoalmundo',
    img: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=500&auto=format&fit=crop'
  },
  {
    country: 'Japón',
    title: 'Guía de Viaje: Japón Vol. 5',
    price: 'Ver precio en Gumroad',
    link: 'https://gumroad.com/viajandoalmundo',
    img: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=500&auto=format&fit=crop'
  },

];
