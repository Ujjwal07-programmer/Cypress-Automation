describe('MyTestSuite', ()=>{
    it('Navigation', ()=>{
        cy.visit('https://demo.opencart.com/')
        cy.title().should('eq', 'Your Store')
        cy.clickLink('MacBook') // Clicking using custom commamnd
        cy.get('h1').contains('MacBook')
        cy.title().should('eq', 'MacBook')

        cy.wait(1000)

        cy.go('back') // go backward
        cy.title().should('eq', 'Your Store')

        cy.wait(1000)

        cy.go('forward') // go forward
        cy.get('h1').contains('MacBook')
        cy.title().should('eq', 'MacBook')


        // Alternatives for 'back' anbd 'forward' are -1 and 1 respectively.

        cy.wait(1000)

        cy.go(-1) // go backward
        cy.title().should('eq', 'Your Store')

        cy.wait(1000)

        cy.go('forward') // go forward
        cy.get('h1').contains('MacBook')
        cy.title().should('eq', 'MacBook')

        cy.reload() // for reloading the page



    })
})