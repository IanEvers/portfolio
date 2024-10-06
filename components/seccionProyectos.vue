<template>
  <section class="min-h-screen pt-10 pb-10 text-center seccionProyectos z-30" id="proyectos">
    <h1 class="titulo mb-12 sm:mb-24">proyectos</h1>

    <div class="flex flex-wrap justify-center">
      
      <TarjetaProyecto v-for="proyecto in proyectos" :key="proyecto.titulo"
        :titulo="proyecto.titulo"
        :descripcion="proyecto.descripcion"
        :imagen="proyecto.imagen"
        :url="proyecto.url"
        :enDesarrollo="proyecto.enDesarrollo"
      />

    </div>
  </section>
</template>

<script>
export default {
  name: 'SeccionProyectos',
  data: function () {
    return {
      proyectos: 
      [ 
        {
          titulo: "Campus Homeopático",
          descripcion: "Un pequeño campus donde los socios de la Escuela Homeopática Tomás Paschero pueden ver sus clases. Hecho con Nuxtjs, Vuejs y Strapi.",
          imagen: "/campusPaschero.webp",
          url: "https://campus.escuelapaschero.org.ar/"
        },

        {
          titulo: "Arriba El Taller",
          descripcion: "Una pequeña página web que hice para Lea, profesora de un taller de arte para niños.",
          imagen: "/MapaLea.webp",
          url: "https://www.arribaeltaller.com.ar/"
        },

        {
          titulo: "Piano-midi",
          descripcion: "Una mini webapp para poder hacer dibujos con el piano.",
          imagen: "/piano-midi.webp",
          url: "https://piano-midi-ianevers.vercel.app/",
          enDesarrollo: true
        },

        {
          titulo: "Portfolio",
          descripcion: "Esta página XD. La hice para aprender a hacer una página con Three JS. El modelo de mi cara lo hice con un plugin de Blender, no sé modelar.",
          imagen: "/portfolio.webp",
          url: "https://ian-broker.vercel.app/"
        },
        
        {
          titulo: "Portfolio de Sofía Merlino",
          descripcion: "Una página web para mostrar trabajos de diseño de Sofía Merlino.",
          imagen: "/sofia.webp",
          url: "https://sofia-merlino.vercel.app/",
        },

        {
          titulo: "Argentina al revés",
          descripcion: "Un jueguito web de adivinar las provincias argentinas.",
          imagen: "/Flag_of_Argentina.svg.webp",
          url: "https://arg-al-reves.vercel.app/",
        },

        {
          titulo: "Prode - Elecciones 2023",
          descripcion: "Una pequeña Web App para que la gente suba sus predicciones para las elecciones 2023",
          imagen: "/prode.png",
          url: "https://prode-elecciones.vercel.app/",
        },

        {
          titulo: "Foto de fotos",
          descripcion: "Una herramienta para hacer imagenes hechas de otras imagenes, escrito en Rust.",
          imagen: "/imagen_rust.webp",
          url: "https://github.com/IanEvers/foto-de-fotos",
        },

        {
          titulo: "Overtime Basquet",
          descripcion: "Una página para un torneo de basquet amateur. Realizada en mi trabajo para dualfyre.com.",
          imagen: "/overtime.webp",
          url: "https://overtimebasquet.com",
        },

        {
          titulo: "The brand side",
          descripcion: "Una página web para una agencia de diseño zarpada.",
          imagen: "/brand-side.png", 
          url: "https://brandside.studio/",
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.seccionProyectos {
  background-color: #3f8379;
}

.titulo {
  font-size: clamp(3rem, 10vw, 7rem);
  text-transform: capitalize;
  line-height: 1;
  color: white;
}

</style>