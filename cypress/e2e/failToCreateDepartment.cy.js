

describe('empty spec', () => { 
  

  it('Create Department', () => {  

    cy.visit('http://localhost:3000/') 
    cy.get('[data-cy="logout"]').click()

    cy.contains("Department").click()
    cy.location().should((location) => {
      expect(location.href).to.eq('http://localhost:3000/unauth')})
  })

   
})