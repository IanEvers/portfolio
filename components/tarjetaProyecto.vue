<template>
  <div class="tarjetaProyecto text-left m-2 z-30">
    
    <h1 class="text-2xl sm:text-3xl ml-1 p-3 z-30 ">{{titulo}}</h1>

    <hr class="w-full border-left-2 border-black">
    
    <div class="relative z-30">

      <img class="h-48 w-full object-fill z-30" :src="imagen">
      <a :href="url" target="_blank" class="botonUrl z-30">
        <button class="z-30">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button> 
      </a> 
    </div>

    <hr class="w-full border-left-2 border-black">

    <p class="p-4 pt-3 descripcion z-30">{{descripcion}}</p>

  </div>
</template>

<script>

export default {
  name: 'TarjetaProyecto',
  props: {
    titulo: String,
    descripcion: String,
    imagen: String,
    url: String,
  }
}
</script>

<style lang="scss" scoped>
.tarjetaProyecto {
  border: 2px solid #3f8379;
  max-width: min(90vw, 400px);
  background-color: #231a26;
  border-radius: 7px;
  min-height: 350px;
}


.botonUrl {
  position: absolute;
  bottom: 20px;
  right: 25px;
  background-color: #231a26;
  padding: 0.5rem;
  padding-bottom: 0rem;
}

.descripcion {
  line-height: 1.5rem;
  min-height: 5rem;
  color: white;
  font-family: inherit;
}
</style>