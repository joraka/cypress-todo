/// <reference types="cypress" />

const { generateUserObj } = require('../../support/utils/userGenerator');

describe('Test Case 2: Login User with correct email and password', () => {
  const userObj = generateUserObj();

  it('Should login user with valid data', () => {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    cy.visit('http://automationexercise.com/');

    //register user
    cy.registerUser(userObj);

    // 3. Verify that home page is visible successfully
    cy.contains('h2', 'Category').should('be.visible');
    cy.contains('h2', 'Features Items').should('be.visible');
    cy.get('#header a[style="color: orange;"]').contains('Home').should('be.visible');

    // 4. Click on 'Signup / Login' button
    cy.contains('#header .navbar-nav li a[href="/login"]', 'Signup / Login').should('be.visible').click();

    // 5. Verify 'Login to your account' is visible
    cy.contains('#form .login-form h2', 'Login to your account').should('be.visible');

    // 6. Enter correct email address and password
    cy.get('form[action="/login"] input[data-qa="login-email"]').should('be.visible').type(userObj.email);
    cy.get('form[action="/login"] input[data-qa="login-password"]')
      .should('be.visible')
      .type(userObj.password, { parseSpecialCharSequences: false });

    // 7. Click 'login' button
    cy.get('form[action="/login"] button[data-qa="login-button"]').contains('Login').should('be.visible').click();

    // 8. Verify that 'Logged in as username' is visible
    cy.contains('#header .navbar-nav li', 'Logged in as').should('contain.text', userObj.name).should('be.visible');

    // 9. Click 'Delete Account' button
    cy.contains('#header .navbar-nav li a[href="/delete_account"]', 'Delete Account').should('be.visible').click();

    // 10. Verify that 'ACCOUNT DELETED!' is visible
    cy.contains('#form h2[data-qa="account-deleted"]', 'Account Deleted!').should('be.visible');
  });
});
