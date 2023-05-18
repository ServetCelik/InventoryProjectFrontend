
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

  it('Create Location', () => {    
    cy.contains("Location").click()
    cy.location().should((location) => {
      expect(location.href).to.eq('http://localhost:3000/locations')})
    cy.contains("Create New").click()

    cy.get('[data-cy="locNameInput"]')
    .type('LocationCreatedTestPurpose',{delay:25}).should('have.value', 'LocationCreatedTestPurpose')
    cy.get('[data-cy="locAdressInput"]')
    .type('ThisWillBeDeleted',{delay:25}).should('have.value', 'ThisWillBeDeleted')
    cy.get('[data-cy="locCapacityInput"]')
    .type('111',{delay:25}).should('have.value', '111')
    cy.get('[data-cy="createLocSubmit"]').click()

  })

  it('Update Location', () => {  
    cy.contains("Location").click()
    let a  = cy.get('tbody>tr')
    .last()
      .children ('td')
        .last()
          .children ('div')
            .children ('button')
              .first()
                .click()

    cy.get('[data-cy="locNameInput"]')
    .clear()
    .type('LocationUpdatedTestPurpose',{delay:25})
    .should('have.value', 'LocationUpdatedTestPurpose')
    cy.get('[data-cy="updateLocation"]').click()


  })

  it('Delete Location', () => {  

    cy.contains("Location").click()
    let a  = cy.get('tbody>tr')
    .last()
      .children ('td')
        .last()
          .children ('div')
            .children ('button')
              .last()
                .click()
  })  
})
