import 'cypress-iframe'
describe('Handling iFrames', () => {
    it('Approach 1',()=> {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        
        const iFrame = cy.get('#mce_0_ifr').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
        iFrame.clear().type("Welcome {cmd+a}")
        cy.wait(1000)
        cy.get('[title="Bold"]').click()
        cy.wait(1000)
        cy.get('[title="Italic"]').click()
        cy.wait(1000)
        cy.get('[title="Align right"]').click()
        cy.wait(1000)
        cy.get('[title="Align center"]').click()
    })
    it('Approach 2 - By using custom Commands',()=> {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        
        cy.getIframe('#mce_0_ifr').clear().type("Welcome {cmd+a}")
        cy.wait(1000)
        cy.get('[title="Bold"]').click()
        cy.wait(1000)
        cy.get('[title="Italic"]').click()
        cy.wait(1000)
        cy.get('[title="Align right"]').click()
        cy.wait(1000)
        cy.get('[title="Align center"]').click()
    })
    it('Approach 3 - By using Cypress iFrame Plugins',()=> {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        
        cy.frameLoaded('#mce_0_ifr') // Loads the iFrame
        cy.iframe('#mce_0_ifr').clear().type("Welcome {cmd+a}")
        cy.wait(1000)
        cy.get('[title="Bold"]').click()
        cy.wait(1000)
        cy.get('[title="Italic"]').click()
        cy.wait(1000)
        cy.get('[title="Align right"]').click()
        cy.wait(1000)
        cy.get('[title="Align center"]').click()
    })
})