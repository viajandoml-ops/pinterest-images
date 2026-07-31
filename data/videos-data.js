/* =========================================================
   VIDEOS DE YOUTUBE - Viajando al Mundo
   =========================================================
   Cómo editar:
   1. Cada país es una "clave" (grecia, italia, etc). El "label"
      es el nombre que se muestra en el botón de filtro.
   2. "total" = cantidad TOTAL de videos que tenés de ese país
      (aunque no los hayas cargado todos acá abajo). Se usa
      para mostrar el cartel "Mirá los X videos completos".
   3. "videos" = lista de videos que SÍ se muestran en la página.
      Podés agregar todos los que quieras, no hay límite.
   4. Para agregar un video nuevo, copiá una línea como esta:
        {id:'ABC123XYZ', title:'Título del video'},
      El "id" es lo que aparece en la URL después de youtu.be/
      Ejemplo: https://youtu.be/EJTJ258bvw4  ->  id: 'EJTJ258bvw4'
   5. Si agregás un país nuevo que no existe en la lista, copiá
      un bloque completo (desde "nombreclave: {" hasta "},")
      y modificá los datos.
   6. No borres las comas ni las llaves { } [ ] o la página
      puede dejar de funcionar. Ante la duda, pedí ayuda.
   ========================================================= */

const videosData = {

  grecia: {
    label: 'Grecia',
    total: 12,
    videos: [
      {id:'EJTJ258bvw4', title:'Maravillas de Atenas 🚶‍♂️🏛️ Esto NO te lo podés perder 🔥📍'},
    ]
  },

  italia: {
    label: 'Italia',
    total: 19,
    videos: [
      {id:'UFPRZh1bSBA', title:'Vida, Arte y Tragedia - POMPEYA, Italia'},
    ]
  },

  bahamas: {
    label: 'Bahamas',
    total: 2,
    videos: [
      {id:'vGmidt-eZ5M', title:'🏖️ Exuma, Bahamas: Guía para Viajeros 🌎'},
    ]
  },

  florida: {
    label: 'Florida, EEUU',
    total: 3,
    videos: [
      {id:'f1RYVksfQpY', title:'🩷 Inter de Miami 🖤 - 🏟️ Tour y Partido en el Viejo Estadio ⚽'},
    ]
  },

  eau: {
    label: 'Emiratos Árabes',
    total: 2,
    videos: [
      {id:'ZnGa7mNAoIc', title:'DUBAI - 16 LUGARES para visitar - Tips y recomendaciones'},
    ]
  },

  argentina: {
    label: 'Argentina',
    total: 2,
    videos: [
      {id:'bIqLGJv-3Us', title:'Dormimos en un Castillo en Buenos Aires 😍 | Estancia La Candelaria, Lobos'},
    ]
  },

  japon: {
    label: 'Japón',
    total: 14,
    videos: [
      {id:'SCF0XKn8QMY', title:'Shibuya y Shinjuku: el corazón nocturno de Tokio, Japón 🇯🇵'},
    ]
  },

  austria: {
    label: 'Austria',
    total: 2,
    videos: [
      {id:'72krOjzIlP8', title:'Así es recorrer Hallstatt, Austria 🇦🇹 Un lugar que parece una postal'},
    ]
  },

};
