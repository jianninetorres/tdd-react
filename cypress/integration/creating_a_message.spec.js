/* eslint-disable no-undef */

// test describing what we want users to be able to do
describe("Creating a message", () => {
  // what does this test mock
  it("Displays the message in the list", () => {
    // the user visits the site
    cy.visit("http://localhost:3000");

    // the user types "New message" into the message text field
    cy.get('[data-testid="messageText"]').type("New message");

    // the user clicks the send button
    cy.get('[data-testid="sendButton"]').click();

    // We confirm that the message text field is cleared out
    cy.get('[data-testid="messageText"]').should("have.value", "");

    // Confirm the "New message" entered appears somewhere on screen
    cy.contains("New message");
  });
});
