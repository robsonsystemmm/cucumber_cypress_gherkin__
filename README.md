Primeiramente precisaremos fazer a configuração do ambinete de trabalho.

para a realização dessa tarefa será necessario a instalação de algumas bibliotecas.

para começar, vamos fazer a instalacao do cucumber, para realizar a instalação:
npm install -g cucumber
apos a instalacao do cucumber, se faz necessario a instalação da ferramenta de integração do site com o cucumber.
npm install cypress@9.7.0 cypress-cucumber-preprocessor
agora as configuraçõe inicials
npm init -y

configurar o Cucumber no Cypress:

onfigurar cypress-cucumber-preprocessor: 

1. Adicione ao arquivo cypress/plugins/index.js o seguinte script:


    const cucumber = require(‘cypress-cucumber-preprocessor’).default

    module.exports = (on, config) => { On(‘file:preprocessor’, cucumber()) } 


2. Configurar pasta dos arquivos de teste editando o arquivo package.json:

{

    "scripts": {   "test": cypress@9.7.0 run --browser chrome },
    
    "cypress-cucumber-preprocessor": {  "step_definitions": "cypress/support/steps“ },
    
    "dependencies": {
    
        "cypress": "^9.7.0",
        
        "cypress-cucumber-preprocessor": "^4.3.1"
        
    }
}

Execução manual: npx cypress open
Execução autom: npm test

Instalar xpath
npm install -D cypress-xpath

No arquivo index.js da pasta support adicionar:
require('cypress-xpath');

Apos o ambiente esta configurado, vamos aos testes.

Foram criados basicamente 3 testes, todos eles de pesquisa.
site da globo
site do mercado livre
site do google
