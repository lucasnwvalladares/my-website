import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Valla - Innovative Software Solutions',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Valla provides cutting-edge technology solutions to drive business growth.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/my-website/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/my-website/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/my-website/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/my-website/favicon-16x16.png' },
      { rel: 'manifest', href: '/my-website/site.webmanifest' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@mdi/font/css/materialdesignicons.min.css',
    'vuetify/dist/vuetify.min.css',
    '@/assets/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    //'~/plugins/router.js',
    '~/plugins/axios.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // '@nuxtjs/auth-next', // Remove this line if present
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:5858', // Base URL for your API
    credentials: false // Include credentials in requests
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    //customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isServer }) {
      if (isServer) {
        if (!Array.isArray(config.externals)) {
          config.externals = [];
        }
        config.externals.push({
          'express': 'commonjs express',
          'fs': 'commonjs fs',
          'net': 'commonjs net'
        });
      }
    },
    loaders: {
      scss: {
        additionalData: `@import "@/assets//variables.scss";`
      }
    }
  },

  router: {
    base: '/my-website/',
    //middleware: ['auth'],
  },

  // Remove any auth configuration
  // auth: {
  //   strategies: {
  //     ...
  //   }
  // }

  target: 'static'
}
