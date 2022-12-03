# Criando test doubles de API’s automaticamente com stubby4node postman e newman

Este projeto é uma POC para uso da ferramenta stubby4node (https://www.npmjs.com/package/stubby), na realização de test doubles em automatizações com  postman/ newman

## installando o pacote npm 

- O Subby4Node tem uma estrutura bem simples e conta com um arquivo .yml onde informamos a rota e determinamos qual seu comportamento.
 
- Podemos ainda adicionar arquivos .json com o response body da requisição

 ## Para iniciar o stub digite o comando abaixo passando o nome do arquivo .yml  criado

`stubby -d cep.yml`

- Será exibido todas as rotas do arquivo .yml e ele vai disponibilizar o ip para acesso ao stub sendo necessário substituir este ip na url chamada 
http://0.0.0.0:8882
- Será disponibilizado também uma rota onde ele documenta todos os endpoints mapeados. 
http://0.0.0.0:8889/status/


## Script para copiar o response body das requisiçoes

- É possivel copiar todos os response body das requiçoes encadeas no postman rodando o comando 

`node  generateBody.js `

## Executando automação com os arquivo de stubby gerados

`node testWithStub.js`