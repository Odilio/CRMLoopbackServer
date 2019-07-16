# CRM Loopback
## Instalação

Necessário ter o Node.js >= 8.9.0 instalado.

```
git clone https://github.com/Odilio/CRMLoopbackApi.git
cd CRMLoopbackApi
npm i
npm start
```

A aplicação vai estar executando em  `http://127.0.0.1:3000`.


## Uso

Você pode usar a api usando o explorer que é gerado automaticamente pela url
http://[::1]:3000/explorer/.


## Comandos Importantes

lb4 app - Cria uma nova aplicação com o nome app
lb4 controller -	Adiciona um novo controller a aplicação
lb4 datasource -	Adiciona um novo datasource a aplicação
lb4 model -	Adiciona um novo model a aplicação
lb4 repository -	Adiciona um novo repository para um model e um datasource escolhido a aplicação
npm run build - Cria o esquema da migration a partir dos models do projeto
npm run migrate - Altera as tabelas do banco com base no esquema criado no build
npm run migrate -- --rebuild - Dropa todas as tabelas do banco e recria com base no esquema criado no build

## Expor o graphql

primeito instale o oasgraph
npm i --save oasgraph-cli

npx oasgraph http://localhost:3000/openapi.json

## Autenticação

Estamos usando JWT para autenticação, faça um post para /login passando email e senha e pegue o token JWT para acessar os outros métodos dos controllers
