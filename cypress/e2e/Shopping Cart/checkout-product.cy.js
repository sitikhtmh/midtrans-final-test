/// <reference types="cypress" />
describe("Midtrans Demo Website", () => {
  beforeEach(() => {
    cy.visit("https://demo.midtrans.com/");
  });

  it.only("should proceed to checkout and fill in shipping details", () => {
    cy.get(".btn.buy").click();
    // cy.get(".cart-content.buying").should("be.visible");

    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"] > .input > input').clear();
    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"] > .input > input').type("Sasya");

    cy.get('[data-reactid=".0.0.1.0.3.0.0.1"] > .input > input').clear();
    cy.get('[data-reactid=".0.0.1.0.3.0.0.1"] > .input > input').type("Sasya@gmail.com");

    cy.get('[data-reactid=".0.0.1.0.3.0.0.2"] > .input > input').clear();
    cy.get('[data-reactid=".0.0.1.0.3.0.0.2"] > .input > input').type("081808466410");

    cy.get('[data-reactid=".0.0.1.0.3.0.0.3"] > .input > input').clear();
    cy.get('[data-reactid=".0.0.1.0.3.0.0.3"] > .input > input').type("Yogyakarta");

    cy.get("textarea").clear();
    cy.get("textarea").type("Tamantirto, Bantul");

    cy.get('[data-reactid=".0.0.1.0.3.0.0.5"] > .input > input').clear();
    cy.get('[data-reactid=".0.0.1.0.3.0.0.5"] > .input > input').type("12345");

    cy.get(".cart-checkout").click();

    //cy.get('a[href*="gopay-qris"]').click()
    cy.get(".logo-payment-type").click()
    //cy.contains("ShopeePay").click();
    //cy.xpath('@id="application"/div/div[2]/a/div[1]/div[2]/div[1]/img').click()
  });
});
