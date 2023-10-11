//click on the link using the label
// overwriting existing contains() command
// re-usable custom command

describe('custom commands', () => {
    it('handling links', ()=>{
        cy.visit('https://demo.nopcommerce.com/')

        // clicking on the link using custom commands
        cy.clickLink("Build your own computer")
        cy.get('h1').should('contain',"Build your own computer")
    })
    it('overwriting existing contains() command', ()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink("BUILD YOUR OWN COMPUTER")
        cy.get('h1').should('contain',"Build your own computer")

    })
    it.only('Login command', ()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.loginIntoApp('test@test.com', 'Test@123')
        cy.get('.ico-logout').should('have.text', 'Log out')

    })
})