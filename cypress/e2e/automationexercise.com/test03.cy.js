/// <reference types="cypress" />

const { generateUserObj } = require('../../support/utils/userGenerator');

describe('Test Case 3: Login User with incorrect email and password', () => {
  const userObj = generateUserObj();

  it('Should fail to log in user with invalid data', () => {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    cy.visit('http://automationexercise.com/');

    // 3. Verify that home page is visible successfully
    cy.contains('h2', 'Category').should('be.visible');
    cy.contains('h2', 'Features Items').should('be.visible');
    cy.contains('#header a[style="color: orange;"]', 'Home').should('be.visible');

    // 4. Click on 'Signup / Login' button
    cy.contains('#header .navbar-nav li a[href="/login"]', 'Signup / Login').should('be.visible').click();

    // 5. Verify 'Login to your account' is visible
    cy.contains('#form .login-form h2', 'Login to your account').should('be.visible');

    // 6. Enter incorrect email address and password
    cy.get('form[action="/login"] input[data-qa="login-email"]').should('be.visible').type(userObj.email);
    cy.get('form[action="/login"] input[data-qa="login-password"]')
      .should('be.visible')
      .type(userObj.password, { parseSpecialCharSequences: false });

    // 7. Click 'login' button
    cy.get('form[action="/login"] button[data-qa="login-button"]').contains('Login').should('be.visible').click();

    // 8. Verify error 'Your email or password is incorrect!' is visible
    cy.contains('form[action="/login"] p', 'Your email or password is incorrect!').should('be.visible');
  });
});
