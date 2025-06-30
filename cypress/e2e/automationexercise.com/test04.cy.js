/// <reference types="cypress" />

const { generateUserObj } = require('./helpers/dataHelper');
const loginUserHelper = require('./helpers/loginUserHelper');
const registerUserHelper = require('./helpers/registerUserHelper');

describe('Test Case 4: Logout User', () => {
  const myData = generateUserObj();

  it('Should register user', () => {
    registerUserHelper(myData);
  });

  it('Should login user with valid data and logs out', () => {
    loginUserHelper(myData);

    // 9. Click 'Logout' button
    cy.contains('#header .navbar-nav li a[href="/logout"]', 'Logout').should('be.visible').click();

    // 10. Verify that user is navigated to login page
    cy.contains('#form .login-form h2', 'Login to your account').should('be.visible');
    cy.get('form[action="/login"] button[data-qa="login-button"]').contains('Login').should('be.visible');
  });
});
