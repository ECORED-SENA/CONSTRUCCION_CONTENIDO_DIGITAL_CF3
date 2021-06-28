<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Creación de audio
    
    .row.mb-4
      .col-lg-7.mb-2
        p Los anuncios publicitarios son recursos importantes para transmitir un mensaje. Un audio original que sea fácil de entender y que cumpla la función de informar y persuadir al cliente, será una excelente táctica a utilizar. Es así como “Voy Llegando” ya inició con la estrategia de publicidad, creando una imagen como se explicó anteriormente; pero, si se le agrega un audio, podría ser aún más interesante.
        p También es importante definir el medio por el cual se va a transmitir este anuncio; puede ser netamente visual, audiovisual, sonoro, etc.
        .cajon.color-primario2.p-4
          p La idea es hacerlo a través de una herramienta gratuita como 
            strong Audacity. 
            | Ingresar y descargar la aplicación Audacityteam https://www.audacityteam.org/ presionando el botón de descarga DOWNLOAD AUDACITY y realizar la respectiva instalación.
      .col-lg-5.mb-2
        figure
          img(src='@/assets/curso/imagen-tema1.svg', alt='Imagen decorativa') 


    .row.justify-content-center.mb-5
      .col-lg-10.cajon.color-primario
        .row.justify-content-center.align-items-center
          .col-lg-2.col-4.p-lg-3.py-4
            figure
              img(src='@/assets/curso/audio-curso.svg', alt='Icono sobre grabación de audio')
          .col-lg-8.p-lg-4.px-4
            p Seleccionar la opción Grabar previamente y crear un guion, el cual se leerá teniendo en cuenta los siguientes consejos:
            ul.lista.lista-ul--color.p-1.mt-2
              li 
                i.fas.fa-check
                p.mb-0 Seleccionar el micrófono con el que se va a grabar.
              li 
                i.fas.fa-check
                p.mb-0 No grabar cerca de las paredes, porque pueden generar eco y la voz podría escucharse muy lejos.
              li 
                i.fas.fa-check
                p.mb-0 Utilizar micrófono (auriculares). El micrófono incorporado en el PC puede grabar bien, pero los micrófonos externos lo hacen mejor. Para este proceso se recomienda tener distanciado el micrófono.


    .row.justify-content-center
      .col-lg-9
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
            .row.m-0.align-items-center.justify-content-between
              .col-lg-8.mb-4.mb-lg-0
                .bloque-texto-a__texto.p-4.comillas
                  p.mb-3 Para este proyecto, no se requieren piezas de audio complejas, así que se usará la grabación de un guion relativamente corto.
                  p.strong 
                    i.fas.fa-quote-left
                    strong  “Confiables, rápidos y seguros. Voy llegando domicilios” 
                    i.fas.fa-quote-right
              .col-lg-4      
                figure
                  img(src='@/assets/curso/imagen2-tema2.svg', alt='Icono sobre dos personas grabando') 

   
    p.mb-4 Se debe observar el siguiente video que enseña cómo crear el audio para el guion propuesto.

    .row.justify-content-center
      .col-lg-10
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/cgqq8gDEPHM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
    h3 ¡Ahora es su turno!
    p Teniendo claro el proceso para la creación de un audio, producir uno desarrollando los pasos descritos a continuación.

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row.align-items-center
        .col-md-3.px-lg-5.p-5
          figure
            img(src='@/assets/curso/icono-paso1-tema2.svg', alt='Icono de alistamiento')
        .col-md-9
          p Crear un guion acorde al proyecto.  
        
      .row.align-items-center
        .col-md-9
          p Grabar con cualquier dispositivo. 
        .col-md-3.px-lg-5.p-5
          figure
            img(src='@/assets/curso/icono-paso2-tema2.svg', alt='Icono de grabación')

      .row.align-items-center
        .col-md-3.px-lg-5.p-5
          figure
            img(src='@/assets/curso/icono-paso3-tema2.svg', alt='Icono de programa')
        .col-md-9
          p Editar con Audacity. 
        
      .row.align-items-center
        .col-md-9
          p Exportar a mp4.  
        .col-md-3.px-lg-5.p-5
          figure
            img(src='@/assets/curso/icono-paso4-tema2.svg', alt='Icono de mp4')
      


    p Los resultados del proyecto, se pueden compartir en las diferentes redes sociales
      span.etiqueta etiquetando 
        strong @SENAComunica y usando el hashtag #HabilidadesDigitales.  

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
