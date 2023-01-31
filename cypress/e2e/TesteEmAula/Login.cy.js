/// <reference types="cypress" />

context('Funcionalidade Login', ()=>{


    it('Deve fazer login com sucesso', () => {
        
        cy.visit('http://lojaebac.ebaconline.art.br/')
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac (não é aluno_ebac? Sair)')

        
    });

    it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/')
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type('aluno_ebac@teste')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro')

    });

    it('Deve exibir uma mensagem de erro ao inserir senha invalido', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/')
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro')
    
    });
    
    })





