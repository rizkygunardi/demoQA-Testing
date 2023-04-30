/// <reference types="Cypress" />

describe("Validate Button testing on LetCode.in", () => {
  beforeEach("Visit", () => {
    cy.visit("https://letcode.in/test");
    cy.get(".title").should(
      "include.text",
      "Practice and become pro in test automation"
    );
  });
  it("Testing Button normal", () => {
    cy.VButton();
    cy.get("#home").click();
    cy.get(".column > .title").should("have.text", " LetCode with Koushik");

    function inWork() {
      cy.get(".navbar-burger").then((ap) => {
        if (Cypress.dom.isVisible(ap)) {
          cy.wait(100);
          cy.wrap(ap)
            .get(".navbar-burger")
            .invoke("removeAttr", "target")
            .click({ multiple: true });
          cy.get("#testing").click();
        } else {
          cy.wait(500);
          cy.get("#testing").click();
        }
      });
    }
    inWork();
    cy.get(".title").should(
      "have.text",
      " Practice and become pro in test automation"
    );
    cy.wait(1000);
  });
  it("Testing Button Coordinate", () => {
    cy.VButton();
    cy.get("#position").click();
    cy.get("#position").should(
      "have.css",
      "background-color",
      "rgb(250, 124, 145)"
    );
    cy.wait(1000);
  });

  it("Testing Button find Color", () => {
    cy.VButton();
    cy.get("#color").should(
      "have.css",
      "background-color",
      "rgb(138, 77, 118)"
    );
    cy.wait(1000);
  });

  it("Testing how tall & long button", () => {
    cy.VButton();
    cy.get("#property").should("have.css", "height", "40px");
    cy.wait(1000);
  });

  it("Testing button disable", () => {
    cy.VButton();
    cy.get("#isDisabled").should("be.disabled");
    cy.wait(1000);
  });

  it("Testing Hold Button", () => {
    cy.VButton();
    cy.contains("Button Hold!").trigger("mousedown");
    cy.wait(1000);
    cy.contains("Button has been long pressed").should("be.visible");
    cy.wait(1000);
  });
});
