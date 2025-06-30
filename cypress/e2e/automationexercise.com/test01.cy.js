/// <reference types="cypress" />

const { generateUserObj } = require('./helpers/dataHelper');
const registerUserHelper = require('./helpers/registerUserHelper');

describe('Test Case 1: Register User', () => {
  const myData = generateUserObj();

  it('Should register user', () => {
    registerUserHelper(myData);

    // 17. Click 'Delete Account' button
    cy.contains('#header .navbar-nav li a[href="/delete_account"]', 'Delete Account').should('be.visible').click();

    // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button

    cy.contains('#form h2[data-qa="account-deleted"]', 'Account Deleted!').should('be.visible');

    cy.get('#form a[data-qa="continue-button"]').contains('Continue').should('be.visible').click();

    // home page
    cy.contains('h2', 'Category').should('be.visible');
    cy.get('#header a[style="color: orange;"]').contains('Home').should('be.visible');
  });
});
