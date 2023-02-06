/// <reference types="cypress" />

describe("Validate Input", () => {
  beforeEach("Visit", () => {
    cy.visit("https://letcode.in/test");
    cy.get(".title").should(
      "include.text",
      "Practice and become pro in test automation"
    );
  });
  it("Fill in Input", () => {
    cy.get(
      ":nth-child(2) > .hero-body > div.container > .columns > :nth-child(1) > app-menu > .card > .card-footer > .card-footer-item"
    )
      .should("include.text", "Edit")
      .click();
    cy.get("#fullName").type("Rizky Gunardi");
    cy.get("#join")
      .clear()
      .type("I Very Happy")
      .should("have.value", "I Very Happy");
    cy.get("#getMe")
      .clear()
      .type("Melakukan testing pada website letcode")
      .should("have.value", "Melakukan testing pada website letcode");
    cy.get("#clearMe")
      .clear()
      .type("Mari belajar bersama")
      .should("have.value", "Mari belajar bersama")
      .wait(2000)
      .clear();
  });
});
