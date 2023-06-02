/// <reference types="cypress" />
describe('Midtrans Demo Website', () => {
    beforeEach(() => {
      cy.visit('https://demo.midtrans.com/')
    })
  
    it('should add items to the shopping cart', () => {
      cy.get('.btn.buy').first().click()
      cy.get('.cart-content.buying').should('contain', '1')
    })
  
})
  