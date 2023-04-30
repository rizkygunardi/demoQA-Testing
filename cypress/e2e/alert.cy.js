/// <reference types="cypress" />

describe("Validate Alert Message", () => {
  beforeEach("Visit", () => {
    cy.visit("https://letcode.in/test");
    cy.get(".title").should(
      "include.text",
      "Practice and become pro in test automation"
    );
  });

  it("Validate Alert Popup", () => {
    cy.get("a").contains("Dialog").click();
    cy.on("window:alert", (alertText) => {
      expect(alertText).eq("Hey! Welcome to LetCode");
    });
    cy.get("#accept").click();
  });

  it("Validate Confirm Alert", () => {
    cy.get("a").contains("Dialog").click();
    cy.on("window:confirm", (confirmText) => {
      expect(confirmText).eq("Are you happy with LetCode?");
      return true;
    });
    cy.get("#confirm").click();
  });

  it("Validate Prompt Alert", () => {
    cy.get("a").contains("Dialog").click();
    cy.window().then(($win) => {
      cy.stub($win, "prompt").returns("Hello my name Rizky");
      cy.get("#prompt").click();
    });
    cy.get(".notification").should(
      "have.text",
      "Your name is: Hello my name Rizky"
    );
  });

  it("Validate Modern Alert", () => {
    cy.get("a").contains("Dialog").click();
    cy.get("#modern").click();
    cy.get(".modal").click();
    cy.get(".modal-content > .card > .card-content").should(
      "have.text",
      "Modern Alert - Some people address me as sweet alert as well "
    );
    cy.get(".modal-close").click();
  });
});
