import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  experimentalStudio: true,
  viewportHeight: 1500,
  viewportWidth: 1500,

  env: {
    selectorPrefixes: ["app", "p", "ui", "demo", "ktd", "lib"],
    localStorageLoggedKey: "isUserLoggedIn",
    apiUrl: "https://www.bing.com/npm/api/v1",
    testFiles: "**/*.feature",
    chromeWebSecurity: false,
    electronWebSecurity: false,
    firefoxWebSecurity: false,
    edgeWebSecurity: false,
    screenshots: false,
    videos: false,
  },

  e2e: {
    baseUrl: "https://www.bing.com/",
    setupNodeEvents(on, config) {
      //   require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      return config;
    },
    testIsolation: false,
    requestTimeout: 2000,
  },
});
