describe('My First Test', () => {
  it('Login test', () => {
    cy.visit('http://localhost:3000/')

    
    cy.get('[data-cy="logout"]').click()
     cy.contains("SignIn").click()
     cy.log('filling out first name')
     cy.get('[data-cy="name"]')
  .type('WrongUsername',{delay:100}).should('have.value', 'WrongUsername')
  cy.get('[data-cy="pass"]')
  .type('1234',{delay:250}).should('have.value', '1234')
  cy.get('[data-cy="btnSubmit"]').click()
  cy.on('window:alert', (str) => {
    expect(str).to.equal("Wrong credentials")})
  })
})