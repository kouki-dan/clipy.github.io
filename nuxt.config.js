module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Clipy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Clipboard extension app for macOS' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: "og:url", name: "og:url", content: "https://clipy-app.com"},
      { hid: "og:title", name:"og:title", content: "Clipy"},
      { hid: "og:description", name: "og:description", content: "Clipboard extension app for macOS"},
      { hid: "og:image", name: "og:image", content: "http://clipy-app.com/img/clipy.png"},
      { hid: "og:locale", name: "og:locale", content: "ja_JP"},
      { hid: "fb:app_id", name: "fb:app_id", content: "752550624866720"},
      { hid: "twitter:card", name: "twitter:card", content: "summary"},
      { hid: "twitter:creator", name: "twitter:creator", content: "@clipyApp"},
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png', sizes: '16x16' },
      { rel: 'shortcut icon', type: 'image/png', href: '/favicon@2x.png', sizes: '32x32' },
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
    }],
    ['@nuxtjs/google-tag-manager', {id: 'GTM-TZF5GZ4'}],
  ]
}

