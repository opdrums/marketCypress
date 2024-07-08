const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth',
    specPattern: 'cypress/e2e/**/*.spec.js',
    video:false,
    videoCompression:32,
  },
})
