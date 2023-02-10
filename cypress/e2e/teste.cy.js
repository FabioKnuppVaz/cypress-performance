describe('testes gerais', () => {
  var token;
  
  it('login de sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'https://barrigarest.wcaquino.me/signin',
      body: {
        email: 'fabio.knupp@gmail.com',
        senha: 'knupp123',
      },
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.id).to.eq(1422)
      expect(response.body.nome).to.eq('Fábio')
      token = response.body.token
    })
  })

  it('buscar contas', () => {
    cy.request({
      method: 'GET',
      url: 'https://barrigarest.wcaquino.me/contas',
      headers: {
        'Authorization': 'JWT ' + token,       
      },
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body[0].nome).to.eq('Conta para alterar')
      expect(response.body[1].nome).to.eq('Conta mesmo nome')
      expect(response.body[2].nome).to.eq('Conta para movimentacoes')
      expect(response.body[3].nome).to.eq('Conta com movimentacao')
    })
  })

})