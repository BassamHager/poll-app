describe("home page", () => {
  const pollButton = () => cy.get("[data-cy=create-a-poll-button]");

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("has a create-poll button", () => {
    pollButton().should("exist").and("is.enabled");
  });

  it("navigates to poll page when create-poll button is clicked", () => {
    pollButton().click();
    cy.url().should("eq", "http://localhost:3000/poll");
  });
});

export {};
