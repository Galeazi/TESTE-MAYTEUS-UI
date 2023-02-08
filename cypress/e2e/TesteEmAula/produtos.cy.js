/// <reference types="cypress" />

describe('Funcionalidade pagina de produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos/')
    });
    
    it('Deve selecionar um produto da lista', () => {
       
        cy.get('[class="product-block grid"]')
        //.first()
        //.last()
        //.eq(3)
        .contains('Aero Daily Fitness Tee')
        .click()
    });
    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade =  3 

        cy.get('[class="product-block grid"]').contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade)
    });

    it('Deve adicionar um produto ao carrinho - suporte de comando js', () => {
        cy.addProdutos('Ajax Full-Zip Sweatshirt','L', 'Red', 5)
    });

    it('Deve adicionar um produto ao carrinho - suporte de comando js', () => {
        cy.addProdutos('Abominable Hoodie','L', 'Red', 7)
    });


});
