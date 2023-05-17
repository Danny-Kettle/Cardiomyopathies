/*
describe('My First Test - success', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true);
    });
  });
  
  describe('My First Test - fail', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(false);
    });
  }); 
  */

describe('Medical Records', () => {
  beforeEach(() => {
    cy.loginDoctor()
    cy.visit('http://localhost:5173/profile');
  })

  it('Add Patient', () => {
    cy.get('#addPatient').click()

    // Fill out the form
    cy.get('#name').type('John Smith')
    cy.get('#age').type('32')
    cy.get('#age_at_mri').type('28')
    cy.get('#gender').select('Male')
    cy.get('#scar').check()
    cy.get('#sudden_cardiac_death').check()

    // Submit the form
    cy.get('form').submit()

    // Confirm that the patient was added successfully
    cy.get('#viewPatient').click()
    cy.contains('John Smith')
  })

  it('Add Record', () => {
    cy.get('#addRecords').click()

    // Fill out the form
    cy.get('select').select('John Smith')
    cy.get('#actc').check()
    cy.get('#mybpc3').check()
    cy.get('#myh7').check()
    cy.get('#myl2').check()
    cy.get('#tnnci').check()
    cy.get('#tnni3').check()
    cy.get('#tnnt2').check()
    cy.get('#tpm1').check()
    cy.get('#ttn').check()
    cy.get('#ledv').type('100')
    cy.get('#lesv').type('50')
    cy.get('#lsv').type('200')
    cy.get('#lvef').type('50')
    cy.get('#lvmass').type('70')
    cy.get('#redv').type('50')
    cy.get('#resv').type('50')
    cy.get('#rsv').type('60')
    cy.get('#rvef').type('60')
    // cy.get('#submitButton').click()

    // Submit the form
    cy.get('form').submit()

    // Confirm that the patient was added successfully
    cy.get('#viewRecords').click()
    cy.contains('John Smith')
  })

  it('should edit an existing Patient', () => {
    cy.get('#viewPatient').click()

    cy.get('table tbody tr')
      .eq(0)
      .within(() => {
        // Edit the first record
        cy.get('td').eq(9).click()
        cy.get('td').eq(0).click().type('{selectall}John Doe') // Edit the name field
        cy.get('td').eq(1).click().type('{selectall}35') // Edit the age field
        cy.get('td').eq(2).click().type('{selectall}30') // Edit the age at MRI field
        cy.get('td').eq(3).click().type('{selectall}Female') // Edit the gender field
        cy.get('td').eq(4).click().type('{selectall}No') // Edit the scar field
        cy.get('td').eq(5).click().type('{selectall}No') // Edit the sudden cardiac death field
        cy.get('td').eq(6).click().type('{selectall}Yes') // Edit the hypertension field
        cy.get('td').eq(7).click().type('{selectall}No') // Edit the diabetes field
        cy.get('td').eq(8).click().type('{selectall}Yes') // Edit the myectomy field
        cy.get('td').eq(9).click()
      })
    cy.get('table tbody tr')
      .eq(0)
      .within(() => {
        // Verify the changes were saved
        cy.get('td').eq(0).should('contain', 'John Doe')
        cy.get('td').eq(1).should('contain', '35')
        cy.get('td').eq(2).should('contain', '30')
        cy.get('td').eq(3).should('contain', 'Female')
        cy.get('td').eq(4).should('contain', 'No')
        cy.get('td').eq(5).should('contain', 'No')
        cy.get('td').eq(6).should('contain', 'Yes')
        cy.get('td').eq(7).should('contain', 'No')
        cy.get('td').eq(8).should('contain', 'Yes')
      })
  })

  it('should delete an existing patient', () => {
    cy.get('#viewPatient').click()

    // Get the original record count
    cy.get('tbody tr')
      .its('length')
      .then((originalRecordCount) => {
        // Click on the delete button of the first record
        cy.get('tbody tr:first-child td').eq(10).click()

        // Wait for the table to update
        cy.get('tbody tr').should('have.length', originalRecordCount - 1)

      })
  })
})
