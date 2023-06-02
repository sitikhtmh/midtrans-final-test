/// <reference types="cypress" />
describe("Midtrans Demo Website", () => {
  beforeEach(() => {
    cy.visit("https://dashboard.midtrans.com/login");
  });

  it.only("should logout successfully", () => {
    cy.get("h1").should("be.visible");

    cy.get("#user_email").type("siti.khotimah.ft17@gmail.com");
    cy.get("#user_password").type("Sitift17");

    cy.contains("Log me in").click();

    cy.get('.Z7iHca_close > .Button__yXAkD').click();
    cy.get('.tjr-avatar').click();
    cy.get('.button_to > .tjr-btn').click();

    //Assertion
    cy.get('.l-logo').should('be.visible')
  });
});
