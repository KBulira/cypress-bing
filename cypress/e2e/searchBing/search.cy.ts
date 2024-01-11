//import { When, Then, Given, And } from "cypress-cucumber-preprocessor";
context("Search", () => {
  before(() => {
    cy.visit("");
  });

  it("should find input and it should be empty", () => {
    cy.get('textarea[id="sb_form_q"]').clear().should("be.empty");
  });

  it("should find information about Prowly Media Monitoring", () => {
    cy.wait(2000);
    cy.get('textarea[id="sb_form_q"]').type("Prowly Media Monitoring{enter}");
    //try to add assertion:
    //  cy.origin("https://www.bing.com", () => {
    //   cy.visit("/");
    //  cy.get('[class="carousel-scroll-content carousel_scroll"]').should('be.visible));
    // });
  });
  //to use Gherkin i will use the following command:
  /*Given("should find information about Prowly Media Monitoring", () => {  //Given 
    cy.wait(2000);
    cy.get('textarea[id="sb_form_q"]').type("Prowly Media Monitoring{enter}");
    //try to add assertion:
    //  cy.origin("https://www.bing.com", () => {
    //   cy.visit("/");
    //  cy.get('[class="carousel-scroll-content carousel_scroll"]').should('be.visible));
    // });
  });*/

  it("should find pictures about Prowly Media Monitoring", () => {
    cy.get('[id="b-scopeListItem-images"]').click();
  });

  it("should find video about Prowly Media Monitoring", () => {
    cy.get('[id="b-scopeListItem-video"]').click();
  });
  it("should find maps about Prowly Media Monitoring", () => {
    cy.get('[id="b-scopeListItem-local"]').click();
  });

  it("should find shopping about Prowly Media Monitoring", () => {
    cy.get('[id="b-scopeListItem-shop"]').click();
  });
  it("should find tools about Prowly Media Monitoring", () => {
    cy.get('[id="scope_tools_wrapper"]').click();
  });
});
