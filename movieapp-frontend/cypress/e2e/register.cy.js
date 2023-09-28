describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/UserRegistrationForm')
      cy.title().should('eq','Movie App')
      cy.get('[id="loginId"]').should('exist')
      cy.get('[id="firstName"]').should('exist')
      cy.get('[id="lastName"]').should('exist')
      cy.get('[id="email"]').should('exist')
    })
    it('passes', () => {
      cy.visit('http://localhost:3000/UserRegistrationForm')
      cy.title().should('eq','Movie App')
      cy.get('[id="loginId"]').type('123')
      cy.get('[id="firstName"]').type('Mangalakarthick')
      cy.get('[id="lastName"]').type('BK')
      cy.get('[id="email"]').type('karthickmangala6@gmail.com')
    })
  })