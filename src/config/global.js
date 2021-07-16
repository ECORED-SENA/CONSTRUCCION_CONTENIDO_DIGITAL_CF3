export default {
  global: {
    componenteFormativo: 'Construcción de contenido digital',
    descripcionCurso:
      'En este componente se pone práctica todo lo aprendido en los componentes anteriores. El flujo de trabajo de la producción de contenido, es completamente práctico, donde se pretende el desarrollo de diferentes piezas de contenido digital que se utilizarán en plataformas sociales.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Creación de imagen',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Creación de audio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Creación de video',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Treintaycinco mm. (2019). Diez consejos sobre cómo editar videos de forma profesional. 35mm.es. ',
      link:
        'https://35mm.es/como-editar-videos-profesionalmente-10-consejos-utiles/',
    },
    {
      referencia:
        'Caño, C. (2010). Tutoriales Audacity. Universitat Oberta de Catalunya. ',
      link: 'http://openaccess.uoc.edu/webapps/o2/handle/10609/9047',
    },
    {
      referencia:
        'Baêta, L. (9, septiembre 2019). Conoce los principales conceptos y consejos para editar audio. [Web log post]. Hotmart Blog.',
      link: 'https://blog.hotmart.com/es/editar-audio/',
    },
    {
      referencia:
        'Mejía, M. (2021). ¡Dale vida a tu producto digital con Figma! [Web log post]. www.crehana.com',
      link: 'https://www.crehana.com/co/blog/diseno-grafico/que-es-figma/',
    },
  ],
  glosario: [
    {
      termino: 'Amplificar',
      significado:
        'Este efecto incrementa o reduce el volumen del audio que se ha seleccionado.',
    },
    {
      termino: 'Auto Duck',
      significado:
        'Reduce el volumen de una o más pistas cuando el volumen de la pista “control” alcanza un nivel particular. Típicamente usado para hacer que una pista de música suene más despacio cuando se escucha voz en una pista de comentarios.',
    },
    {
      termino: 'Autoplay',
      significado: 'Es un video que se reproduce automáticamente.',
    },
    {
      termino: 'Back Up',
      significado:
        'Copia de seguridad de archivos, que se crea para evitar que se pierda la información gráfica en caso que se pierdan los originales, o se necesite hacer nuevos cambios en el diseño.',
    },
    {
      termino: 'Bit Rate',
      significado:
        'Se refiere a la cantidad de información por segundo que nuestro ordenador o móvil lee al reproducir un archivo de video. Por tanto, cuanto mayor sea el bitrate mayor será la calidad del material.',
    },
    {
      termino: 'Canva',
      significado:
        'Lienzo donde se diseñan las piezas gráficas en los programas de diseño.',
    },
    {
      termino: 'Embed',
      significado:
        'Es incrustar un video que ha sido subido a una plataforma, en una web o en un blog.',
    },
    {
      termino: 'Filtro',
      significado:
        'Capas de color que permiten cambiar la intensidad de nuestras fotografías.',
    },
    {
      termino: 'Formato de imagen',
      significado:
        'Datos digitales en un formato específico que permiten ser visualizados en una computadora o dispositivo compatible; los más usados son: PNG, JPEG, TIFF y GIF.',
    },
    {
      termino: 'Lecturabilidad',
      significado:
        'Cualidad de un diseño que permite leer con facilidad el texto que hay en este.',
    },
    {
      termino: 'Legibilidad',
      significado: 'Cualidad que tiene un texto de leerse sin dificultad.',
    },
    {
      termino: 'M1V',
      significado:
        'Extensión de un archivo MPEG que solo contiene datos de video. MPA, MPEG, MPG.',
    },
    {
      termino: 'M4A',
      significado:
        'Es un contenedor para distribuir ficheros de audio codificados en formato AAC o ALAC protegidos mediante DRM.',
    },
    {
      termino: 'Mapa de Bits (Bitmaps)',
      significado:
        'Hace referencia a una imagen que está constituida por pixeles que tienen información de color. Los formatos de imagen para mapa de bits son: PNG, JPEG y GIF. El programa más usado para editar estas imágenes es Photoshop.',
    },
    {
      termino: 'Multimedia',
      significado:
        'El término se refiere a cualquier plataforma que utiliza diferentes medios de expresión para comunicar y dar a conocer información, desde texto e imágenes hasta gifs, videos y audios.',
    },
    {
      termino: 'Pixel',
      significado:
        'Elemento más pequeño de la imagen de un monitor. El término proviene de dos palabras inglesas: picture y element.',
    },
    {
      termino: 'Podcast',
      significado:
        'Publicación digital en audio o video que se puede descargar o escuchar vía streaming. Suelen alojarse en una página web o blog, pero también en plataformas especializadas en audio como iTunes, Spotify o SoundCloud.',
    },
    {
      termino: 'Resolución',
      significado:
        'Cantidad de píxeles que pueden visualizarse en el monitor horizontal y verticalmente. Cuanto más alta es la resolución, más detalles pueden visualizarse.',
    },
    {
      termino: 'RGB',
      significado:
        'Rojo, verde y azul. Colores primarios de la mezcla aditiva de colores. RGB designa el método que se emplea en informática para codificar la información de la imagen en pixeles, cada uno con una determinada combinación de estos tres colores primarios.',
    },
    {
      termino: 'Playlist',
      significado:
        'Es una lista de videos online, organizados por temas o categorías. Muy populares en YouTube.',
    },
    {
      termino: 'Video 360',
      significado:
        'Son videos grabados con cámaras especiales, capaces de captar la acción en un ángulo de 360 grados.',
    },
    {
      termino: 'Voz en off',
      significado:
        'Narración en la que el locutor no está en la escena. Se suele añadir al editar.',
    },
  ],
  complementario: [
    {
      texto:
        'Red Producción de contenidos Grupo Gestión Curricular SENA. (2020). Tutorial Creación de Sonido (Video). YouTube. https://www.youtube.com/watch?v=fO-5S_yyAIU&feature=youtu.be',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fO-5S_yyAIU&feature=youtu.be',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jesualdo Morantes',
        cargo: 'Instructor',
        centro: 'SENA – Regional Norte de Santander',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Diseñadora Instruccional - Revisora Metodológica y Pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia  Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Herrera Roldan',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Isabel Román Rueda',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
