<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Técnicas de análisis de requisitos
    
    .row.justify-content-end.align-items-center.mb-5.mt-5
      .col-lg-11.BGR03.p-4.mb-4
        .row.justify-content-end.align-items-center
          .col-lg-3.col-6.img-01.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img.img-02(src='@/assets/curso/tema2/img01.svg')
          .col-lg-10
            p.ms-lg-5.mb-0 El proceso de análisis de requisitos permite, principalmente, el estudio de las necesidades de los usuarios para definir requisitos del sistema por medio de la producción del documento de especificación de requisitos donde se describe lo que el sistema debe hacer, pero no el cómo. Así es como este proceso, además de involucrar un proceso de análisis, también requiere de la síntesis de la información existente.
      .col-lg-9
        p.ms-lg-5.mb-0 A continuación, se describen algunas técnicas que pueden ser utilizadas para entender y ordenar los requisitos identificados para su posterior redacción en un artefacto formal dependiendo del marco de desarrollo de #[em software] utilizado.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Priorización de requisitos 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img02.svg")
      .col-lg-8(data-aos="fade-left")
        p Esta es una actividad clave para el éxito en la construcción de producto de #[em software] y su objetivo es maximizar el valor entregado por el proyecto a sus clientes; es decir, identificar cuáles requisitos se deben priorizar tomando en cuenta factores como la complejidad, las dependencias y el retorno de inversión a los clientes, entre otros indicadores.
        p.mb-0 La priorización de requisitos, por lo general, es responsabilidad de los gerentes del proyecto o dueños de producto dependiendo del tipo de enfoque utilizado; sin embargo, se requiere de la participación activa de los analistas de requisitos, ya que si bien es el cliente o su representante quien determina cuáles requisitos son más importantes para su negocio, el analista debe asesorar, facilitar e informarle al cliente para no darle prioridad superior a requisitos que tienen otras dependencias no resueltas; por ejemplo, no se podría priorizar un requerimiento asociado a un carrito de compras sin antes tener resuelto los requerimientos asociados al registro y consulta de productos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11.col-10.order-lg-1.order-2(data-aos="fade-right")
        p.mb-0 El proceso de priorización es continuo, es decir, la prioridad de un requisito puede variar a lo largo del proyecto, así como los requisitos también pueden variar a lo largo del mismo. La priorización no es un proceso sencillo, por lo que, además de conocer las diferentes técnicas, es importante la toma de decisiones y estas, en el marco de un proyecto, siempre van a generar inconformidades, pero si no se decide respecto a la priorización de requisitos es como si no se fundamentaran las bases sobre las que el equipo de desarrollo va a construir el sistema.
      .col-lg-1.col-2.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img03.svg") 

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Técnica de clasificación de lista
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 365px; position: absolute" data-aos="fade-left")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="font-size: 2em")
            h4.mb-0 Esta técnica de clasificación no requiere ningún tipo de entrenamiento o preparación, ya que es una forma de priorización natural que se usa en la vida cotidiana. Este tipo de priorización simple es una de las más utilizadas y consiste en darle un valor numérico a cada requerimiento iniciando por el número 1 y continuando de forma sucesiva con 2, 3 y hasta el número total de requisitos definidos.<br>
            p Porfirio, 2021.
            i.fas.fa-quote-right(style="font-size: 2em")
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img04.png") 

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta-avatar-b.mb-4(data-aos="fade-right")
          .tarjeta-avatar-b__img(style="min-width: 10%; left: -5%")
            img(src='@/assets/curso/tema2/img05.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR04.p-4
            p.ms-5.mb-0 Esta técnica tiene la ventaja de que solo puede existir un número 1, lo cual evita muchos problemas por parte de los interesados o responsables del negocio que quieren que todos los requerimientos tengan prioridad 1; adicionalmente, aporta claridad y evita confusiones. Cada elemento se prioriza con relación al resto de elementos, lo que simplifica el proceso.
        .tarjeta-avatar-b.mb-4(data-aos="fade-right")
          .tarjeta-avatar-b__img(style="min-width: 10%; left: -5%")
            img(src='@/assets/curso/tema2/img06.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR04.p-4
            p.ms-5.mb-0 Para usar adecuadamente esta técnica se requiere de un profundo conocimiento de todos los requerimientos definidos y si bien el proceso parece simple, se requiere de un gran esfuerzo por parte del equipo para situar a cada requerimiento en la posición correcta.
        
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Técnica de puntos de historia y valor del negocio
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 518px; position: absolute" data-aos="fade-left")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img07.png")
      .col-lg-7(data-aos="fade-left")
        .bloque-texto-c.color-primario.p-4
          i.fas.fa-quote-right
          h4.mb-2 Esta consiste en realizar el proceso de priorización de acuerdo con factores como el esfuerzo y la opinión de los gerentes de proyecto o dueños de producto, los clientes, el equipo de desarrollo o incluso una combinación de los anteriores. El valor del negocio corresponde a un valor numérico que cuanto más alto sea, más valor representa para el cliente.
          p Porfirio, 2021.

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta-avatar-b.mb-4(data-aos="fade-right")
          .tarjeta-avatar-b__img(style="min-width: 10%; left: -5%")
            img(src='@/assets/curso/tema2/img08.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR04.p-4
            p.ms-5.mb-0 Usar solo el valor del negocio como elemento de priorización puede generar problemas, ya que el valor asociado por el cliente a un requerimiento puede ser muy superfluo y, además, no considera detalles clave como el esfuerzo que se requiere para su desarrollo, por esta razón también se usa el valor de puntos de historia, que no es más que otro valor numérico asignado por el equipo de desarrolladores a cada requerimiento donde expresa una estimación de esfuerzo, cuanto más grande sea el número implica más esfuerzo requerido con miras a realizar el requerimiento.
        .tarjeta-avatar-b.mb-4(data-aos="fade-right")
          .tarjeta-avatar-b__img(style="min-width: 10%; left: -5%")
            img(src='@/assets/curso/tema2/img09.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR04.p-4
            p.ms-5.mb-0 Para lograr la priorización de los requerimientos, se debe realizar el cálculo del cociente obtenido a partir de los puntos de valor del negocio dividido entre los puntos de historia, quedando entonces una priorización donde estarán en los primeros lugares los requerimientos más sencillos de resolver por los desarrolladores y que tengan mayor interés por parte del cliente. A continuación se da un ejemplo.     

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Tabla 1
          span Ejemplo de aplicación técnica de puntos de historia y valor del negocio
        
        .tabla-a.color-acento-contenido(data-aos="zoom-in")
          table
            thead(style="border-color: transparent")
              tr
                th(style="background-color: #FF6148;").text-center Requerimientos
                th(style="background-color: #FF6148;").text-center Valor del negocio
                th(style="background-color: #FF6148;").text-center Puntos de historia
                th(style="background-color: #FF6148;").text-center Cociente
            tbody    
              tr
                th(style="background-color: #F6F6F6;").text-center R01
                td(style="background-color: #F6F6F6;").text-center 6
                td(style="background-color: #F6F6F6;").text-center 3
                td(style="background-color: #F6F6F6;").text-center 2
              tr
                th(style="background-color: #FFF;").text-center R02
                td(style="background-color: #FFF;").text-center 7
                td(style="background-color: #FFF;").text-center 1
                td(style="background-color: #FFF;").text-center 7
              tr
                th(style="background-color: #F6F6F6;").text-center R03
                td(style="background-color: #F6F6F6;").text-center 9
                td(style="background-color: #F6F6F6;").text-center 5
                td(style="background-color: #F6F6F6;").text-center 1,8
              tr
                th(style="background-color: #FFF;").text-center R04
                td(style="background-color: #FFF;").text-center 3
                td(style="background-color: #FFF;").text-center 3
                td(style="background-color: #FFF;").text-center 1
              tr
                th(style="background-color: #F6F6F6;").text-center R05
                td(style="background-color: #F6F6F6;").text-center 4
                td(style="background-color: #F6F6F6;").text-center 2
                td(style="background-color: #F6F6F6;").text-center 2
              tr
                th(style="background-color: #FFF;").text-center R06
                td(style="background-color: #FFF;").text-center 5
                td(style="background-color: #FFF;").text-center 4
                td(style="background-color: #FFF;").text-center 1,25
              tr
                th(style="background-color: #F6F6F6;").text-center R07
                td(style="background-color: #F6F6F6;").text-center 2
                td(style="background-color: #F6F6F6;").text-center 8
                td(style="background-color: #F6F6F6;").text-center 0,25
    p.mb-5 Si se trata de un proyecto de siete (7) requerimientos con los valores de negocio, puntos de historia y cocientes como se describe en la tabla anterior, al realizar el proceso de priorización quedaría en el primer lugar el requerimiento R02 ya que tiene el cociente más alto; es decir, representa un requerimiento fácil de construir para el grupo de desarrolladores y, adicionalmente, tiene un alto valor de negocio para el cliente; luego, en el segundo lugar, el requerimiento R01 y R05 y así sucesivamente se registran las prioridades de acuerdo con el valor del cociente de mayor a menor.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Técnica urgente
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 223px; position: absolute" data-aos="fade-left")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="font-size: 2em")
            h4.mb-0 Aquí se utiliza una tabla de dos dimensiones, donde la horizontal estará determinada por el valor de la urgencia en el requerimiento, el cual corresponde a un valor numérico entre 1 y 5, donde un valor de 5 implica la mayor urgencia y 1 que no hay tanto apuro en el desarrollo de requerimiento; y la dimensión vertical estará determinada por el valor del negocio, solo que esta vez, a diferencia de la técnica anterior, el valor del negocio también se rige por una escala de 1 a 5, siendo 5 el de mayor valor de negocio posible para un requerimiento.<br>
            p Porfirio, 2021.
            i.fas.fa-quote-right(style="font-size: 2em")
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img10.png")

    p Para determinar la prioridad final de un requerimiento, se utiliza una escala de colores que surge a partir de la multiplicación de los valores de las escalas de urgencia y de valor de negocio según la siguiente tabla:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Tabla 2
          span Tabla de referencia para la técnica urgente | Nota: Tomado de Porfirio (2021)
        
        .tabla-a.color-acento-contenido(data-aos="zoom-in")
          table
            caption Nota: Tomado de Porfirio (2021)
            thead(style="border-color: transparent")   
            tbody
              tr
                th(style="background-color: #F6F6F6; width: 34%" rowspan="7") Valor de negocio
                th(style="background-color: #E3EDF8; width: 11%") 5
                th(style="background-color: #C5F5B9; width: 11%") 5
                th(style="background-color: #FFF2AE; width: 11%") 10
                th(style="background-color: #FFD574; width: 11%") 15
                th(style="background-color: #FFD574; width: 11%") 20
                th(style="background-color: #FF8B8B; width: 11%") 25   
              tr
                th(style="background-color: #E3EDF8;") 4
                th(style="background-color: #C5F5B9;") 4
                th(style="background-color: #FFF2AE;") 8
                th(style="background-color: #FFF2AE;") 12
                th(style="background-color: #FFD574;") 16
                th(style="background-color: #FFD574;") 20
              tr
                th(style="background-color: #E3EDF8;") 3
                th(style="background-color: #C5F5B9;") 3
                th(style="background-color: #FFF2AE;") 6
                th(style="background-color: #FFF2AE;") 9
                th(style="background-color: #FFF2AE;") 12
                th(style="background-color: #FFD574;") 15
              tr
                th(style="background-color: #E3EDF8;") 2
                th(style="background-color: #C5F5B9;") 2
                th(style="background-color: #C5F5B9;") 4
                th(style="background-color: #FFF2AE;") 6
                th(style="background-color: #FFF2AE;") 8
                th(style="background-color: #FFF2AE;") 10
              tr
                th(style="background-color: #E3EDF8;") 1
                th(style="background-color: #C5F5B9;") 1
                th(style="background-color: #C5F5B9;") 2
                th(style="background-color: #C5F5B9;") 3
                th(style="background-color: #C5F5B9;") 4
                th(style="background-color: #C5F5B9;") 5
              tr
                th(style="background-color: #E3EDF8;")
                th(style="background-color: #E3EDF8;") 1
                th(style="background-color: #E3EDF8;") 2
                th(style="background-color: #E3EDF8;") 3
                th(style="background-color: #E3EDF8;") 4
                th(style="background-color: #E3EDF8;") 5
              tr
                th(style="background-color: #F6F6F6;" colspan="6") Urgencia
    p Luego se consideran los requerimientos de mayor prioridad que están en el sector de color rojo, luego los de color naranja, luego los de color amarillo y, por último, los requerimientos del sector de color verde. Para entender mejor este estilo de priorización observar el siguiente ejemplo:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Tabla 3
          span Ejemplo de aplicación técnica urgente
        .tabla-a.color-acento-contenido(data-aos="zoom-in")
          table
            thead(style="border-color: transparent")
              tr
                th(style="background-color: #FF6148;").text-center Requerimientos
                th(style="background-color: #FF6148;").text-center Valor del negocio
                th(style="background-color: #FF6148;").text-center Urgencia
                th(style="background-color: #FF6148;").text-center Sector
            tbody    
              tr
                th(style="background-color: #F6F6F6;").text-center R01
                td(style="background-color: #F6F6F6;").text-center 1
                td(style="background-color: #F6F6F6;").text-center 4
                td(style="background-color: #C5F5B9;").text-center Verde
              tr
                th(style="background-color: #FFF;").text-center R02
                td(style="background-color: #FFF;").text-center 2
                td(style="background-color: #FFF;").text-center 4
                td(style="background-color: #FFF2AE;").text-center Amarillo
              tr
                th(style="background-color: #F6F6F6;").text-center R03
                td(style="background-color: #F6F6F6;").text-center 5
                td(style="background-color: #F6F6F6;").text-center 5
                td(style="background-color: #FF8B8B;").text-center Rojo
              tr
                th(style="background-color: #FFF;").text-center R04
                td(style="background-color: #FFF;").text-center 4
                td(style="background-color: #FFF;").text-center 3
                td(style="background-color: #FFF2AE;").text-center Amarillo
              tr
                th(style="background-color: #F6F6F6;").text-center R05
                td(style="background-color: #F6F6F6;").text-center 5
                td(style="background-color: #F6F6F6;").text-center 4
                td(style="background-color: #FFD574;").text-center Naranja
              tr
                th(style="background-color: #FFF;").text-center R06
                td(style="background-color: #FFF;").text-center 3
                td(style="background-color: #FFF;").text-center 1
                td(style="background-color: #C5F5B9;").text-center Verde
              tr
                th(style="background-color: #F6F6F6;").text-center R07
                td(style="background-color: #F6F6F6;").text-center 1
                td(style="background-color: #F6F6F6;").text-center 3
                td(style="background-color: #C5F5B9;").text-center Verde

    p.mb-5 Al realizar la multiplicación de los valores de negocio y el valor de la urgencia se puede establecer en qué sector se encuentra cada requerimiento, tomando en cuenta los valores del ejemplo de la tabla anterior se puede concluir que el primer requerimiento a abordar sería el R03 que está en el sector de color rojo, luego el requerimiento R05 que está en el sector de color naranja y así sucesivamente.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Técnica MoSCoW
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 235px; position: absolute" data-aos="fade-left")

    p Esta técnica se basa en la asignación de etiquetas a cada requerimiento, y las disponibles se relacionan a continuación:

    .row.justify-content-center.mb-4
      .col-lg-3.col-md-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta--boton.color-acento-contenido.hg-01.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/tema2/img11.svg')
          p.text-center.mb-0 #[b M]: indica una funcionalidad que debe estar (#[em Must]).
      .col-lg-3.col-md-6.col-8.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta--boton.color-acento-contenido.hg-01.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/tema2/img12.svg')
          p.text-center.mb-0 #[b S]: indica una funcionalidad que debería estar (#[em Should]).
      .col-lg-3.col-md-6.col-8.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta--boton.color-acento-contenido.hg-01.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/tema2/img13.svg')
          p.text-center.mb-0 #[b C]: indica una funcionalidad que podría estar (#[em Could]).
      .col-lg-3.col-md-6.col-8(data-aos="fade-left")
        .tarjeta--boton.color-acento-contenido.hg-01.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/tema2/img14.svg')
          p.text-center.mb-0 #[b W]: indica una funcionalidad que no estará por ahora, de pronto más adelante (#[em Wont]).

    p Los requerimientos son priorizados utilizando el siguiente orden: primero los que tienen etiqueta #[b M], luego los requerimientos con etiqueta #[b S], después aquellos con #[b C] y, finalmente, los etiquetados como #[b W].
   
    .row.justify-content-start.align-items-center.mb-5.mt-5
      .col-lg-10.BG05.p-4.mb-4
        .row.justify-content-start.align-items-center
          .col-lg-10.order-lg-1.order-2
            p.me-md-4 Esta técnica requiere de un proceso de consenso sobre el significado de cada una de las etiquetas asignables a cada requerimiento. Los requisitos de tipo #[b M] son aquellos obligatorios y que, de no ser abordados, implicaría directamente el fracaso; es importante entonces acordar qué se puede entregar y que sea útil, adicionalmente deben formar parte de un conjunto coherente, ya que si, sencillamente se seleccionan todos los requerimientos de tipo #[b M], automáticamente todos se transforman en requerimientos de tipo #[b M] y se pierde la dinámica de la técnica.
            p.me-md-5.mb-0 Normalmente el proceso de desarrollo de #[em software] es iterativo e incremental por lo que dependiendo del momento en que se encuentre un requerimiento, que ahora puede ser #[b W], en la siguiente iteración puede asumir un valor de #[b M].
          .col-lg-3.col-6.img-03.order-lg-2.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-left")
              img(src='@/assets/curso/tema2/img15.svg')
          
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Juicio de expertos
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 245px; position: absolute" data-aos="fade-left")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img16.png")
      .col-lg-7(data-aos="fade-left")
        .bloque-texto-c.color-primario.p-4
          i.fas.fa-quote-right
          h4.mb-2 Es una técnica basada principalmente en función de la complejidad y la exactitud en los resultados, básicamente consiste en realizar el proceso de priorización utilizando como base la opinión del gerente de proyecto o dueño de producto, o de algún #[em stakeholder] con conocimientos en la industria asociada al producto a desarrollar.
          p Porfirio, 2021.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
        p.mb-0 Este tipo de técnica funciona muy bien para proyectos pequeños con un dueño de negocio que tiene mucho conocimiento del problema y de la solución que necesita para resolverlo; sin embargo, se debe utilizar esta técnica con cuidado ya que se basa en una visión sesgada del negocio.
      .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        .row.justify-content-center.BGR03.p-2
          .col-6
            img(src="@/assets/curso/tema2/img17.svg")  
      
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Matriz de priorización
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 275px; position: absolute" data-aos="fade-left")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="font-size: 2em")
            h4.mb-0 Esta técnica consiste en construir una tabla donde cada requerimiento es valorado en una escala de 0 a 10 o de 0 a 100 para cada dimensión alineada con los objetivos del producto. Normalmente cada dimensión tiene un peso porcentual, de modo que cada requerimiento tendrá un valor final a partir de la sumatoria de la multiplicación de cada puntuación por el peso de cada dimensión.<br>
            p Porfirio, 2021.
            i.fas.fa-quote-right(style="font-size: 2em")
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img18.png")

    p Por ejemplo, se debe considerar la siguiente tabla:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Tabla 4
          span Ejemplo de aplicación técnica de matriz de priorización
        
        .tabla-a.color-acento-contenido(data-aos="zoom-in")
          table
            thead(style="border-color: transparent")
              tr
                th(style="background-color: #FF6148;" rowspan="2").text-center Requerimiento
                th(style="background-color: #CC4D39;" colspan="3").text-center Criterios
                th(style="background-color: #24CB9F;").text-center Resultado
                th(style="background-color: #FF6148;" rowspan="2").text-center Ranking
              tr
                th(style="background-color: #FF6148;").text-center Conversión 30%
                th(style="background-color: #FF6148;").text-center Satisfacción de usuario 40%
                th(style="background-color: #FF6148;").text-center Retención 30%
                th(style="background-color: #FF6148;").text-center 100%
            tbody    
              tr
                th(style="background-color: #F6F6F6;").text-center R01
                td(style="background-color: #F6F6F6;").text-center 4
                td(style="background-color: #F6F6F6;").text-center 3
                td(style="background-color: #F6F6F6;").text-center 8
                td(style="background-color: #F6F6F6;").text-center 4,8
                td(style="background-color: #F6F6F6;").text-center 2
              tr
                th(style="background-color: #FFF;").text-center R02
                td(style="background-color: #FFF;").text-center 6
                td(style="background-color: #FFF;").text-center 4
                td(style="background-color: #FFF;").text-center 3
                td(style="background-color: #FFF;").text-center 4,3
                td(style="background-color: #FFF;").text-center 3
              tr
                th(style="background-color: #F6F6F6;").text-center R03
                td(style="background-color: #F6F6F6;").text-center 8
                td(style="background-color: #F6F6F6;").text-center 7
                td(style="background-color: #F6F6F6;").text-center 6
                td(style="background-color: #F6F6F6;").text-center 7
                td(style="background-color: #F6F6F6;").text-center 1
              tr
                th(style="background-color: #FFF;").text-center R04
                td(style="background-color: #FFF;").text-center 4
                td(style="background-color: #FFF;").text-center 2
                td(style="background-color: #FFF;").text-center 4
                td(style="background-color: #FFF;").text-center 3,2
                td(style="background-color: #FFF;").text-center 4

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Suponiendo las dimensiones de conversión con un peso porcentual del 30%, la satisfacción del cliente con un peso porcentual del 40% y la retención de clientes con peso porcentual del 30%, cada uno de los requerimientos (R01-R04) son evaluados en una escala de 0 a 10, a los cuales se les aplica el cálculo de acuerdo con el valor porcentual de cada dimensión evaluada y el resultado se obtendría de la sumatoria de los valores parciales de cada dimensión, con lo cual los mayores valores totales obtenidos serán priorizados sobre los de menor valor.
        p.mb-0 Esta técnica sigue siendo muy subjetiva al igual que la técnica de juicio de expertos, aunque quedan claros cuáles son los criterios de evaluación utilizados para determinar la prioridad de los requisitos.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img19.svg")
    
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Matriz de trazabilidad
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-left")
        .bloque-texto-c.color-primario.p-4
          i.fas.fa-quote-right
          h4.mb-2 La matriz de trazabilidad es una herramienta que permite alinear los requisitos del proyecto con los logros de los objetivos, es una tabla que relaciona cada uno de los requerimientos con el entregable solicitado. Es decir, permite identificar qué resultado se alcanza con cada requisito y, a la vez, permite visualizar qué requisitos son necesario cumplir para determinado entregable. 
          p Pantaleo, 2018.
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img20.png")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        .row.justify-content-center.BGR03.p-5
          .col-9
            img(src="@/assets/curso/tema2/img21.svg")
      .col-lg-9(data-aos="fade-left")
        p Este es un instrumento clave para el responsable del proyecto, en especial en el proceso de seguimiento y control de cambios, ya que permite analizar qué requerimientos, eventualmente, convendría modificar, eliminar o añadir; así, se puede ajustar la planificación de tareas pendientes del proyecto. También permite identificar inconsistencias entre los requerimientos y los beneficios que se esperan alcanzar, tener una visualización rápida de los requisitos que han sido abordados y cuáles están pendientes por realizar y, por lo tanto, qué entregables están próximos a producirse y cuáles todavía requieren de mayor tiempo.
        p.mb-0 La estructura de la matriz de trazabilidad se puede construir en una hoja de cálculo, en ella se relacionan todos los requisitos y las metas a alcanzar junto con una serie de valores complementarios que aportan información y coherencia a los vínculos generados.
    
    p Cada organización es responsable de adaptar la matriz de correlación a sus necesidades particulares; en la siguiente figura se propone el contenido base de una matriz de correlación dividida por secciones.

    .row.justify-content-center.mb-4(data-aos="zoom-out")
      TabsC.color-acento-contenido
        .py-3.py-md-4(titulo="Identificación")
          .row.justify-content-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src="@/assets/curso/tema2/img22.svg")
            .col-lg-8
              p #[b Identificador]: código único para cada requisito.
              p #[b Código jerárquico]: código que permite categorizar cada grupo de requisitos.
              p #[b Descripción]: texto explicativo del requerimiento.
              p.mb-0 #[b Tipo]: categoría del requisito (requerimiento de negocio, requerimiento de los interesados, funcionales y no funcionales, requerimientos del proyecto, requerimiento de calidad)
        .py-3.py-md-4(titulo="Estado")
          .row.justify-content-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src="@/assets/curso/tema2/img23.svg")
            .col-lg-8
              p #[b Versión]: versión del requerimiento (importante para el control de cambios).
              p #[b Estado]: activo, cancelado, diferido, agregado, aprobado, asignado o completado.
              p #[b Fecha de estado]: momento en el que se realizó la última modificación del estado.
              p #[b Responsable]: persona encargada del requisito.
              p #[b Prioridad]: escalas de prioridad usada en el proyecto (alta, media, baja; 1, 2, 3, 4, 5).
              p #[b Otras características]: cualquier otro campo de valor para la organización.
        .py-3.py-md-4(titulo="Objetivo")
          .row.justify-content-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src="@/assets/curso/tema2/img24.svg")
            .col-lg-8
              p #[b Objetivo]: objetivo que pretende alcanzar el requerimiento.
              p #[b Necesidad de negocio]: necesidad de negocio que se pretende cubrir con el objetivo del proyecto y por ende con el requisito.
              p #[b Entregable]: producto.
    
    p A continuación, se muestra el ejemplo de la estructura en Excel de una matriz de trazabilidad.

    .row.justify-content-center.mb-5
      .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
        h5 Tabla 5
        span Ejemplo de la estructura de una matriz de trazabilidad
      
      .tabla-a.color-acento-contenido(data-aos="zoom-in")
        table(style="min-width: 1600px")
          thead(style="border-color: transparent")
            tr
              th(style="background-color: #FFA726;" colspan="4").text-center IDENTIFICACIÓN
              th(style="background-color: #4DD0E1;" colspan="4").text-center ESTADO
              th(style="background-color: #FFA726;" colspan="3").text-center CARACTERÍSTICAS
              th(style="background-color: #4DD0E1;" colspan="3").text-center OBJETIVO
          tbody
            tr
              td(style="background-color: #FFCA28;").text-center Id
              td(style="background-color: #FFCA28;").text-center Código jerárquico
              td(style="background-color: #FFCA28;").text-center Descripción
              td(style="background-color: #FFCA28;").text-center Tipo
              td(style="background-color: #FFCA28;").text-center Versión
              td(style="background-color: #FFCA28;").text-center Estado
              td(style="background-color: #FFCA28;").text-center Fecha de estado
              td(style="background-color: #FFCA28;").text-center Responsable
              td(style="background-color: #FFCA28;").text-center Prioridad
              td(style="background-color: #FFCA28;").text-center Complejidad
              td(style="background-color: #FFCA28;").text-center Grado de cumplimiento
              td(style="background-color: #FFCA28;").text-center Objetivo
              td(style="background-color: #FFCA28;").text-center Necesidad del negocio
              td(style="background-color: #FFCA28;").text-center Entregable
            tr
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
            tr
              td
              td
              td
              td
              td
              td
              td
              td
              td
              td
              td
              td
              td
              td
            tr
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
              td(style="background-color: #F6F6F6;")
            tr
              td
              td
              td
              td
              td
              td
              td
              td
              td
              td
              td
              td
              td
              td
    
    .row.mb-4
      .col-auto
        a.anexo(:href="obtenerLink('downloads/Anexo6.xlsx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-xml.svg")
          .anexo__texto
            p #[b Anexo]. Ejemplo de la estructura de una matriz de trazabilidad

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10(data-aos="fade-right")
        p.mb-0 Al construir una matriz de trazabilidad se deben usar los campos que se consideren útiles para el proyecto, pues no todos los proyectos son iguales y la estructura definida para uno puede no resultar conveniente para otro proyecto. <span style="color: #FF6148">#[b Cuando se usa, esta matriz debe permanecer actualizada a lo largo del ciclo de vida de construcción del proyecto.]</span>
      .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-left")
        .row.justify-content-center.BGR03.p-2
          .col-6
            img(src="@/assets/curso/tema2/img25.svg")

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Descomposición funcional
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="font-size: 2em")
            h4.mb-0 Esta estrategia consiste en definir los requerimientos como una relación de entradas y salidas de un sistema. Normalmente, estos requerimientos se definen de manera muy general y poco detallada y luego empieza a descomponerse en funcionalidades y subfuncionalidades un poco más detallados con el ánimo de analizarlas individualmente hasta lograr un nivel de detalle adecuado para el proyecto, a esta estructura se le conoce como top-down; el resultado es una estructura jerárquica.<br>
            p Pantaleo, 2018.
            i.fas.fa-quote-right(style="font-size: 2em")
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img26.svg")
    
    p La descomposición funcional se realiza, por lo general, para identificar y entender los componentes o partes que constituyen un todo; en este proceso es vital identificar las interacciones entre componentes. A continuación, se expone un ejemplo gráfico sobre esta descomposición funcional.

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Figura 2
      span Ejemplo de descomposición funcional de un sistema de gestión comercialización de productos (fragmento).

    .BG06.p-4(data-aos="zoom-in")
      .row.justify-content-center
        .col-lg-10
          img(src="@/assets/curso/tema2/img27.svg")

</template>

<script>
export default {
  name: 'Tema2',
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
