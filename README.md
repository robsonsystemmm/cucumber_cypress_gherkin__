1 - Montar ambiente de trabalho com as bibliotecas necessarias.
    1.1. instalar o node js https://nodejs.org/en/download
    1.2. instalar o cucumber npm install -g cucumber
    1.3. ferramenta de integração do site com o cucumber
            npm install cypress@9.7.0 cypress-cucumber-preprocessor
    1.4. packge.json npm init -y

2 - configurar o Cucumber no Cypress

    2.1. Adicione ao arquivo cypress/plugins/index.js o seguinte script:
        const cucumber = require(‘cypress-cucumber-preprocessor’).default
        module.exports = (on, config) => { On(‘file:preprocessor’, cucumber()) } 


    2.2. Configurar pasta dos arquivos de teste editando o arquivo package.json: colar o script

{

    "scripts": {   "test": cypress@9.7.0 run --browser chrome },
    
    "cypress-cucumber-preprocessor": {  "step_definitions": "cypress/support/steps“ },
    
    "dependencies": {
    
        "cypress": "^9.7.0",
        
        "cypress-cucumber-preprocessor": "^4.3.1"
        
    }
}

3 - Instalar xpath npm install -D cypress-xpath
    No arquivo index.js da pasta support adicionar:
    require('cypress-xpath');


Execução manual: npx cypress open
Execução automatica: npm test


4. Após a configuração do ambiente, vamos aos testes.
    4.1. Feature: Pesquisa no site da Globo
         Como um usuário do site da Globo
         Eu quero ser capaz de usar a funcionalidade de pesquisa
         Para encontrar notícias relevantes

        Scenario: Pesquisa por notícia
            Given Estou na página inicial do site da Globo
            When Eu digito "tecnologia" na barra de pesquisa
            And Eu pressiono Enter
            Then Devo ver resultados relacionados a "tecnologia"

    4.2. Feature: Pesquisa de produtos no Mercado Livre
            Como um usuário do Mercado Livre
            Eu quero ser capaz de pesquisar produtos
            Para encontrar produtos de interesse

        Scenario: Pesquisa por um celular
            Given Estou na página inicial do Mercado Livre
            When Eu digito "celular" na barra de pesquisa
            And Eu pressiono Enter
            Then Devo ver resultados relacionados a "celular"

    4.3. Feature: Pesquisa no Google
            Como um usuário do Google
            Eu quero ser capaz de pesquisar na web
            Para encontrar informações relevantes

        Scenario: Pesquisa por "Inteligência Artificial"
            Given Estou na página inicial do Google
            When Eu digito "Inteligência Artificial" na barra de pesquisa
            And Eu pressiono Enter
            Then Devo ver resultados relacionados a "Inteligência Artificial"
    
