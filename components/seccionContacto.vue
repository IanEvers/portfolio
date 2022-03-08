<template>
  <section class="p-2 pb-4" id="contacto">
    <h1 class="titulo"> Contacto</h1>

    <div class=" sm:flex justify-center ">

      <p class="hidden sm:block text-2xl w-2/3 m-auto text-center">Soy tímido, escríbanme.</p>

      <div class="hidden sm:block hr border-2"></div>
      <form ref="form" @submit.prevent="sendEmail" class="flex flex-col justify-center w-full">
        <label class="p-1 pl-3 " for="nombre"> Nombre </label>
        <input class="p-3 m-3" type="text" id="nombre" placeholder="Nombre">
        <label class="p-1 pl-3 " for="mail"> E-Mail </label>
        <input class="p-3 m-3" type="email" id="mail" placeholder="E-mail">
        <label class="p-1 pl-3 " for="mensaje"> Mensaje </label>
        <textarea class="p-3 m-3" name="Mensaje" id="mensaje" cols="30" rows="10" placeholder="Mensaje"></textarea>

        <button type="button" class="boton"> Contactame </button>
      </form>
    </div>
  </section>
</template>

<script>
  import emailjs from '@emailjs/browser';

  export default {
    name: 'SeccionContacto',

    methods: {
      sendEmail() {
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this.$refs.form, 'YOUR_USER_ID')
          .then((result) => {
              console.log('SUCCESS!', result.text);
          }, (error) => {
              console.log('FAILED...', error.text);
          });
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

input {
  height: 52px;
  background: #fff;
  color: #000;
  font-size: 14px;
  border-radius: 2px;
  -webkit-box-shadow: none!important;
  box-shadow: none!important;
  border: 1px solid rgba(0,0,0,.1);
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
}

</style>