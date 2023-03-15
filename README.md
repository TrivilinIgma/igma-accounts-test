# Cadastro de Clientes

Este é um projeto de uma aplicação que permite realizar o cadastro de clientes, busca de clientes por CPF e listagem de clientes.

## Como rodar a aplicação para testar

Para testar a aplicação, basta seguir os seguintes passos:

- Clone o repositório para a sua máquina
- Certifique-se de ter o Docker e o Docker Compose instalados na sua máquina
- Abra o terminal na pasta do projeto e execute o comando docker-compose up
- Acesse a aplicação no seu navegador através da url http://localhost:3000

## Tecnologias utilizadas

As tecnologias utilizadas neste projeto são:

- **ExpressJS**: um framework para criação de aplicações web em Node.js
- **Prisma**: um ORM (Object-Relational Mapping) para Node.js e TypeScript
- **MySQL**: um sistema de gerenciamento de banco de dados relacional
- **Docker**: uma plataforma que permite criar, rodar e gerenciar containers de aplicação de forma isolada

## Rotas do projeto

**BASE URL:** http://localhost:3000

A aplicação possui as seguintes rotas:

### POST /clients

Rota responsável por cadastrar um novo cliente na base de dados.

**Body**
- **name**: string - Nome completo do cliente
- **birthday**: string - Data de nascimento do cliente (formato YYYY-MM-DD)
- **cpf**: string - CPF do cliente (somente números)

### GET /clients/find-by-cpf

Rota responsável por buscar um cliente na base de dados pelo CPF.

**Query Params**
- **cpf**: string - CPF do cliente a ser buscado (somente números)

### GET /clients

Rota responsável por listar todos os clientes cadastrados na base de dados.



