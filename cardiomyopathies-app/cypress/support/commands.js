Cypress.Commands.add("loginDoctor", () => {
    cy.visit("http://127.0.0.1:5173/login");
    cy.get("#email").type("djogn838@gmail.com");
    cy.get("#password").type("test78");
    cy.get("#loginButton").click();
    cy.wait(2000); // wait for the page to reload
    cy.url().should("include", "/"); // Root Page 
    cy.contains("Test");   
});
