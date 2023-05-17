describe('Vue Template Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/charts')
  })

  it('displays the correct title', () => {
    cy.get('h1').should('have.text', 'Search Type: Overview')
  })

  it('selects a search type', () => {
    cy.get('#searchType').select('Singular')
    cy.get('h1').should('have.text', 'Search Type: Singular')
  })

  it('checks the apicalHcmFilter checkbox', () => {
    cy.get('input[type="checkbox"]').check()
    cy.contains('Show data for Apical HCM').should('be.visible')
  })

  it('displays mutation dropdown when search type is "Singular" and data is fetched', () => {
    cy.get('#searchType').select('Singular')
    cy.wait(500) // Wait for data fetching (adjust the duration if needed)
    cy.get('#mutationName').should('be.visible')
  })

  it('displays mutation checkboxes when search type is "Comparison" and data is fetched', () => {
    cy.get('#searchType').select('Comparison')
    cy.wait(500) // Wait for data fetching (adjust the duration if needed)
    cy.get('input[type="checkbox"]').should('be.visible')
  })

  it('displays overview charts when search type is "Overview" and data is fetched', () => {
    // Select 'Overview' from the dropdown
    cy.get('#searchType').select('Overview')

    // Wait for the charts to appear
    cy.get('main').find('canvas').should('have.length.at.least', 1)

    // Check that the charts are visible
    cy.get('[data-test="bar-chart"]').should('be.visible')
    cy.get('[data-test="stacked-bar-chart"]').should('be.visible')
    cy.get('[data-test="scatter-plot"]').should('be.visible')
    cy.get('[data-test="pie-chart"]').should('be.visible')
  })

  it('displays singular charts when search type is "Singular" and data is fetched', () => {
    // Select 'Singular' from the dropdown
    cy.get('#searchType').select('Singular')

    // Wait for the charts to appear
    cy.get('main').find('canvas').should('have.length.at.least', 1)

    // Check that the charts are visible
    cy.get('[data-test="stacked-bar-chart"]').should('be.visible')
    cy.get('[data-test="scatter-plot"]').should('be.visible')
    cy.get('[data-test="radar-chart"]').should('be.visible')
    cy.get('[data-test="pie-chart"]').should('be.visible')
  })

  it('displays comparison charts when search type is "Comparison" and data is fetched', () => {
    // Select 'Comparison' from the dropdown
    cy.get('#searchType').select('Comparison')

    // Wait for the charts to appear
    cy.get('main').find('canvas').should('have.length.at.least', 1)

    cy.get('[data-test="scatter-plot"]').should('be.visible')
    cy.get('[data-test="bar-chart"]').should('be.visible')
  })
})
