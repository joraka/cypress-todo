/// <reference types="cypress" />

const { generateEmail, generatePassword } = require('../../../misc/misc');

describe('Test Case 1: Register User', () => {
  const myData = {
    name: 'Bob',
    email: generateEmail('marley.com', 'bob'),
    password: generatePassword(15),
    first_name: 'Bob',
    last_name: 'Marley',
    company: 'Bobina Marlina',
    full_address: '420 5th Ave #304, New York, NY 10018, United States',
    address: '420 5th Ave #304',
    city: 'New York',
    state: 'New York',
    country: 'United States',
    zipcode: '10018',
    mobile_number: '+12124447282',
  };

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

    cy.get('form[action="/signup"] input[data-qa="signup-name"]').should('be.visible').type(myData.name);
    cy.get('form[action="/signup"] input[data-qa="signup-email"]').should('be.visible').type(myData.email);

    // 7. Click 'Signup' button
    cy.get('form[action="/signup"] button[data-qa="signup-button"]').should('be.visible').click();

    cy.contains('.login-form h2 b', 'Enter Account Information').should('be.visible');

    // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.get('form[action="/signup"] input[data-qa="name"]').should('have.value', myData.name).should('be.visible');
    cy.get('form[action="/signup"] input[data-qa="email"]').should('have.value', myData.email).should('be.visible');

    // 9. Fill details: Title, Name, Email, Password, Date of birth
    //title
    cy.get('form[action="/signup"] div[data-qa="title"] input[type="radio"]')
      .should('have.value', 'Mr')
      .should('be.visible')
      .check();

    //password
    cy.get('form[action="/signup"] input[data-qa="password"]').should('be.visible').type(myData.password);

    //date of birth
    cy.get('form[action="/signup"] select[data-qa="days"]')
      .should('be.visible')
      .select('1')
      .find('option:selected')
      .should('have.text', '1');

    cy.get('form[action="/signup"] select[data-qa="months"]')
      .should('be.visible')
      .select('2')
      .find('option:selected')
      .should('have.text', 'February');

    cy.get('form[action="/signup"] select[data-qa="years"]')
      .should('be.visible')
      .select('1980')
      .find('option:selected')
      .should('have.text', '1980');

    // 10. Select checkbox 'Sign up for our newsletter!'
    cy.get('form[action="/signup"] input[type="checkbox"]#newsletter').should('be.visible').check();

    // 11. Select checkbox 'Receive special offers from our partners!'
    cy.get('form[action="/signup"] input[type="checkbox"]#optin').should('be.visible').check();

    // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    //first name
    cy.get('form[action="/signup"] input[data-qa="first_name"]').should('be.visible').type(myData.first_name);

    //last name
    cy.get('form[action="/signup"] input[data-qa="last_name"]').should('be.visible').type(myData.last_name);

    //company
    cy.get('form[action="/signup"] input[data-qa="company"]').should('be.visible').type(myData.company);

    //address
    cy.get('form[action="/signup"] input[data-qa="address"]').should('be.visible').type(myData.address);

    //country
    cy.get('form[action="/signup"] select[data-qa="country"]')
      .should('be.visible')
      .select(myData.country)
      .find('option:selected')
      .should('have.text', myData.country);

    //state
    cy.get('form[action="/signup"] input[data-qa="state"]').should('be.visible').type(myData.state);

    //city
    cy.get('form[action="/signup"] input[data-qa="city"]').should('be.visible').type(myData.city);

    //zipcode
    cy.get('form[action="/signup"] input[data-qa="zipcode"]').should('be.visible').type(myData.zipcode);

    //mobile number
    cy.get('form[action="/signup"] input[data-qa="mobile_number"]').should('be.visible').type(myData.mobile_number);

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
    cy.contains('#header .navbar-nav li', 'Logged in as').should('contain.text', myData.name).should('be.visible');

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
