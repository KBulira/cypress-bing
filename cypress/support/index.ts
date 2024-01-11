/* eslint-disable @typescript-eslint/no-unused-vars */
// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
import "./commands";
//import "./selectors";
import "cypress-mochawesome-reporter/register";
import "cypress-mochawesome-reporter/plugin";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = (on, config) => {
  on("file:preprocessor", cucumber());
};
/*Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});*/
const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
Cypress.on("uncaught:exception", (err, runnable) => {
  /* returning false here prevents Cypress from failing the test */
  if (resizeObserverLoopErrRe.test(err.message)) {
    return false;
  }
});
module.exports = {
  rules: {
    // Note: you must disable the base rule as it can report incorrect errors
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "cypress-cucumber-preprocessor": "default",
  },
};

module.exports = (on, config) => {
  on("file:preprocessor", cucumber());
};
