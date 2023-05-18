describe('My First Test', () => {
  it('Login test', () => {
    cy.visit('http://localhost:3000/')

    
    cy.get('[data-cy="logout"]').click()
     cy.contains("SignIn").click()
     cy.log('filling out first name')
     cy.get('[data-cy="name"]')
     .type('Captain',{delay:100}).clear()
  .type('Captain',{delay:100}).should('have.value', 'Captain')
  cy.get('[data-cy="pass"]')
  .type('1234',{delay:250}).should('have.value', '1234')
  cy.get('[data-cy="btnSubmit"]').click()
  })
})