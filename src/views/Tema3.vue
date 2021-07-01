<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Creación de video
    
    .row.mb-5
      .col-lg-7.mb-2(data-aos="fade-right")
        p Crear un video es sencillo, solo se deben tener en cuenta el guion y los demás consejos que se aprendieron anteriormente. Es así como en esta etapa de producción de contenido digital, se integran las piezas gráficas, audios y videos, para un resultado audiovisual que cumpla con las expectativas; todo esto realizado a partir del uso de un dispositivo móvil.
      .col-lg-5.mb-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/imagen-tema3.svg', alt='Imagen decorativa') 
    
    p.mb-4(data-aos="fade") Para iniciar, se recomienda tener todos los recursos copiados en el dispositivo móvil. Luego, observar el siguiente video, el cual nos presentará paso a paso, la creación de un video.

    .row.justify-content-center
      .col-lg-10(data-aos="fade-down")
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/erk3tP-avF8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    h3(data-aos="fade-right") ¡Ahora es su turno!

    p.mb-5(data-aos="fade") Teniendo claro el proceso para la creación de un video, producir uno y los resultados del proyecto se pueden compartir en las diferentes redes sociales, 
      span.etiqueta etiquetando 
        strong @SENAComunica y usando el hashtag #HabilidadesDigitalesSena. 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.cajon.color-primario
        .row.justify-content-center.align-items-center
          .col-lg-2.col-4.p-lg-3.p-2.py-4
            figure
              img(src='@/assets/curso/publicalo.svg', alt='Icono de notas')
          .col-lg-8.p-lg-4.px-4
            h4 Recordar
            p Se puede crear todo lo que se pueda imaginar, lo importante es llevar siempre un orden y utilizar las herramientas correctas.
            



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    indicador1: true,
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

<style lang="sass" scoped></style>
