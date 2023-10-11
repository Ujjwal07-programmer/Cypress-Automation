describe('Check UI elements', () => { 
    it('Check UI elements', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        // Checking the visibility of radio buttons
        cy.get('#male').should('be.visible')
        cy.get('#female').should('be.visible')

        // Selecting the radio buttons
        cy.get("#male").check().should('be.checked')
        cy.get("#female").should('not.be.checked')
    })

    it('Checking Check boxes' , () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        // Visibility of elements
        cy.get('#monday').should('be.visible')
        cy.get('#tuesday').should('be.visible')
        cy.get('#wednesday').should('be.visible')
        cy.get('#thursday').should('be.visible')
        cy.get('#friday').should('be.visible')
        cy.get('#saturday').should('be.visible')
        cy.get('#sunday').should('be.visible')


        // Selecting multiple checkboxes
        // cy.get('#tuesday').check().should('be.checked')
        // cy.get('#wednesday').check().should('be.checked')
        // cy.get('#thursday').check().should('be.checked')
        
        // // unselecting the checkbox
        // cy.get('#wednesday').uncheck().should('not.be.checked')

        // Selecting all checkboxes
        cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')

        // Unselecting all checkboxes
        cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')

        // Selecting first checkboxes
        cy.get('input.form-check-input[type="checkbox"]').first().check().should('be.checked')

        // Selecting last checkboxes
        cy.get('input.form-check-input[type="checkbox"]').last().check().should('be.checked')

        


    })

 })