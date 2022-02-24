<template>

  <div>
    <header class="flex items-center justify-around">
      <img src="../static/logoDibujo.png" alt="" class="logo">
      <nav>
        <div class="links flex justify-around gap-8">
          <a class="link" href="#sobreMi"> Sobre Mi </a>
          <a class="link" href="#proyectos"> Proyectos </a>
          <a class="link" href="#contacto"> Contacto </a>
        </div>
      </nav>
    </header>

    <main class="m-4">
      <div class="tituloYSubtitulo">
        <h1 class="titulo">Ian Evers</h1>
        <p class="subtitulo">Developer</p>
      </div>
      <!-- <img src="../static/podesta.jpg" alt="ian evers" class="max-w-full imagenPrincipal"> -->
      <p class="presentacion"> Soy un buen pibe y me gusta hacer frontends.
        Trabajé por dos años en el Ejército Argentino como programador web, y ahora estoy buscando otra cosa. <br>
        Si les gustaría darme un laburito, pueden.
      </p>
   

      <footer class="flex items-center justify-center">
        <a href="" class="redSocial" aria-label="linkedin"> <img src="../static/githubLogo.png" alt="" class="redSocialImagen"> </a>
        <a href="" class="redSocial" aria-label="mail">     <img src="../static/logoMail.png" alt="" class="redSocialImagen">   </a>
        <a href="" class="redSocial" aria-label="github">   <img src="" alt="" class="redSocialImagen">                         </a>
      </footer>
    </main>
  </div>

</template>

<script>

</script>

<style lang="scss" scoped>

header {
  background-color: #C7BEA2;
}
.link {
  font-size: 1.2rem;
}
.titulo {
  color: #524d3e;
  font-size: clamp(3rem, 10vw, 7rem);
  text-transform: uppercase;
  line-height: 1;
}

.link:hover {
  color: black;
  transform: scale(1.02);
  transition: 100ms;
}

.subtitulo {
  font-size: 2rem;
  color: #726338;
}

.logo {
  max-width: 100px;
}

.presentacion {
  margin: 0.5rem 0;
  max-width: 700px;
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
  main {
    display: grid;
    grid-template-columns: 
      minmax(1rem, 1fr)
      repeat(3, minmax(10rem, 30rem))
      minmax(1rem, 1fr);
    gap: 0.5rem;
    grid-auto-flow: dense;
    margin-top: 1rem;
  }

  .tituloYSubtitulo {
    grid-column: 2 / 4;
    grid-row: 1;
  }

  footer {
    grid-column: 2;
    grid-row: 3;
    justify-content: start;
  }

  // .imagenPrincipal {
  //   grid-column: 3 / -1;
  //   grid-row: 1 / 4;
  //   z-index: -1;
  // }

  .presentacion {
    grid-column: 2 / 3;
    grid-row: 2;
    font-size: 1.2rem;
    max-width: 90%;
  }
}

</style>