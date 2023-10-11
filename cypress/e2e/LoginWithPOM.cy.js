import Login from "../PageObjects/LoginPage2"
describe('Page Object Model', ()=>{

    //General Approach
    it('LoginTest',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[placeholder="Username"]').type("Admin")
        cy.get('input[placeholder="Password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').contains("Dashboard")
    })

    // Login by POM
    it('Login with POM', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const login = new Login() // Creating object of Login Class.
        
        login.setUserName("Admin")
        login.setPassword("admin123")
        login.clickSubmit()
        login.verifyLogin()
    })

    // Login by POM using fixtures
    let data; 
    before(()=>{
        cy.fixture('openhrm1').then((res)=>{
            data = res; 
        })
    })

    it.only('Login with POM using fixtures', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const login = new Login() // Creating object of Login Class.
        
        login.setUserName(data.username)
        login.setPassword(data.password)
        login.clickSubmit()
        login.verifyLogin()
    })

})