// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//login
Cypress.Commands.add('login', (usuario, senha) => { 
    
    cy.get('[data-test="username"]').type(usuario)
    cy.get('[data-test="password"]').type(senha)
    cy.get('[data-test="login-button"]').click()

 })
//adicionarProduto
Cypress.Commands.add('adicionarProduto', (produto) => {

    cy.get(produto).click()
    cy.get('.btn_primary').click()
    cy.get('[data-test="back-to-products"]').click()

})
//cadastro
Cypress.Commands.add('cadastro', (nome, sobrenome, cep) => {

    cy.get('[data-test="firstName"]').type(nome)
    cy.get('[data-test="lastName"]').type(sobrenome)
    cy.get('[data-test="postalCode"]').type(cep)
    cy.get('[data-test="continue"]').click()

})


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })