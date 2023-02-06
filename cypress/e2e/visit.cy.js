/// <reference types="cypress" />

describe("Visit website", () => {
  it("Validate Website", () => {
    cy.visit("https://letcode.in/test");
    cy.url().should("include", "/test");
  });
});
