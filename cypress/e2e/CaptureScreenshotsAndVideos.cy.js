describe('MyTestSuite',()=>{
    it('Capture Screenshots and Videos',()=>{
        cy.visit('https://demo.opencart.com/')
        cy.screenshot('homepage')  // The screenshot will be saved with name 'homepage'
        cy.wait(2000)
        cy.get('img[title="Your Store"]').screenshot('logo') // This screenshot will be saved in screenshot folder with filename as logo 


        // when we will run the tests by any CLI then it will automatically captures screenshots and videos if the tests fails.
        // Screenshots will be stored in screenshot folder and videos will be stored in videos folder
    })
})