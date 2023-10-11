describe('MyTestSuite', () => {
    it("Data Driven Tests" , ()=>{
        cy.fixture('openhrm2').then((res)=>{
            cy.visit("https://opensource-demo.orangehrmlive.com")
            res.forEach(data => {
                cy.get('input[name="username"]').type(data.username)
                cy.get('input[name="password"]').type(data.password)
                cy.get('[type="submit"]').click()
                if(data.username === "Admin" && data.password === "admin123"){ // Valid Credentials
                    cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text', data.expected)
                    
                    // Logout
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                }
                else{
                    cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text', data.expected)
                }
                
            });
        })
    })
})