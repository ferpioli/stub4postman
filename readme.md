# Criando test doubles de API’s automaticamente com stubby4node postman e newman
 
Este projeto é uma POC para uso da ferramenta stubby4node (https://www.npmjs.com/package/stubby), na realização de test doubles em automatizações com  postman/ newman
 
## instalando o pacote npm
 
- Para realizar a instalação do pacote execute o comando
`npm install -g stubby`
- O Subby4Node tem uma estrutura bem simples e conta com um arquivo .yml onde informamos a rota e determinamos qual seu comportamento.
`-  request:
    url: /ws/31275000/json/
    method: GET
   response:
    status: 200
    headers:
      content-type: application/json
    file: results/getCep-mineirao.json
   
-  request:
    url: /ws/20511050/json/
    method: GET
   response:
    status: 200
    headers:
      content-type: application/json
    file: results/getCep-maracana.json`
 
- Podemos ainda adicionar arquivos .json com o response body da requisição
    - No tópico abaixo temos um exemplo de como podemos criar este arquivo json do body automaticamente executando uma automação com newman.
 
 ## Para iniciar o stub digite o comando abaixo passando o nome do arquivo .yml  criado
 
`stubby -d cep.yml`
 
- Será exibido todas as rotas do arquivo .yml e ele vai disponibilizar o ip para acesso ao stub sendo necessário substituir este ip na url chamada
http://0.0.0.0:8882
- Será disponibilizado também uma rota onde ele documenta todos os endpoints mapeados.
http://0.0.0.0:8889/status/
 
 
## Script para copiar o response body das requisições
 
- É possível copiar todos os response body das requisições encadeadas no postman rodando o comando
 
`node  generateBody.js `
 
## Executando automação com os arquivo de stub gerados
 
`node testWithStub.js`
