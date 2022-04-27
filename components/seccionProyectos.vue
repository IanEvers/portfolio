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
          titulo: "Bot de tuiter",
          descripcion: "Un bot que genera noticias falsas y las sube a tuiter, escrito en python. No había foto jajaj.",
          imagen: "/podesta.jpg",
          url: "https://github.com/IanEvers/twitterBot"
        },

        {
          titulo: "Portfolio de Cata Rohde",
          descripcion: "Una página web para mostrar trabajos cinematográficos de catalina Rohde.",
          imagen: "/cataRohde.webp",
          url: "https://cata-rohde.vercel.app/"
        },
        
        {
          titulo: "Portfolio de Sofía Merlino",
          descripcion: "Una página web para mostrar trabajos de diseño de Sofía Merlino.",
          imagen: "/sofia.webp",
          url: "https://sofia-merlino.vercel.app/",
          enDesarrollo: true
        },

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