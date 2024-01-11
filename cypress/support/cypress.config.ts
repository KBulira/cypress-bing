import { defineConfig } from "cypress";

export default defineConfig({
  //chromeWebSecurity: false,

  env: {
    chromeWebSecurity: false,
    electronWebSecurity: false,
    firefoxWebSecurity: false,
    edgeWebSecurity: false,
    screenshots: false,
    videos: false,
  },

  e2e: {
    specPattern: "**/*.feature",
    supportFile: false,
  },
});
