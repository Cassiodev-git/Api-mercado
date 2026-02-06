![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

API REST desenvolvida em **Node.js** utilizando **Express** e **Sequelize**, com foco em **organização de backend**, **separação de responsabilidades** e aplicação de **boas práticas de arquitetura**.

O projeto simula um **sistema de mercado**, permitindo o gerenciamento de **produtos, categorias e usuários**, além de contar com **autenticação via JWT** e **controle de acesso por middleware**.

Esta API foi construída com o objetivo de consolidar conceitos fundamentais de backend, servindo como base para futuras evoluções e integração com frontend.

⚠️ **Observação de segurança**

 As credenciais de conexão com o banco de dados e o segredo do JWT não estão incluídos no repositório.
 A aplicação utiliza variáveis de ambiente definidas em um arquivo `.env`, que não é versionado.

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- Sequelize
- MariaDB
- JavaScript (ES Modules)
- JWT (jsonwebtoken)
- dotenv

---

## 🧱 Arquitetura

A aplicação segue uma arquitetura em camadas, priorizando **manutenção**, **testabilidade** e **clareza de responsabilidades**.

.
├── config/          # Configurações da aplicação (DB, env)
├── controllers/     # Tratamento das requisições HTTP
├── middlewares/     # Autenticação, autorização e validações
├── models/          # Models e relacionamentos (ORM)
├── routes/          # Definição das rotas da API
├── services/        # Regras de negócio
└── server.js        # Inicialização do servidor


Fluxo da aplicação:

Requisição → Route → Middleware → Controller → Service → Model → Banco de Dados

---

### Responsabilidades

- **Routes**: definem os endpoints e direcionam a requisição
- **Middlewares**: validam autenticação, permissões e dados
- **Controllers**: lidam com Request/Response
- **Services**: concentram regras de negócio
- **Models**: representam as entidades e o acesso ao banco
- **Config**: centraliza configurações globais



---

## 📌 Endpoints disponíveis

### 🔹 Rota inicial

**GET /**  
- Retorna uma mensagem de boas-vindas da API

---

### 🔹 Produtos

**GET /produtos**  
- Lista todos os produtos cadastrados

**POST /produtos**  
- Cadastra um novo produto

---

### 🔹 Categorias

**GET /categorias**  
- Lista todas as categorias cadastradas

**POST /categorias**  
- Cadastra uma nova categoria

---

### 🔹 Usuários

**GET /usuarios**  
- Lista todos os usuários cadastrados

**POST /usuarios**  
- Cadastra um novo usuário

### 🔹 Login

**POST /login**  
- Realiza autenticação do usuário e retorna um token JWT

- Autenticação realizada via **JWT**

- Token deve ser enviado no header:

Authorization: Bearer <token>

- Middleware de autenticação protege rotas sensíveis
- Middleware de autorização verifica permissões de administrador


Exemplo de corpo da requisição:

```json
{
  "nome": "Arroz Branco 5kg",
  "preco": 27.90,
  "quantidade": 50
}


## ⚙️ Configuração do ambiente

### Clone o repositório:

git clone https://github.com/Cassiodev-git/Api-mercado

### Acesse o diretório
cd apiRest

### Instale as dependências
npm install

### Crie o arquivo .env
Crie o arquivo .env na raiz do projeto com as variáveis:

DB_HOST=localhost
DB_USER=usuario
DB_PASSWORD=senha
DB_NAME=nome_do_banco


Inicie o servidor:

npm start


A API será executada em:

http://localhost:4000


---

## 📈 Próximas evoluções

- Paginação e filtros
- Relacionamentos avançados
- Validação de dados com schemas
- Refresh Token
- Documentação com Swagger
- Integração com frontend


## 📝 Status do projeto

🚧 Em desenvolvimento

---

Desenvolvido por **Cássio Lúcio**

Projeto criado com foco em aprendizado prático de backend, arquitetura REST e segurança.

