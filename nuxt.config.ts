import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/scss/styles.scss'],
  buildModules: ['@nuxtjs/tailwindcss'],
  ssr: false,
})


