<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Metodologías de desarrollo
    
    p Son un conjunto de métodos y técnicas con el objetivo de organizar los equipos de trabajo para diseñar soluciones y desarrollar las funciones de un programa de una manera organizada y eficiente.

    .row.justify-content-center.mb-5
      .col-xl-4.col-md-6.col-8.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema5/img01.svg')})`}")
            .tarjeta-flip__contenido.p-xl-5.p-4
              .BGR17A.p-2.mb-4
                h4.text-center.mb-0 Metodología rígida
              p.mb-0 Anteriormente para el desarrollo de un proyecto de #[em software] se utilizaba una metodología muy rígida en la que se llevaban a cabo procesos de identificación de necesidades, análisis y diseño, planificación, codificación, prueba piloto e implementación; fases que todavía se aplican pero que exigían grandes esfuerzos y se invertía muchísimo tiempo sobre todo en la etapa de planificación donde se debía documentar hasta el más mínimo detalle.
      .col-xl-4.col-md-6.col-8.mb-xl-0.mb-4(data-aos="flip-up")
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema5/img02.svg')})`}")
            .tarjeta-flip__contenido.p-xl-5.p-4
              .BGR17A.p-2.mb-4
                h4.text-center.mb-0 Reprocesos
              p.mb-0 Toda esta rigurosidad se sustentaba en el argumento de que no se tuviera que hacer ningún reproceso y el producto liberado fuera de alta calidad. Entonces, con la cantidad de tiempo invertido se hacía casi imposible realizar modificaciones en los requisitos, pues tocaba empezar de cero con el levantamiento de la información, la planificación y la documentación para diseñar y desarrollar el producto nuevamente.
      .col-xl-4.col-md-6.col-8.mb-xl-0.mb-4(data-aos="fade-left")
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema5/img03.svg')})`}")
            .tarjeta-flip__contenido.p-xl-5.p-4
              .BGR17A.p-2.mb-4
                h4.text-center.mb-0 Metodologías ágiles
              p.mb-0 Cuando se emprendían proyectos de desarrollo de #[em software] mucho más pequeños que exigían tiempos de respuesta cortos para la obtención de resultados, esta metodología se tornó completamente ineficiente pues se gastaba mucho tiempo y recursos en cada fase del proyecto y no se podían realizar cambios a los requisitos para mejorar el producto, por lo tanto empezaron a surgir nuevos métodos más ágiles con un enfoque iterativo es decir por bloques de tareas para llevar a cabo los requisitos de los usuarios teniendo en cuenta que estos pueden cambiar durante todo el proceso de desarrollo.

    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Metodologías ágiles
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p Como se mencionó anteriormene, las metodologías ágiles surgieron de la necesidad de proporcionar respuestas rápidas a los requerimientos de los proyectos, manteniendo flexibilidad frente a los cambios que puedan surgir o se puedan generar durante el proceso de desarrollo.
        .BG13.p-4.mb-4
          p.mb-0 Se utilizan para gestionar proyectos donde el cliente no tiene claro todos los requisitos de este y por lo tanto no se puede definir el alcance desde el principio, igualmente cuando durante el desarrollo se cambia de opinión o se adicionan más requisitos.
        p.mb-0 Estas metodologías no solamente se utilizan en el sector de las TIC para el desarrollo de #[em software] y sistemas de información, también se pueden aplicar a cualquier sector productivo, proyecto que se quiera emprender o entorno donde se produzcan cambios de forma frecuente.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema5/img04.png")
    
    p Existen aspectos muy marcados de las metodologías ágiles respecto a las metodologías tradicionales que dejan entrever sus características, ver tabla 1:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Tabla 1
          span Metodologías ágiles vs Metodologías tradicionales
        
        .tabla-a.color-acento-contenido(data-aos="zoom-in")
          table
            thead(style="border-color: #993A2B")
              tr
                th(style="background-color: #FF6148; width: 48%").text-center Metodologías Ágiles
                th(style="background-color: #FF6148; width: 4%").text-center vs
                th(style="background-color: #FF6148; width: 48%").text-center Metodologías Tradicionales
            tbody
              tr
                td Se enfoca en las personas.
                td(rowspan="8")
                td Se enfoca en los procesos.
              tr
                td El cliente participa en todas las fases del proyecto.
                td El cliente solo participa al inicio del proyecto.
              tr
                td El equipo trabaja colaborativamente.
                td Cada miembro del equipo desarrolla una tarea.
              tr
                td Trabaja con proyectos medianos y pequeños.
                td Trabaja con cualquier proyecto independientemente del tamaño que sea.
              tr
                td Lleva a cabo los cambios en los requisitos durante todo el proceso.
                td No lleva a cabo ningún cambio en los requisitos durante el proceso.
              tr
                td Planifica los requisitos del proyecto en una lista de iteraciones (tareas) para realizar en corto tiempo, luego el desarrollo es iterativo.
                td Planifica los requisitos del proyecto en un desarrollo que se lleva a cabo de manera lineal durante todo el proceso.
              tr
                td Hay retroalimentaciones por cada iteración para hacer mejoras al producto durante el proceso de desarrollo.
                td No hay retroalimentaciones durante el proceso de desarrollo.
              tr
                td Realiza entregas del proyecto al terminar cada iteración.
                td Realiza solo una entrega cuando finaliza el proyecto.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 16px; position: absolute" data-aos="fade-left")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Manifiesto agile

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Debido a los diferentes procedimientos que se utilizaban para llevar a cabo los proyectos de #[em software] y con el afán de unificarlos en un conjunto de buenas prácticas que se pudieran aplicar en los procesos de desarrollo, en el 2001 se creó la organización Agile Alliance; cuyo principal objetivo fue definir un conjunto de principios bajo los cuales se pueda trabajar de manera ágil y con calidad en cualquier entorno. 
        p Dichos principios fueron acuñados con el nombre de “Manifiesto agile” y su fundamento se halla en valores que promueven una cultura basada en la aceptación y adaptación a los cambios que sean necesarios para el progreso de una organización. Los valores mencionados priorizan:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta(styte="color: #000")
              span a
            | Los individuos y las interacciones que se puedan realizar sobre los procesos y las herramientas.
          li 
            .lista-ol--cuadro__vineta(styte="color: #000")
              span b
            p.mb-0 La funcionalidad del #[em software] que se desarrolle sobre la excesiva documentación que se haga sobre este.
          li 
            .lista-ol--cuadro__vineta(styte="color: #000")
              span c
            | 	La colaboración con el cliente sobre los detalles de los aspectos contractuales.
          li 
            .lista-ol--cuadro__vineta(styte="color: #000")
              span d
            | 	Las respuestas ante los cambios sobre seguir un plan preestablecido.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema5/img05.svg")
    
    p Los valores anteriores se concretaron en doce (12) principios que fueron consignados en un documento llamado #[b Manifiesto Ágil] con el objeto de que sirvan como marco de trabajo para cualquier equipo ágil:

    .row.justify-content-center.mb-4
      .col-lg-10.BGIMG02.p-4(data-aos="zoom-in")
        .row.justify-content-center
          .col-lg-10
            .h3.text-center Manifiesto ágil
            LineaTiempoB.color-acento-botones.mb-5(:datos="datosLineaTiempoB")

    p Para complementar el tema se recomienda realizar las lecturas Gestión Ágil de proyectos y Manifiesto por el Desarrollo Ágil de #[em Software], que se encuentran en el material complementario.

    .row.justify-content-center.mb-4
      .col-lg-4.col-8(data-aos="fade-right")
        .tarjeta--boton.color-primario.p-4.indicador__container(@click="modal1 = true")
          .indicador--click(v-if="mostrarIndicador")
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/tema5/img18.svg')
          .BGR17A.p-2.mb-4
            h4.text-center.mb-0 <span style="color: #000 !important">¡Vamos a Practicar!</span>
          p.text-white.text-center Leer más
            i.fas.fa-plus-circle.ms-4
            

    ModalA(:abrir-modal.sync="modal1")
      .row.justify-content-center
        .col-lg-1.col-2.mb-lg-0.mb-4
          img(src='@/assets/curso/tema5/img19.svg')
        .col
          .h4 Vamos a Practicar
          .tabla-a.color-acento-contenido(data-aos="zoom-in")
            table
              thead(style="border-color: transparent")
                tr
                  th(style="background-color: #083142;").text-center.text-white Tarea #1
                  th(style="background-color: #083142;").text-center.text-white Tarea #2
              tbody
                tr
                  td <i class="far fa-check-circle" style="color: #083142"></i> Paso 1: alista un cronómetro (celular o reloj).
                  td <i class="far fa-check-circle" style="color: #083142"></i> Paso 1: igual a la Tarea#1.
                tr
                  td <i class="far fa-check-circle" style="color: #083142"></i> Paso 2: toma 6 monedas de cualquier valor.
                  td <i class="far fa-check-circle" style="color: #083142"></i> Paso 2: igual a la Tarea#1
                tr
                  td <i class="far fa-check-circle" style="color: #083142"></i> Paso 3: lánzalas al piso al mismo tiempo y activa el cronómetro.
                  td <i class="far fa-check-circle" style="color: #083142"></i> Paso 3: lanza la primera moneda y activa el cronómetro.
                tr
                  td <i class="far fa-check-circle" style="color: #083142"></i> Paso 4: anota en que cayó cada moneda (cara o cruz).
                  td <i class="far fa-check-circle" style="color: #083142"></i> Paso 4: anota en que cayó (cara o sello) la primera moneda y después lanza la segunda moneda y repites el proceso hasta completar la última.
                tr
                  td <i class="far fa-check-circle" style="color: #083142"></i> Paso 5: cuando termines con la última moneda debes para el cronometro.
                  td <i class="far fa-check-circle" style="color: #083142"></i> Paso 5: igual a la Tarea#1.
                tr
                  td <i class="far fa-check-circle" style="color: #083142"></i> Paso 6: registra el tiempo.
                  td <i class="far fa-check-circle" style="color: #083142"></i> Paso 6: igual a la Tarea#1.

    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Metodología SCRUM
    
    .cajon-b.color-secundario.cajon-end.p-3.mb-4
      .row.justify-content-between.align-items-center
        .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
          p.mb-0 SCRUM es una de las metodologías ágiles que determinan un marco de trabajo mediante el cual se pueden enfocar problemáticas y adaptar soluciones para entregar productos de la máxima calidad y valor posibles. Se basa en el control de procesos en el desarrollo de productos y se puede llevar a cabo en tres ciclos; pre game, game y pos game basado en los conocimiento y la experiencia de las personas que participan en ellos. 
        .col-lg-1.col-2.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema5/img20.svg")

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 16px; position: absolute" data-aos="fade-left")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") #[em Pregame]

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Se realiza una lista ordenada de lo que es necesario para el desarrollo del producto y es la fuente de requisitos para la realización de los cambios, ya que se puede variar a medida que avanza el proceso y es ordenada porque se va desarrollando de acuerdo con las prioridades establecidas. Cada elemento de la lista contiene la visión del usuario sobre las funcionalidades que espera encontrar en el producto. 
        .BG04.p-4
          p.mb-0 En este ciclo se seleccionan los Sprint (requisitos), se determinan los costos y los recursos para la construcción del producto, se hace un análisis general de lo que se debe entregar como producto final y se realiza un diseño del prototipo de este . 
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema5/img21.svg")
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 16px; position: absolute" data-aos="fade-left")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") #[em Game]

    .cajon-b.color-primario.p-3.mb-4
      .row.justify-content-between.align-items-center
        .col-2.mb-lg-0.mb-4(data-aos="fade-right")
          .row.justify-content-center
            .col-lg-6.col-9
              img(src="@/assets/curso/tema5/img22.svg")
        .col-lg-10(data-aos="fade-left")
          p.mb-0 En este ciclo se desarrolla la lista de requisitos que se priorizan a través de una planificación; se realiza la lista de las tareas por llevar a cabo (iteraciones); se determina el tiempo de las iteraciones que es aproximadamente de una semana (1) por actividad hasta completar un máximo de cuatro (4) por iteración, es decir, 30 días y el equipo se organizan en parejas o en las personas que sean necesarias para completarla. Los miembros del equipo se auto organizan y establecen sus propios objetivos de acuerdo con el producto que debe entregar al finalizar la iteración, ver figura 1.
        
    .row.justify-content-center.mb-4
      .col-lg-8.mb-4(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span Ciclo game - Proceso realizado en cada iteración del producto
      .col-lg-6.p-4(data-aos="zoom-in")
        img(src="@/assets/curso/tema5/img23.svg")

    p Después de #[b planificar la iteración] que algunos autores como Sánchez (2018) llaman Sprint, se comienza a #[b ejecutar cada tarea de la iteración]:

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row.justify-content-center
        .col-lg-8.mb-lg-0.mb-4(data-aos="fade-right")
          p Cada día se realiza una #[b sincronización] que consiste en una reunión del equipo con duración de 15 minutos frente a un tablero para autoevaluarse frente a los avances en la tarea en la que los miembros deben responder a las preguntas:
          ul.lista-ul--color.ms-2
            li(style="margin-bottom: 2px")
              i.far.fa-check-circle(style="color: #FF6148")
              | ¿Qué he hecho desde ayer para aportar al cumplimiento de la tarea?
            li(style="margin-bottom: 2px")
              i.far.fa-check-circle(style="color: #FF6148")
              | ¿Qué voy a hacer a partir de este momento para ayudar al equipo a cumplir el objetivo de la tarea?
            li(style="margin-bottom: 2px")
              i.far.fa-check-circle(style="color: #FF6148")
              | ¿Qué obstáculos me impiden colaborar con el trabajo en equipo para conseguir el objetivo?
        .col-lg-4.col-8(data-aos="fade-left")
          img(src="@/assets/curso/tema5/img24.png")
      .row.justify-content-center
        .col-lg-4.col-8.order-lg-1.order-2(data-aos="fade-right")
          img(src="@/assets/curso/tema5/img25.png")
        .col-lg-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          p.mb-0 De acuerdo con las respuestas proporcionadas por los integrantes del equipo, el SCRUM manager (gestionador del proyecto) debe encargarse de hacer la inspección de los obstáculos y hacer las adaptaciones necesarias para eliminarlos, garantizando que el equipo pueda realizar las actividades para terminar la iteración.
      .row.justify-content-center
        .col-lg-8.mb-lg-0.mb-4(data-aos="fade-right")
          p.mb-0 Después de cada superación de obstáculos y para terminar la iteración se hace una #[b revisión del producto] con lo cual se verifica el cumplimiento de los requisitos.Finalmente el día que se tiene previsto terminar la iteración, se hace nuevamente una reunión de 1 o 2 horas con el cliente para realizar una demostración del cumplimiento de los requisitos plasmados en el producto incremental, resultado de la iteración completada.
        .col-lg-4.col-8(data-aos="fade-left")
          img(src="@/assets/curso/tema5/img26.png")
      .row.justify-content-center
        .col-lg-4.col-8.order-lg-1.order-2(data-aos="fade-right")
          img(src="@/assets/curso/tema5/img27.png")
        .col-lg-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          p.mb-0 De acuerdo con las observaciones recibidas por el cliente se inspeccionan de nuevo los obstáculos que impiden la optimización del producto obtenido y se hacen las adaptaciones necesarias. El SCRUM manager junto con el equipo realiza una #[b retrospectiva] del trabajo para identificar en que se puede mejorar la metodología y las técnicas utilizadas para incrementar la productividad.
        
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 16px; position: absolute" data-aos="fade-left")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") #[em Post game]

    p Corresponde al cierre del proyecto dado que se han llevado a cabo todas las iteraciones que lo han perfeccionado para que el cliente quede a satisfacción con las funciones que esperaba. Entonces se prepara el producto para ser liberado haciendo la verificación de las versiones anteriores que se tengan de este, las cuales deben ser almacenadas en repositorios o carpetas para tener un control de versiones.
    p En esta metodología se pueden distinguir claramente tres (3) roles principales:

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema5/img28.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR18A.hg-05.p-4
            h4.ms-4 #[em Product owner]
            p.ms-4.mb-0 Es el responsable de entregar un producto de calidad al cliente como resultado del trabajo del resto del equipo. Es el encargado de gestionar la lista de requisitos al seleccionarlos y priorizarlos, también se asegura de que todos los miembros tengan claridad sobre ellos.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema5/img29.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR18A.hg-05.p-4
            h4.ms-4 #[em Scrum master]
            p.ms-4.mb-0 Ayuda a entender a todos los miembros del equipo sobre las reglas y valores en la realización del trabajo. Se asegura que haya claridad sobre los objetivos y el alcance del producto a desarrollar e igualmente orienta sobre como aplicar creatividad, auto organizarse como equipo y eliminar los impedimentos para maximizar la productividad.
      .col-lg-4.col-8(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema5/img30.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR18A.hg-05.p-4
            h4.ms-4 #[em Scrum team]
            p.ms-4.mb-0 Es el equipo encargado de ejecutar las tareas de cada iteración para entregar un incremento del producto de acuerdo con las especificaciones entregadas por el Product Owner. Organizan y gestionan su propio trabajo y están conformados por el número de personas necesarias para lograr el cumplimiento de los objetivos trazados.

    p Para complementar el tema, se recomienda realizar la lectura #[b Metodología Scrum], la cual e encuentra en el material complementario.
    
    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3 Metodología SUM
    
    .cajon-b.color-secundario.cajon-end.p-3.mb-4
      .row.justify-content-between.align-items-center
        .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
          p.mb-0 Es un método ágil que se basa en SCRUM para el desarrollo de proyectos, es fácilmente combinable con otras metodologías ágiles por lo que es adaptable fácilmente al desarrollo de videojuegos ya que se pueden prever y administrar los riesgos, los recursos y así mismo los resultados obtenidos. Se destacan las siguientes características: 
        .col-lg-1.col-2.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema5/img31.svg")

    .row.justify-content-center.mb-4
      .col-lg-10.BGR13.p-4(data-aos="flip-up")
        .row.justify-content-around.align-items-center
          .col-lg-10.order-lg-1.order-2
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.far.fa-check-circle(style="color: #FF6148")
                | El cliente participa en todas las fases del proceso.
              li(style="margin-bottom: 2px")
                i.far.fa-check-circle(style="color: #FF6148")
                | Los equipos de trabajo deben ser multidisciplinar y máximo de siete (7) integrantes.
              li(style="margin-bottom: 2px")
                i.far.fa-check-circle(style="color: #FF6148")
                | Los proyectos por desarrollar deben ser pequeños .
              li(style="margin-bottom: 2px")
                i.far.fa-check-circle(style="color: #FF6148")
                | El tiempo de ejecución de un proyecto debe ser menor a un año.
          .col-lg-2.col-3.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            .row.justify-content-center
              .col-10
                img(src="@/assets/curso/tema5/img32.png")

    p.mb-5 En la siguiente imagen se puede observar la estructura de SUM según Acerenza (2009):

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-10
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema5/img33.svg')
          .BGR19A.p-3(x="18%" y="6%" numero="+")
            .h5.mb-2 Fase 1 Concepto
            p En esta etapa el equipo de trabajo y el cliente proponen ideas que precisen el tipo de producto a desarrollar, se hacen bocetos para identificar las características que poseerá, se define el alcance y los objetivos, la forma de lograrlos y  los retos que se deben afrontar.
            p.mb-0 Esta fase termina con un boceto o prototipo que resume el concepto del producto, que en el caso del videojuego contiene el nombre, la historia, el entorno y los personajes que harán parte de este.
          .BGR19A.p-3(x="18%" y="17%" numero="+")
            .h5.mb-2 Fase 2 Planificación
            p Tiene que ver con la preparación de las actividades que se deben llevar a cabo para la ejecución del proyecto. La planificación administrativa se encarga de organizar todos los aspectos para el cumplimiento de los objetivos del proyecto como el equipo de desarrollo, el cronograma y el presupuesto.
            p.mb-0 Las especificaciones del proyecto, que este caso es el desarrollo de un videojuego, es la definición de todos los requisitos y funcionalidades que tendrá al igual que su priorización.
          .BGR19A.p-3(x="18%" y="35%" numero="+")
            .h5.mb-2 Fase 3 Elaboración
            p En esta etapa se refinan los requisitos seleccionándolos y priorizándolos de nuevo para comenzar con el desarrollo de la iteración; se monitorea el cumpliendo de los objetivos de la iteración aplicando técnicas de evaluación definidas con anterioridad.
            p.mb-0 Para cerrar la iteración se le muestra al cliente lo obtenido, se da por culminada la iteración y se planifica la siguiente.
          .BGR19A.p-3(x="18%" y="61%" numero="+")
            .h5.mb-2 Fase 4 Beta
            p.mb-0 Antes de liberar la versión del producto se verifican la totalidad de sus funcionalidades, se hace un reporte de los ajustes que se deben realizar para dejarlo a punto, se ejecutan los cambios y posteriormente se hace la publicación y distribución.
          .BGR19A.p-3(x="18%" y="87%" numero="+")
            .h5.mb-2 Fase 5 Cierre
            p.mb-0 En esta fase se libera la versión del producto que ha sido ajustada de acuerdo con las verificaciones y se hace una evaluación de lo sucedido durante el desarrollo, teniendo en cuenta las dificultades presentadas y los logros alcanzados para documentar las lecciones aprendidas y mejorar la productividad del equipo.
          .BGR19A.p-3(x="96%" y="36%" numero="+")
            .h5.mb-2 Gestión de riesgos
            p.mb-0 Se identifican y describen los riesgos a los que se ve expuesto el proyecto, determinando su probabilidad de ocurrencia y el impacto que tienen en el desarrollo del producto, determinando las estrategias que se pueden aplicar para mitigarlos y elaborando un plan de contingencia para saber cómo actuar en caso de que el riesgo ocurra.

    p Se pueden distinguir los siguientes roles:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        LineaTiempoD.color-acento-contenido
          p(numero="1" titulo="Cliente") Se encarga de validar el concepto definido para el producto, priorizando los requisitos que le dan mayor valor; evalúa el producto al final de cada iteración haciendo la retroalimentación y proponiendo los cambios a realizar para que se vaya acercando a lo que se definió en el concepto. Valida las versiones que se van a liberar.
          p(numero="2" titulo="Productor interno") Ayuda en la construcción de los objetivos del producto y es el responsable de su planificación y desarrollo, solventando todas las dificultades que se presente durante la ejecución de las iteraciones. Establece las acciones que se deben implementar para la mejora continua y se comunica constantemente con el cliente para mantenerlo informado de los avances del proyecto en general.
          p(numero="3" titulo="Equipo de desarrollo") Está conformado por diseñadores del concepto del producto, diseñadores gráficos y programadores. El equipo participa en la definición del concepto del producto, define y realiza todas las tareas a ejecutar en cada iteración del producto, estimando la duración de cada una. Participa en la evaluación de la iteración como tal, para ayudar a implementar acciones de mejora.
          p(numero="4" titulo="Verificador Beta") Participa en la fase 4 Beta del proyecto y es el responsable de verificar todas las funciones del producto. El verificador no hace parte del equipo de desarrollo ya que ejerce un rol imparcial en las pruebas que realiza. Generalmente utiliza un #[em software] especializado para hacer el seguimiento y detectar los errores que se deben corregir por parte del equipo desarrollador.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema5/img34.svg")

    p Para complementar el aprendizaje de este tema, se recomienda realizar la lectura #[b SUM para el desarrollo de video juegos], la cual se encuentra en el material complementario.

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    indicadorTarjetaFlip: true,
    mostrarIndicador: true,
    modal1: false,
    datosLineaTiempoB: [
      {
        titulo: '01 Priorizar la satisfacción del cliente.',
        icono: require('@/assets/curso/tema5/img06.svg'),
      },
      {
        titulo: '02 Aceptar los cambios.',
        icono: require('@/assets/curso/tema5/img07.svg'),
      },
      {
        titulo: '03 Entregar frecuentemente.',
        icono: require('@/assets/curso/tema5/img08.svg'),
      },
      {
        titulo: '04 Trabajar conjuntamente.',
        icono: require('@/assets/curso/tema5/img09.svg'),
      },
      {
        titulo: '05 Motivar a las personas.',
        icono: require('@/assets/curso/tema5/img10.svg'),
      },
      {
        titulo: '06 Conversar <em>face to face</em>.',
        icono: require('@/assets/curso/tema5/img11.svg'),
      },
      {
        titulo: '07 Medir progreso a través del <em>software</em> funcional.',
        icono: require('@/assets/curso/tema5/img12.svg'),
      },
      {
        titulo: '08 Promover el desarrollo sostenible.',
        icono: require('@/assets/curso/tema5/img13.svg'),
      },
      {
        titulo: '09 Mejorar la agilidad con excelencia técnica y atención.',
        icono: require('@/assets/curso/tema5/img14.svg'),
      },
      {
        titulo: '10 Lograr la simplicidad de los trabajos realizados.',
        icono: require('@/assets/curso/tema5/img15.svg'),
      },
      {
        titulo: '11 Promover la auto organización del equipo de trabajo.',
        icono: require('@/assets/curso/tema5/img16.svg'),
      },
      {
        titulo: '12 Reflexionar en equipo para mejorar la productividad.',
        icono: require('@/assets/curso/tema5/img17.svg'),
      },
    ],
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
