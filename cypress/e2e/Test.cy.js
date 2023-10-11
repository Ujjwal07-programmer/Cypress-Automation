describe('Amazon surfing', ()=>{
    it("Test 1", ()=>{
        cy.visit("https://www.amazon.com/")
        cy.xpath('//*[@id="nav-main"]/div[1]/div/div/div[3]/span[1]/span/input').click()
        cy.xpath('//*[@id="nav-xshop"]/a[1]').click()
        cy.get('#sorting_dropdown0').click()
        cy.get('#native_sorting_dropdown0_1').click()
        cy.get('#sorting_dropdown0').should('have.text', 'Sort by:Discount - Low to High')
        cy.xpath('//*[@id="grid-main-container"]/div[3]/div/div').should('have.length', 60)
        cy.xpath('//*[@id="grid-main-container"]/div[3]/div/div[1]').click()
        // cy.xpath('//*[@id="CardInstancevaCgx3rpZz9k1wtjifT2Cg"]/div[2]/div[1]/div/div/div[1]/span/a/div/img').click()
        cy.get("#navFooter").scrollIntoView().should('be.visible')
        cy.xpath('//*[@id="navFooter"]/div[1]/div/div[1]/ul/li[2]/a').click()



        // cy.get("#a-autoid-13-announce").click()
        // cy.url().should('have.text', "https://www.amazon.com/ap/signin?openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fcreatorhub%2Fvideo%2Fupload%3FproductASIN%3DB09PZV66TJ%26ref%3DRVSW%26referringURL%3DZHAvQjA5UFpWNjZUSg%253D%253D&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_creatorportal_mobile_us&openid.mode=checkid_setup&language=EN_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0")

    })
})