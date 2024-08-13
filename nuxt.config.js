export default defineNuxtConfig({
  css: ['~/assets/css/styles.css'],
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: 'https://newsapi.org/v2',
    headers: {
      'X-Api-Key': process.env.NEWS_API_KEY
    }
  },
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/styles.css',
    configPath: 'tailwind.config.js'
  }
});
