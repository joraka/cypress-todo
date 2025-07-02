Cypress.Commands.add('loginUser', (userObj) => {
  cy.contains('#header .navbar-nav li a[href="/login"]', 'Signup / Login').click();
  cy.get('form[action="/login"] input[data-qa="login-email"]').type(userObj.email);
  cy.get('form[action="/login"] input[data-qa="login-password"]').type(userObj.password, {
    parseSpecialCharSequences: false,
  });
  cy.get('form[action="/login"] button[data-qa="login-button"]', 'Login').click();
});
