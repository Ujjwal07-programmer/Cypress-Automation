// There are 4 types of "HOOKS" present in Cypress
// 1. before - It will execute only once before executing all the 'it' blocks
// 2. after - It will execute only once after executing all the 'it' blocks
// 3. beforeEach - It will execute every time before executing any 'it' block
// 4. afterEach - It will execute every time after executing any 'it' block


// There are 2 TAGS present in Cypress
// 1. skip - It can be attached with 'it' block as 'it.skip' and skips the execution of that 'it' block
// 2. only - It can be attached with 'it' block as 'it.only' and ignores the execution of all other 'it' blocks and executes only that specific 'it' block


describe('MyTestSuite', ()=>{
    before(()=> {
        cy.log('------ Launching the application ------')
    })

    after(()=>{
        cy.log('------ Closing the application ------')
    })

    beforeEach(()=>{
        cy.log('------ Login to the application ------')
    })

    afterEach(()=>{
        cy.log('------ Logout from the application ------')
    })

    it('search', () => {
        cy.log('------ Search ------')

    })
    it('advanced search', () => {
        cy.log('------ Advanced Search ------')

    })
    it('listing products', () => {
        cy.log('------ Listing Products ------')

    })
})