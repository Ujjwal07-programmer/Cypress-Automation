import 'cypress-iframe'
require('@4tw/cypress-drag-drop')
describe("Mouse Operations", ()=>{
    it('MouseHover', ()=> {
        cy.visit("https://demo.opencart.com/")
        cy.get('.nav > :nth-child(1) > .dropdown-menu').should('not.be.visible')
        cy.xpath('//*[@id="narbar-menu"]/ul/li[1]/a').trigger('mouseover').click()
        cy.get('.dropdown-menu.show').should('be.visible')
    })
    it('RightClick', ()=> {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        // Approach 1

        // cy.get('.context-menu-list').should('not.be.visible')
        // cy.get(".context-menu-one.btn.btn-neutral").rightclick()
        // cy.get('.context-menu-list').should('be.visible')

        // Approach 2

        cy.get('.context-menu-list').should('not.be.visible')
        cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu')
        cy.get('.context-menu-list').should('be.visible')


    })
    it('Double Click', ()=> {

        cy.visit("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick")
        cy.frameLoaded("#iframeResult") // Frame loaded
        cy.iframe('#iframeResult').find('p[ondblclick="myFunction()"]').dblclick()
        cy.iframe('#iframeResult').find('#demo').should('have.text', "Hello World ")
        // cy.iframe('#iframeResult').find('#demo').should('include', "Hello World")

    })
    it('Drag and Drop using plugin', ()=> {
        cy.visit("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get('#box7').drag('#box104', {force:true })

    })
    it.only('Scrolling Page', ()=> {
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')

        // India Flag
        // cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1)').scrollIntoView() // It will scroll the page very fast
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1)').scrollIntoView({duration:2000}) // It will take 2 seconds to scroll the page
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1)').should('be.visible')
        cy.wait(1000)

        // New Zealand Flag
        cy.get(':nth-child(2) > tbody > :nth-child(25) > :nth-child(1) > img').scrollIntoView({duration:2000})
        cy.get(':nth-child(2) > tbody > :nth-child(25) > :nth-child(1) > img').should('be.visible')
        cy.wait(1000)

        // Scroll to footer of the page
        cy.get("#footer").scrollIntoView({duration:2000})
    })
})