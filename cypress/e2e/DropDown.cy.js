describe('handle Dropdown', () => {
    it.skip('Dropdown with select' , () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get('#zcf_address_country').select('China').should('have.value','China')
    })

    it.skip('Dropdown without select' , () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('China').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text', 'China')
    })
    it.skip('Auto suggested Dropdowns' , () => {
        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type("COVID-19")
        cy.get('.suggestion-title').contains('COVID-19 pandemic').click()
        cy.get('.mw-page-title-main').should('have.text', 'COVID-19 pandemic')
    })
    it('Dynamic Dropdowns' , () => {
        cy.visit("https://www.google.com/")
        cy.get("textarea[name='q']").type("learn javascript")
        cy.wait(4000)
        cy.get('div.wM6W7d>span').should('have.length', 12)
        cy.get('div.wM6W7d>span').each(($el, index, $list) => {
            if($el.text() == 'learn javascript from scratch'){
                cy.wrap($el).click()
            }
        })
        // cy.get('.APjFqb').should('have.text', 'learn javascript from scratch')
        cy.get('textarea[name="q"]').should('have.text', 'learn javascript from scratch')
     })
})