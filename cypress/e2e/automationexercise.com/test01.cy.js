/// <reference types="cypress" />

const { generateUserObj } = require('../../support/utils/userGenerator');

describe('Test Case 1: Register User', () => {
  const userObj = generateUserObj();

  it('Should register user', () => {
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
    cy.contains('.login-form h2 b', 'Enter Account Information').should('be.visible');

    // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.get('form[action="/signup"] input[data-qa="name"]').should('have.value', userObj.name).should('be.visible');
    cy.get('form[action="/signup"] input[data-qa="email"]').should('have.value', userObj.email).should('be.visible');

    // 9. Fill details: Title, Name, Email, Password, Date of birth
    //title
    cy.get('form[action="/signup"] div[data-qa="title"] input[type="radio"]#id_gender1')
      .should('have.value', 'Mr')
      .should('be.visible')
      .check();

    //password
    cy.get('form[action="/signup"] input[data-qa="password"]')
      .should('be.visible')
      .type(userObj.password, { parseSpecialCharSequences: false });

    //date of birth
    cy.get('form[action="/signup"] select[data-qa="days"]')
      .should('be.visible')
      .select(userObj.birth_date.day)
      .find('option:selected')
      .should('have.text', userObj.birth_date.day);

    cy.get('form[action="/signup"] select[data-qa="months"]')
      .should('be.visible')
      .select(userObj.birth_date.month)
      .find('option:selected')
      .should('have.text', userObj.birth_date.monthStr);

    cy.get('form[action="/signup"] select[data-qa="years"]')
      .should('be.visible')
      .select(String(userObj.birth_date.year))
      .find('option:selected')
      .should('have.text', userObj.birth_date.year);

    // 10. Select checkbox 'Sign up for our newsletter!'
    cy.get('form[action="/signup"] input[type="checkbox"]#newsletter').should('be.visible').check();

    // 11. Select checkbox 'Receive special offers from our partners!'
    cy.get('form[action="/signup"] input[type="checkbox"]#optin').should('be.visible').check();

    // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    //first name
    cy.get('form[action="/signup"] input[data-qa="first_name"]').should('be.visible').type(userObj.first_name);

    //last name
    cy.get('form[action="/signup"] input[data-qa="last_name"]').should('be.visible').type(userObj.last_name);

    //company
    cy.get('form[action="/signup"] input[data-qa="company"]').should('be.visible').type(userObj.company);

    //address
    cy.get('form[action="/signup"] input[data-qa="address"]').should('be.visible').type(userObj.address);

    //country
    cy.get('form[action="/signup"] select[data-qa="country"]')
      .should('be.visible')
      .select(userObj.country)
      .find('option:selected')
      .should('have.text', userObj.country);

    //state
    cy.get('form[action="/signup"] input[data-qa="state"]').should('be.visible').type(userObj.state);

    //city
    cy.get('form[action="/signup"] input[data-qa="city"]').should('be.visible').type(userObj.city);

    //zipcode
    cy.get('form[action="/signup"] input[data-qa="zipcode"]').should('be.visible').type(userObj.zipcode);

    //mobile number
    cy.get('form[action="/signup"] input[data-qa="mobile_number"]').should('be.visible').type(userObj.mobile_number);

    // 13. Click 'Create Account button'
    cy.get('form[action="/signup"] button[data-qa="create-account"]')
      .should('be.visible')
      .should('contain.text', 'Create Account')
      .click();

    // 14. Verify that 'ACCOUNT CREATED!' is visible
    cy.get('#form h2[data-qa="account-created"]').contains('Account Created!').should('be.visible');

    // 15. Click 'Continue' button
    cy.get('#form a[data-qa="continue-button"]').contains('Continue').should('be.visible').click();

    // 16. Verify that 'Logged in as username' is visible
    cy.contains('#header .navbar-nav li', 'Logged in as').should('contain.text', userObj.name).should('be.visible');

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
