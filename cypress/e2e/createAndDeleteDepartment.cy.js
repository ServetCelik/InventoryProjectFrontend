const login = () => {
  cy.visit('http://localhost:3000/')
 
 cy.get('[data-cy="logout"]').click()
 cy.contains("SignIn").click()
 cy.get('[data-cy="name"]')
 .type('Captain',{delay:25}).should('have.value', 'Captain')
 cy.get('[data-cy="pass"]')
 .type('1234',{delay:25}).should('have.value', '1234')

 cy.get('[data-cy="btnSubmit"]').click()
}

describe('empty spec', () => { 
  beforeEach(() => {    
    login();
});

  it('Create Department', () => {  
    cy.contains("Department").click()
    cy.location().should((location) => {
      expect(location.href).to.eq('http://localhost:3000/departments')})
    cy.contains("Create New").click()

    cy.get('[data-cy="depNameInput"]')
    .type('DepartmentCreatedTestPurpose',{delay:25}).should('have.value', 'DepartmentCreatedTestPurpose')
    cy.get('[data-cy="depDescInput"]')
    .type('ThisWillBeDeleted',{delay:25}).should('have.value', 'ThisWillBeDeleted')
    cy.get('[data-cy="createDepSubmit"]').click()

    cy.wait(500);
  })

    it('Delete Department', () => {   
    cy.contains("Department").click() 

  let a  = cy.get('tbody>tr').last().as("options")
  .last()
    . children ('td')
      .last()
       . children ('div')
        .children ('button')
          .last()
           .click()  

  })
})
