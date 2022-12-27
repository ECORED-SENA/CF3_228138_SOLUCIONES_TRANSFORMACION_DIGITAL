export default {
  global: {
    componenteFormativo: 'Análisis de requisitos, procesos e información',
    descripcionCurso:
      'El componente formativo está orientado al conocimiento de la empresa, sus procesos, necesidades y la manera técnica metodológica de recopilar requisitos para la solución y mejora de procesos empresariales empleando la tecnología y la transformación digital.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        titulo: 'Comunicación',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas de análisis de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Priorización de requisitos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Matrices de trazabilidad',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Descomposición funcional',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Especificación de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Estándar IEEE 830',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Estándar IEEE 29148:2018',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'La especificación de requisitos a través de métodos y metodologías ágiles',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Scrum y la especificación de requisitos',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Kanban y la especificación de requisitos',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Elicitación de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Planeación',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Técnicas e instrumentos para elicitar requisitos',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Herramientas para captura de requisitos',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Herramientas de modelado',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Metodologías de desarrollo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Metodologías ágiles',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Metodología SCRUM',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Modelos de procesos y diagrama de flujo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Recolección de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Tipos y clasificación de la información',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Métodos, técnicas e instrumentos',
            hash: 't_7_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
  complementario: [
    {
      tema: '2. Técnicas de análisis de requisitos',
      referencia:
        'Facultad de Estudios a Distancia UMNG. (2021). Elementos de la norma IEEE 830 [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/LjBOTZdd_iE',
    },
    {
      tema: '3. Especificación de requisitos',
      referencia:
        'IEEE. (2009). 830-1998 - IEEE Recommended Practice for Software Requirements Specifications. IEEE Xplore.',
      tipo: 'Página web',
      link: 'https://ieeexplore.ieee.org/document/720574',
    },
    {
      tema: '3. Especificación de requisitos',
      referencia:
        'ISO. (2018). ISO/IEC/IEEE 29148:2011 Systems and software engineering — Life cycle processes — Requirements engineering.',
      tipo: 'Página web',
      link: 'https://www.iso.org/standard/45171.html',
    },
    {
      tema: '5. Metodologías de desarrollo',
      referencia:
        'Henao, C. (2018). Qué son las metodologías ágiles en el desarrollo de Software [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/fHKsufzM7qQ',
    },
    {
      tema: '6. Modelos de procesos y diagrama de flujo',
      referencia:
        'Vélez, J. (2011). Diseñar y programar, todo es empezar: una introducción a la Programación Orientada a Objetos usando UML y Java. Dykinson.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/63076',
    },
    {
      tema: '6. Modelos de procesos y diagrama de flujo',
      referencia:
        'Kielbasiewicz, N. (2016). Chapter 3 Use case diagrams. TikZ-UML.',
      tipo: 'Tutorial',
      link:
        'https://perso.ensta-paris.fr/~kielbasi/tikzuml/var/files/html/web-tikz-uml-userguidech3.html',
    },
    {
      tema: '7.1 Tipos y clasificación de la información',
      referencia:
        'Jibaro X. (2019). Tipos de preguntas en una encuesta [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=mwnQuUi9014',
    },
    {
      tema: '7.2 Métodos, técnicas e instrumentos',
      referencia:
        'Gómez, J. (2014). Análisis de BPMN como herramienta integral para el Modelado de Procesos de Negocio. Revista Universidad de Manizales, (30).',
      tipo: 'Artículo',
      link:
        'https://revistasum.umanizales.edu.co/ojs/index.php/ventanainformatica/article/view/274',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo:',
      significado:
        'es una secuencia que se lleva a cabo de forma lógica y secuencial que tiene como objetivo la solución de un problema.',
    },
    {
      termino: 'Comunicación',
      significado:
        'la comunicación consciente consiste en la transmisión y recepción de datos entre dos o más actores con el fin de transmitir o recibir mensajes u opiniones distintas.',
    },
    {
      termino: '<em>Cloud computing</em>',
      significado:
        'la computación en la nube, conocida también como servicios en la nube, consiste en el uso de una red de servidores remotos alojados en Internet para almacenar, administrar y procesar datos e información, en lugar de un servidor local o una computadora personal.',
    },
    {
      termino: 'Diagrama de flujo',
      significado:
        'forma gráfica de representación de un proceso o algoritmo utilizando simbología.',
    },
    {
      termino: 'Estándar',
      significado:
        'referencia, patrón o modelo que es utilizado a nivel general en un determinado ámbito.',
    },
    {
      termino: 'Marcos de trabajo ágiles',
      significado:
        'conjunto de estándares, metodologías, técnicas, <em>frameworks</em> o guías que rigen un proceso de desarrollo de <em>software</em>, basadas en principios y/o valores ágiles, como, por ejemplo: <em>Scrum, Lean Software, XP, TDD</em>, entre otros.',
    },
    {
      termino: 'Metodologías ágiles',
      significado:
        'conjunto de buenas prácticas y técnicas para que el desarrollo de proyectos se realice en menos tiempo y de forma más dinámica.',
    },
    {
      termino: 'Migración',
      significado:
        'en tecnología, consiste en el desplazamiento del <em>software</em>, aplicaciones o sistemas de información de una infraestructura tecnológica a otra, por ejemplo, la migración de una aplicación de un servidor local a un servidor en la nube.',
    },
    {
      termino: 'Pruebas unitarias',
      significado:
        'forma de comprobar el correcto funcionamiento de una unidad de código.',
    },
    {
      termino: 'Pruebas de integración',
      significado:
        'prueba que se ejecuta una vez se aprueban las pruebas unitarias, y lo que busca es verificar que el conjunto de fragmentos de código funciona junto de forma correcta. Es una prueba de conjunto.',
    },
    {
      termino: '<em>Scrum</em>',
      significado:
        'metodología de trabajo ágil que está basada en ciclos con periodos de tiempo cortos, que pueden ser semanas o meses, para entregar una parte del proyecto.',
    },
  ],
  referencias: [
    {
      referencia: 'AllCode. (2021). 10 Top Cloud Providers in 2021.',
      link: 'https://allcode.com/cloud-providers/',
    },
    {
      referencia:
        'Claranet. (2021). 6 enfoques para afrontar la migración a la nube.',
      link:
        'https://www.claranet.es/blog/6-enfoques-para-afrontar-la-migracion-a-la-nube',
    },
    {
      referencia:
        'Da Silva, D. (2021). ¿Qué es la metodología ágil? ¿Para qué sirve? Blog de Zendesk.',
      link: 'https://www.zendesk.com.mx/blog/metodologia-agil-que-es/',
    },
    {
      referencia:
        'IEEE. (2009). 830-1998 - IEEE Recommended Practice for Software Requirements Specifications. IEEE Xplore.',
      link: 'https://ieeexplore.ieee.org/document/720574',
    },
    {
      referencia:
        'MinTIC y MinEducación. (s. f.). Lección 2: Los diagramas de flujo. Currículos Exploratorios en TIC.',
      link:
        'http://contenidos.sucerman.com/nivel1/programacion/unidad1/leccion2.html',
    },
    {
      referencia:
        'Pantaleo, G. y Rinaudo, L. (2018). Ingeniería de software. Alfaomega.',
    },
    {
      referencia:
        'Penzenstadler, B. (s. f.). Requirements Engineering, CSU Long Beach, Penzenstadler.',
      link:
        'http://www.foss2serve.org/index.php/Requirements_Engineering,_CSU_Long_Beach,_Penzenstadler',
    },
    {
      referencia: 'Pinnacle. (s. f.). Comunicación y requisitos.',
      link:
        'https://www.pbsnow.com/wp-content/uploads/2014/11/Project-Management-Tree-Example.png',
    },
    {
      referencia:
        'Porfirio, C. (2021). Técnicas de priorización: el desafío de conseguir un orden para las funcionalidades. atSistemas.',
      link:
        'https://www.atsistemas.com/es/blog/tcnicas-de-priorizacin-el-desafo-de-conseguir-un-orden-para-las-funcionalidades',
    },
    {
      referencia:
        'Rivadeneira, S. (2014). Metodologías ágiles enfocadas al modelado de requerimientos. Informes Científicos Técnicos - UNPA, 5(1), p. 1-29.',
      link: 'https://doi.org/10.22305/ict-unpa.v5i1.66',
    },
    {
      referencia:
        'Santos, D. (2012).  Comunicación oral y escrita. Red Tercer Milenio.',
      link:
        'http://190.57.147.202:90/jspui/bitstream/123456789/650/1/Comunicacion_oral_y_escrita.pdf',
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
        cargo: 'Responsable desarrollo curricular',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Jaime Hernán Tejada',
        cargo: 'Experto temático',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios - CIES',
      },
      {
        nombre: 'Giovanna Andrea Escobar Ospina',
        cargo: 'Diseñadora instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios - CIES',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
