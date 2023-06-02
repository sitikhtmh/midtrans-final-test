/// <reference types="cypress" />
describe("Midtrans Demo Website", () => {
  beforeEach(() => {
    cy.visit("https://dashboard.midtrans.com/login");
  });

  it.only("should logout successfully", () => {
    cy.get("h1").should("be.visible");

    cy.fixture("user").then((user) => {
      const username = user.useremail;
      const password = user.password;
    });
  });
});
