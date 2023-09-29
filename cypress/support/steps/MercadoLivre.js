/* global Given, Then, When */

const url = Cypress.config("baseUrl")

describe('Pesquisa de produtos no Mercado Livre', () => {
  it('Pesquisa por um celular', () => {
    cy.visit('https://www.mercadolivre.com.br'); // Abre a página inicial do Mercado Livre

    cy.get('.nav-search-input').type('celular'); // Localiza o campo de pesquisa e insere "celular"
    cy.get('.nav-icon-search').click(); // Clica no ícone de pesquisa

    cy.url().should('include', '/search/'); // Verifica se a URL possui '/search/' (página de resultados)
    cy.get('.ui-search-title').should('contain', 'celular'); // Verifica se a palavra "celular" está nos resultados
  });
});