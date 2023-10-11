describe("XPathLocator", () => {
    it('xpathlocator', () => {
        cy.visit("https://www.amazon.com/")
        cy.xpath('//*[@id="twotabsearchtextbox"]').type("T-Shirts for men")
        cy.xpath('//*[@id="nav-search-submit-button"]').click()
        cy.xpath('//*[@id="search"]/div[1]/div[1]/div/span[1]/div[1]/div[2]/div/div/div/div/div/div/div[2]/div[1]/h2/a/span').click().should()    

    })
})