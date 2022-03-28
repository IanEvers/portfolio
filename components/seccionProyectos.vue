<template>
  <section class="min-h-screen pt-10 pb-10 text-center seccionProyectos z-30" id="proyectos">
    <h1 class="titulo mb-5 sm:mb-12">proyectos</h1>

    <div class="flex flex-wrap justify-center">
      
      <TarjetaProyecto v-for="proyecto in proyectos" :key="proyecto.titulo"
        :titulo="proyecto.titulo"
        :descripcion="proyecto.descripcion"
        :imagen="proyecto.imagen"
        :url="proyecto.url"
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
          imagen: "/MapaLea.png",
          url: "https://www.arribaeltaller.com.ar/"
        },

        {
          titulo: "Piano-midi",
          descripcion: "Una mini webapp para poder hacer dibujos con el piano. Actualmente en desarrollo.",
          imagen: "/piano-midi.jpg",
          url: "https://piano-midi-ianevers.vercel.app/"
        },

        {
          titulo: "Portfolio",
          descripcion: "Esta página XD. La hice para aprender a hacer una página con Three JS. El modelo de mi cara lo hice con un plugin de Blender, no sé modelar.",
          imagen: "/portfolio.png",
          url: "https://ian-broker.vercel.app/"
        },

        {
          titulo: "Bot de tuiter",
          descripcion: "Un bot que genera noticias falsas y las sube a tuiter, escrito en python. No había foto jajaj.",
          imagen: "/podesta.jpg",
          url: "https://github.com/IanEvers/twitterBot"
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