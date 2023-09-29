describe('Pesquisa no site da Globo', () => {
    it('Pesquisa por notícia', () => {
      cy.visit('https://www.globo.com'); // Abre a página inicial do site da Globo
  
      cy.get('.header-search-input').type('tecnologia'); // Localiza o campo de pesquisa e insere "tecnologia"
      cy.get('.header-search-input').type('{enter}'); // Clica no botão de pesquisa
  
      cy.url().should('include', '/busca/'); // Verifica se a URL possui '/busca/' (página de resultados)
      cy.get('.search-results').should('contain', 'tecnologia'); // Verifica se a palavra "tecnologia" está nos resultados
    });
  });