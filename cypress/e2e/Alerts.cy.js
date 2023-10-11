describe('handling Alerts', () => {
    // 1) JavaScript Alert : It will have some text and 'OK' button

    it.skip('JavaScript Alerts', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get('[onClick="jsAlert()"]').click()
        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Alert')
        })
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })
    
    // 2) JavaScript Confirm Alert : It will have some text and 'OK' and 'CANCEL' button 
    
    it.skip('Jaascript Confirmation Alerts - Cancel', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get('[onClick="jsConfirm()"]').click()
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains("I am a JS Confirm")
            return false //   for exiting the alert by clicking 'CANCEL' button
        })
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })
    
    // 3) JavaScript Prompt Alert : It will have some text with the textbox for user input along with 'OK' button
    
    it.skip('JavaScript Prompt Alerts - OK' , () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns("Welcome to the page")
        })
        cy.get('[onClick="jsPrompt()"]').click()
        cy.on('window:prompt', (t)=>{
            expect(t).to.contains('have.text', 'I am a JS prompt')
        })
        cy.get('#result').should('have.text', 'You entered: Welcome to the page')
    })

    // Currently this one is not working
    it.skip('JavaScript Prompt Alerts - Cancel' , () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns("Welcome to the page")
        })
        cy.get('[onClick="jsPrompt()"]').click()
        cy.on('window:prompt', (t)=>{
            expect(t).to.contains('have.text', 'I am a JS prompt')
            return false
        })
        cy.get('#result').should('have.text', 'You entered: null ')
    })


    // 4) Authenticated Alert 
    
    // Approach 1
    // it('Authenticated Alerts', ()=>{
    //     cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth : {username:'admin', password: 'admin'}})
    //     cy.get('p').should('have.contain', 'Congratulations')
    // })

    // Approach 2
    it('Authenticated Alerts', ()=>{
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")     // https://username:password@the-internet.herokuapp.com/basic_auth
        cy.get('p').should('have.contain', 'Congratulations')
    })

})