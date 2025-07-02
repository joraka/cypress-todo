/// <reference types="cypress" />
require('@cypress/xpath')

describe('Test Case 13: Verify Product quantity in Cart', () => {
  it('Should have correct amount in the cart', () => {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    cy.visit('http://automationexercise.com/');

    // 3. Verify that home page is visible successfully
    cy.contains('h2', 'Category').should('be.visible');
    cy.contains('h2', 'Features Items').should('be.visible');
    cy.get('#header .navbar-nav li a[style="color: orange;"]').contains('Home').should('be.visible');

    // 4. Click 'View Product' for any product on home page
    cy.get('.features_items .product-image-wrapper')
      .eq(1)
      .contains('.choose a[href^="/product_details/"]', 'View Product')
      .should('be.visible')
      .click();

    // 5. Verify product detail is opened
    cy.get('.product-details')
      .should('be.visible')
      .within(() => {
        cy.contains('p', 'Category').should('be.visible');
        cy.contains('p', 'Availability').should('be.visible');
        cy.contains('p', 'Brand').should('be.visible');
        cy.contains('label', 'Quantity').should('be.visible');
        cy.get('.view-product img').should('be.visible');
      });

    // 6. Increase quantity to 4
    cy.get('.product-information input[type="number"]#quantity').should('be.visible').clear().type(4);

    // 7. Click 'Add to cart' button
    cy.contains('.product-information button', 'Add to cart').should('be.visible').click();

    // 8. Click 'View Cart' button
    cy.contains('#cartModal a[href="/view_cart"]', 'View Cart').should('be.visible').click();

    // 9. Verify that product is displayed in cart page with exact quantity
    cy.contains('#product-2 .cart_quantity button', 4).should('be.visible');
  });
});
