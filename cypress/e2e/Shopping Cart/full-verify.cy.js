/// <reference types="cypress" />
describe("Midtrans Demo Website", () => {
  beforeEach(() => {
    cy.visit("https://demo.midtrans.com/");
  });

  it("Verify Button buy now - should add items to the shopping cart", () => {
    cy.get(".btn.buy").first().click();
    cy.get(".cart-content.buying").should("contain", "1");
  });

  it("Verify field email - don't enter the '@' symbol to verify the 'Email' field", () => {
    cy.get(".btn.buy").click();

    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"] > .input > input').clear();
    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"] > .input > input').type("Sasya");

    cy.get('[data-reactid=".0.0.1.0.3.0.0.1"] > .input > input').clear();
    cy.get('[data-reactid=".0.0.1.0.3.0.0.1"] > .input > input').type("Sasyagmail.com");

    cy.get('[data-reactid=".0.0.1.0.3.0.0.2"] > .input > input').clear();
    cy.get('[data-reactid=".0.0.1.0.3.0.0.2"] > .input > input').type("081808466410");

    cy.get('[data-reactid=".0.0.1.0.3.0.0.3"] > .input > input').clear();
    cy.get('[data-reactid=".0.0.1.0.3.0.0.3"] > .input > input').type("Yogyakarta");

    cy.get("textarea").clear();
    cy.get("textarea").type("Tamantirto, Bantul");

    cy.get('[data-reactid=".0.0.1.0.3.0.0.5"] > .input > input').clear();
    cy.get('[data-reactid=".0.0.1.0.3.0.0.5"] > .input > input').type("12345");

    cy.get(".cart-checkout").click();

    //assertion//
    cy.get('[data-reactid=".0.0.0.2.0.1.0.0:0"]').should("be.visible");
  });

  it("Verify field Name - Input number to verify field 'Name'", () => {
    cy.get(".btn.buy").click();

    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"] > .input > input').clear();
    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"] > .input > input').type("12345");

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
  });

  it("Verify field Name - Input symbol '@' to verify the 'Name' field", () => {
    cy.get(".btn.buy").click();

    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"] > .input > input').clear();
    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"] > .input > input').type("@@@@@");

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
  });

  it("Verify field Name - Leave blank to verify the 'Name' field", () => {
    cy.get(".btn.buy").click();

    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"] > .input > input').clear();
    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"] > .input > input').type(" ");

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
  });

  it("Verify Field Phone - Input alphabet to verify the 'Phone No' fieldd", () => {
    cy.get(".btn.buy").click();

    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"] > .input > input').clear();
    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"] > .input > input').type("Sasya");

    cy.get('[data-reactid=".0.0.1.0.3.0.0.1"] > .input > input').clear();
    cy.get('[data-reactid=".0.0.1.0.3.0.0.1"] > .input > input').type("Sasya@gmail.com");

    cy.get('[data-reactid=".0.0.1.0.3.0.0.2"] > .input > input').clear();
    cy.get('[data-reactid=".0.0.1.0.3.0.0.2"] > .input > input').type("abcdefghi");

    cy.get('[data-reactid=".0.0.1.0.3.0.0.3"] > .input > input').clear();
    cy.get('[data-reactid=".0.0.1.0.3.0.0.3"] > .input > input').type("Yogyakarta");

    cy.get("textarea").clear();
    cy.get("textarea").type("Tamantirto, Bantul");

    cy.get('[data-reactid=".0.0.1.0.3.0.0.5"] > .input > input').clear();
    cy.get('[data-reactid=".0.0.1.0.3.0.0.5"] > .input > input').type("12345");

    cy.get(".cart-checkout").click();
  });

  it("Verify Field Postal-code - Input alphabet to verify the 'Postal Code' field", () => {
    cy.get(".btn.buy").click();

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
    cy.get('[data-reactid=".0.0.1.0.3.0.0.5"] > .input > input').type("asdfgh");

    cy.get(".cart-checkout").click();

    
  });
});
