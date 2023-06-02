/// <reference types="cypress" />
describe('Midtrans Demo Website', () => {
    beforeEach(() => {
      cy.visit('https://dashboard.midtrans.com/register')
    })
  
    it('should sign up successfully', () => {
      // Sign up
      //cy.get('.btn.btn-signup').click()
      cy.get('h1').should('be.visible')

      cy.get('#user_merchant_name').type('testuser')
      cy.get('#user_full_name').type('testuser')
      cy.get('#user_email').type('testuser@gmail.com')
      cy.get('#user_phone').type('85261869455')
      cy.get('#user_business_type_corporate').click()
      cy.get('#user_password').type('Testpassword123!')
      cy.get('#user_password_confirmation').type('Testpassword123!')
      
      cy.get('#signup_btn').click()
      cy.get('[style="margin: 0px auto; top: 0px; left: 0px; right: 0px; position: absolute; border: 1px solid rgb(204, 204, 204); z-index: 2000000000; background-color: rgb(255, 255, 255); overflow: hidden; width: 400px; height: 580px;"] > iframe').should('be.visible')
        
      
    })
  })
  