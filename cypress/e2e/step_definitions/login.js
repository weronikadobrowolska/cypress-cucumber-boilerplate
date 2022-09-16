import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/LoginPage");


Given("A user opens a kung fu website", () => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  cy.visit("/");
});

Then("I can see the booking form", () => {
  cy.get('.wbk-inner-container').should('be.visible')
});



When("A user goes to members area", () => {
  cy.get('.menu-toggle > .sydney-svg-icon').click();
  cy.get('#mainnav > .menu-navigation-container > #primary-menu > .menu-item-1168 > a').click();
});

When("A user enters the username {string}", (username) => {
  cy.wait(500);
  loginPage.typeUsername(username);
});
When("A user provides incorrect credentials", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    loginPage.typeUsername(row.username);
    loginPage.typePassword(row.password);
  });
});
And("A user enters the password {string}", (password) => {
  loginPage.typePassword(password);
});
And("A user clicks on the login button", () => {
  loginPage.clickLogin();
});
Then("the url will contains the inventory subdirectory", () => {
  cy.url().should("contains", "/inventory.html");
});
Then("The error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessage().should("have.text", errorMessage);
});
