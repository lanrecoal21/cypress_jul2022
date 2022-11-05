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


describe('Add product To Cart and Check Out', function() {
    beforeEach(() => {
        cy.visit(locators.URL);
        cy.get(locators.homepageSignIn).click();
       })

       it("Registered User should be able to add product to cart and proceed to check out", () => {
        cy.get(locators.Useremail).type("nwolisachinedu2015@yahoo.com")
        cy.get(locators.Userpassword).type("Godson2015")
        cy.get(locators.SigninBtn).click()
        cy.get(locators.TSHIRTS).click()
        cy.get(locators.SizeM).click()
        cy.get(locators.AddToCartBtn).click()
        cy.get(locators.ProceedToCheckOut).click()
        cy.get(locators.ProceedToCheckOutConfirm).click()
        cy.get(locators.ProceedToCheckOutConfirm).click()
        cy.get(locators.TermsOfService).click()
        cy.get(locators.ProceedToCheckOutConfirm).click()
        cy.get(locators.BankWirePayment).click()
        cy.get(locators.ConfirmMyOrder).click()
        cy.get(locators.OrderConfirmation).should('be.visible')


      });

    })