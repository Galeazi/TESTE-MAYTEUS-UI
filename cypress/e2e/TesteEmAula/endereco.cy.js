/// <reference types="cypress" />
import enderecoPage from "../../support/page-objects/endereco.page";

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });
    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento('Pitoco', 'Silvio', 'Petz', 'Brasil', 'Rua luiz scott', '165', 'Barueri', 'São Paulo', '06440260', '11997849556', 'pitoco.silva@teste.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

});