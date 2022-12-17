<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Especificación de requisitos
    
    .cajon-b.color-secundario.cajon-end.p-3.mb-5
      .row.justify-content-between.align-items-center
        .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
          p.mb-0 En esta sección se describen algunos estándares y/o técnicas que pueden ser usadas por las organizaciones para describir formalmente cada uno de los requisitos del sistema.
        .col-lg-1.col-2.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema3/img01.svg")
    
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Estándar IEEE 830
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Este estándar presenta un conjunto de prácticas recomendadas para la redacción de un documento de especificación de requerimientos mejor conocido como SRS. Este documento está dividido en secciones y cada una de ellas aborda aspectos particulares. A continuación, se describirá de forma general algunos de los elementos que conforman este documento (IEEE 830-1998).
        .BGR07.p-3
          .row.justify-content-around.align-items-center
            .col-lg-2.col-sm-3.col-4
              img(src="@/assets/curso/tema3/img02.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.text-white.mb-1 Infografía - Estándar IEEE 830
                  p.text-white Este documento está dividido en secciones y cada una de ellas aborda aspectos particulares. A continuación, se describirá de forma general algunos de los elementos que conforman este documento (IEEE 830-1998). 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/Infografia_EstandarIEEE830.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img03.png")

    p La siguiente tabla muestra la estructura base de un documento SRS, indicando cuáles son los apartados principales.

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 6
          span Estructura base de un documento SRS
      .col-lg-6.BG08.p-4(data-aos="zoom-in")
        .h5 1. Introducción
        p.mb-0 1.1. Propósito
        p.mb-0 1.2. Ámbito del sistema
        p.mb-0 1.3. Definiciones, Acrónimos y Abreviaturas
        p 1.4. Referencias
        .h5 2. Descripción general
        p.mb-0 2.1. Perspectiva del producto
        p.mb-0 2.2. Funciones del producto
        p.mb-0 2.3. Características de los usuarios
        p.mb-0 2.4. Restricciones
        p 2.5. Suposiciones y dependencias
        .h5 3. Requerimientos específicos
        p.mb-0 3.1. Interfaz
        p.mb-0 3.2. Requisitos funcionales
        p.mb-0 3.3. Requerimientos no funcionales
        p 3.4. Otros requisitos
        .h5 4. Apéndices

    p Ahora se deben revisar algunos ejemplos que se presentan sobre el diligenciamiento del formato SRS:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Tabla 7
          span Ejemplos de SRS diligenciados
        
        .tabla-a.color-acento-contenido(data-aos="zoom-in")
          table
            thead(style="border-color: transparent")
              tr
                th(style="background-color: #FF6148;").text-center Proyecto
                th(style="background-color: #FF6148;").text-center Link del documento
            tbody    
              tr
                th(style="background-color: #F6F6F6;").text-center Sistema Integral Académico
                td(style="background-color: #F6F6F6;").text-center <a href="https://bit.ly/2Pzw80U" target="_blank" style="color: #2D679A">bit.ly/2Pzw80U</a>
              tr
                th(style="background-color: #FFF;").text-center Sistema de Información de Seminarios Web
                td(style="background-color: #FFF;").text-center <a href="https://bit.ly/3cwwa2Q" target="_blank" style="color: #2D679A">bit.ly/3cwwa2Q</a>
              tr
                th(style="background-color: #F6F6F6;").text-center Sistema de Estacionamiento Tarifado
                td(style="background-color: #F6F6F6;").text-center <a href="https://bit.ly/3syWvmd" target="_blank" style="color: #2D679A">bit.ly/3syWvmd</a>

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Estándar IEEE 29148:2018

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema3/img04.png")
      .col-lg-7(data-aos="fade-left")
        .bloque-texto-c.color-primario.p-4.mb-3
          i.fas.fa-quote-right
          h4.mb-2 Este estándar reemplaza los estándares IEEE 830, IEE 1233, IEEE 1362, y contiene disposiciones para los procesos y productos relacionados con la ingeniería de requisitos para sistemas, productos y servicios de #[em software] a lo largo del ciclo de vida.
          p Penzenstadler, 2021.
        p Además, define la construcción de un buen requisito, proporciona atributos y características de los requisitos, y analiza la aplicación iterativa y recursiva del proceso de requisitos a lo largo del ciclo de vida. También proporciona orientación adicional en la aplicación de procesos de ingeniería y gestión de requerimientos relacionados con la ingeniería de requisitos al tiempo que define los elementos de información aplicables a la ingeniería de requisitos y su contenido.

    p El estándar IEEE 29148:2018 está estructurado de la siguiente forma:
    
    .BGR09.p-4.mb-4
      .row.justify-content-between.align-items-center.mb-4
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          ul.lista-ul--color
            li
              i.fas.fa-database(style="color: #FF6148")
              | Introducción, resumen y tabla de contenido.
            li
              i.fas.fa-database(style="color: #FF6148")
              | Propósito, alcance del estándar, generalidades.
            li
              i.fas.fa-database(style="color: #FF6148")
              | Explicación de los otros estándares que lo conforman.
            li
              i.fas.fa-database(style="color: #FF6148")
              | Referencias a normas que lo conforman.
            li
              i.fas.fa-database(style="color: #FF6148")
              | Clarificación de la terminología, lo que es muy valioso para cuando se quiere establecer nuevos. procesos de ingeniería de requerimientos en una empresa.
            li
              i.fas.fa-database(style="color: #FF6148")
              | Clarificación de los conceptos y procesos.
            li
              i.fas.fa-database(style="color: #FF6148")
              | Explicación y contenido de los ítems de información que vienen a través de la especificación de requerimientos o que debemos considerar incluir en la especificación de requerimientos.
            li
              i.fas.fa-database(style="color: #FF6148")
              | Anexos adicionales para mayor detalle.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema3/img05.svg")

    p Esta norma propone un listado de requerimientos mínimos los cuales son la base de la especificación de requerimientos; en ese sentido se proponen los siguientes tipos de requerimientos del sistema:
    
    .row.justify-content-center.mb-4
      .col-xl-4.col-md-6.col-8.px-3.mb-lg-0.mb-4(data-aos="fade-right")
        .row.align-items-center
          .col-4.BG10.hg-02.p-4
            img(src="@/assets/curso/tema3/img06.svg")
          .col-8.BG02.hg-02.p-4
            p.mb-0 Requerimientos funcionales: representan necesidades de los interesados del software.
      .col-xl-4.col-md-6.col-8.px-3.mb-lg-0.mb-4(data-aos="flip-up")
        .row.align-items-center
          .col-4.BG10.hg-02.p-4
            img(src="@/assets/curso/tema3/img06.svg")
          .col-8.BG02.hg-02.p-3
            p.mb-0 Requerimientos de usabilidad: requerimientos que son utilizados directamente por los involucrados en la solución (requerimientos de uso).
      .col-xl-4.col-md-6.col-8.px-3.mb-4(data-aos="fade-left")
        .row.align-items-center
          .col-4.BG10.hg-02.p-4
            img(src="@/assets/curso/tema3/img06.svg")
          .col-8.BG02.hg-02.p-4
            p.mb-0 Requerimientos de desempeño: disponibilidad de servicios y procesos transaccionales.
      .col-xl-4.col-md-6.col-8.px-3.mb-lg-0.mb-4(data-aos="fade-right")
        .row.align-items-center
          .col-4.BG10.hg-02.p-4
            img(src="@/assets/curso/tema3/img06.svg")
          .col-8.BG02.hg-02.p-4
            p.mb-0 Interfaces del sistema: interacción entre personas con el software.
      .col-xl-4.col-md-6.col-8.px-3.mb-lg-0.mb-4(data-aos="flip-up")
        .row.align-items-center
          .col-4.BG10.hg-02.p-4
            img(src="@/assets/curso/tema3/img06.svg")
          .col-8.BG02.hg-02.p-4
            p.mb-0 Operaciones del sistema.
      .col-xl-4.col-md-6.col-8.px-3.mb-4(data-aos="fade-left")
        .row.align-items-center
          .col-4.BG10.hg-02.p-4
            img(src="@/assets/curso/tema3/img06.svg")
          .col-8.BG02.hg-02.p-4
            p.mb-0 Modos y estados del sistema.
      .col-xl-4.col-md-6.col-8.px-3.mb-lg-0.mb-4(data-aos="fade-right")
        .row.align-items-center
          .col-4.BG10.hg-02.p-4
            img(src="@/assets/curso/tema3/img06.svg")
          .col-8.BG02.hg-02.p-4
            p.mb-0 Características físicas (hardware).
      .col-xl-4.col-md-6.col-8.px-3.mb-lg-0.mb-4(data-aos="flip-up")
        .row.align-items-center
          .col-4.BG10.hg-02.p-4
            img(src="@/assets/curso/tema3/img06.svg")
          .col-8.BG02.hg-02.p-4
            p.mb-0 Condiciones del ambiente (operativas y operacionales).
      .col-xl-4.col-md-6.col-8.px-3.mb-4(data-aos="fade-left")
        .row.align-items-center
          .col-4.BG10.hg-02.p-4
            img(src="@/assets/curso/tema3/img06.svg")
          .col-8.BG02.hg-02.p-4
            p.mb-0 Seguridad del sistema.
      .col-xl-4.col-md-6.col-8.px-3.mb-lg-0.mb-4(data-aos="fade-right")
        .row.align-items-center
          .col-4.BG10.hg-02.p-4
            img(src="@/assets/curso/tema3/img06.svg")
          .col-8.BG02.hg-02.p-4
            p.mb-0 Manejo de la información.
      .col-xl-4.col-md-6.col-8.px-3.mb-lg-0.mb-4(data-aos="flip-up")
        .row.align-items-center
          .col-4.BG10.hg-02.p-4
            img(src="@/assets/curso/tema3/img06.svg")
          .col-8.BG02.hg-02.p-4
            p.mb-0 Políticas y regulación: normas y estándares que fundamenta el software.
      .col-xl-4.col-md-6.col-8.px-3.mb-4(data-aos="fade-left")
        .row.align-items-center
          .col-4.BG10.hg-02.p-4
            img(src="@/assets/curso/tema3/img06.svg")
          .col-8.BG02.hg-02.p-4
            p.mb-0 Ciclo de vida del sistema: establece las etapas y duración del desarrollo y uso en producción.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 La especificación de requisitos a través de marcos de trabajo ágiles
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p Los marcos de trabajo ágiles promueven la comunicación oral sobre la documentación exhaustiva en la mayoría de los procesos del ciclo de vida, particularmente en los procesos de identificación de necesidades y diseño. Sin embargo, uno de los artefactos presentes para el modelado de requerimientos son las historias de usuario.
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="font-size: 2em")
            h4.mb-0 Las historias de usuario son una explicación general e informal de una función del #[em software] escrita desde la perspectiva del usuario final o cliente. Permiten describir de una manera muy breve un requerimiento, estimar prioridades, alcance y tiempo de realización.<br>
            p Rivadeneira, 2014.
            i.fas.fa-quote-right(style="font-size: 2em")
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img07.png")
    p En la siguiente tabla, se puede observar la estructura base de un documento de historia de usuario.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Tabla 8
          span Estructura base de un documento de historia de usuario
        
        .tabla-a.color-acento-contenido(data-aos="zoom-in")
          table
            caption Nota: Tomado de Rivadeneira (2014)
            thead(style="border-color: transparent")
              tr
                th(style="background-color: #FF6148;" colspan="2").text-center Historia de usuario
            tbody    
              tr
                td(style="background-color: #F6F6F6;").text-bold Número: #
                td(style="background-color: #F6F6F6;").text-bold Nombre de la historia de usuario:
              tr
                td(style="background-color: #F6F6F6;" colspan="2").text-bold Usuario:
              tr
                td(style="background-color: #F6F6F6;").text-bold Prioridad:
                td(style="background-color: #F6F6F6;").text-bold Puntos estimados:
              tr
                td(style="background-color: #F6F6F6;" colspan="2").text-bold Descripción:
              tr
                td(style="background-color: #F6F6F6;" colspan="2").text-bold Observaciones:
              tr
                td(style="background-color: #F6F6F6;" colspan="2").text-bold Criterios de aceptación:

    p Las historias de usuario tienen varios beneficios respecto a otros instrumentos de redacción de requerimientos, entre los cuales se pueden listar:

    .row.justify-content-center.mb-4
      .col-lg-10.BGR03.p-4
        .row.justify-content-between
          .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-check(style="color: #FF6148")
                | Las historias de usuario se centran en solucionar problemas a usuarios reales.
              li(style="margin-bottom: 2px")
                i.fas.fa-check(style="color: #FF6148")
                | Las historias de usuario permiten la colaboración, ya que como su descripción es corta se necesita que el equipo colabore para decidir cómo dar solución a la historia para cumplir con la necesidad expresada por el usuario.
              li(style="margin-bottom: 2px")
                i.fas.fa-check(style="color: #FF6148")
                | Las historias impulsan la creatividad, ya que fomentan que el equipo piense de forma crítica y creativa sobre cómo solucionar de la mejor manera el objetivo.
              li(style="margin-bottom: 2px")
                i.fas.fa-check(style="color: #FF6148")
                | Las historias de usuario motivan, pensar en la mejor solución para una problemática particular representan retos y pequeñas victorias para el equipo.
          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img.w-75(src="@/assets/curso/tema3/img08.svg") 

    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Scrum y la especificación de requisitos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        .bloque-texto-c.color-primario.p-4
          i.fas.fa-quote-right
          h4.mb-2 El marco de trabajo Scrum está soportado en un proceso de construcción iterativo e incremental evolutivo, en el que se identifican tres roles principales: el equipo de trabajo (team) conformado por los desarrolladores, diseñadores, personal de calidad y de infraestructura requerido para la construcción del producto de software; el scrum master que realizan funciones parecidas a las de un director de proyecto, pero más enfocados en garantizar que el equipo de trabajo tenga todas las herramientas y recursos necesarios para el desarrollo de su trabajo; y, finalmente, el dueño del producto (product owner) que se convierte en un representante del cliente y quien es el único encargado de la gestión de requisitos del proyecto. 
          p ScrumStudy, 2021.
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img09.png")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        .row.justify-content-center.BGR03.p-5
          .col-9
            img(src="@/assets/curso/tema3/img10.svg")
      .col-lg-9(data-aos="fade-left")
        p #[b Scrum] establece el concepto de #[b sprint] para referirse a una iteración que contempla tiempos fijos entre 2 y 4 semanas dependiendo del equipo de trabajo, durante este tiempo se incluye la planeación del #[b sprint], donde se definen los requerimientos a desarrollar en ese periodo de tiempo, una fase de construcción del producto y, finalmente, un proceso de despliegue para poder hacer la respectiva demostración de lo construido al final de iteración en reuniones de revisión; en este marco de trabajo se redefine el concepto de requerimiento hecho y normalmente va mucho más allá de construir el código, por lo general, se incluyen procesos de validación con pruebas unitarias y pruebas de integración.
        p.mb-0 El artefacto mediante el cual se condensan todos los requerimientos del sistema se denomina #[b pila de producto (product backlog)], la cual es una lista ordenada por prioridad de todos los requerimientos del sistema generalmente descritos en la forma de #[b historias de usuario].  

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Todas las historias de usuario se priorizan utilizando números enteros consecutivos de 1 hasta N, donde 1 representa la máxima prioridad. Esta priorización la realiza únicamente el dueño del producto y, para eso, utiliza la información que tiene sobre el negocio y recomendaciones de expertos buscando el mayor retorno de inversión a sus clientes. La priorización de las historias de usuario en la pila de producto puede variar en el transcurso del tiempo, pero solo la podrá realizar el dueño del producto.
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="font-size: 2em")
            h4.mb-0 Scrum, siendo un marco de trabajo ágil, no requiere para su funcionamiento que todas las historias de usuario de la pila de producto estén detalladas, pero sí, por lo menos, las de mayor prioridad para poder iniciar el trabajo con el equipo en sus respectivos sprints.<br>
            p ScrumStudy, 2021.
            i.fas.fa-quote-right(style="font-size: 2em")
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img11.svg")

    p Al inicio de cada sprint se realiza el proceso de planeación que involucra principalmente tres tareas:

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img12.svg' alt='AvatarTop')
          .BGR03.hg-03.p-4
            p.mt-5.mb-0 Estimar el valor de esfuerzo requerido para un conjunto de historias de usuario de la pila de producto, trabajo que es realizado únicamente por el equipo de desarrollo.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img13.svg' alt='AvatarTop')
          .BGR11.hg-03.p-4
            p.mt-5.mb-0 Selección de las historias d e usuario a desarrollar durante al sprint tomando como referencia la prioridad y el valor del esfuerzo asociado a cada historia. Esto genera un artefacto llamado pila del sprint (sprint backlog) que lista los requerimientos descritos como historias de usuario a ser realizadas y evaluadas en el sprint.
      .col-lg-4.col-8(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img14.svg' alt='AvatarTop')
          .BGR10.hg-03.p-4
            p.mt-5.mb-0 Descomposición de cada historia de usuario en tareas y, de ser necesario, asignar responsables a cada tarea.

    p A continuación, se expone una figura en la que se representan los artefactos generados dentro del marco de trabajo Scrum y que permiten la gestión de los requisitos y el evento desde el cual se construye inicialmente.

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Figura 3
      span Pila de producto vs. pila del Sprint

    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-10
        img(src="@/assets/curso/tema3/img15.svg")
      
    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Kanban y la especificación de requisitos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p Kanban es una metodología para gestionar el trabajo que surge del sistema de producción Toyota Production System (TPS) a finales de la década de 1940, el cual representaba un sistema de producción basado en la demanda de los clientes y no en la producción masiva, lo anterior sentó los fundamentos para los sistemas de producción ajustada que consisten en minimizar los desperdicios sin afectar la producción y en crear más valor a los clientes sin generar más gastos.
        .bloque-texto-c.color-primario.p-4
          i.fas.fa-quote-right
          h4.mb-2 A principios del siglo XXI, la industria del #[em software] adoptó el Kanban para cambiar la forma en la que se producía y entregaban productos y servicios; además, tiene en cuenta los principios de las metodologías ágiles en especial de Scrum, pero busca darle más protagonismo al proceso de experimentación y mejora continua. 
          p Rivadeneira, 2014.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img16.svg")

    p Kanban en la industria del #[em software] se basa en cuatro principios fundamentales:

    
    .row.justify-content-center.align-items-center.BGR03.p-4.mb-4
      .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema3/img17.svg")
      .col-lg-10(data-aos="fade-left")
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta(style="color: #000")
              span 1
            | Calidad garantizada, todo lo que se produce debe salir bien sin márgenes de errores, prima la calidad sobre la rapidez.
          li
            .lista-ol--cuadro__vineta(style="color: #000")
              span 2
            | Reducción del desperdicio. Hacer solamente lo justo y necesario, pero hacerlo bien.
          li
            .lista-ol--cuadro__vineta(style="color: #000")
              span 3
            | Mejora continua.
          li
            .lista-ol--cuadro__vineta(style="color: #000")
              span 4
            | Flexibilidad: se pueden priorizar tareas entrantes según las necesidades del momento.

    p Además de los principios, Kanban propone seis (6) prácticas:

    .row.justify-content-center.align-items-center.BGR04.mb-4
      .col-lg-7.p-4.order-lg-1.order-2(data-aos="fade-right")
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta(style="color: #000")
              span 1
            | Visualizar el flujo de trabajo.
          li
            .lista-ol--cuadro__vineta(style="color: #000")
              span 2
            | Eliminar interrupciones.
          li
            .lista-ol--cuadro__vineta(style="color: #000")
              span 3
            | Gestionar el flujo.
          li
            .lista-ol--cuadro__vineta(style="color: #000")
              span 4
            | Hacer políticas explícitas que fomenten la visibilidad.
          li
            .lista-ol--cuadro__vineta(style="color: #000")
              span 5
            | Circuitos de realimentación.
          li
            .lista-ol--cuadro__vineta(style="color: #000")
              span 6
            | Mejorar colaborando.
      .col-lg-5.col-10.px-0.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img18.png")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
        .row.justify-content-center.BGR03.p-5
          .col-9
            img(src="@/assets/curso/tema3/img19.svg")
      .col-lg-10(data-aos="fade-left")
        p Tal vez la herramienta más conocida que permite implementar los principios de Kanban es el tablero Kanban, el cual permite mapear y visualizar el flujo de trabajo.Este se divide en columnas a través de las cuales se pueden visualizar cada una de las fases del proceso; las filas del tablero representan los diferentes tipos de actividades específicas que se desarrollan en el marco del proyecto.
        p Normalmente el tablero tiene #[b tres secciones] que representan el estado de cada una de las tareas: #[b por hacer, en proceso, hecho].
        p.mb-0 Cada equipo de trabajo puede realizar un mapeo más detallado de su proceso y agregar tanta sección como considere pertinente, como se muestra en la siguiente figura.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 4
          span Tablero Kanban
        .BG08.p-4(data-aos="zoom-in")
          .row.justify-content-center
            .col-lg-10
              img(src="@/assets/curso/tema3/img20.svg")

    p Dependiendo del marco de trabajo, varía la forma en la que se describen cada una de las tareas del tablero Kanban, por ejemplo, dentro de un marco de trabajo como Scrum cada una de las tareas se podría describir en el formato de historias de usuario.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
