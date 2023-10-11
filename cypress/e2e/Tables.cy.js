describe("Handling tables", () => {
    
    beforeEach('Login', ()=>{
        cy.visit('https://demo.opencart.com/admin/')
        cy.get('#input-username').type('Demo')
        cy.get('#input-password').type('demo')
        cy.get('button[type="submit"]').click()

        cy.get('.btn-close').click()

        // Customers --> Customers

        cy.get('#menu-customer>a').click() // Customers main menu
        cy.get('#menu-customer>ul>li:first-child').click()  // Customers sub/child item
    })

    it('Check number of rows and columns', () => {
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length', 10)
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length', 7) 
        
    })
    it('Check cell data from specific row and column', () => {
        cy.xpath('//*[@id="form-customer"]/div[1]/table/tbody/tr[5]/td[3]').should('have.text', 'demo234566@gmail.com')
        cy.xpath('//*[@id="form-customer"]/div[1]/table/tbody/tr[5]/td[5]').should('have.text', 'Enabled')

    })
    it('Read all the rows and columns data in the first page', () => {
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').each(($row, index, $rows) => {
            cy.wrap($row).within(() => {
                cy.get('td').each(($col, index, $cols) =>{
                    cy.log($col.text())
                })
            })
        })


    })
    it.only('pagination', () => {
        // find total pages
        // let totalPages;
        // cy.get('.col-sm-6.text-end').then((e) => {
        //     let myText = e.text();
        //     totalPages = myText.substring(myText.indexOf("(")+1, myText.indexOf("Pages")-1)
        //     cy.log("Total number of pages in the table are  " + totalPages)
        // })

        let totalPages =  5;
        for(let p=1; p<=totalPages; p++){
            if(totalPages>1){
                cy.log("The active page is "+p);
                cy.get('ul[class="pagination"]>li:nth-child(' + p + ')').click();
                cy.wait(2000);

                cy.get('table[class="table table-bordered table-hover"]>tbody>tr').each(($row, index, $rows) => {
                    cy.wrap($row).within(()=>{
                        cy.get('td:nth-child(3)').then((e) => {
                            cy.log(e.text());
                        })
                    })
                })




            }
        }
    })

} )