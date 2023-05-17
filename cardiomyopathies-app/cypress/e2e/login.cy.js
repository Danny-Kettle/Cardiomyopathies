describe('Login Page', () => {
  it('Logs in succesfully with doctor details', () => {
    cy.loginDoctor()
  })
  it('Invalid email', () => {
    cy.visit('http://localhost:5173/login')
    cy.get('#email').type('djogn8238@gmail.com')
    cy.get('#password').type('test78')
    cy.get('#loginButton').click()
    cy.wait(2000) // wait for the page to reload
    cy.url().should('include', '/login') // Root Page
  })

  it('Invalid password', () => {
    cy.visit('http://localhost:5173/login')
    cy.get('#email').type('djogn838@gmail.com')
    cy.get('#password').type('test78121')
    cy.get('#loginButton').click()
    cy.wait(2000) // wait for the page to reload
    cy.url().should('include', '/login') // Root Page
  })

  it('Invalid Create Account', () => {
    cy.visit('http://localhost:5173/login')
    cy.get('#createAccount').click()
    cy.get('#email').type('djogn838AASada@gmail.com')
    cy.get('#password').type('test11111')
    cy.get('#username').type('test')
    cy.get('#confirm-password').type('test11111111')
    cy.get('#first-name').type('test')
    cy.get('#last-name').type('test')
    cy.get('#role').select('Guest')
    cy.wait(2000) // wait for the page to reload
    cy.url().should('include', '/login') // Root Page
    cy.contains('Already have an account? Log In')
  })
})
