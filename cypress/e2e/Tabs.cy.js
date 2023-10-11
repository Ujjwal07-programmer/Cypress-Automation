describe('Handle Tabs', () => {
    it.skip("Approach 1", () => {
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get(".example>a").invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        cy.get('.example>h3').should('have.text', "New Window")
        cy.wait(4000)
        cy.go('back')
    })
    it("Approach 2", () => {
        cy.visit("https://the-internet.herokuapp.com/windows");

        cy.get('.example>a').then((e)=>{
            const url = e.prop('href')
            cy.visit(url)
        })

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        cy.get('.example>h3').should('have.text', "New Window")
        cy.wait(4000)
        cy.go('back')
    })
})