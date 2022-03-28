<template>
  <Renderer
    id="renderer"
    ref="renderer"
    class="absolute top-0 right-0 max-h-full w-full opacity-80"
    :alpha="true"
    @mousemove="onDocumentMouseMove"
  >
    <Camera  ref="camera" :position="{ z: 2, x: -0.8 }"/>
    <Scene>
      <PointLight color="#9A7AA1" :position="{ y: 50, z: 50 }" />
      <AmbientLight color="#9A7AA1" />
      
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

export default {
  name: 'EscenaThreeJS',
  components: { Box, Camera, LambertMaterial, PointLight, AmbientLight, Renderer, Scene, GltfModel},
  mounted() {
    this.tamañoCanvas()
  
    let target = this.$refs.renderer.three.pointer.positionV3
    if (window.innerWidth > 768) {

      this.$refs.renderer.onBeforeRender(() => {

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

      this.$refs.camera.camera.position.y = 0.5
      this.$refs.camera.camera.position.z = 5
      this.$refs.camera.camera.position.x = 0.5

      this.$refs.camera.camera.rotation.y = 0.1
   
      let tiempoInicial = Date.now();
      
      this.$refs.renderer.onBeforeRender(() => {

        const tiempo = Date.now() - tiempoInicial;
        if(this.modelo != '') {
          this.modelo.rotation.y = 0;
          this.modelo.rotation.z = 0;
          this.modelo.rotation.x = -0.2;
          this.modelo.position.y = Math.cos(tiempo / 500) * 0.05 - 1
          this.modelo.rotation.y = Math.cos(tiempo / 400) * 0.1 + 0.3
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