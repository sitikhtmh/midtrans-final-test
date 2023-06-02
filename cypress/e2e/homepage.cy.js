/// <reference types="cypress" />
describe('Midtrans Demo Website', () => {
    beforeEach(() => {
      cy.visit('https://demo.midtrans.com/')
    })
  
    it('should display the homepage elements', () => {
      cy.get('.title').should('be.visible')
      cy.get('.slide-image').should('be.visible')
    })
    
  })
  