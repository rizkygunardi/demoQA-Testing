/// <reference types="cypress" />

describe("Validate Input", () => {
  beforeEach("Visit", () => {
    cy.visit("https://letcode.in/test");
    cy.get(".title").should(
      "include.text",
      "Practice and become pro in test automation"
    );
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });
  it("Fill in Input", () => {
    cy.get(
      ":nth-child(2) > .hero-body > div.container > .columns > :nth-child(1) > app-menu > .card > .card-footer > .card-footer-item"
    )
      .should("include.text", "Edit")
      .click();
    cy.get("#fullName").type("Rizky Gunardi");
    cy.get("#join")
      .type(" and awesome")
      .should("have.value", "I am good and awesome");
    cy.get("#getMe").should("have.value", "ortonikc");
    cy.get("#clearMe").clear().should("have.value", "");
    // .wait(2000)
    // .clear();
    cy.get("#noEdit").should("be.disabled");
    cy.get("#dontwrite").should("have.value", "This text is readonly");
  });
});
