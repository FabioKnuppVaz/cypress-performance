describe('testes de login', () => {

    it('Deve fazer login no frontend com sucesso', () => {
        cy.loginFront()
        cy.xpath("//div[contains(@class,'alert')]").should('contain', 'Bem vindo, Fábio!')
    })

    it('Deve fazer login no backend com sucesso', () => {
        cy.loginBack().then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(1422)
            expect(response.body.nome).to.eq('Fábio')
        })
    })

})