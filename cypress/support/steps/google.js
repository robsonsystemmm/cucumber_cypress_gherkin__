describe('Pesquisa no Google', () => {
    it('Pesquisa por "Inteligência Artificial"', () => {
      cy.visit('https://www.google.com'); // Abre a página inicial do Google
  
      cy.get('#APjFqb').type('Inteligência Artificial'); // Localiza o campo de pesquisa e insere "Inteligência Artificial"
      cy.get('#APjFqb').type('{enter}'); // Pressiona a tecla Enter
  
      cy.url().should('include', '/search'); // Verifica se a URL possui '/search' (página de resultados)
      cy.get('h3').should('contain', 'Inteligência Artificial'); // Verifica se a palavra "Inteligência Artificial" está nos resultados
    });
  });