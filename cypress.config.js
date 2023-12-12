const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    'baseUrl': 'https://dev-geon.aperam.com/app/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
