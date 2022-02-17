<template>
  <div @mousemove="onDocumentMouseMove">
          
    <section class="h-screen flex justify-center relative bg-zinc-300	">
      <div class="flex-column justify-center">
        <h1 class="text-7xl text-center   lg:mt-5 pt-5 "> Ian Evers </h1>
        <h1 class="text-xl text-center   lg:mt-5 pt-5 "> Frontend Developer </h1>
      </div>

    </section>

    <section id="seccion2" class="h-screen flex justify-center lg:justify-start items-center  bg-zinc-800">
      <h1 class="text-7xl text-white z-10 lg:ml-5 pl-5 lg:mt-5 pt-5"> Soy Ian. </h1>
    </section>
      
    <section class="h-screen flex justify-center lg:justify-start bg-zinc-300	">
      <h1 class="text-7xl z-10 lg:ml-5 pl-5 lg:mt-5 pt-5"> Chau. </h1>
    </section>

    <Renderer 
      ref="renderer"
      class="fixed top-0 left-0"
      :alpha="true"
    >
      <Camera  ref="camera" :position="{ z: 11, x:0  }"/>
      <Scene>
        <PointLight :position="{ y: 50, z: 50 }" />
        <AmbientLight  />
        
        <GltfModel
          src="/static/modelo/ianevers.gltf"
          @load="modeloCargado"
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
    console.log('mounted');

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray("section").forEach((seccion, i) => {
      ScrollTrigger.create({
        trigger: seccion,
        start: "top top",
        pin: true,
        pinSpacing: false
      })
    })  
  },
  created() {
    window.addEventListener("resize", this.tamañoCanvas);
  },
  destroyed() {
    window.removeEventListener("resize", this.tamañoCanvas);
  },
  data () {
    return {
      // gui: new GUI(),
      mouseX: 0,
      mouseY: 0
    }
  },
  methods: {
    modeloCargado(model) {
      // const modeloIanGUI = this.gui.addFolder('modeloIan')
      // modeloIanGUI.add(model.rotation, 'x', 0, Math.PI * 2)
      // modeloIanGUI.add(model.rotation, 'y', 0, Math.PI * 2)
      // modeloIanGUI.add(model.rotation, 'z', 0, Math.PI * 2)
      // modeloIanGUI.add(model.scale, 'x', 0, Math.PI * 2)
      // modeloIanGUI.add(model.scale, 'y', 0, Math.PI * 2)
      // modeloIanGUI.add(model.scale, 'z', 0, Math.PI * 2)
      // modeloIanGUI.open()
      console.log('funciona');
      let target = this.$refs.renderer.three.pointer.positionV3

      // let tiempo = 0
      this.$refs.renderer.onBeforeRender(() => {
        // tiempo += 0.1
        // model.rotation.y = 0.2 * Math.cos(tiempo)

        target.x += ( this.mouseX - target.x ) * 0.02;
        target.y += ( - this.mouseY - target.y ) * 0.02;

        if(target.x < -7.5) { target.x = -7.5 }
        if(target.x >  7.5) { target.x =  7.5 }
        if(target.y < -4.5) { target.y = -4.5 }
        if(target.y >  1.5) { target.y =  1.5 }

        target.z = this.$refs.camera.camera.position.z;

        model.lookAt( target );

      });
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

</style>