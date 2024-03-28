/// <reference types="cypress" />

describe("Testes para a página de candidatura", () => {
  //??
  beforeEach(() => {
    cy.visit("https://ebac-jobs-e2e.vercel.app/");
  });

  it("Deve levar o candidato até o formulário de inscrição", () => {
    cy.get(".Vaga_vagaLink__DeFkk").first().click();
      cy.get("input").should("have.length", 7);
      //screenshot
      cy.screenshot('tela-inscricao');
  });

  it("Deve preencher o formulário de inscrição", () => {
    cy.get(".Vaga_vagaLink__DeFkk").first().click(),
      cy.get('input[name = "nome-completo"]').type("thaisa mendes"),
      cy.get('input[name = "email"]').type("thay.gm@live.com"),
      cy.get('input[name = "telefone"]').type("61981014187"),
      cy.get('input[name = "endereco"]').type("lago norte, qi99, brasil"),
      cy.get("#linux").check(),
      cy.get('select[name = "escolaridade"]').select("outros"),
        cy.get(".Aplicacao_button__tw2AE").click(),
        

      cy.on("window:alert", (conteudo) => {
        expect(conteudo).contain("Obrigado pela candidatura!");
      });

      cy.screenshot('tela-inscricao-preenchido');
  });
});
