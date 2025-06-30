/// <reference types="cypress" />

const { generateUserObj } = require('./helpers/dataHelper');
const loginUserHelper = require('./helpers/loginUserHelper');
const registerUserHelper = require('./helpers/registerUserHelper');

describe('Test Case 2: Login User with correct email and password', () => {
  const myData = generateUserObj();

  it('Should register user', () => {
    registerUserHelper(myData);
  });

  it('Should login user with valid data', () => {
    loginUserHelper(myData);

    // 9. Click 'Delete Account' button
    cy.contains('#header .navbar-nav li a[href="/delete_account"]', 'Delete Account').should('be.visible').click();

    // 10. Verify that 'ACCOUNT DELETED!' is visible
    cy.contains('#form h2[data-qa="account-deleted"]', 'Account Deleted!').should('be.visible');
  });
});
