<template>
  <section class="p-2 pb-4" id="contacto">
    <h1 class="titulo"> Contacto</h1>

    <div class=" sm:flex justify-center ">
      
      <p v-if="this.mensajeEnviado != '' " class="hidden sm:block text-2xl w-2/3 m-auto text-center"> Responderé a la brevedad :) </p>

      <p v-else class="hidden sm:block text-2xl w-2/3 m-auto text-center">Soy tímido, escríbanme.</p>

      <div class="hidden sm:block hr border-2"></div>
      <form ref="form" @submit.prevent="sendEmail" class="flex flex-col justify-center w-full">
        <label class="p-1 pl-3 " for="nombre"> Nombre </label>
        <input class="p-3 m-3" type="text" id="nombre" name="from_name" placeholder="Nombre">
        <label class="p-1 pl-3 " for="mail"> E-Mail </label>
        <input class="p-3 m-3" type="email" id="mail" name="reply_to" placeholder="E-mail">
        <label class="p-1 pl-3 " for="mensaje"> Mensaje </label>
        <textarea class="p-3 m-3" id="mensaje" name="message" cols="30" rows="10" placeholder="Mensaje"></textarea>

        <input type="submit" class="boton" :value="this.mensajeEnviado ?? contactame" :disabled="this.mensajeEnviado != '' " :class="{ negro: this.mensajeEnviado != ''}">

        <p v-if="this.mensajeEnviado != '' " class="sm:hidden text-center p-2" > {{this.mensajeEnviado}} </p>
      </form>
    </div>
  </section>
</template>

<script>
  import emailjs from '@emailjs/browser';

  export default {
    name: 'SeccionContacto',
     data () {
      return {
        mensajeEnviado: ''
      }
    },

    methods: {
      sendEmail() {
        if(this.mensajeEnviado == '') {
          this.mensajeEnviado = 'Enviando...'
          emailjs.sendForm('service_svl0pf7', 'template_dddjaae', this.$refs.form, 'AICrE5M2IC5J3n8kv')
          .then((result) => {
            this.mensajeEnviado = 'Mensaje enviado.'
            console.log('bien')
          }, (error) => {
            this.mensajeEnviado = 'Error. Mala mía.'
            console.log('error')
          });
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

.titulo {
  font-size: clamp(3rem, 10vw, 7rem);
  text-align: center;
}

.hr {
  border: #3f8379 1px solid;
  margin: 1rem;
}

.negro {
  background-color: #000 !important;
}

input {
  height: 52px;
  background: #fff;
  color: #000;
  font-size: 14px;
  border-radius: 5px;
  -webkit-box-shadow: none!important;
  box-shadow: none!important;
  border: 3px solid #3f8379;
}

textarea {
  background: #fff;
  color: #000;
  font-size: 14px;
  border-radius: 5px;
  -webkit-box-shadow: none!important;
  box-shadow: none!important;
  border: 3px solid #3f8379;
}

.boton:hover {
  cursor: pointer;
  transform: scale(1.1);  
}

.boton {
  border-radius: 20px;
  background-color: #3f8379;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 17px;
  padding: 0.5rem 1rem;
  margin: auto;
  transition: 0.25s;
}

</style>