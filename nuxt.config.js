export default defineNuxtConfig({
  css: ['~/assets/css/styles.css'], // Use tilde (~) for relative paths
  modules: [
    '@nuxtjs/axios', // Include Axios module
  ],
  axios: {
    baseURL: 'https://newsapi.org/v2',
    headers: {
      'X-Api-Key': process.env.NEWS_API_KEY // Access API key from environment variables
    }
  },
  buildModules: [
    '@nuxtjs/tailwindcss', // Include Tailwind CSS module
  ],
  tailwindcss: {
    cssPath: '~/assets/css/styles.css', // Specify the CSS file
    configPath: 'tailwind.config.js' // Point to your Tailwind config
  }
});
