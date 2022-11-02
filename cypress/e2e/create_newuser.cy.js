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




describe('Register account', function() {
    beforeEach(() => {
        cy.visit(locators.URL);
        cy.get(locators.homepageSignIn).click();
       })
       it('Register User', function() {
        cy.get(locators.createUseremail).type(email);
        cy.get(locators.createAccBTN).click()
        cy.wait(5000)
        cy.get(locators.gender).click()
        cy.get(locators.firstNameField).type(firstName)
        cy.get(locators.lastNameField).type(lastName)
        cy.get(locators.passwordField).type(password)
        cy.get(locators.dobDays).select(9)
        cy.get(locators.dobMonths).select('September')
        cy.get(locators.dobYears).select('1990')
        cy.get(locators.Address).type('No 1 testing street')
        cy.get(locators.city).type('Chicago')
        cy.get('#id_state').select('Illinois')
        cy.get('#postcode').type('00000')
        cy.get('#phone_mobile').type('0401234567')
        cy.get('#alias').type('QA House')
        cy.get('#submitAccount > span').click()
        cy.get(locators.MyAccountPlaceholder).should('have.text', locators.AssertSuccessMyAccount)
      })
    })