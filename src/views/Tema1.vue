<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Comunicación
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img01.png")
      .col-lg-7(data-aos="fade-left")
        p La comunicación es un elemento muy importante dentro de los proyectos de TI, y para los proyectos de servicios en la nube no es la excepción. La comunicación toma relevancia en el momento de saber redactar y sustentar los proyectos de gestión de servicios en la nube, aplicando algunos tipos de comunicación, especialmente la comunicación verbal. Según la forma en que se conciba e implante, facilitará o no, para que se convierta en una variable estratégica de la organización.
        p.mb-0 Debe establecer unas metas que permitan una interacción comunicativa perfecta entre los participantes, además de demostrar voluntad y decisión de tomar acciones que sean perseverantes y que además aporte estabilidad. Así mismo aportar información útil, con el fin de lograr receptividad, identificación de objetivos y desafíos, teniendo presente como recibe ese mensaje, claridad y entendimiento.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Tipos
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 127px; position: absolute" data-aos="fade-left")

    p Los tipos de comunicación corresponden a las diferentes formas que se tiene al transmitir un mensaje. Y tienen que ver con los diferentes modos de llevar a cabo la relación mediada por un mensaje, los diferentes ámbitos o situaciones, entre otro tipo de parámetros, etc. A nivel general pueden clasificarse los siguientes tipos de comunicación:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        LineaTiempoD.color-acento-contenido
          p(numero="1" titulo="Verbal") Consiste en la comunicación por medio del uso de las palabras entre los individuos que se comunican. Se pude tener una comunicación verbal de manera oral o escrita. En la actualidad, es muy común ver este tipo de comunicación a través de los medios digitales.
          p(numero="2" titulo="No Verbal") Es el tipo de comunicación que se realiza sin hacer uso de las palabras, por ejemplo, por medio de los gestos, expresiones faciales, movimientos del cuerpo y las extremidades. En esta intervienen las emociones, y los estado de ánimo.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img02.svg")     

    p.mb-5 También, se pueden tener tipos de comunicación según la cantidad de los participantes, teniendo así la comunicación individual, colectiva, interpersonal, grupal, masiva, entre otras.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Características
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 220px; position: absolute" data-aos="fade-left")

    p.mb-5 A continuación, se describen las principales características de la comunicación enfocadas a la gestión de diseño y documentación de propuesta para servicios en la nube.

    .mb-4.d-flex
      .d-flex.flex-wrap.px-4(style="background-color: #993A2B; border-radius: 25px; padding: 10px")
        h4.col.mb-0.text-white(data-aos="fade-right") Técnicas de comunicación oral
      
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-12.d-none.d-lg-flex
        img(src="@/assets/curso/tema1/img03.svg")
      .col-12.d-lg-none.d-flex
        img(src="@/assets/curso/tema1/img04.svg")
      
    .mb-4.d-flex
      .d-flex.flex-wrap.px-4(style="background-color: #993A2B; border-radius: 25px; padding: 10px")
        h4.col.mb-0.text-white(data-aos="fade-right") Técnicas de comunicación escrita
    
    p Consisten en la preparación teórica y práctica para el desarrollo de la comunicación escrita sobre un tema en específico, por ejemplo, la redacción de informes o propuestas.
    p Las técnicas que se pueden utilizar para la comunicación escrita son:
    
    .BGM02.px-md-5.px-4.py-4.mb-4
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-lg-8.d-none.d-lg-flex
          img(src="@/assets/curso/tema1/img05.svg")
        .col-12.d-lg-none.d-flex
          img(src="@/assets/curso/tema1/img06.svg")
        
    .mb-4.d-flex
      .d-flex.flex-wrap.px-4(style="background-color: #993A2B; border-radius: 25px; padding: 10px")
        h4.col.mb-0.text-white(data-aos="fade-right") Técnicas de manejo de la información
    
    .BGR02.p-4.mb-4(data-aos="zoom-out")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-10
            .h4 Técnicas de manejo de la información
            p Consiste en las buenas prácticas para el adecuado manejo de la información dentro de una organización, en el desarrollo de una actividad, proceso o de un proyecto.
            p Existen diversas técnicas para un adecuado manejo de información, a continuación, se listan algunas en relación a la gestión de servicios en la nube.
          .col-lg-8
            img(src="@/assets/curso/tema1/img07.svg")
        .row.justify-content-center.align-items-center
          .col-lg-3.col-6.mb-4
            img(src="@/assets/curso/tema1/img08.svg")
          .col-lg-7.mb-4
            p Corresponde a un objetivo de la norma ISO 27001.
            p.mb-0 Asegurar que la información recibe un nivel apropiado de protección, de acuerdo con su importancia para la organización. 
          .col-lg-6.mb-lg-0.mb-4
            p Y también es un control, pues una empresa establece más niveles de clasificación a medida que la misma sea de mayor tamaño y presente una mayor complejidad.
            p Las empresas de tamaño medio, pueden establecer estos niveles para clasificar la información según el carácter confidencial de la misma:
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-check(style="color: #FF6148")
                p.mb-0 #[b Confidencial]: cuando el nivel de confidencialidad de la información se incremente.
              li(style="margin-bottom: 2px")
                i.fas.fa-check(style="color: #FF6148")
                p.mb-0 #[b Restringido]: para niveles medios de confidencialidad.
              li(style="margin-bottom: 2px")
                i.fas.fa-check(style="color: #FF6148")
                p.mb-0 #[b Uso interno]: información con un nivel bajo de confidencialidad.
              li(style="margin-bottom: 2px")
                i.fas.fa-check(style="color: #FF6148")
                p.mb-0 #[b Público]: cuando todas las personas pueden ver la información.
          .col-lg-4.col-8
            img(src="@/assets/curso/tema1/img08.png")
        .row.justify-content-center.align-items-center
          .col-lg-3.col-6.mb-4
            img(src="@/assets/curso/tema1/img09.svg")
          .col-lg-7.mb-4
            p.mb-0 Corresponde a un control del Anexo A del estándar ISO/IEC 27001:2013.
          .col-lg-6.mb-lg-0.mb-4
            p Se debería desarrollar e implementar un conjunto adecuado de procedimientos para el etiquetado de la información, de acuerdo con el esquema de clasificación de información adoptado por la organización.
          .col-lg-4.col-8
            img(src="@/assets/curso/tema1/img09.png")
        .row.justify-content-center.align-items-center
          .col-lg-3.col-6.mb-4
            img(src="@/assets/curso/tema1/img10.svg")
          .col-lg-7.mb-4
          .col-lg-6.mb-lg-0.mb-4
            p Documentación ordenada según los tipos. Corresponde a los documentos de procesos o procedimiento, manuales, instructivos, formatos, registros, actas.
          .col-lg-4.col-8
            img(src="@/assets/curso/tema1/img10.png")
        .row.justify-content-center.align-items-center
          .col-lg-3.col-6.mb-4
            img(src="@/assets/curso/tema1/img11.svg")
          .col-lg-7.mb-4
          .col-lg-6.mb-lg-0.mb-4
            p Corresponde a un objetivo de la norma ISO/IEC 27001:2013. 
            p.mb-0 Asegurar el uso apropiado y eficaz de la criptografía para proteger la confidencialidad, la autenticidad y/o la integridad de la información. 
          .col-lg-4.col-8
            img(src="@/assets/curso/tema1/img11.png")
        .row.justify-content-center.align-items-center
          .col-lg-3.col-6.mb-4
            img(src="@/assets/curso/tema1/img12.svg")
          .col-lg-7.mb-4
          .col-lg-6.mb-lg-0.mb-4
            p.mb-0 Responde a la seguridad ofrecida al cliente en cuanto a la seguridad que se tiene de los datos y la información que maneja y guarda el proveedor de servicios en la nube.
          .col-lg-4.col-8
            img(src="@/assets/curso/tema1/img12.png")
        .row.justify-content-center.align-items-center
          .col-lg-3.col-6.mb-4
            img(src="@/assets/curso/tema1/img13.svg")
          .col-lg-7.mb-4
          .col-lg-6.mb-lg-0.mb-4
            p.mb-0 Para controlar el acceso al sistema, debe mantener la seguridad física del entorno informático. Por ejemplo, un sistema cuya sesión está iniciada pero desatendida es vulnerable al acceso no autorizado. Un intruso puede obtener acceso al sistema operativo y a la red. El entorno y el #[em hardware] del equipo deben estar físicamente protegidos contra el acceso no autorizado.
          .col-lg-4.col-8
            img(src="@/assets/curso/tema1/img13.png")
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
