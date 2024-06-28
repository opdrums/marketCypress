const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://www.starbucks.com.co/',
    specPattern: 'cypress/e2e/**/*.spec.js',
    video:true,
    videoCompression:32,
  },
})
