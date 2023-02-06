/// <reference types="cypress" />

describe("Validate Element", () => {
  beforeEach("Visit", () => {
    cy.visit("https://letcode.in/test");
    cy.get(".title").should(
      "include.text",
      "Practice and become pro in test automation"
    );
  });
  it("Testing Elements", () => {
    cy.get(
      ":nth-child(4) > .hero-body > div.container > .columns > :nth-child(4) > app-menu > .card > .card-footer > .card-footer-item"
    )
      .should("include.text", "Find Elements")
      .click();
    cy.get(".input").type("rizkygunardi{enter}");
    cy.get(".media").should("include.text", "Rizky Gunardi");
    cy.get("app-gitrepos > .block > .content").should(
      "include.text",
      "https://github.com/rizkygunardi/letCode-Testing"
    );
  });
});
