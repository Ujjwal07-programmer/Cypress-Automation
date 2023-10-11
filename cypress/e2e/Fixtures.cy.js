describe('MyTestSuite', ()=>{

    // Direct Access
    it.skip('Fixture demo test', ()=>{
        cy.fixture("openhrm1").then((data)=>{
            cy.visit("https://opensource-demo.orangehrmlive.com")
            cy.get('input[name="username"]').type(data.username)
            cy.get('input[name="password"]').type(data.password)
            cy.get('[type="submit"]').click()
            cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text', data.expected)
        })

        
    })

    let data;
    before(()=>{
        cy.fixture('openhrm1').then((res) => {
            data = res;
        })
    })

    // Access through hooks - For multiple it blocks
    it('Fixture demo test', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com")
        cy.get('input[name="username"]').type(data.username)
        cy.get('input[name="password"]').type(data.password)
        cy.get('[type="submit"]').click()
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text', data.expected)
    })
})