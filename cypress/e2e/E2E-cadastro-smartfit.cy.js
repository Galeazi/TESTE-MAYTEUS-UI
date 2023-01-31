/// <reference types="cypress"/>

describe('Teste de ERRO na em smartfit', () => {

    it('Deve fazer o cadastro e adezão do cliente na rede', () => {
        
        // Abrindo o site
        cy.visit('https://www.smartfit.com.br/')
        cy.get('#newv4CookieConsentBtn').click()
        cy.get('.new-plans-section-container > .new-home-v4-cta-wrapper > .new-home-v4-btn').click()

        // buscando a academia mais proxima 
        cy.get('#address-input').type('06440260{enter}')
        cy.get(':nth-child(1) > .Locations__item_wrap > .Locations__item > .Locations__item__content > .Locations__content__wrapper > .Locations__buy-button > .Button').click()
        cy.get('#Select-pane--smart > :nth-child(1) > :nth-child(1) > .Checkbox > .Checkbox__element').click()
        cy.get('#checkbox-doc').click()
        cy.get('.purchase_summary__button > .Button').click()

        // cadastro de cliente 
        cy.get('#person_name').type('Mateus Galeazi de Oliveira')
        cy.get('.Form__wrapper--email > .Input > .Input__field').type('mateusgaleazi01@hotmail.com')
        cy.get('#person_document_cpf').type('47480117850')
        cy.get('#person_birthday').type('04072000')
        cy.get('.iti > .Input__field').type('11997849554')

        cy.get('#male').click()
        cy.get(':nth-child(1) > .Text > label').click()

        cy.get('#btn-submit-checkout-person').click()

    });


});