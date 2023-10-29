
describe('<TodoItem> functionality test',()=>{
    before(()=>{
        cy.visit('http://localhost:3000');
    })

  it('Should strike off the task when tick button is toggled',()=>{
    cy.contains('Eat').parent().find('.btn__done').click();

    cy.contains('Eat').parents('li').should('have.class','completed')
  })

  it('Should remove the task when bin button clicked',()=>{
    cy.contains('Repeat').parent().find('.btn__del').click();

    cy.contains('Repeat').should('not.exist');
  });

  it('Should undo the task when tick button is toggled',()=>{
    cy.contains('Eat').parent().find('.btn__done').click();

    cy.contains('Eat').parents('li').should('not.have.class','completed')
  })
})