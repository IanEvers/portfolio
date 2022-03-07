<template>
  <Renderer
    id="renderer"
    ref="renderer"
    class="absolute top-0 right-0 max-h-full w-full opacity-40"
    :alpha="true"
    @mousemove="onDocumentMouseMove"
  >
    <Camera  ref="camera" :position="{ z: 2, x: -0.8 }"/>
    <Scene>
      <PointLight :position="{ y: 50, z: 50 }" />
      <AmbientLight />
      
      <GltfModel
        src="/modelo/ianevers.glb"
        @load="modeloCargado"
        @progress="cargaEnProceso"
        @error="onError"
        ref="modelo"
      />
    </Scene>
  </Renderer>
  
</template>

<script>

import { Box, Camera, LambertMaterial, PointLight, AmbientLight, Renderer, Scene, GltfModel } from 'troisjs'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

    

export default {
  components: { Box, Camera, LambertMaterial, PointLight, AmbientLight, Renderer, Scene, GltfModel},
  mounted() {
    this.tamañoCanvas()
    
    gsap.registerPlugin(ScrollTrigger)

    // gsap.to('#renderer' , {
    //   scrollTrigger: {
    //     trigger: '.seccionProyectos',
    //     start: "top bottom",
    //     toggleActions: 'restart none reverse reverse'
    //   },
    //   opacity: 0,
    //   duration: 1
    // })
    

    let target = this.$refs.renderer.three.pointer.positionV3
    if (window.innerWidth > 768) {

      this.$refs.renderer.onBeforeRender(() => {

        // console.log(" - this.mouseY " + (- this.mouseY) )
        // console.log("- target.y  "+  (- target.y) )
        // console.log(" - this.mouseY - target.y + 100 "+  (- this.mouseY - target.y + 100 ))

        target.y += ( - this.mouseY + 100) * 0.0002 ;
        target.y = Math.min(Math.max(target.y, -1.5), 0);

        target.x += this.mouseX * 0.0002 ;
        target.x = Math.min(Math.max(target.x, -2), -0);


        target.z = this.$refs.camera.camera.position.z;

        if(this.modelo != '') {
          this.modelo.lookAt( target );
        }

      });
    } else {

      this.$refs.camera.camera.position.y = 1
      this.$refs.camera.camera.position.z = 5
      this.$refs.camera.camera.position.x = 0.2

      this.$refs.camera.camera.rotation.y = 0.1
   
      let tiempoInicial = Date.now();
      
      this.$refs.renderer.onBeforeRender(() => {
        if(this.modelo != '') {
          this.modelo.rotation.y = 0;
          this.modelo.rotation.z = 2;
          this.modelo.rotation.x = 5;
        }
        const tiempo = Date.now() - tiempoInicial;
        if(this.modelo != '') {
          this.modelo.position.y = Math.cos(tiempo / 500) * 0.05 - 1
        }
      })
    }
  },

  created() {
    if (window.innerWidth > 768) {
      window.addEventListener("resize", this.tamañoCanvas);
    }
  },

  destroyed() {
    if (window.innerWidth > 768) {
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

      var rect = document.getElementById('sobreMi').getBoundingClientRect();
      this.mouseX  = event.clientX - ( window.innerWidth * 0.25)   - ( ( window.innerWidth + rect.left ) / 2); //x position within the element.
      this.mouseY  = event.clientY -  ( ( window.innerHeight + rect.top ) / 2);  //y position within the element.

    },

    tamañoCanvas() {
      this.$refs.renderer.three.setSize(window.innerWidth, window.innerHeight)
    },
  },
 
};

</script>

<style lang="scss" scoped>



</style>