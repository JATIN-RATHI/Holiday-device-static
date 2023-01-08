import webpack from "webpack"
import { generateRoutes } from './routes'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: false,
  target: 'static',
  env: {
    CTF_ACCESS_TOKEN : process.env.CTF_ACCESS_TOKEN,
    CTF_ENV : process.env.CTF_ENV,
    CTF_SPACE_Id : process.env.CTF_SPACE_Id,
    CTF_HOST : process.env.CTF_HOST
  },
  generate: {
    crawler: false,
    interval: 250,
    concurrency: 1,
    async routes() {
      return await generateRoutes()
    },
  },
  image: {
    contentful: {},
    domains: ['images.ctfassets.net']
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Holiday Device™ - Device to see the world',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/holiday_device.ico' }
    ],
    script: [
      {
        src: 'https://code.jquery-3.4.1.min.js',
        type: 'text/javascript',
        body: true,
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css',
  ],
  loaders: {
    vue:{
      prettify: false,
    },
    sass: {
      happyPackMode: true,
      indentedSyntax: true,
    },
    scss: {
      happyPackMode: true,
    },
    ts: {
      transpileOnly: true,
      happyPackMode: true,
      appendTsSuffixTo: [/\.vue$/],
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        JQuery: 'jquery',
        $validator: 'vee-validate.ts',
      }),
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/bootstrapVue.ts',
    '~/plugins/bootstrap.ts',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  bootstrapVue: {
    components: ['BCarousel', 'BCarouselSlide', 'BCard', 'BCardText', 'BCardGroup'],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/fontawesome'
  ],
  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true,
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    'nuxt-purgecss'
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
