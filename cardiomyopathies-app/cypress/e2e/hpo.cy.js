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
  
  describe('Load HPO Page successfully', () => {
    it('Will load the HPO page after searching in the browser', () => {
      cy.visit('http://192.168.0.26:5173/HPO');
    });
  });
  
  describe('HPO Page - Success at finding record', () => {
    beforeEach('Will start at loading the HPO Page', () => {
    });
  
    it('show desired list of results for the searched phrase', () => {
      const searchTerm = 'AAGAB';
      cy.visit('http://192.168.0.26:5173/HPO');
      cy.get('input[type="text"]').type(searchTerm);
      cy.contains('Search').click();
      cy.contains('AAGAB').click();
      cy.get('.w-full.cursor-pointer').contains('GENE SYMBOL: ' + searchTerm).then(($element) => {
        expect($element).to.be.visible;
      });
    });
  });
  
  describe('HPO Page - Partial Search', () => {
    beforeEach('Will start at loading the HPO Page', () => {
    });
  
    it('Type in "aa" into search bar', () => {
      const partialSearchTerm = 'aa'; 
      cy.visit('http://192.168.0.26:5173/HPO');
      cy.get('input[type="text"]').type(partialSearchTerm);
      cy.contains('Search').click();
      cy.get('ul').find('li').should('have.length.gt', 0);
    });
  });
  
  describe('HPO Page - Blank Search Bar', () => {
    beforeEach('Will start at loading the HPO Page', () => {
    });
  
    it('Blank search so no results to be shown', () => {
      cy.visit('http://192.168.0.26:5173/HPO');
      cy.get('input[type="text"]').clear();
      cy.contains('Search').click();
      cy.get('ul').find('li').should('not.exist');
    });
  });
  
  describe('HPO Page - No record match given for the search input', () => {
    beforeEach('Will start at loading the HPO Page', () => {
    });
  
    it('No matches for the search term', () => {
      const searchTerm = 'LLL'; 
      cy.visit('http://192.168.0.26:5173/HPO');
      cy.get('input[type="text"]').type(searchTerm);
      cy.contains('Search').click();
      cy.get('ul').find('li').should('not.exist');
    });
  });