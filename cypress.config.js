const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "yyimbn",
  e2e: {
    baseUrl: 'https://barrigarest.wcaquino.me',
    setupNodeEvents(on, config) {
    },
  },
});
