<template>
  <div>
    <div class="flex flex-col min-h-screen">
      <header class="w-screen flex items-center justify-between sm:justify-around z-30">

        <img src="/logoDibujo.png" alt="" class="logo ml-2 h-14">
        <nav class="hidden sm:block">
          <div class="flex justify-around gap-8">
            <a class="link" href="#proyectos"> Proyectos </a>
            <a class="link" href="#contacto">  Contacto  </a>
          </div>
        </nav>

        <button class="sm:hidden mr-6" @click="mostrarSidebar = !mostrarSidebar">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      <Transition name="slide">
        <div v-if="mostrarSidebar" class="sidebar fixed h-screen w-screen z-40">
          
          <div class="flex justify-end m-6">

            <button class="h-16 w-16  flex  items-center" @click="mostrarSidebar = !mostrarSidebar">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav class="h-screen flex justify-center text-center" >
            <div class="flex flex-col p-48 gap-8" >
              <a class="text-4xl linkSidebar" href="#proyectos" @click="mostrarSidebar = !mostrarSidebar"> Proyectos </a>
              <a class="text-4xl linkSidebar" href="#contacto"  @click="mostrarSidebar = !mostrarSidebar"> Contacto </a>
            </div>
          </nav>
        </div>
      </Transition>

      
      <SeccionSobreMi> </SeccionSobreMi>
    </div>

    

    <SeccionProyectos> </SeccionProyectos>
    <SeccionContacto> </SeccionContacto>
    
  </div>
</template>

<script>

// import gsap from 'gsap'
// import { ScrollTrigger } from "gsap/ScrollTrigger.js";

export default {
  mounted() {
    // gsap.registerPlugin(ScrollTrigger);
 
  },

  data () {
    return {
      mostrarSidebar: false
    }
  },
  
}
</script>

<style>

*,
*::before,
::after {
  box-sizing: border-box;
}

html {
  scroll-behavior:smooth
}

body {
  background-color: #231a26;
  color: rgb(255, 250, 250);
  line-height: 1.5;
  overflow-x: hidden;
}

section {
  scroll-behavior: smooth;
}

header {
  background-color: #0b071d;
  border-bottom: #000000 solid 2px;
}

.sidebar {
  background-color: #231a26;
}

.linkSidebar {
  border-bottom: #3f8379 1px solid;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  transition: all 150ms ease-in 0s
}

.link {
  font-size: 1.2rem;
  line-height: 1;
}

.link:hover {
  color: #54d1be;
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
  background: #3f8379;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}
</style>

