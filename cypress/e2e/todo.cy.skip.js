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

  it("footer displays 'Double-click to edit a todo'", () => {
    cy.visit("https://todolist.james.am/#/");
    cy.get("footer").contains("Double-click to edit a todo").should("be.visible");
  });

  it("todo input placeholder shows 'What need's to be done?'", () => {
    cy.visit("https://todolist.james.am/#/");
    cy.get('input[ng-model="newTodo"]')
      .should("be.visible")
      .and("have.attr", "placeholder", "What need's to be done?");
  });
});
