import { toHaveAttribute } from "@testing-library/jest-dom/dist/matchers";

describe('<Filters> functionality test',()=>{
    before(()=>{
        cy.visit('http://localhost:3000');
      cy.contains('Sleep').parent().find('.btn__done').click();
    })

    it('Should show all tasks by default',()=>{
      cy.get('.taskList').should('have.length',3);
    })

    it('Should show all the completed tasks',()=>{
      cy.contains('Completed').click();

      cy.get('.taskList').should('have.length',1);
    })

    it('Should show all the active tasks',()=>{
      cy.contains('Active').click();

      cy.get('.taskList').should('have.length',2);
    })

    it('Should show all the tasks',()=>{
      cy.contains('All').click();
      cy.get('.taskList').should('have.length',3);
    })
  });

  //add names of the task

