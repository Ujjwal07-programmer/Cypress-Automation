// Syntax

// describe('suite name' , () => {
//   it('test 1', () => {
//     expect(true).to.equal(true)
//   })
//   it('test 2', () => {
//     expect(true).to.equal(true)
//   })
//   it('test 3', () => {
//     expect(true).to.equal(true)
//   })
//   it('test 4', () => {
//     expect(true).to.equal(true)
//   })
// })

describe('My first test', () => {
  it('verify title - positive test', () => {
    cy.visit('https://www.amazon.com/')
    cy.title().should('eq', 'Amazon.com. Spend less. Smile more.')
  })
  it('verify title - negetive test', () => {
    cy.visit('https://www.amazon.com/')
    cy.title().should('eq', 'Amazon.com. Spend less. Smile morrrrre.')
  })
})