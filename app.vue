<template>
  <div>
    <div class="flex flex-col min-h-screen">
      <header class="w-screen flex items-center justify-between sm:justify-around z-30">
        <img src="/logoDibujo.png" alt="" class="logo ml-2">
        <nav class="hidden sm:block">
          <div class="links flex justify-around gap-8">
            <a class="link" href="#sobreMi"> Sobre Mi </a>
            <a class="link" href="#proyectos"> Proyectos </a>
            <a class="link" href="#contacto"> Contacto </a>
          </div>
        </nav>

        <button class="sm:hidden p-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>
      
      <SeccionSobreMi> </SeccionSobreMi>
    </div>

    <SeccionProyectos> </SeccionProyectos>
    
  </div>
</template>

<script>

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    // if (window.innerWidth > 900) {
    //   gsap.utils.toArray("section").forEach((seccion, i) => {
    //     ScrollTrigger.create({
    //       trigger: seccion,
    //       start: "top top",
    //       pin: true,
    //       pinSpacing: false,
    //       scrub: true,
    //       scroll: 'smooth'
    //     })
    //   })
    // }
  }
}
</script>

<style>

*,
*::before,
::after {
  box-sizing: border-box;
}

body {  
  background-color: #E5DCC3;
  color: #524d3e;
  line-height: 1.5;
  font-family: sans-serif;
  overflow-x: hidden;
}

section {
  scroll-behavior: smooth;
}

header {
  background-color: #c7bea2;
  border-bottom: #524d3e solid 2px;
}
.link {
  font-size: 1.2rem;
}

.link:hover {
  color: black;
  transform: scale(1.02);
  transition: 100ms;
}

.logo {
  max-width: 100px;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
  opacity: 0;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #726338;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #524d3e;
}
</style>

