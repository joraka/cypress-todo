Cypress.Commands.add('registerUser', (userObj) => {
  cy.contains('#header a[href="/login"]', 'Signup / Login').click();
  cy.get('form[action="/signup"] input[data-qa="signup-name"]').type(userObj.name);
  cy.get('form[action="/signup"] input[data-qa="signup-email"]').type(userObj.email);
  cy.get('form[action="/signup"] button[data-qa="signup-button"]').click();
  cy.get('form[action="/signup"] input#id_gender1').check();
  cy.get('form[action="/signup"] input[data-qa="password"]').type(userObj.password, {
    parseSpecialCharSequences: false,
  });
  cy.get('form[action="/signup"] select[data-qa="days"]').select(userObj.birth_date.day);
  cy.get('form[action="/signup"] select[data-qa="months"]').select(userObj.birth_date.month);
  cy.get('form[action="/signup"] select[data-qa="years"]').select(String(userObj.birth_date.year));
  cy.get('form[action="/signup"] input[data-qa="first_name"]').type(userObj.first_name);
  cy.get('form[action="/signup"] input[data-qa="last_name"]').type(userObj.last_name);
  cy.get('form[action="/signup"] input[data-qa="company"]').type(userObj.company);
  cy.get('form[action="/signup"] input[data-qa="address"]').type(userObj.address);
  cy.get('form[action="/signup"] select[data-qa="country"]').select(userObj.country);
  cy.get('form[action="/signup"] input[data-qa="state"]').type(userObj.state);
  cy.get('form[action="/signup"] input[data-qa="city"]').type(userObj.city);
  cy.get('form[action="/signup"] input[data-qa="zipcode"]').type(userObj.zipcode);
  cy.get('form[action="/signup"] input[data-qa="mobile_number"]').type(userObj.mobile_number);
  cy.get('form[action="/signup"] button[data-qa="create-account"]').should('contain.text', 'Create Account').click();

  //cleanup
  cy.clearCookies();
  cy.visit('http://automationexercise.com/');
});
