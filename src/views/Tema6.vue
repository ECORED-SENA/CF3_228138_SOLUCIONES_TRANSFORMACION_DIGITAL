<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Modelos de procesos y diagrama de flujo
    
    .cajon-b.color-secundario.cajon-end.p-3.mb-4
      .row.justify-content-between.align-items-center
        .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
          p.mb-0 El análisis para desarrollo de soluciones tecnológicas está fundamentado en identificar de manera objetiva los procesos, los flujos de trabajo, las frecuencias, almacenamiento de información, entradas, transformación y salidas de estos, por lo que existen diversos métodos o modelos para representar, visualizar y explicar de manera sencilla los procesos y los diagramas de flujo.
        .col-lg-1.col-2.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema6/img01.svg")

    p A continuación, se describen los modelamientos de proceso de negocio más comunes y usados para representar y entender un modelo de proceso de negocio desde el enfoque tecnológico:

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Diagrama de clases UML (Lenguaje de Modelado Unificado)
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 615px; position: absolute" data-aos="fade-left")  

    p Es una modelación orientada a la programación basada en objetos, eventos y clases; uno de los lenguajes de programación más fiel a este paradigma de programación es Java, el cual se fundamenta en elementos como clases, atributos y métodos.
    p Para entender este tipo de diagramación, es importante definir algunos conceptos:

    .BGR02.p-4.mb-4(data-aos="zoom-out")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            .h4 Cuantificable en términos de medición
            p Se debe realizar una declaración cuantificable, que permita la medición y verificación del logro de los objetivos propuestos.        
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema6/img01di.png")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            .h4 Completitud
            p Los requerimientos deben fijar todas las propiedades y restricciones, para asegurar que no falten referencias, definiciones o funciones específicas.        
          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema6/img02di.png")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            .h4 Validez o corrección
            p Buscar unificar el significado de cada requerimiento. A menudo, implica el cumplimiento de políticas, leyes y normas técnicas.        
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema6/img03di.png")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            .h4 Consistencia
            p Se deben involucrar los interesados, con el fin de superar las contradicciones a través de la negociación y priorización; se deben resolver los conflictos y llegar a acuerdos.        
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema6/img04di.png")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            .h4 Unicidad
            p Al finalizar la definición del requisito, las palabras escritas en las declaraciones deben significar lo mismo para todo el grupo de interesados. Un glosario elimina ambigüedades semánticas y unifica definiciones.        
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema6/img05di.png")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            .h4 Pertinencia
            p Es fundamental definir claramente el problema a solucionar; los requerimientos deben ser relevantes para las necesidades de los patrocinadores, sin llegar a restringir al equipo de trabajo. 
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema6/img06di.png")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            .h4 Factibilidad
            p Los requisitos deben especificarse para que puedan implementarse utilizando los recursos disponibles, dentro del presupuesto y cronograma. 
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema6/img07di.png")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            .h4 Trazabilidad
            p La trazabilidad de los cambios ayuda a identificar su impacto y propagación en otras partes del #[em software]. 
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema6/img08di.png")

    p.mb-5 Un proceso no consta de un objeto clase, sino que el sistema contiene varios objetos, los cuales se relacionan entre sí; estas relaciones también tienen sus características según el modelo de dominio o proceso a diagramar.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Relaciones entre clases
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 295px; position: absolute" data-aos="fade-left")  

    .BGR13.p-4.mb-4(data-aos="fade-right")
      p Se presentan entre diferentes clases, indicando la manera en cómo se comunican o asocian los objetos del sistema; existen distintos tipos de relaciones:
      ul.lista-ul--color
        li(style="margin-bottom: 2px")
          i.fas.fa-caret-square-right(style="color: #FF6148")
          | Asociación (conexiones entre clases).
        li(style="margin-bottom: 2px")
          i.fas.fa-caret-square-right(style="color: #FF6148")
          | Dependencia (relación de uso).
        li(style="margin-bottom: 2px")
          i.fas.fa-caret-square-right(style="color: #FF6148")
          | Generalización/especialización (relaciones de herencia).
      
      .row.justify-content-around
        .col-lg-5
          p.mb-0 #[b Relación de asociación]: describe una conexión entre objetos. Se representa con una línea continua que une las clases.
        .col-lg-5.col-10
          img(src="@/assets/curso/tema6/img07.svg")

    p Este tipo de relaciones, puede ser bidireccional o unidireccional, si su relación va en un solo sentido se debe incluir la flecha como se presenta en el siguiente ejemplo:
    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-5.col-10
        img(src="@/assets/curso/tema6/img08.svg")
    
    p.mb-5 El (*) y el (1) indican el tipo de relación; en este caso, quieren decir que una o muchas cuentas (*) pueden estar a nombre de un (1) cliente.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Diagrama de casos de uso en UML
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 390px; position: absolute" data-aos="fade-left")  

    p Capturan los requisitos funcionales del sistema a describir a través de una forma gráfica o un diagrama UML evolucionado. Se compone de algunos elementos gráficos particulares, donde cada elemento representa ya sea un usuario, un proceso, una situación, conectores u otro elemento del sistema.
    p En el siguiente recurso se describen los elementos:

    .row.justify-content-center.BGIMG01.p-4.mb-4(data-aos="zoom-in")
      .col-lg-10
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema6/img09.svg')
          .BGR19A.p-3(x="18.7%" y="19%" numero="+")
            .h4 Usuario (actores)
            p.mb-0 Son quienes interactúan con el sistema; por lo general, son humanos, pero también pueden ser otras máquinas.
          .BGR19A.p-3(x="9%" y="42%" numero="+")
            .h4 Conectores
            p.mb-0 Indican el flujo y el tipo de comunicación que se tiene entre los elementos del sistema.
          .BGR19A.p-3(x="50%" y="67%" numero="+")
            .h4 Conectores
            p.mb-0 Indican el flujo y el tipo de comunicación que se tiene entre los elementos del sistema.
          .BGR19A.p-3(x="71%" y="38%" numero="+")
            .h4 Conectores
            p.mb-0 Indican el flujo y el tipo de comunicación que se tiene entre los elementos del sistema.
          .BGR19A.p-3(x="83%" y="38%" numero="+")
            .h4 Conectores
            p.mb-0 Indican el flujo y el tipo de comunicación que se tiene entre los elementos del sistema.
          .BGR19A.p-3(x="83%" y="70%" numero="+")
            .h4 Conectores
            p.mb-0 Indican el flujo y el tipo de comunicación que se tiene entre los elementos del sistema.
          .BGR19A.p-3(x="18.7%" y="63.4%" numero="+")
            .h4 Usuario (actores)
            p.mb-0 Son quienes interactúan con el sistema; por lo general, son humanos, pero también pueden ser otras máquinas.
          .BGR19A.p-3(x="44.7%" y="19%" numero="+")
            .h4 Caso de uso
            p.mb-0 Son los requisitos funcionales y se refieren al asunto de interacción con los agentes externos.
          .BGR19A.p-3(x="45%" y="52.7%" numero="+")
            .h4 Caso de uso
            p.mb-0 Son los requisitos funcionales y se refieren al asunto de interacción con los agentes externos.
          .BGR19A.p-3(x="45%" y="74.5%" numero="+")
            .h4 Caso de uso
            p.mb-0 Son los requisitos funcionales y se refieren al asunto de interacción con los agentes externos.
          .BGR19A.p-3(x="47%" y="92%" numero="+")
            .h4 Ejemplo
            p.mb-0 Ejemplo de diagrama de caso de uso.
          .BGR19A.p-3(x="78%" y="19%" numero="+")
            .h4 Caso de uso
            p.mb-0 Son los requisitos funcionales y se refieren al asunto de interacción con los agentes externos.
          .BGR19A.p-3(x="75%" y="52.7%" numero="+")
            .h4 Caso de uso
            p.mb-0 Son los requisitos funcionales y se refieren al asunto de interacción con los agentes externos.
          .BGR19A.p-3(x="78.3%" y="86%" numero="+")
            .h4 Caso de uso
            p.mb-0 Son los requisitos funcionales y se refieren al asunto de interacción con los agentes externos.
          .BGR19A.p-3(x="99%" y="52.7%" numero="+")
            .h4 Usuario (actores)
            p.mb-0 Son quienes interactúan con el sistema; por lo general, son humanos, pero también pueden ser otras máquinas.
          .BGR19A.p-3(x="59.4%" y="2%" numero="+")
            .h4 El sistema
            p.mb-0 Enmarca el proceso, área o #[em software], y se representa por un cuadrado, todas las acciones dentro de este suponen procesos informáticos.
          
    p Los diagramas de uso se complementan con plantillas de descripción que amplían la información de cada uso. A continuación, se presenta un ejemplo:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-8
        .BGR07.p-3
          .row.justify-content-around.align-items-center
            .col-lg-2.col-sm-3.col-4
              img(src="@/assets/curso/tema6/img10.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.text-white.mb-1 Ver plantilla descriptiva
                  p.text-white A través de la siguiente plantilla descriptiva, podrá ver un ejemplo de un caso de uso.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo5.xlsx')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Diagrama de flujo
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 245px; position: absolute" data-aos="fade-left")  

    p Se basa en la representación gráfica de un proceso o un algoritmo, mostrando claramente los pasos y el flujo de las tareas, entradas, salidas e interacción, tal como si fuera un mapa de proceso y tareas.
    p Las figuras geométricas más comunes y su representación gráfica son:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      TabsA.color-acento-botones
        .BGR19A.p-4(titulo="Terminal")
          h4 Terminal
          p Indica el comienzo o final del proceso.
          .row.justify-content-center
            .col-lg-2.col-4
              img(src="@/assets/curso/tema6/img11.svg")
        .BGR19A.p-4(titulo="Entrada/salida")
          h4 Entrada/salida
          p Indica entrada o salida de datos.
          .row.justify-content-center
            .col-lg-2.col-4
              img(src="@/assets/curso/tema6/img12.svg")
        .BGR19A.p-4(titulo="Línea de flujo")
          h4 Línea de flujo
          p Conexiones entre pasos.
          .row.justify-content-center
            .col-lg-2.col-4
              img.w-75(src="@/assets/curso/tema6/img13.svg")
        .BGR19A.p-4(titulo="Decisión")
          h4 Decisión
          p Indica bifurcación para la toma de una decisión.
          .row.justify-content-center
            .col-lg-2.col-4
              img(src="@/assets/curso/tema6/img14.svg")
        .BGR19A.p-4(titulo="Documento")
          h4 Documento
          p Se utiliza para indicar que se genera o consulta un documento específico en un punto del proceso.
          .row.justify-content-center
            .col-lg-2.col-4
              img(src="@/assets/curso/tema6/img15.svg")
        .BGR19A.p-4(titulo="Proceso definido")
          h4 Proceso definido
          p Tarea o actividad llevada a cabo durante el proceso.
          .row.justify-content-center
            .col-lg-2.col-4
              img(src="@/assets/curso/tema6/img16.svg")
        .BGR19A.p-4(titulo="Conector")
          h4 Conector
          p Conexión con otro proceso.
          .row.justify-content-center
            .col-lg-2.col-4
              img(src="@/assets/curso/tema6/img17.svg")
        .BGR19A.p-4(titulo="Conector de página")
          h4 Conector de página
          p Indica que debe moverse de una página.
          .row.justify-content-center
            .col-lg-2.col-4
              img(src="@/assets/curso/tema6/img18.svg")

    p Los diagramas de flujo se usan en varias áreas del conocimiento, como la programación de cómputo, la administración de empresas, la psicología, y prácticamente todas las áreas que requieran plasmar situaciones que impliquen acciones o conceptos mapeados.

    .BGR13.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-6.col-10.order-lg-1.order-2(data-aos="fade-right")
          img(src="@/assets/curso/tema6/img19.svg")
        .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          .h4.mb-0 Existen múltiples herramientas para el desarrollo de diagramas de flujos, una de las más útiles es Visio de Microsoft, esta puede integrarse con Excel para que los diagramas estén mejor fundamentados en datos relacionados en una tabla.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p Las herramientas para el diseño de diagramas de flujo han tomado un papel protagónico al momento del análisis y diseño de soluciones digitales para la transformación digital en las organizaciones.
        p Actualmente, los cambios en el entorno son más rápidos y transformadores, la adaptación de los negocios a estos cambios no puede afectar sus objetivos; por el contrario, invita a mejorar metas mediante el BPM (#[em Business Process Management] - Administración de procesos de negocio), que aporta métodos y técnicas para la integración de los procedimientos del negocio con la tecnología, por lo que ha venido adquiriendo fuerza en las organizaciones y se reconoce como un conjunto de mejores prácticas para la gestión de procesos, así como una serie de herramientas y tecnologías utilizadas para diseñar, representar, automatizar, analizar y controlar todo lo relacionado con los procesos de las organizaciones.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema6/img20.png")

    p Existen aplicaciones integradas a este modelo que ayudan a desarrollar sistemas de información y automatización de tareas para optimizar los procesos con tecnología; se mencionan algunas:

    .row.justify-content-center.mb-4
      .col-xl-3.col-lg-4.col-md-6.col-8.px-3.mb-4(data-aos="fade-right")
        .row.align-items-center
          .col-4.BG10.hg-06.p-4
            img(src="@/assets/curso/tema3/img06.svg")
          .col-8.BG02.hg-06.p-4
            p.mb-0 #[em BPM sense en línea]
      .col-xl-3.col-lg-4.col-md-6.col-8.px-3.mb-4(data-aos="flip-right")
        .row.align-items-center
          .col-4.BG10.hg-06.p-4
            img(src="@/assets/curso/tema3/img06.svg")
          .col-8.BG02.hg-06.p-4
            p.mb-0 #[em Monday.com]
      .col-xl-3.col-lg-4.col-md-6.col-8.px-3.mb-4(data-aos="flip-left")
        .row.align-items-center
          .col-4.BG10.hg-06.p-4
            img(src="@/assets/curso/tema3/img06.svg")
          .col-8.BG02.hg-06.p-4
            p.mb-0 #[em Process Street]
      .col-xl-3.col-lg-4.col-md-6.col-8.px-3.mb-4(data-aos="fade-left")
        .row.align-items-center
          .col-4.BG10.hg-06.p-4
            img(src="@/assets/curso/tema3/img06.svg")
          .col-8.BG02.hg-06.p-4
            p.mb-0 #[em Wrike]
      .col-xl-3.col-lg-4.col-md-6.col-8.px-3.mb-4(data-aos="fade-right")
        .row.align-items-center
          .col-4.BG10.hg-06.p-4
            img(src="@/assets/curso/tema3/img06.svg")
          .col-8.BG02.hg-06.p-4
            p.mb-0 #[em Colmena]
      .col-xl-3.col-lg-4.col-md-6.col-8.px-3.mb-4(data-aos="flip-right")
        .row.align-items-center
          .col-4.BG10.hg-06.p-4
            img(src="@/assets/curso/tema3/img06.svg")
          .col-8.BG02.hg-06.p-4
            p.mb-0 #[em Apiano]
      .col-xl-3.col-lg-4.col-md-6.col-8.px-3.mb-4(data-aos="flip-left")
        .row.align-items-center
          .col-4.BG10.hg-06.p-4
            img(src="@/assets/curso/tema3/img06.svg")
          .col-8.BG02.hg-06.p-4
            p.mb-0 #[em Kissflow]
      .col-xl-3.col-lg-4.col-md-6.col-8.px-3.mb-4(data-aos="fade-left")
        .row.align-items-center
          .col-4.BG10.hg-06.p-4
            img(src="@/assets/curso/tema3/img06.svg")
          .col-8.BG02.hg-06.p-4
            p.mb-0 #[em PNMSoft]
      .col-xl-3.col-lg-4.col-md-6.col-8.px-3.mb-4(data-aos="fade-right")
        .row.align-items-center
          .col-4.BG10.hg-06.p-4
            img(src="@/assets/curso/tema3/img06.svg")
          .col-8.BG02.hg-06.p-4
            p.mb-0 #[em Pipefy]
      .col-xl-3.col-lg-4.col-md-6.col-8.px-3.mb-4(data-aos="flip-right")
        .row.align-items-center
          .col-4.BG10.hg-06.p-4
            img(src="@/assets/curso/tema3/img06.svg")
          .col-8.BG02.hg-06.p-4
            p.mb-0 #[em Bizagy]
      .col-xl-3.col-lg-4.col-md-6.col-8.px-3.mb-4(data-aos="flip-left")
        .row.align-items-center
          .col-4.BG10.hg-06.p-4
            img(src="@/assets/curso/tema3/img06.svg")
          .col-8.BG02.hg-06.p-4
            p.mb-0 #[em Plataforma Nintex]
      .col-xl-3.col-lg-4.col-md-6.col-8.px-3.mb-4(data-aos="fade-left")
        .row.align-items-center
          .col-4.BG10.hg-06.p-4
            img(src="@/assets/curso/tema3/img06.svg")
          .col-8.BG02.hg-06.p-4
            p.mb-0 #[em Rastreador de comindware]
      .col-xl-3.col-lg-4.col-md-6.col-8.px-3.mb-4(data-aos="fade-right")
        .row.align-items-center
          .col-4.BG10.hg-06.p-4
            img(src="@/assets/curso/tema3/img06.svg")
          .col-8.BG02.hg-06.p-4
            p.mb-0 #[em Tibco]  

</template>

<script>
export default {
  name: 'Tema6',
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
