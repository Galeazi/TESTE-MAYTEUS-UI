const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'x1kecw',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false
  },
  e2e: {

    baseUrl: "http://lojaebac.ebaconline.art.br/"
 
   },
});


