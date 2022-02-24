<template>
  <div @mousemove="onDocumentMouseMove">
    <Renderer 
      ref="renderer"
      class="fixed top-0 left-0 opacity-40 -z-20"
      :alpha="true"
    >
      <Camera  ref="camera" :position="{ z: 2, x: -1 }"/>
      <Scene>
        <PointLight :position="{ y: 50, z: 50 }" />
        <AmbientLight />
        
        <GltfModel
          src="https://ianevers.github.io/Ian/ianevers.glb"
          @load="modeloCargado"
          @progress="cargaEnProceso"
          @error="onError"
          ref="modelo"
        />
      </Scene>
    </Renderer>
  </div>
  
</template>

<script>

import { Box, Camera, LambertMaterial, PointLight, AmbientLight, Renderer, Scene, GltfModel } from 'troisjs'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

export default {
  components: { Box, Camera, LambertMaterial, PointLight, AmbientLight, Renderer, Scene, GltfModel},
  mounted() {
    this.tamañoCanvas()

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray("section").forEach((seccion, i) => {
      ScrollTrigger.create({
        trigger: seccion,
        start: "top top",
        pin: true,
        pinSpacing: false
      })
    })

    let target = this.$refs.renderer.three.pointer.positionV3

    this.$refs.renderer.onBeforeRender(() => {

      target.y += ( - this.mouseY - target.y + 100) * 0.0002;


      

      target.z = this.$refs.camera.camera.position.z;
      target.x = -3;
      if(this.modelo != '') {
        this.modelo.lookAt( target );
      }

    });
  },

  created() {
    if (window.innerWidth > 900) {
      window.addEventListener("resize", this.tamañoCanvas);
    }
  },

  destroyed() {
    if (window.innerWidth > 900) {
      window.removeEventListener("resize", this.tamañoCanvas);
    }
  },

  data () {
    return {
      mouseX: 0,
      mouseY: 0,
      estadoModelo: '',
      modelo: ''
    }
  },

  methods: {
    modeloCargado(model) {
      this.modelo = model
    },

    cargaEnProceso(carga) {
      this.estadoModelo = carga.loaded / carga.total
    },

    onError(error) {
      console.log(error)
    },

    onDocumentMouseMove( event ) {
      this.mouseX = ( event.clientX - (window.innerWidth / 2 ));
      this.mouseY = ( event.clientY - (window.innerHeight / 2));
    },

    tamañoCanvas() {
      this.$refs.renderer.three.setSize(window.innerWidth, window.innerHeight)
    },
  },
 
};

</script>

<style lang="scss" scoped>

  h1 {
    text-align: center;
  }

    /* we will explain what these classes do next! */
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

</style>