module.exports = {
  //projectId: 'jtcndy',
  chromeWebSecurity: false,
  redirectionLimit: 50,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    "chromeWebSecurity": false,
  },
};