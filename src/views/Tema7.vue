<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Recolección de información
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/img01.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Es una actividad donde deben agruparse y recogerse elementos que son importantes dentro de un contenido y con un fin específico, buscando identificar y analizar información, ya sea sobre los procesos, requerimientos de los clientes o alguna otra necesidad puntual que aporte al logro de los proyectos para la transformación digital, donde la comunicación, la información y el reconocimiento de requisitos son fundamentales.<br><br>Es importante tener en cuenta que la recolección de datos no solo se hace a través de encuestas, también puede realizarse mediante entrevistas, cuestionarios, procesos de observación, consultas bibliográficas, entre otros. 

    .BGIMG03.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-5.mb-lg-0.mb-4
          p En la siguiente ilustración, se presenta un ejemplo (metafórico) para el análisis de información, donde cada persona puede tener una visión o idea diferente del mismo proyecto; cada profesional tiene su propia interpretación y entendimiento según su profesión, rol en el proyecto, visión del negocio, o necesidades que considera cubrir.
          p.mb-0 Por lo cual, es necesario realizar la recolección de la información con detalle y la mayor claridad posible, con el fin de evitar al máximo interpretaciones o dejar vacíos o imprecisiones.
        .col-lg-6.col-10
          SlyderF(columnas="col-12")
            div
              img(src="@/assets/curso/tema7/img02.png")
            div
              img(src="@/assets/curso/tema7/img03.png")
            div
              img(src="@/assets/curso/tema7/img04.png")
            div
              img(src="@/assets/curso/tema7/img05.png")
            div
              img(src="@/assets/curso/tema7/img06.png")
          .row.justify-content-center
            .col-9.BG08.p-2
              p.text-small.mb-0 Nota. Adaptado de Pinnacle (s. f.).

    p Es así como la información en el levantamiento de requerimientos o requisitos, conocimiento del negocio y sus procesos debe ser identificada, descrita y documentada, de forma estructurada y normalizada.

    separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.1 Tipos y clasificación de la información
    
    .cajon-b.color-secundario.cajon-end.p-3.mb-4
      .row.justify-content-between.align-items-center
        .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
          p La clasificación y naturaleza de la información para el desarrollo de proyectos de transformación digital depende de cada proyecto específico y de quiénes participan de este. Los participantes definen también el tipo de información previa para el desarrollo del proyecto, que involucre conocimiento y digitalización del proceso.
          p.mb-0 Los aspectos clave para la clasificación de la información y requerimientos son:
        .col-lg-1.col-2.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema7/img07.svg")
        
    .BGR02.p-4.mb-4(data-aos="zoom-out")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            .h4 Cuantificable en términos de medición
            p Se debe realizar una declaración cuantificable, que permita la medición y verificación del logro de los objetivos propuestos.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema7/img08.svg")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            .h4 Completitud
            p Los requerimientos deben fijar todas las propiedades y restricciones, para asegurar que no falten referencias, definiciones o funciones específicas.
          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema7/img09.svg")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            .h4 Validez o corrección
            p Buscar unificar el significado de cada requerimiento. A menudo, implica el cumplimiento de políticas, leyes y normas técnicas.
          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema7/img10.svg")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            .h4 Consistencia
            p Se deben involucrar los interesados, con el fin de superar las contradicciones a través de la negociación y priorización; se deben resolver los conflictos y llegar a acuerdos.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema7/img11.svg")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            .h4 Unicidad
            p Al finalizar la definición del requisito, las palabras escritas en las declaraciones deben significar lo mismo para todo el grupo de interesados. Un glosario elimina ambigüedades semánticas y unifica definiciones.
          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema7/img12.svg")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            .h4 Pertinencia
            p Es fundamental definir claramente el problema a solucionar; los requerimientos deben ser relevantes para las necesidades de los patrocinadores, sin llegar a restringir al equipo de trabajo.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema7/img13.svg")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            .h4 Factibilidad
            p Los requisitos deben especificarse para que puedan implementarse utilizando los recursos disponibles, dentro del presupuesto y cronograma.
          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema7/img14.svg")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            .h4 Trazabilidad
            p La trazabilidad de los cambios ayuda a identificar su impacto y propagación en otras partes del #[em software].
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema7/img15.svg")

    separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.2 Métodos, técnicas e instrumentos

    p En la aplicación de métodos para la recolección de la información, es común el uso de modelos de plantillas normalizadas para articular el problema y ayudar en la delimitación de la visión del producto, que contenga la esencia de lo que se está construyendo, facilitando la documentación y comprensión de la información.
    p A continuación, se presentan los métodos y técnicas más utilizados para la recolección de la información:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      AcordionA(tipo="a" clase-tarjeta="BGR08")
        .row.justify-content-around(titulo="Entrevista")
          .col-lg-7.order-lg-1.order-2
            p.mb-0 Esta puede ser individual o grupal, y busca conocer las necesidades del usuario, de la aplicación, procesos del negocio o de la organización. Antes de realizar la entrevista, se presenta la agenda y las preguntas generales, pero, a medida que se va desarrollando, pueden surgir preguntas más abiertas o dejar que libremente sean formuladas por los asistentes, sin desviarse de la idea o intención central.
          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema7/img16.svg")
        .row.justify-content-around(titulo="Talleres")
          .col-lg-7.order-lg-1.order-2
            p.mb-0 Mediante trabajo colaborativo y discusiones, se resuelven asuntos sobre diferencias de opinión, necesidades, conflictos y requerimientos no clarificados. El objetivo es tomar decisiones, por lo que el equipo de trabajo debe prepararse para facilitar y capturar las ideas en diferentes grupos de enfoque representativos.
          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema7/img17.svg")
        .row.justify-content-around(titulo="Observación")
          .col-lg-7.order-lg-1.order-2
            p.mb-0 No siempre es sencillo para los usuarios expresarse, entonces, es necesario verlos en operación directamente o cómo se desempeñan al manejar las aplicaciones. La observación permite saber qué funciones usan de una aplicación o cuales se les dificultan o hacen falta. Puede ser pasiva si solo se toma nota, o interactiva si se hacen preguntas al usuario observado.
          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema7/img18.svg")
        .row.justify-content-around(titulo="Cuestionarios")
          .col-lg-7.order-lg-1.order-2
            p.mb-0 Las preguntas deben ser claras, concretas y enfocadas hacia los requerimientos específicos del encuestado. Debe tenerse cuidado al seleccionar los aspectos a preguntar, porque siempre existirá diferencia en las opiniones entre los interesados; a veces, quienes formulan los requisitos del negocio no tienen idea de lo que piensan los usuarios.
          .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema7/img19.svg")
        .row.justify-content-around(titulo="Consultas independientes")
          .col-lg-7.order-lg-1.order-2
            p.mb-0 Es útil cuando se hace una aplicación para reemplazar, actualizar o añadir funcionalidad a un #[em software] en uso. Se debe tener una idea general de cómo ha sido utilizado, consultar la documentación del #[em software] con manuales de usuario y hablar con quienes mejor lo trabajen. Examinar los productos de la competencia ayuda a delimitar y diferenciar los requerimientos.
          .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema7/img20.svg")

    p La experiencia del equipo de trabajo y el tipo de información definen cuál técnica usar. Si se requiere diseñar una aplicación que es masiva, se hacen entrevistas, grupos de enfoque, talleres y cuestionarios; si es individual o un grupo pequeño, se realiza mediante la observación; si es nuevo en el dominio del #[em software], hay que hacer talleres y observaciones para adquirir conocimiento y entender el dominio.

</template>

<script>
export default {
  name: 'Tema7',
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
