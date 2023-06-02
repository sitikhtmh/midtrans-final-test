/// <reference types="cypress" />
describe("Midtrans Testing Automation Negative Case", () => {
    beforeEach(() => {
      cy.visit("https://demo.midtrans.com/");
    });
  
    it("Input alphabet to verify the 'Phone No' fieldd", () => {
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
  
  });
  