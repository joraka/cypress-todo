/// <reference types="cypress" />

const { generateUserObj } = require('../../support/utils/userGenerator');

describe('Test Case 5: Register User with existing email', () => {
  const userObj = generateUserObj();

  it('Should fail to register user with same email', () => {
    //register user
    cy.registerUser(userObj);

    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    cy.visit('http://automationexercise.com/');

    // 3. Verify that home page is visible successfully
    cy.contains('h2', 'Category').should('be.visible');
    cy.get('#header a[style="color: orange;"]').contains('Home').should('be.visible');

    // 4. Click on 'Signup / Login' button
    cy.get('#header a[href="/login"]').contains('Signup / Login').should('be.visible').click();

    // 5. Verify 'New User Signup!' is visible
    cy.contains('#form h2', 'New User Signup!').should('be.visible');

    // 6. Enter name and email address
    cy.get('form[action="/signup"] input[data-qa="signup-name"]').should('be.visible').type(userObj.name);
    cy.get('form[action="/signup"] input[data-qa="signup-email"]').should('be.visible').type(userObj.email);

    // 7. Click 'Signup' button
    cy.get('form[action="/signup"] button[data-qa="signup-button"]').should('be.visible').click();

    // 8. Verify error 'Email Address already exist!' is visible
    cy.contains('form[action="/signup"] p', 'Email Address already exist!').should('be.visible');
  });
});
