<template>
  <div>
    <Html>
      <Head>
        <Title>Ian Evers - Portfolio </Title>
        <Meta name="description" content="Mi portfolio!" />
        <Meta name="description" content="Portfolio de Ian Evers." />
        
        <!-- Open Graph / Facebook -->
        <Meta property="og:type" content="website"/>
        <Meta property="og:title" content="Ian Evers - Portfolio"/>
        <Meta property="og:description" content="Portfolio de Ian Evers."/>
        <Meta property="og:image" content="https://ian-broker.vercel.app/portfolio.png"/>
        <Meta property="og:url" content="https://sofia-merlino.vercel.app"/>


        <Meta  property="twitter:card" content="Porftolio de Ian Evers"/>
        <Meta  property="twitter:url" content="https://ian-broker.vercel.app/"/>
        <Meta  property="twitter:title" content="Ian Evers - Portfolio"/>
        <Meta  property="twitter:description" content="Portfolio de Ian Evers."/>
        <Meta  property="twitter:image" content="https://ian-broker.vercel.app/portfolio.png"/>
      </Head>
    </Html>

    <div class="flex flex-col min-h-screen">
      <header class="w-screen flex items-center justify-between sm:justify-around z-30">

        <img src="/logo.png" alt="" class="logo mt-2 ml-5 h-10 ">
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
          
          <div class="flex justify-end m-3">

            <button class="h-10 w-10  flex  items-center" @click="mostrarSidebar = !mostrarSidebar">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav class="h-screen flex justify-center text-center">
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

<script setup>
import { inject } from '@vercel/analytics';

// Make sure to call this only once in your app
inject();

const mostrarSidebar = ref(false)

  
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200&display=swap');

body {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}


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

p {
  font-weight: 200;
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



.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
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

