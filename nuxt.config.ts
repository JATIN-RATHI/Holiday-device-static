export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'holiday-device-static',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css'
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
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/bootstrapVue.ts',
    '~/plugins/bootstrap.ts'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  bootstrapVue:{
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
