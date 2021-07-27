describe("Registration", () => {
    it('Visit', () => {
        cy.visit('/')
    })
    it('Click on registration button', () => {
        cy.visit('/')
        cy.get('.nav-link').eq(2).click()
    })
    it('Register with valid data', () => {
cy.visit ('/')
cy.get('.nav-link').eq(2).click()
cy.get('#first-name').type('Nikolina')
cy.get('#last-name').type('Bosnjakovic')
cy.get('#email').type('test12312345@test.com')
cy.get('#password').type('testtest321')
cy.get('#password-confirmation').type('testtest321')
cy.get('[type="checkbox"]').check() 
cy.get('button').click()
    })
   
})