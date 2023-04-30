/// <reference types="cypress" />

describe("Validate Dropdown", () => {
  beforeEach("Visit", () => {
    cy.visit("https://letcode.in/test");
    cy.get(".title").should(
      "include.text",
      "Practice and become pro in test automation"
    );
  });
  it("Testing Dropdown", () => {
    cy.get(
      ":nth-child(2) > .hero-body > div.container > .columns > :nth-child(3) > app-menu > .card > .card-footer > .card-footer-item"
    )
      .should("include.text", "Drop-Down")
      .click();
    cy.get("#fruits").select("Apple").should("include.text", "Apple");
    cy.get("#superheros > :nth-child(23)")
      .should("include.text", "Spider-Man")
      .click();
    cy.get("#lang").select("sharp").should("include.text", "C#");
    cy.get("#country").select("India").should("include.text", "India");
  });
});
