<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .cajon-b.color-secundario.cajon-end.p-3.mb-5
      .row.justify-content-between.align-items-center.mb-5
        .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
          p.mb-0 En este componente, se abordarán los conceptos y fundamentos para el análisis de requisitos, el proceso de elicitación, las metodologías de desarrollo, los modelos de procesos, la recolección de la información y la comunicación. Observe un video que contextualiza al respecto:
        .col-lg-1.col-2.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/intro/img01.svg")

    figure.mb-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
