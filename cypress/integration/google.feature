Feature: Pesquisa no Google
  Como um usuário do Google
  Eu quero ser capaz de pesquisar na web
  Para encontrar informações relevantes

  Scenario: Pesquisa por "Inteligência Artificial"
    Given Estou na página inicial do Google
    When Eu digito "Inteligência Artificial" na barra de pesquisa
    And Eu pressiono Enter
    Then Devo ver resultados relacionados a "Inteligência Artificial"