describe('Testes de cadastro de contas', () => {

    let token

    beforeEach(() => {
        cy.loginBack().then((response) => {
            token = response.body.token
            cy.resetBack(token)
        })
    })

    it('Deve cadastrar uma conta no frontend com sucesso', () => {
        cy.fixture('conta').then(conta => {
            cy.loginFront()
            cy.contains('Contas').click()
            cy.contains('Adicionar').click()
            cy.get('#nome').type(conta.nome)
            cy.contains('Salvar').click()
            cy.xpath("//div[contains(@class,'alert')]").should('contain', 'Conta adicionada com sucesso!')
        
            cy.request({
                method: 'GET',
                url: Cypress.env('back_url') + '/contas',
                headers: {
                    'Authorization': 'JWT ' + token,       
                },
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body[6].nome).to.eq(conta.nome)
            })
        })
    })

    it('Deve cadastrar uma conta no backend com sucesso', () => {
        cy.fixture('conta').then(conta => {
            cy.request({
                method: 'POST',
                url: Cypress.env('back_url') + '/contas',
                body: conta,
                headers: {
                    'Authorization': 'JWT ' + token,       
                }
            }).then((response) => {
                expect(response.status).to.eq(201)
                cy.loginFront()
                cy.contains('Contas').click()
                cy.contains('Listar').click()
                cy.get('tr td').contains(conta.nome)
            })
        })
    })

})