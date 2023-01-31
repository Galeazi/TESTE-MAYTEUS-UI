/// <reference types="cypress"/>

describe('teste de ponta a ponta em Saucelabs', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    });
    it('Deve fazer o pedido de ponta a ponta', () => {
        //Login
        cy.login('standard_user', 'secret_sauce')
        
        //Adicionar Produto
        cy.adicionarProduto('#item_4_title_link > .inventory_item_name')
        cy.adicionarProduto('#item_0_title_link > .inventory_item_name')

        //Comprar Produto
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()

        //cadastro 
        cy.cadastro('Mateus', 'Galeazi de oliveira', '06440260')

        // Finalização e validação
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').should('contain','THANK YOU FOR YOUR ORDER')

    });
    
});