Feature: Pesquisa no site da Globo
  Como um usuário do site da Globo
  Eu quero ser capaz de usar a funcionalidade de pesquisa
  Para encontrar notícias relevantes

  Scenario: Pesquisa por notícia
    Given Estou na página inicial do site da Globo
    When Eu digito "tecnologia" na barra de pesquisa
    And Eu pressiono Enter
    Then Devo ver resultados relacionados a "tecnologia"