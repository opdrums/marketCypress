const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    specPattern: 'cypress/e2e/**/*.spec.js',
    video:true,
    videoCompression:32,
    reporter: 'mochawesome',
  },
  projectId: "vn4you"
})
