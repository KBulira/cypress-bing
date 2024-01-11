context("Chat", () => {
  before(() => {
    cy.visit("");
  });

  it("should open chat AI", () => {
    cy.get(".customIcon").click();
    cy.wait(2000);
    //try to click on chat cutton and then find to input to white a text
    cy.get("#b-scopeListItem-conv > a").click();
    //cy.wait(3000);
    cy.get("text-area").type(
      "find information about media monitoring in Prolwy"
    );
    //  cy.get(".cib-serp-main")
    //  .click({ force: true })
    //.type("find information about Prowly media monitoring{enter}");
    //chat don't recognise selectors from browser, even i use studio beta in cypress
  });
});
