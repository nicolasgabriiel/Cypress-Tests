/// <reference types="cypress" />

describe('teste de inclusão, edição e remoção de contatos na Página Contatos React', () => {
    beforeEach(()=>{
        cy.visit('https://agenda-contatos-react.vercel.app/') 
        
    })
    it('incluir um novo contato', ()=>{
        cy.get('input[type="text"]').type('Nicolas Gabriel')
        cy.get('input[type="email"]').type('nicolasgbriel.developer@gmail.com')
        cy.get('input[type="tel"]').type('51992279251')
        cy.get('button[type="submit"]').click()
        cy.get('.sc-eDDNvR > :nth-child(1)').should('contain.text', 'Nicolas Gabriel')
    })
    it('editar um contato', () =>{
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').type(' Dev')
        cy.get('button[type="submit"]').click()
        cy.get('.sc-eDDNvR > :nth-child(1)').should('contain.text', 'Nicolas Gabriel Dev')
    })
    it('remover um contato', ()=>{
        cy.get('.delete').click()
        cy.get('h2').should('contain.text', '0')
    })
})