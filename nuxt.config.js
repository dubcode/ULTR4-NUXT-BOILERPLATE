export default {
  mode: 'universal',
  /*
   ** Webfont Loader Config
   */
  webfontloader: {
    google: {
      families: ['Montserrat:100,300,800']
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'ULTR4 NBP - Nuxt.js Boilerplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width initial-scale=1' },
      { name: 'keywords', content: 'Vue.js, Nuxt.js, Axios, PWA, Nuxt Webfont Loader, Nuxt Imagemin, SASS Loader, & ESLint.' },
      { hid: 'description', name: 'description', content: 'A Wicked Nuxt.js Boilerplate' },
      { hid: 'og:title', name: 'og:title', content: 'ULTR4 NBP - Nuxt.js Boilerplate' },
      { hid: 'og:description', name: 'og:description', content: 'A Wicked Nuxt.js Boilerplate' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: [
    '~assets/css/main.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~assets/js/main.js', ssr: false
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // SASS Loader installed - Use style lang="scss" in your components
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
    'nuxt-responsive-loader',
    ['nuxt-sass-resources-loader',
      [
        '~assets/css/variables.scss',
        '~assets/css/resources.scss'
      ]
    ]
  ],
  // https://github.com/geeogi/nuxt-responsive-loader
  responsiveLoader: {
    name: 'img/[hash:7]-[width].[ext]',
    quality: 60,
    placeholder: true,
    min: 320, // minimum image width generated
    max: 1440, // maximum image width generated
    steps: 6 // five sizes per image will be generated
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  }
}
