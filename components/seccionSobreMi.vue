<template>
  
  <section class="p-4 relative" id="sobreMi" @mousemove="this.$refs.escenaThreeJS.onDocumentMouseMove">
    <div class="tituloYSubtitulo">
      <h1 class="titulo">Ian Evers</h1>
      <p class="subtitulo"> <code> Developer </code> </p>
    </div>

    <p class="presentacion z-20"> Programador Web desde 2019.
    </p>
  
    <footer class="flex items-center justify-evenly z-20">
      <a href="https://github.com/IanEvers?tab=repositories" class="redSocial z-20" aria-label="github"> 
        <img src="/githubLogo.png" alt="github logo" class="redSocialImagen"> 
      </a>
      <a href="https://www.linkedin.com/in/ianevers/" class="redSocial z-20" aria-label="linkedin"> 
        <img src="/linkedin.png" alt="lnkedin logo" class="redSocialImagen">
      </a>
      <a href="mailto:iancitoevers@gmail.com"  class="redSocial z-20" aria-label="mail">
        <img src="/logoMail.png" alt="mail logo" class="redSocialImagen">
      </a>
    </footer>

    <EscenaThreeJS ref="escenaThreeJS"> </EscenaThreeJS>
  </section>

</template>

<script>
</script>

<style lang="scss" scoped>

#sobreMi {
  min-height: 90vh;
  flex: 1 1 auto;
}

.titulo {
  color: #54d1be;
  font-size: clamp(3rem, 10vw, 7rem);
  text-transform: uppercase;
  line-height: 1;
  margin-left: -5px;
}

.subtitulo {
  font-size: 2rem;
  color: #3f8379;
}

.presentacion {
  margin: 0.5rem 0;
  max-width: 700px;
  font-size: 1.05rem;
  color: #e3fffb;
}

.boton {
  background-color: #C7BEA2;
  border: 0;
  padding: .5rem;
}

.redSocialImagen {
  max-width: 50px;
  margin: 1rem;
}
.redSocialImagen:hover {
  opacity: 0.5;
}

@media (min-width: 768px) {
  section {
    display: grid;
    grid-template-columns: 
      minmax(1rem, 1fr)
      repeat(3, minmax(10rem, 50rem))
      minmax(1rem, 1fr);
    gap: 0.5rem;
    grid-auto-flow: dense;
  }

  .tituloYSubtitulo {
    grid-column: 2 / 4;
    grid-row: 1;
  }

  .titulo {
    margin-left: -10px;
  }

  footer {
    grid-column: 2;
    grid-row: 3;
    justify-content: start;
  }

  .presentacion {
    grid-column: 2 / 3;
    grid-row: 2;
    font-size: 1.2rem;
    max-width: 90%;
  }
}

</style>