describe('Default image loading', () => {
    it('should load the default image when imageUrls are empty', () => {
      cy.visit('http://localhost:5173/news');
  
      // Check if the default image is displayed
      cy.get('#api-photo').should('have.attr', 'src').and('include', 'defaultImage.jpg');
    });
  });

// In your Cypress test file
describe('Checking API images', () => {
    beforeEach(() => {
      // Intercept the API requests
      cy.intercept('GET', 'https://api.unsplash.com/search/photos*', (req) => {
        // Respond with a mock image URL
        req.reply({
          body: {
            results: [{ urls: { regular: 'https://example.com/mock-image.jpg' } }]
          }
        });
      });
  
      // Load your web application
      cy.visit('http://localhost:5173/news');
    });
  
    it('should check if API images are loading', () => {
      cy.get('#article').each(($article) => {
        // Get the article image URL
        const imageUrl = $article.find('#api-photo').attr('src');
        
        // Check if the image URL is the default image or the mock image
        if (imageUrl.includes('defaultImage.jpg')) {
          // Default image is loaded
          cy.log('Default image loaded');
        } else if (imageUrl.includes('mock-image.jpg')) {
          // Mock image is loaded
          cy.log('Mock image loaded');
        } else {
          // API image is loaded
          cy.log('API image loaded');
        }
      });
    });
  });
  

  describe('Image navigation', () => {
    it('should navigate to the article website when an image is clicked', () => {
      cy.visit('http://localhost:5173/news');
  
      // Stub the window.open method before triggering the click event
      cy.window().then((win) => {
        cy.stub(win, 'open').as('windowOpen');
      });
  
      // Get the first image element within the first article
      cy.get('#article').first().click();
  
      // Assert that the window.open method is called with the expected URL
      cy.get('@windowOpen').should('be.calledOnce');
    });
  });
  

  