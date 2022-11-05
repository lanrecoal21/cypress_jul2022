import { faker } from '@faker-js/faker';
import * as locators from '../e2e/pageobjects/locators.js';
const firstName = faker.name.firstName()
console.log()
const lastName = faker.name.lastName()
console.log()
const email = faker.internet.email()
console.log()
const password = faker.internet.password()
console.log()

describe('Get to Homepage', () => {
  beforeEach(() => {

    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click()

  })

  it('User Should Login with valid credentials and contact us', () => {
    
     
      cy.get(locators.EmailAddressField).type(email)
      cy.get(locators.passwordField).type('testing')
      cy.get(locators.SubmitLoginBTN).click()
      cy.get('.account > span').should('have.text', firstName +' '+ lastName)
      cy.get(locators.ContactUsBTN).click()  
      cy.get(locators.SubjectHeading).select('Customer service')
      cy.get(locators.EmailAddressField).clear()
      cy.get(locators.EmailAddressField).type(email)
      cy.get(locators.MessageBox).type('order not received') 
      cy.get(locators.SendBTN).click()  
      cy.get('.alert').should('have.text', 'Your message has been successfully sent to our team.')



      })

    })