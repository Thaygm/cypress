/// <reference types="cypress" />

describe("Testes para a home", () => {
  it("Deve renderizar 4 vagas", () => {
    //para acessar o site
    cy.visit("https://ebac-jobs-e2e.vercel.app/");
    //para acessar o li
    cy.get(".ListaVagas_vagas__gmNZn > li").should("have.length", 4);
  });

  it("Deve filtrar por fullstack", () => {
    //para acessar o site
    cy.visit("https://ebac-jobs-e2e.vercel.app/");
    //para acessar o campo com enter
    cy.get(".FormVagas_campo__E1ppF").type("fullstack{enter}");
    //para acessar o campo com click
    cy.get('button[type="submit"]').click();
    cy.get(".ListaVagas_vagas__gmNZn > li").should("have.length", 1);
  });
});
