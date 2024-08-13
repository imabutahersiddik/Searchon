export default defineNuxtConfig({
  css: ['assets/styles.css'],
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: 'https://newsapi.org/v2',
    headers: {
      'X-Api-Key': process.env.NEWS_API_KEY
    }
  },
  buildModules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/styles.css',
    configPath: 'tailwind.config.js'
  }
})
