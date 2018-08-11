module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'clipy.github.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Clipy site.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    'normalize.css'
  ],
  modules: [
    ['nuxt-i18n', {
      locales: [
        {
          code: 'en',
          name: 'English',
          iso: 'en-US'
        },
        {
          code: 'fr',
          name: 'Français',
          iso: 'fr-FR'
        },
        {
          code: 'ja',
          name: '日本語',
          iso: 'ja-JP'
        },
      ],
      defaultLocale: 'en',
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected'
      },
      vueI18n: {
        fallbackLocale: 'en',
        messages: {
          en: require('./locales/en.json'),
          fr: require('./locales/fr.json'),
          ja: require('./locales/ja.json')
        }
      }
    }]
  ]
}

