describe("CSSLocators", () => {
    it('csslocators', () => {
        cy.visit("https://www.amazon.com/")
        // cy.get("#twotabsearchtextbox").type("T-Shirts") // Using id selector
        cy.get("[name='field-keywords']").type("T-Shirts") // Using id selector

        cy.get("#nav-search-submit-button").click()  // Using id selector
        cy.get(".a-color-state").contains("T-Shirts") //Assertion // Using class selector

    })
})