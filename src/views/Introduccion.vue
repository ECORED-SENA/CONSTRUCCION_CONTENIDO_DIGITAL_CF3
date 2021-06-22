<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-4
      .col-lg-7.mb-2
        p Llegó la hora de poner en práctica los conocimientos adquiridos, para producir piezas de contenido gráfico en 
          strong Figma, 
          | algunas piezas de audio en 
          strong Audacity 
          | y, finalmente, la producción audiovisual, integrando todos los elementos en 
          strong CapCut.
        p El proyecto que se va a desarrollar, en este caso, es para la empresa de domicilios “Voy Llegando”, la cual requiere piezas digitales para iniciar su promoción en las redes sociales, definiendo como 
          strong.etiqueta objetivo de comunicación,
          | la promoción de la marca, sus valores y sus servicios.
        p Después de tener claro el objetivo de comunicación para “Voy Llegando”, se crea una planeación de contenido como lo muestra la tabla 1 que define las primeras piezas digitales que se deberán producir.   
      .col-lg-5.mb-2
        figure
          img(src='@/assets/curso/imagen-intro.svg', alt='Imagen decorativa') 

    
    .titulo-sexto.color-acento-contenido
      h5 Tabla 1
    
    .tabla-b.color-acento-contenido.mb-5
      .tabla-b__header
        h4.mb-0 CALENDARIO
      table
        thead.tabla-b__header2.text-white
          tr
            td 
              h5.mb-0 Red social
            td 
              h5.mb-0 Objetivo de comunicación
            td 
              h5.mb-0 Tipo de contenido 
            td 
              h5.mb-0 Guión 
            td 
              h5.mb-0 Copy
            td 
              h5.mb-0 Fecha
            td 
              h5.mb-0 Observaciones                
        tbody
          tr
            td.red-social
              i.fab.fa-whatsapp
              i.fab.fa-instagram
              i.fab.fa-facebook
            td Informar
            td Identificador visual
            td Voy Llegando 
              br 
              | Domicilios 
              br 
              | Confiables 
              br
              | Rápidos 
              br
              | Seguros
            td - - -
            td 1 septiembre 2021
            td Logo minimalista, que se pueda adaptar a cualquier tipo de contenido.
          tr
            td.red-social
              i.fab.fa-whatsapp
              i.fab.fa-instagram
              i.fab.fa-facebook 
            td Promocionar
            td Historia
            td Servicio 24 horas +573001234567
            td - - -
            td 1 septiembre 2021
            td Historia tipo Poster.
          tr
            td.red-social 
              i.fab.fa-instagram
            td Presentar servicios
            td Post carrusel Instagram 
            td Compras
              br
              | Pagos
              br 
              | Comisiones
              br 
              | Mensajería
            td #VoyLlegando, servicio de domicilios, rápidos, confiables y seguros #24h  
            td 1 septiembre 2021
            td 4 imágenes con el texto del servicio.
          tr
            td.red-social
              i.fab.fa-whatsapp
              i.fab.fa-instagram
              i.fab.fa-facebook  
            td Presentar servicios
            td Historia
            td Compras
              br 
              | Pagos
              br
              | Comisiones
              br
              | Mensajería
              br
              | Servicio 24 horas
            td - - -
            td 1 septiembre 2021
            td Versión animada del carrusel.
         



    
    p.mb-0 Cuando el calendario se encuentre listo, ¡manos a la obra!
    strong ¡Muchos éxitos en sus prácticas!      


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
