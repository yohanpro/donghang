import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - myTrip',
    title: 'myTrip',
    htmlAttrs: {
      lang: 'ko',
      class: 'notranslate',
      translate: 'no',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1',
      },
      { hid: 'description', name: 'description', content: '' },
      {
        name: 'google-signin-client_id',
        content: process.env.GOOGLE_CLIENT_ID,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,600,700,900&display=swap&subset=korean',
      },
    ],
    script: [
      {
        src: 'https://apis.google.com/js/platform.js?&hl=ko',
        async: true,
        defer: true,
      },
      {
        src: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['assets/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~/plugins/event-bus',
    '~/plugins/compose',
    '~/plugins/pipe',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/tailwindcss',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
    googleClintId: process.env.GOOGLE_CLIENT_ID,
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  },
  privateRuntimeConfig: {
    googleClientId: process.env.GOOGLE_CLIENT_ID,
  },
  axios: {
    baseURL: process.env.BASE_URL,
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    treeShake: true,
    theme: {
      // dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: { sourceMap: false },
    },
  },
  loading: {
    color: 'blue',
    height: '5px',
  },
}
