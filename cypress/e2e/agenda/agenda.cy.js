/// <reference types="cypress" />

describe("Testes funcionamento de agenda de contatos", () => {

    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/");
        cy.screenshot('tela-principal-agenda');
    });
    
    it("Adicionar contatos à agenda", () => {
        cy.get('input[placeholder = "Nome"]').type("thaisa mendes");
        cy.get('input[placeholder = "E-mail"]').type("thata@gmail.com")
        cy.get('input[placeholder = "Telefone"]').type("61-99999-8888"),
            cy.get(".adicionar").click(),
            cy.get('input[placeholder = "Nome"]').type("Renato Alvs"),
            cy.get('input[placeholder = "E-mail"]').type("rns@gmail.com"),
            cy.get('input[placeholder = "Telefone"]').type("61-77777-6666"),
            cy.get(".adicionar").click(),
            cy.get('input[placeholder = "Nome"]').type("Luiz Albrt"),
            cy.get('input[placeholder = "E-mail"]').type("Luizi@gmal.com"),
            cy.get('input[placeholder = "Telefone"]').type("61-12345-9874"),
            cy.get(".adicionar").click();
    });

    it("Deletar contato indesejado", () => {
        cy.on("contato", (conteudo) => {
            expect(conteudo).contain("Renato Alvs");
            cy.get("delete").click();
        })
    });

    it("Alteração de um contato", () => {
        cy.on("contato", (conteudo) => {
            expect(conteudo).contain("Luiz Albrt");
            cy.get("edit").click();
            cy.get('input[placeholder = "Nome"]').type("Luiz Alberto"),
            cy.get('input[placeholder = "E-mail"]').type("Luiziho@gmail.com"),
                cy.get('input[placeholder = "Telefone"]').type("61-12345-9876"),
                cy.get("alterar").click();

        })
    });
});