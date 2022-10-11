describe('My First Test', () => {
  it('Click on button', () => {
    cy.visit('http://localhost:8080')
    cy.get('[id=visibility]').click()
    expect(true).to.equal(true)
  })
})
