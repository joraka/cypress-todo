/// <reference types="cypress" />

describe("todo list", () => {
  it("header should be displayed", () => {
    cy.visit("https://todolist.james.am/#/");
    cy.get("header").contains("To Do List").should("be.visible");
  });
  
  it("footer displays 'Double-click to edit a toodo'", () => {
    cy.visit("https://todolist.james.am/#/");
    cy.get("footer").contains("Double-click to edit a toodo").should("be.visible");
  });
});
