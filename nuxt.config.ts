import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/scss/styles.scss'],
  buildModules: ['@nuxtjs/tailwindcss'],
  ssr: false,
  meta: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: "description", content: "Mi portfolio!"  },
      { name: "description", content: "Portfolio de Ian Evers."  },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Ian Evers - Portfolio"  },
      { property: "og:description", content: "Portfolio de Ian Evers." },
      { property: "og:image", content: "https://ian-broker.vercel.app/portfolio.png" },
      { property: "og:url", content: "https://sofia-merlino.vercel.app" },
      { property: "twitter:card", content: "Porftolio de Ian Evers"},
      { property: "twitter:url", content: "https://ian-broker.vercel.app/" },
      { property: "twitter:title", content: "Ian Evers - Portfolio" },
      { property: "twitter:description", content: "Portfolio de Ian Evers." },
      { property: "twitter:image", content: "https://ian-broker.vercel.app/portfolio.png" },
    ],
    script: [
      // <script src="https://myawesome-lib.js"></script>
      { src: 'https://awesome-lib.js' }
    ],
    link: [
      // <link rel="stylesheet" href="https://myawesome-lib.css">
      { rel: 'stylesheet', href: 'https://awesome-lib.css' }
    ],
    // please note that this is an area that is likely to change
    style: [
      // <style type="text/css">:root { color: red }</style>
      { children: ':root { color: red }', type: 'text/css' }
    ]
   }
})


