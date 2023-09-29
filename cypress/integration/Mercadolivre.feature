Feature: Pesquisa de produtos no Mercado Livre
  Como um usuário do Mercado Livre
  Eu quero ser capaz de pesquisar produtos
  Para encontrar produtos de interesse

  Scenario: Pesquisa por um celular
    Given Estou na página inicial do Mercado Livre
    When Eu digito "celular" na barra de pesquisa
    And Eu pressiono Enter
    Then Devo ver resultados relacionados a "celular"