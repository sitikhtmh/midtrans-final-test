/// <reference types="cypress" />
describe("Midtrans Demo Website", () => {
  beforeEach(() => {
    cy.visit("https://dashboard.midtrans.com/login");
  });

  it.only("should login successfully", () => {
    cy.get("h1").should("be.visible");

    cy.fixture("user").then((user) => {
      const username = user.useremail;
      const password = user.password;

      //login
      cy.login(username, password);
    });
  });

  it.only("should login successfully", () => {
    cy.get("h1").should("be.visible");

    cy.get("#user_email").type("siti.khotimah.ft17@gmail.com");
    cy.get("#user_password").type("Sitift17");

    cy.contains("Log me in").click();
  });
});
