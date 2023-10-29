/// <reference types="cypress" />

describe('Checking all functionalities', () => {
  before(()=>{
    cy.visit('http://localhost:3000');
  })

  it('Should display 3 list items by default',()=>{
    cy.get('.taskList').should('have.length',3);
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

  it('Should strike off the task when tick button is toggled',()=>{
    cy.contains('Eat').parent().find('.btn__done').click();

    cy.contains('Eat').parents('li').should('have.class','completed')
  })

  it('Should remove the task when bin button clicked',()=>{
    cy.contains('Repeat').parent().find('.btn__del').click();

    cy.contains('Repeat').should('not.exist');
  })

  context('Should filter the active and incomplete tasks',()=>{
    before(()=>{
      cy.contains('Sleep').parent().find('.btn__done').click();
    })

    it('Should show all the completed tasks',()=>{
      cy.contains('Completed').click();

      cy.get('.taskList').should('have.length',2);
    })

    it('Should show all the active tasks',()=>{
      cy.contains('Active').click();

      cy.get('.taskList').should('have.length',1);
    })

    it('Should show all the tasks',()=>{
      cy.contains('All').click();

      cy.get('.taskList').should('have.length',3);
    })
  })

});