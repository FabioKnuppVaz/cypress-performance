Cypress.Commands.add('loginFront', () => { 
    cy.fixture('usuario').then(usuario => {
        cy.visit(Cypress.env('front_url') + '/login')
        cy.get('#email').type(usuario.email)
        cy.get('#senha').type(usuario.senha)
        cy.xpath('//button').click()
    })
})

Cypress.Commands.add('loginBack', () => {
    cy.fixture('usuario').then(usuario => {
        cy.request({
            method: 'POST',
            url: Cypress.env('back_url') + '/signin',
            body: usuario,
        })
    })
})

Cypress.Commands.add('resetBack', (token) => {
    cy.request({
        method: 'GET',
        url: Cypress.env('back_url') + '/reset',
        headers: {
            'Authorization': 'JWT ' + token,
        },
    })
})