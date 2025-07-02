/// <reference types="cypress" />

require('cypress-real-events/support');

describe('Test Case 12: Add Products in Cart', () => {
  it('Should add products to cart', () => {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    cy.visit('http://automationexercise.com/');

    // 3. Verify that home page is visible successfully
    cy.contains('h2', 'Category').should('be.visible');
    cy.contains('h2', 'Features Items').should('be.visible');
    cy.get('#header .navbar-nav li a[style="color: orange;"]').contains('Home').should('be.visible');

    // 4. Click 'Products' button
    cy.get('#header .navbar-nav li a[href="/products"]').contains('Products').should('be.visible').click();
    cy.contains('h2', 'All Products').should('be.visible');

    const itemsInCart = {};

    // 5. Hover over first product and click 'Add to cart'
    cy.get('.features_items .single-products')
      .eq(0)
      .should('be.visible')
      .realHover()
      .find('.productinfo')
      .within(($info) => {
        const price = $info.find('h2').text().trim();
        const title = $info.find('p').text().trim();
        const id = $info.find('a.add-to-cart').attr('data-product-id');
        itemsInCart[id] = { id, price, title };
        cy.wrap($info).parent().find('.product-overlay a.add-to-cart').click({ force: true });
      });

    // 6. Click 'Continue Shopping' button
    cy.contains('#cartModal button', 'Continue Shopping').should('be.visible').click();

    // 7. Hover over second product and click 'Add to cart'
    cy.get('.features_items .single-products')
      .eq(1)
      .should('be.visible')
      .realHover()
      .find('.productinfo')
      .within(($info) => {
        const price = $info.find('h2').text().trim();
        const title = $info.find('p').text().trim();
        const id = $info.find('a.add-to-cart').attr('data-product-id');
        itemsInCart[id] = { id, price, title };
        cy.wrap($info).parent().find('.product-overlay a.add-to-cart').click({ force: true });
      });

    // 8. Click 'View Cart' button
    cy.contains('#cartModal a[href="/view_cart"]', 'View Cart').should('be.visible').click();

    // 9. Verify both products are added to Cart
    // 10. Verify their prices, quantity and total price
    cy.get('#cart_items tbody tr')
      .then(($rows) => {
        expect($rows.length, 'expect items in table be the same size as added items').to.equal(
          Object.keys(itemsInCart).length
        );
      })
      .each(($row) => {
        const id = $row.attr('id').split('-')[1];
        expect(itemsInCart, `expect itemsInCart to have property for id ${id}`).to.have.property(id);

        cy.wrap($row).within(() => {
          cy.get('.cart_description h4')
            .invoke('text')
            .then((titleText) => {
              expect(titleText.trim(), `expect title for id ${id}`).to.equal(itemsInCart[id].title);
            });

          cy.get('.cart_price')
            .invoke('text')
            .then((priceText) => {
              expect(priceText.trim(), `expect price for id ${id}`).to.equal(itemsInCart[id].price);
            });

          cy.get('.cart_total')
            .invoke('text')
            .then((priceText) => {
              expect(priceText.trim(), `expect total for id ${id}`).to.equal(itemsInCart[id].price);
            });

          cy.get('.cart_quantity')
            .invoke('text')
            .then((qtyText) => {
              expect(qtyText.trim(), `expect quantity for id ${id}`).to.equal('1');
            });
        });
      });
  });
});
