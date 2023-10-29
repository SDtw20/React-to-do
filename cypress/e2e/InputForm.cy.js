describe('<Form> functionality test',()=>{
    before(()=>{
        cy.visit('http://localhost:3000');
    })

    it('Should display new task when input entered and submitted', () => {
  
        cy.get('[data-testid="test-input"]')
        .type('Go to gym');
      
        cy.get('[data-testid="test-submit"]')
        .click();
      
        cy.get('[data-testid="test-input"]')
        .should('have.value', '');
      
        cy.contains('Go to gym');
      });

      it('Should not accept empty task', () => {
  
        cy.get('[data-testid="test-input"]')
        .type('  ');
      
        cy.get('[data-testid="test-submit"]')
        .click();

        cy.get('   ').should('not.exist');
      });
})