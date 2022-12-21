<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Elicitación de requisitos
    
    .cajon-b.color-secundario.cajon-end.p-3.mb-4
      .row.justify-content-between.align-items-center
        .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
          p.mb-0 El propósito de la elicitación de requerimientos es ganar conocimientos relevantes del problema, que se utilizarán para producir una especificación formal del #[em software] necesario para resolverlo.
        .col-lg-1.col-2.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema4/img01.svg")
        
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema4/img02.png")
      .col-lg-7(data-aos="fade-left")
        .bloque-texto-b.color-primario.p-4.mb-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="font-size: 2em")
            h4.mb-0 Un problema puede ser definido como la diferencia entre las cosas como se perciben y las cosas como se desean<br>
            p Gause y Weinberg 1989.
            i.fas.fa-quote-right(style="font-size: 2em")
        p.mb-0 Aquí se ve la importancia que tiene una buena comunicación entre desarrolladores y clientes; de esta comunicación con el cliente depende que sus necesidades queden claras. Además, al final de la fase de análisis de requerimientos, el analista podría llegar a tener un conocimiento extenso en el dominio del problema.

    p.mb-5 La elicitación de requisitos es la actividad que se considera como el primer paso en un proceso de ingeniería de requisitos; su significado hace referencia a la puesta en marcha de técnicas que sirven para recopilar conocimiento o información y los objetivos de esta fase de elicitación, son:

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .BGR03.hg-04.p-4
          .row.mb-4
            .col-xl-3.col-md-4.col-5
              img(src="@/assets/curso/tema4/img03.svg")
          p.mb-0 Conocer el dominio del problema para poder comunicarse con clientes y usuarios y entender sus necesidades.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="flip-up")
        .BGR12.hg-04.p-4
          .row.mb-4
            .col-xl-3.col-md-4.col-5
              img(src="@/assets/curso/tema4/img04.svg")
          p.mb-0 Conocer el sistema actual (manual o informatizado) y sus aspectos positivos y negativos.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .BGR03.hg-04.p-4
          .row.mb-4
            .col-xl-3.col-md-4.col-5
              img(src="@/assets/curso/tema4/img05.svg")
          p.mb-0 Identificar las necesidades, tanto explícitas como implícitas, de clientes y usuarios y sus expectativas sobre el sistema a desarrollar.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Planeación
    
    p La planeación busca definir las tareas a realizar para elegir y planificar las técnicas a emplear durante la actividad de elicitación de la fase de ingeniería de requisitos del desarrollo de #[em software]. En la siguiente tabla se presenta una relación de estas tareas y sus correspondientes procesos.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Tabla 7
          span Ejemplos de SRS diligenciados
        
        .tabla-a.color-acento-contenido(data-aos="zoom-in")
          table
            caption Nota: tomado de Durán y Bernárdez (2001)
            thead(style="border-color: #993A2B")
              tr
                th(style="background-color: #FF6148;").text-center Tareas
                th(style="background-color: #FF6148;").text-center Proceso
            tbody    
              tr
                td #[b A]. Identificar las fuentes.
                td Lista de fuentes de requerimientos.
              tr
                td #[b B]. Identificar interesados del producto.
                td Categorías de los interesados (#[em stakeholder]).
              tr
                td #[b C]. Matriz #[em stakeholders] (Describir necesidades y criterios de éxito).
                td Perfil de #[em stakeholder].
              tr
                td #[b D]. Revisar técnicas.
                td Identificar combinaciones de técnicas entrevistas, grupos focales, encuestas, prototipos.
              tr
                td #[b E]. Captura de interesados.
                td Plan de captura de interesados.
    
    p A continuación, se describen los procesos relacionados con las tareas para elicitación de requisitos:

    
    .row.justify-content-center.align-items-center.BGR03.p-4.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        .h4 A. Identificar las fuentes de requerimientos.
        p Existe un conjunto de fuentes de requisitos en cada proyecto de desarrollo de #[em software], así, usuarios y expertos abastecen de información detallada acerca del problema y necesidades del usuario. Los procesos y sistemas existentes representan, también, fuentes de requisitos; además, la documentación existente como manuales, formularios y reportes, incluso especificaciones de requisitos anteriores, puede proveer información útil acerca de la organización y su entorno.
        p En el proceso de esta actividad se identifican:
        ul.lista-ul--color
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | Interesados relevantes.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | Documentación que se puede usar como fuente de información de los requerimientos.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | Fuentes de información externas.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema4/img06.svg")

    p Las fuentes de requerimientos incluyen los propietarios del problema, los #[em stakeholders], documentos y otros sistemas (Pearson, 2002). En ese sentido, los requerimientos pueden obtenerse en diversas fuentes que pueden clasificarse en gente (people), productos o documentos, pero cualquiera sea la fuente de esos requerimientos deben ser chequeados con los #[em stakeholders].
    p Estas fuentes de requerimientos, se pueden clasificar en:

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta-avatar-b.mb-4(data-aos="fade-right")
          .tarjeta-avatar-b__img(style="min-width: 10%; left: -5%")
            img(src='@/assets/curso/tema4/img07.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR13.p-4
            .h4.ms-5 Fuentes primarias
            p.ms-5.mb-0 Aportan material de primera mano (es protagonista o testigo de los hechos), estas fuentes contienen información original, que ha sido publicada por primera vez y que no ha sido filtrada, interpretada o evaluada por nadie más.
        .tarjeta-avatar-b.mb-4(data-aos="fade-right")
          .tarjeta-avatar-b__img(style="min-width: 10%; left: -5%")
            img(src='@/assets/curso/tema4/img08.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR13.p-4
            .h4.ms-5 Fuentes secundarias
            p.ms-5.mb-0 Toman y reproducen la información que le aportó una fuente primaria. Son las que contienen información primaria, sintetizada y reorganizada y están especialmente diseñadas para facilitar y maximizar el acceso a las fuentes primarias o a sus contenidos. Parten de datos preelaborados, como pueden ser datos obtenidos de anuarios estadísticos, internet, medios de comunicación, bases de datos procesadas con otros fines, artículos y documentos relacionados con un tema, libros, tesis, informes oficiales, etc.
        .tarjeta-avatar-b.mb-4(data-aos="fade-right")
          .tarjeta-avatar-b__img(style="min-width: 10%; left: -5%")
            img(src='@/assets/curso/tema4/img09.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR13.p-4
            .h4.ms-5 Fuentes terciarias
            p.ms-5.mb-0 Son guías físicas o virtuales que contienen información sobre las fuentes secundarias. Forman parte de la colección de referencia de una biblioteca; facilitan el control y acceso a toda la gama de repertorios de referencia, como las guías de obras de referencia, o a un solo tipo, como las bibliografías.

    p Por otra parte, las fuentes de información, pueden ser orales, escritas o de otro tipo, dependiendo de cómo se transmitan los datos. A continuación, se pueden revisar algunos ejemplos de fuentes de información.

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-10
        img(src='@/assets/curso/tema4/img10.svg')
    
    .row.justify-content-center.align-items-center.BGR13.p-4.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        .h4 B. Identificar interesados del producto.
        p Uno de los primeros pasos en el proceso es el análisis e identificación de todas las personas relevantes que tienen un grado de interés en el proyecto. 
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="font-size: 2em")
            h4.mb-0 Los interesados (#[em stakeholders]), son los individuos y organizaciones que están relacionados activamente en un proyecto de #[em software]; tienen influencia directa o indirecta sobre los requisitos, o sus intereses se ven afectados por el proyecto.<br>
            p Baar, 2006, Ventura, 2002.
            i.fas.fa-quote-right(style="font-size: 2em")
        p.mb-0 En resumen, son grupos o individuos que están interesados en el producto de #[em software] que se está desarrollando y necesitarán estar informados acerca del progreso, conflictos, cambios y prioridades del proceso de desarrollo del producto.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema4/img11.svg")

    p Los #[em stakeholders] se dividen en dos grupos:
    
    .row.justify-content-center.mb-4
      .col-lg-10
        hr
        .row.justify-content-center.mb-4(data-aos="fade-right")
          .col-lg-1.col-2
            img(src="@/assets/curso/tema4/img12.svg")
          .col
            .h4 Primarios
            p.mb-0 Son aquellas personas indispensables para el correcto funcionamiento de la organización, y tienen una relación económica directa con la empresa. Estos pueden ser sus socios, clientes y accionistas.
        hr
        .row.justify-content-center(data-aos="fade-right")
          .col-lg-1.col-2
            img(src="@/assets/curso/tema4/img13.svg")
          .col
            .h4 Secundarios
            p.mb-0 Son los entes que no participan directamente de la compañía, pero también son afectados por sus resultados. En este círculo se encuentran los competidores, el mercado y las personas en general.
        hr

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        .bloque-texto-c.color-primario.p-4
          i.fas.fa-quote-right
          h4.mb-2 A continuación, se listan roles más generales de las personas involucradas con sus términos similares, aunque cabe resaltar que existen leves diferencias entre ellos.
          p Sommerville y Sawyer, 2005.
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        ul.lista-ul--color
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | Líder de proyecto / Administrador de proyecto / Gerente de proyecto.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | Analista / Ingeniero de requisitos.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | Ingeniero de sistemas / Arquitecto.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            p.mb-0 Programador / Desarrollador / Ingeniero de #[em software].
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | Probador / Asegurador de la calidad.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | Administrador de bases de datos.
    
    p En la siguiente tabla se presentan los principales roles involucrados en el proceso de ingeniería de requisitos, así como las actividades en las que tienen mayor participación.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Tabla 2
          span Roles involucrados en la ingeniería de requisitos.
        
        .tabla-a.color-acento-contenido(data-aos="zoom-in")
          table
            caption Nota: tomado de Ventura (2002)
            thead(style="border-color: #993A2B")
              tr
                th(style="background-color: #FF6148;").text-center ROL
                th(style="background-color: #FF6148;").text-center Descripción
            tbody    
              tr
                th.text-center Cliente
                td Representa a la persona u organización que solicita la creación de un sistema a un área de desarrollo y quien lo paga. Es con quien se negocia el tiempo, costo y alcance del proyecto. Pueden o no ser usuarios del sistema.
              tr
                th.text-center Usuario
                td Son las personas que interactuarán con el sistema. Proporcionan información fundamental para el éxito del proyecto, ya que conocen y conviven con los procesos diarios.
              tr
                th.text-center Líder de proyecto
                td Por parte del equipo de desarrollo, es el representante ante el cliente. Es la persona responsable de completar el proyecto exitosamente con los recursos dados.
              tr
                th.text-center Analista
                td Su labor se enfoca en la ingeniería de requisitos, los identifica, analiza, modela y documenta. Además, establece contacto directo con los usuarios y utiliza diversas técnicas de comunicación y de recopilación de información para lograr su objetivo.
              tr
                th.text-center Programador
                td Con base en los requisitos recibidos de parte de los ingenieros de requisitos, el programador realiza la codificación para producir el sistema deseado.
              tr
                th.text-center Asegurador de la calidad
                td Garantiza el cumplimiento del proceso y de los estándares del producto. Enfocado en los requisitos, los verifica y valida para imprimir la calidad desde las primeras etapas del desarrollo. Paralelamente, prepara planes de prueba para esos requisitos del sistema.
              tr
                th.text-center Arquitecto
                td Es el responsable del diseño de alto nivel y es clave a la hora de precisar los atributos de calidad del producto.

    p Algunas de las técnicas que se pueden emplear para llevar a cabo la labor de análisis de los #[em stakeholders] incluyen entrevistas con los expertos, lluvia de ideas en grupo y lista de chequeo. Se espera que este grupo de personas identifiquen y caractericen a los #[em stakeholders] objetivamente, por tal motivo es recomendable involucrar a personas de diferentes contextos (Karisen, 2002 citado en Wessinger, 2012).

    .row.justify-content-between.BGR03.p-4.mb-5
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        .h4 C. Matriz de #[em stakeholders]
        p La utilización de esta <span style="color: #FF6148">#[b herramienta de análisis permite clasificar a los involucrados en el proyecto según sus niveles de interés y poder sobre él]</span>, lo que facilita la priorización de los #[em stakeholders] más importantes para desarrollar las estrategias de gestión correspondientes.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema4/img14.svg")
    
    .row.justify-content-center.mb-5(data-aos="zoom-out")
      TabsC.color-acento-contenido
        .BGR09.py-3.py-md-4(titulo="Importancia de la matriz de <em>stakeholders</em> en los proyectos de desarrollo")
          .row.justify-content-center
            .col-lg-7
              p.mb-0 En los proyectos de desarrollo, la gestión de los #[em stakeholders] es de suma importancia para alcanzar el éxito de los proyectos, ya que el proceso de identificación de los involucrados y la definición de sus niveles de interés e influencia en el proyecto, marcarán el punto de partida para desarrollar estrategias que posibilitan obtener el apoyo requerido para alcanzar los objetivos por los que el proyecto es emprendido. Es por ello, que la matriz de #[em stakeholders] es una herramienta indispensable desde el comienzo del proyecto mismo, ya que proveerá de la información necesaria para gestionar, adecuadamente, las expectativas de los involucrados a lo largo del proyecto, maximizando las influencias positivas y mitigando los impactos negativos potenciales derivados de estos. Además, dado el carácter social de los proyectos de desarrollo, involucrar a la sociedad civil no debe ser solo un ejercicio de comunicación unidireccional sino una oportunidad para lograr su apoyo al proyecto.
            .col-lg-4.col-4.mb-lg-0.mb-4
              img(src="@/assets/curso/tema4/img15.png")
        .BGR09.py-3.py-md-4(titulo="Proceso de armado de la matriz de <em>stakeholders</em>")
          .row.justify-content-center
            .col-lg-10
              p Para desarrollar la matriz de #[em stakeholders] es necesario identificar las entradas necesarias que proveerán la información con la que el líder y el equipo de proyecto trabajarán para desarrollar la matriz misma. Tales entradas pueden ser el acta de constitución de proyecto, documentos de adquisición, activos de los procesos y factores ambientales de la organización.
            .col-lg-8.col-10
              .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
                h5 Figura 2
                span Entradas, herramientas y técnicas, salidas
              img(src="@/assets/curso/tema4/img16.svg")

    .row.justify-content-end.mb-4(data-aos="fade-left")
      .col-lg-5
        a.anexo.mb-4(href="https://todopmp.com/cards/" target="_blank" style="background-color: #DAE0E3;")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo]. Para profundizar en detalle, se invita a consultar la Guía PMBOK 6 - 49 procesos, entradas, herramientas y salidas, como material complementario.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Descripción de los componentes de la matriz de #[em stakeholders]
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 630px; position: absolute" data-aos="fade-left")

    p A continuación, se presenta el concepto de cada uno de los componentes que estructuran la matriz de #[em stakeholders].

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      AcordionA(tipo="a" clase-tarjeta="BGR08")
        .row.justify-content-between(titulo="<em>Stakeholder</em>")
          .col-lg-8.order-lg-1.order-2
            p.mb-0 Es el nombre con el que se identifica al #[em stakeholder].
          .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img17.svg")
        .row.justify-content-between(titulo="Tipo")
          .col-lg-8.order-lg-1.order-2
            p.mb-0 Identifica si el #[em stakeholder] desempeña un rol interno o externo al proyecto mismo. Los #[em stakeholders] pueden ser internos, como el personal de las unidades ejecutoras, el personal administrativo o ejecutivo de la organización, el personal de las entidades financiadoras con alto nivel de poder e influencia en el proyecto y sus recursos; o externos como los beneficiarios del proyecto, las instituciones del sector o las organizaciones de la sociedad civil, quienes serán de un modo u otro impactados por los resultados del proyecto.
          .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img18.svg")
        .row.justify-content-between(titulo="Objetivo o resultados")
          .col-lg-8.order-lg-1.order-2
            p.mb-0 En este campo se enlistan los objetivos o resultados en los que el #[em stakeholder] muestra interés o en aquellos en los que puede influir positiva o negativamente con sus acciones. Esta información puede ser suministrada por el acta de constitución de proyectos, la estructura de la organización, la estructura de desglose de trabajo, los diferentes planes que conforman el proyecto, entrevistas a los mismos interesados, etc.
          .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img19.svg")
        .row.justify-content-between(titulo="Acciones posibles con impacto positivo / negativo")
          .col-lg-8.order-lg-1.order-2
            p.mb-0 Son las acciones que puede emprender el #[em stakeholder] y que pueden influir, negativa o positivamente, en los objetivos del proyecto en los que muestra su interés o en aquellos en los que puede influir debido a su jerarquía, estatus, recursos de los que dispone, entre otros.
          .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img20.svg")
        .row.justify-content-between(titulo="Estrategias")
          .col-lg-8.order-lg-1.order-2
            p.mb-0 Es un listado de acciones que se pueden emprender para obtener el apoyo necesario o evitar obstáculos por parte de los #[em stakeholders] durante la ejecución y conclusión del proyecto. Las estrategias se desarrollan considerando el tipo de #[em stakeholder], los objetivos en los que está interesado, el nivel de interés y poder que puede ejercer en el proyecto (figura 1) y las acciones posibles que podría emprender para afectar tanto positiva como negativamente al proyecto.
          .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img21.svg")
        .row.justify-content-between(titulo="Conclusiones")
          .col-lg-8.order-lg-1.order-2
            p.mb-0 Es la síntesis sobre puntos clave a considerar para gestionar de manera efectiva las expectativas de los #[em stakeholders]. Las conclusiones se obtienen de relacionar, analizar y sintetizar toda la información vertida en la matriz de #[em stakeholders].
          .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img22.svg")

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Categorización de #[em stakeholders] y estrategias de gestión de las expectativas
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 760px; position: absolute" data-aos="fade-left")

    p Como ya se había mencionado anteriormente, la matriz de stakholders es una herramienta muy útil que permite clasificar a los involucrados en el proyecto según sus niveles de interés e influencia, priorizando a los más importantes y desarrollando así las estrategias correspondientes para gestionar sus expectativas. De la misma manera, su clasificación puede cambiar durante la vida del proyecto. Así, aquellos que fueron inicialmente identificados con un alto nivel de influencia en el proyecto, pueden ser reclasificados a un nivel más bajo durante otras etapas de la vida del proyecto.
    p La categorización de los #[em stakeholders] se lleva a cabo una vez que la información sobre éstos esté completa. Para ello se puede utilizar una matriz de 2x2 en la que se pueda graficar el grado de poder e interés que tiene el involucrado en el proyecto, coadyuvando así a clasificar a cada #[em stakeholder] dentro del grupo para el cual se definen diferentes estrategias (figura 2).

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          h5 Figura 2
          span Ejemplo de matriz interés vs. influencia
      .col-lg-10.BGIMG01.p-4(data-aos="zoom-in")
        .row.justify-content-center
          .col-lg-10
            img(src="@/assets/curso/tema4/img23.svg")
      .col-lg-10.BG08.p-2
        p.mb-0 Nota: tomado de Gardnet et al. (1986)

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Técnicas e instrumentos para elicitar requisitos
    
    .cajon-b.color-secundario.cajon-end.p-3.mb-4
      .row.justify-content-between.align-items-center
        .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
          p Hay una variedad de técnicas propuestas para ingeniería de requerimientos (Herrera, 2003. p. 12), por lo que es primordial resaltar que estas técnicas pueden ser aplicables a las distintas fases del proceso de la ingeniería de requerimientos (IR), teniendo en cuenta las características propias del proyecto en particular que se esté desarrollándose para aprovechar al máximo su utilidad.
          p.mb-0 A continuación, se presentará una serie de técnicas destinadas a facilitar la elicitación correcta y efectiva de los requisitos dentro de un proceso de desarrollo.
        .col-lg-1.col-2.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema4/img24.svg")

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Entrevista 
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 170px; position: absolute" data-aos="fade-left")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .bloque-texto-c.color-primario.p-4
          i.fas.fa-quote-right
          h4.mb-2 La entrevista es una forma de recoger información de otra persona a través de una comunicación interpersonal que se lleva a cabo por medio de una conversación estructurada.
          p Braude, 2003.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema4/img25.png")
      
    p En las entrevistas se pueden identificar tres fases: #[b preparación, realización y análisis] (Piattini et al. 1996), como se puede observar en el siguiente gráfico.

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      TabsB.color-acento-contenido
        .py-4.py-md-5(titulo="Preparación" :icono="require('@/assets/curso/tema4/img26.svg')")
          .row.justify-content-center
            .col-lg-8.order-lg-1.order-2
              .h4 1. Preparación
              ul.lista-ul--color.ms-2
                li(style="margin-bottom: 2px")
                  i.fas.fa-caret-square-right(style="color: #FF6148")
                  | El entrevistador debe documentarse e investigar la situación de la organización, analizando los documentos de la empresa disponible.
              ul.lista-ul--color.ms-2
                li(style="margin-bottom: 2px")
                  i.fas.fa-caret-square-right(style="color: #FF6148")
                  | Se debe intentar minimizar el número de entrevistados, considerando las entrevistas de cortesía.
              ul.lista-ul--color.ms-2
                li(style="margin-bottom: 2px")
                  i.fas.fa-caret-square-right(style="color: #FF6148")
                  | Analizar el perfil de los entrevistados.
              ul.lista-ul--color.ms-2
                li(style="margin-bottom: 2px")
                  i.fas.fa-caret-square-right(style="color: #FF6148")
                  | Definir el objetivo y el contenido de la entrevista.
              ul.lista-ul--color.ms-2
                li(style="margin-bottom: 2px")
                  i.fas.fa-caret-square-right(style="color: #FF6148")
                  | Planificar el lugar y la hora en la que se va a desarrollar la entrevista (es conveniente realizarla en un lugar confortable).
              ul.lista-ul--color.ms-2
                li(style="margin-bottom: 2px")
                  i.fas.fa-caret-square-right(style="color: #FF6148")
                  | Algunos proponen enviar previamente el entrevistado un cuestionario y un pequeño documento de introducción al proyecto de desarrollo.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema4/img29.svg")
        .py-4.py-md-5(titulo="Realización" :icono="require('@/assets/curso/tema4/img27.svg')")
          .row.justify-content-center
            .col-lg-8.order-lg-1.order-2
              .h4 2. Realización
              Dentro de la realización de las entrevistas se distinguen tres etapas, tal como se expone en Piattini et al. (1996):
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta(styte="color: #000")
                    span a
                  p.mb-0 #[b Apertura]: presentarse e informar al entrevistado sobre la razón de la entrevista.
                li 
                  .lista-ol--cuadro__vineta(styte="color: #000")
                    span b
                  p.mb-0  #[b Desarrollo]: cumplir las reglas del protocolo, hay que llegar a un acuerdo sobre cómo se va a registrar la información obtenida.
              p Durante esta fase se pueden emplear distintas técnicas:
              .BGR04.p-4.mb-4
                ul.lista-ul--color.ms-2
                  li(style="margin-bottom: 2px")
                    i.fas.fa-caret-square-right(style="color: #FF6148")
                    p.mb-0 #[b Preguntas abiertas]: también denominadas de libre contexto (Gause y Weinberg, 1989), estas preguntas no pueden responderse con un "sí" o un "no", permiten una mayor comunicación y evitan la sensación de interrogatorio. Por ejemplo, "¿Qué se hace para registrar un pedido?", "Dígame qué se debe hacer cuando un cliente pide una factura" o “¿Cómo se rellena un recibo?".
                  li(style="margin-bottom: 2px")
                    i.fas.fa-caret-square-right(style="color: #FF6148")
                    p.mb-0 #[b Utilizar palabras apropiadas]: se deben evitar tecnicismos que no conozca el entrevistado y palabras o frases que puedan perturbar emocionalmente la comunicación (Goleman 1996, Goleman 1999).
                  li(style="margin-bottom: 2px")
                    i.fas.fa-caret-square-right(style="color: #FF6148")
                    p.mb-0 #[b Mostrar interés en todo momento]: es fundamental cuidar la comunicación no verbal (Davis, 1985) durante la entrevista: tono de voz, movimiento, expresión facial.
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta(styte="color: #000")
                    span c
                  p.mb-0  #[b Terminación]: se termina recapitulando la entrevista agradeciendo el esfuerzo y dejando abierta la posibilidad de volver a contactar para aclarar conceptos o bien citándole para otra entrevista.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema4/img30.svg")
        .py-4.py-md-5(titulo="Análisis" :icono="require('@/assets/curso/tema4/img28.svg')")
          .row.justify-content-center
            .col-lg-8.order-lg-1.order-2
              .h4 3. Análisis
              p Consiste en leer las notas, pasarlas en limpio, reorganizar la información, contrastarlas con otras entrevistas o fuentes de información, evaluar cómo ha ido la entrevista.
              p En estas entrevistas, el equipo de la ingeniería de requerimientos hace preguntas sobre el sistema que utilizan y sobre el sistema a desarrollar. Los requerimientos provienen de las respuestas a estas preguntas.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema4/img31.svg")

    p Las entrevistas se pueden clasificar fundamentalmente, en:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-9.order-lg-1.order-2
        AcordionA(tipo="b" clase-tarjeta="BGR09")
          div(titulo="Entrevista estructurada")
            p Las preguntas en esta entrevista se deciden, previamente, de acuerdo con el detalle de información requerida.
            ul.lista-ul--color.ms-2
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FF6148")
                | Recoge de forma sistemática y precisa la mayor información sobre los aspectos que quiere explorar.
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FF6148")
                | Las preguntas son prefijadas y definidas, las respuestas son esperadas e incluso se le dan al entrevistado en forma de varias opciones.
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FF6148")
                | Las etapas son planificadas.
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FF6148")
                | La interpretación de las respuestas se realiza de acuerdo con unos criterios establecidos.
            .row.justify-content-end.mb-4(data-aos="fade-left")
              .col-lg-5
                a.anexo.mb-4(:href="obtenerLink('downloads/Anexo1.pdf')" target="_blank" style="background-color: #DAE0E3;")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p #[b Anexo]. Entrevista estructurada.
          div(titulo="Entrevista semiestructurada")
            p Esta presenta un grado mayor de flexibilidad que la estructurada, debido a que parten de preguntas planeadas, que pueden ajustarse a los entrevistados. Su ventaja es la posibilidad de adaptarse a los sujetos con enormes posibilidades para motivar al interlocutor, aclarar términos, identificar ambigüedades y reducir formalismos.
            ul.lista-ul--color.ms-2
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FF6148")
                | Las preguntas, desarrollo e interpretación se planifican previamente, pero con un cierto grado de libertad de acción para abordar temas que pueden surgir durante la misma.
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FF6148")
                | Se suele utilizar un protocolo para facilitar al entrevistador seguir un modelo preestablecido.
          div(titulo="Entrevista no estructurada")
            p Las entrevistas no estructuradas suelen describirse como conversaciones mantenidas con un propósito en mente.
            ul.lista-ul--color.ms-2
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FF6148")
                | No se estructura ni planifica previamente.
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FF6148")
                | Es la más ágil y la que proporciona más información en general, pero requiere un cierto dominio por parte del entrevistador.
            p En el material complementario se pueden revisar ejemplo de entrevistas.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
        img(src="@/assets/curso/tema4/img32.svg")
          
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Encuesta 
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 160px; position: absolute" data-aos="fade-left")
 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema4/img33.png")
      .col-lg-7(data-aos="fade-left")
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="font-size: 2em")
            h4.mb-0 Los cuestionarios son herramientas ampliamente utilizadas para recoger datos de sondeos y pueden ser administradas sin la presencia del investigador. 
            p Cohen, 2011, p. 377.
            i.fas.fa-quote-right(style="font-size: 2em")
        p.mb-0 Pueden variar en cuanto a propósito, diseño y apariencia, y consisten en listas de preguntas escritas. Los individuos participantes en la investigación suelen leer los mismos listados de preguntas, por lo que esto permite consistencia y precisión al analizar las respuestas, además de facilitar el proceso. Una de las ventajas más destacadas de los cuestionarios es que simplifican el proceso de la obtención de datos, preguntando directamente a los individuos participantes para obtener datos de forma rápida y directa y se pueden aplicar a un gran número de sujetos.

    p Los datos que se obtienen a través de los cuestionarios suelen estar clasificados en dos categorías: hechos y opiniones (Denscombe, 2010, p. 156). La información relacionada con los hechos no requiere el juicio o la actitud personal de los sujetos participantes, pero la información obtenida a través de las opiniones implica creencias, puntos de vista y preferencias de los sujetos participantes.

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5(data-aos="flip-right")
        .row.justify-content-center.mb-4
          .col-3
            img(src="@/assets/curso/tema4/img34.svg")
        .h4.text-center Tipos de preguntas
        p.text-center La distinción más general entre los tipos de preguntas de los #[b cuestionarios, además de hechos y opiniones, es la de preguntas abiertas y cerradas]; las preguntas abiertas son aquellas en las que no se especifica ninguna respuesta para elegir y se deja abierta a la elección del participante para que escriba en ella. Las preguntas cerradas son las que ofrecen ya unas respuestas predeterminadas para su elección.
      .col-md.BGR14A.p-5(data-aos="flip-left")
        .row.justify-content-center.mb-4
          .col-2
            img(src="@/assets/curso/tema4/img35.svg")
        .h4.text-center Tipos de respuestas
        p.text-center Las respuestas de escala son las más comunes en los cuestionarios de investigación ya que implican al participante en una valoración o evaluación de las respuestas objetivo por medio de varias opciones en las que tienen que marcar dentro de una escala la importancia de cada una. Esa escala de valoración indica diferentes grados en una categoría y puede ser de diversa naturaleza; por ejemplo, puede valorar una categoría indicando si es “#[em bueno]” o “#[em malo]”, “#[em frecuente]” o “#[em infrecuente]”, “#[em importante]” o “#[em poco importante]” o también pueden valorar opiniones: “#[em completamente de acuerdo]” o “#[em en desacuerdo]”. El número de opciones más común es el de cinco, por ser un número impar, ya que existe una tendencia generalizada a seleccionar la opción intermedia (Dornyei, 2010).

    .row.justify-content-end.mb-4(data-aos="fade-left")
      .col-lg-5
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=mwnQuUi9014&ab_channel=JibaroX" target="_blank" style="background-color: #DAE0E3;")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo]. Tipos de preguntas.
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Observación 
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 190px; position: absolute" data-aos="fade-left")

    .row.justify-content-center.BGR03.p-4.mb-4
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema4/img36.svg")
      .col-lg-9(data-aos="fade-left")
        p Esta permite la obtención de datos para emprender una investigación de tipo cualitativo, no desde el punto de vista de lo que los sujetos dicen, sino que es la evidencia directa de lo que ve y percibe el investigador en un escenario de primera mano (Denscombe, 2010).
        p Por su parte, Selltiz (citado por Hernández, Fernández y Baptista, 2006, p. 229), al referirse a la observación, recomienda que para que esta se convierta en una técnica como tal, debe cumplir con cuatro condiciones:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta(styte="color: #000")
              span 1
            | Debe servir a un objeto formulado de investigación.
          li 
            .lista-ol--cuadro__vineta(styte="color: #000")
              span 2
            | Debe de ser planificada sistemáticamente.
          li 
            .lista-ol--cuadro__vineta(styte="color: #000")
              span 3
            | Debe estar controlada y relacionada con proposiciones generales.
          li 
            .lista-ol--cuadro__vineta(styte="color: #000")
              span 4
            | Debe ser sujeta a comprobaciones y controles de validez y fiabilidad.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
        p De acuerdo con lo anterior, se puede asumir que la observación:
        ul.lista-ul--color.ms-2
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | Tiene la característica de seguir normas, reglas y procedimientos.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | Permite a los sujetos y objetos establecer relaciones de manera directa.
      .col-lg-1.col-2.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema4/img37.png")

    p Para el caso de obtención de requerimientos del #[em software] la observación nos sirve para estudiar el entorno de trabajo de los usuarios, clientes e interesados de proyecto (#[em stakeholders]) y para documentar la situación actual de procesos de negocio.
    p En la siguiente figura, se pueden revisar los tipos de observación.

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 3
          span Tipos de observación
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema4/img38.svg")

    .row.justify-content-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema4/img39.png")
      .col-lg-7(data-aos="fade-left")
        p Ahora bien, para llevar a cabo la observación, el observador puede utilizar como instrumento #[b la guía de observación], la cual le permite situarse de manera sistemática en aquello que realmente es objeto de estudio para la investigación; también es el medio que conduce la recolección y obtención de datos e información de un hecho o fenómeno.
        .BGR15.p-4.mb-4
          p #[b Tamayo (2004) define a la guía de observación como]: un formato en el cual se pueden recolectar los datos en sistemática y se pueden registrar en forma uniforme, su utilidad consiste en ofrecer una revisión clara y objetiva de los hechos, agrupa los datos según necesidades específicas, se hace respondiendo a la estructura de las variables o elementos del problema (p. 172).
        p Para elaborar la guía de observación se ha de diseñar el contenido de la observación; el cual debe incluir por lo menos los siguientes aspectos:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta(style="color: #000")
              span 1
            | Datos y características de los sujetos a evaluar.
          li 
            .lista-ol--cuadro__vineta(style="color: #000")
              span 2
            | Propósitos de la observación o de las observaciones a realizar.
          li 
            .lista-ol--cuadro__vineta(style="color: #000")
              span 3
            | Temporalidad de la observación.

    .row.justify-content-start.mb-4(data-aos="fade-right")
      .col-lg-5
        a.anexo.mb-4(:href="obtenerLink('downloads/Anexo2.pdf')" target="_blank" style="background-color: #DAE0E3;")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo]. Ficha de observación.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Sesiones grupales 
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 245px; position: absolute" data-aos="fade-left")

    .row.justify-content-between.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p Es un proceso por el cual se llevan a cabo reuniones en grupo altamente estructuradas que convocan, en una misma sala, a los usuarios de un sistema, los propietarios del sistema y a los analistas durante un amplio periodo de tiempo. Los objetivos de esta técnica son esencialmente los mismos que los de las entrevistas, con la salvedad de necesitar más analistas para llevarlos a cabo.
        p.mb-0 Dentro de las sesiones de trabajo en grupo se encuentran técnicas como la lluvia de ideas, las sesiones JAD y el método Delphi.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema4/img40.png") 

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      AcordionA(tipo="b" clase-tarjeta="BGR04")
        .row.justify-content-center.align-items-center(titulo="Lluvia de ideas")
          .col-lg-2.col-4.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img41.svg")
          .col-lg-9
            p.mb-0 También denominada tormenta de ideas o incluso brainstorming. Faickney (1939) investigó sobre diferentes maneras de generar creatividad. Se percató de que la mejor manera de ser creativo en una empresa es a través de la interacción y el trabajo en equipo; todos juntos podían dar sus opiniones y sugerencias sobre un tema determinado. Creó de esta manera la lluvia de ideas.
        .row.justify-content-center.align-items-center(titulo="Sesiones JAD (Joint Application Design)")
          .col-lg-2.col-4.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img42.svg")
          .col-lg-9
            p Es un proceso usado para reunir requerimientos en el desarrollo de nuevos sistemas de información para una compañía. #[b El proceso JAD consiste en un taller donde los trabajadores del conocimiento y los especialistas en tecnologías de información se reúnen], algunas veces durante varios días, para definir y revisar los requerimientos de negocio para el sistema. Los asistentes incluyen oficiales de administración de alto nivel, quienes se aseguran de que el producto provea los reportes y la información requerida al final, esto actúa como “#[b un proceso de administración]” que permite que los departamentos de servicios de información corporativa trabajen más eficientemente con los usuarios en un marco de tiempo más reducido.
            p.mb-0 A través de los talleres JAD, los trabajadores del conocimiento y los especialistas en tecnologías de información pueden resolver cualquier dificultad o diferencias entre las posturas referentes al nuevo sistema de información. #[b El taller sigue una detallada agenda para lograr garantizar que todas las incertidumbres entre los grupos sean cubiertas y para ayudar a prevenir cualquier falla en la comunicación], estas fallas de comunicación pueden provocar repercusiones mucho más serias si no se identifican a tiempo. Al final, este proceso resultará en un nuevo Sistema de Información viable y orientado tanto a diseñadores como a usuarios.
        .row.justify-content-center.align-items-center(titulo="Método Delphi")
          .col-lg-2.col-4.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img43.svg")
          .col-lg-9
            p Es un método de estructuración de un proceso de comunicación grupal que consiste en la selección de un grupo de expertos a los que se les pregunta su opinión frente a ciertas temáticas.
            ul.lista-ul--color.ms-2
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FF6148")
                | Fase uno. Formulación del problema: se define el campo de investigación.
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FF6148")
                | Fase dos. Elección de expertos: el experto se elige según su preparación y su capacidad de proyección.
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FF6148")
                | Fase tres. Elaboración de cuestionarios: las preguntas deben hacerse de acuerdo con la temática que se quiere obtener.
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FF6148")
                | Fase cuatro. Desarrollo y explotación de resultados: el cuestionario se entrega a los expertos para ser contestado por ellos.

    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Herramientas para captura de requisitos
    
    .cajon-b.color-secundario.cajon-end.p-3.mb-4
      .row.justify-content-between.align-items-center
        .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
          p.mb-0 Existen varias herramientas para la captura de requisitos potenciales de un nuevo sistema o una actualización de #[em software], a continuación, se explican las más utilizadas:
        .col-lg-1.col-2.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema4/img44.svg")

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Diagrama de casos de uso 
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 315px; position: absolute" data-aos="fade-left")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Al momento de desarrollar un proyecto se debe pensar en cuáles serán las principales funcionalidades que el #[em software] debe permitir llevar a cabo y quiénes serán los que podrán ejecutar dichas funcionalidades. #[b La identificación de estos elementos se puede visualizar de manera efectiva a través de la elaboración de diagramas de casos de uso]; estos diagramas, que son elaborados durante las etapas iniciales de un proyecto, se convierten en referente para cada una de las etapas siguientes del desarrollo del proyecto.
        p Componentes. En los diagramas de casos de uso, se observan los siguientes componentes.
        .mb-4.d-flex
          .d-flex.flex-wrap.px-4(style="background-color: #993A2B; border-radius: 25px; padding: 10px")
            h4.col.mb-0.text-white(data-aos="fade-right") Actor
        p se representa mediante un “hombre de palo”. Este se emplea para indicar el tipo de usuario del sistema que podrá ejecutar alguna función.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema4/img45.svg")
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Caso de uso 
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 195px; position: absolute" data-aos="fade-left")

    p Se representa mediante un óvalo e indica una función que el sistema debe proveer.

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema4/img46.svg")
      .col-lg-8(data-aos="fade-left")
        p Para ejemplificar un proceso se puede emplear un verbo conjugado en infinitivo y que represente la función a realizar (administrar, gestionar, registrar, entre otros). A continuación, se presenta un ejemplo, en el cual se presenta un diagrama de casos de uso de la sistematización de un centro médico.
        ul.lista-ul--color.ms-2
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | Administrar datos pacientes.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | Administrar datos tratamientos.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | Gestionar citas.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | Generar reportes.

    .row.justify-content-center.mb-4
      .col-lg-10
        .mb-4.d-flex
          .d-flex.flex-wrap.px-4(style="background-color: #993A2B; border-radius: 25px; padding: 10px")
            h4.col.mb-0.text-white(data-aos="fade-right") Representación gráfica
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 2
          span Entradas, herramientas y técnicas, salidas
        .BGR09.p-4(data-aos="zoom-in")
          .row.justify-content-center
            .col-lg-10
              img(src="@/assets/curso/tema4/img47.svg")
    
    .row.justify-content-center.mb-4
      .col-lg-7.mb-lg-0.mb-4(data-aos="fade-right")
        .h4 Identificación de casos de uso
        p.mb-5 En el ejemplo anterior se observan los casos de uso identificados en el sistema, es decir, las funcionalidades que el sistema va a proveer (administrar datos pacientes, administrar datos tratamientos, gestionar citas, generar reportes).
        .h4 Identificación de actores
        p.mb-5 Los actores son los usuarios que podrán ejecutar los casos de uso, en el ejemplo anterior, se identificaron dos actores (médico y empleado).
        .h4 Documentación
        p.mb-0 La técnica de casos de uso requiere además de construir el diagrama de casos de uso, la descripción de estos. Esta descripción permite detallar el flujo de eventos que se da entre el Sistema y el Actor para llevar a cabo el caso de uso. A continuación, se presenta el formato diligenciado de acuerdo con el ejemplo del centro médico.
      .col-lg-5(data-aos="fade-left")
        .BG13.p-4
          .row.justify-content-center.mb-4
            .col-8
              img(src="@/assets/curso/tema4/img48.svg")
          .h4 Documentación caso de uso
          p A continuación, se presenta el formato diligenciado de acuerdo con el ejemplo del centro médico.
          .row.justify-content-end
            .col-auto
              a.boton.color-acento-botones.mb-4(:href="obtenerLink('downloads/Anexo4.pdf')" target="_blank" type="application/pdf")
                span Descargar
                i.fas.fa-file-download

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Historias de usuario
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 260px; position: absolute" data-aos="fade-left")

    p Las historias de usuario son utilizadas en los métodos agiles para la especificación de requisitos, son una descripción breve de una funcionalidad #[em software] tal y como la percibe el usuario (Cohn, 2004).
    p El formato para las historias de usuario Scrum se basan en una regla de tres palabras:

    .row.justify-content-center.mb-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 8
          span Regla de tres palabras
        .row.justify-content-center.align-items-center.BGR13.p-4.mb-4(data-aos="zoom-in")
          .col-lg-4.col-8.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img49.svg")
          .col-lg-4
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FF6148")
                | Como &lt;rol&gt;
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FF6148")
                | Quiero &lt;eventos&gt;
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FF6148")
                | Para &lt;funcionalidades&gt;

    p Así, el &lt;rol&gt; que se escoja que va a utilizar la aplicación #[em software], requiere de una &lt;Acción&gt; / &lt;evento&gt; que ocurra, porque se desea cubrir una &lt;funcionalidad&gt;. Corto y conciso, directo y claro.
    p En las siguientes figuras se presentan ejemplos de historias de usuario.

    .row.justify-content-center.mb-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 8
          span Regla de tres palabras
        .row.justify-content-center.BGR13.p-4.mb-4
          .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="flip-right")
            img(src="@/assets/curso/tema4/img50.svg")
          .col-lg-4(data-aos="flip-left")
            img(src="@/assets/curso/tema4/img51.svg") 
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Conversación para explicar mejor la historia de usuario
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 575px; position: absolute" data-aos="fade-left")

    p Como se mencionó anteriormente, las historias de usuario son una frase sencilla y concisa, sin embargo, eso no impide que se pueda abrir un diálogo (conversación) entre todos los miembros del equipo. De hecho, esta conversación se debe llevar a cabo para explicar mejor la propia historia de usuario y conseguir objetivos como:
    ul.lista-ul--color(data-aos="fade-right")
      li(style="margin-bottom: 2px")
        i.fas.fa-caret-square-right(style="color: #FF6148")
        | Detallar a mayor nivel como se realizará la solución.
      li(style="margin-bottom: 2px")
        i.fas.fa-caret-square-right(style="color: #FF6148")
        | Clarificar aspectos de valor, funcionamiento y técnicos.
      li(style="margin-bottom: 2px")
        i.fas.fa-caret-square-right(style="color: #FF6148")
        | Resolver las dudas que aparezcan.
    p Estas conversaciones llevarán a alcanzar acuerdos sobre los distintos puntos tratados, que quedarán reflejados en los criterios de aceptación y que permitirán validar cuando una historia de usuario está terminada.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Confirmación de los criterios de aceptación
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 470px; position: absolute" data-aos="fade-left")

    p Los criterios de aceptación, es decir, la confirmación. Se trata de criterios claros y específicos que todo el equipo debe comprender y que permitirán avaluar en el futuro si la implementación que se está desarrollando o las pruebas que se realicen están terminadas.
    p A continuación, un ejemplo de una historia de usuario usando plantilla.

    .row.justify-content-center.mb-5
      .col-lg-10.mb-4
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 10
          span Ejemplos de historias de usuario  
        .tabla-a.color-acento-contenido(data-aos="zoom-in")
          table
            thead(style="border-color: #993A2B")
              tr
                th(style="background-color: #FF6148;" colspan="5").text-center Enunciado de la historia
                th(style="background-color: #FF6148;" colspan="3").text-center Proceso
            tbody    
              tr
                th(style="background-color: #FFE7E3; font-size: 0.8em") Identificador (ID) de la historia
                th(style="background-color: #FFE7E3; font-size: 0.8em") Rol
                th(style="background-color: #FFE7E3; font-size: 0.8em") Características / Funcionalidad
                th(style="background-color: #FFE7E3; font-size: 0.8em") Razón / Resultado
                th(style="background-color: #FFE7E3; font-size: 0.8em") Número (#) de escenario
                th(style="background-color: #FFE7E3; font-size: 0.8em") Criterio de aceptación (Titulo)
                th(style="background-color: #FFE7E3; font-size: 0.8em") Contexto
                th(style="background-color: #FFE7E3; font-size: 0.8em") Evento
              tr
                td
                td
                td
                td
                td
                td
                td
                td
              tr
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
              tr
                td
                td
                td
                td
                td
                td
                td
                td
              tr
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
              tr
                td
                td
                td
                td
                td
                td
                td
                td
              tr
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
              tr
                td
                td
                td
                td
                td
                td
                td
                td
              tr
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
                th(style="background-color: #F2F2F2;")
      .col-lg-10(data-aos="fade-right")
        .row
          .col-auto
            a.anexo(:href="obtenerLink('downloads/Anexo3.xls')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-xml.svg")
              .anexo__texto
                p #[b Anexo]. Revisar el anexo Plantilla de Historias de Usuario, para analizar su estructura.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #083142; border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") #[em Storyboard]
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 180px; position: absolute" data-aos="fade-left")

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img52.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        .h4 ¿Qué es un #[em Storyboard]?<br>
        p.mb-0 Los #[em storyboards] son un tipo de prototipos muy utilizados, #[b consiste básicamente en ir mostrando en una secuencia de imágenes un proceso, acción o ejercicio que se puede realizar en el sistema una vez terminado], las imágenes van mostrando la evolución del sistema conforme el usuario interactúa con el sistema.

    .row.justify-content-between.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Con esta técnica se pretende crear diferentes vistas del sistema en las primeras etapas de su implementación de la manera más rápida y barata posible [SUT02].
        p Una forma muy común de ejemplificar los #[em storyboards] es con las revistas de cómics, ya que van mostrando una secuencia de imágenes en cuadros con un orden establecido que permiten entender la línea de la historia contada. La técnica #[em storyboard] permite generar modelos o esquemas visuales como esbozos de interfaces gráficas de usuario (GUI).
        p.mb-0 A continuación, se detallan las principales características de los #[em storyboards]:
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema4/img53.png")

    ul.lista-ul--color(data-aos="fade-right")
      li(style="margin-bottom: 2px")
        i.fas.fa-caret-square-right(style="color: #FF6148")
        | Se preserva el punto de vista del proceso del negocio.
      li(style="margin-bottom: 2px")
        i.fas.fa-caret-square-right(style="color: #FF6148")
        | Se puede validar un escenario.
      li(style="margin-bottom: 2px")
        i.fas.fa-caret-square-right(style="color: #FF6148")
        | Se pueden validar escenarios integradores logrando una visión global.
      li(style="margin-bottom: 2px")
        i.fas.fa-caret-square-right(style="color: #FF6148")
        | Son más fáciles de comprender por el usuario.
      li(style="margin-bottom: 2px")
        i.fas.fa-caret-square-right(style="color: #FF6148")
        | No genera falsas expectativas.
      li(style="margin-bottom: 2px")
        i.fas.fa-caret-square-right(style="color: #FF6148")
        | El usuario sigue trabajando con herramientas conocidas.
      li(style="margin-bottom: 2px")
        i.fas.fa-caret-square-right(style="color: #FF6148")
        | Son fáciles de mantener o adaptar a los cambios.
      li(style="margin-bottom: 2px")
        i.fas.fa-caret-square-right(style="color: #FF6148")
        | Permiten incorporar modificaciones durante la validación.
    
    p Las dos figuras siguientes muestran el ejemplo de un #[em storyboard] que representa un escenario de situación de vendedores de una empresa para explicar el cambio que sufrirá el trabajo, el primero representa la situación actual y el segundo como quedará con la implantación del sistema.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 11
          span Escenario representado en formato de #[em storyboard] que representa una situación típica tal y como se realiza actualmente
        figure(data-aos="flip-right")
          img(src="@/assets/curso/tema4/img54.jpg")
          figcaption Nota: Tomado de Granollers, Lorés y Perdrix (2002)
      .col-lg-5.col-10.mb-lg-0.mb-4
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-left")
          h5 Figura 12
          span Escenario representado en formato de #[em storyboard] que representa la misma situación anterior tal como quedará con la implementación del sistema
        figure(data-aos="flip-left")
          img(src="@/assets/curso/tema4/img55.jpg")
          figcaption Nota: Tomado de Granollers, Lorés y Perdrix (2002)

    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Herramientas de modelado
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema4/img56.png")
      .col-lg-7(data-aos="fade-left")
        .h5 Estas herramientas permiten crear un "simulacro" del sistema.
        p Las herramientas de modelado de sistemas informáticos se emplean para la creación de modelos de sistemas que ya existen o que se desarrollarán; estas herramientas permiten crear un "simulacro" del sistema, a bajo coste y riesgo mínimo. A bajo costo porque, es un conjunto de gráficos y textos que representan el sistema.
        p El Lenguaje Unificado de Modelado (UML, por sus siglas en inglés, Unified Modeling Language) es el lenguaje de modelado de sistemas de #[em software] más conocido y utilizado en la actualidad; UML es un lenguaje gráfico que permite especificar, modelar, construir y documentar los elementos que forman un sistema #[em software].

    p De otra parte, las herramientas CASE son un conjunto de programas y procesos “guiados”, que ayudan a los analistas, desarrolladores, ingenieros de #[em software] y diseñadores en una o todas las etapas que comprende un ciclo de vida, con el objetivo de facilitar el desarrollo de #[em software]. El objetivo general de estas herramientas es acelerar el proceso para el que han sido diseñadas, es decir, para automatizar o apoyar una o más fases del ciclo de vida del desarrollo de sistemas. CASE proporciona un conjunto de herramientas semiautomatizadas y automatizadas que están creando una nueva cultura de ingeniería en muchas empresas. Las herramientas CASE se diseñaron para aumentar la productividad en el desarrollo de #[em software] y reducir su costo.
    p Existen muchas herramientas para modelado tanto en libres como con derechos comerciales; a renglón seguido se listan las herramientas CASE más utilizadas:

    .row.mb-4
      .col-lg-4(data-aos="fade-right")        
        ul.lista-ul--color
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | ER win.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | ArgoUML.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | Easy Case.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | Oracle Designer.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | Power Designer.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | System Architect.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | SNAP.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | Gliffy (<a href="https://www.gliffy.com/" target="_blank" style="color: #2D679A">https://www.gliffy.com/</a>).
      .col-lg-4(data-aos="fade-left")
        ul.lista-ul--color
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | MagicDraw.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | Lucidchart.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | Papyrus Uml.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | Modelio.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | StarUml.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | Dia.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FF6148")
            | Mono Uml.
    
    p A continuación, se realizará una descripción del top 5 de las más utilizadas.

    .row.justify-content-center.mb-4(data-aos="zoom-out")
      TabsC.color-acento-contenido
        .row.justify-content-center.py-3.py-md-4(titulo="Gliffy")
          .col-12.mb-4
            p La aplicación en línea Gliffy es una herramienta de diagramas UML basada en la nube. Apareció por primera vez en 2006 y se trata de una herramienta de modelado que crea todo tipo de diagramas, tales como diagramas de flujo, diagramas de Venn y, por supuesto, diagramas UML. La herramienta en línea fue escrita en HTML5 y es bastante popular gracias a su rapidez de reacción. Es de anotar que antes de que Gliffy pasara por la fase beta en 2007, la empresa homónima cooperó con el grupo de #[em software] australiano Atlassian. Ya en 2006, su #[em software] de colaboración Confluence integró un plugin de Gliffy y, más tarde, el equipo de Gliffy desarrolló un plugin para Jira. Google Workspace y Drive de Google también integran esta herramienta UML.
          .col-lg-10.BG16.p-4
            .row.justify-content-center
              .col-lg-10
                img(src="@/assets/curso/tema4/img57.jpg")
          .col-lg-10.BG08.p-2
            p.mb-0 #[b Figura 13]. Herramienta Gliffy.
        .row.justify-content-center.py-3.py-md-4(titulo="ArgoUML")
          .col-12.mb-4
            p Ha sido durante mucho tiempo una de las herramientas UML gratuitas de código abierto más populares para el escritorio y aunque ya no se mantiene, muchos modeladores continúan usando el programa para tareas más pequeñas. Su #[em software] es multiplataforma, cuyo el requisito mínimo es Java 5 ArgoUML soporta todos los tipos de diagramas de la versión 1.4 de UML y perfiles UML. El programa también ofrece algunas formas decorativas que no forman parte del estándar UML.
            p Además, aunque esta herramienta UML está disponible como descarga gratuita, ArgoUML #[b soporta una amplia gama de lenguajes de programación] cuyo código puede generarse a partir de un diagrama. La ingeniería inversa también es posible para Java, C++, PHP, C# y SQL. El programa reconoce otros idiomas como Delphi o Ruby cuando los agrega como extensiones a la carpeta de archivos ArgoULM.
          .col-lg-10.BG16.p-4
            .row.justify-content-center
              .col-lg-10
                img(src="@/assets/curso/tema4/img58.jpg")
          .col-lg-10.BG08.p-2
            p.mb-0 #[b Figura 14]. Herramienta de modelado ArgoUML.
        .row.justify-content-center.py-3.py-md-4(titulo="MagicDraw")
          .col-12.mb-4
            p Esta aplicación de escritorio destaca por su diseño moderno y claro, así como por su variedad de funciones y la facilidad de su uso. Esta herramienta de diagramas UML ofrece además SysML, representación gráfica de procesos de negocio con BPMN (#[em Business Process Model and Notation]) y el marco de arquitectura UPDM (#[em United Profile for DoDAF/MODAF]).
            p MagicDraw también ofrece lenguaje de especificación OCL (#[em Object Constraint Language]), y XMI, que puede usar para exportar diagramas a otros programas sin pérdidas de información.
          .col-lg-10.BG16.p-4
            .row.justify-content-center
              .col-lg-10
                img(src="@/assets/curso/tema4/img59.jpg")
          .col-lg-10.BG08.p-2
            p.mb-0 #[b Figura 15]. Herramienta de modelado MagicDraw.
        .row.justify-content-center.py-3.py-md-4(titulo="StarUML")
          .col-12.mb-4
            p Es una herramienta para el modelamiento de #[em software] basado en los estándares UML (Unified Modeling Language) y MDA (Model Driven Arquitecture).
            p Da soporte completo al diseño UML mediante el uso de:
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FF6148")
                | Diagrama de casos de uso.
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FF6148")
                | Diagrama de clase.
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FF6148")
                | Diagrama de secuencia.
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FF6148")
                | Diagrama de colaboración.
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FF6148")
                | Diagrama de estados.
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FF6148")
                | Diagrama de actividad.
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FF6148")
                | Diagrama de componentes.
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FF6148")
                | Diagrama de despliegue.
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FF6148")
                | Diagrama de composición estructural (UML 2.0).
          .col-lg-10.BG16.p-4
            .row.justify-content-center
              .col-lg-10
                img(src="@/assets/curso/tema4/img60.jpg")
          .col-lg-10.BG08.p-2
            p.mb-0 #[b Figura 16]. Herramienta de modelado StarUML.
        .row.justify-content-center.py-3.py-md-4(titulo="Lucidchart")
          .col-12.mb-4
            p Herramienta para hacer diagramas UML #[em online] que permite comprender las complejidades en el código de forma más rápida y sencilla, pues automatiza el proceso de generación de un diagrama de clases. Simplemente elabora y personaliza los diagramas de secuencia en línea a partir del texto. Al ingresar el marcado en el diálogo emergente, Lucidchart generará automáticamente un diagrama de secuencia que cumple el estándar de PlantUML.
          .col-lg-10.BG16.p-4
            .row.justify-content-center
              .col-lg-10
                img(src="@/assets/curso/tema4/img61.jpg")
          .col-lg-10.BG08.p-2
            p.mb-0 #[b Figura 17]. Herramienta de modelado Lucidchart.

    separador
</template>

<script>
export default {
  name: 'Tema4',
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
