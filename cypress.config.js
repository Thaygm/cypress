const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/relatorio",
    overwrite: true,
    html: true,
    JSON: true,
    timestamp: "ddmmyyy_HHMMss",
  },
});
