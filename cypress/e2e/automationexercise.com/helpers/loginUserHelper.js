/// <reference types="cypress" />

function loginUserHelper(myData) {
  // 1. Launch browser
  // 2. Navigate to url 'http://automationexercise.com'
  cy.visit('http://automationexercise.com/');

  // 3. Verify that home page is visible successfully
  cy.contains('h2', 'Category').should('be.visible');
  cy.contains('h2', 'Features Items').should('be.visible');
  cy.get('#header a[style="color: orange;"]').contains('Home').should('be.visible');

  // 4. Click on 'Signup / Login' button
  cy.contains('#header .navbar-nav li a[href="/login"]', 'Signup / Login').should('be.visible').click();

  // 5. Verify 'Login to your account' is visible
  cy.contains('#form .login-form h2', 'Login to your account').should('be.visible');

  // 6. Enter correct email address and password
  cy.get('form[action="/login"] input[data-qa="login-email"]').should('be.visible').type(myData.email);
  cy.get('form[action="/login"] input[data-qa="login-password"]')
    .should('be.visible')
    .type(myData.password, { parseSpecialCharSequences: false });

  // 7. Click 'login' button
  cy.get('form[action="/login"] button[data-qa="login-button"]').contains('Login').should('be.visible').click();

  // 8. Verify that 'Logged in as username' is visible
  cy.contains('#header .navbar-nav li', 'Logged in as').should('contain.text', myData.name).should('be.visible');
}

module.exports = loginUserHelper;
