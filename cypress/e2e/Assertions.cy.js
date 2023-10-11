describe('Assertions Demo', () => {
    // There are 2 kinds of assertion, Implicit and Explicit
    // Implicit assertion uses keywords 'should' and 'and'. Implicit assertion uses keywords 'expect' and 'assert'. 

    // it('Implicit Assertions', () => {
    //     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     // cy.url().should('include', 'orangehrmlive.com')
    //     // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     // cy.url().should('contain', 'orangehrmlive')

    //     cy.url().should('include', 'orangehrmlive.com')
    //     .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     .should('contain', 'orangehrmlive')

    //     cy.url().and('include', 'orangehrmlive.com')
    //     .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     .and('contain', 'orangehrmlive')
    //     .and('not.contain', 'greenhrmlive')

    //     cy.title().should('include', 'Orange')
    //     .and('eq', 'OrangeHRM')
    //     .and('not.eq','GreenHRM') // Negetive assertion

    //     cy.get('.orangehrm-login-branding > img').should('be.visible')
    //     .and('exist')

    //     cy.xpath('//a').should('have.length', 5)     // will check the number of links 

    //     cy.get('[name="username"]').type("Admin").should('have.value', 'Admin')
    //     cy.get('[name="password"]').type("admin123").should('have.value', 'admin123')
    //     cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click()
    //     cy.get('.oxd-userdropdown-name').contains("Paul Collings")
    //     // cy.wait(3000)
    //     // cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/div/div/button').click()
    //     cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a').click()
    //     cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div').should('have.length', 37)
        
    // })

    it('Explicit Assertions', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[placeholder="Username"]').type("Admin")
        cy.get('input[placeholder="Password"]').type("admin123")
        cy.get(".oxd-button").click()

        let expectedUsername = "Dica Alexandru"
        cy.get(".oxd-userdropdown-name").then((x)=>{
            let actualUsername = x.text();

            // BDD assertions
            expect(actualUsername).to.equal(expectedUsername)
            expect(actualUsername).to.not.equal(expectedUsername)

            // TDD assertions
            assert.equal(actualUsername,expectedUsername)
            assert.notEqual(actualUsername,expectedUsername)
        })

    })
})