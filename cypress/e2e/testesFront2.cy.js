Cypress._.times(10, () => {
    describe('testes front 2', () => {
        it('login via front de sucesso', () => {
            cy.visit('https://seubarriga.wcaquino.me/login')
            cy.get('#email').type('fabio.knupp@gmail.com')
            cy.get('#senha').type('knupp123')
            cy.xpath('//button').click()
            cy.xpath("//div[contains(@class,'alert')]").should('contain', 'Bem vindo, Fábio!')
        })
    })
})